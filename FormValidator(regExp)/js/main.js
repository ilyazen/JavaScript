//document.querySelector("#Cheese");
class Form {
  constructor(){
    this.idPhone = '#exampleFormControlInput2';
    this.idEmail ='#exampleFormControlInput1';
    this.idName='#exampleFormControlInput3';
    this.idTextArea = "#exampleFormControlTextarea1";
    this.selectorBtn = ".btn" ;
    this.classError = "bgred";
  }
  init() {
    let btn = document.querySelector(this.selectorBtn);
    btn.addEventListener('click',() => {
      this._validation();
    })
  }
  _checkPhone (){
    let phone = document.querySelector(this.idPhone);
    console.log(phone.value.match(/\+7\d{10}\b/g))
    if(phone.value.match(/\+7\d{10}\b/g) === null) {
      phone.classList.add(this.classError)
      return;
    } 
    if(phone.value.match(/\+7\d{10}\b/g) !== null){
      phone.classList.remove(this.classError)
    }
  }
  _checkName(){
    let name = document.querySelector(this.idName);
    console.log(name.value.match(/\D/g))
    if(name.value.match(/\D/g) === null) {
      name.classList.add(this.classError)
      return;
    } 
    if(name.value.match(/\D/g) !== null){
      name.classList.remove(this.classError)
    }
  }
  _checkEmail(){
    let email = document.querySelector(this.idEmail);
    console.log(email.value.match(/@mail\.ru\b/g))
    if(email.value.match(/@mail\.ru/g)=== null) {
      email.classList.add(this.classError)
      return;
    } 
    if(email.value.match(/@mail\.ru/g) !== null){
      email.classList.remove(this.classError)
    }
  }
  _validation (){
    this._checkPhone();
    this._checkName();
    this._checkEmail();
  }

}
let form = new Form();
form.init()
