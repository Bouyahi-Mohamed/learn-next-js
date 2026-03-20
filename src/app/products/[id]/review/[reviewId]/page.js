export default async function detailreview({ params } ) {
    const { id, reviewId } = await params;
    console.log(id, reviewId);
  return (
    <main className="container mx-auto px-4 py-8 secodary" >
      <h1>Details review {reviewId} for product {id} </h1>
      <p>This is the details page for a specific review of a product.</p>
    </main>
  );
}