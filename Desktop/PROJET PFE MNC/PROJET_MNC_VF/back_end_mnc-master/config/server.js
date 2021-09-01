module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 9252),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3c3172cc31294e20ecd8aa4dafb667d0'),
    },
  },
});
