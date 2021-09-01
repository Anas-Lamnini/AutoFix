'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {


  async create(ctx) {
    if (ctx.is('multipart')) {
      console.log("ana")
      try{
        const { data, files } = parseMultipartData(ctx);
        console.log(files)
      }catch(err){
        console.log(err)
      }
    }
    else {
      console.log("no file")
    }
    return "done"
  },
};