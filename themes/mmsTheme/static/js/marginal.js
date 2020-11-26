if ($('main').find('h2,h3,h4,h5,h6').length > 0) {
  $('main').find('h2,h3,h4,h5,h6').addClass('h-marginal');

  var $result = $('<div/>');
  var curDepth = 0;

  $('.h-marginal').each(function(index) {
    let headingID = "marg-heading" + index;

    var $li = $('<li/>').html($('<a/>').text($(this).text()).attr("href", "#" + headingID));
    $(this).attr("id", headingID);

    var depth = parseInt(this.tagName.substring(1));

    if (depth > curDepth) { // going deeper

      $result.append($('<ul/>').append($li).addClass('list-unstyled'));
      $result = $li;

    } else if (depth < curDepth) { // going shallower

      $result.parents('ul:eq(' + (curDepth - depth - 1) + ')').append($li);
      $result = $li;

    } else { // same level

      $result.parent().append($li);
      $result = $li;

    }

    curDepth = depth;
  });

  $result = $result.parents('ul:last');
  $('.marginal .result').html($result);
} else {
  $('.marginal .result').html("<p>Keine Navigation vorhanden</p>");
}
