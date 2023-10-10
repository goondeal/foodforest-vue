<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container justify-content-between">
            <a class="navbar-brand" href="/">
                <h1 class="gradient-text m-0">FoodForest</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-black"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav ms-auto mx-2 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link p-2 p-lg-3 active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link p-2 p-lg-3 active" aria-current="page" to="/orders/"> my orders </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-2 p-lg-3" href="#">contact us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fs-bigger gradient-text p-2 p-lg-3" href="#">become a partener</a>
                    </li>
                </ul>
                <router-link to="/cart" no-prefetch>
                    <div class="bg-success p-1 rounded mx-1">
                        <i class="fas fa-shopping-cart text-white"></i>
                        <span class="text-white fw-bold">{{ cartItemsCount }}</span>
                    </div>
                </router-link>
                <div v-if="true">
                    <button class="btn btn-link" @click="logout">Logout</button>
                </div>
                <div v-else class="btn-group mx-1">
                    <router-link :to="{name: 'login'}" class="btn btn-outline-success text-capitalize">
                        login
                    </router-link>
                    <router-link :to="{name: 'signup'}" class="btn btn-success text-capitalize">
                        register
                    </router-link>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    computed: {
        // ...mapGetters(['isAuthenticated', 'loggedInUser']),
        // ...mapGetters({
        //     cartItemsCount: 'cart/totalItemsCount',
        //     // isAuthenticated: 'isAuthenticated',
        //     // loggedInUser: 'loggedInUser',
        // })
    },
    methods: {
        async logout() {
        },
    }
}
</script>
  