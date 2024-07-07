import {test, expect} from '@playwright/test';
exports.HomePage =

class HomePages{
    constructor(page){
        this.page = page;
        this.productSortDropdown = '.product_sort_container';
        this.dropdownOptions = '.product_sort_container>option'
        this.productNames = '.inventory_item_name ';

    }


    async sortDescendingOrderByName(){

        await this.page.locator(this.productSortDropdown).selectOption({value: 'za'});
    }


    async verifyProductsSortedDescendingOrder(){

       var productNamesSortedDescending = [] ; 
       const products = await this.page.$$(this.productNames);

       for (const product of products) {
        const productName = await product.textContent();
        productNamesSortedDescending.push(productName)
         }

        var ProductNamesSortedDescendingExpected = [];
        ProductNamesSortedDescendingExpected = productNamesSortedDescending.sort((a, b) => b.localeCompare(a));
        
        expect(productNamesSortedDescending).toEqual(ProductNamesSortedDescendingExpected);
         
    }


    async verifyProductsSortedAscendingOrder(){

        var productNamesSortedAscending = [] ; 
        const products = await this.page.$$(this.productNames);
 
        for (const product of products) {
         const productName = await product.textContent();
         productNamesSortedAscending.push(productName)
          }
 
         var ProductNamesSortedAscendingExpected = [];
         ProductNamesSortedAscendingExpected = productNamesSortedAscending.sort((a, b) => a.localeCompare(b));
         
         expect(productNamesSortedAscending).toEqual(ProductNamesSortedAscendingExpected);
          
     }    
}