<template>
    <div class="col col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-stretch">
        <div class="card shadow-sm">
            <img class="card-img-top" :src="props.restaurant.logo" :alt="props.restaurant.name" />

            <div class="card-body d-flex flex-column p-2 ">

                <div class="d-flex justify-content-center align-items-center mb-1">
                    <h5 class="card-title d-inline m-0"> {{ props.restaurant.name }} </h5>
                    <div class="rounded-circle d-inline-block mx-1" :style="statusStyle"></div>
                </div>
                <small class="mx-1 text-center">{{ props.restaurant.status.title }}</small>

                <div class="d-flex m-auto align-items-center">
                    <p class="card-text py-1 text-center">
                        {{ props.restaurant.address }}
                    </p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <router-link class="btn btn-sm btn-primary" :to="{name: 'restaurant', params: {slug: props.restaurant.slug}}" no-prefetch>المزيد
                        </router-link>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        {{ props.restaurant.rating }}
                        <StarIcon class="star-icon"></StarIcon>
                        <small class="review-count mx-2">(12)</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { computed, defineProps, ref } from 'vue'
import { StarIcon } from '@heroicons/vue/24/solid'



const props = defineProps({
    restaurant: {
        type: Object,
        required: true
    }
})
const statusStyle = ref({
    width: '10px',
    height: '10px',
    backgroundColor: props.restaurant.status.color
})

const resaurantUrl = computed(() => `/restaurants/${props.restaurant.slug}`)


</script>
  
<style scoped>
.dot {
    width: 12px;
    height: 12px;
    display: inline-block;
}
.star-icon {
    width: 22px;
    height: 22px;
    color: yellow;
}
.btn-sm {
    padding: 0.2rem 0.5rem;
}
</style>
