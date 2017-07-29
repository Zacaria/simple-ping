import config from './config.json';
import request from './utils/request';

const site = config.site;
const TRY_ATTEMPTS = config.retry.attempts;
const TRY_DELAY = config.retry.delay;

const failSite = 'https://www.havesomecode.o';

console.log('Running process in', process.env.NODE_ENV, 'mode');

request(site, TRY_DELAY, TRY_ATTEMPTS);


