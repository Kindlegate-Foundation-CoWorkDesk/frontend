<template>
  <div id="app-footer">
    <div class="container">
      <img src="@/assets/img/kindlegate_logo.svg" width="120" class="logo" alt="" />
      <div class="d-lg-flex" style="gap:50px">
        <div class="w-100 my-3">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Maecenas porttitor congue massa. 
              Fusce posuere, magna sed pulvinar ultricies,
            </p>
        </div>
        <div  class="w-100">
          <h5>Reach Us</h5>
          <ul>
            <li>
              <router-link to="/our-mandate">About Us</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact Us</router-link>
            </li>
          </ul>
        </div>
        <div  class="w-100">
          <h5>Programs</h5>
          <ul>
            <li>
              <router-link to="/programs">Arts</router-link>
            </li>
            <li>
              <router-link to="/programs">SDGs</router-link>
            </li>
            <li>
              <router-link to="/programs">Entreprenuership</router-link>
            </li>
          </ul>
        </div>
        <div  class="w-100">
          <h5>Resources</h5>
          <ul>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
            <li>
              <router-link to="/">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="/news">News</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="bg-white" />
    <div class="container">
      <div class="social-media-icons">
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app-footer {
  background: var(--BG2);
  padding: 30px 0;
}

#app-footer .logo {
  width: 100px;
  height: 100px;
}

#app-footer h5 {
  color: #fff;
  font-weight: 600;
  font-size: 17px;
}

#app-footer ul li {
  list-style: none;
}

#app-footer ul li a {
  color: #F1F1F1;
  font-size: 14px;
}

#app-footer p {
  color: #F1F1F1;
}

.social-media-icons {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 20px;
  justify-content: center;
}

.social-media-icons .fa {
  color: #fff;
  font-size: 25px;
}
</style>
