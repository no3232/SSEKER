<template>
  <v-app>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav  d-flex justify-lg-space-around">
      <li class="nav-item nav-link">
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
      <li class="nav-item nav-link">
        <router-link :to="{ name: 'peoples' }">Peoples</router-link>
      </li>
      <li class="nav-item nav-link">
        <v-btn><router-link :to="{ name: 'login' }">Login</router-link></v-btn>
      </li>
      <li class="nav-item nav-link">
        <v-btn><router-link :to="{ name: 'signup' }">Sign in</router-link></v-btn>
      </li>
    </ul>
  </div>
</nav>
    <nav>
    </nav>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
