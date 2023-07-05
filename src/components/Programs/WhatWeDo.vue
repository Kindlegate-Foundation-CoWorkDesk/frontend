<template>
    <div class="container py-5">
      <h4 class="font-weight-bold text-center mb-4">What we do</h4>
      <div class="what-we-do">
        <div class="what-we-do-card p-3" v-for="item in items" :key="item.id">
            <div class="left">
                <img :src="item.imgUrl" alt="">
                <h4>{{ item.title }}</h4>
            </div>
            <div class="right">
                <p>{{ item.desc }}</p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
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
          {
            id: 4,
            imgUrl:
              "https://www.incimages.com/uploaded_files/image/1920x1080/getty_599676014_250056.jpg",
            title: "Leadership",
            desc: "Promoting thought based leadership in the community",
          },
          {
            id: 5,
            imgUrl:
              "https://www.incimages.com/uploaded_files/image/1920x1080/getty_599676014_250056.jpg",
            title: "Entreprenuership",
            desc: "Engage in entreprenuership activities and learn the necessary skills  to make it",
          },
          {
            id: 6,
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

  .what-we-do {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    flex-direction: column;
    gap: 25px;
  }

  .what-we-do-card {
    background: #EFEFEF;
    border-radius: 20px;
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    gap: 30px;
  }

  .what-we-do-card .left,  .what-we-do-card .right {
    width: 100%;
  }

  .what-we-do-card h4 {
    text-transform: uppercase;
    margin-top: 12px;
    text-align: center;
    font-weight: bold;
    position: relative;
  }

  .what-we-do-card h4::after {
    content: "";
    position: absolute;
    background: var(--PRIMARY1);
    height: 3px;
    width: 20%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    bottom: -15%;
  }

  .what-we-do-card img {
    width: 100%;
    border-radius: 15px;
  }
  
  .card-content a {
    text-decoration: underline !important;
    color: var(--BG2);
  }
  
  .featured-cards {
      display: grid;
      display: -ms-grid;
      display: -moz-grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
  }
  
  .featured-cards img {
      border-radius: 10px;
  }
  </style>
  