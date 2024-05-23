'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

interface EditArticuloFormProps {
  articulo: any;
}

export const EditArticuloForm = ({ articulo }: EditArticuloFormProps) => {
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.toString();
    const foto = formData.get('foto')?.toString();

    await supabase.from('articulos').update({ name, foto }).eq('id', articulo.id);

    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        className="text-black"
        defaultValue={articulo?.name}
      />
      <input
        name="foto"
        type="text"
        placeholder="Foto"
        className="text-black"
        defaultValue={articulo?.foto}
      />
      <button type="submit">Editar</button>
    </form>
  );
};