exports.LoginPage =

class LoginPage{

constructor(page){

    this.page = page;
    this.baseUrl = 'https://www.saucedemo.com/'
    this.userNameInputBox = '[placeholder="Username"]'; 
    this.passwordInputBox = '[placeholder="Password"]';
    this.loginButton = '#login-button'
}


async login(username, password){

    await this.page.fill(this.userNameInputBox, username);
    await this.page.fill(this.passwordInputBox, password);
    await this.page.click(this.loginButton);
}


async goToLoginPage (){

    await this.page.goto(this.baseUrl);
}
}
