import {test,expect} from '@playwright/test';
import { ApiVerifications } from '../../pages/API/ApiVerifications';
import { ApiRequests } from '../../pages/API/ApiRequests'; 

const newUser = require('../../test-data/API/userPost.json')
const updatedUser = require('../../test-data/API/userPatch.json')
const root = require('../../test-data/API/root.json')

var av = new ApiVerifications;
const rq = new ApiRequests;

var id;
let totalUser;


test('Get Users', async ({request})=>{

    //const response = await rq.userGetRequest();
    const response = await request.get(root.baseUrl);
    const data = await response.json();

    totalUser = data.length;
    console.log(totalUser);

    av.verifyResponseSuccess(response);

})


test('Create User', async ({request})=>{
    
    const response = await request.post(root.baseUrl,
                        {
                            data: newUser
                        });

    var data = await response.json();                    
    id = data.id
    console.log(id);

    av.verifyResponseSuccess(response);
})

test('Get Specific User', async ({request})=>{

    // 101 de sonuc dönmüyor dönerse newUser == response.json() la esitle kontrol et
    const response = await request.get(root.baseUrl+ id);
    console.log( await response.json());

    av.verifyResponseSuccess(response);
   

})

test('Update Specific User', async ({request})=>{

    const response = await request.patch(root.baseUrl + id ,{
        data : updatedUser
    });

    const data = await response.json();
    const lastTitle = data.title;

    av.verifyValueUpdated(updatedUser.title, lastTitle)
    av.verifyResponseSuccess(response);

})

test('Delete Specific User', async ({request})=>{

    const response = await request.delete(root.baseUrl + id);
    console.log( await response.json());
    av.verifyResponseSuccess(response);

    const getResponse = await request.get(root.baseUrl + id);
    av.verifyUserNotFound (getResponse);
})

test('Compare Get Users', async ({request})=>{

    const response = await request.get(root.baseUrl);
    av.verifyFieldValue(response, totalUser);
    
})