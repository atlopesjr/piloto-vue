import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pilots: [
      {
        name: "Michael Schumacher",
        age: "52 yeard old",
        country: "Germany",
        category: "F1",
        picture: "schumacher.jpg",
      },
      {
        name: "Lewis Hamilton",
        age: "36 yeard old",
        country: "United Kingdom",
        category: "F1",
        picture: "lewis.jpg",
      },
      {
        name: "Valentino Rossi",
        age: "42 yeard old",
        country: "Italy",
        category: "MotoGP",
        picture: "valentino.jpg",
      },
      {
        name: "Giacomo Agostini",
        age: "79 yeard old",
        country: "Italy",
        category: "MotoGP",
        picture: "giacomo.jpg",
      },
      {
        name: "Roberval Andrade",
        age: "50 yeard old",
        country: "Brazil",
        category: "Formula Truck",
        picture: "roberval.jpg",
      },
      {
        name: "Valmir Benavides",
        age: "65 yeard old",
        country: "Brazil",
        category: "Formula Truck",
        picture: "valmir.jpg",
      },
      {
        name: "Aric Almirola",
        age: "37 yeard old",
        country: "EUA",
        category: "Nascar",
        picture: "aric.jpg",
      },
      {
        name: "Josh Bilicki",
        age: "26 yeard old",
        country: "EUA",
        category: "Nascar",
        picture: "josh.jpg",
      },
    ],
    title: "Pilots",
    f1title: "f1 drivers",
    drivers: [],
  },
  mutations: {
    SET_DRIVERS(state, payload) {
      state.drivers = payload;
    },
  },
  actions: {
    fetchDrivers({ commit }) {
      axios
        .get("http://ergast.com/api/f1/2021/drivers.json")
        .then((res) => {
          const payload = res.data.MRData.DriverTable.Drivers;
          commit("SET_DRIVERS", payload);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    bigTitle(state) {
      return state.f1title.toUpperCase();
    },
  },
  modules: {},
});
