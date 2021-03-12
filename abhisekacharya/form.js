function validateform(){  
    var fname=document.myform.fname.value;  
    var fathername=document.myform.fathername.value;  
    var mname=document.myform.mname.value; 
    var sname=document.myform.sname.value;   
    
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
    else (sname==null || sname=="")
      alert("School Name can't be blank.");  
      return false;  
      }  
    