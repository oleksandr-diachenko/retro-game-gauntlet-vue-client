<template>
  <div>
    <h2 v-if="!name"></h2>
    <h2 v-if="name" class="text-danger font-monospace">
      {{ name }}&nbsp;({{ consoleType }})({{ year }})</h2>
  </div>
</template>

<script>
export default {
  props: ['name', 'consoleType', 'year']
}
</script>

<style scoped>

</style>