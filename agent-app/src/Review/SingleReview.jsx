/* eslint-disable react/prop-types */
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SingleReview = ({ name, rating, comment }) => {
  const totalStars = 5;

  // Create an array of stars based on the rating
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < rating ? <StarIcon color="primary" /> : <StarBorderIcon />;
  });

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <PersonIcon style={{ marginRight: '10px' }} />
        <strong>{name}</strong>
      </div>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        {stars}
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default SingleReview;
