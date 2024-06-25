import type React from 'react';
import Carousel from './ui/Carousel';
import ReviewCard from './ui/ReviewCard';

const reviews = [
  { review: "Amazing teacher! I've learned so much in just a few months.", author: "Student A" },
  { review: "Highly recommend [Your Name] for anyone wanting to learn piano.", author: "Student B" },
  { review: "Very patient and knowledgeable.", author: "Student C" },
  { review: "I look forward to every lesson!", author: "Student D" },
  { review: "Has a unique way of making complex concepts easy to understand.", author: "Student E" },
];

const Reviews: React.FC = () => {
  return (
    <Carousel items={reviews.map(review => <ReviewCard key={review.author} review={review.review} author={review.author} />)} />
  );
};

export default Reviews;
