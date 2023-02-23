import { useForm } from "react-hook-form";

import { useSetRecoilState } from "recoil";
import { fetchCharInfo } from "../api";
import { CharacterState } from "../atoms";

function CharSearchForm() {
  const { register, handleSubmit, setValue } = useForm();

  const setCharacterState = useSetRecoilState(CharacterState);
  const OnSubmit = async ({ Search }: any) => {
    const data = await fetchCharInfo(Search);

    for (var i = 0; i < data.length; i++) {
      data[i].check = [
        { checkName: "발탄", isChecked: false },
        { checkName: "비아", isChecked: false },
        { checkName: "쿠크", isChecked: false },
        { checkName: "아브렐슈드", isChecked: false },
        { checkName: "일리아칸", isChecked: false },
      ];
    }

    setCharacterState((prev) => {
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
