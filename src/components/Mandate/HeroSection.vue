<template>
    <div class="hero-section">
      <div class="container">
        <div class="d-flex">
          <div class="hero-content">
            <h1>
              OUR MANDATE
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
              purus lectus malesuada libero, sit amet commodo magna eros quis
              urna. Nunc viverra imperdiet enim. Fusce est.
            </p>
            <!-- <div class="text-center">
              <button class="button primary-btn mb-3">get involved</button>
              <button class="button primary-btn">kindlegate cause shop</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  .hero-section {
    background: url("@/assets/img/kindlegate-mandate.jpg");
    background-color: rgba(0, 0, 0, 0.7);
    height: 700px;
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
  </style>
  