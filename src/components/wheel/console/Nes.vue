<template>
  <button id="nes" type="button" class="btn btn-secondary btn-lg console-button"
          @click=handleConsoleClick>NES
  </button>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {ConsoleType} from "@/model/ConsoleType";

@Options({
  methods: {
    handleConsoleClick() {
      this.$emit('consoleType', ConsoleType.Nes)
    },
  }
})
export default class Nes extends Vue {
}
</script>

<style scoped>
#nes {
  background-image: url('~@/assets/img/console/nes.png') !important
}
</style>