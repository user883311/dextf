/* This enables the navbar to disappear after the user has 
clicked on it. 
Source: ZimSystem at https://stackoverflow.com/a/42401686/2168164 */
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Makes sure that the navbar does not hides initial content when jumping to an in-page anchor. 
// Source: https://github.com/twbs/bootstrap/issues/1768#issuecomment-6151214 
window.addEventListener("hashchange", function() { scrollBy(0, -300) });
