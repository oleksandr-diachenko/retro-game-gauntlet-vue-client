<template>
  <div class="font-monospace text-info">
    <div v-if="gameConsole.consoleType">
      {{ gameConsole.consoleType }}&nbsp;:&nbsp;{{ gameConsole.gameCount }} games
    </div>
    <div v-else>Select console</div>
  </div>
</template>

<script>
export default {
  props: {
    gameConsole: {
      consoleType: String,
      gameCount: Number
    }
  }
}
</script>