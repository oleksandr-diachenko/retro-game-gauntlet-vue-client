<template>
  <div>
    <button type="button" class="btn btn-outline-primary w-100" id="wheel-random-button">Random
    </button>
  </div>
</template>

<script>
export default {
  props: {
    consoleType: String,
    game: {
      name: String,
      year: Number,
      consoleType: String
    }
  }
}
</script>

<style scoped>

</style>