import React from 'react';

interface ReviewCardProps {
  review: string;
  author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, author }) => {
  return (
    <div className="review-card">
      <div className="review-card__text">"{review}"</div>
      <div className="review-card__author">- {author}</div>
    </div>
  );
};

export default ReviewCard;
