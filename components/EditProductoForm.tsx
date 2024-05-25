"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface EditProductoFormProps {
  producto: any;
}

export const EditProductoForm = ({ producto }: EditProductoFormProps) => {
  console.log(producto)
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString();
    const image = formData.get("image")?.toString();
    const price = formData.get("price")?.toString();
    const description = formData.get("description")?.toString();
    const category = formData.get("category")?.toString();

    await supabase.from("products").update({ name, image, price, description, category }).eq("id",producto.id).select();


    router.push("/dashboard");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <label className="uppercase">Nombre del producto</label>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        className="text-black"
        defaultValue={producto?.name}
      />      
      <label className="uppercase">Imágen del producto</label>
      <input
        name="image"
        type="text"
        placeholder="Imagen"
        className="text-black"
        defaultValue={producto?.image}
      />
      <label className="uppercase">Precio</label>
      <input
        name="price"
        type="text"
        placeholder="Precio"
        className="text-black"
        defaultValue={producto?.price}
      />
      <label className="uppercase">Descripción</label>
      <input
        name="Description"
        type="text"
        placeholder="Descripcion"
        className="text-black"
        defaultValue={producto?.description}
      />
      <label className="uppercase">Categoria</label>
      <input
        name="Category"
        type="text"
        placeholder="Categoria"
        className="text-black"
        defaultValue={producto?.category}
      />
      <button type="submit">Editar</button>
    </form>
  );
};
