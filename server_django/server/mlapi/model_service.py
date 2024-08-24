import joblib
import numpy as np

# Load the model
model = joblib.load('model.pkl')

def predict(features):
    features = np.array(features).reshape(1, -1)
    prediction = model.predict(features)
    return int(prediction[0])