import {
    mount,
    createLocalVue
} from '@vue/test-utils'
import Vuetify from 'vuetify';

import ProductModal from '@/components/ProductModal.vue'

import MockProduct from '../mocks/product'

// jest.mock("axios", () => ({
//     get: () => Promise.resolve({
//         data: [{
//                 "_id": "B08QPPGNNZ",
//                 "productName": "MediChair Kneeling Chair",
//                 "cogs": {
//                     "unitManufacturingCost": 0,
//                     "shipmentUnitCost": 0,
//                     "monthlyAdvertismentCost": 0,
//                     "manufacturingCountry": ""
//                 }
//             },
//             {
//                 "_id": "B093TGGHS7",
//                 "productName": "BESTKID BALL Kids Basketball Size 6",
//                 "cogs": {
//                     "unitManufacturingCost": 0,
//                     "shipmentUnitCost": 0,
//                     "monthlyAdvertismentCost": 0,
//                     "manufacturingCountry": "China"
//                 }
//             }
//         ]
//     }),
//     post: () => Promise.resolve({
//         data: "OK"
//     })
// }));


describe('ProductModal', () => {
    let wrapper;
    let vuetify = new Vuetify()
    const localVue = createLocalVue();
    beforeEach(() => {
        wrapper = mount(ProductModal, {
            localVue,
            vuetify: vuetify,
            propsData: {
                PropProduct: MockProduct,
                countries: []
            },
        })
    });

    it('Mounts Correctly', () => {
        expect(wrapper.html()).toContain('<div role="dialog" class="v-dialog__container">')
        expect(wrapper.html("button")).toContain("update")
    })



    // VUETIFY DIALOG IS NOT RECOGNIZED SKIPPED THIS TEST 
    //
    // it('should open dialog', async () => {
    //     wrapper.setData({
    //         dialog: true
    //     });
    //     console.log(wrapper.html())
    //     await wrapper.vm.$nextTick(); // we have to wait until vue rerender the components content
    //     console.log(wrapper.html())
    //     // expect(wrapper.find('[data-testid="dialog-close-button"]').exists()).toBe(true);
    // });



    it('Post an API Call', () => {
        wrapper.setData({
            unitManufacturingCost: 123,
            shipmentUnitCost: 123,
            monthlyAdvertismentCost: 123,
            manufacturingCountry: "China"
        })
        wrapper.vm.$nextTick()
        wrapper.vm.onUpdate()
        expect(wrapper.vm.product.cogs.unitManufacturingCost).toBe(123)
        expect(wrapper.vm.product.cogs.shipmentUnitCost).toBe(123)
        expect(wrapper.vm.product.cogs.monthlyAdvertismentCost).toBe(123)
        expect(wrapper.vm.product.cogs.manufacturingCountry).toBe("China")
    })

    it('shows alert if succeded', () => {})

    it('shows alert if failed', () => {})

    it('Updates UI', () => {})

    it('Search correctly', () => {

    })

})