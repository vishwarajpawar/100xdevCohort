function deletedTodo(data){
  console.log(data);
  }
  
  function deleteTodo(id){
    fetch(`http://localhost:3001/todos/${id}`,{
    method:"DELETE",
    headers:{
      "Content-type":"applicaton/json"
    }
    }).then(function(res){
      if(res.ok){
        console.log("todo deleted");
        getData();
      }
    });
  }

  function createElements(data){
    let table  = document.getElementById('todolist');
    table.innerHTML="";
    for(todo of data){
    var tableBody = document.createElement('tbody');
    var tablerow = document.createElement('tr');

    var tablecell1 = document.createElement('td');
    tablecell1.innerText = todo.title
    //var tablecell2 = document.createElement('td');
    //tablecell2.innerText = todo.completed;
    var tablecell3 = document.createElement('td');
    tablecell3.innerText = todo.description;
    var tablecell4 = document.createElement('td');
    var btn = document.createElement('button');
    btn.innerText = 'Done';
    btn.setAttribute('onclick', `deleteTodo("${todo.id}")`)
    tablecell4.appendChild(btn);
   

    tablerow.appendChild(tablecell1);
    //tablerow.appendChild(tablecell2);
    tablerow.appendChild(tablecell3);
    tablerow.appendChild(tablecell4);
    
    tableBody.appendChild(tablerow);
    table.appendChild(tableBody);
  }
  }

function getDataCallback(res){
  res.json().then(createElements);
}

function getData(){

  fetch('http://localhost:3001/todos', {
    method:'GET',

  }).then(getDataCallback);

}

getData();

function onSubmit() {

  let titleInp = document.getElementById("title").value;
  let descriptionInp = document.getElementById('description').value;
''  
  fetch("http://localhost:3001/todos",{
    method: "POST",
    body: JSON.stringify({
      title: titleInp,
      completed:false,
      description: descriptionInp

    }),
    headers:{
      "Content-Type":"application/json"
    }
  }).then(function(response){
    return response.json();
  }).then(
    function(data){
      console.log(data);
      getData();
    }
  )
};

