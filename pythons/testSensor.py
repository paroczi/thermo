#!/usr/bin/python
import sys
import Adafruit_DHT

sensor = 11 # ez a  DHT11
pin = 4 # ami igazabol a 7-es

while True:
        humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
       	print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
