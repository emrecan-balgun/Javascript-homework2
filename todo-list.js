// Listeye ekleme
const ulDOM = document.querySelector("#todoList")

function listeyeEkle() {
    let eklenecekSey = document.getElementById("yapilacakSey").value;
    const liDOM = document.createElement('li')
    if(eklenecekSey != "") {
        liDOM.innerHTML = eklenecekSey
        liDOM.classList.add("list-group-item")
        ulDOM.appendChild(liDOM)
    } else {
        alert("Lutfen bir seyler yazin..")
    }
}

// Check etme
var list = document.querySelector('ul');

function yapildiIsaretle() {
    list.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
          e.target.classList.toggle('checked');
        }
      }, false);
}

//Silme
