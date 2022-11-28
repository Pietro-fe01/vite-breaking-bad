<script>
  import AppHeader from './components/AppHeader/AppHeader.vue';
  import AppMain from './components/AppMain/AppMain.vue';

  export default {
    components: {
      AppHeader,
      AppMain
    }
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss">
  @import './style/global.scss';

  body{
    background-color: var(--bg-body-color);
  }
</style>
