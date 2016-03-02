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

	  	category.save(function(err, saved) {
        should.not.exist(err);
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

	  it('throws a validation error when name longer than 15 chars', function(done) {
	  	var category = new Category({
	  	  name: 'Delicious Homemade Dishes'
	    });

	    category.save(function(err, saved) {
	    	should.exist(err);
	    	err.errors.name.message.should.equal('Name must be 15 characters in length or less');
	    	done();
	    });
	  });

	  it('throws a validation error for duplicate category name', function(done) {
	  	var category = new Category({
	  		name: 'Drinks'
	  	});

	  	category.save(function(err) {
	  		should.not.exist(err);

	  		var duplicate = new Category({
	  			name: 'Drinks'
	  		});

	  	duplicate.save(function(err) {
	  		err.err.indexOf('$name').should.not.equal(-1);
	  		err.err.indexOf('duplicate key error').should.not.equal(-1);
	  		should.exist(err);
	  		done();
	  	});
	  });
  });
});

afterEach(function(done) {
    // Deletes all categories run against a test database
    Category.remove().exec();
    done();
  });
});
