const showDatabase = document.getElementsByClassName("card");
const showAllInformationPeople = document.getElementsByClassName("modal-body");
const showCardName = document.getElementsByClassName("modal fade");
var columns = {valueNames: ['url','name','CPF','surName','genre','phone','state', 'district', 'adress', 'numberAdress', 'adressComplement', 'obs','up']};
var values = [ {url: "https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/205308418_4263790420326536_4449074302394512871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9nKukhHqDwYxE_mgf_4zQ7S_jBHLAtkbtL-MEcsC2Rrh4W3mNIyoo9fNECQWE-_85I0-rd54kO9GMrriX9CIv&_nc_ohc=9KEzKu21YkYAX8kZ7c_&_nc_ht=scontent-gru1-1.xx&oh=00_AT_btdPscMIseFxTbD3YSvfLa66IcDZQB4e-toGHtnVJpQ&oe=62CFEB97",
                name:"Vitor Hugo Fidelis dos Santos",
                CPF: "12312312345",
                surName: "Fidelis",
                genre: "M",
                phone: "41998441966",
                state: "PR",
                district:

}
];
document.getElementsByClassName("modal fade").textContent=person.name;
function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${person.name}</td>
      <td>${person.CPF}</td>
      <td>${item.salario}</td>
      <td class="acao">
    `
    tbody.appendChild(tr)
  }