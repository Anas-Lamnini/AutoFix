module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9191),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f6ce2783cf5ad5538188e6633dbdec27'),
    },
  },
});
