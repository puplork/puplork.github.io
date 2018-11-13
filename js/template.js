
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
  fetch("/inline/header.html").then(function(result)
  {
      result.text().then(function(html) {
        console.log(html)
        $("header").html(html);
      })
  });
}


function getFooter()
{
  fetch("/inline/footer.html").then(function(result)
  {
      result.text().then(function(html) {
        console.log(html)
        $("footer").html(html);
      })
  });
}
