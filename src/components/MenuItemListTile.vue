<template>
    <div v-if="items" class="card p-0 mb-2" style="max-width: 540px;">
        <div class="row g-0">
            <div v-if="items[selectedIndex].img" class="col-md-3">
                <img :src="items[selectedIndex].img" class="img-fluid rounded-start" :alt="items[selectedIndex].name">
            </div>
            <div class="col">
                <div class="card-body">
                    <h5 class="card-title">{{ items[selectedIndex].name }}</h5>
                    <p class="card-text">{{ items[selectedIndex].description }}</p>

                    <div class="d-flex flex-wrap my-3 align-items-center justify-content-start">
                        <p class="card-text m-0">{{ items[selectedIndex].price }} <small class="mx-1">EGP</small></p>
                        <div style="width: 12px;"></div>    
                        <div v-for="(value, key) in features" :key="key" class="btn-group mx-1" role="group"
                            aria-label="Basic outlined example">
                            <button v-for="feature in value" :key="feature" type="button" class="btn px-1 py-0 feature-btn"
                                :class="{ selected: items[selectedIndex].features[key] === feature }"
                                @click="selectItem(key, feature)">{{ feature }}
                            </button>
                        </div>
                    </div>
                    <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <!-- <div class="w-100 d-flex justify-content-end"> -->
                    <button @click="addItemToCart(items[selectedIndex])" type="button"
                        class="btn btn-primary py-1 px-2 text-white rounded">
                        Order Now
                    </button>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { computed, defineProps, ref } from 'vue'


const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})

const selectedIndex = ref(0)


const features = computed(() => {
    const result = {}
    for (const item of props.items) {
        for (const f in item.features) {
            if (result[f]) {
                result[f].add(item.features[f])
            }
            else {
                result[f] = new Set()
                result[f].add(item.features[f])
            }
        }
    }
    return result
})

const selectItem = (key, feature) => {
    const selectedFeatures = { ...props.items[selectedIndex.value].features }
    if (selectedFeatures[key] !== feature) {
        selectedFeatures[key] = feature
        // console.log(this.selectedFeatures)
        selectedIndex.value = props.items.findIndex((item) => {
            for (const name in item.features) {
                // console.log(name)
                // console.log(item.features[name])
                // console.log(this.selectedFeatures[name])
                if (item.features[name] !== selectedFeatures[name]) {
                    return false
                }
            }
            return true
        })
        // console.log(this.items[selectedIndex])
        // console.log(this.items[this.selectedIndex].price)

    }
}

const addItemToCart = (item) => {
    // this.$store.commit('cart/addItemToCart', structuredClone(item))
}
</script>

<style>
.feature-btn {
    font-size: 0.8rem;
    color: var(--primary-color);
    border-color: var(--primary-color);
    outline: none;
}

.feature-btn:focus,
.feature-btn:active {
    outline: none !important;
    box-shadow: none;
}

.selected {
    color: white;
    background-color: var(--primary-color);
}</style>