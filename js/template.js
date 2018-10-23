
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
