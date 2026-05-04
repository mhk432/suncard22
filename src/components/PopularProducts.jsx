import Image from "next/image";
import Link from "next/link";

const PopularProducts = async () => {
    const res = await fetch("https://suncard.vercel.app/data.json")
    const data = await res.json();
    const popularProducts = data.slice(0, 3)
    
    return (
        <div>
            <div className="mt-10 text-3xl font-bold text-center mb-8">
                🔥 Popular Products
            </div>
            <div >


             
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {popularProducts.map((product) => (
                        <div
                            key={product.id}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition"
                        >
                            {/* Image */}
                             <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-[300px] 
                         rounded-t-xl "
                         />

                            {/* Content */}
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                 
                                 <div className="space-y-2">

                                <p className="font-bold">
                                  Price:  ${product.price}
                                </p>
                                <p className="text-yellow-500 ">
                                    
                                   Rating: ⭐ {product.rating}
                                </p>
                                 </div>


                                <div className=" ">
                                    <Link href={`/product/${product.id}`}>
                                        <button className="rounded-full btn btn-primary btn-block">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* View All */}
                <div className="text-center mt-8">
                    <Link href="/products">
                        <button className="btn btn-outline">
                            View All Products
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default PopularProducts;