// https://github.com/jaredhanson/passport-facebook

module.exports = {
  facebookAuth: {
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECRET,
    callbackURL: `${process.env.APP_URL}/auth/facebook/callback`,
    profileFields: ['name', 'id', 'first_name', 'last_name', 'email']
  }
};