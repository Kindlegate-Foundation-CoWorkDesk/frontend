<template>
  <div>
    <div>
      <app-header />
      <slot />
      <our-volunteer/>
      <app-footer/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/navigation/AppHeader.vue";
import AppFooter from '@/components/navigation/AppFooter.vue';
import OurVolunteer from '@/components/OurVolunteer.vue';
export default {
  components: { AppHeader, AppFooter, OurVolunteer },
  name: "HomeLayout",
  computed: {},
};
</script>

<style scoped></style>
