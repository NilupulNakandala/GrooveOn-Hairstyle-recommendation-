#from joblib import load
#from sklearn.preprocessing import StandardScaler
#loaded_model = load('C:\Users\admin\Downloads\model.joblib')
#scaler = StandardScaler()
#new_data = scaler.transform(new_data)
#predictions = loaded_model.predict(new_data)

#!pip install joblib
#pip install tkinter
from joblib import load
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
import cv2

# Load the model
loaded_model = load("face_shape_classifier.joblib")

# Load the scaler used during training 
scaler = StandardScaler()  

import tkinter
from tkinter import filedialog
def get_file_path():
  """Prompts the user to select a file and returns the full path."""
  root = tkinter.Tk()  # Create a hidden root window
  root.withdraw()  # Hide the root window
  file_path = filedialog.askopenfilename()  # Opens a file selection dialog
  return file_path


# Call the function 
new_file_path = get_file_path()


# to check the possible outputs
possible_classes = loaded_model.classes_   
print("Possible predicted face shapes:", possible_classes)


#shape prediction
new_image = cv2.imread(new_file_path)#"C:\\Users\\admin\\Desktop\\face shape detector\\square\\100.jpg"
new_image = cv2.resize(new_image, (224, 224))  # Resize to match training data
new_features = new_image.flatten()
predicted_label = loaded_model.predict([new_features])[0]  # Reshape as a single-sample array
print("Predicted face shape:", predicted_label)
