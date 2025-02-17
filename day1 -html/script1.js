function submitData(event){
    if (event) event.preventDefault();
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;

    document.getElementById("output").innerText=
    `Student name: ${name} 
    Student DOB: ${age}`



}