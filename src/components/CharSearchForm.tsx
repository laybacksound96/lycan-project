import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { fetchCharInfo } from "../api";
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

  const OnSubmit = async (input: any) => {
    const { data } = useQuery<ICharacterInfo[]>(
      "CharInfo",
      fetchCharInfo("asd")
    );
    console.log(data);

    setValue("Search", "");
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <input {...register("Search")} />
      <button>aa</button>
    </form>
  );
}

export default CharSearchForm;
