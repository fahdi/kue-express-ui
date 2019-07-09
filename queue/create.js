const kue = require('kue');
const config = require('../config/');

const queue = kue.createQueue({redis: config.get('redis'), jobEvents: false});

// create a job and get its ID
const emailJob = queue.create('email', {
    title: 'welcome email for tj'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
}).save( function(err){
   if( !err ) console.log( emailJob.id );
});

// create a job with high priority 
const emailJobHighPriority = queue.create('email', {
    title: 'account lock email for tj'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
}).priority('high').save( function(err){
   if( !err ) console.log( emailJobHighPriority.id );
});

/*
{
    low: 10
  , normal: 0
  , medium: -5
  , high: -10
  , critical: -15
};
*/


// create a job with high priority and five attempts
const newEmailJob = queue.create('email', {
    title: 'account lock email for tj'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
}).priority('high').attempts(5).save( function(err){
   if( !err ) console.log( emailJobHighPriority.id );
});



