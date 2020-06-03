class Car {

    constructor(color = 'white') {
        this.wheels = 4;
        this.color = color;
    }  

    drive(){}
}

class Toyota extends Car {
    constructor(color = 'blue') {

        if (color == 'blue') {
            color = 'toyota light blue';
        }
        super(color);

        this.brand = 'toyota';
        // this.color = color; // bad solution
    }

    specialToyotaFeature(){}
}

class Camry extends Toyota {
    constructor(engine = '3.5') {
        super();

        this.model = 'Camry';
        this.engine = engine;
    }
}


// var car_1 = new Toyota('black');

var myCar = new Camry('2.5');

// console.log(myCar);


class Parent {
    constructor() {
        this.prop1 = 100;
    }

    parentMethod() {}
}


class Child extends Parent {
    childMethod() {}
}


class ChildChild extends Child {
    constructor() {
        super();
        this.prop2 = 200;
    }

    childChildMethod() {}
}

var child = new ChildChild();

// console.log(child)

// ------------------------------------

class Factory {
    constructor(factor) {
        this.power = 100*factor;
    }

    changePower(value) {
        if (value < 0) return;

        this.power = value;
    }

    static getFactoryName() {
        console.log(this);
        return 'static name'
    }
}

// var f1 = new Factory(3);

// f1.changePower(230);

// console.log(f1);

// console.dir(Factory);
// console.log(Factory.getFactoryName());

// ---------------------------------------


class RenderList {
    constructor(list, target) {
        this.list = list;
        this.target = target;
        this.template = null;
    }


    render() {
        var template;
        if (this.template) {
            template = this.template
        } else {
            template = document.createElement('ul');
            template.setAttribute('special',  RenderList.specialIdGenerator())
        }
        
        
        if (template.children.length) {
            for (var i = template.children.length - 1; i >= 0; i--) {
                template.children[i].remove();
            }
        }
        for (var i = 0, li; i < this.list.length; i++) {
            li = document.createElement('li');
            li.innerHTML = this.list[i];
            template.appendChild(li);
        }

        this.template = template;

        // console.dir(this.target);

        this.target.appendChild(template);
        // this.target.innerHTML = template;
    }

    updateList(newList) {
        this.list = newList;

        this.render();
    }

    remove() {
        this.target.remove();
    }

    static getLists() {
        return document.querySelectorAll('[special]')
    }

    static removeAllLists() {
        var lists = document.querySelectorAll('[special]');
        for (var i = lists.length - 1; i >= 0; i--) {
            lists[i].remove();
        }
    }

    static specialIdGenerator() {
        return Math.floor(Math.random()*100);
    }
}


window.addEventListener('load', function() {
    var renderList = new RenderList([1, 4, 5, 6, 2, 3], document.querySelector('#container-1'));
    renderList.render();
    renderList.updateList([2, 4, 5]);


    var renderList2 = new RenderList(["asdasd", "sadasd", "asddgsdfg"], document.querySelector('#container-2'));
    renderList2.render();
})

