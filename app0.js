async function myFunction() {

            let defBox = document.querySelector('.def');
            defBox.innerText = '';
            let API_key = 'PlaceYourAPIKeyHere';
            let word = input.value;
            if (word === '') {
                alert("Please enter some text");
            } else {
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

                    });

            }
        }
