<template>
  <v-card>
    <v-card-title>{{item.name}}</v-card-title>
    <v-responsive>
      <v-img
        height="300px"
        :src="item.images[0] == null ? '' : item.images[0].url"
        :title="JSON.stringify(item)"
        @click="redirect"
        class="clickable"
      />
    </v-responsive>
    <v-card-text v-if="open">
      <v-card v-for="(item, index) in tracks.items" :key="index" class="clickable">
        <Track :item="item"/>
      </v-card>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn small @click="getTracks">
        <v-icon>{{open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Track from "../components/Track";

export default {
  props: {
    item: Object
  },
  components: { Track },
  data() {
    return {
      open: false,
      tracks: []
    };
  },
  methods: {
    redirect() {
      window.open(this.item.external_urls.spotify);
    },
    getTracks() {
      this.open = !this.open;
      if (this.tracks.length == 0) {
        axios
          .get(this.item.tracks.href)
          .then(response => {
            this.tracks = response.data;
          })
          .catch(error => console.log(error));
      }
    }
  }
};
</script>

