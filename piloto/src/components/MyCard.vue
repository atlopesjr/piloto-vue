<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src="require(`@/assets/${cardInfo.picture}`)"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ cardInfo.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ cardInfo.country }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> More </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ cardInfo.age }}, {{ cardInfo.category }} pilot.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["cardid", "cardInfo"],
  data: () => ({
    show: false,
  }),
};
</script>
