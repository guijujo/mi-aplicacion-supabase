import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { ProductoCard } from "@/components/ProductoCard";
import { DeleteArticuloButton } from "@/components/DeleteArticuloButton";

export default async function ArticuloPorIdPage({
  producto,
}: {
  producto: { id: string };
}) {
  const supabase = createClient();
  const { data, error } = await supabase.from("products").select("*").single();

  if (error) throw error;

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-4">
      <h3 className="uppercase">Producto</h3>

      <ProductoCard producto={data} />

      <Link href={`/dashboard/productos/${data?.id}/edit`}>Editar</Link>
      <DeleteArticuloButton articulo={data} />
    </div>
  );
}
