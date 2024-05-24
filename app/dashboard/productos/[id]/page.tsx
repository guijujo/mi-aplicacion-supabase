import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { DeleteProductoButton } from "@/components/DeleteProductoButton";

export default async function ProductoPorIdPage({ params }: any) {
  const supabase = createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .single();
    
    console.log(data);
    

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-4">
      <h3 className="uppercase">{data?.name}</h3>

      <Image
        src={data?.image}
        width={100}
        height={100}
        alt={data?.name}
      />

      <Link href={`/dashboard/productos/${data?.name}/edit`}>Editar</Link>
      <DeleteProductoButton producto={data} />
    </div>
  );
}
