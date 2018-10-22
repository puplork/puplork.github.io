
function getHeader()
{
  fetch("/PLOrk/inline/header.html").then(function(result)
  {
      result.text().then(function(html) {
        console.log(html)
        $("header").html(html);
      })
  });
}


function getFooter()
{
  fetch("/PLOrk/inline/footer.html").then(function(result)
  {
      result.text().then(function(html) {
        console.log(html)
        $("footer").html(html);
      })
  });
}
