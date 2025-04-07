const body=document.getElementById("body");
const input=document.getElementById("input");
const addBtn=document.getElementById("addBtn");

function createTable(){
   const tr=document.createElement("tr");
   const td1=document.createElement("td")
   const td2=document.createElement("td");
   const td3=document.createElement("td");
    
   addBtn.addEventListener("click", ()=>{
    let userValue=input.value.trim();
    
    if(userValue==""){
        alert("user value can not be empty")
    }
    console.log(userValue)
   })

   tr.append(td1,td2,td3);
   body.append(tr);

   return body;
   
}

createTable()


