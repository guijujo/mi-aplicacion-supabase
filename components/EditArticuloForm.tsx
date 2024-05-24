"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface EditProductoFormProps {
  producto: any;
}

export const EditArticuloForm = ({ producto }: EditProductoFormProps) => {
  const supabase = createClient();
  const router = useRouter();
  console.log(producto)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString();
    const foto = formData.get("foto")?.toString();

    await supabase.from("products").update({ name, foto });

    router.push("/dashboard");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        className="text-black"
        defaultValue={producto?.name}
      />
      <input
        name="foto"
        type="text"
        placeholder="Foto"
        className="text-black"
        defaultValue={producto?.foto}
      />
      <button type="submit">Editar</button>
    </form>
  );
};
