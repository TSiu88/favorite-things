$(document).ready(function() {
  $("#formOne").submit(function(event){
    var arr = [];
    var input1 = $("#input1").val();
    arr.push(input1);
    event.preventDefault();
    
    console.log(arr);
  });

});

