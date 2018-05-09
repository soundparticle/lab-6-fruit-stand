// pineapple object
var pineapple = {
    name: 'Pineapple',
    color: 'yellow',
    costPerUnit: '$5', 
    imageSrc: 'images/pineapple.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        li.textContent = this.name;
        return li;
    }
}

//kiwi object
var kiwi = {
    name: 'Kiwi',
    color: 'green',
    costPerUnit: '$1',
    imageSrc: 'images/kiwi.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        li.textContent = this.name;
        return li;
    }
}

// mango object
var mango = {
    name: 'Mango',
    color: 'orange',
    costPerUnit: '$2',
    imageSrc: 'images/mango.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        var mangoImage = document.createElement('img');
        mangoImage.setAttribute('src', this.imageSrc);
        li.appendChild(mangoImage); 
        li.textContent = this.name;
        return li;
        createLi: 
    }
}

//coconut object
var coconut = {
    name: 'Coconut',
    color: 'white',
    costPerUnit: '$4',
    imageSrc: 'images/coconut.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        li.textContent = this.name;
        return li;
    }
},

// array of objects
    fruitItems = [
    pineapple,
    kiwi,
    mango,
    coconut,
];

