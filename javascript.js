<button id="oldestAlbumButton" class="btn btn-primary">Mostra album più vecchio</button>


document.getElementById("oldestAlbumButton").addEventListener("click", function() {
    var captions = document.getElementsByClassName("carousel-caption");
    var oldestAlbum = {element: captions[0], date: new Date()};
    for (var i = 0; i < captions.length; i++) {
        var date = new Date(captions[i].getAttribute("data-date"));
        if (date < oldestAlbum.date) {
            oldestAlbum = {element: captions[i], date: date};
        }
    }
    alert("L'album più vecchio è: " + oldestAlbum.element.getElementsByTagName("h5")[0].textContent);
});


