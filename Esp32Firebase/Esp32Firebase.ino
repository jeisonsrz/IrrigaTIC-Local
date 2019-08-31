#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "FAMILIARUIZ";
const char* password = "3215323276";


void connectToNetwork() 
{
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println("Tratando de establecer conexión WIFI...");
    }
    Serial.println("Conexión establecida :D");
}


void setup()
{
    Serial.begin(115200);
    delay(1000);
    //WiFi.begin(ssid,password) ;  Procedimiento de conexión
    connectToNetwork();  
}

void loop()
{
    if (WiFi.status() == WL_CONNECTED)
    {
        HTTPClient http;
        http.begin("https://irrigatic-react.firebaseio.com//object.json");
        http.addHeader("Content-Type", "text/plain");
         
         double latitude = random(1,25);
         double temp1 = random(25,50);
         double hum = random(50,75);
         double fer = random(75,100);
           
String SerialData="";
String SerialData2="";
String SerialData3="";
String SerialData4="";

SerialData = String(latitude,2);
SerialData2 = String(temp1,2);
SerialData3 = String(hum,2);
SerialData4 = String(fer,2);
         
         String stringTwo = String("{ \"ubicacion\" :  \"");        // converting a constant string into a String object
String stringOne = String(stringTwo + SerialData + "\",");


 String numA = String(" \"temperatura\" :  \"");        // converting a constant string into a String object
String numB= String(numA + SerialData2 + "\",");

 String numH1 = String(" \"humedad\" :  \"");        // converting a constant string into a String object
String numH= String(numH1 + SerialData3 + "\",");

 String numF1 = String(" \"fertilizante\" :  \"");        // converting a constant string into a String object
String numF= String(numF1 + SerialData4 + "\"}");

        int httpCode = http.PUT(stringOne + numB + numH + numF);
        //int httpCode = http.GET();

        if (httpCode >=200 && httpCode <206)
        {
            String payload = http.getString();
            Serial.println(httpCode);
            Serial.println(payload);
        }
        else
        {
            Serial.println(httpCode);
            Serial.println("Error en la petición");
        }
        
        http.end();
    }
    delay(10000);
}
