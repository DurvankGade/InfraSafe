#       InfraSafe Readme

## Overview
This repository contains a comprehensive solution for infrastructure damage detection, focusing on crack prediction and severity assessment using a YOLOv model. Additionally, it includes a risk assessment function that evaluates structural integrity and categorizes risk levels. The project also features code for a surveillance car utilizing an ESP32 camera.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)


## Features
- **Crack Prediction**: Utilizes a YOLOv model to detect cracks in infrastructure.
- **Severity Assessment**: Predicts the severity of detected cracks.
- **Risk Assessment**: Evaluates structural integrity and categorizes risk levels into Low, Moderate, or High.
- **Surveillance Car**: Code for a surveillance car using an ESP32 camera for real-time monitoring.

  ## Technologies Used
- Python
- TensorFlow/Keras (for YOLOv model)
- OpenCV (for image processing)
- ESP32 (for surveillance car)
- React(for frontend)

## Usage
-**Crack Detection:** Run the YOLOv model on images of infrastructure to detect cracks.
-**Severity Prediction:** After detecting cracks, use the severity assessment function to evaluate the severity.
-**Risk Assessment:** Utilize the risk assessment function to categorize the risk level based on the severity of the cracks.
-**Surveillance Car:** Upload the ESP32 camera code to your ESP32 device and follow the instructions in the surveillance_car directory.
- **Crack Detection:** Run the YOLOv model on images of infrastructure to detect cracks.
- **Severity Prediction:** After detecting cracks, use the severity assessment function to evaluate the severity.
- **Risk Assessment:** Utilize the risk assessment function to categorize the risk level based on the severity of the cracks.
- **Surveillance Car:** Upload the ESP32 camera code to your ESP32 device and follow the instructions in the surveillance_car directory.
  We were not able to integrate the ML model with frontend due to time constraint.
0 commit comments
Comments
0
 (0)
Comment
You're receiving notifications because you'r
