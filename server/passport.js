var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');


module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user);
	})

	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	})

	/**
	 * google verify function
	 */
    passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {
	    	process.nextTick(function(){
                console.log('accessToken', accessToken);
                console.log('refreshToken', refreshToken);
                console.log('profile', profile);
                return done(null, profile);
	    	});
	    }

	));
}