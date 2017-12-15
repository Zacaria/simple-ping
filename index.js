import config from './config.json';
import request from './utils/request';

// throw when no config
if(!Array.isArray(config)) {
  console.error('Error, please specify a config as an array of sites !');

  process.exit(1);
}

Promise.all(config.map(item => {
  const TRY_ATTEMPTS = item.retry ? item.retry.attempts : undefined;
  const TRY_DELAY = item.retry ? item.retry.delay : undefined;


  console.log('Running process in', process.env.NODE_ENV, 'mode');

  return request(item.site, TRY_DELAY, TRY_ATTEMPTS);
})).then(() => {
  console.log('All done successfully !');
  // FIXME : find a way to know when promise from request catch are done
});
