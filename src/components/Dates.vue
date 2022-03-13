<script>
export default {
  props: {
    text: '',
  },
}
</script>

<template>
  <div class="flex">
    <i class="fi fi-rr-calendar mr-2"></i>
    <div class="whitespace-nowrap">{{ text }}</div>
  </div>
</template>
