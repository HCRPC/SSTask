import {test, expect} from '@playwright/test';
exports.ApiVerifications =


class ApiVerifications {
   
    async verifyResponseSuccess(response){

        expect(response.status()).toBeGreaterThanOrEqual(200) && toBeLessThan(300);  
    } 


    async verifyUserNotFound(response){

        expect ( response.status()).toBe(404);
    }


    async verifyFieldValue(response, value){

        var data = await response.json();
        let totalUserLast = data.length;
        expect(value).toEqual(totalUserLast);
    }


    async verifyValueUpdated(value1, value2){

        expect(value1).toEqual(value2);
    }
}