"use client";

import { Image } from "@chakra-ui/next-js";
import { Card, CardBody, Divider, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const ProductoCard = ({ producto }: any) => {
  const router = useRouter();

  return (
    <Card
      maxW="sm"
      onClick={() => {
        router.push(`/dashboard/productos/${producto.name}`);
      }}
      className="Flex flex-col items-center"
    >
      <Image
        width={100}
        height={100}
        src={producto.image}
        alt={producto.name}
        borderRadius="lg"
        className="w-10 h-10 mb-6"
      />
      <Divider />
      <CardBody>
        <Heading size="md">{producto.name}</Heading>
      </CardBody>
    </Card>
  );
};
