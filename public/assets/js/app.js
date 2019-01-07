$(document).ready(function() {
  console.log("ready!");

  $.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      $(".articles").append(
        "<div class = 'card' data-id='" +
          data[i]._id +
          "'>" +
          "<h3>" +
          "<a href ='" +
          data[i].link +
          "'>" +
          data[i].title +
          "</a>" +
          "<a class = 'btn save btn-primary' >Save Article</a>" +
          "</h3>" +
          // "<br />" +
          // // data[i].link +
          "</div>"
      );
    }
  });

  $(document).on("click", "p", function() {
    // Empty the notes from the note section
    console.log("note clicked");
  });

  $.ajax({
    method: "GET",
    url: "/scrape"
  }).then(function(result) {
    $("#wrapper").append("<div>Hello<div>");
    // result (res.json from backend)
    //load information onto page
    // for (var i = 0; i < data.length; i++) {
    //   $(".articles").append(
    //     "<p data-id='" +
    //       data[i]._id +
    //       "'>" +
    //       data[i].title +
    //       "<br />" +
    //       data[i].link +
    //       "</p>"
    //   );
    // }
  });
});
