
      jQuery(document).ready(function() {
		var timer = setInterval(nextImage, 4000);

		var total = jQuery('#slider li').size() - 1;
		jQuery('#slider li').each(function(index) {
			jQuery(this).css('z-index',index);
		});
		function nextImage(){		
			alert
			jQuery('#slider li').each(function(index) {
				var ind = parseInt(jQuery(this).css('z-index'));
				jQuery(this).css('z-index',ind+1);
				if (jQuery(this).css('z-index') > total){
				  jQuery(this).fadeOut('slow', function() {
					jQuery(this).css('z-index',0);
					jQuery(this).show();
				  });
				}
			});
		}

	  });
