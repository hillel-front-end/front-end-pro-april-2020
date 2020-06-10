console.log('Lection_17');


var list = [1, '-22', 0,  '-3', '4234asdfgsd', '5', -6, 9, '0',10];

// foreach

// list = [3, 6, 4];

for (var i = 0; i < list.length; i++) {
    // console.log( list[i] );

    if (i == 3) {
        break;
    }
}

console.log('------------------------------');

var result = list.forEach(function(value, index, arr) {
    // console.log(value);
});

console.log('------------------------------');

// console.log(result);

window.addEventListener('load', function() {
    var buttons = document.querySelectorAll('.btns');

    // console.log(buttons);
    // for(var i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', function() {
    //         console.log('clicks');
    //     })
    // }

    // buttons.forEach(function(btn){
    //     btn.addEventListener('click', function() {
    //         console.log('clicks');
    //     })
    // })
    
})

// map
list = [99, -66, 78, -65, -120]

var result = list.map(function(value, index, arr) {
    if (value <= -100) {
        return value;
    }

    return Math.abs(value);
});


list = [99, -66, 78, -65, -120]

var result = list.map(function(value, index, arr) {
    return {
        value: value,
        pos: index
    }
});

result = result.map(function(struct, index, arr) {
    return struct.value + " : " + struct.pos
});



console.log('------------------------------');

// console.log(result);


// filter

list = [99, -166, 78, -65, -120]

var result = list.filter(function(value, index, arr) {
    return value <= 0;
})

// console.log(result);

// console.log(list);
console.log('------------------------------');
window.addEventListener('load', function() {

    list
        .map(function(val) { return Math.abs(val) })
        .filter(function(val) { return val > 100 })
        .map(function(val) { return "<h1>" + val + "</h1>" })
        .forEach(function(val) { 
            document.querySelector('.target-container').innerHTML += val;
        });
})


// practice

// merge values, comma-separated
var tree = {
    value: 'item 1',
    children: {
        value: 'item 2',
        children: {
            value: 'item 3',
            children: {
                value: 'item 4',
                children: {
                    value: 'item 5'
                }
            }
        }
    }
};



var mergeValues = mergeValue(tree);
// console.log(mergeValues);


function mergeValue(node) {
    if (!node.children) return node.value;

    return node.value + ', ' + mergeValue(node.children);
}


var treeDeep = {
    value: 'Item 0',
    children: [
        {
            value: 'Item 1',
            children: [
                {
                    value: 'Item 4'
                },
                {
                    value: 'Item 5',
                    children: [
                        {
                            value: 'Item 13'
                        }
                    ]
                },
                {
                    value: 'Item 6',
                    children: [
                        {
                            value: 'Item 14'
                        },
                        {
                            value: 'Item 15'
                        }
                    ]
                }
            ]
        },
        {
            value: 'Item 2',
            children: [
                {
                    value: 'Item 7'
                },
                {
                    value: 'Item 8'
                },
                {
                    value: 'Item 9'
                }
            ]
        },
        {
            value: 'Item 3',
            children: [
                {
                    value: 'Item 10'
                },
                {
                    value: 'Item 11'
                },
                {
                    value: 'Item 12'
                }
            ]
        }
    ]
}

var allDeepItems = mergeDeepTree(treeDeep)
// console.log('RESULT', allDeepItems)

function mergeDeepTree(node) {
    if (!node.children) {
        return node.value;
    }

    var list = node.children.map(function(leaf) {
        return mergeDeepTree(leaf)
    });

    return [node.value].concat(list.flat());
}


// some/every

list = [99, 166, 'ss', 78, -65, 120]

var result = list.every(function(value, index, arr) {
    return typeof value == 'number';
})

console.log(result);


var result = list.some(function(value, index, arr) {
    return value < 0;
})

console.log(result);

// flat

var list = [1, [4, 5, 6], 3, [7, 8, 9, [99, 88]], {x: 10}];

console.log( list.flat(2) );


// reduce

// find

