import productData from "@/data/productsData";
import Image from "next/image";
import Product from "./Product";

const ShopProducts = () => {
  return (
    <section className="mb-20">
      <div className="px-3 md:px-7 w-100 mx-auto xl:w-4/6">
        <div className="mb-10 font-fredoka text-2xl">
          <div className="flex justify-center -mb-1">
            <Image
              className="h-5"
              src="/heading-icon.svg"
              width={18}
              height={24}
              alt="heading"
            />
          </div>
          <div className="text-center">
            <span className="text-red-500 font-semibold font-fredoka">
              Shop
            </span>{" "}
            <span className="text-custom-purple font-semibold font-fredoka">
              Products
            </span>
          </div>
        </div>
        <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {productData.map((product, index) => {
            return (
              <Product
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </div>
        <div className="flex gap-2 mt-6 justify-center align-middle">
          <div className="bg-pink p-2 rounded-full">
            <Image
              src="/arrow-left.svg"
              width={20}
              height={12}
              alt="arrow left"
            />
          </div>
          <div className="bg-pink p-2 rounded-full">
            <Image
              src="/arrow-right.svg"
              width={20}
              height={12}
              alt="arrow right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;
