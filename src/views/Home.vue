<template>
  <v-container fluid>
    <v-layout>
      <v-flex grow>
        <v-card v-if="result">
          <v-card-title>
            <h2 class="headline">spotify.</h2>
          </v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 md4 pa-2 v-for="item in result.items" :key="item.id">
                <Playlist :item="item"/>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Playlist from "../components/Playlist";
import Vue from "vue";

export default {
  data() {
    return {
      result: null
    };
  },
  components: {
    Playlist
  },
  mounted() {
    if (!localStorage.getItem("authSpotify")) {
      if (window.location.hash == "") {
        window.location.replace(
          "https://accounts.spotify.com/authorize?response_type=token&redirect_uri=http://localhost:8080/callback&client_id=b9b770de24d54fe8afea9192d97894c7&scope=playlist-read-private"
        );
      } else {
        var hash = window.location.hash.substr(1);
        var result = hash.split("&").reduce(function(result, item) {
          var parts = item.split("=");
          result[parts[0]] = parts[1];
          return result;
        }, {});

        localStorage.setItem("authSpotify", result.access_token);
        Vue.axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("authSpotify")}`;
        this.$router.replace("/");
        this.getPlaylists();
      }
    } else {
      this.getPlaylists();
    }
  },
  methods: {
    getPlaylists() {
      axios
        .get("https://api.spotify.com/v1/me/playlists")
        .then(response => {
          console.log(response);
          this.result = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

