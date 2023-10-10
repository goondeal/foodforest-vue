<template>
  <div id="content" class="container my-3">
    <div class="row">
      <!-- <div class="col-3">
          <div class="container-fluid">
            <p class="title">Filter and Sort</p>
          </div>
        </div> -->

      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import RestaurantCard from '@/components/RestaurantCard.vue'

const categories = ref([])
const restaurants = ref([])

const getRestaurants = () => {
      axios
        .get('restaurants/')
        .then((response) => {
          console.log('restaurants response =', response)
          restaurants.value = response.data
        })
        .catch((error) => {
          console.log('restaurants error =', error)
        })
    }

onMounted(() => getRestaurants())
</script>
