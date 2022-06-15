const showDatabase = document.getElementsByClassName("card");
const showAllInformationPeople = document.getElementsByClassName("modal-body");
const showCardName = document.getElementsByClassName("modal fade");
const article = document.getElementById("activeRemove");


let People = [];

window.onload = function() {
    const btnInsert = document.getElementById("btnInsert");
    addDefaultPerson();
    btnInsert.addEventListener('click',insertPerson)
}

function addDefaultPerson() {
    People.push(
        {
            id: People.length + 1,
            url: "https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/205308418_4263790420326536_4449074302394512871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9nKukhHqDwYxE_mgf_4zQ7S_jBHLAtkbtL-MEcsC2Rrh4W3mNIyoo9fNECQWE-_85I0-rd54kO9GMrriX9CIv&_nc_ohc=9KEzKu21YkYAX8kZ7c_&_nc_ht=scontent-gru1-1.xx&oh=00_AT_btdPscMIseFxTbD3YSvfLa66IcDZQB4e-toGHtnVJpQ&oe=62CFEB97",
            name:"Vitor Hugo Fidelis dos Santos",
            CPF: "12312312345",
            surName: "Fidelis",
            genre: "M",
            phone: "41998441966",
            state: "PR",
            district: "Boqueirão",
            adress: "Rua Cascavel",
            numberAdress: "1715",
            adressComplement: "Casa 05",
            obs:"Testando",
            updatedDate:"",
            createdate:new Date()
        });

    People.forEach(populateCards);
}
function populateCards(person){
    const container = document.getElementById("people");
    let card =`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="`+person.url+`">
    <div class="card-body">
      <h5 class="card-title">`+person.name+`</h5>
      <h3 class="card-title">Atualizado:`+person.updatedDate+`</h3>
      <h3 class="card-title">Criado:`+person.createdate+`</h3>
       <button type="button" class="btn btn-link" data-toggle="modal" data-target="#modalCard" onclick="updateModal(`+person.id+`)">
            Veja mais
        </button>
    </div>
  </div>`
  
    container.innerHTML += card;
}

function updateModal(personID){
    var person = People[personID -1]
    document.getElementById("modalPersonId").value = personID;
    document.getElementById("modalPerfil").value = person.url;
    document.getElementById("modalPersonName").value = person.name;
    document.getElementById("modalPersonCPF").value = person.CPF;
    document.getElementById("modalPersonsurName").value = person.surName;
    document.getElementById("modalPhone").value = person.phone;
    document.getElementById("modalGenre").value = person.genre;
    document.getElementById("modalState").value = person.state;
    document.getElementById("modalDistrict").value = person.district;
    document.getElementById("modalAdress").value = person.adress;
    document.getElementById("modalNumberAdress").value = person.numberAdress;
    document.getElementById("modalAdressComplement").value = person.adressComplement;
    document.getElementById("modalObs").value = person.obs;
    document.getElementById("").value = person.updatedDate;
    
}

function editPerson()
{
    const container = document.getElementById("people");
    let id = document.getElementById("modalPersonId").value;
    let person = People[id - 1];
    
    person.name = document.getElementById("modalPersonName").value;
    person.cpf = document.getElementById("modalPersonCPF").value;
    person.surName = document.getElementById("modalPersonsurName").value;
    person.phone = document.getElementById("modalPhone").value;
    person.genre = document.getElementById("modalGenre").value;
    person.state = document.getElementById("modalState").value;
    person.district = document.getElementById("modalDistrict").value;
    person.adress = document.getElementById("modalAdress").value;
    person.numberAdress = document.getElementById("modalNumberAdress").value;
    person.adressComplement = document.getElementById("modalAdressComplement").value;
    person.obs = document.getElementById("modalObs").value
    person.updatedDate = new Date();
    $("#modalCard").modal("hide");
    container.innerHTML = "";
    People.forEach(populateCards);
}

  function insertPerson(e) {
    e.preventDefault();
    const createForm = document.getElementById("createForm");
    const container = document.getElementById("people");
    People.push(
    {
        id: People.length + 1,
        url: document.getElementById("modalPerfilNew").value,
        name: document.getElementById("modalPersonNameNew").value,
        CPF: document.getElementById("modalPersonCPFNew").value,
        surName: document.getElementById("modalPersonsurNameNew").value,
        genre: document.getElementById("modalGenreNew").value,
        phone: document.getElementById("modalPhoneNew").value,
        state: document.getElementById("modalStateNew").value,
        district: document.getElementById("modalDistrictNew").value,
        adress: document.getElementById("modalAdressNew").value,
        numberAdress: document.getElementById("modalNumberAdressNew").value,
        adressComplement: document.getElementById("modalAdressComplementNew").value,
        obs: document.getElementById("modalObsNew").value,
        updatedDate:"",
        createdate:new Date()
    });
    container.innerHTML = "";
    createForm.reset();
    $("#modalNewCard").modal("hide");
    People.forEach(populateCards);
  }

  function deletePerson()
  {
    const container = document.getElementById("people");
    let id = document.getElementById("modalPersonId").value;
    People.splice(id - 1,1) ;
    console.log(People);
    if(People.length){
        container.innerHTML = "";
        People.forEach(populateCards);
    }
    else{
        container.innerHTML = "";
    }
    
  }