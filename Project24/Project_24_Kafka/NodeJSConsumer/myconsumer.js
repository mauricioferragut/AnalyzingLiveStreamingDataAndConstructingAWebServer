/* Copyright 2020 Confluent Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 *
 * Consume messages from Confluent Cloud
 * Using the node-rdkafka client for Apache Kafka
 *
 * =============================================================================
 */
const myconsumer = function myconsumer(topic){
    const Kafka = require('node-rdkafka');
    const bootstrapServers = 'localhost:9092';
    var response = "";
    function createConsumer(onData) {
        const consumer = new Kafka.KafkaConsumer({
            'bootstrap.servers': bootstrapServers,
            'group.id': 'node-example-group-1'
          }, {
            'auto.offset.reset': 'earliest'
          });
   
        return new Promise((resolve, reject) => {
            consumer
            .on('ready', () => resolve(consumer))
            .on('data', onData);

            consumer.connect();
        });
    }

    async function consumerExample() {
        console.log(`Consuming records from ${topic.topic}`);
        let seen = 0;

        const consumer = await createConsumer(({key, value, partition, offset}) => {
            console.log(`value ${value} of partition ${partition} @ offset ${offset}. Updated total count to ${++seen}`);
            response += `value ${value} of partition ${partition} @ offset ${offset}. Updated total count to ${++seen}`;
        });

        consumer.subscribe([topic.topic]);
        consumer.consume();

        process.on('SIGINT', () => {
            console.log('\nDisconnecting consumer ...');
            consumer.disconnect();
        });
    }
// this fires everything
    consumerExample().catch((err) => {
        console.error(`Something went wrong:\n${err}`);
        process.exit(1);
    });
    return response;
}
exports.myconsumer = myconsumer