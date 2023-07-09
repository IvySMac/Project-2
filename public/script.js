function search() {
    var searchQuery = document.getElementById("searchInput").value;
  
    var searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "<p>Search results for: " + searchQuery + "</p>";
  }