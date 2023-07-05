<template>
  <div>
    <hero-section />
    <all-news />
    <upcoming-events />
  </div>
</template>

<script>
import HeroSection from "@/components/News/HeroSection.vue";
import AllNews from '@/components/News/AllNews.vue';
import UpcomingEvents from '@/components/News/UpcomingEvents.vue';
export default {
  components: { HeroSection, AllNews, UpcomingEvents },
};
</script>

<style></style>
