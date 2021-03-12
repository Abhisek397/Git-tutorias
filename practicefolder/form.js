function validateform(){  
    var fname=document.myform.fname.value;  
    var fathername=document.myform.fathername.value;  
    var mname=document.myform.mname.value; 
    var sname=document.myform.sname.value; 
    var address=document.myform.address.value; 
    var phone=document.myform.phone.value;   
    var email=document.myform.email.value; 
    if (fname==null || fname==""){  
      alert("Name can't be blank");  
      return false;  
    }
    else if(fathername==null || fathername==""){  
        alert("Fathers Name can't be blank.");  
        return false;  
    } else if(mname==null || mname==""){  
        alert("Mothers Name can't be blank.");  
        return false;  
    }
    else if(address==null || address==""){  
        alert("Address Name can't be blank.");  
        return false;  
    }
    else if(sname==null || sname==""){
    alert("School Name can't be blank.");  
    return false;  
}
    else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.email.value)||email=="null"||email=="")){
        alert("You have entered an invalid email address!");
     return false;   
  }
    

      } 