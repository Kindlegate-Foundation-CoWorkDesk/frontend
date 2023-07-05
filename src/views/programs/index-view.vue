<template>
    <div>
      <hero-section/>
      <programs-and-initiatives/>
      <what-we-do/>
    </div>
  </template>
  
  <script>
import HeroSection from '@/components/Programs/HeroSection.vue'
import ProgramsAndInitiatives from '@/components/Programs/ProgramsAndInitiatives.vue'
import WhatWeDo from '@/components/Programs/WhatWeDo.vue'
  export default {
  components: { HeroSection, ProgramsAndInitiatives, WhatWeDo },
  
  }
  </script>
  
  <style>
  
  </style>