# AnalyzingLiveStreamingDataAndConstructingAWebServer
Live Streaming Data with ThingsBoard, Building a Web Server with Kafka

The first part of this project demonstrates the streaming live data from IoT devices (in this case a thermometer and hygrometer), 
to ThingsBoard where it is processed by a rule chain and posted to a realtime database in Firebase. 

The second part of this project demonstrates analysis of live streamed data by populating a separate field in the realtime database when the temperature exceeds parameters. 

In the third and final part of this project, I set up a python application to publish vehicle location data to a Kafka topic. Kafka is implemented as a Docker container 
(image created by Confluent) and sends messages to a web server created with Node.js where they are consumed.
