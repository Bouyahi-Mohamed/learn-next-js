"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
const router = useRouter();
const handleClick = () => 
{
console. log("Placing your order");
router.push("/") ;
}
const handleClickBack = () =>
{
    console. log("Going back to the previous page");
    router.back() ;
}
const handleClickForward = () =>
{
    console. log("Going forward to the next page");
    router.forward() ;
}

return (
<>
<h1>Order product</h1>

<div className="bg-gray-200 p-4 rounded">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 m-4 inline-block" onClick={handleClickBack}>
    
  back 
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 m-4 inline-block" onClick={handleClick}>
    
  Place order
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 m-4 inline-block" onClick={handleClickForward}>
    forward
</button>
</div>
</>
);
}
