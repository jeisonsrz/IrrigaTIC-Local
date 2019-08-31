#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>

#include <ArduinoJson.h>
#include <ESP8266WiFi.h>


// Set these to run example.
#define FIREBASE_HOST "irrigatic-react.firebaseio.com"
#define FIREBASE_AUTH "PmqZg81rptA5GkHIe148bGikeHzgSr8Ht1qLxQ5D"

const char* ssid = "FAMILIARUIZ";
const char* password = "3215323276";

WiFiClient  client;

void setup()
{
  Serial.begin(9600);
 
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
   Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.print("Netmask: ");
  Serial.println(WiFi.subnetMask());
  Serial.print("Gateway: ");
  Serial.println(WiFi.gatewayIP());
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

int n = 0;

void loop()
{
  
      displayInfo();


}

void displayInfo()
{


    double latitude = random(1,40);
    double longitude = random(1,40);
    
    
StaticJsonBuffer<200> jsonBuffer;

JsonObject& root = jsonBuffer.createObject();
root["NodeEureka"] = "IrrigaTIC-React";

JsonArray& data = root.createNestedArray("data");

data.add(latitude);
data.add(longitude);

root.printTo(Serial);


    // set value
  Firebase.set("EurekaTechnology", root);
  // handle error
  if (Firebase.failed()) {
      Serial.print("Configuracion /Latitud failed: ");
      Serial.println(Firebase.error());  
      return;
  }
  delay(500);

    
}
