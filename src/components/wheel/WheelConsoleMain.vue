<template>
  <div id="console">
    <Nes @consoleType="handleConsoleClick"/>
    <Sega @consoleType="handleConsoleClick"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nes from './console/Nes.vue';
import Sega from './console/Sega.vue';
import {ConsoleType} from "@/model/ConsoleType";
import axios from "axios";

@Options({
  components: {
    Nes,
    Sega
  },
  methods: {
    handleConsoleClick(consoleType: ConsoleType) {
      this.addInterceptor();
      axios.get(this.baseUrl + "/v1/consoles/" + consoleType)
      .then(response => {
        this.$emit('gameConsole', response.data)
      });
      this.removeInterceptor()
    },
    addInterceptor() {
      let that = this;
      axios.interceptors.request.use(function (req) {
        that.$emit('isLoadingGameCount', true)
        return req;
      });
      axios.interceptors.response.use(function (res) {
        that.$emit('isLoadingGameCount', false)
        return res;
      });
    },
    removeInterceptor() {
      axios.interceptors.response.eject(0)
      axios.interceptors.request.eject(0)
    }
  },
  computed: {
    baseUrl() {
      return process.env.VUE_APP_API_BASE_URL;
    }
  }
})
export default class WheelConsoleMain extends Vue {
}
</script>

<style>
.console-button {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 75px;
  margin: 20px;
}

.console-button:hover {
  transform: scale(1.2);
}
</style>