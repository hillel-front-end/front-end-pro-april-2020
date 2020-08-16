// var app = new Vue({
//   el: '#app',
//   data: {
//     x: 200,
//     y: 300,
//     list: [1, 2, 3, 4],
//     info: {},
//     message: 'Hello world'
//   }
// });

// console.log(app);

// setTimeout(() => {
//   // console.log(app.message);
//   // app.message = 'Updated!';
//   // app.value = 99999; // wrong way
//   Vue.set(app.info, 'value', 99999);
// }, 1500)

// // ---------------------------------------

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     className: null,
//     appearence: 'transition: .5s; color: green;',
//     value: 10,
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// })

// setTimeout(() => {
//   app2.className = 'active';
// }, 1500)

// res = appearence  + 'font-size:' + value*3 + 'px';

// setInterval(() => {
//  app2.value = Math.floor(Math.random() * 60)
// }, 1000)

// // // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: false,
//     info: 'Hello Info!'
//   }
// })

// setTimeout(() => {
//   app3.seen = true;
// }, 2000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     arr: [
//       1, 8, 9, 6
//     ],
//     item: [1, 2],
//     list: [
//       {
//         text: 'Изучить JavaScript'
//       },
//       {
//         title: 'jasnf'
//       },
//       {
//         text: ''
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ],
//     info: {
//       x: 10,
//       y: 20,
//       z: 50
//     }
//   },
//   methods: {
//     getFilterdList() {
//       return this.list.filter(item => item.text);
//     }
//   }
// })


// // // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!',
//     counter: 3,
//     list: [6, 9, 18],
//     specialNames: [
//       "super",
//       "puper",
//       "dooper",
//       "trooper",
//       "cooper",
//       "dooper"
//     ],
//     classNames: [],
//     activeBtn: ''
//   },
//   methods: {
//     calculate(value) {
//       return `<sup>${value*10}</sup>`;
//     },
//     onClick(event, id) {
//       // console.log('clicked', arguments, id);
//       // console.log(event, id);
//       // this.counter++;
//       this.activeBtn = id;
//     },
//     onClearActive() {
//       this.activeBtn = '';
//     }
//   }
// })

// // // ---------------------------------------

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!',
    result: 'RESULT',
    x: 10,
    switcher: true,
    date: '',
    twoWayExample: 'Example text'
  },
  methods: {
    onEdit(ev) {
      // console.log(ev, this);
      this.twoWayExample += '!';
    },
    onContainer() {
      console.log('container click');
    },
    onBtnClick(ev) {
      // ev.stopPropagation();
      console.log('btn click');
    },
    onContext(ev) {
      // ev.preventDefault();
      console.log('context click');
    }
  }
})


// -----------------------------
