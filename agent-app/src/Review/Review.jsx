import React, { useState } from "react";
import "./Review.css"; 

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    
  ]);

  const [newReview, setNewReview] = useState({
    user: "",
    rating: 5,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleAddReview = () => {
    if (newReview.user && newReview.comment) {
      setReviews((prevReviews) => [
        ...prevReviews,
        { id: prevReviews.length + 1, ...newReview },
      ]);
      setNewReview({
        user: "",
        rating: 5,
        comment: "",
      });
    }
  };

  return (
    <div className="review-page-container">
      <h1 className="review-page-title">Customer Reviews</h1>
      
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-user">{review.user}</p>
            <p className="review-rating">Rating: {review.rating}</p>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="add-review-section">
        <h2>Add Your Review</h2>
        <form>
          <label htmlFor="user">Your Name:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={newReview.user}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <label htmlFor="comment">Your Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="button" onClick={handleAddReview}>
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;