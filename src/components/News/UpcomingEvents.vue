<template>
  <div class="upcoming-events">
    <h3 class="font-weight-bold text-center my-4">Upcoming Event</h3>
    <div class="container">
      <div class="events-cards py-4">
        <div class="events-card" v-for="item in 4" :key="item">
          <div class="events-img w-100">
            <div class="events-details">
              <span class="date">3 June</span>
              <span class="year">2023</span>
            </div>
            <img
              src="https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-146152.jpg?w=2000"
              alt=""
            />
          </div>
          <div class="p-3 events-body w-100">
            <p>
              Lorem ipsum dolor sit, axpedita amet labore, autem est sint
              accusantimollitia obcaecati aspernatur. Lorem ipsum dolor sit,
              axpedita amet labore, autem est sint accusantimollitia obcaecati
              aspernatur Lorem ipsum dolor sit, axpedita amet labore, autem est
              sint accusantimollitia obcaecati aspernatur! Lorem ipsum dolor
              sit, axpedita amet labore, autem est sint accusantimollitia
              obcaecati aspernatur!
            </p>
            <button class="read-button mt-3">
              <span> Read more </span>
              <i-icon width="25px" icon="ph:arrow-circle-right-fill" />
            </button>
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

.events-cards {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 30px;
}

.events-img {
  position: relative;
}

.events-details {
  position: absolute;
  right: 0;
  top: 50%;
  bottom: 50%;
  background-color: red;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  /* flex-direction: column; */
  /* width: 300px; */
}

.events-card {
  border-radius: 20px !important;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.125);
  padding: 30px;
}

.events-img img {
  width: 100%;
  border-radius: 10px;
  height: 200px;
  object-fit: cover;
  -o-object-fit: cover;
}

.all-events {
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

@media (max-width:990px) {
    .events-card {
       flex-direction: column;
    }
}

</style>
