var ajax = new XMLHttpRequest();
ajax.open("GET", "http://localhost:8080/api/user");

let People = [];

window.onload = function() {
    const btnInsert = document.getElementById("btnInsert");
    showAll();
    btnInsert.addEventListener('click',insertPerson)
}

function showAll() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/api/user',
        datatype: "json",
        success: function(result)
        {
            const container = document.getElementById("people");
            container.innerHTML = "";
            createForm.reset();
            $("#modalNewCard").modal("hide");
            People = result;
            People.forEach(populateCards);
        },
        erro: function()
        {
            alert('Não foi Possível Visualizar');
        }
    });
}
function populateCards(person){
    const container = document.getElementById("people");
    let updateDate = "";
    if(person.updatedDate != null){
        updateDate = person.updatedDate;
    }
    let card =`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="`+person.url+`">
    <div class="card-body">
      <h5 class="card-title">`+person.name+`</h5>
      <h3 class="card-title">Atualizado:`+ updateDate +`</h3>
      <h3 class="card-title">Criado:`+person.createdate+`</h3>
       <button type="button" class="btn btn-link" data-toggle="modal" data-target="#modalCard" onclick="updateModal(`+person.id+`)">
            Veja mais
        </button>
    </div>
  </div>`
  
    container.innerHTML += card;
}

function updateModal(personID){
    var person = People.find(p => p.id == personID)
    document.getElementById("modalPersonId").value = personID;
    document.getElementById("modalPerfil").value = person.url;
    document.getElementById("modalPersonName").value = person.name;
    document.getElementById("modalPersonCPF").value = person.cpf;
    document.getElementById("modalPersonsurName").value = person.surName;
    document.getElementById("modalPhone").value = person.phone;
    document.getElementById("modalGenre").value = person.genre;
    document.getElementById("modalState").value = person.state;
    document.getElementById("modalDistrict").value = person.district;
    document.getElementById("modalAdress").value = person.adress;
    document.getElementById("modalNumberAdress").value = person.numberAdress;
    document.getElementById("modalAdressComplement").value = person.adressComplement;
    document.getElementById("modalObs").value = person.obs;
}

function editPerson()
{
    const container = document.getElementById("people");
    let id = document.getElementById("modalPersonId").value;
    let person = People.find(p=> p.id == id);
    var P ={
    id : id,
    url : document.getElementById("modalPerfil").value ,
    name : document.getElementById("modalPersonName").value,
    cpf : document.getElementById("modalPersonCPF").value,
    surName : document.getElementById("modalPersonsurName").value,
    phone : document.getElementById("modalPhone").value,
    genre : document.getElementById("modalGenre").value,
    state : document.getElementById("modalState").value,
    district : document.getElementById("modalDistrict").value,
    adress : document.getElementById("modalAdress").value,
    numberAdress : document.getElementById("modalNumberAdress").value,
    adressComplement : document.getElementById("modalAdressComplement").value,
    obs : document.getElementById("modalObs").value,
    createdate: person.createdate
    }
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8080/api/user',
        data:JSON.stringify(P),
        contentType: "application/json; charset=utf-8",
        success: function(response)
        {
            container.innerHTML = "";
            createForm.reset();
            $("#modalNewCard").modal("hide");
            People.push(response);
            showAll();
        },
        erro: function()
        {
            alert('Não foi Possível Atualizar');
        }
    });
}

  function insertPerson(e) {
    e.preventDefault();
    const createForm = document.getElementById("createForm");
    const container = document.getElementById("people");
    
    var P ={
        url: document.getElementById("modalPerfilNew").value,
        name: document.getElementById("modalPersonNameNew").value,
        cpf: document.getElementById("modalPersonCPFNew").value,
        surName: document.getElementById("modalPersonsurNameNew").value,
        genre: document.getElementById("modalGenreNew").value,
        phone: document.getElementById("modalPhoneNew").value,
        state: document.getElementById("modalStateNew").value,
        district: document.getElementById("modalDistrictNew").value,
        adress: document.getElementById("modalAdressNew").value,
        numberAdress: document.getElementById("modalNumberAdressNew").value,
        adressComplement: document.getElementById("modalAdressComplementNew").value,
        obs: document.getElementById("modalObsNew").value
    }
    var test = JSON.stringify(P);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/user',
        data:JSON.stringify(P),
        contentType: "application/json; charset=utf-8",
        success: function(response)
        {
            container.innerHTML = "";
            createForm.reset();
            $("#modalNewCard").modal("hide");
            People.push(response);
            showAll();
        },
        erro: function()
        {
            alert('Não foi Possível Cadastrar');
        }
    });
    
  }

  function deletePerson()
  {
    let id = document.getElementById("modalPersonId").value;
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:8080/api/user/'+id,
        contentType: "application/json; charset=utf-8",
        success: function(response)
        {
            const container = document.getElementById("people");
            container.innerHTML = "";
            $("#modalNewCard").modal("hide");
            showAll();
        },
        erro: function()
        {
            alert('Não foi Possível Deletar');
        }
    });
  }