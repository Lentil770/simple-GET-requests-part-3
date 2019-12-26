
function fetchDogImg() {
    let dogsBreed = $('#dogBreed').val();
    fetch(`https://dog.ceo/api/breed/${dogsBreed}/images/random`)
        .then(response => response.json())
        .then(responseJson => printToScreen(responseJson))
        .catch(error => alert('attempt failed. you may have entered an invalid breed name, please try again.'));
};

function printToScreen(responseJson) {
    console.log(responseJson);
    if (responseJson.message === 'Breed not found (master breed does not exist)') {
        $('.image').html(`<br><p>attempt failed. you may have entered an invalid breed name, please try again.</p>`);
    }
    else {
    let breedImg = responseJson.message;
    console.log(breedImg);
    $('.image').html(
        `<br><img src="${breedImg}" class="results-img">`
    )};
};


function watchButton() {
    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        fetchDogImg();
        console.log('watchButton ran');
    });
};



$(console.log('page ready and running'),
    watchButton()
  )