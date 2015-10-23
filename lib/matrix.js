'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, r, p[, rand] )
*	Creates a matrix of negative binomial distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with negative binomial random numbers
*/
function random( dims, dt, r, p, rand ) {
	var out,
		draw,
		i;

	draw = partial( r, p, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
