"use client"

import { useEffect, useState } from "react";
import styles from "./review.module.scss"
import Review from "@/components/Review";
import useMyReview from "@/hook/useMyReview";

const ReviewPage : React.FC =  () => {

    const [reviews, setReviews] = useState<Review[] | null>(null);

    const myReviewData = useMyReview();

    useEffect(() => {
        setReviews(myReviewData);
    }, [myReviewData])

    return (
        <main>
        <div className={styles.wrap}>
            {
                reviews?.map((review) => {
                    return <Review 
                    coffeechatId={review.coffeechatId}
                    content={review.content}
                    rating={review.rating}  />
                })
            }
        </div>

    </main>
       
    )
}


export default ReviewPage;