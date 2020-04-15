console.log('lection 2');

/*
    Тезисы:
        xx-15-00 - Two dimensional arrays
        xx-44-22 - N-dimensional arrays
        xx-49-00 - diagonals and zones
        xx-yy-zz - n-dimensional arrays in the modern web

    Практика:
        01-30-00 - Задача из раздела Лекция
*/


n = 10;
m = 15;

// A = [];
// A.length = n;
A = new Array(n);
for(i = 0; i < A.length; i++) {
    // A[i] = [];
    // A[i].length = m;
    A[i] = new Array(m);
    for(j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*50);
    }
}

// console.log(A);


example = [
    [1, 2, 3], 
    [4, 5], 
    [6, 7], 
    [8], 
    [9,10]
];


max = A[0][0];
for(i = 0; i < A.length; i++) {
    for(j = 0; j < A[i].length; j++){
        // console.log(A[i][j]);
        if(A[i][j] > max){
            max = A[i][j];
        }
    }
}

console.log(max);










// ----------------------------------------------------
list = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0]
];

list2 = [];
listChanged = [];
n = 20;
m = 20;
defaultVal = 0;
list2.length = n;
listChanged.length = n;

for(i = 0; i < list2.length; i++) {
    list2[i] = [];
    listChanged[i] = [];
    list2[i].length = m;
    listChanged[i].length = m;
    for(j = 0; j < list2[i].length; j++) {
        // list2[i][j] = Math.floor(Math.random()*2);
        list2[i][j] = i + ', ' + j;
        listChanged[i][j] = 0;


        // if (i == j) {
        //     listChanged[i][j] = 1;
        // }

        // if (i > j) {
        //     listChanged[i][j] = 1;
        // }

        // if (i < j) {
        //     listChanged[i][j] = 1;
        // }

        // if (n - i - 1 < j) {
        //     listChanged[i][j] = 1;
        // }

        // if (m - 1 == j + i) {
        //     listChanged[i][j] = 1;
        // }

        // if (j == 0) {
        //     listChanged[i][j] = 1;
        // }

        // if (i > 7) {
        //     listChanged[i][j] = 1;
        // }

        if (
            (i <= j && 
            i + j >= n - 1 && 
            i < n / 2 &&
            j >= 12) ||(
               i <= 3*n/4 &&
               i >= n/2 &&
               j >= m/4 &&
               j <= m/2
            )
            ) {
            listChanged[i][j] = 1;
        }
    }
}



window.addEventListener('load', () => {

    const outputArray =  list2 || [];

    const target = document.querySelector('#table');
    const target2 = document.querySelector('#table_2');

    const getRow = (row) => {
        return row.map(td => `<td ${td != 0 && `class="value"` || ``}>${td}</td>`).join('');
    }

    const items = outputArray.map(row => `<tr>${getRow(row)}</tr>`).join('');
    const items2 = listChanged.map(row => `<tr>${getRow(row)}</tr>`).join('');

    target.innerHTML = items;
    target2.innerHTML = items2;
});
