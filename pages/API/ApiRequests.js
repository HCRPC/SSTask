import {request,expect} from '@playwright/test';
const newUser = require('../../test-data/API/userPost.json')
const updatedUser = require('../../test-data/API/userPatch.json')
const root = require('../../test-data/API/root.json')
exports.ApiRequests =

class ApiRequests {

    async userGetRequest() {

        const requestContext = await request.newContext();
        return await requestContext.get(root.baseUrl);
    }


    async userPostRequest() {

        const requestContext = await request.newContext();
        return await requestContext.post(root.baseUrl,
            {
                data: newUser
            });
    }


    async userPatchRequest(id) {

        const requestContext = await request.newContext();
        return await requestContext.patch(root.baseUrl + id ,
            {
                data: updatedUser
            });
    }


    async userDeleteRequest(id) {

        const requestContext = await request.newContext();
        return await requestContext.delete(root.baseUrl + id);
    }


    async userGetByIdRequest(id) {

        const requestContext = await request.newContext();
        return await requestContext.get(root.baseUrl + id);
    }
}