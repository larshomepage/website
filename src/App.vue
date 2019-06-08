<template>
  <div id="app">
    <v-app id="inspire" light>
      <v-toolbar color="blue darken-4" dark app fixed clipped-left>
        <v-toolbar-title>Lars Schipper</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn flat to="/">Home</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <router-view/>
      </v-content>

      <v-snackbar v-model="$store.state.snackbar" top :timeout="6000">
        {{$store.getters.snackbarText}}
        <v-btn color="red" flat @click="$store.commit('hideSnackbar')">Close</v-btn>
      </v-snackbar>
    </v-app>
  </div>
</template>


<script>
export default {};
</script>

<style>
.clickable {
  cursor: pointer;
}

@media (min-width: 1400px) {
  .v-content__wrap {
    padding: 0 15% 0 15%;
  }
}
</style>
