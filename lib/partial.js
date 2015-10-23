'use strict';

// MODULES //

var randGamma = require( 'distributions-gamma-random/lib/partial.js' ),
	randPoisson = require( 'distributions-poisson-random/lib/number.js' );


// PARTIAL //

/**
* FUNCTION: partial( r, p[, rand] )
*	Partially applies `r` and `p` and returns a function to generate random variates from the negative binomial distribution.
*
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( r, p, rand ) {
	var random,
		rGamma,
		beta;

	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}

	beta = ( 1 - p ) / p;
	rGamma = randGamma( r, beta, random );

	/**
	* FUNCTION: draw()
	*	Generates a random draw for a negative binomial distribution with parameters `r` and `p`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var gammaRV = rGamma();
		return randPoisson( gammaRV, random );
	}; // end FUNCTION draw()

} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
