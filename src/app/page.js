
import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-20">
    <Banner></Banner>
    <PopularProducts></PopularProducts>
      <h1>Home page</h1>
    </div>
  );
}
