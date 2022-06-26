<template>
  <div class="toast">
    <h1 class="toast-title">
      {{ toast }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ToastNotification',
  props: {
    toast: {
      type: String,
      default: 'Please be careful what you wrote',
    },
  },
}
</script>

<style  scoped>
.toast {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  background-color: blueviolet;
  border-radius: 12px;
  padding: 8px 12px;
}
.toast-title {
  color: white;
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
}
</style>