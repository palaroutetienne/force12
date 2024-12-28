function captureEcran() {
  // Get the URL.
  var url = "http://f12.alwaysdata.net";
  // Prepare the URL.
  url = encodeURIComponent(url);
  // Hit the Google Page Speed API.
  $.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?screenshot=true&strategy=mobile&url=" + url, function(data) {
    // Get the screenshot data.
    var screenshot = data.screenshot;
    // Convert the Google's Data to Data URI scheme.
    var imageData = screenshot.data.replace(/_/g, "/").replace(/-/g, "+");
    // Build the Data URI.
    var dataURI = "data:" + screenshot.mime_type + ";base64," + imageData;
    // Set the image's source.
    $("body").html("<img src'"+dataURI+"'/>");
  });
}