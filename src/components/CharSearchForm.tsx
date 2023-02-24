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
        { checkName: "A", isChecked: false },
        { checkName: "B", isChecked: false },
        { checkName: "C", isChecked: false },
        { checkName: "D", isChecked: false },
        { checkName: "E", isChecked: false },
      ];
    }
    console.log("Fectch:", data);
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
