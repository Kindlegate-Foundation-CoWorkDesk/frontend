<template>
  <div>
    <hero-section/>
    <our-mandate/>
    <our-value/>
    <featured-programs/>
  </div>
</template>

<script>
import HeroSection from '@/components/Home/HeroSection.vue'
import OurMandate from '@/components/Home/OurMandate.vue'
import OurValue from '@/components/Home/OurValue.vue'
import FeaturedPrograms from '@/components/Home/FeaturedPrograms.vue'
export default {
  components: { HeroSection, OurMandate, OurValue,
    FeaturedPrograms },

}
</script>

<style>

</style>