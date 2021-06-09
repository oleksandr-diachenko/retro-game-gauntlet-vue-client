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

@Options({
  components: {WheelRoll, WheelGameCount, WheelConsoleMain, WheelView},
  props: {
    gameConsole: {
      consoleType: String,
      gameCount: Number
    }
  },
  methods: {
    onClick() {
      //TODO retrieve data from server
      const game = {
        name: 'SuperMario bros',
        year: 1985,
        consoleType: 'NES'
      }
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