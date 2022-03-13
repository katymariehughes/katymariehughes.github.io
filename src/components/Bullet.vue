<script>
export default {
  props: {
    icon: { type: String, default: 'fi-br-angle-double-small-right' },
  },
}
</script>

<template>
  <div class="flex text-xs sm:text-sm mb-3 last:mb-0 leading-6">
    <i v-bind:class="icon" class="fi mr-3"></i>
    <span>
      <slot />
    </span>
  </div>
</template>