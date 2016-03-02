'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Product = mongoose.model('Product');

/**
 * Globals
 */
var user, product;

/**
 * Unit tests
 */
describe('Product API', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			provider: 'local'
		});
		user.save(done);
	});

	afterEach(function(done) {
		Product.remove().exec();
		User.remove().exec();
		done();
	});
});
