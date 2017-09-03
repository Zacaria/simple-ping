import sendmailFunc from 'sendmail';

const sendmail = sendmailFunc();

const sendMail = error => {
  console.log('Sending mail ! ');
  if (process.env.NODE_ENV === 'production') {
    sendmail({
      from: 'noreply@havesomecode.io',
      to: 'cv.chtatarz@gmail.com',
      subject: 'Havesomecode is down',
      html: 'Problem with havesomecode <br/>' +
      'Message :' + error.message.toString()
    });
  }
};

export default sendMail;
