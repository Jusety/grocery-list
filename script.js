const grocList = document.getElementsByClassName("grocList");
const pencil   = document.querySelector("#pencil");
const allItems = document.querySelector("#allItems")
const userInp  = document.getElementById("userInp");

pencil.addEventListener("click", function() {
	allItems.innerHTML = "";
})

userInp.addEventListener("keydown", function(event) {
	if(event.key == "Enter")
		addItem();
})

function addItem() {
	const h2       = document.createElement("h2");
	h2.textContent = "- " + userInp.value;
	
	h2.addEventListener("click", function() {
		h2.style.textDecoration = "line-through";
	})
	
	allItems.appendChild(h2);
	
	userInp.value = "";
}