from keras.models import model_from_json
from pathlib import Path
import cv2
import numpy as np
import sys

# Set console encoding to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

# Load the model architecture from JSON
model_path = Path("src/groveOn_model.json")
model_structure = model_path.read_text(encoding='utf-8')
loaded_model = model_from_json(model_structure)

# Load the weights
loaded_model.load_weights('src/groveOn_model.h5')

# Compile the model
loaded_model.compile(optimizer="adam", 
                     loss='categorical_crossentropy', 
                     metrics=['accuracy'])

def preprocess_image(image_path):
    # Read the image
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError(f"Failed to load image from {image_path}")
    
    # Resize the image to 48x48
    img = cv2.resize(img, (48, 48))

    img = img / 255.0  # Normalize
    
    # Reshape the image to match the input shape of the model
    img = img.reshape(1, 48, 48, 1)  # Add batch dimension
    
    return img

def predict_class(image_path):
    # Preprocess the image
    processed_image = preprocess_image(image_path)
    
    # Make prediction
    prediction = loaded_model.predict(processed_image)
    
    # Get the class with highest probability
    predicted_class = np.argmax(prediction)
    
    # Define class labels (adjust these based on your specific classes)
    class_labels = ['Heart', 'Oblong', 'Oval', 'Round', 'Square']
    
    # Return the predicted class label
    return class_labels[predicted_class]

# Example usage
image_path = r"C:\Users\micro\OneDrive\Desktop\Heart.jpg"
try:
    predicted_class = predict_class(image_path)
    print(f"The predicted class is: {predicted_class}")
except Exception as e:
    print(f"An error occurred: {str(e)}")