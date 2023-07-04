<template>
  <div class="our-value mt-5">
    <div class="container">
      <div class="mb-5">
        <h3>OUR VALUE ADDING ROADMAP <br>(HESS MANDATE)</h3>
      </div>
      <el-carousel indicator-position="outside">
        <el-carousel-item
          v-for="item in carouselData"
          :key="item.id"
          class="py-5"
        >
          <div
            class="carousel-card rounded-lg d-flex flex-column"
            style="gap: 15px"
          >
            <h1 class="title-text" v-text="item.title"></h1>
            <p class="paragraph-text" v-text="item.body_text"></p>
            <!-- <button class="primary--button" style="width: max-content">
              Get Started
            </button> -->
          </div>
          <div
            class="image-bg rounded-lg"
            :style="{ backgroundImage: `url(${item.img_url})` }"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselData: [
        {
          id: 1,
          title: "Healthy communities:",
          body_text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img_url: require("@/assets/img/carousel-img1.jpg"),
        },
        {
          id: 2,
          title: "Economic Development:",
          body_text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img_url: require("@/assets/img/carousel-img2.jpg"),
        },
        {
          id: 3,
          title: "Safety and Justice:",
          body_text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img_url: require("@/assets/img/carousel-img3.jpg"),
        },
        {
          id: 4,
          title: "Social Economic Empowerment",
          body_text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img_url: require("@/assets/img/carousel-img4.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.our-value h3 {
    color: #fff;
    font-weight: 600;
    position: relative;
}

.our-value h3::after {
    content: " ";
    width: 20%;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background: var(--PRIMARY1);
}

.carousel-card {
  background: #4b4b4b;
  padding: 20px;
  color: #fff;
  width: 67%;
  height: 100%;
}

.title-text {
  font-weight: 600;
  width: 60%;
  font-size: 20px;
}

.paragraph-text {
  font-size: 14px;
}

.el-carousel__button {
  height: 7.5px !important;
  width: 7.5px !important;
  border-radius: 50%;
}

.el-carousel__indicator.is-active .el-carousel__button {
  background: var(--PRIMARY1);
}

.image-bg {
  height: 100%;
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 400px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
}

.el-carousel__item {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  /* border-radius: 30px; */
  position: relative;
  /* padding: 0 30px; */
}

.el-carousel__container {
  height: 350px;
  border-radius: 30px !important;
}

.el-carousel__item:nth-child(2n) {
  background-color: var(--green-200);
  flex-direction: row-reverse;
}

.el-carousel__item:nth-child(2n) .image-bg {
  background-position: left;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: var(--blue-100);
}

.our-value {
  background: var(--BG1);
  border-radius: 20px;
  padding: 30px 0;
  background-image: url("@/assets/img/kindlegate-arc.png");
  background-size: 25% 60%;
  background-position: right top;
  background-repeat: no-repeat;
}

@media (max-width: 990px) {
  .title-text {
    width: 100%;
  }
  .el-carousel__container {
    height: 500px;
  }
  .el-carousel__item {
    flex-direction: column;
    gap: 20px;
  }

  .el-carousel__item:nth-child(2n + 1) {
    flex-direction: column-reverse;
    gap: 20px;
  }

  .image-bg {
    /* height: 300px; */
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 400px;
  }
}
</style>
