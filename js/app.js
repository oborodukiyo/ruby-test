alert("Show me ruby!!!");

$('.ruby').each(function (index){
  console.log($(this).text()+':'+$(this).data('ruby'));
  $(this).addClass('position-relative');
  $(this).prepend('<span style="font-size:0.3em; position:absolute; top:-4em; white-space:nowrap;">'+$(this).data('ruby')+'</span>');
});

$('[data-toggle="popover"]').data({
  'html':true,
  'placement':'bottom',
});

$(function() {
  $('[data-toggle="popover"]').popover()
});
