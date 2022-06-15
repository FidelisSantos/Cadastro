const showDatabase = document.getElementsByClassName("card");
const showAllInformationPeople = document.getElementsByClassName("modal-body");
const showCardName = document.getElementsByClassName("modal fade");

const People = [];

window.onload = function() {
    addDefaultPerson();
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
            updateddate:"",
            createdate:new Date()
        });

    People.forEach(populateCards);
}
function populateCards(person){

    let card =`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="`+person.url+`">
    <div class="card-body">
      <h5 class="card-title">`+person.name+`</h5>
       <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal" onclick="updateModal(`+person.id+`)">
            Veja mais
        </button>
    </div>
  </div>`
  
    document.getElementById("people").innerHTML = card;
}

function updateModal(personID){
    var person = People[personID -1]
    document.getElementById("personID").value = personID;
    document.getElementById("modalPerfil").value = person.url;
    document.getElementById("modalPersonName").value = person.name;
    document.getElementById("modalPersonId").value = person.id;
    document.getElementById("modalPersonCPF").value = person.CPF;
    document.getElementById("modalPersonsurName").value = person.surName;
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
    let id = document.getElementById("personID").value;
    let person = People[id];

    person.name = document.getElementById("personName").value;
    person.cpf = document.getElementById("personCPF").value;
}

  function insertItems() {

    var person = getPerson();

    let tr = `
    <tr>
    <td>` + person.name +`</td>
    <td>` + person.cpf +`</td>
     </tr> 
    `
    document.getElementById("tabela").innerHTML = tr
  }