<template>
  <div>
    <div id="app-header">
      <ContactHeader v-if="routeName !== 'home'" />
      <div class="app-header-content container py-3">
        <div>
          <img src="@/assets/img/kindlegate_logo.svg" class="logo" alt="" />
        </div>
        <ul class="nav-items">
          <li v-for="(item, index) in menu" :key="index">
            <router-link :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
        <div class="nav-button">
          <button class="button light-outline-btn">donate</button>
        </div>
        <div class="menu-bar" role="button" @click="drawer = true">
          <i-icon icon="fa6-solid:bars" width="30px" class="text-white" />
        </div>
      </div>
      <hr class="bg-white" v-if="routeName !== 'home'" />
    </div>
    <!-- Sidebar drawer  -->
    <el-drawer
      title="false"
      :visible.sync="drawer"
      direction="rtl"
      :withHeader="false"
      size="80%"
    >
      <div class="p-4">
        <div class="d-flex mb-5 justify-content-end">
          <span role="button" @click="drawer = false">
            <i-icon
              icon="mingcute:close-circle-line"
              color="#000"
              width="30px"
            />
          </span>
        </div>
        <ul class="mobile-nav-menu">
          <li v-for="(item, index) in menu" :key="index">
            <router-link :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import ContactHeader from "@/components/navigation/ContactHeader.vue";
export default {
  components: { ContactHeader },
  data() {
    return {
      drawer: false,
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
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
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

ul.mobile-nav-menu {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 20px;
}

ul.nav-items li,
ul.mobile-nav-menu li {
  list-style: none;
}

ul.nav-items li a {
  color: var(--white-50);
}

ul.nav-items li a,
ul.mobile-nav-menu li a {
  display: block;
  text-transform: uppercase;
  font-weight: 500;
}

ul.mobile-nav-menu li a {
  color: #000;
}

.menu-bar {
  display: none;
}

.router-link-exact-active {
  color: var(--PRIMARY1) !important;  
}

@media (max-width: 990px) {
  ul.nav-items,
  .nav-button {
    display: none;
  }

  .menu-bar {
    display: block;
  }
}
</style>
