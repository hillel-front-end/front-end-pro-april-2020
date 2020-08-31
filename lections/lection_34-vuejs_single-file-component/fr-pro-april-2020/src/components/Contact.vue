<template>
  <div id="contact">
    <div class="contact-title" ref="title" id="contact-title"> {{ prefix }} Contact</div>
    <div>
        <ul>
            <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
    </div>
    <div>
        <!-- <slot></slot>
        <br>
        <slot name="button-example"></slot> -->
        <ul class="contact-tabs">
            <li 
                v-for="tab in ['1', '2', '3']"
                :key="tab"  
                @click="onTabChoosed(tab)"  
            >
                {{ tab }}
            </li>
        </ul>
        <slot :name="currentTab" />
    </div>
  </div>
</template>

<script>

const Contact = {
    name: 'Contact',
    props: {
        prefix: String,
        list: Array,
    },
    data() {
        return {
            currentTab: null
        };
    },
    methods: {
        onTabChoosed(tab) {
            this.currentTab = tab;
        }
    },
    mounted() {
        // const title = document.querySelector('.contact-title');
        // console.dir(title);
        // console.log(this.$refs.title.offsetWidth);
    }
};


export default Contact;
</script>

<style lang="scss">
    .contact {
        &-title {
            text-align: center;

            &:hover {
                color: red;
                cursor: pointer;
            }
        }

        &-tabs {
            list-style: none;
            display: flex;

            li {
                margin-right: 15px;
                cursor: pointer;
                display: flex;
                width: 50px;
                justify-content: center;
                &:hover {
                    background-color: gainsboro;
                }
            }
        }
    }
</style>