'use strict';

var mongoose = require('mongoose');
try{
    var mongoConnect=require('/etc/coutloot/mongo/mongoConnect');
}catch(e){
    if(! mongoConnect){
        console.log("Mongo connection error")
        process.exit(0)
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

var userSchema = mongoose.Schema({
        internalGroups: [],
        allowedActivities: [],
        userId: {
            type: 'Number'
        },
        userToken: {
            type: 'String'
        },
        userRole: {
            type: 'String'
        },
        currentStatus: {
            type: 'String'
        },
        createdAt: {
            type: 'Number'
        },
        lastSession: {
            type: 'Number'
        },
        userDetails: {
            name: {
                type: 'String'
            },
            mobile: {
                type: 'String'
            },
            facebookId: {
                type: 'String'
            },
            googleId: {
                type: 'String'
            },
            email: {
                type: 'String'
            },
            gender: {
                type: 'String'
            },
            profileImage: {
                type: 'String'
            },
            dob: {
                type: 'Number'
            }
        },
        locationDetails: {
            cityId: {
                type: 'Number'
            },
            city: {
                type: 'String'
            },
            stateId: {
                type: 'Number'
            },
            state: {
                type: 'String'
            }
        },
        money: {
            cashoutBalance: {
                type: 'Number'
            },
            creditsBalance: {
                type: 'Number'
            },
            referalBalance: {
                type: 'Number'
            },
            cashoutRefToken: {
                type: 'String'
            },
            creditsRefToken: {
                type: 'String'
            },
            referalRefToken: {
                type: 'String'
            }
        },
        deviceDetails: {
            deviceType: {
                type: 'String'
            },
            deviceId: {
                type: 'String'
            },
            deviceToken: {
                type: 'String'
            },
            loginToken: {
                type: 'String'
            }
        }
});

module.exports= connection.model('user', userSchema, 'users');