import { useForm } from "react-hook-form";

function CharSearchForm() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (aa: any) => {
    console.log(aa);
    setValue("Search", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Search")} />
      <button>aa</button>
    </form>
  );
}

export default CharSearchForm;
