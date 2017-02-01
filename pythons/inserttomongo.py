#!/usr/bin/python
import time
import sys
import Adafruit_DHT
from pymongo import MongoClient

client = MongoClient()
db = client.test

while True:
    time.sleep(30)

    humidity,temperature = Adafruit_DHT.read_retry(11,4)

    now = time.strftime("%Y-%m-%d %H:%M:%S")

	# TypeError: float() argument must be a string or a number
    if temperature is not None and humidity is not None:
		temperatureData = int(float(temperature))
		humidityData = int(float(humidity))
		db.thermos.insert_one(
	        {
	            "time": now,
	            "temperature": temperatureData,
	            "humidity": humidityData
	        }
	    )