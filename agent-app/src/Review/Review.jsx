import React, { useState, useEffect } from "react";
import "./Review.css";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    user: "",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    // Fetch reviews from the server when the component mounts
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reviews");
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error("Failed to fetch reviews");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleAddReview = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        const addedReview = await response.json();
        setReviews((prevReviews) => [...prevReviews, addedReview]);
        setNewReview({
          user: "",
          rating: 5,
          comment: "",
        });
      } else {
        console.error("Failed to add review");
      }
    } catch (error) {
      console.error("Error:", error);
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
