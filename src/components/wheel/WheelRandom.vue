<template>
  <div>
    <button type="button" class="btn btn-outline-primary w-100" id="wheel-random-button"
            @click="onClick()" :disabled="!gameConsole.consoleType">Random
    </button>
  </div>
</template>

<script>
export default {
  props: {
    gameConsole: {
      consoleType: String,
      gameCount: Number
    }
  },
  methods: {
    onClick() {
      //TODO retrieve data from server
      const game = {
        name: 'SuperMario bros',
        year: 1985,
        consoleType: 'NES'
      }
      this.$emit('game', game)
    }
  }
}
</script>

<style scoped>

</style>