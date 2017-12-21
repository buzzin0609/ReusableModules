/**
 * Created by Will Busby on 03/09/2017.
 * Description: Find something in a mixed object/array variable
 */

import isObject from './isObject';

/**
 * Find any property inside a mixed object/array variable.
 * @param {object|Array} variable - the variable to search
 * @param {string} propToFind - what to look for
 * @returns {Array|object|boolean} will return the value of the prop or false
 */
export default function deepSearch(variable, propToFind, valueToFind) {
	if (isObject(variable)) {
		if (variable[propToFind]) {
			if (!valueToFind) return variable[propToFind];

			if (variable[propToFind] === valueToFind) return variable;
		};

		const props = Object.keys(variable);
		for (let i = 0; i < props.length; i++) {
			const value = variable[props[i]];
			const result = deepSearch(value, propToFind, valueToFind);
			if (result) return result;
		}
	}

	if (Array.isArray(variable)) {
		for (let i = 0; i < variable.length; i++) {
			const value = deepSearch(variable[i], propToFind, valueToFind);
			if (value) return value;
		}
	}

	return false;
}

