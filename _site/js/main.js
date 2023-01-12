/* image zoom - add data-action="zoom" to images */

+function ($) {

  // drawer

  $(document).ready(function() {
    $('.drawer').drawer();
  });

}(jQuery);

// Code for creating links from heading IDs
//
// const headings = document.querySelectorAll('h3,h4'); // 1
// const linkContent = '🔗'; // 2
// for (const heading of headings) { // 3
//     const linkIcon = document.createElement('a'); // 4
//     linkIcon.setAttribute('href', `#${heading.id}`); // 5
//     linkIcon.innerHTML = linkContent; // 6
//     heading.appendChild(linkIcon); // 7
// }
//
