import ReviewNotFound from "./not-found";
import { notFound } from "next/navigation";

export default async function ReviewDetails({params,

}:{
    params:Promise<{reviewId:string; productId:string}>
}){
    const {reviewId,productId}=await params;
    if(parseInt(reviewId)==1) return notFound();
    return (
        <div>
            <h2>Review {reviewId} for product {productId}</h2>
        </div>
    )
}