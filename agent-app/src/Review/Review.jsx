import { useEffect, useState } from 'react'
import './Review.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SingleReview from './SingleReview'

const ReviewPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [reviews, setReviews] = useState(null)

  const [newReview, setNewReview] = useState({
    user: '',
    rating: 1,
    comment: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }))
  }

  const handleGet = () => {
    fetch('http://localhost:3001/groove/get-all-reviews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((res) => {
        setReviews(res)
      })
      .catch((error) => {
        console.error('There was a problem saving the message:', error)
      })
  }

  const handleAddReview = () => {
    setIsLoading(true)
    const data = {
      name: newReview.user,
      rating: Number(newReview.rating),
      comment: newReview.comment,
    }

    fetch('http://localhost:3001/groove/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(() => {
        setNewReview({
          user: '',
          rating: 1,
          comment: '',
        })
        toast.success(
          'Thank you for your review. We appreciate your feedback and hope you continue to enjoy using our website!'
        )
        handleGet()
      })
      .catch((error) => {
        console.error('There was a problem saving the message:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  // Check if all fields are valid for enabling the Add Review button
  const isFormValid = () => {
    return newReview.user.trim() && newReview.comment.trim() && newReview.rating
  }

  useEffect(() => {
    handleGet()
  }, [])

  return (
    <div className="review-page-container">
      <ToastContainer />
      <div className="add-review-section" style={{ marginTop: '80px' }}>
        <h2>Add Your Review</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="user">Your Name:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={newReview.user}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />

          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            disabled={isLoading}
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
            disabled={isLoading}
          ></textarea>

          <button
            type="button"
            onClick={handleAddReview}
            disabled={!isFormValid() || isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Review'}
          </button>
        </form>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2>Customer Review</h2>
        {reviews?.reviews?.map((review) => {
          return (
            <div key={review.id}>
              <SingleReview
                comment={review?.comment}
                name={review?.name}
                rating={review?.rating}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewPage
