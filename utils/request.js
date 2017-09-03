import axios from 'axios';
import sendmail from './mail';

const request = (site, delay = 100, retryLeft = 0) => {
  console.log('Requesting', site, delay, retryLeft);
  return axios.get(site)
    .then(function (response) {
      console.log(site, 'was found with status', response.status);
    })
    .catch(function (error) {
      console.log(site, 'was not found with status', error.code);
      if (retryLeft > 0) {
        console.log('Retrying in', delay / 1000, 'seconds');
        return setTimeout(() => retry(site, delay, retryLeft), delay)
      }

      console.log('Sorry I give up :/');

      return sendmail(error);
    });
};

const retry = (site, delay, retryLeft) => request(site, delay, retryLeft - 1);

export default request;
