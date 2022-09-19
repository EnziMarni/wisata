var main = function () {
  var searchElement = document.querySelector("#searchElement");
  var buttonSearchElement = document.querySelector("#searchButtonElement");
  var clubListElement = document.querySelector("#wisataList");

  var onButtonSearchClicked = function () {
    var dataSource = new DataSource(renderResult, fallbackResult);
    dataSource.searchWisata(searchElement.value);
  };

  var renderResult = function (results) {
    wisataListElement.innerHTML = "";
    results.forEach(function (wisata) {
      var name = wisata.name;
      var fanArt = wisata.fanArt;
      var description = wisata.description;

      var wisataElement = document.createElement("div");
      wisataElement.setAttribute("class", "wisata");

      wisataElement.innerHTML = '<img class="fan-art-wisata" src="' + fanArt + '" alt="Fan Art">\n' + '<div class="wisata-info">\n' + "<h2>" + name + "</h2>\n" + "<p>" + description + "</p>" + "</div>";
      wisataListElement.appendChild(wisataElement);
    });
  };

  var fallbackResult = function (message) {
    wisataListElement.innerHTML = "";
    wisataListElement.innerHTML += '<h2 class="placeholder">' + message + "</h2>";
  };

  buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
