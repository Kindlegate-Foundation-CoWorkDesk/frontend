<template>
  <div class="card">
    <slot name="card-image" />
    <slot name="card-body" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.125);
  border-radius: 10px;
}
</style>
