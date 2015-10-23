'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, r, p[, rand] )
*	Creates a multidimensional array of negative binomial distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with negative binomial random numbers
*/
function random( dims, r, p, rand ) {
	var draw = partial( r, p, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
