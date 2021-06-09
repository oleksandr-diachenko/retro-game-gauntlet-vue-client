<template>
  <button id="nes" type="button" class="btn btn-secondary btn-lg console-button"
          @click="$emit('consoleType', 'NES')">NES
  </button>
</template>

<style scoped>
#nes {
  background-image: url('~@/assets/img/console/nes.png') !important
}
</style>