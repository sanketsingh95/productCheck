var memcached = require('memcached');
var memcachedInstance = new memcached("localhost:11211");

var memcachedObj={
    addKey: function(key,value){
        memcachedInstance.set(key, value, 100,function (err) { console.log("value added") });
    },

    getKey: function(key){
        memcachedInstance.get(key, function (err, mData) {
            console.log(mData);
          });
        console.log("date is "+mData);
        return mData;
    },
    
    removeKey: function(key){

        memcachedInstance.get(key, function (err, mData) {
            console.log(mData);
          });
        console.log("date is "+mData);
        return mData;
    }
}

module.exports=memcachedObj;