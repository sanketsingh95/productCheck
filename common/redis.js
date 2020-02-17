"use strict";
const redis = require("redis");
const util = require("util");
const client = redis.createClient();
const getAsync = util.promisify(client.get).bind(client);

client.on("connect", function() {
    console.log("Redis client connected");
});

client.on("error", function() {
    console.log("Error connecting redis");
});

var redisFun = {
    setKey: async function(key, value, ttl = 0) {
        try {
            await client.set(key, value);
            return;
        } catch (e) {
            console.log(e);
        }
    },

    getKey: async function(key) {
        var data;

        try {
            data = await getAsync(key);
        } catch (e) {
            console.log(e);
        }
        return data;
    },

    isConnected: async function() {
        await client.on("connect", function() {
            return 1;
        });

        await client.on("error", function() {
            return 0;
        });
    }
};

module.exports = redisFun;
