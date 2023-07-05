<template>
  <div class="our-team">
    <div class="container">
      <h5>Our Team</h5>

      <div class="d-lg-flex align-items-center">
        <div class="user-details text-center">
            <img src="@/assets/img/user.png" alt="" />
            <h5>lorem ipsum</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Maecenas porttitor congue massa. Fusce posuere, magna sed
          pulvinar ultricies, purus lectus malesuada libero, sit amet commodo
          magna eros quis urna. Nunc viverra
        </p>
      </div>

      <div class="d-lg-flex align-items-center mt-5" >
        <div class="user-details text-center">
            <img src="@/assets/img/user.png" alt="" />
            <h5>lorem ipsum</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Maecenas porttitor congue massa. Fusce posuere, magna sed
          pulvinar ultricies, purus lectus malesuada libero, sit amet commodo
          magna eros quis urna. Nunc viverra
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.our-team {
  background: var(--BG1);
  padding: 30px 0;
}

.our-team h5 {
    
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
}

.user-details h5::after {
    content: "";
    position: absolute;
    background: var(--PRIMARY1);
    height: 3px;
    width: 20%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    bottom: -35%;
}

.user-details {
    width: 100%;
    
}

.user-details h5 {
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    margin-top: 8px;
    position: relative;
}

.our-team p {
    width: 100%;
    color: #fff;
}

.user-details img {
    height: 300px;
}

@media (max-width:990px) {

}
</style>
