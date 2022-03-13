<script>
export default {
  props: {
    tags: ''
  },
  computed: {
    tagsList: function () {
      return this.tags.split(',');
    },
  },
}
</script>

<template>
<div class="flex flex-wrap -mt-3">
  <div v-for="tag in tagsList" :key="tag" class="mr-2 mt-3 rounded-full bg-green-100 font-mon text-xs py-1 px-2 border-green-200 border-2">{{tag}}</div>
</div>
</template>
