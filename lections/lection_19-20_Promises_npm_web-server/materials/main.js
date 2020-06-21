

var async = new Promise(function(resolve , reject){
    // setTimeout(function(){
    //     reject('data from async code');
    //     // reject('error from async code');
    // }, 1000)
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


// var async = new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     console.log(xhr)

//     xhr.open('GET', './example-data.json');


//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             // console.log(xhr.responseText);
//             var data = JSON.parse(xhr.responseText);
//             resolve(data);
//         }
//     }


//     var struct = {
//         name: 'Vaysa',
//         age: 40
//     };

//     xhr.send(JSON.stringify(struct));
// })

// async.then(function(resp){
//     // console.log(resp);
// })


// fetch('./data.txt')
//     .then(function(resp){
//         // console.log(resp);
//     })






// var xhr = new XMLHttpRequest();
// xhr.addEventListener('readystatechange', function() {
//     console.log(xhr.readyState, xhr);
//     if (xhr.readyState != 4) return;

//     console.log(JSON.parse(xhr.responseText));
// });

// xhr.addEventListener('progress', function(event){
//     console.log('progress', event);
// })

// xhr.addEventListener('loadstart', function(event){
//     console.log('loadstart', event);
// })

// xhr.addEventListener('loadend', function(event){
//     console.log('loadend', event);
// })

// xhr.addEventListener('load', function(event){
//     console.log('load', event);
// })

// xhr.open('GET', 'example-data.json');
// xhr.send();



// -----------------------------------------------------

// fetch('example-data.json')
//     .then(function(response){
//         return response.json();
//         // return response.text();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

// req('example-data.json')
//     .then(function(data) {
//         console.log(data);
//     })


// function req(url, options){
//    return fetch(url, options)
//         .then(function(response){
//             return response.json();
//         }) 
// }



// -----------------------------------------------------


fetch('example-data.json')
        .then(function(resp){
            return resp.json();
        })
        .then(function(data) {
            render('body', data.list);
        })



function render(target, list){
    var target = document.querySelector(target);


    var value = 35;
    var str = `
        <h1>Hello world - ${getItem(value)}</h1>
        <ul>
            ${getListItem(list)}
        </ul>
    `

    target.innerHTML += str;
}


function getItem(value) {
    return `<div class="test">${value}</div>`;
}

function getListItem(list) {
    return list.map(function(val) { return `<li>${val}</li>`; }).join('');
}


window.onload = function() {
    var form = document.querySelector('.form-send');
    console.log(form)
    form.addEventListener('click', function(){
        console.log('send data');

        var data = document.querySelector('#user-name').value;
    
        // if (!data || data.length < 2) {
        //     console.warn('no data');
        //     return;
        // }

        fetch('/user', {
            method: 'POST',
            body: JSON.stringify({
                name: data
            })
        }).then(function(resp){
            return resp.json();
        }).then(function(response){
            console.log(response)
        })

    })
}
