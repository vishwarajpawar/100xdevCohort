const onSubmit = (e) =>{
  e.preventDefault();

  let titleInp = document.getElementById("title");
  let descriptionInp = document.getElementById('description');
  let title = titleInp.value;
  let description = descriptionInp.value;

  fetch("http://localhost:3001/todos",{
    method: "POST",
    body: JSON.stringify({
      title: title,
      completed:false,
      description: description

    }),
    headers:{
      "Content-Type":"application/json"
    }
  }).then(function(response){
    return response.json();
  }).then(
    function(data){
      
    }
  )

};