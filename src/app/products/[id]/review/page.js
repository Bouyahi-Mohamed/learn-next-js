export  default async function Review({ params }) {
    const { id } =  await params;
    console.log(id);
  return (
    <main className="container mx-auto px-4 py-8 secodary" >
      <h1>Product Review {id}</h1>
      <p>This is the review page for the product.</p>
    </main>
  );
}