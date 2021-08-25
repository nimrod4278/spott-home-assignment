<template>
  <div>
    <v-card class="ma-8">
      <v-row>
        <v-col
          cols="4"
          class="d-flex flex-column justify-space-around align-center"
        >
          <div>
            <v-avatar color="primary white--text" size="80">Img</v-avatar>
          </div>
          <div class="text-center font-weight-black">
            {{ product.productName }}
          </div>
        </v-col>
        <v-col cols="8">
          <v-row
            class="d-flex align-center"
            v-for="(value, key, index) in product.cogs"
            :key="index"
          >
            <v-col> {{ key }} </v-col>
            <v-col cols="2" class="d-flex justify-end mr-8">
              {{ value }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex flex-column align-end mr-4">
          <ProductModal
            :PropProduct="product"
            @updateproduct="updateCardProduct"
            :countries="countries"
            class="ml-8"
          />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import ProductModal from "./ProductModal.vue";

export default {
  name: "ProductCard",
  components: {
    ProductModal,
  },
  props: {
    PropProduct: {
      type: Object,
      required: true,
    },
    countries: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      product: this.PropProduct,
    };
  },
  methods: {
    updateCardProduct(updatedProduct) {
      this.product = updatedProduct;
      this.$emit("updateproduct", updatedProduct);
    },
  },
  created() {},
};
</script>