<template>
    <div id="products">
        <h2>
            Products {{ title }}
        </h2>
        <p>
            Count: {{ count }}
        </p>
        <p>
            <button @contextmenu.prevent="onContextMenu" @click="onBtnClick">Add++</button>
        </p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const storeGetters = ['title', 'count'];

export default {
    name: 'Products',
    data() {
        return {
            // title: this.$store.getters.title
        }
    },
    methods: {
        ...mapActions(['countUpdateDelay']),
        onBtnClick() {
            // this.$store.commit('countUpdate', this.count + 1);
            // this.$store.dispatch('countUpdateDelay', this.count + 1);
            // this.$store.dispatch({
            //     type: 'countUpdateDelay',
            //     newValue: this.count + 1
            // });
            this.countUpdateDelay({
                newValue:  this.count + 1
            });
        },
        onContextMenu() {
            this.$store.commit({
                type: 'titleUpdate',
                value: `${this.title}_updated`
            });
        }
    },
    computed: {
        ...mapGetters(storeGetters),
    },
    created() {
        // console.log(this);
    }
}
</script>

<style>

</style>