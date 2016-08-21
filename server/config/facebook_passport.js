module.exports = {
  config: {
    failureRedirect: '/login', // need a failure route
    successRedirect: '/',
    scope: ['email'],
  },
};
