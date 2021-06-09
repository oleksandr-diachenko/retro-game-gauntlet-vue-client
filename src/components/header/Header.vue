<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
        <a class="navbar-brand font-monospace text-primary" href="#">Retro game gauntlet</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead"/>

    <section class="py-5">
      <div class="container">
        <h2 class="font-weight-light font-monospace">Retro game gauntlet</h2>
        <p>Don't know which game to play? Not even sure on which console? Welcome to visit us. We will help you to choose your destiny.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.masthead {
  height: 200px;
  min-height: 200px;
  background-image: url('~@/assets/img/console/consoles.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>