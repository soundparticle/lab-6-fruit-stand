// pineapple object
var pineapple = {
    name: 'Pineapple',
    color: 'yellow',
    imageSrc: 'images/pineapple.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        var pineappleImage = document.createElement('img');
        pineappleImage.setAttribute('src', this.imageSrc);
        li.textContent = this.name;
        li.appendChild(pineappleImage);
        return li;
    }
}

//kiwi object
var kiwi = {
    name: 'Kiwi',
    color: 'green',
    imageSrc: 'images/kiwi.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        var kiwiImage = document.createElement('img');
        kiwiImage.setAttribute('src', this.imageSrc);
        li.textContent = this.name;
        li.appendChild(kiwiImage);
        return li;
    }
}

// mango object
var mango = {
    name: 'Mango',
    color: 'orange',
    imageSrc: 'images/mango.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        var mangoImage = document.createElement('img');
        mangoImage.setAttribute('src', this.imageSrc);
        li.textContent = this.name;
        li.appendChild(mangoImage); 
        return li;
    }
}

//coconut object
var coconut = {
    name: 'Coconut',
    color: 'white',
    imageSrc: 'images/coconut.jpeg',

    createLi: function() {
        var li = document.createElement('li');
        var coconutImage = document.createElement('img');
        coconutImage.setAttribute('src', this.imageSrc);
        li.textContent = this.name;
        li.appendChild(coconutImage);
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

