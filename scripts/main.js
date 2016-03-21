
var userInput = document.querySelector('.userInput');
var toDoItems = document.querySelector('.toDoItems');
var toDoList = document.querySelector('.toDoList');
var addBtn = document.querySelector('.addBtn');
var resetBtn = document.querySelector('.resetBtn');

var userInput = [];

function clearText() {
	toDoItems.value = '';
};

function render() {
	var newListItems = '';
	for (var i = 0; i < userInput.length; i++) {
		newListItems += '<div><input type="checkbox"> ' + userInput[i] + ' </div>' + '<br>';
		toDoList.innerHTML = newListItems;
	}
};

toDoItems.addEventListener('click', clearText);

addBtn.addEventListener('click', function() {
	userInput.push(toDoItems.value);
	render();
	console.log(userInput);
	console.log(toDoItems.value);
});

resetBtn.addEventListener('click', function() {
	userInput = [];
	console.log(userInput);
	newListItems = '';
	toDoList.innerHTML = '';
});
