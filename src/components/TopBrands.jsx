import Image from "next/image";


const Products = async () => {
  const res = await fetch("https://suncard.vercel.app/topbrand.json", {
    cache: "no-store",
  });

  const data = await res.json();


  return (
    <div className=" ">



      <h1 className="text-5xl font-bold mx-auto text-center py-5">Summer Care Tips Top Brands</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


        {data.map((product) => (
          <div
            key={product.id}
            className="card bg-purple-100 shadow-xl hover:shadow-xl transition"
          >
            <div className="card-body">

              <Image
                src={product.image}
                alt={product.name || product.title || "top brand image"}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg"
              />



              <h2 className="card-title">
                
                {product.title}

              </h2>

              <p className="text-yellow-500">
                {product.description}
              </p>




            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Products;

