<template>
    <hero-section :backgroundUrl="url" :positionEnd="false">
      <template #header>
        <h1>
          REACH US
        </h1>
      </template>
  
      <template #description>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est.
        </p>
      </template>
  
      <!-- <template #footer-buttons>
        <div class="text-center">
          <button class="button primary-btn mb-3">get involved</button>
          <button class="button primary-btn">kindlegate cause shop</button>
        </div>
      </template> -->
    </hero-section>
  </template>
  
  <script>
  import HeroSection from "../HeroSection.vue";
  export default {
    components: { HeroSection },
    data() {
      return {
        url: require("@/assets/img/kindlegate-contact.jpg"),
      };
    },
  };
  </script>
  
  <style></style>
  