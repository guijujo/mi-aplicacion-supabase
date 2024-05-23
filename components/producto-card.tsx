'use client';

import { Image } from '@chakra-ui/next-js';
import { Card, CardBody, Divider, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const ProductoCard = ({ productos }: any) => {
  const router = useRouter();

  return (
    <Card
      maxW="sm"
      onClick={() => {
        router.push(`/dashboard/articulos/${productos.title}`);
      }}
    >
      <Image
        width={50}
        height={50}
        src={productos.image}
        alt={productos.name}
        borderRadius='lg'
        className="w-10 h-10"
      />
      <Divider />
      <CardBody>
        <Heading size="md">{productos.name}</Heading>
      </CardBody>
    </Card>
  );
};