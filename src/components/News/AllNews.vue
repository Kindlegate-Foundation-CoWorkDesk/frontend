<template>
  <div class="all-news">
    <div class="container">
      <h3 class="font-weight-bold text-center mb-5">News</h3>
      <div class="d-flex" style="gap: 30px">
        <div class="w-100">
          <h6 class="font-weight-bold">What is happening now</h6>
          <h2 class="text-white font-weight-bold">
            KINDLEGATE FOUNDATION IS IN COLLABORATION WITH
          </h2>
        </div>
        <div class="w-100">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor”
          </p>
        </div>
      </div>

      <div class="news-cards py-4">
        <card-wrapper class="news-card" v-for="item in 4" :key="item">
          <template #card-image>
            <div class="news-img">
              <div class="news-details">
                <span class="date">3 June</span>
                <span class="year">2023</span>
              </div>
              <img 
                src="https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-146152.jpg?w=2000"
                alt=""
              />
            </div>
          </template>
          <template #card-body>
            <div class="p-3 news-body">
              <p>
                Lorem ipsum dolor sit, axpedita amet labore, autem est sint
                accusantimollitia obcaecati aspernatur!
              </p>
              <button class="read-button mt-3">
                <span> Read more </span>
                <i-icon width="25px" icon="ph:arrow-circle-right-fill" />
              </button>
            </div>
          </template>
        </card-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
import CardWrapper from "../CardWrapper.vue";

export default {
  components: { CardWrapper },
};
</script>

<style>
.news-img {
    position: relative;
}

.news-details {
    position: absolute;
    right: 0;
    top: 50%;
    bottom: 50%;
    background-color: red;
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    flex-direction: column;
    /* width: 300px; */
}

.news-card {
    border-radius: 20px !important;
}
.news-img img {
    width: 100%;
    border-radius: 20px;
    height: 200px;
    object-fit: cover;
    -o-object-fit: cover;
}

.all-news {
  background: var(--PRIMARY1);
  border-radius: 0 0 10px 10px;
  padding: 20px 0;
}

.read-button {
  border: 1px solid #333333;
  background: transparent;
  padding: 4px 8px;
  border-radius: 6px;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  gap: 5px;
}

.news-cards {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}
</style>
