data = {
    addRecord: function(){
        var last = arguments[arguments.length - 1];
        var isLastBoolean = typeof last == 'boolean';
        var flag = false;
        if (isLastBoolean) {
            flag = last;
        }
        var elem, key;
        for(var i = 0; i < arguments.length - (isLastBoolean ? 1 : 0); i++) {
            elem = arguments[i];
            for(key in elem) {
                if (Object.keys(this).includes(key)){
                        if (!flag) {
                            this[key] = elem[key];
                        }
                        continue;
                };

                this[key] = elem[key];

            }
        }
    },
    p: 600,
    str: 'hello',
    y: -50
}




data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, { data: {y: 60, h: 'hello'} }, true);
console.log(data);

function getRand(from, to){
    return Math.floor(Math.random()*(to - from) + from) + 1;
}


class SuperMath {

    constructor(n, m, config) {
        this._arr = new Array(n);
        for(var i = 0, j; i < this._arr.length; i++) {
            this._arr[i] = new Array(m);
            for(j = 0; j < this._arr[i].length; j++) {
                this._arr[i][j] = getRand(config.min, config.max);
            }
        }
    }

    render(separator = '----------------') {
        for(var i = 0, j; i < this._arr.length; i++) {
            for(j = 0; j < this._arr[i].length; j++) {
                document.write(this._arr[i][j] + ' ');
            }
            document.write('<br />');
        }
        document.write(separator + '<br />');
    }

    clear(direction, k) {
        switch(direction) {
            case 'row': 
                this._arr.splice(k, 1)
                break;
            case 'column':
                for(var i = 0; i < this._arr.length; i++) {
                    this._arr[i].splice(k, 1)
                }
                break;
        }
    }

    setMarker(config) {
        this._buffer = {
            x: config.x,
            y: config.y,
            value: this._arr[config.x][config.y]
        };

        this._arr[config.x][config.y] = '&';
    }

    goTo(config) {
        if (!this._buffer) return;
        this._arr[this._buffer.x][ this._buffer.y] =  this._buffer.value;
        this.setMarker(config);
    }

    shift(direction) {
        if (!this._buffer) return;
        var x = this._buffer.x;
        var y = this._buffer.y;
        switch (direction) {
            case 'left':
                this.goTo({ 
                    x: x, 
                    y: y - 1
                });
                break;
            case 'top':
                this.goTo({ 
                    x: x - 1, 
                    y: y
                });
                break;
            case 'right':
                this.goTo({ 
                    x: x, 
                    y: y + 1
                });
                break;
            case 'bottom':
                this.goTo({ 
                    x: x + 1, 
                    y: y
                });
                break;
        }
    }
}



n = 5;
m = 10;
var test = new SuperMath(n, m, { min: 10, max: 55 });
console.log(test)
test.render();
test.clear('row', 3)
test.render();
test.clear('column', 1)
test.render();
test.setMarker({x: 2, y: 4});
test.render();