import { useForm } from "react-hook-form";

import { useSetRecoilState } from "recoil";
import { fetchCharInfo } from "../api";
import { CharacterState } from "../atoms";
function CharSearchForm() {
  const { register, handleSubmit, setValue } = useForm();

  interface ICharacterInfo {
    ["ServerName"]: string;
    ["CharacterName"]: string;
    ["CharacterLevel"]: number;
    ["CharacterClassName"]: string;
    ["ItemAvgLevel"]: string;
    ["ItemMaxLevel"]: string;
  }
  const setCharacterState = useSetRecoilState(CharacterState);
  const OnSubmit = async ({ Search }: any) => {
    const data = await fetchCharInfo(Search);

    setCharacterState((prev) => {
      return [...prev, ...data.map((value: any) => value["CharacterName"])];
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
