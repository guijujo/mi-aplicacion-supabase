import { EditProductoForm } from "@/components/EditProductoForm";
import { createClient } from "@/utils/supabase/server";

export default async function Editproducto({ params }: any) {
  const supabase = createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("name", params.id)
    .single();

  return <EditProductoForm producto={data} />;
}
