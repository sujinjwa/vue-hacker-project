<template>
  <!-- <div>
    <ul class="list">
        <li v-for="item in list" :key="item.id">
            <div>
                <b>{{ item.time_ago }}</b>
            </div>
            <a :href="item.url">{{ item.title }}</a>
        </li>
    </ul>
  </div> -->
  <list-item :listData="list"></list-item>
</template>

<script>
// import axios from 'axios';
import ListItem from '../components/ListItem.vue';

export default {
    components: { ListItem },
    // data() {
    //     return {
    //         list: []
    //     }
    // },

    computed: {
        list() {
            return this.$store.state.list;
        }
    },

    created() {
        // axios.get('https://api.hnpwa.com/v0/jobs/1.json')
        //     .then((response) => {
        //         this.list = response.data;
        //     })
        this.$store.dispatch('FETCH_LIST', 'news');
    }
}
</script>

<style>
.list li {padding-left:10px; list-style-type: none;}
.list li + li {margin-top:20px}
.list li > a {text-decoration: none; font-size:22px}
.list li b {font-style: normal; font-size:12px; color:#999}
</style>