import { useForm } from "react-hook-form";

import { useSetRecoilState } from "recoil";
import { fetchCharInfo } from "../../api";
import { CharacterState, ICharacter } from "../../atoms";

function CharSearchForm() {
  const { register, handleSubmit, setValue } = useForm();

  const setCharacterState = useSetRecoilState(CharacterState);

  const OnSubmit = async ({ Search }: any) => {
    const data: ICharacter[] = await fetchCharInfo(Search);
    if (data === null) {
      console.log("ERROR# Fetch 데이터가 null이기때문에 발생하였음.");
      /*@TODO
        fetchCharInfo()가 null이 반환되는 것은
        유효하지 않은 닉네임(Search)을 인수로 받아서 그렇다.
        해당 오류를 페이지에서 해결하는 UI를 만들 것
      */
      return;
    }
    for (var i = 0; i < data.length; i++) {
      data[i].Check = [
        { checkName: "A", isChecked: false },
        { checkName: "B", isChecked: false },
        { checkName: "C", isChecked: false },
        { checkName: "D", isChecked: false },
        { checkName: "E", isChecked: false },
      ];
    }
    setCharacterState((prev) => {
      return newData;
    });
    setValue("Search", "");

    const newData = data.sort(function (a, b) {
      return parserToInt(b.ItemAvgLevel) - parserToInt(a.ItemAvgLevel);
    });

    function parserToInt(string: string | undefined) {
      if (string === undefined) return 0;
      return parseInt(string.replace(",", ""));
    }
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <input {...register("Search")} />
      <button>search</button>
    </form>
  );
}

export default CharSearchForm;
