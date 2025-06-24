<template>
    <h1>WELCOME TO OUR PRODUCTS</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <div v-for="item in products" class="bg-white"> 
        <img :src="item.image" class="h-100 object-contain " >
    <h1 class="text-orange-800 font-bold">{{ item.title }}</h1>
    <p class="line-clamp-2">{{ item.description }}</p>
    </div>
    </div>
</template>
<script setup>
 
import axios from 'axios';
import { onMounted, ref } from 'vue';

const products=ref([]);
async function getProducts() {
    const response=await axios.get("https://fakestoreapi.com/products");
    products.value=response.data;
}
onMounted(function(){
    getProducts();
    
});
</script>