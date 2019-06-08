<template>
  <v-layout row @click="redirect">
    <v-flex xs1>
      <v-img
        height="20px"
        width="20px"
        :src="item.track.album.images[2] != null ? item.track.album.images[2].url : ''"
      />
    </v-flex>
    <v-flex xs11>{{item.track.name}}</v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    redirect() {
      window.open(this.item.track.external_urls.spotify);
    }
  }
};
</script>

