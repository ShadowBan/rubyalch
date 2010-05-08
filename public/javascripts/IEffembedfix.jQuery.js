// IE font-face ClearType fix - V0.1
// Authord by Michael Strand of Allcreatives.net
// Usage, changes, FAQ etc. see - http://allcreatives.net/2009/12/05/jquery-plugin-ie-font-face-cleartype-fix/
// The IE font-face ClearType fix plugin is dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and 
// [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

// There is one configuration setting to be changed below if you have the PNG image in different location from this file.

(function($) {
    $.fn.ieffembedfix = function() {
		
		// CONFIGURE THE PATH TO YOUR 1BY1 PNG HERE, RELATIVE TO THE LOCATION OF THIS JS FILE.
		
		var pngimgurl = "/images/hIEfix.png";
		
    return this.each(function() {
        //check for IE7/8
        if (jQuery.support.objectAll == false) {
            $(this).css({
						
						filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + pngimgurl + ",sizingMethod=crop',
						zoom: '1'
						});
        }
        });
    }
})(jQuery);
