


// alert();

// for(var i = 0; i < 10000; i++){
//     console.log('iteration ' + i);
// }

var start = Date.now();
// console.log(start); 
// setTimeout(
//     function(){ // async
//         var end = Date.now();
//         console.log('timer', end - start);
//     }, 
// 1000);


// console.log('AFTER');
// for(var i = 0; i < 1000; i++){
//     console.log('iteration ' + i);
// }
// alert();

// function afterTimer(x) {
//     f1(x)
//     f2(x);
// }

// function f1(a) {}
// function f2(b) {

//     f1(b*2);


//     f3();
// }

// function f3(){
//     f4();
// }

// function f4(){}

// ---------------------------------
// Promise

console.log('BEFORE Promise');
var timer = new Promise(function(resolve, reject){

    console.log('IN Promise');
    // resolve(); // Promise will be success
    // reject(); // Promise will be rejected

    var time = Math.floor(Math.random()*2000) + 1000;
    var x = Math.floor(Math.random()*200);
    // async block start
    setTimeout(function(){
        if (x % 2 == 0) {
            resolve(x);
        }
        
        reject(x);
    }, time);
    // async block end
    
});
console.log('AFTER Promise');


// timer
//     .then(
//         function(data){
//             console.log('PROMISE DONE', data);
//         },
//         function(errorValue){
//             console.log('PROMISE REJECTED', errorValue);
//         }
//     );

timer
    .then(timerHandler)
    .then(function(data) { 
        console.log('then 2', data); 
        return data/10;
    })
    .then(function(data) { 
        console.log('then 3', data); 
        return data.toString(); 
    })
    .then(function(data) { 
        console.log('then 4', data); 
    })
    .catch(onTimerErrorHandler)


function timerHandler(data){
    console.log('PROMISE DONE', data);

    return data;
}

function onTimerErrorHandler(errorValue) {
    console.log('PROMISE REJECTED', errorValue);
}


