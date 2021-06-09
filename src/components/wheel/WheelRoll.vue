<template>
  <div>
    <button type="button" class="btn btn-outline-primary w-100" id="wheel-random-button"
            @click="onClick()" :disabled="!gameConsole.consoleType">Roll
    </button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import WheelGameCount from "@/components/wheel/WheelGameCount.vue";
import WheelConsoleMain from "@/components/wheel/WheelConsoleMain.vue";
import WheelView from "@/components/wheel/WheelView.vue";
import {GameConsole} from "@/model/GameConsole";
import {Game} from "@/model/Game";
import {ConsoleType} from "@/model/ConsoleType";

@Options({
  components: {WheelRoll, WheelGameCount, WheelConsoleMain, WheelView},
  props: {
    gameConsole: GameConsole
  },
  methods: {
    onClick() {
      //TODO retrieve data from server
      const game = new Game('Super Mario bros', 1985, ConsoleType.Nes)
      this.$emit('game', game)
    }
  }
})
export default class WheelRoll extends Vue {
}
</script>

<style scoped>
button:disabled {
  color: grey;
  border-color: grey;
}
</style>