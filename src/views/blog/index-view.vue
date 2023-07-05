<template>
  <div>
    <hero-section />
    <div class="container py-5">
      <div class="blogs-list">
        <div class="w-50 d-flex flex-column" style="gap:12px" v-for="item in 5" :key="item">
          <h4>
            How systemic justice builds the power of communities to use the law
            for good
          </h4>
          <h6>May 23, 2023</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "@/components/OurBlogs/HeroSection.vue";
export default {
  components: { HeroSection },
};
</script>

<style>
.blogs-list {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 20px;
}

.blogs-list h4 {
  font-weight: 600;
  position: relative;
}

.blogs-list h6 {
  font-style: italic;
}

.blogs-list h4::after {
  content: "";
  background: var(--PRIMARY1);
  position: absolute;
  height: 3px;
  width: 50%;
  left: 0;
  bottom: -5px;
}

@media (max-width:990px) {
  .blogs-list .w-50 {
    width: 100% !important;
  }
}
</style>
