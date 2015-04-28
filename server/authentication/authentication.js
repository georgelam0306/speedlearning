module.exports = function(app, passport)
{
	console.log("Initializing passport strategy");
	require('./Strategies/LocalStrategy.js')(passport);
	app.post('/login',
  passport.authenticate('local-login', { successRedirect: '/',
                                   failureRedirect: '/login' }));

}