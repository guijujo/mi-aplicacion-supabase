import { EditArticuloForm } from "@/components/EditArticuloForm";
import { createClient } from "@/utils/supabase/server";

export default async function EditArticulo({ params }: any) {
  const supabase = createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("name", params.id)
    .single();

  return <EditArticuloForm articulo={data} />;
}
