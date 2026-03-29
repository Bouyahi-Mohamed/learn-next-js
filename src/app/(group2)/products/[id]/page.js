import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({params,searchParams}) =>   {
    const {id} = await params;
    return {
        title: `Product ${id}`,
        description: `This is the description for product ${id}.`
    };
};
export default  async function detailProduct({ params, searchParams }) {

    const { id} =  await params;
    const {lang} = await searchParams;
    console.log(id);
    if(parseInt(id) > 10) {
        notFound();
      }
    if(lang && !['en','fr','ar'].includes(lang)) {
        notFound();
    }
    console.log('lang:', lang);
    if(lang=='en') {
        return (
            <main className="container mx-auto px-4 py-8 secodary" >
              <h1>Details product {id} </h1>
              <p>This is the details page for a specific product.</p>
              <Link href={`/products/${id}`}>
              <b>English </b>
              </Link>
              <Link href={`/products/${id}?lang=fr`}>
              <b>French </b>
              </Link>
              <Link href={`/products/${id}?lang=ar`}>
              <b>Arabic</b>
              </Link>
          </main>
         );
    } else if(lang=='fr') {
        return (
            <main className="container mx-auto px-4 py-8 secodary" >
              <h1>Détails du produit {id} </h1>
              <p>Ceci est la page de détails pour un produit spécifique.</p>
              <Link href={`/products/${id}`}>
              <b>English </b>
              </Link>
              <Link href={`/products/${id}?lang=fr`}>
              <b>French </b>
              </Link>
              <Link href={`/products/${id}?lang=ar`}>
              <b>Arabic</b>
              </Link>
          </main>
         );
    } else if(lang=='ar') {
        return (
            <main className="container mx-auto px-4 py-8 secodary" >
              <h1>تفاصيل المنتج {id} </h1>  
              <p>هذه هي صفحة التفاصيل لمنتج معين.</p>
              <Link href={`/products/${id}`}>
              <b>English </b>
              </Link>
              <Link href={`/products/${id}?lang=fr`}>
              <b>French </b>
              </Link>
              <Link href={`/products/${id}?lang=ar`}>
              <b>Arabic</b>
              </Link>
          </main>
         );
    } else {
        return (
            <main className="container mx-auto px-4 py-8 secodary" >
              <h1>Details product {id} </h1>
              <p>This is the details page for a specific product.</p>
              <Link href={`/products/${id}`}>
              <b>English </b> 
              </Link>
              <Link href={`/products/${id}?lang=fr`}>
              <b>French </b>
              </Link>
              <Link href={`/products/${id}?lang=ar`}>
              <b>Arabic</b>
              </Link>
          </main>
         );
    } 
  }