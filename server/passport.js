var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');


module.exports = function(passports) {
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
                done();
	    	});
	    }

	));
}