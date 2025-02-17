function submitData(event){
    //preventing the form property
    if (event) event.preventDefault();

    // receive username from input box
    let name1= document.getElementById("name").value
    let dob= document.getElementById("age").value

    //printing the received username in <p id=output> tag in html page	
    document.getElementById("output").innerText=
    `Student Name : ${name1},
    DOB: ${dob}`
}