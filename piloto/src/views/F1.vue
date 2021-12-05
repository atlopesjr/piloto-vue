<template>
  <div class="F1">
    <h1>{{titlePage}}</h1>
    <span>Below are some data from the F1 drivers:</span>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Driver ID
            </th>
            <th class="text-left">
              Perm. Number
            </th>
            <th class="text-left">
              Code
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Family Name
            </th>
            <th class="text-left">
              Birth
            </th>
            <th class="text-left">
              Nationality
            </th>
            <th class="text-left">
              Biography
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in drivers"
            :key="item.driverId"
          >
            <td>{{ item.driverId }}</td>
            <td>{{ item.permanentNumber }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.givenName }}</td>
            <td>{{ item.familyName }}</td>
            <td>{{ item.dateOfBirth }}</td>
            <td>{{ item.nationality }}</td>
            <td><a target="_blank" :href="`${item.url}`">Biography</a></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "F1",
  data(){
    return {}
  },
  computed: {
    drivers(){
      return this.$store.state.drivers
    },
    titlePage(){
      return this.$store.getters.bigTitle
    }
  },
  created(){
    this.$store.dispatch("fetchDrivers")
  }
}
</script>