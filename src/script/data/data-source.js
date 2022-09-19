function DataSource(onSuccess, onFailed) {
  this.onSuccess = onSuccess;
  this.onFailed = onFailed;
}

DataSource.prototype.searchWisata = function (keyword) {
  var filteredWisatas = wisatas.filter(function (wisata) {
    return wisata.name.toUpperCase().includes(keyword.toUpperCase());
  });

  if (filteredWisatas.length) {
    this.onSuccess(filteredWisatas);
  } else {
    this.onFailed(keyword + " is not found");
  }
};
