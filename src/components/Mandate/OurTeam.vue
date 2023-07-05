<template>
  <div class="mandate-our-team">
    <div class="container">
      <div class="text-center">
        <h3 class="font-weight-bold mb-4">Our Team</h3>
        <div class="our-team-list">
          <card-wrapper v-for="item in 6" :key="item">
            <template #card-image>
              <img src="@/assets/img/user.png" alt="" />
            </template>
            <template #card-body>
              <div class="header-area p-2">
                <h5 class="font-weight-bold">Lorem Ipsum</h5>
              </div>
              <div class="p-3 text-left">
                <h6 class="font-weight-bold mb-1">Lorem ipsum dolor simeti delectus!</h6>
                <p> Lorem ipsum dolor sit amet conssit officia recusandae odit reiciendis pariatur tenetur obcaecati nostrum quisquam assumenda id, dicta voluptates et! </p>
              </div>
            </template>
          </card-wrapper>
        </div>
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
.header-area {
  background: var(--PRIMARY2);
}
.mandate-our-team img {
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
  -o-object-position: center;
  /* width: 30%; */
}

.our-team-list {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
}

@media (max-width: 990px) {
    .our-team-list {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
