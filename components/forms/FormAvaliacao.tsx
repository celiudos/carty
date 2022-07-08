import { Select, MenuItem, Input } from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const defaultValues = {
  select: "",
  input: "",
};

interface IFormInput {
  select: string;
  input: string;
}

export default function FormAvaliacao() {
  const { register, handleSubmit, setValue, reset, watch } =
    useForm<IFormInput>({
      defaultValues,
    });
  const selectValue = watch("select");
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("select");
  }, [register]);

  const handleChange = (e: any) => setValue("select", e.target.value);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select value={selectValue} onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
      <Input {...register("input")} />

      <button type="button" onClick={() => reset({ ...defaultValues })}>
        Reset
      </button>
      <input type="submit" />
    </form>
  );
}
