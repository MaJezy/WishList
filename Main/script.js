function addItem(newItem) {  //задаёт функцию, создающий новый элемент
    if(newItem.length === 0) return;  //предотвращает создание элемента при пустом окне ввода
            
   let listHtml = `
   <li class="collection-item">
     <div>${newItem}<a href="#!" class="secondary-content"><i class="material-icons del"><img src="trashbin.png" alt="удалить" width="24px" height="24px"></i></a>
     </div>
   </li>                 
   `;      
                
   let collection = document.querySelector('.collection');
   collection.insertAdjacentHTML('beforeend', listHtml);
   
   let newDel = document.querySelectorAll(".del");
   newDel[newDel.length-1].onclick = function() {
       this.parentNode.parentNode.remove (this);
     }
}

window.onload = main;

function main() { //Скрипт, дающий функцию добавления элемента в список
    addItemEle = document.querySelector("#addItem");
    
    addItemEle.addEventListener("keyup", function(e) {
        e.preventDefault();
        if(e.keyCode===13) {
            addItem(e.target.value);
            e.target.value = "";
        }
    }, false);
    
    let del = document.querySelectorAll(".del"); //Скрипт, дающий функцию удаления элемента из списка
    for (let i = 0; i < del.length; i++) { 
        del[i].onclick = function() {
            this.parentNode.parentNode.remove (this);} 
    }
}

