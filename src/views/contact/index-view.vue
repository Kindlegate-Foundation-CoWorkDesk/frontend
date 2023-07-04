<template>
    <div>
      <HeroSection />
     <contact-information />
      <contact-form class="my-4"/>
    </div>
  </template>
  
  <script>
  
import HeroSection from '@/components/Contact/HeroSection.vue';
import ContactForm from '@/components/Contact/ContactForm.vue';
import ContactInformation from '@/components/Contact/ContactInformation.vue';
  export default {
    components: { HeroSection, ContactForm, ContactInformation }
}
  </script>
  
  <style>
  
  </style>