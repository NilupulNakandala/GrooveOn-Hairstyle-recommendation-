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
from sklearn.svm import SVC  # Assuming you used a Support Vector Machine (SVM) model
import cv2

# Load the model
loaded_model = load("face_shape_classifier.joblib")

# Load the scaler used during training (replace with your actual loading approach)
scaler = StandardScaler()  # Assuming you saved/loaded the scaler separately

# Sample new data (replace with your actual data)
#new_data = [[5.1, 3.5, 1.4, 0.2]]

# Preprocess the new data
#new_data_scaled = scaler.transform(new_data)

# Make predictions
#predictions = loaded_model.predict(new_data_scaled)

# Interpret predictions for a classification model (replace based on your model type)
#if predictions[0] == 0:
 #   print("Predicted class: Iris-setosa")
#elif predictions[0] == 1:
  #  print("Predicted class: Iris-versicolor")
#else:
 #   print("Predicted class: Iris-virginica")





import tkinter
from tkinter import filedialog
def get_file_path():
  """Prompts the user to select a file and returns the full path."""
  root = tkinter.Tk()  # Create a hidden root window
  root.withdraw()  # Hide the root window
  file_path = filedialog.askopenfilename()  # Opens a file selection dialog
  return file_path

#def your_function():
 # file_path = get_file_path()
  # Process the file using the path
  #if file_path:
      # Open and process the image using OpenCV
   #   image = cv2.imread(file_path)


# Call the function when needed
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
