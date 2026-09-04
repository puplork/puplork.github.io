
function updateAddressDisplayed()
{
    if (history.pushState)
    {
      window.history.pushState("", "PLOrk", "plork.princeton.edu");
    } 
    else 
    {
      document.location.href = "plork.princeton.edu";
    }
}


function getHeader()
{
  fetch("/inline/header.html")
    .then(function(result) {
      return result.text();
    })
    .then(function(html) {
      $("#site-header").html(html);
    });
}


function getFooter()
{
  fetch("/inline/footer.html")
    .then(function(response) {
      console.log("Response status:", response.status);
      return response.text();
    })
    .then(function(html) {
      console.log("FULL FOOTER:");
      console.log(html);
      console.log("HTML LENGTH:", html.length);

      document.getElementById("site-footer").innerHTML = html;
    })
    .catch(function(error) {
      console.error("FOOTER ERROR:", error);
    });
}


