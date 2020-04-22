console.log('Practice');

records = {};
STOP_SYMB = '?';

do {
    key = prompt('key');

    if (key == STOP_SYMB) {
        break;
    }

    value = prompt('value');

    if (value == STOP_SYMB) {
        break;
    }

    records[key] = +value;
} while(true);



console.log(records);

str = '{';

last = Object.keys(records).length - 1;
i = 0;
for(key in records) {
    if (!records.hasOwnProperty(key)) {
        continue;
    }
    
    str += '<br />&nbsp;&nbsp;' + key + ': ' + records[key];

    if (i != last) {
        str += ',';
    }

    i++;
}

str += '<br />}'

document.write('Records: ' + str);

// document.write(JSON.stringify(records));