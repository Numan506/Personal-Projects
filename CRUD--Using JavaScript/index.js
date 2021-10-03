var selectedRow = null;

function formOnSubmit(){
    event.preventDefault();
    

   var formData = selectedElement()
   console.log(formData)
   if(selectedRow==null && formData.productcode !="" && formData.productname !="" && formData.price !="" ){
       
       insertNewData(formData)
   }  
   if(formData.productcode =="" && formData.productname =="" && formData.price =="" ){
       alert("Input must be needed")
   }    
   else{
    
    updateRecord(formData);
   }
   
}

// selectedElement
function selectedElement(){
    var formData={};
    formData["productcode"] = document.querySelector("#productcode").value;
    formData["productname"] = document.querySelector("#productname").value;
    formData["price"] = document.querySelector("#price").value;
   return formData;
}
// insertNew Data
function insertNewData(data){
    var table = document.querySelector("#storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length)
    var cell1 = newRow.insertCell(0)
        cell1.innerHTML = data.productcode;
    var cell2 = newRow.insertCell(1)  
        cell2.innerHTML = data.productname;

    var cell3 = newRow.insertCell(2)
        cell3.innerHTML=data.price
    var cell4 = newRow.insertCell(3)
    cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>` 
    resetForm()         
}
// On Edit
function onEdit(td){
    selectedRow = td.parentElement.parentElement
        document.querySelector("#productcode").value = selectedRow.cells[0].innerHTML
        document.querySelector("#productname").value = selectedRow.cells[1].innerHTML
        document.querySelector("#price").value = selectedRow.cells[2].innerHTML
}

function onDelete(td){ 
    if(confirm('do you want to delete')){
        row = td.parentElement.parentElement
        document.querySelector("#storeList").deleteRow(row.rowIndex)
        resetForm()
    }
}

// On Delete
function resetForm(){
    document.querySelector("#productcode").value="";
    document.querySelector("#productname").value ="";
    
    document.querySelector("#price").value =""
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productcode
    selectedRow.cells[1].innerHTML = formData.productname
  
    selectedRow.cells[2].innerHTML = formData.price
} 