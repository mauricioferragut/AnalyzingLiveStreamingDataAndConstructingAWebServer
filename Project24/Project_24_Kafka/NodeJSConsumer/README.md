# helloTest - Confluent Kafka Demo
This demonstrates a REST interface defined in server.js
The producer and consumer can be launched by GET messages
Consumers must "poll" Kafka continuosly for events
otherwise they are considered dead
The files restConsumer.js and restProducer.js were used as the basis for myconsumer.js and myproducer.js

Apache Kafka opensource does not support a REST interface. However, Confluent does support a REST API and this makes it much easier to interact with Kafka's engine
