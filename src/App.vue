<script>
import axios from 'axios';
import {store} from './store.js'
import MyHeader from './components/MyHeader.vue';
import Search from './components/Search.vue';
import CardList from './components/CardList.vue';
import Loading from './components/Loading.vue';
import NumberCard from './components/NumberCard.vue';



export default{
  components:{
    MyHeader,
    CardList,
    Search,
    Loading,
    NumberCard
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCards(){

      let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk';

      axios.get(url)
      .then(response=>{
        this.store.cardList = response.data.data;
        this.store.load = false;
      });

    }
  },
  created(){
    this.getCards()
  }
}

</script>

<template>
  <header>

    <MyHeader/>

  </header>

  <main class="bg-warning py-5">

    <Loading/>
    <Search/>
    <NumberCard/>
    <CardList/>

  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
