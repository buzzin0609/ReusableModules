/**
 * Test suite for deepSearch module
 */

import expect from 'expect';
import deepSearch from './deepSearch';

describe('deepSearch:', function () {
	const obj = {
		test: 'foo',
		test2: ['bar', 'faz'],
		test3: {
			bar: 'test'
		},
		valueTest: {
			bar: 'foo',
			foo: 'bar'
		},
		valueTest2: {
			bar: 'haz',
			fop: 'foo'
		},
		finalTest: {
			innerTest: [
				'foo',
				{
					findMe: 'gotcha'
				},
				[
					[
						{
							cantFindMe: 'yes i can',
							bar: 'no way you can find me'
						}
					]
				]
			]
		}
	};
	it('should return false if prop not in object', function () {
		expect(deepSearch(obj, 'test4')).toEqual(false);
		expect(deepSearch(obj, 'faz')).toEqual(false);
	});

	it('should return the field if in object', function () {
		expect(deepSearch(obj, 'test3')).toEqual({bar: 'test'});
		expect(deepSearch(obj, 'bar')).toEqual('test');
		expect(deepSearch(obj, 'findMe')).toEqual('gotcha');
		expect(deepSearch(obj, 'cantFindMe')).toEqual('yes i can');
	});

	it('should return variable if prop and value present on variable', function () {
		expect(deepSearch(obj, 'bar', 'foo')).toEqual({
			bar: 'foo',
			foo: 'bar'
		});
		expect(deepSearch(obj, 'bar', 'test')).toEqual({bar: 'test'});
		expect(deepSearch(obj, 'bar', 'test')).toEqual({bar: 'test'});
		expect(deepSearch(obj, 'bar', 'no way you can find me')).toEqual({
			cantFindMe: 'yes i can',
			bar: 'no way you can find me'
		});
	});
});
