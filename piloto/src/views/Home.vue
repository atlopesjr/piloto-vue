<template>
  <div>
    <h1>{{titleview}}</h1>
    <v-row no-gutters>
      <v-col
        v-for="(data,i) in myPilots"
        :key="i"
        cols="12"
        sm="12"
        md="4"
        xs="2"
      >
        <MyCard :cardid="i" :cardInfo="data"></MyCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MyCard from "@/components/MyCard"

export default {
  name: "Home",
  data(){
    return{
      titleview: this.$store.state.title
    }
  },
  computed: {
    myPilots(){
      return this.$store.state.pilots
    }
  },
  components: {
    MyCard,
  },
};
</script>
