import {
    mount,
    createLocalVue
} from '@vue/test-utils'
import Vuetify from 'vuetify';
// import sinon from 'sinon'

import Home from '@/views/Home.vue'

import MockProductlist from '../mocks/productList'
import MockProduct from '../mocks/product'

describe('Home', () => {
    let wrapper;
    const localVue = createLocalVue();
    beforeEach(() => {
        wrapper = mount(Home, {
            localVue,
            vuetify: new Vuetify(),

        });

        wrapper.setData({
            filteredProducts: MockProductlist,
            products: MockProductlist
        })
    });

    it('Mounts Correctly', async () => {
        expect(wrapper.html()).toContain("<h1>Cost Of Goods</h1>")
    })

    it('Update Product Correctly', async () => {
        await wrapper.vm.UpdateProduct(MockProduct)
        expect(wrapper.vm.products[0]).toBe(MockProduct) 
    })

    it('Search prodcuts correctly', async () => {
        // console.log('################################', wrapper.vm.filteredProducts)
        await wrapper.vm.SearchProducts("Size 6")
        expect(wrapper.vm.filteredProducts.length).toBe(1)
        expect(wrapper.vm.filteredProducts[0]._id).toBe("B093TGGHS7")
    })

    it('Filter products correctly', async () => {
        // wrapper.vm.filteredProducts.forEach((x, i) => console.log(x.productName))
        await wrapper.vm.FilterProducts("China", "", "", "")
        expect(wrapper.vm.filteredProducts.length).toBe(4)

        await wrapper.vm.FilterProducts("China", "1", "", "")
        expect(wrapper.vm.filteredProducts.length).toBe(3)

        await wrapper.vm.FilterProducts("China", "1", "", "2")
        expect(wrapper.vm.filteredProducts.length).toBe(2)

        await wrapper.vm.FilterProducts("China", "1", "3", "2")
        expect(wrapper.vm.filteredProducts.length).toBe(1)
    })
})