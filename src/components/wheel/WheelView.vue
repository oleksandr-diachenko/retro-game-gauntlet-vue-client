<template>
  <div>
    <h2 v-if="game.name" class="text-danger font-monospace">
      {{ game.name }}&nbsp;({{ game.consoleType }})({{ game.year }})
    </h2>
  </div>
</template>

<script>
export default {
  props: ['game']
}
</script>
