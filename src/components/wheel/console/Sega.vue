<template>
  <button id="sega" type="button" class="btn btn-secondary btn-lg console-button"
          @click=handleConsoleClick>SEGA
  </button>
</template>


<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {ConsoleType} from "@/model/ConsoleType";

@Options({
  methods: {
    handleConsoleClick() {
      //TODO retrieve data from server
      this.$emit('consoleType', ConsoleType.Sega)
    },
  }
})
export default class Sega extends Vue {
}
</script>

<style scoped>
#sega {
  background-image: url('~@/assets/img/console/sega.png') !important;
}
</style>