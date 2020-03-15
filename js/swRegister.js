if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Worked');
	})
	.catch(function() {
		console.log('Failed');
	});
}