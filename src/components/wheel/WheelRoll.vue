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
import axios from "axios";

@Options({
  components: {WheelRoll, WheelGameCount, WheelConsoleMain, WheelView},
  props: {
    gameConsole: GameConsole
  },
  methods: {
    onClick() {
      axios.get(this.baseUrl + "/v1/games/random/" + this.gameConsole.consoleType)
      .then(response => {
        this.$emit('game', response.data)
      });
    }
  },
  computed: {
    baseUrl() {
      return process.env.VUE_APP_API_BASE_URL;
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