import Image from "next/image";
import Image1 from ".././public/Image1.jpg";
import Image2 from "../public/Image2.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="lg:pt-38 mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Moda top por um preço top!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Vendemos apenas os produtos mais exclusivos e de alta qualidade para
            você. Somos os melhores, então venha comprar conosco.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:mt-0">
            <Image
              src={Image1}
              width={700}
              height={700}
              priority
              quality={100}
              className="h-full w-full object-cover object-center"
              alt="Destaque"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={Image2}
              width={700}
              priority
              height={700}
              quality={100}
              className="h-full w-full object-cover object-center"
              alt="Destaque"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div>
    </section>
  );
}
