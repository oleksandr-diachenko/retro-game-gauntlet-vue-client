<template>
  <div>
    <div class="row p-2 border-top">
      <div class="col-md center-block text-center">
        <WheelView :gameConsole="gameConsole" :game="game"/>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-md">
        <WheelRoll :gameConsole="gameConsole" @game="handleRandomGame($event)"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md center-block text-center p-2">
        <WheelGameCount :gameConsole="gameConsole"/>
      </div>
    </div>
    <div class="row border-top">
      <div class="p-4">
        <div class="col-md">
          <WheelConsoleMain @gameConsole="handleConsoleClick($event)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WheelRoll from "@/components/wheel/WheelRoll";
import WheelGameCount from "@/components/wheel/WheelGameCount";
import WheelConsoleMain from "@/components/wheel/WheelConsoleMain";
import WheelView from "@/components/wheel/WheelView";

export default {
  components: {WheelRoll, WheelGameCount, WheelConsoleMain, WheelView},
  methods: {
    handleConsoleClick(gameConsole) {
      this.gameConsole = gameConsole
    },
    handleRandomGame(game) {
      this.game = game
    }
  },
  data() {
    return {
      gameConsole: {
        consoleType: null,
        gameCount: null
      },
      game: {
        name: null,
        year: null,
        consoleType: null
      }
    }
  }
}
</script>