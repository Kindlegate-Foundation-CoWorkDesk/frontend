<template>
  <div>
    <hero-section />
    <about-us />
    <our-team />
    <our-partners class="mt-4" />
  </div>
</template>

<script>
import HeroSection from "@/components/Mandate/HeroSection.vue";
import AboutUs from "@/components/Mandate/AboutUs.vue";
import OurTeam from "@/components/Mandate/OurTeam.vue";
import OurPartners from "@/components/Mandate/OurPartners.vue";
export default {
  components: { HeroSection, AboutUs, OurTeam, OurPartners },
};
</script>

<style></style>
