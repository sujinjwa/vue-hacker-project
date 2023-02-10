<template>
    <!-- <div>
        <ul class="list">
            <li v-for="item in list" :key="item.id">
                <div>
                    <b>{{ item.time_ago }}</b>
                    <span>{{ 'by' + item.user }}</span>
                </div>
                <a :href="item.url">{{ item.title }}<i>({{ item.comments_count }})</i></a>
            </li>
        </ul>
    </div> -->
    <list-item :listData="list"></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import axios from 'axios';
// import ListItem from '../components/ListItem.vue';

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
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        //     .then((response) => {
        //         this.list = response.data;
        //     })

        // dispatch 함수를 이용해 store 폴더 내 index.js의 FETCH_LIST 함수 실행
        this.$store.dispatch('FETCH_LIST', 'news');
    }
}
</script>

<style>
.list li {padding-left:10px; list-style-type: none;}
.list li + li {margin-top:20px}
.list li > a {text-decoration: none; font-size:22px}
.list li b {font-style: normal; font-size:12px; color:#999}
.list li span {font-style: normal; font-weight:700; font-size:12px; color:#999;}
.list li i {font-style: normal; font-size:12px; color:cornflowerblue}
</style>