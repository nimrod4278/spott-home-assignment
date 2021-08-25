<template>
  <v-container>
    <v-row class="ml-2">
      <h1>Cost Of Goods</h1>
    </v-row>
    <v-row class="pa-0 mx-0">
      <v-col cols="12">
        <Toolbar
          @searchproducts="SearchProducts"
          :countries="coutriesNames"
          @filterproducts="FilterProducts"
        />
      </v-col>
    </v-row>
    <v-row id="cardList" class="mx-0 my-10 d-flex justify-space-between">
      <v-col
        cols="6"
        class="pa-0"
        v-for="product in filteredProducts"
        :key="product._id"
      >
        <ProductCard
          :PropProduct="product"
          @updateproduct="UpdateProduct"
          :countries="countries"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Toolbar from "../components/Toolbar";
import ProductCard from "../components/ProductCard";

import * as api from '../services/api/api'


export default {
  name: "Home",
  components: {
    Toolbar,
    ProductCard,
  },
  data: () => ({
    products: [],
    filteredProducts: [],
    countries: [],
    coutriesNames: [],
  }),
  async created() {
    this.products = await api.get("/products").then(res => res.data)
    this.countries = await api.get("/countries").then(res => res.data)
    this.coutriesNames = this.countries.map((x) => x.name);
    this.filteredProducts = this.products;
  },
  methods: {
    UpdateProduct(updatedProduct) {
      let idx = this.products.findIndex(
        (product) => product._id == updatedProduct._id
      );
      this.products[idx] = updatedProduct;
    },
    SearchProducts(search) {
      this.filteredProducts = this.products.filter((product) => {
        return product.productName.toLowerCase().includes(search.toLowerCase());
      });
    },
    FilterProducts(
      filterCountry,
      filterManufactoring,
      filterAdvertisment,
      filterShipment
    ) {
      this.filteredProducts = this.filteredProducts.filter((product) => {
        return (
          (product.cogs.manufacturingCountry == filterCountry ||
            filterCountry == "") &&
          (product.cogs.unitManufacturingCost ===
            parseInt(filterManufactoring) ||
            filterManufactoring == "") &&
          (product.cogs.monthlyAdvertismentCost ===
            parseInt(filterAdvertisment) ||
            filterAdvertisment == "") &&
          (product.cogs.shipmentUnitCost === parseInt(filterShipment) ||
            filterShipment == "")
        );
      });
    },
  },
};
</script>
