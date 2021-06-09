<template>
  <button id="sega" type="button" class="btn btn-secondary btn-lg console-button"
          @click="$emit('consoleType', 'SEGA')">SEGA
  </button>
</template>

<style scoped>
#sega {
  background-image: url('~@/assets/img/console/sega.png') !important;
}
</style>