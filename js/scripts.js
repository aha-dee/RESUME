document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("load-projectDetails").addEventListener("click", function(event) {
    event.preventDefault();
    loadContent("projectDetails.html");
  });

  document.getElementById("load-video").addEventListener("click", function(event) {
    event.preventDefault();
    loadContent("video-introduction.html");
  });

  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  }
});
