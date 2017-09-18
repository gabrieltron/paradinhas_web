$( function() {
  $( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable({
    items: "li:not(.ui-state-disabled)"
  });
  $( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable({
    connectWith: ".connectedSortable"
  });

  $( "#sortable5" ).sortable({
    cancel: ".ui-state-disabled"
  });
 
  $( "#sortable1 li, #sortable2 li, #sortable3 li, #sortable4 li" ).disableSelection();

  $("#btn1").click(function(){
    var afazer = prompt("Qual será seu novo afazer?");
    var atual =  $("#sortable1").html();
    if (afazer != null && afazer != "")
    $("#sortable1").html(atual + "<li>" + afazer + "</li>");
  });

  $("#btn2").click(function(){
    $("#sortable4 li").not(".ui-state-disabled").remove();
  });

} );
