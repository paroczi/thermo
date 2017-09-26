#
#Init
import MySQLdb
import time
import random
import sys
import Adafruit_DHT

#
#Infinite circle for record data periodicaly
count = 0
while count < 1:
	#
	#Record data in every minute
	time.sleep( 60 )

	#
	#read temperature and humidity
	humidity, temperature = Adafruit_DHT.read_retry(11, 4)

	#
	#Time
	now = time.strftime("%Y-%m-%d %H:%M:%S")
	hour = int(time.strftime("%H"))

	#
	#Temperature
	temperatureData = int(float(temperature))
	print(temperatureData)

	#
	#Humidity
	humidityData = int(float(humidity))
	print(humidityData)

	#
	#User profile
	user = "name"
	user_ip = "10.0.1.14"

	#
	#MySQL upload
	db = MySQLdb.connect("localhost", "name", "pass", "ThermoDB")

	with db:
		cursor = db.cursor()
		sql = '''INSERT INTO ThermoTable(Temperature, Humidity, Time, User, IP) \
						VALUES (%s, %s, %s, %s, %s)'''
		cursor.execute(sql, (temperatureData, humidityData, now, user, user_ip))
