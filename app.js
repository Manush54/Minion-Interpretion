const userText = document.querySelector(".user-text");
const translateBtn = document.querySelector(".translate-btn");
const translatedTxt = document.querySelector(".translated-text");

translateBtn.addEventListener("click", translate);

function translate(){
    inputText = userText.value;
    
    let url = "https://api.funtranslations.com/translate/minion.json?text=" + inputText
    fetch(url)
    .then(function responeHandler(response) {return response.json()})
    .then(function logJSON(json) {console.log(json)
        bananaText = json.contents.translated;
        translatedTxt.innerHTML = `<p class="output">${bananaText}</p>`;
    }).catch(function errorHandling(error) {
        alert("Server Error!!!")
        translatedTxt.innerHTML += `<p class="output invalid">Server is facing a problem!</p>`
    })
}


