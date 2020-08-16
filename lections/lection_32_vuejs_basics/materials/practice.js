const NAMES = ["Vasya", "Katya", "Petya", "Kiril", "Galya", "Savelii", "Lisa", "Ivan", "Aleksandra"];

function getRandName(){
    return NAMES[Math.floor(Math.random()*NAMES.length)];
}

function getRand(min = 1500, max=3000) { 
    return Math.floor(Math.random()*(max-min) + min);
}

var app7 = new Vue({
    el: '.app7-practice',
    data: {
        title: 'App 7 Practice!',
        queue: [
        ],
        leftTable: [],
        rightTable: [],
        maxCapacity: 6,
        enabledEmulating: true
    },
    methods: {
        getTableRow(name) {
            return `<tr><td>${name}</td></tr>`;
        },
        addPerson(name){
            if (!this.enabledEmulating) {
                return;
            }
            this.queue.push(name);
        },
        movePerson(dir = 'left') {
            if (!this.queue.length) {
                return console.warn('Empty');
            }
            let target = this.leftTable;
            if (dir == 'right') {
              target = this.rightTable;
            } 

            target.push(this.queue.shift());
        },
        removePerson(dir = 'left') {
            let target = this.leftTable;
            if (dir == 'right') {
              target = this.rightTable;
            }

            if (target.length) {
                target.shift();
            }
        },
        onStopAdding() {
            this.enabledEmulating = !this.enabledEmulating;
        }
    }
});

setInterval(() => {
    const left = app7.leftTable;
    const right = app7.rightTable;
    // console.log(left.length, right.length)
   if (left.length <= right.length && left.length < app7.maxCapacity) {
    app7.movePerson('left');
   } else if (right.length < left.length && right.length < app7.maxCapacity) {
    app7.movePerson('right');
   } 
}, 500)

setInterval(() => {
    app7.addPerson(getRandName());
}, 300);

function emulateLeftProcessing() {
    app7.removePerson('left');
    setTimeout(emulateLeftProcessing, getRand());
}
setTimeout(emulateLeftProcessing, getRand());

function emulateRightProcessing() {
    app7.removePerson('right');
    setTimeout(emulateRightProcessing, getRand());
}
setTimeout(emulateRightProcessing, getRand());