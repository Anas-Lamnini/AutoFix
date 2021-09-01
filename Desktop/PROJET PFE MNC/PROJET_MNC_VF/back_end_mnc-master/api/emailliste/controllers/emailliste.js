'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.emailliste.create(data, { files });
    } else {
      entity = await strapi.services.emailliste.create(ctx.request.body);
    }
    const sendTo=entity.email;
    const name = entity.email.split('@')[0];
    const lng= ctx.params.lg;
    var emailOptions;
    try {
       if(lng=='en'){
         emailOptions = {
          to: sendTo,
          subject: 'Welcome '+name+' to MNC',
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
          <head>
          <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
          <meta content="width=device-width" name="viewport"/>
          <!--[if !mso]><!-->
          <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
          <!--<![endif]-->
          <title></title>
          <!--[if !mso]><!-->
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css"/>
          <!--<![endif]-->
          <style type="text/css">
              body {
                margin: 0;
                padding: 0;
              }
          
              table,
              td,
              tr {
                vertical-align: top;
                border-collapse: collapse;
              }
          
              * {
                line-height: inherit;
              }
          
              a[x-apple-data-detectors=true] {
                color: inherit !important;
                text-decoration: none !important;
              }
            </style>
          <style id="media-query" type="text/css">
              @media (max-width: 700px) {
          
                .block-grid,
                .col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
                }
          
                .block-grid {
                  width: 100% !important;
                }
          
                .col {
                  width: 100% !important;
                }
          
                .col_cont {
                  margin: 0 auto;
                }
          
                img.fullwidth,
                img.fullwidthOnMobile {
                  max-width: 100% !important;
                }
          
                .no-stack .col {
                  min-width: 0 !important;
                  display: table-cell !important;
                }
          
                .no-stack.two-up .col {
                  width: 50% !important;
                }
          
                .no-stack .col.num2 {
                  width: 16.6% !important;
                }
          
                .no-stack .col.num3 {
                  width: 25% !important;
                }
          
                .no-stack .col.num4 {
                  width: 33% !important;
                }
          
                .no-stack .col.num5 {
                  width: 41.6% !important;
                }
          
                .no-stack .col.num6 {
                  width: 50% !important;
                }
          
                .no-stack .col.num7 {
                  width: 58.3% !important;
                }
          
                .no-stack .col.num8 {
                  width: 66.6% !important;
                }
          
                .no-stack .col.num9 {
                  width: 75% !important;
                }
          
                .no-stack .col.num10 {
                  width: 83.3% !important;
                }
          
                .video-block {
                  max-width: none !important;
                }
          
                .mobile_hide {
                  min-height: 0px;
                  max-height: 0px;
                  max-width: 0px;
                  display: none;
                  overflow: hidden;
                  font-size: 0px;
                }
          
                .desktop_hide {
                  display: block !important;
                  max-height: none !important;
                }
              }
            </style>
          <style id="icon-media-query" type="text/css">
              @media (max-width: 700px) {
                .icons-inner {
                  text-align: center;
                }
          
                .icons-inner td {
                  margin: 0 auto;
                }
              }
            </style>
          </head>
          <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
          <!--[if IE]><div class="ie-browser"><![endif]-->
          <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top;" valign="top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
          <div style="background-color:#ffffff;">
          <div class="block-grid two-up no-stack" style="min-width: 320px; width: 100%; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #18a0db;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#18a0db;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#18a0db"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="340" style="background-color:#18a0db;width:340px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
          <div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 336px; width: 340px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <div align="left" class="img-container left autowidth" style="padding-right: 0px;padding-left: 0px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="left"><![endif]-->
          <div style="font-size:1px;line-height:15px"> </div><img alt="Yourlogo" border="0" class="left autowidth" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-upib870ic5o/editor_images/5d11abf5-9109-46d8-8d84-a89e5a9d5521.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 139px; display: block;" title="Yourlogo" width="139"/>
          <!--[if mso]></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td><td align="center" width="340" style="background-color:#18a0db;width:340px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
          <div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 336px; width: 340px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-top: 45px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="right" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
          <tbody>
          <tr align="right" style="vertical-align: top; display: inline-block; text-align: right;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124815716987.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="facebook" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124816708541.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="twitter" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124816200415.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="instagram" width="32"/></a></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:transparent;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="80" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 80px; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td height="80" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#18a0db;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #18a0db; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
          <p style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 50px; mso-line-height-alt: 60px; margin: 0;"><span style="font-size: 50px;">Welcome `+ name +`, to </span></p>
          <p style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 50px; mso-line-height-alt: 60px; margin: 0;"><span style="font-size: 50px;">Maroc Numeric Cluster</span></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="40" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 40px; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td height="40" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="70" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td height="70" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Decoration" border="0" class="center autowidth" src="https://nsa40.casimages.com/img/2021/03/08/210308104144461312.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 680px; display: block;" title="Decoration" width="680"/>
          <!--[if mso]></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#f7fafc;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:5px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:60px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 0px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#243747;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #243747; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
          <p style="font-size: 18px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;"><strong>Maroc Numeric Cluster</strong></span></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#f7fafc;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:5px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 20px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#243747;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:20px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; color: #243747; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
          <p style="text-align: center; line-height: 1.5; word-break: break-word; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Maroc Numeric Cluster is a mixed Public / Private governance structure that benefits from the support of the Ministry of Industry, Investment, Trade and Digital Economy.</span></p>
          <p style="text-align: center; line-height: 1.5; word-break: break-word; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Maroc Numeric Cluster brings together, leads and supports actors in the economy and innovation (companies, universities, research centers, start-ups, SMEs).</span></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#f7fafc;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:20px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#243747;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #243747; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 34px;"><span style="">Want to know more about us?</span></span></strong></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid three-up" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="226" style="background-color:#f7fafc;width:226px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:20px;"><![endif]-->
          <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 224px; width: 226px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:20px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #BBBBBB; width: 10%;" valign="top" width="10%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:31.5pt;width:133.5pt;v-text-anchor:middle;" arcsize="24%" stroke="false" fillcolor="#243747"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #243747; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; width: auto; width: auto; border-top: 1px solid #243747; border-right: 1px solid #243747; border-bottom: 1px solid #243747; border-left: 1px solid #243747; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Our services</span></span></a>
          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td><td align="center" width="226" style="background-color:#f7fafc;width:226px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:20px;"><![endif]-->
          <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 224px; width: 226px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:20px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #BBBBBB; width: 10%;" valign="top" width="10%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:31.5pt;width:144.75pt;v-text-anchor:middle;" arcsize="24%" stroke="false" fillcolor="#243747"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #243747; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; width: auto; width: auto; border-top: 1px solid #243747; border-right: 1px solid #243747; border-bottom: 1px solid #243747; border-left: 1px solid #243747; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Our programs</span></span></a>
          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td><td align="center" width="226" style="background-color:#f7fafc;width:226px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:20px;"><![endif]-->
          <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 224px; width: 226px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:20px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #BBBBBB; width: 10%;" valign="top" width="10%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:31.5pt;width:136.5pt;v-text-anchor:middle;" arcsize="24%" stroke="false" fillcolor="#243747"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #243747; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; width: auto; width: auto; border-top: 1px solid #243747; border-right: 1px solid #243747; border-bottom: 1px solid #243747; border-left: 1px solid #243747; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Our partners</span></span></a>
          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#e5e5e5;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e5e5e5;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:transparent;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:20px; padding-bottom:5px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
          <table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
          <tbody>
          <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124815657340.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="facebook" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124816457288.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="twitter" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124815970975.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="instagram" width="32"/></a></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#afafaf;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; color: #afafaf; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
          <p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;">Email : <a _ngcontent-rhx-c182="" href="mailto:mnc@mnc.com" style="color: #afafaf;">mnc@mnc.com</a><br/><a _ngcontent-rhx-c182="" href="tel:+212-6" style="color: #afafaf;">Tel : +212-6-0011-2233</a></p>
          <p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
          <p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"><a _ngcontent-rhx-c182="" style="color: #afafaf;"> Office n° 256, 2nd floor, Technopark Route of Nouacer, Angle RS 114 and CT 1029 Casablanca</a></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if (IE)]></div><![endif]-->
          </body>
          </html>`,
        }
       }
       else{
         emailOptions = {
          to: sendTo,
          subject: 'Bienvenue '+name+' dans MNC',
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
          <head>
          <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
          <meta content="width=device-width" name="viewport"/>
          <!--[if !mso]><!-->
          <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
          <!--<![endif]-->
          <title></title>
          <!--[if !mso]><!-->
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css"/>
          <!--<![endif]-->
          <style type="text/css">
              body {
                margin: 0;
                padding: 0;
              }
          
              table,
              td,
              tr {
                vertical-align: top;
                border-collapse: collapse;
              }
          
              * {
                line-height: inherit;
              }
          
              a[x-apple-data-detectors=true] {
                color: inherit !important;
                text-decoration: none !important;
              }
            </style>
          <style id="media-query" type="text/css">
              @media (max-width: 700px) {
          
                .block-grid,
                .col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
                }
          
                .block-grid {
                  width: 100% !important;
                }
          
                .col {
                  width: 100% !important;
                }
          
                .col_cont {
                  margin: 0 auto;
                }
          
                img.fullwidth,
                img.fullwidthOnMobile {
                  max-width: 100% !important;
                }
          
                .no-stack .col {
                  min-width: 0 !important;
                  display: table-cell !important;
                }
          
                .no-stack.two-up .col {
                  width: 50% !important;
                }
          
                .no-stack .col.num2 {
                  width: 16.6% !important;
                }
          
                .no-stack .col.num3 {
                  width: 25% !important;
                }
          
                .no-stack .col.num4 {
                  width: 33% !important;
                }
          
                .no-stack .col.num5 {
                  width: 41.6% !important;
                }
          
                .no-stack .col.num6 {
                  width: 50% !important;
                }
          
                .no-stack .col.num7 {
                  width: 58.3% !important;
                }
          
                .no-stack .col.num8 {
                  width: 66.6% !important;
                }
          
                .no-stack .col.num9 {
                  width: 75% !important;
                }
          
                .no-stack .col.num10 {
                  width: 83.3% !important;
                }
          
                .video-block {
                  max-width: none !important;
                }
          
                .mobile_hide {
                  min-height: 0px;
                  max-height: 0px;
                  max-width: 0px;
                  display: none;
                  overflow: hidden;
                  font-size: 0px;
                }
          
                .desktop_hide {
                  display: block !important;
                  max-height: none !important;
                }
              }
            </style>
          <style id="icon-media-query" type="text/css">
              @media (max-width: 700px) {
                .icons-inner {
                  text-align: center;
                }
          
                .icons-inner td {
                  margin: 0 auto;
                }
              }
            </style>
          </head>
          <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
          <!--[if IE]><div class="ie-browser"><![endif]-->
          <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top;" valign="top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
          <div style="background-color:#ffffff;">
          <div class="block-grid two-up no-stack" style="min-width: 320px; width:100%; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #18a0db;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#18a0db;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#18a0db"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="340" style="background-color:#18a0db;width:340px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
          <div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 336px; width: 340px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <div align="left" class="img-container left autowidth" style="padding-right: 0px;padding-left: 0px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="left"><![endif]-->
          <div style="font-size:1px;line-height:15px"> </div><img alt="Yourlogo" border="0" class="left autowidth" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-upib870ic5o/editor_images/5d11abf5-9109-46d8-8d84-a89e5a9d5521.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 139px; display: block;" title="Yourlogo" width="139"/>
          <!--[if mso]></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td><td align="center" width="340" style="background-color:#18a0db;width:340px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
          <div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 336px; width: 340px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-top: 45px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="right" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
          <tbody>
          <tr align="right" style="vertical-align: top; display: inline-block; text-align: right;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124815716987.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="facebook" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124816708541.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="twitter" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124816200415.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="instagram" width="32"/></a></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:transparent;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="80" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 80px; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td height="80" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#18a0db;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #18a0db; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
          <p style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 50px; mso-line-height-alt: 60px; margin: 0;"><span style="font-size: 50px;">Bienvenue `+ name +`, dans </span></p>
          <p style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 50px; mso-line-height-alt: 60px; margin: 0;"><span style="font-size: 50px;">Maroc Numeric Cluster</span></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="40" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 40px; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td height="40" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="70" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td height="70" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Decoration" border="0" class="center autowidth" src="https://nsa40.casimages.com/img/2021/03/08/210308104144461312.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 680px; display: block;" title="Decoration" width="680"/>
          <!--[if mso]></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#f7fafc;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:5px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:60px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 0px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#243747;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #243747; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
          <p style="font-size: 18px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;"><strong>Maroc Numeric Cluster</strong></span></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#f7fafc;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:5px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 20px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#243747;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:20px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; color: #243747; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
          <p style="text-align: center; line-height: 1.5; word-break: break-word; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Maroc Numeric Cluster est une structure à gouvernance mixte Public/Privé qui bénéficie du soutien du Ministère de l’Industrie, de l’Investissement, du Commerce et de l’Economie Numérique.</span></p>
          <p style="text-align: center; line-height: 1.5; word-break: break-word; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Maroc Numeric Cluster fédère, anime et accompagne les acteurs de l’économie et de l’innovation ( entreprises, universités, centres de recherche, start ups, PME).</span></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#f7fafc;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:20px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#243747;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; color: #243747; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 34px;"><span style="">Vous voulez en savoir plus sur nous?</span></span></strong></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#ffffff;">
          <div class="block-grid three-up" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f7fafc;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f7fafc;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:#f7fafc"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="226" style="background-color:#f7fafc;width:226px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:20px;"><![endif]-->
          <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 224px; width: 226px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:20px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #BBBBBB; width: 10%;" valign="top" width="10%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:31.5pt;width:133.5pt;v-text-anchor:middle;" arcsize="24%" stroke="false" fillcolor="#243747"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #243747; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; width: auto; width: auto; border-top: 1px solid #243747; border-right: 1px solid #243747; border-bottom: 1px solid #243747; border-left: 1px solid #243747; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Nos services</span></span></a>
          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td><td align="center" width="226" style="background-color:#f7fafc;width:226px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:20px;"><![endif]-->
          <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 224px; width: 226px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:20px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #BBBBBB; width: 10%;" valign="top" width="10%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:31.5pt;width:144.75pt;v-text-anchor:middle;" arcsize="24%" stroke="false" fillcolor="#243747"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #243747; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; width: auto; width: auto; border-top: 1px solid #243747; border-right: 1px solid #243747; border-bottom: 1px solid #243747; border-left: 1px solid #243747; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Nos programs</span></span></a>
          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td><td align="center" width="226" style="background-color:#f7fafc;width:226px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:5px; padding-bottom:20px;"><![endif]-->
          <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 224px; width: 226px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:20px; padding-right: 20px; padding-left: 20px;">
          <!--<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #BBBBBB; width: 10%;" valign="top" width="10%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:31.5pt;width:136.5pt;v-text-anchor:middle;" arcsize="24%" stroke="false" fillcolor="#243747"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #243747; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; width: auto; width: auto; border-top: 1px solid #243747; border-right: 1px solid #243747; border-bottom: 1px solid #243747; border-left: 1px solid #243747; padding-top: 5px; padding-bottom: 5px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Nos partners</span></span></a>
          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
          </div>
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          <div style="background-color:#e5e5e5;">
          <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e5e5e5;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:transparent;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:20px; padding-bottom:5px;"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
          <div class="col_cont" style="width:100% !important;">
          <!--[if (!mso)&(!IE)]><!-->
          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
          <!--<![endif]-->
          <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
          <tbody>
          <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
          <table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
          <tbody>
          <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124815657340.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="facebook" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124816457288.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="twitter" width="32"/></a></td>
          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://nsa40.casimages.com/img/2021/03/08/mini_210308124815970975.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="instagram" width="32"/></a></td>
          </tr>
          </tbody>
          </table>
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
          <div style="color:#afafaf;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
          <div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; color: #afafaf; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
          <p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;">Email : <a _ngcontent-rhx-c182="" href="mailto:mnc@mnc.com" style="color: #afafaf;">mnc@mnc.com</a><br/><a _ngcontent-rhx-c182="" href="tel:+212-6" style="color: #afafaf;">Tel : +212-6-0011-2233</a></p>
          <p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
          <p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"><a _ngcontent-rhx-c182="" style="color: #afafaf;"> Office n° 256, 2nd floor, Technopark Route of Nouacer, Angle RS 114 and CT 1029 Casablanca</a></p>
          </div>
          </div>
          <!--[if mso]></td></tr></table><![endif]-->
          <!--[if (!mso)&(!IE)]><!-->
          </div>
          <!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>
          
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if (IE)]></div><![endif]-->
          </body>
          </html>`,
        }
       }
        await strapi.plugins['email'].services.email.send(emailOptions)
        strapi.log.debug(`Email sent to ${sendTo}`)
        ctx.send({ message: 'Email sent' })
      } catch (err) {
        strapi.log.error(`Error sending email to ${sendTo}`, err)
        ctx.send({ error: 'Error sending email' })
      }
    return sanitizeEntity(entity, { model: strapi.models.emailliste });
  },
};