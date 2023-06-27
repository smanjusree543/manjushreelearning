class loginpagehrm{

   usernameinput(){
       return 'input[name="username"]'
       
   } 
   passwordinput(){
       return 'input[name="password"]'
   }
   submit(){
    return 'button[type="submit"]'
   }
   loginwithcredentials(username,password){
   
   cy.get(this.usernameinput()).type(username);
   cy.get(this.passwordinput()).type(password);
   cy.get(this.submit()).click();
} 
}
const login= new loginpagehrm()
export default login
    