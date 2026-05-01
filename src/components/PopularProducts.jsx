import Link from "next/link";

const PopularProducts = async () => {
    const res = await fetch("https://suncard.vercel.app/data.json")
    const data = await res.json();
    const popularProducts = data.slice(0, 3)
    
    return (
        <div>
            <div className="text-3xl font-bold text-center mb-8">
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
                            {/* <figure className="h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure> */}

                            {/* Content */}
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>

                                <p className="text-yellow-500">
                                    ⭐ {product.rating}
                                </p>

                                <p className="font-bold">
                                    ${product.price}
                                </p>

                                <div className="card-actions justify-end">
                                    <Link href={`/products/${product.id}`}>
                                        <button className="btn btn-primary btn-sm">
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