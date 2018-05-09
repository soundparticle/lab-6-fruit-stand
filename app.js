/* exported fruitItems*/
for(var i = 0; i < fruitItems.length; i++) {
    
    renderFruit(fruitItems[i]); 
}

function renderFruit(fruitNames) {
    
    var newListElement = document.getElementById('fruit-list');
    const li = fruitNames.createLi();
    newListElement.appendChild(li);
}