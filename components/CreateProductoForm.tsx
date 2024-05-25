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
          const category = formData.get("category")?.toString();

          const { error } = await supabase.from("products").insert({ name, image, description, category }).select();

          router.push("/dashboard");
        }}
      >
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input className="rounded-xl" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Imágen</FormLabel>
          <Input className="rounded-xl" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Descripcion</FormLabel>
          <Input className="rounded-xl" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Categoria</FormLabel>
          <Input className="rounded-xl" type="text" />
        </FormControl>

        <Button className="" colorScheme="teal" size="lg" type="submit" mt="4">
          Enviar
        </Button>
      </form>
    </Container>
  );
};
