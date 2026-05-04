import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const res = await fetch("https://suncard.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        🛍️ All Products ({data?.length})
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((product) => (
          <div
            key={product.id}
            className="bg-purple-100 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >

            {/* Image */}
            <Image
              src={product.image}
              alt={product.name || "product image"}
              width={400}
              height={300}
              className="w-full h-[230px] "
            />

            {/* Content */}
            <div className="p-4 space-y-2">

              <h2 className="text-lg font-semibold">
                {product.name}
              </h2>

              <p className="font-bold text-gray-700">
                Price: ${product.price}
              </p>

              <p className="text-yellow-600">
                ⭐ {product.rating}
              </p>

              {/* Button */}
              <Link href={`/product/${product.id}`}>
                <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Products;