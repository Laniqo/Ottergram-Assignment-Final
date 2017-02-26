/* Hijack the links on a page */

var links = document.getElementsByTagName('a');
var all = [].slice.call(links);
all.forEach(function(element){
	element.addEventListener('click', function(event){
	event.preventDefault();
	console.log('Stop. Link Hijacked. ;)');
	});	
});