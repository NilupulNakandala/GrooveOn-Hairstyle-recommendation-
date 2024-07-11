from joblib import load
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
import cv2
import sys

# Load the model
loaded_model = load('model/face_shape_classifier.joblib')#r"C:\Users\admin\Desktop\newrepo\server\model\face_shape_classifier.joblib"

# Load the scaler used during training 
#scaler = StandardScaler()  

import tkinter
from tkinter import filedialog

def get_file_path():
  """Prompts the user to select a file and returns the full path."""
  root = tkinter.Tk()  # Create a hidden root window
  root.withdraw()  # Hide the root window
  file_path = filedialog.askopenfilename()  # Opens a file selection dialog
  #file_path = r"C:\Users\admin\Desktop\newrepo\server\images\face1.jpg"
  # if len(sys.argv) > 1:  # Check if a command-line argument exists
  #   print(file_path, str(sys.argv[1]))
  # else:
  #   print("No command-line argument provided. Prompting for file selection...")
  return file_path

# Call the function 
new_file_path = get_file_path()


# to check the possible outputs
possible_classes = loaded_model.classes_   
# print("Possible predicted face shapes:", possible_classes)


def predictShape(imagePath):
  #shape prediction
  new_image = cv2.imread(new_file_path)#"C:\\Users\\admin\\Desktop\\face shape detector\\square\\100.jpg"
  new_image = cv2.resize(new_image, (224, 224))  # Resize to match training data
  new_features = new_image.flatten()
  predicted_label = loaded_model.predict([new_features])[0]  # Reshape as a single-sample array
  #print("Predicted face shape:", predicted_label)
  return predicted_label

output = predictShape(new_file_path)
print(output)