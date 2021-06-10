<template>
  <div>
    <div class="row p-2 border-top">
      <div class="col-md center-block text-center">
        <WheelView :game="game"/>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-md">
        <WheelRoll :gameConsole="gameConsole" @game="handleRandomGame"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md center-block text-center p-2">
        <WheelGameCount :gameConsole="gameConsole" :isGameCountLoading="isGameCountLoading"/>
      </div>
    </div>
    <div class="row border-top">
      <div class="p-4">
        <div class="col-md">
          <WheelConsoleMain @gameConsole="handleConsoleClick" @isLoadingGameCount="handleLoadingGameCount"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import WheelRoll from "@/components/wheel/WheelRoll.vue";
import WheelGameCount from "@/components/wheel/WheelGameCount.vue";
import WheelConsoleMain from "@/components/wheel/WheelConsoleMain.vue";
import WheelView from "@/components/wheel/WheelView.vue";
import {GameConsole} from "@/model/GameConsole";
import {Game} from "@/model/Game";

@Options({
  components: {WheelRoll, WheelGameCount, WheelConsoleMain, WheelView},
  methods: {
    handleConsoleClick(gameConsole: GameConsole) {
      this.gameConsole = gameConsole
    },
    handleRandomGame(game: Game) {
      this.game = game
    },
    handleLoadingGameCount(isLoading: boolean) {
      this.isGameCountLoading = isLoading
    }
  },
  data() {
    return {
      gameConsole: GameConsole,
      game: Game,
      isGameCountLoading: false
    }
  }
})
export default class WheelMain extends Vue {
}
</script>