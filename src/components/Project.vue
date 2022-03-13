<script>
import Accordion from './Accordion.vue'

export default {
  components: { Accordion },
  props: {
    title: '',
    icon: '',
  }
}
</script>

<template>
  <Accordion>
    <div class="w-full">
      <h3 class="text-gray-600 text-sm sm:text-lg  font-semibold">
        <i v-bind:class="icon" class="fi mr-2"></i>
        {{ title }}
      </h3>
    </div>
    <template v-slot:content><slot /></template>
  </Accordion>
</template>
