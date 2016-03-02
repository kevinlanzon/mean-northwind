'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  Category = mongoose.model('Category');

/**
 * Unit tests
 */
describe('Category Model', function() {

  describe('#Saving', function() {
	  it('saves new record', function(done) {
	  	var category = new Category({
	  		name: 'Drinks',
	  		description: 'Beer, Wine, Gin'
	  	});

	  	category.save(function(error, saved) {
        should.not.exist(error);
        done();
	  	});
	  });

	  it('throws a validation error when name is empty', function(done) {
	  	var catergory = new Category({
	  		description: 'Beer, Wine, Gin'
	  	});

	  	catergory.save(function(err) {
	  		err.errors.name.message.should.equal('Name cannot be blank');
	  		done();
	  	});
	  });

	  it('throws a validation error when name longer than 15 chars');

	  it('throws a validation error for duplicate category name');
  });
});