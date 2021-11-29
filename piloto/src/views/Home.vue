<template>
  <v-row no-gutters>
    <v-col
      v-for="(n,i) in 8"
      :key="n"
      cols="12"
      sm="12"
      md="4"
      xs="2"
    >
      <MyCard :cardid="i"></MyCard>
    </v-col>
  </v-row>
</template>

<script>
import MyCard from "@/components/MyCard"

export default {
  name: "Home",

  components: {
    MyCard,
  },
};
</script>
