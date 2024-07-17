'use client'
import { GetProducts } from "@/api/GetProduct";
import { Products } from "@/types/ProductsTypes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Newest() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetProducts("/products");
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950">
            Novos Produtos
          </h2>

          <Link className="flex items-center gap-x-1 text-primary" href="/seeall">
            Ver todos
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid gap-y-10 mt-6 grid-cols-1 gap-x-6 sm:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={index}>
              <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                <Image
                  src={product.imageUrl}
                  width={300}
                  height={300}
                  alt='Product Image'
                  className='w-full h-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
