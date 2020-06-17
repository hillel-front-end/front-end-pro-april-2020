

var async = new Promise(function(resolve , reject){
    setTimeout(function(){
        reject('data from async code');
        // reject('error from async code');
    }, 1000)
})


// .then() -> Promise.resolve();
// .then() -> Custom promise


async
    .then(
        function(response){
            console.log('resolved 1', response);

            // return response;
            // return Promise.resolve(response);
            // return new Promise(function(resolve, reject) {
            //     setTimeout(function(){
            //         resolve(response);
            //     }, 2000);
            // });
        }, 
        function(error) { 
            console.warn('rejected 1', error); 

            // return error; 
            return Promise.resolve(error);
        }
    )
    .then(
        function(response){
            console.log('resolved 2', response);

            return response;
        }, 
        function(error) { 
            console.warn('rejected 2', error); 

            // return error; 
            return Promise.resolve(error);
        }
    );


// Promise.all, Promise.race, .finally()

// -----------------------------


// AJAX - Asynchronous Javascript and XML
// XHR - XMLHttpRequest


var async = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './data.txt');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // console.log(xhr.responseText);
            resolve(xhr.responseText)
        }
    }
    xhr.send();
})

async.then(function(resp){
    console.log(resp);
})


fetch('./data.txt')
    .then(function(resp){
        console.log(resp);
    })