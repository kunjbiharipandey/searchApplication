<template>
  <div class="search">
            <br>
            <input type="text" v-model="search" placeholder="Search .."/>
            <button @click="getItem">Search </button><br/>
            </div>
            <div>
            <ItemList/>
            
            </div>
   
</template>
<script>
import Axios from 'axios';
import ItemList from '../components/ItemList.vue';
    export default {
        name: 'Search',
        data(){
            return {
               item:''
            }
        },
        created() {
            this.getItem();
        },
        methods: {
             getItem(){
                
                Axios.get("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fwomen-black-tshirts&psig=AOvVaw1m9TRDmiVZRmu-if-VAzj3&ust=1648273400095000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFu4bH4PYCFQAAAAAdAAAAABAF")
                    
                }
        },
         components:{
     
           ItemList
  
}
    }
</script>
<style>



</style>