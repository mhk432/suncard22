import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const productDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://suncard.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const datas = data.find(p => p.id == id)
 

     
  return (
    <div   className="" >
      <div className="px-20 ">

              <div className="py-5">
                 <Link className="  text-4xl text-red-500" href="/"> 
               <ArrowLeft  size={30} /></Link>
              </div>
      <div className= " grid grid-cols-2  mt-5 px-60">
    <div>
      
     <Image 
                    src={datas.image}
                    alt={datas.name}
                    width={500}
                    height={300}
                    className="rounded-lg h-[400px]"
                   />
    </div>
                 
  <div className="card-body space-y-5">
    <h2 className="card-title ">{datas.name}</h2>
          <p ><span className="font-bold">Brand:</span > {datas.brand}</p>
          <p><span className="font-bold">price : </span> {datas.price}</p>
          <p><span className="font-bold">Rating :</span> {datas.rating}</p>

          <p><span className="font-bold">stock :</span> {datas.stock}</p>
          <p>{datas.description}</p>
          <p><span className="font-bold">Category :</span> {datas.category}</p>
         
    
  </div>
</div>
      </div>

    </div>
  );
};

export default productDetails;