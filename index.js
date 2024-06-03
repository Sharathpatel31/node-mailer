// var nm=require('nodemailer')

// var transporter=nm.createTransport({
//     host:"smtp.gmail.com",
//     port:587,
//     secure:true,
//     auth:{
//         user:'chinthapoolasharath@gmail.com',
//         pass:'Sharathpatel@31'
//     }
// }
// );

// var options={
//     from:'chinthapoolasharath@gmail.com',
//     to:'saiguna2004@gmail.com',
//     subject:"Testing node emails",
//     text:"Hello Welcome to our application"
// }

// transporter.sendMail(
//     options,function(error,info){
//         if(error){
//             console.log(error)

//         }
//         else{
//             console.log("sent")
//         }
//     }
// )

var nm = require('nodemailer');
var transporter = nm.createTransport({
  host: "smtp.gmail.com",
  port: 465, // use port 465 for SSL
  secure: true, // use SSL
  auth: {
    user: 'chinthapulasharathkumar@gmail.com',
    pass: ''
  }
});
var options = {
  from: 'chinthapoolasharath@gmail.com',
  to: 'saiguna2004@gmail.com',
  subject: "Testing node emails",
  text: "Hello Welcome to our application"
};
transporter.sendMail(options, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("sent");
  }
});