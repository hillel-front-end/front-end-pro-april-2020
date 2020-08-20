Vue.component('un-ordered-list', {
  // props: ['list'],
  props: {
    list: Array,
    title: {
      type: String,
      default: 'Default string'
    }
  },
  data() {
    return {
      example: 'example name',
      // list: ['a', true, 10]
    }
  },
  methods: {
    onClickMe() {
      console.log(this);
      console.log(this.$attrs.title);
      // this.$el.classList.add('test');
    },
    getTitle() { // bad practice
      return this.$attrs.title;
    },
    getDescription() { // bad practice
      return this.$attrs.description;
    }
  },
  template: `
    <ul>
      <li>{{title}}</li>
      <li v-for="item in list" v-if="item > 0">
          User id: {{ item }}
      </li>
    </ul>
  `
  // template: `
  //   <div>
  //     Component text {{ example }}
  //     List: {{ list }}
  //     <br />
  //     {{ getTitle() }}
  //     <br />
  //     {{ getDescription() }}
  //     <br />
  //     <button @click="onClickMe">Show component</button>
  //   </div>
  // `
});


// v-model?
// input v-bind:value="inputValue"
// input event -> input -> inputValue = event.target.value - ERROR

Vue.component('input-wrapper', {
  props: ['inputValue', 'onEdit'],
  template: `
    <div>
      <input type="text" @input="onEdit" :value="inputValue">
    </div>
  `
})

Vue.component('input-wrapper-event', {
  props: ['inputValue'],
  methods: {
    onInput(event) {
      this.$emit('message-changed', event.target.value)
    },
    onAnnihilation(){
      console.log('destroy');
      this.$destroy();
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy', this);
    // debugger;
  },
  destroy() {
    console.log('destroy', this);
    // debugger;
  },
  template: `
    <div>
      <input type="text" @input="onInput" :value="inputValue">
      <button @dblclick="onAnnihilation">Annihilation Component</button>
    </div>
  `
})

let appData = {
  list: [1, 2, 3, 4],
  persons: [12, -24, 31, 4],
  marks: [1, -278, 356, -4],
  target: '',
  message: 'Front-end message',
  merge: [],
  showBanner: false
};

var app = new Vue({
  el: '#app',
  data: appData,
  methods: {
    onRemove() {
      if(!this[this.target] || !Array.isArray(this[this.target])) {
        return;
      }
      this[this.target].pop();
    },
    onEditMessage(event){
      this.message = event.target.value;
    },
    onEditMessageEvent(message){
      this.message = message;
    },
    onAnnihilation(){
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log('beforeCreated', this);
    // appData.list = [];
    // debugger;
    // setTimeout(() => {
    //   this.list = [7,867,86,78,67];
    // }, 2000);
  },
  created() {
    console.log('created', this);
    // debugger;
    // fetch('/data')
    //   .then(resp => resp.json())
    //   .then(response => {
    //     this.list = response;
    //   })
  },
  beforeMount() {
    console.log('beforeMount', this);
    // debugger;
  },
  mounted() {
    console.log('beforeMount', this);
    // debugger;
    // this.showBanner = !this.showBanner;
    // setTimeout(() => {
    //   this.showBanner = !this.showBanner;
    // }, 2000)
  },
  beforeUpdate() {
    console.log('beforeUpdate', this);
    this.list[this.list.length-1]++;
    // debugger;
  },
  updated() {
    console.log('updated', this);
    // debugger;
  },
  beforeDestroy() {
    console.log('beforeDestroy', this);
    // debugger;
  },
  destroy() {
    console.log('destroy', this);
    // debugger;
  }
});


// let list = [1, 2, 3, -4];

// function compo(a) {
//   let list = ['a', true, 10];

//   console.log(list) // 'a', true, 10
// }
// console.log(list); // 1, 2, 3, -4