const { homedir } = require('os');
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss')
const {fetchISSFlyOverTimes} = require('./iss')
const {nextISSTimesForMyLocation} = require('./iss')


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP('174.112.134.189', (error, data) => {
//   //if (error) {
//     console.log('Error fetch details:', error);
//   //} else {
//     console.log(data);
//   //}
// });




// const honey = {}
// honey['latitude'] = '43.68890';
// honey['longitude'] = '-79.45070';

// fetchISSFlyOverTimes(honey, (error, data) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(data);
//   }
// });


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});



