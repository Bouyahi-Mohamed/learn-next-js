export default async function documentation({ params }) {
    const { slug } =  await params;
    console.log(slug);

    return (slug.length == 2) ? (
        <main className="container mx-auto px-4 py-8 secodary">
            <h1>Documentation for {slug.join('/')}</h1>
        </main>
    ) : 
    (slug.length == 1) ? (
        <main className="container mx-auto px-4 py-8 secodary">
            <h1>Documentation for {slug[0]}</h1>
        </main>
    ) :
    (
        <main className="container mx-auto px-4 py-8 secodary">
            <h1>Documentation</h1>
        </main>
    );
}
    