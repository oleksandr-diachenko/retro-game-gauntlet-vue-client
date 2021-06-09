<template>
  <div>
    <Header/>
    <div id="app" class="container">
      <WheelMain/>
    </div>
  </div>
</template>

<script>

import WheelMain from "@/components/wheel/WheelMain";
import Header from "@/components/header/Header";

export default {
  name: 'App',
  components: {Header, WheelMain}
}
</script>
