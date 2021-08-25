<template>
  <v-card>
    <v-row>
      <v-col class="ma-0 pa-0">
        <v-text-field
          label=""
          outlined
          dense
          class="ma-6"
          prepend-icon="mdi-magnify"
          placeholder="Search"
          v-model="search"
          @input="Search"
          id="searchBar"
        ></v-text-field>
      </v-col>
      <v-col>
        <h5>Country</h5>
        <v-select
          :items="countries"
          label=""
          v-model="filterCountry"
          @input="Search"
        ></v-select>
      </v-col>
      <v-col>
        <h5>Manufactoring</h5>
        <v-text-field
          :items="[]"
          type="number"
          v-model="filterManufactoring"
          @input="Search"
        ></v-text-field>
      </v-col>
      <v-col>
        <h5>Advertisment</h5>
        <v-text-field
          :items="[]"
          label=""
          type="number"
          v-model="filterAdvertisment"
          @input="Search"
        ></v-text-field>
      </v-col>
      <v-col>
        <h5>Shipment</h5>
        <v-text-field
          :items="[]"
          label=""
          type="number"
          v-model="filterShipment"
          @input="Search"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Toolbar",
  components: {},
  props: {
    countries: {
      type: Array,
    },
  },
  created() {
    this.countries.push("");
  },
  data() {
    return {
      search: "",
      filterCountry: "",
      filterManufactoring: "",
      filterAdvertisment: "",
      filterShipment: "",
    };
  },
  methods: {
    Search() {
      this.$emit("searchproducts", this.search);
      this.$emit(
        "filterproducts",
        this.filterCountry,
        this.filterManufactoring,
        this.filterAdvertisment,
        this.filterShipment
      );
    },
  },
};
</script>