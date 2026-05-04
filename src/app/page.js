
import Banner from "@/components/Banner";

import PopularProducts from "@/components/PopularProducts";
import TopBrands from "@/components/TopBrands";


export default function Home() {
  return (
    <div className="px-20">
    
    <Banner></Banner>
    <PopularProducts></PopularProducts>
      <TopBrands></TopBrands>
    </div>
  );
}
