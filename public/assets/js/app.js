$(document).ready(function() {
  console.log("ready!");

  $.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      $("#articles").append(
        "<p data-id='" +
          data[i]._id +
          "'>" +
          data[i].title +
          "<br />" +
          data[i].link +
          "</p>"
      );
    }
  });

  $.ajax({
    method: "GET",
    url: "/scrape"
  }).then(function(result) {
    // result (res.json from backend)
    //load information onto page
    $("#wrapper").append("<div>hello</div>");
  });
});
