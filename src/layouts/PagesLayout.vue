<template>
    <div>
      <div id="main">
        <div class="main-content">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    components: {  },
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
  