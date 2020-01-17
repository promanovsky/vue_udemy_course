<template>
  <div>
    <p>Server status HEAD: {{ status }}</p>
    <app-servers></app-servers>
  </div>
</template>

<script>
  export default {
      data: function() {
          return {status: 'Critical'}
      }
  }
</script>

<style lang="scss">
</style>
