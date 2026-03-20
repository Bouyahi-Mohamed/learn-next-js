import { notFound } from "next/navigation";
export default  async function detailProduct({ params }) {

    const { id } =  await params;
    console.log(id);
    if(parseInt(id) > 10) {
        notFound();
      }
  return (
    <main className="container mx-auto px-4 py-8 secodary" >
      <h1>Details product {id} </h1>
      <p>This is the details page for a specific product.</p>
    </main>
  );
}