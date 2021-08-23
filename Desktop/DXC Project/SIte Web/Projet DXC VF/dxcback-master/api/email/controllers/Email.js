'use strict'
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
  send1: async (ctx) => {
    console.log(ctx)
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
var subjectt ="NEW DXC WEBSITE CONTACT From : "+val[0]+" "+val[1]+"("+today+")"
  console.log(col);
  console.log(val);
  var table = `</h3>
  <table style="width:100%;border:1px solid #000 margin-top:50px;">
                <tr><td><img src="https://nsa40.casimages.com/img/2021/07/01/210701040754152115.png" alt="DXCstr"><td>
                </tr>`;
  for (var i = 0; i < col.length; i++) {
    table = table +'<tr style="color:#000"><td style="padding: 15px; border: 1px solid #000;">' + String(col[i]).replace(/_/g," ") +'</td><td style="padding: 15px;border: 1px solid #999;">' + val[i]+'</td></tr>'
  }
   table = table+ '</table>';
  console.log(table);
    try {
      const emailOptions = {
        to: "anas98lam@gmail.com",
        subject: subjectt,
        html: "<html>"+table+"</html>",
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
var subjectt ="Candidature de : "+val[1]+" "+val[0]+"("+today+")"
  var table = `
  <table style="width:100%;border:1px solid #222 margin-top:50px;">
                <tr><td><img src="https://nsa40.casimages.com/img/2021/07/01/210701034655533839.png" alt="MNC"><td>
                </tr>`;
  for (var i = 0; i < col.length; i++) {
    table = table +'<tr style="color:#222"><td style="padding: 15px; border: 1px solid #999;">' + String(col[i]).replace(/_/g," ") +' :</td><td style="padding: 15px;border: 1px solid #999;">' + val[i]+'</td></tr>'
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
  }
}