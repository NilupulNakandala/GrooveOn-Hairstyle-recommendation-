import React, { useState } from "react";
import "./Review.css"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Toast } from 'react-bootstrap'; 

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
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
        <h2 className="add-review-heading">
          Add Your Review
          <img src="/public/assets/camera/review.jpg" className="add-review-icon" alt="Add Review" />
        </h2>
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

      {/* Bootstrap Toast component for the thank you message */}
      <Toast className="thank-you-toast">
        <Toast.Header closeButton={false}>
          Thank You!
        </Toast.Header>
        <Toast.Body>
          Thank you for your review. We appreciate your feedback and hope you continue to enjoy using our website!
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ReviewPage;
