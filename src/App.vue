<script>
import axios from 'axios';
import {store} from './store.js'
import MyHeader from './components/MyHeader.vue';
import Search from './components/Search.vue';
import CardList from './components/CardList.vue';
import Loading from './components/Loading.vue';



export default{
  components:{
    MyHeader,
    CardList,
    Search,
    Loading
  },
  data(){
    return{
      store
    }
  },
  created(){
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(response=>{
      this.store.cardList = response.data.data;
      this.store.load = false;
    })
  }
}

</script>

<template>
  <header>

    <MyHeader/>

  </header>

  <main class="bg-warning py-5">

    <Loading/>
    <CardList/>

  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
