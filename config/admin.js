module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b6ed3e06b6db0fe440f9e8313e65397'),
  },
});
