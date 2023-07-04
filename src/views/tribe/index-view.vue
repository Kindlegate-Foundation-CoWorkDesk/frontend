<template>
    <div>
      <hero-section/>
      <our-team class="mb-3 our-team-top"/>
      <our-team class="our-team-bottom"/>
    </div>
  </template>
  
  <script>
import HeroSection from '@/components/Tribe/HeroSection.vue'
import OurTeam from '@/components/Tribe/OurTeam.vue'
  export default {
  components: { HeroSection, OurTeam },
  
  }
  </script>
  
  <style>
    .our-team-top {
      border-radius: 0 0 15px 15px;
    }

    .our-team-bottom {
      border-radius: 15px 15px 0 0;
    }
  </style>