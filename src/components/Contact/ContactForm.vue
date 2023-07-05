<template>
  <div class="contact-form">
    <div class="container">
      <h5 class="text-center mb-3">send a message</h5>

      <div class="d-flex justify-content-center">
        <form action="" class="w-75">
          <div class="form-data">
            <h5>name</h5>
            <div class="form-item">
              <div>
                <input type="text" />
                <label for="">First Name</label>
              </div>
              <div>
                <input type="text" />
                <label for="">Last Name</label>
              </div>
            </div>
          </div>

          <div class="form-data">
            <h5>email and phone number</h5>
            <div class="form-item">
              <div>
                <input type="text" />
                <label for="">email@example.com</label>
              </div>
              <div>
                <input type="text" />
                <label for="">Please enter a valid phone number</label>
              </div>
            </div>
          </div>

          <div class="form-data mb-2">
            <textarea name="" id="" cols="30" rows="6"></textarea>
            <label for="">Message</label>
          </div>

          <div class="text-right">
            <button class="button primary-btn">
                send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-form h5 {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
}

.form-data input,
.form-data textarea {
  width: 100%;
  padding: 6px;
  border: 1px solid #A3A3A3;
  border-radius: 8px;
}

.form-data .form-item {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    gap: 20px;
}

.form-data .form-item div {
    width: 100%;
    margin-bottom: 12px;
}

.form-data  label {
    color:#A3A3A3 ;
    font-size: 14.6px;
}

@media (max-width:990px) {
    .contact-form .w-75 {
        width: 100% !important;
    }
    .form-data .form-item { 
        flex-direction: column;
    }
}
</style>
