// Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
// Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
// Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
// Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
// Yazdığınız js dosyasını projenize eklemeyi unutmayın.



let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')


const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")


    if (USER_NAME.value) {
        addItem(USER_NAME.value)  // gonderdikten sonra sifirladik
        alertDOM.innerHTML = alertFunction(
            "Listeye ",
            "Eklendi",
            "success"
        )
        USER_NAME.value = ""

    } else {
        alertDOM.innerHTML = alertFunction(
            "Listeye Boş",
            "Ekleme Yapamazsınız !",
            "danger"
        )
    }

}


let userListDOM = document.querySelector('#userList')

const addItem = (userName) => {
    let liDOM = document.createElement('li');
    let close = document.createElement('span');
    close.innerHTML = 'X';
    liDOM.innerHTML = `
        ${userName}  
    `;
    close.onclick = function () {
        liDOM.remove();
        close.remove();
        alertDOM.innerHTML = alertFunction(
            "Listeden ",
            "Silindi",
            "warning"
        )
    }
    liDOM.onclick = function () {
        var control = liDOM.classList.contains('backRenks');
        if (control) {
            console.log('Class Var', liDOM, control);
            liDOM.classList.remove('backRenks');
        } else {
            console.log('Class yok', liDOM, control);

            liDOM.classList.add('backRenks');

        }

    }

    userListDOM.prepend(liDOM,close)
}