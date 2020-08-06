let yourName = prompt("What is your name?");

document.getElementById("yourName").innerHTML = yourName;



const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");



class item{
    constructor(itemName){

        // create the item div
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');
        editButton.addEventListener("click" , () => this.edit(input));

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');
        removeButton.addEventListener("click" , () => this.remove(itemBox));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

     
      

    }
    edit(input){
      if(input.disabled == true)  {
          input.disabled =! input.disabled;
      }

    }
    remove(item){
        container.removeChild(item);
    }
}
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener("click" , check);
window.addEventListener('keydown' , (e) => {
    if(e.which == 13){
        check();
    }
})
