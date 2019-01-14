<template lang="pug">
  Workers
</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Workers from '@/views/Workers.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Workers
  }
}
</script>

<style lang="scss" scoped>
.hui {
  background-color: red;
}

.zalupa {
  background-color: green;
}
</style>
