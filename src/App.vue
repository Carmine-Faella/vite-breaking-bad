<script>
import axios from 'axios';
import {store} from './store.js'
import MyHeader from './components/MyHeader.vue';
import Search from './components/Search.vue';
import CardList from './components/CardList.vue';



export default{
  components:{
    MyHeader,
    CardList,
    Search
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
    })
  }
}

</script>

<template>
  <header>
    <MyHeader/>
  </header>

  <main class="bg-warning py-5">
    <CardList/>
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss';


</style>
