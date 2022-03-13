<script>
export default {
  props: {
    title: "",
  },
  data: function () {
    return {
      active: false,
    };
  },
};
</script>

<template>
  <div v-bind:class="{ 'border-2': active}" class="rounded-lg mb-2 sm:mb-3">
    <div class="flex w-full">
      <a href="#" class="p-2 md:p-4 w-full hover:bg-gray-100 rounded-lg flex justify-between relative" v-bind:class="{'bg-gray-100': active, 'rounded-b-none': active, 'border-b-2': active}" @click.prevent="active = !active">
        <slot />
        <div class="absolute right-2 sm:right-4 top-2 text-xs sm:text-md sm:top-3">
          <span v-show="!active"><i class="fi fi-rr-angle-down"></i></span>
          <span v-show="active"><i class="fi fi-rr-angle-up"></i></span>
        </div>
      </a>
    </div>
    <div v-show="active" class="h-full p-2 sm:p-4 rounded-b-lg" v-bind:class="{'bg-gray-100': active}">
      <slot name="content" />
    </div>
  </div>
</template>
