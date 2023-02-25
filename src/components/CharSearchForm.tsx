import { useForm } from "react-hook-form";

import { useSetRecoilState } from "recoil";
import { fetchCharInfo } from "../api";
import { CharacterState, ICharacter } from "../atoms";

function CharSearchForm() {
  const { register, handleSubmit, setValue } = useForm();

  const setCharacterState = useSetRecoilState(CharacterState);

  const OnSubmit = async ({ Search }: any) => {
    const data: ICharacter[] = await fetchCharInfo(Search);
    if (data === null) {
      console.log("ERROR# Fetch 데이터가 null이기때문에 발생하였음.");
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

    //너무졸리다@02-25
    console.log(data);
    data.map((content) => {});
    setCharacterState(() => {
      return data;
    });

    setValue("Search", "");
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <input {...register("Search")} />
      <button>search</button>
    </form>
  );
}

export default CharSearchForm;
