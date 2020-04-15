n = 15;
m = 20;

A = new Array(n);
for(i = 0; i < A.length; i++) {
    // A[i] = [];
    // A[i].length = m;
    A[i] = new Array(m);
    for(j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*90 + 10);

        document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}


/*
    
1. В двумерном массиве A размером n на m. Заполнить случайными числами.
    1. Найти ряд, где сумма элементов наименьшая
    2. Найти ряд, где сумма элементов найбольшая
    3. Поменять ряды местами (1 и 2 пункт)

*/

sumMax = 0;
indexMax = 0;
sumMin = 0;
indexMin = 0;
for(i = 0; i < A[0].length; i++) {
    sumMax += A[0][i];
}
sumMin = sumMax;
document.write(' sumMax? = ', sumMax)
document.write(' sumMin? = ', sumMin)

for(i = 1; i < A.length; i++) {
    sum = 0;
    for(j = 0; j < A[i].length; j++) {
        sum += A[i][j];
    }

    if (sum > sumMax) {
        sumMax = sum;
        indexMax = i;
    }

    if (sum < sumMin) {
        sumMin = sum;
        indexMin = i;
    }
}

document.write(' | sumMax = ', sumMax + ' ' + indexMax);
document.write(' | sumMin = ', sumMin + ' ' + indexMin);

// swap

// temp = A[indexMax];
// A[indexMax] = A[indexMin];
// A[indexMin] = temp;

console.log(A);

// -----------------------------------------------------------------

arrayOfSums = [];
for(i = 0; i < A.length; i++) {
    sum = 0;
    for(j = 0; j < A[i].length; j++) {
        sum += A[i][j];
    }
    arrayOfSums.push(sum);
}

console.log(arrayOfSums);

min = arrayOfSums[0];
max = arrayOfSums[0];
indexMax = 0;
indexMin = 0;
for (i = 0; i < arrayOfSums.length; i++) {
    if (arrayOfSums[i] < min) {
        min = arrayOfSums[i];
    } else if (arrayOfSums[i] > max) {
        max = arrayOfSums[i];
    }
}

temp = A[indexMax];
A[indexMax] = A[indexMin];
A[indexMin] = temp;