'use strict';

var mongoose = require('mongoose');
try{
    var mongoConnect=require('/etc/coutloot/mongo/mongoConnect');
}catch(e){
    if(! mongoConnect){
        console.log("Mongo connection error");
        process.exit(0);
    }
}

var dbCreds={
    userName:"mahendra",
    userSecret:"test",
    database:"users",
    access:"read",
    applicationId:"t001"
}

var connectionObject=mongoConnect.getConnection(dbCreds.userName,dbCreds.userSecret,dbCreds.database,dbCreds.access,dbCreds.applicationId,mongoose);
var connection=connectionObject.connection;

var followerSchema = mongoose.Schema({
	serialNo: {
        type: 'Number',
        required:true,
        unique:true
	},
	follower: {
		userId: {
            type: 'Number',
            required:true
		},
		name: {
            type: 'String',
            required:true
		},
		profileImage: {
            type: 'String',
            required:true
		},
		city: {
            type: 'String',
            required:true
        },
        role: {
            type: 'String',
            required:true
		}
	},
	following: {
		userId: {
            type: 'Number',
            required:true
		},
		name: {
            type: 'String',
            required:true
		},
		profileImage: {
            type: 'String',
            required:true
		},
		city: {
            type: 'String',
            required:true
        },
        role: {
            type: 'String',
            required:true
		}
	},
	status: {
        type: 'String',
        required:true
	},
	followedDate: {
        type: 'Number',
        required:true
	},
	unFollowedDate: {
		type: 'Number'
	}
});

module.exports= connection.model('followers', followerSchema, 'followers');