"use client";

import { createClient } from "@/utils/supabase/client";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const CreateProductoForm = () => {
  const supabase = createClient();
  const router = useRouter();

  return (
    <Container>
      <form
        className="flex flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const name = formData.get("name")?.toString();
          const image = formData.get("image")?.toString();
          const description = formData.get("description")?.toString();
          const categoria = formData.get("categoria")?.toString();

          await supabase.from("products").insert({ name, image, description, categoria });

          router.push("/dashboard");
        }}
      >
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Descripción</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Categoria</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Foto</FormLabel>
          <Input type="text" />
        </FormControl>

        <Button className="" colorScheme="teal" size="lg" type="submit" mt="4">
          Enviar
        </Button>
      </form>
    </Container>
  );
};
