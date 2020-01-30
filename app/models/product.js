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
    database:"products",
    access:"read",
    applicationId:"t001"
}

var connectionObject=mongoConnect.getConnection(dbCreds.userName,dbCreds.userSecret,dbCreds.database,dbCreds.access,dbCreds.applicationId,mongoose);
var connection=connectionObject.connection;

var productSchema = mongoose.Schema(
    {
        productId: {
            type: 'Number',
            required:true,
            unique:true
        },
        listedOn: {
            type: 'Number',
            required:true
        },
        listingType: {
            type: 'String',
            required:true
        },
        productType: {
            type: 'String',
            required:true
        },
        quantity: {
            type: 'Number',
            required:true
        },
        status: {
            type: 'String',
            required:true
        },
        sellerDetails: {
            userId: {
                type: 'Number',
                required:true
            },
            name: {
                type: 'String',
                required:true
            },
            profilePic: {
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
            },
            verified: {
                type: 'Number',
                required:true
            },
            location: {
                pincode: {
                    type: 'String',
                    required:true
                },
                pickupAddressId: {
                    type: 'Number',
                    required:true
                },
                addressLocation: {
                    latitude: {
                        type: 'String'
                    },
                    longitude: {
                        type: 'String'
                    }
                }
            }
        },
        category: {
            categoryString: {
                type: 'String',
                required:true
            },
            categoryName: {
                type: 'String',
                required:true
            },
            categoryId: {
                type: 'Number',
                required:true
            },
            categoryIdString: {
                type: 'String',
                required:true
            },
        },
        collections: {
            type: [
                'String'
            ],
            required:true
        },
        details: {
            title: {
                type: 'String',
                required:true
            },
            description: {
                type: 'String',
                required:true
            },
            condition: {
                type: 'String',
                required:true
            },
            brand: {
                type: 'String',
                required:true
            },
            variantAttribute: {
                type: 'String',
                required:true
            },
            productAttributes: {
                type: [
                    'Mixed'
                ],
                required:true
            },
            variants: {
                type: [
                    'Mixed'
                ],
                required:true
            }
        },
        images: {
            submittedImages: {
                type: [
                    'String'
                ],
                required:true
            },
            thumbImages: {
                type: [
                    'String'
                ],
                required:true
            },
            mainImages: {
                type: [
                    'String'
                ],
                required:true
            }
        },
        filters: {},
        activeRank: {
            type: 'Number',
            required:true
        },
        baseProduct: {
            type: 'Number',
            required:true
        },
        productLogs: {
            type: [
                'Mixed'
            ],
            required:true
        },
        promoted:{
            type: 'Number'
        },
        promotionDetails:{
            impressions: {
                type: 'Number'
            },
            views: {
                type: 'Number',
            },
        }
    });

module.exports = connection.model('products', productSchema, "products");