exports.ApiRequests =

class ApiRequests {
    constructor(){

        this.baseUrl ='https://jsonplaceholder.typicode.com/posts/';
    }
    
    async userGetRequest(){
        await this.request.get(this.baseUrl);
    }

}