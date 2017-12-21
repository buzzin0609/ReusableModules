/**
 * Description: Convience function to make requestAnimationFrame a thenable function to use with async/await functions
 */

export default function raf() {
	return new Promise(resolve => {
		requestAnimationFrame(function() {
			resolve();
		});
	})
}