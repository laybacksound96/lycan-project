import { useForm } from "react-hook-form";

import { useSetRecoilState } from "recoil";
import { fetchCharInfo } from "../api";
import { CharacterState } from "../atoms";
function CharSearchForm() {
  const { register, handleSubmit, setValue } = useForm();

  const setCharacterState = useSetRecoilState(CharacterState);
  const OnSubmit = async ({ Search }: any) => {
    const data = await fetchCharInfo(Search);

    setCharacterState((prev) => {
      return [...data.map((value: any) => value["CharacterName"])];
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
