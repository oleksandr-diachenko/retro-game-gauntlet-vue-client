<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
        <a class="navbar-brand font-monospace text-primary" href="#">Retro game gauntlet</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
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
        <h2 class="font-weight-light font-monospace text-center">Retro game gauntlet</h2>
        <p>Don't know which game to play? Welcome to visit us. We will help you to choose your destiny. Select console and click 'Roll' button. Engine will randomly choose game from selected console.</p>
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