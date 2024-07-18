const shapes = ['diamond', 'oblong', 'heart', 'round', 'square'];

// Classify the image shape randomly
const classifyImageShape = async (imagePath) => {
  const randomIndex = Math.floor(Math.random() * shapes.length);
  return shapes[randomIndex];
};

module.exports = classifyImageShape;
