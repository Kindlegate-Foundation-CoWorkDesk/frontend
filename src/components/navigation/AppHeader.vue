<template>
  <div id="app-header">
    <ContactHeader v-if="routeName !== 'home'"/>
    <!-- <div>
      {{ routeName.name }}
    </div> -->
    <div class="app-header-content container py-3">
      <div>
        <img src="@/assets/img/kindlegate_logo.svg" class="logo" alt="" />
      </div>
      <ul class="nav-items">
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="item.url">{{ item.title }}</router-link>
        </li>
      </ul>
      <div>
        <button class="button light-outline-btn">donate</button>
      </div>
    </div>
    <hr class="bg-white" v-if="routeName !== 'home'">
  </div>
</template>

<script>

import ContactHeader from '@/components/navigation/ContactHeader.vue';
export default {
  components: { ContactHeader },
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "home",
          url: "/",
        },
        {
          id: 2,
          title: "our mandate",
          url: "/our-mandate",
        },
        {
          id: 3,
          title: "programs",
          url: "/programs",
        },
        {
          id: 4,
          title: "our tribe",
          url: "/our-tribe",
        },
        {
          id: 5,
          title: "news",
          url: "/news",
        },
        {
          id: 6,
          title: "blog",
          url: "/blog",
        },
        {
          id: 7,
          title: "contact us",
          url: "/contact",
        },
        {
          id: 8,
          title: "get involved",
          url: "/get-involved",
        },
      ],
    };
  },
  computed:{
    routeName(){
      return this.$route.name
    }
  }
};
</script>

<style>
#app-header {
  position: fixed;
  width: 100%;
}

.app-header-content {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 50px;
  height: 50px;
}

ul.nav-items {
  margin-bottom: 0;
}

ul.nav-items {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  gap: 20px;
}

ul.nav-items li {
  list-style: none;
}

ul.nav-items li a {
  display: block;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--white-50);
}
</style>
