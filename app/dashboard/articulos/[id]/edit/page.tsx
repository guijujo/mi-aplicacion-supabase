import { EditArticuloForm } from '@/components/edit-articulo-form';
import { createClient } from '@/utils/supabase/server';

export default async function EditArticulo({ params }: any) {
  const supabase = createClient();
  const { data } = await supabase
    .from('articulos')
    .select('*')
    .eq('name', params.id)
    .single();

  return <EditArticuloForm articulo={data} />;
}