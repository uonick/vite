<template>
  <div class="flex justify-center items-center">
    <div>
      <img alt="Vue logo" src="@/assets/logo.png" />
      <HelloWorld msg="Hello Vue 3 + Vite" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'LayoutMain',

  components: {
    HelloWorld,
  },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>