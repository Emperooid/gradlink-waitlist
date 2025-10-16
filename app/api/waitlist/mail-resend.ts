import { Resend } from 'resend';

const resend = new Resend('re_gMtFoktu_Je1EvAYP6uziZYmdKXhbQraD');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'awosikaemmanueldefirst@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});