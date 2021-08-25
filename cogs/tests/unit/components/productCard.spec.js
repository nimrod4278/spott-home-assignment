import {
    mount,
    createLocalVue
} from '@vue/test-utils'
import Vuetify from 'vuetify';
import ProductCard from '@/components/ProductCard.vue'

import MockProduct from '../mocks/product'

describe('ProductCard', () => {
    let wrapper;
    const localVue = createLocalVue();
    beforeEach(() => {
        wrapper = mount(ProductCard, {
            localVue,
            vuetify: new Vuetify(),
            propsData: {
                PropProduct: MockProduct,
                countries: []
            }
        })
    });

    it('Mounts Correctly', () => {
        expect(wrapper.html()).toContain("testName")
        expect(wrapper.html()).toContain("11")
        expect(wrapper.html()).toContain("12")
        expect(wrapper.html()).toContain("13")
        expect(wrapper.html()).toContain("testCountry")
        expect(wrapper.html()).toContain("button")
        expect(wrapper.html()).toContain("button")
        expect(wrapper.html("button")).toContain("update")
    })

    it('Updates card product correctly', () => {
        let updatedProduct = {
            "_id": "test",
            "productName": "test",
            "cogs": {
                "unitManufacturingCost": 1,
                "shipmentUnitCost": 2,
                "monthlyAdvertismentCost": 3,
                "manufacturingCountry": "China"
            }
        }
        wrapper.vm.updateCardProduct(updatedProduct)
        expect(wrapper.vm.product._id).toBe("test")
        expect(wrapper.vm.product.productName).toBe("test")
        expect(wrapper.vm.product.cogs.unitManufacturingCost).toBe(1)
        expect(wrapper.vm.product.cogs.shipmentUnitCost).toBe(2)
        expect(wrapper.vm.product.cogs.monthlyAdvertismentCost).toBe(3)
        expect(wrapper.vm.product.cogs.manufacturingCountry).toBe("China")

        expect(wrapper.emitted().updateproduct).toBeTruthy()
    })
})