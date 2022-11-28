<script>
  import AppHeader from './components/AppHeader/AppHeader.vue'
  export default {
    components: {
      AppHeader
    }
  }
</script>

<template>
  <AppHeader/>

  <main>
  </main>
</template>

<style lang="scss">
  @import './style/global.scss';

  body{
    background-color: var(--bg-body-color);
  }
</style>
