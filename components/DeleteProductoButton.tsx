'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const DeleteProductoButton = ({ producto }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const onDelete = async () => {
    await supabase.from('productos').delete().eq('id', producto.id);

    router.push('/dashboard');
  };

  return (
    <button onClick={onDelete}>Eliminar</button>
  );
}