import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const res = await fetch("https://suncard.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className=" px-20 py-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        🛍️ All Products({data.length})
      </h1>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                
        {data.map((product) => (
          <div
            key={product.id}
            className="card bg-purple-100 shadow-xl hover:shadow-xl transition"
          >
            <div className="card-body">

              <Image
       src={product.image}
       alt={product.name}
       width={300}
       height={300}
       className="w-full h-[300px] 
          transition duration-300"

           
        />
             
                
                
              <h2 className="card-title">
                {product.name}
          
              </h2>

              <p className="text-yellow-500">
                ⭐ {product.rating}
              </p>

              <p className="font-bold">
                ${product.price}
              </p>

              <div className=" ">
                <Link href={`/products/${product.id}`}>
                  <button className="btn btn-block btn-primary rounded-full">
                    View Details
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Products;

