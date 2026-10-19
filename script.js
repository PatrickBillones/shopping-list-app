const message = document.getElementById("message");

message.classList.add("highlight");

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {

      message.classList.toggle("highlight");
    if (message.classList.contains("highlight")) {
       toggleBtn.textContent="Remove Highlight";

} else {
       toggleBtn.textContent="Add Highlight";

    
}

});

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
       darkModeBtn.textContent="Light Mode";

} else {
       darkModeBtn.textContent="Dark Mode";

    
}

});


const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function () {
           if (itemInput.value.trim() === "") {
          return;
          
       }
        

       const editBtn = document.createElement("button");
          editBtn.textContent = "Edit";
          const itemName = document.createElement("span");
          editBtn.addEventListener("click", function () {
              const newName = prompt("Enter the new item name:");
               if (newName === null || newName.trim() === "" ) {
                       return;
                   }
              itemName.textContent= newName;

              
          });
       
       
          const li = document.createElement("li");
         li.addEventListener("click", function () {
         li.classList.toggle("completed");
     });
    
    const deleteBtn = document.createElement("button");
       deleteBtn.textContent="Delete";
       deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        if (confirm("Are you sure you want to delete this item?")) {
           li.remove();
         }
        });
    
        itemName.textContent= itemInput.value;
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        li.appendChild(itemName);
        itemList.appendChild(li);

    itemInput.value=""

});


