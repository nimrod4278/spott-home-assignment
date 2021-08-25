<template class=" d-flex flex-row align-end">
  <v-dialog max-width="1000px" >
    <template v-slot:activator="modalActivator">
      <v-btn class="primary" v-on="modalActivator.on">update</v-btn>
    </template>
    <v-card>
      <v-card-title> {{ product.productName }} </v-card-title>
      <v-card-text>
        <v-form>
          <v-row class="d-flex align-center">
            <v-col class="body-1 bold font-weight-medium">Unit Cost</v-col>
            <v-col class="d-flex justify-end mr-8"
              ><h2>{{ product.cogs.unitManufacturingCost }}</h2></v-col
            >
            <v-col>
              <v-text-field
                class="h3"
                label="New Value"
                type="number"
                v-model="unitManufacturingCost"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col class="body-1 bold font-weight-medium" >Shipment Cost</v-col>
            <v-col class="d-flex justify-end mr-8"
              ><h2 >{{ product.cogs.shipmentUnitCost }}</h2></v-col
            >
            <v-col>
              <v-text-field
                class="h3"
                label="New Value"
                type="number"
                v-model="shipmentUnitCost"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col class="body-1 bold font-weight-medium"
              >Advertising Cost</v-col
            >
            <v-col class="d-flex justify-end mr-8"
              ><h2>{{ product.cogs.monthlyAdvertismentCost }}</h2></v-col
            >
            <v-col>
              <v-text-field
                class="h3"
                label="New Value"
                type="number"
                v-model="monthlyAdvertismentCost"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col class="body-1 bold font-weight-medium"
              >Manufactoring Country</v-col
            >
            <v-col class="d-flex justify-end mr-8"
              ><h2>{{ product.cogs.manufacturingCountry }}</h2></v-col
            >
            <v-col class="mr-4 pa-0 d-flex flex-row align-center"
              ><v-select
                :items="coutriesNames"
                label=""
                v-model="manufacturingCountry"
              ></v-select
            ></v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-row justify-end">
              <v-btn class="primary" @click="onUpdate">update</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import * as api from '../services/api/api'
import VerifyProductDetails from '../services/UpdateForm/ValidateForm';

export default {
  name: "ProductModal",
  components: {},
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
      dialog: false,
      coutriesNames: [],
      unitManufacturingCost: 0,
      shipmentUnitCost: 0,
      monthlyAdvertismentCost: 0,
      manufacturingCountry: "",
      product: this.PropProduct,
    };
  },
  methods: {
    onUpdate() {
      let updatedProduct = {
        _id: this.product._id,
        productName: this.product.productName,
        cogs: {
          manufacturingCountry: this.manufacturingCountry,
          unitManufacturingCost: parseInt(this.unitManufacturingCost),
          monthlyAdvertismentCost: parseInt(this.monthlyAdvertismentCost),
          shipmentUnitCost: parseInt(this.shipmentUnitCost),
        },
      };

      let isValidated = VerifyProductDetails(updatedProduct)

      if(isValidated){
        api.post('/cogs', updatedProduct)
        .then((res) => {
          if (res.status == 201) {
            this.product = updatedProduct;
            this.$emit('updateproduct', updatedProduct);
            alert("Updated product!")
          } else {
            alert(`ERROR - ${res.error}`)
          }
        });
      } else {
        alert("Product data is wrong - Please try again")
      }
    },
  },
  async created() {
    this.coutriesNames = this.countries.map((x) => x.name);
  },
};
</script>