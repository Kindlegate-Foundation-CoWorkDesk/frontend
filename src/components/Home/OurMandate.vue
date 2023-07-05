<template>
  <div class="our-mandate">
    <div class="container ">
      <div class="mandate-container">
        <div class="mandate-content">
            <div>
          <h2>our mandate</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
            magna sed pulvinar ultricies, purus lectus malesuada 
            libero, sit amet commodo magna</p>
        </div>
        <div>
          <h2>objectives</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
            magna sed pulvinar ultricies, purus lectus malesuada 
            libero, sit amet commodo magna</p>
        </div>
        <div class="text-right">
            <button class="button primary-btn">learn more</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.our-mandate {
  background-color: #f1f1f1;
  padding: 30px 0;
  background-image: url("@/assets/img/half-arc.png");
  background-size: 13% 80%;
  background-position: left top;
  background-repeat: no-repeat;
  border-radius: 0 0 20px 20px;
}

.mandate-container {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    justify-content: end;
}

.mandate-content {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 40%;
    gap: 20px;
}

.mandate-content h2 {
    text-transform: uppercase;
    text-align: right;
    font-size: 22px;
    font-weight: 600;
    position: relative;
    margin-bottom: 12px;
}

.mandate-content h2::after {
    position: absolute;
    content: "";
    height: 3px;
    width: 100px;
    right: 0;
    bottom: -4px;
    background-color: var(--PRIMARY1);
}

@media (max-width: 990px) {
    .our-mandate {
        background: none;
    }
    .mandate-content {
        width: 100%;
    }
  }
</style>
