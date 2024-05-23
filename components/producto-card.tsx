'use client';

import { Image } from '@chakra-ui/next-js';
import { Card, CardBody, Divider, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const ProductoCard = ({ producto }: any) => {
  const router = useRouter();

  return (
    <Card
      maxW="sm"
      onClick={() => {
        router.push(`/dashboard/productos/${producto.name}`);
      }}
    >
      <Image
        width={50}
        height={50}
        src={producto.image}
        alt={producto.name}
        borderRadius='lg'
        className="w-10 h-10"
      />
      <Divider />
      <CardBody>
        <Heading size="md">{producto.name}</Heading>
      </CardBody>
    </Card>
  );
};