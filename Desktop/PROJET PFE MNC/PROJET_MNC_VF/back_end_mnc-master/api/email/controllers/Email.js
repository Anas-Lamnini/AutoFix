'use strict'
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
  send1: async (ctx) => {
    if (ctx.is('multipart')) {  
        const { data, files } = parseMultipartData(ctx);
        console.log(data);
        console.log(files);        
        var col = Object.keys(data);
        var val = Object.values(data);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear()
        today = mm + '-' + dd + '-' + yyyy;
    var fiile = [{
        filename :"CIN-"+val[val.length-2]+"-"+today+"."+files.cin.name.split(".")[1],
        content: files.cin
  },{
    filename :"Registre-"+val[val.length-2]+"-"+today+"."+files.registre.name.split(".")[1],
    content: files.registre
  },{
    filename :"Order-"+val[val.length-2]+"-"+today+"."+files.order.name.split(".")[1],
    content: files.order
  }
]
var subjectt ="Adhesion "+val[val.length-2]+"-"+today
  var table = `</h3>
  <table style="width:100%;border:1px solid #222 margin-top:50px;">
                <tr><td><img src="https://nsa40.casimages.com/img/2021/03/12/mini_210312011718614711.png" alt="MNC"><td>
                <td style="background=#18a0db">`+"<h3>"+subjectt+`</h3></td></tr>`;
  for (var i = 0; i < col.length; i++) {
    table = table +'<tr style="color:#222"><td style="padding: 15px; border: 1px solid #999;">' + String(col[i]).replace(/_/g," ") +'</td><td style="padding: 15px;border: 1px solid #999;">' + val[i]+'</td></tr>'
  }
   table = table+ '</table>';
    try {
      const emailOptions = {
        to: "anas98lam@gmail.com",
        subject: subjectt,
        html: "<html>"+table+"</html>",
        attachments : fiile
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to admin`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to admin`, err)
      ctx.send({ error: 'Error sending email' })
    }
  }
  else {
    console.log("no file")
  }
    return "test"
  },
  send2: async (ctx) => {
    if (ctx.is('multipart')) {  
        const { data, files } = parseMultipartData(ctx);
        console.log(data);
        console.log(files);        
        var col = Object.keys(data);
        var val = Object.values(data);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear()
        today = mm + '-' + dd + '-' + yyyy;
    var fiile = [{
        filename :"CV-"+val[1]+"-"+val[0]+"-"+today+"."+files.cv.name.split(".")[1],
        content: files.cv
  },{
    filename :"LM-"+val[1]+"-"+val[0]+"-"+today+"."+files.lettre.name.split(".")[1],
    content: files.lettre
  }
]
var subjectt ="Candidature :"+val[1]+" "+val[0]+"-"+today
  var table = `
  <table style="width:100%;border:1px solid #222 margin-top:50px;">
                <tr><td><img src="https://nsa40.casimages.com/img/2021/03/12/mini_210312011718614711.png" alt="MNC"><td>
                </tr>`;
  for (var i = 0; i < col.length; i++) {
    table = table +'<tr style="color:#222"><td style="padding: 15px; border: 1px solid #999;">' + String(col[i]).replace(/_/g," ") +' :</td><td style="padding: 15px;border: 1px solid #999;">' + val[i]+'</td></tr>'
  }
   table = table+ '</table>';
    try {
      const emailOptions = {
        to: "anas98lam@gmail.comnpx s",
        subject: subjectt,
        html: "<html>"+table+"</html>",
        attachments : fiile
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to admin`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to admin`, err)
      ctx.send({ error: 'Error sending email' })
    }
  }
  else {
    console.log("no file")
  }
    return "test"
  },
}