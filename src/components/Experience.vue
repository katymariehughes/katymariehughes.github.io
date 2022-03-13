<script>
import Accordion from './Accordion.vue'
import Dates from './Dates.vue'

export default {
  components: { Accordion, Dates },
  props: {
    title: '',
    company: '',
    location: '',
    dates: '',
  },
}
</script>

<template>
  <Accordion>
    <div class="w-full">
      <h3 class="text-gray-600 text-sm sm:text-lg font-semibold mb-2">
        {{ title }}
      </h3>
      <div class="text-gray-400 text-xs sm:text-sm flex justify-between">
        <div class="block sm:flex sm:space-x-8">
          <div class="flex">
            <i class="fi fi-rr-building mr-3"></i>
            <span>{{ company }}</span>
          </div>
          <div class="mt-1 sm:mt-0">
            <i class="fi fi-rr-marker mr-3"></i>
             <span>{{ location }}</span>
          </div>
        </div>
        <Dates :text="dates" />
      </div>
    </div>
    <template v-slot:content><slot /></template>
  </Accordion>
</template>
