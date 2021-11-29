<template>
    <div>
        <v-app-bar
        color="deep-purple accent-4"
        dark
        dense
        app
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Piloto</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn to="/f1">F1</v-btn>
        <v-btn to="ftruck">Formula Truck</v-btn>
        <v-btn to="/motogp">Moto GP</v-btn>
        <v-btn to="/nascar">Nascar</v-btn>

        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
                <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item>

            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'Appbar',

  data: () => ({
    drawer: false,
    group: null,
    items: [
        {
            text: 'F1',
            link: '/f1',
        },
        {
            text: 'Formula Truck',
            link: '/ftruck',
        },
        {
            text: 'Moto GP',
            link: '/motogp',
        },
        {
            text: 'Nascar',
            link: '/nascar',
        },
    ],
  }),
  watch: {
      group () {
        this.drawer = false
      },
  },
};
</script>