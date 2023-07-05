<template>
    <div class="hero-section" :style="{'background-image': `url(${ backgroundUrl })` }">
      <div class="container">
        <div class="d-flex" :class="{'justify-content-end': positionEnd}">
          <div class="hero-content">
            <slot name="header" />
            <slot name="description" />

            <slot name="footer-buttons"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:{
        backgroundUrl:{
            type: String
        },
        positionEnd:{
            type: Boolean,
            default: true
        }
    }
  };
  </script>
  
  <style>
  .hero-section {
    background-color: rgba(0, 0, 0, 0.7);
    height: 600px;
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: end;
  }
  
  .hero-content {
    width: 40%;
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  
  .hero-content p {
    /* font-weight: 600; */
    color: #fff;
    line-height: 1.4;
    text-align: center;
  }
  
  .hero-content h1 {
    font-weight: 600;
    color: #fff;
    line-height: 0.9;
    font-size: 45px;
  }
  
  .hero-content button {
    width: 80%;
  }

  @media (max-width: 990px) {
    .hero-section {
        height: 100vh;
        justify-content: center;
    }

    .hero-content {
        width: 100%;
    }
  }
  </style>
  