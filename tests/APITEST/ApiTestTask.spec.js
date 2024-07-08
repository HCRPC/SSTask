import {test,expect} from '@playwright/test';
import { ApiVerifications } from '../../pages/API/ApiVerifications';
import { ApiRequests } from '../../pages/API/ApiRequests'; 

const updatedUser = require('../../test-data/API/userPatch.json')

var av = new ApiVerifications;
const rq = new ApiRequests;

var id;
let totalUser;


test('Get Users', async ()=>{

    const response = await rq.userGetRequest();
    const data = await response.json();

    totalUser = data.length;
    console.log(totalUser);

    av.verifyResponseSuccess(response);
})


test('Create User', async ()=>{
    
    const response = await rq.userPostRequest();

    var data = await response.json();                    
    id = data.id
    console.log(id);

    av.verifyResponseSuccess(response);
})


test.skip('Get Specific User', async ()=>{

    // test is skipped since Create(POST) user cant generate an user in server!!!

    const response = await rq.userGetByIdRequest(id);
    console.log( await response.json());

    av.verifyResponseSuccess(response);
   

})


test('Update Specific User', async ()=>{

    const response = await rq.userPatchRequest(id);

    const data = await response.json();
    const lastTitle = data.title;

    av.verifyValueUpdated(updatedUser.title, lastTitle)
    av.verifyResponseSuccess(response);

})


test('Delete Specific User', async ()=>{

    const response = await rq.userDeleteRequest(id);
    console.log( await response.json());
    av.verifyResponseSuccess(response);

    const getResponse = await rq.userGetByIdRequest(id);
    av.verifyUserNotFound (getResponse);
})


test('Compare Get Users', async ()=>{

    const response = await rq.userGetRequest();
    av.verifyFieldValue(response, totalUser);
    
})