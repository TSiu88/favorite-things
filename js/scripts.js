$(document).ready(function() {
  $("#formOne").submit(function(event){
    var arr = [];
    var input1 = $("#inputOne").val();
    var input2 = $("#inputTwo").val();
    var input3 = $("#inputThree").val();
    var input4 = $("#inputFour").val();
    arr.push(input1, input2, input3, input4);
    var newArray=[];
    newArray.push(arr[0], arr[1], arr[2]);

    event.preventDefault();
    
    console.log(arr);
    console.log(newArray);

    $(".thing1").append(newArray[0]);
    $(".thing2").append(newArray[1]);
    $(".thing3").append(newArray[2]);

  });

});

