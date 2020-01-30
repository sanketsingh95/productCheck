var url = require('url');

var requestObj={
    startRequest: function(req){
        
        var requestUrl=getRequestUrl(req);
        var requestTime=parseInt(Date.now());
        var requestId=requestTime;

        //console.log(requestUrl);

        var request={
            requestId:requestId,
            requestUrl:requestUrl,
            requestTime:requestTime,
            requestIp:req.connection.remoteAddress
        }

        //call one async function to save request database

        return requestId;
    },

    endRequest: function(requestId){
        return requestId;
    }
}

function getRequestUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}

function saveRequest(requestDate){
    //save request data
}

function updateRequest(requestData){
    //update request end time
}

module.exports=requestObj;