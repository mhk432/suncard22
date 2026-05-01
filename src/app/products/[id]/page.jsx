import { notFound, redirect } from "next/navigation";
import Link from "next/link";

// 🔁 Fetch single product from API
async function getProduct(id) {
  const res = await fetch("https://suncard.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.find((item) => item.id === Number(id));
}

// 🔐 Fake auth (BetterAuth দিলে replace করবে)
function getUser() {
  return null; // 👉 login হলে object return করবে
}

export default async function ProductDetails({ params }) {
  const { id } = params;

  // 🔒 Protection
  const user = getUser();

  if (!user) {
    redirect(`/login?redirect=/products/${id}`);
  }

  // 🔍 Get product
  const product = await getProduct(id);

  // ❌ Not found
  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* 🖼️ Image */}
        <div>
          {/* <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          /> */}
        </div>

        {/* 📄 Details */}
        <div>

          <h1 className="text-3xl font-bold mb-2">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-2">
            Brand: {product.brand}
          </p>

          <p className="text-yellow-500 mb-2">
            ⭐ {product.rating}
          </p>

          <p className="text-2xl font-bold mb-4">
            ${product.price}
          </p>

          <p className="mb-4">
            {product.description}
          </p>

          <p className="mb-2">
            Stock: {product.stock}
          </p>

          <p className="mb-6">
            Category: {product.category}
          </p>

          {/* 🎯 Buttons */}
          <div className="flex gap-3">

            <button className="btn btn-primary flex-1">
              👀 View Details
            </button>

            <Link href="/products">
              <button className="btn btn-outline">
                ← Back
              </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}