<template>
  <div class="container py-5">
    <h4 class="font-weight-bold text-center">Featured Programs</h4>
    <div class="featured-cards mt-4">
      <card-wrapper v-for="(item, index) in items" :key="index">
        <template #card-image>
          <img :src="item?.imgUrl" alt="" />
        </template>

        <template #card-body>
          <div class="card-content">
            <h5 class="text-center font-weight-bold" v-text="item?.title"></h5>
            <p v-text="item?.desc"></p>
            <router-link to="/" class="">Read more</router-link>
          </div>
        </template>
      </card-wrapper>
    </div>
  </div>
</template>

<script>
import CardWrapper from "../CardWrapper.vue";

export default {
  components: { CardWrapper },
  data() {
    return {
      items: [
        {
          id: 1,
          imgUrl:
            "https://www.incimages.com/uploaded_files/image/1920x1080/getty_599676014_250056.jpg",
          title: "Leadership",
          desc: "Promoting thought based leadership in the community",
        },
        {
          id: 2,
          imgUrl:
            "https://www.incimages.com/uploaded_files/image/1920x1080/getty_599676014_250056.jpg",
          title: "Entreprenuership",
          desc: "Engage in entreprenuership activities and learn the necessary skills  to make it",
        },
        {
          id: 3,
          imgUrl:
            "https://www.incimages.com/uploaded_files/image/1920x1080/getty_599676014_250056.jpg",
          title: "Arts",
          desc: "We engage the community in recreational activities",
        },
      ],
    };
  },
};
</script>

<style>
.card-content {
  padding: 20px;
}

.card-content a {
  text-decoration: underline !important;
  color: var(--BG2);
}

.featured-cards {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    gap: 20px;
}

.featured-cards img {
    border-radius: 10px;
}
</style>
