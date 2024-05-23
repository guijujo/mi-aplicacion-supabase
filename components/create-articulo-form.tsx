'use client';

import { createClient } from '@/utils/supabase/client';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const CreateArticuloForm = () => {
  const supabase = createClient();
  const router = useRouter();

  return (
    <Container>
      <form
        className="flex flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const name = formData.get('name')?.toString();
          const flag = formData.get('flag')?.toString();

          await supabase.from('articulos').insert({ name, flag });

          router.push('/dashboard');
        }}
      >
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Foto</FormLabel>
          <Input type="text" />
        </FormControl>

        <Button colorScheme="teal" size="lg" type="submit" mt="4">
          Enviar
        </Button>
      </form>
    </Container>
  );
};