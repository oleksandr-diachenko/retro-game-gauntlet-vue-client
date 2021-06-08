<template>
  <button class="btn btn-secondary btn-lg" @click="onClick" id="sega" type="button">SEGA</button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('consoleType', 'SEGA')
    }
  }
}
</script>

<style scoped>

</style>