'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, r, p[, rand] )
*	Creates an array of negative binomial distributed random numbers.
*
* @param {Number} len - array length
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with negative binomial random numbers
*/
function random( len, r, p, rand ) {
	var out,
		draw,
		i;

	draw = partial( r, p, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
