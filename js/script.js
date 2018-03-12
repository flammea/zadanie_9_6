var list = document.getElementById('list')
var add = document.getElementById('addElem')

add.addEventListener('click', function (e) {
	var element = document.createElement('li');
	var number = document.getElementsByTagName('li');
	element.innerHTML = 'item' + ' ' + (number.length);
	list.appendChild(element);
	});
