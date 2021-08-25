import {
    mount,
    createLocalVue
} from '@vue/test-utils'
import Vuetify from 'vuetify';
import Toolbar from '@/components/Toolbar.vue'

import MockProductlist from '../mocks/productList'

describe('Toolbar', () => {
    let wrapper;
    const localVue = createLocalVue();
    beforeEach(() => {
        wrapper = mount(Toolbar, {
            localVue,
            vuetify: new Vuetify(),
            propsData: {
                countries: [],
            }
        });

        wrapper.setData({
            products: MockProductlist
        })
    });

    it('Mounts Correctly', () => {
        expect(wrapper.html()).toContain("Search")
        expect(wrapper.html()).toContain("Country")
        expect(wrapper.html()).toContain("Manufactoring")
        expect(wrapper.html()).toContain("Advertisment")
        expect(wrapper.html()).toContain("Shipment")
    })

    it('Search Correctly', () => {
        wrapper.setData({search: "Size 6"})
        wrapper.vm.Search()
        wrapper.vm.$nextTick()
        expect(wrapper.emitted().searchproducts).toBeTruthy()
        expect(wrapper.emitted().filterproducts).toBeTruthy()
    })

})