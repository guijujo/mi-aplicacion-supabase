'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const DeleteArticuloButton = ({ articulo }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const onDelete = async () => {
    await supabase.from('articulos').delete().eq('id', articulo.id);

    router.push('/dashboard');
  };

  return (
    <button onClick={onDelete}>Eliminar</button>
  );
}