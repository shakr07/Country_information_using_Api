var btn = document.getElementById('search-btn');
let output = document.getElementById('result');
var text2 = document.getElementById('text1');
let num = 0;
btn.onclick = function () {
    num++;
    if (num == 1) {
        var text1 = document.getElementById('country-inp').value;
        let promise = fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        promise
            .then((response) => response.json())
            .then((data) => {
                const countries = data.data;
                countries.forEach((country) => {
                    if (country.name == text1) {
                        var image = document.createElement('img');
                        var imageUrl = country.flag;
                        var imageUrl1 = 'https://media.istockphoto.com/id/140462837/photo/cute-pig-leaning-on-railing-of-his-cot.jpg?s=2048x2048&w=is&k=20&c=XqolQVO5JvuEBbAJ-sbFY9A7XkkJ7NaJQKC_K3M_9RE=';
                        if (text1 == 'Pakistan') {
                            image.src = imageUrl1;
                        } else {
                            image.src = imageUrl;
                        }
                        image.width = 200;
                        var container = document.getElementById('image-container');
                        container.appendChild(image);
                        text2.innerHTML += "<br/>";
                        text2.innerHTML += "<text><strong>Country name -></strong></text>" + country.name + "<br/>";
                    }
                });

                fetchCountryCapital(text1);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } else {
        location.reload();
        num = 0;
    }
};

function fetchCountryCapital(text1) {
    let promise1 = fetch('https://countriesnow.space/api/v0.1/countries/capital');
    promise1
        .then((response) => response.json())
        .then((data) => {
            const countries1 = data.data;
            countries1.forEach((country) => {
                if (country.name == text1) {
                    text2.innerHTML += "<text><strong>Capital -></strong></text>" + country.capital + "<br/>";
                    text2.innerHTML += "<text><strong>Iso2 -></strong></text>" + country.iso2 + "<br/>";
                    text2.innerHTML += "<text><strong>Iso3 -></strong></text>" + country.iso3 + "<br/>";
                }
            });

            if (text1 == 'India') {
                playMusic("Jana Gana Mana - National Anthem-(DJMaza).mp3");
            }
            if (text1 == 'Pakistan') {
                playMusic("ssstwitter.com_1688976416593.mp3");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function playMusic(url) {
    var audio = new Audio(url);
    audio.play();
}
