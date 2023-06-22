class jobtitlepage{
    addbutton(){

        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    }
    adminmenu(){
        return 'Admin'
    }
    submenu(){
        return 'Job'
    }
    jobtitlebutton(){
        return 'Job Titles'
    }
    jobtitleinput(){
        return 'input[class="oxd-input oxd-input--active"]'
    }
    jobtitledescribtion(){
        return 'textarea[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]'
    }
    submit(){
        return 'button[type="submit"]'
    }
    jobtitleinlist(){
        return 'shree'
    }

    //pay grades

     paygrades(){
        return 'Pay Grades'
     }
     addpaygrades(){
        return 'h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]'
     }
     paygradesinput(){
        return 'input[class="oxd-input oxd-input--active"]'
     }
     submit(){
        return 'button[type="submit"]'
     }
    
     //employee status

     emlpoyeestatus(){
        return 'Employment Status'
     }
     addemployeestatus(){
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
     }
     addemployeestatusinput(){
        return 'input[class="oxd-input oxd-input--active"]'
     }
     submit(){
        return 'button[type="submit"]'
     }
      
    }

const jobtitle = new jobtitlepage()

export default jobtitle 