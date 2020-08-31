<template>
  <div id="app">
    <div class="block" v-if="isItemNeeded">
      Text Item
    </div>
   
    <Contact 
      prefix="Prefix example"
      :list="userList"
    >
      <template v-slot:1>
        <div class="block" :style="{fontSize: `${size}px`}">Title 2</div>
        <button @click="onIncreaseClick">IncreaseTitle</button>
        <button @click="onSwitch">GetItem</button>
      </template>
      <template v-slot:2>
        <UserList :size="userListSize"></UserList>
      </template>
      <template v-slot:3>
        <div class="block" v-if="isItemNeeded">
          Text Item
        </div>
      </template>
    </Contact>
  </div>
</template>

<script>
import UserList from './components/UserList';
import Contact from './components/Contact';

export default {
  name: 'App',
  components: {
    UserList,
    Contact,
  },
  data() {
    return {
      size: 12,
      isItemNeeded: false,
      userListSize: 3,
      userList: ["Name 1", "Name 2", "Name 3"]
    };
  },
  methods: {
    onIncreaseClick() {
      this.size++;
    },
    onSwitch() {
      this.isItemNeeded = !this.isItemNeeded;
    },
    getItem() {
      return this.isItemNeeded ? `<div class="block {{size}}">Text Item</div>` : ``;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.block {
  color: red;
}
</style>
