/* This enables the navbar to disappear after the user has 
clicked on it. 
Source: ZimSystem at https://stackoverflow.com/a/42401686/2168164 */
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});