const rewardDistributor = require('../jobs/rewardDistributor');
const cron = require('cron');

// Runs every day at midnight
const job = new cron.CronJob('0 0 * * *', rewardDistributor);

module.exports = job; 