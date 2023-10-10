<template>
  <div class="w-100 h-100 m-auto">
        <TheHeader></TheHeader>
        <main class="container">
            <router-view></router-view>
        </main>
        <TheFooter></TheFooter>
    </div>
</template>


<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>



<style>
html,body, #app, #__layout{
  height:100%!important;
  width: 100%!important;
  margin: 0;
  padding: 0;
}
</style>