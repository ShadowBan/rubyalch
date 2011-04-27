(function($) {
	$.fn.sorted = function(customOptions) {
		var options = {
			reversed: false,
			by: function(a) {
				return a.text();
			}
		};
		$.extend(options, customOptions);
		$data = $(this);
		arr = $data.get();
		arr.sort(function(a, b) {
			var valA = options.by($(a));
			var valB = options.by($(b));
			if (options.reversed) {
				return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
			} else {		
				return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
			}	
		});
		return $(arr);
	};
})(jQuery);
$(function() {
  var read_button = function(class_names) {
	var r = {
	  selected: false,
	  type: 0
	};
	for (var i=0; i < class_names.length; i++) {
	  if (class_names[i].indexOf('selected-') == 0) {
		r.selected = true;
	  }
	  if (class_names[i].indexOf('segment-') == 0) {
		r.segment = class_names[i].split('-')[1];
	  }
	};
	return r;
  };
  var determine_sort = function($buttons) {
	var $selected = $buttons.parent().filter('[class*="selected-"]');
	return $selected.find('a').attr('data-value');
  };
  var determine_kind = function($buttons) {
	var $selected = $buttons.parent().filter('[class*="selected-"]');
	return $selected.find('a').attr('data-value');
  };
  var $preferences = {
	duration: 800,
	easing: 'easeInOutQuad'
  };
  var $list = $('#list');
  var $data = $list.clone();
  var $controls = $('ul.splitter ul');
  $controls.each(function(i) {
	var $control = $(this);
	var $buttons = $control.find('a');
	$buttons.bind('click', function(e) {
	  var $button = $(this);
	  var $button_container = $button.parent();
	  var button_properties = read_button($button_container.attr('class').split(' '));      
	  var selected = button_properties.selected;
	  var button_segment = button_properties.segment;
	  if (!selected) {
		$buttons.parent().removeClass('selected-0').removeClass('selected-1').removeClass('selected-2').removeClass('selected-3').removeClass('selected-4').removeClass('selected-5');
		$button_container.addClass('selected-' + button_segment);
		var sorting_type = determine_sort($controls.eq(1).find('a'));
		var sorting_kind = determine_kind($controls.eq(0).find('a'));
		if (sorting_kind == 'all') {
		  var $filtered_data = $data.find('li');
		} else {
		  var $filtered_data = $data.find('li.' + sorting_kind);
		}
		if (sorting_type == 'date') {
		  var $sorted_data = $filtered_data.sorted({
			by: function(v) {
			  return parseFloat($(v).find('small').text());
			}
		  });
		} else {
		  var $sorted_data = $filtered_data.sorted({
			by: function(v) {
			  return $(v).find('.website-name').text().toLowerCase();
			}
		  });
		}
		$list.quicksand($sorted_data, $preferences);
	  }
	  e.preventDefault();
	});
  });
});

$(".portfolio-website .website-thumbnail a span").animate({'opacity':'0'},1);
$(".portfolio-website .website-thumbnail a span").live("mouseover",function() {
	$(this).stop().animate({'opacity':'0.4'},750);
});
$(".portfolio-website .website-thumbnail a span").live("mouseout",function() {
	$(this).stop().animate({'opacity':'0'},750);
});