<script>
import Accordion from './Accordion.vue'
import Dates from './Dates.vue'

export default {
  components: { Accordion, Dates },
  props: {
    institution: '',
    location: '',
    dates: '',
    isSchool: false,
  },
  computed: {
    icon: function () {
      return {
        'fi-rr-graduation-cap': !this.isSchool,
        'fi-rr-school': this.isSchool,
      }
    },
  },
}
</script>

<template>
  <Accordion>
    <div class="w-full">
      <h3 class="text-gray-600 text-sm sm:text-lg font-semibold mb-1">
        <i v-bind:class="icon" class="fi mr-2"></i>
        {{ institution }}
      </h3>

      <div class="text-gray-400 text-xs sm:text-sm flex justify-between">
        <div class="flex space-x-8">
          <span>
            <i class="fi fi-rr-marker ml-0.5 mr-2 sm:mr-2.5"></i>
            {{ location }}
          </span>
        </div>
        <Dates :text="dates" />
      </div>
    </div>
    <template v-slot:content><slot /></template>
  </Accordion>
</template>
