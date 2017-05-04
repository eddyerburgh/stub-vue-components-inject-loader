<template>
  <div  v-bind:class="{ active: isActive }" />
</template>

<script>
  import dependency from '../lib/dependency'

  export default {
    name: 'Component',
    data () {
      return {
        isActive: dependency()
      }
    }
  }
</script>
