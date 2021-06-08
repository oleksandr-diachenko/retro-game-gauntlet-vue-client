<template>
  <button id="nes" @click="onClick" type="button" class="btn btn-secondary btn-lg">NES</button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('consoleType', 'NES')
    }
  }
}
</script>

<style scoped>

</style>