<template>
    <div>
      <div id="">

        <div class="">
          
          <app-header/>
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
import AppHeader from '@/components/navigation/AppHeader.vue';
  export default {
    components: { AppHeader },
    name: "PagesLayout",
    computed: {
     
    },
  };
  </script>
  
  <style scoped>
  #main {
    margin-left: 250px;
  }
  .main-content {
    padding: var(--spacer);
  }
  </style>
  