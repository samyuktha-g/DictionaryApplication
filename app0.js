async function myFunction() {

    let defBox = document.querySelector('.def');
    defBox.innerText = '';
    let API_key = 'PlaceyourAPIKeyHere';
    let word = input.value;
    let url = "https://dictionaryapi.com/api/v3/references/thesaurus/json/" + word + "?key=" + API_key;
    console.log(url);
    await fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('BAD HTTP stuff');
            }
        })
        .then(function(jsonData) {
            console.log(jsonData);
            console.log(jsonData[0].shortdef[0]);
            var meaning = jsonData[0].shortdef[0];
            defBox.innerText = meaning;

        })
}