$(document).ready(function(){

$(".detail-check").change(function(){

let target = $(this).data("target");

$("#" + target).toggle();

});

});