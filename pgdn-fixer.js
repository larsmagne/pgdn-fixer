// ==UserScript==
// @name     PgDn Fixer
// @version  1
// @grant    none
// ==/UserScript==

Array.from(document.querySelectorAll("input")).forEach(function(input) {
  input.addEventListener("keydown", function(e) {
    if (e.keyCode == 38)
      window.scrollBy(0, -10);
    else if (e.keyCode == 40)
      window.scrollBy(0, 10);
    else if (e.keyCode == 33)
      window.scrollBy(0, -window.innerHeight);
    else if (e.keyCode == 34) 
      window.scrollBy(0, window.innerHeight);
    else
      return true;
    e.preventDefault();
    input.blur();
    return false;
  });
});
