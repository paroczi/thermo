
**Sketch for home thermometer service**
-
This configuration is monitoring the temperature and humidity with DHT11 sensor on Arduino Nano, and sending the captured data on Serial 9600.

This stream is reading from a small Node.js application, and stored in a Mongo DB.

The stored data can access through a REST endpoint: http://localhost:3002/list in JSON format.

**Requirements:**
-
- Arduino Nano
- DHT11 temperature sensor
- MongoDB server
- RoboMongo database client (optional)
- nodemom (optional: npm install -g nodemon)
- Node.js server


**Arduino Nano config:**
- wiring: attached *dht11_wiring.png*
- DHTtster_copy.ino file
    * required library: https://github.com/adafruit/DHT-sensor-library
- from Computer via USB:
    * select the connected port (e.g. COM3 -> DHTPIN 3 )

**MongoDB config**
- run "mongod" in the background (first add C:/data/db folder)

**Start**
- run "yarn install" or "npm install"
- run "node app.js" or "nodemon app.js" (if you want to automatically restart the app on any change)