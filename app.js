/* exported fruitItems*/
for(var i = 0; i < fruitItems.length; i++) {
    
    renderFruit(fruitItems[i]); 
}

function renderFruit(x) {
    
    var newListElement = document.getElementById('fruit-list');
    const li = x.createLi();
    newListElement.appendChild(li);
}