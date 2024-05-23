import { DeleteArticuloButton } from "@/components/delete-articulo-button";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function ArticuloPorIdPage({ params }: any) {
  const supabase = createClient();
  const { data } = await supabase
    .from("productos")
    .select("*")
    .eq("name", params.id)
    .single();

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-4">
      <h3>{data?.name}</h3>

      <Image src={data?.image} width={100} height={100} alt={data?.name} />

      <Link href={`/dashboard/productos/${data?.name}/edit`}>Editar</Link>
      <DeleteArticuloButton articulo={data} />
    </div>
  );
}
