import Link from 'next/link';
import Heading from './components/Heading';
import { getFeaturedReview } from '../lib/reviews';


export const metadata = {
    title:"Indie Gamer",
    descrition: "Only the best indie games, review for you.",
};

export default async function HomePage(){
    const review = await getFeaturedReview();
    console.log('[HomePage] rendering');

    return(
        <>
        <Heading> Indie Gamer </Heading>
        <ul className="flex flex-row flex-wrap gap-3">
        <p> Only the best indie games, review for you.</p>
        <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
                <Link href={`/reviews/${review.slug} `} className="flex flex-col sm:flex-row">
                    <img src={review.image} alt="" width="320" height="180" className='rounded-t'/>    
                        <h2 className="py-1 font-semibold text-center sm:px-2">{review.title}</h2>
                </Link>
        </div>
        </ul>
       </>        
    ); 
}