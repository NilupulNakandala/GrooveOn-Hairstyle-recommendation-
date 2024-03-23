# Import necessary modules
from joblib import load  # For loading saved models
from sklearn.preprocessing import StandardScaler  # For feature scaling (commented out here)
from sklearn.svm import SVC  # For the SVM model
import cv2  # For image processing
import sys  # For system operations (like accessing command-line arguments)
import tkinter  # For creating a file selection dialog
from tkinter import filedialog

# Load the trained face shape classifier model
loaded_model = load('model/face_shape_classifier.joblib')

# Load the scaler used during training (commented out, as it's not used here)
# scaler = StandardScaler()

# Function to prompt user for file selection
def get_file_path():
  """Prompts the user to select a file and returns its full path."""
  root = tkinter.Tk()  # Create a hidden root window
  root.withdraw()  # Hide the root window
  file_path = filedialog.askopenfilename()  # Open file selection dialog
  return file_path

# Get the image file path from user selection
new_file_path = get_file_path()

# Check possible predicted face shapes (optional)
possible_classes = loaded_model.classes_
# print("Possible predicted face shapes:", possible_classes)

# Function to predict face shape from an image
def predictShape(imagePath):
  """Predicts face shape from a given image."""

  # Load and preprocess the image
  new_image = cv2.imread(imagePath)  # Read image
  new_image = cv2.resize(new_image, (224, 224))  # Resize to match training data
  new_features = new_image.flatten()  # Flatten image into a feature vector

  # Make prediction using the loaded model
  predicted_label = loaded_model.predict([new_features])[0]  # Reshape features for prediction

  return predicted_label

# Predict face shape for the selected image
output = predictShape(new_file_path)
print(output)  # Print the predicted face shape
