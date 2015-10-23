'use strict';

// MODULES //

var randPoisson = require( 'distributions-poisson-random/lib/number.js' ),
	randGamma = require( 'distributions-gamma-random/lib/number.js' );


// GENERATE NEGATIVE BINOMIAL RANDOM NUMBERS //

/**
* FUNCTION random( r, p[, rand] )
*	Generates a random draw from a negative binomial distribution with parameters `r` and `p`.
*
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( r, p, randp ) {
	var beta,
		ret,
		rand;

	rand = randp ? randp : Math.random;
	beta = ( 1 - p ) / p;
	ret = randPoisson( randGamma( r, beta, rand ), rand );

	return ret;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
