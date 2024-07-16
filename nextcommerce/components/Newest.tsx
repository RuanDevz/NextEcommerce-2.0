import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Newest() {
  return (
    <div className="bg-white">
      <div className="mx-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950">
            Novos Produtos
          </h2>

          <Link
            className="text-primary flex items-center gap-x-1"
            href="/seeall"
          >
            Ver todos{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid-y-10 mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-4 xl:gap-x-8">
          {/* Fazer o map dos Produtos */}
          {/*{data.map((product,index) => (
            <div key={index}>
            <div classname='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
            <Image src={product.imageUrl} width={300} height={300} alt='Producr Image' classname='w-full h-full object-cover object-center lg:h-full lg:w-full'
            </div>
            </div>
            ))} */}

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={/* Slug */}>
                        {/* Product.name*/}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{/* Product Categoryname*/}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{/* Product Price*/}</p>

            </div>
        </div>
      </div>
    </div>
  );
}
