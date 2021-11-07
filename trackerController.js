const fs = require('fs');
const path = require('path');
const axios = require('axios');

const trackerController = {};

trackerController.getInfo = (req, res, next) => {

// //const URL = `https://api.discogs.com/users/${USER_ID}/collection/folders/${QUEUE_ID}/releases?User-Agent="collector/1.0"&token=${USER_TOKEN}`;
//const URL = `https://onlinetools.ups.com/track/v1/details/7798339175?locale=en_US`;
console.log("attempting to hit URL", req.body.tracking)
const URL = `https://onlinetools.ups.com/track/v1/details/${req.body.tracking}?locale=en_US`;

    try {
        axios(URL, {
        method: 'GET',
        headers: {AccessLicenseNumber: '9DA92EFE19C2291D'},
        }).then((data) => {
        //console.log(data.data.trackResponse.shipment[0].package[0].activity[0])
        let locData = data.data.trackResponse.shipment[0].package[0].activity[0].location;
        //console.log(data.data.trackResponse.shipment[0].package[0])
        res.locals = {trackingNumber: data.data.trackResponse.shipment[0].package[0].trackingNumber,
                      deliveryDate: data.data.trackResponse.shipment[0].package[0].deliveryDate[0].date,
                      deliveryTime: data.data.trackResponse.shipment[0].package[0].deliveryTime.endTime,
                      recentActivity: []
        };
        function activityArray(){
            for (let i = 0; i < data.data.trackResponse.shipment[0].package[0].activity.length; i++){
                res.locals.recentActivity.push(data.data.trackResponse.shipment[0].package[0].activity[i])
            }
        }
        activityArray();
        return next();
        });

    } catch (err) {
        return next(err);
    }
    
}

module.exports = trackerController;