var todoList = [];

var action = "";

while (!action.includes("quit")) {

	action = prompt("What would you like to do?");

	if (action.includes("new")) {
		addToDo();	
	}
	else if (action.includes("list")) {
		listToDo();
	}
	else if (action.includes("delete")){
		removeToDo();
	}
	else if (!action.includes("quit")) {
		alert("Invalid action, try again");
	}
}

function listToDo() {
	console.log("********");
	todoList.forEach(function(item, i) {
		console.log(i + ": " + item);
	});
	console.log("********");	
}

function addToDo() {
	todoList.push(prompt("Item to be added"));
	console.log ("Item added");
}

function removeToDo() {
	var removeIndex = prompt("Enter index of item to delete");
	todoList.splice(removeIndex,1)
	console.log("Deleted Todo");
	// var newToDo = [];
	// todoList.forEach(function(item,i) {
	// 	if (i !== Number(removeIndex)) {
	// 		newToDo.push(item);
	// 	}
	// });
	// todoList=newToDo;

}
