<template>
  <div>
    <h2 v-if="!game"></h2>
    <h2 v-if="game" class="text-danger font-monospace">
      {{ game.name }}&nbsp;({{ game.consoleType }})({{ game.year }})</h2>
  </div>
</template>

<script>
export default {
  name: "WhellView"
}
</script>

<style scoped>

</style>