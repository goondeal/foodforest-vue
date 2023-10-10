<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <div v-if="restaurant" class="container">
            <!-- Start Restaurant basic info -->
            <div class="row align-items-start bg-light my-3">
                <div class="w-25 h-25 p-0">
                    <img :src="restaurant.logo" :alt="restaurant.name" class="rounded img-thumbnail" />
                </div>
                <div class="col py-2 text-start">
                    <h3 class="title d-inline fs-2">{{ restaurant.name }}</h3>
                    <small class="mx-1">{{ restaurant.status?.title || '' }}</small>
                    <div class="rounded-circle d-inline-block mx-1"
                        :style="{ width: '10px', height: '10px', 'background-color': restaurant.status?.color || 'transparent' }">
                    </div>
                    <small class="d-block my-2 fs-5">{{ restaurant.slogan }}</small>
                    <p class="card-text my-4">{{ restaurant.address }}</p>
                </div>
            </div>
            <!-- End Restaurant basic info -->


            <!-- Start Restaurant Menu Section -->
            <div v-if="restaurant.menu">
                <h3 class="p-2 bg-dark w-25 m-auto text-center text-white rounded">Menu</h3>

                <div class="row accordion my-3 g-3">
                    <div v-for="menuCategory in restaurant.menu" :key="menuCategory.id"
                    class="col-lg-4 col-md-6 col-sm-12 my-3">

                        <div class="accordion-item ">
                            <h2 class="accordion-header" :id="'panelsStayOpen-headingOne-' + menuCategory.id">
                                <button class="accordion-button w-100" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#panelsStayOpen-collapseOne-' + menuCategory.id" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    {{ menuCategory.title }}
                                </button>
                            </h2>
                            <div :id="'panelsStayOpen-collapseOne-' + menuCategory.id"
                                class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body p-1">
                                    <MenuItemListTile v-for="(value, key) in menuCategory.items" :key="key"
                                        :items="value" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- <div v-for="menuCategory in menu" :key="menuCategory.title" class="col-lg-4 col-md-6 col-sm-12 my-3">
                    <h4 class="bg-light rounded w-100 py-1 my-2 text-center">{{ menuCategory.title }}</h4>
                    <MenuItemListTile v-for="(value, key) in menuCategory.items" :key="key" :items="value" />
                </div> -->
                </div>
            </div>
        </div>
        <div v-else> 404 Not Found </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { changeMetaTags } from '../utils'
import MenuItemListTile from '@/components/MenuItemListTile.vue'


const route = useRoute()
const restaurant = ref({})
const isLoading = ref(false)


const groupMenuItems = (menu) => {
    menu.forEach(category => {
        const groupedItems = {}
        category.items.forEach(item => {
            item.restaurant = route.params.slug //restaurant.value.slug
            item.item = item.id
            if (groupedItems[item.name]) {
                groupedItems[item.name].push(item)
            } else {
                groupedItems[item.name] = [item]
            }
        })
        category.items = groupedItems
    })
}


const getRestaurant = () => {
    // console.log(decodeURI(`/api/v1/restaurants/${this.$route.params.slug}/`))
    axios
        .get(`restaurants/${route.params.slug}/`)
        .then((response) => {
            console.log('restaurant response =', response.data)
            groupMenuItems(response.data.menu)
            restaurant.value = response.data
        })
        .catch((error) => {
            console.log('restaurant error =', error)
        })
}


onMounted(() => getRestaurant())

// head() {
//         return {
//             title: `${this.$t('site_name')} | ${this.restaurant ? this.restaurant.name : this.$route.params.slug}`
//         }
//     },
changeMetaTags({ title: restaurant.value.name || route.params.slug || '' })
</script>