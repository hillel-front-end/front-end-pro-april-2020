console.log('lection_30');


var pattern = /RegExp/;

// search
// str = `so23me9860 пsOMEивет  шаблон-1 привет как ждела шаблон шаблон-!`;
// console.log(str.search(/шаблон-1/)); // 22

str = `Hello WorLd! 199WoRld 97756 8world! 2019 world!asd helloWo 2013`;
// match
// var result = str.match(/world/i);
// console.log(result);

// //match /g - global
// result = str.match(/world!/ig);
// \d = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// result = str.match(/\d\d\d\d/g);
// console.log(result);

// split
// console.log( '5343-12-34-56_89::98::23'.split(/[-_:]/) );
// console.log( '5343-12-34-56_89::98::23'.split(/-|_|::/) );
// console.log( 'te,axt.Ate,axt.Ate,axt'.split(/[,.]/g) );

// match examples
// console.log('Hello world! Hello world. Hello world?'.match(/[!.?;] /g));


//replace
// console.log('12- 34- 56,  67 - 55 -34'.replace(/- |- | -/g, "-" ));
// -----------------


/*
        \d === [0-9]
        \w === [a-zA-Z0-9]
        \w+ === [a-zA-Z0-9]{1,}
        \w* === [a-zA-Z0-9]{0,}
        \w? === [a-zA-Z0-9]{0,1}
        \d{4} === \d\d\d\d
*/


/*
 - классы и спецсимволы
 - диапазоны и наборы
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

// transition-delay: .2;
var str = "1988 год Как делаЇ? 2357.123 Что .234 wor12ds? 7 Когда нет ничего в 18 лет. 1234567"
// var result = str.match(/\d{2,5}/g);
// var result = str.match(/\d+/gi);
// var result = str.match(/ [0-9.]+ /gi);
// var result = str.match(/\d*\.\d+/gi);
// var result = str.match(/\d+(\.\d+)?/gi);

// str = 'Hello  23.445 world - 3.33333333, 5.7777777777777, Hello world 4.343434343434343434';
// console.log( str.match(/\d+\.\d{4,}/g) )

// var result = str.match(/\w/gi);
// var result = str.match(/[a-zA-Z0-9]/gi);
// var result = str.match(/[а-яА-ЯіІїЇґҐ]+/gi);
// var result = str.match(/[A-Za-zА-Яа-яіІїЇґҐ]{5}/gi);
// str ="aslknaslkd hw would wold wuold  A1234 odas howoudasd as,dmas.,m asmd.,asm das./d /.as,d.? asd"
// var result = str.match(/w(o|ou|uo)ld/gi);
// var result = str.replace(/w(o|uo)ld/gi, 'would');
// var result = str.match(/A(?=\d{4})/gi);
// console.log(result)


// -----------------
// . ? [ ] { } ^ \ / |
// \. \? \/ \| \\
var str = `Hello ? . [ ] { } ^ / \\ | world`;
// var result = str.match(/\?/g)
// var result = str.match(/\./g)
// var result = str.match(/\[/g)
// var result = str.match(/\]/g)
// var result = str.match(/\{/g)
// var result = str.match(/\}/g)
// var result = str.match(/\//g)
// var result = str.match(/\\/g)
// var result = str.match(/\|/g)
// str = "\\\\//";
// var result = str.match(/\\\\\/\//g);
// var result = str.match(/ \/ /g);
// console.log(result)

// ----------------------------

var str = "Hello Pet+a! Petтa Petрa Hello Petia! Pet^a Pet!a Hello Petra!";
// var result = str.match(/Pet[rstтi]a/gi);
// var result = str.match(/Pet[^+^!а-яА-Я]a/gi);
// var result = str.match(/Pet[a-zA-Z]a/gi);
// console.log(result);

/*
        \d - [0-9]
        \D - [^0-9]
        \w - [0-9a-zA-Z_]
        \W - [^0-9a-zA-Z_]
        \s - [ \f\n\r\t\v]
        \S - [^ \f\n\r\t\v]
*/



// ----------------------------

// var str = " Ivan7 Hello Ivan1! Ivan2Hello worldeIvan3xample Ivan4 Hello Ivan5? Ivan";
// var result = str.match(/\bIvan\d\b/gi);
// var result = str.match(/Ivan$/gi);
// console.log(result);

// ----------------------------

// var str = "s12344236523 helo5 s s123 !hello s12.5 rhello 2018 2 rrhello 23 rrrhelllllllloooo";
// var result = str.match(/s\d*/gi);
// var result = str.match(/hell?o/gi);
// console.log(result);


// var str = "Name Surname, 28 years";
// console.log( str.replace(/(\w+) (\w+), (\d+) (\w+)/g, '$2 $1, $4-$3') );

var str = "Savelii Sychov, 28 years";
var str2 = "Sychov Savelii, 28 years";
var str3 = "28 years, Savelii Sychov";
console.log( str.replace(/(\w)\w+ (\w+), (\d{1,3}) \w+/g, '$2 $1. - $3y') )
console.log( str2.replace(/(\w+)\s(\w)\w+,\s(\d{1,3})\s\w+/g, '$1 $2. - $3y') )
console.log( str3.replace(/(\d{1,3})\s\w+,\s(\w)\w+\s(\w+)/g, '$3 $2. - $1y') )



var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log( regexp.test('sychov.saveliy@face.com.book.com') ); 