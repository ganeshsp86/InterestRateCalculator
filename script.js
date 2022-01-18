
//Applies validation on Principal text field and calculates interest amount based on the input
function compute()
{
    var x = document.getElementById("principal").value;
    if (x == "" || x == 0 || x < 0){
      alert("Number field cannot be empty and the value shouldn't be less than or equal to 0");
      document.getElementById("result").innerHTML=""
    }
    else {
        var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}
    
}

//Responds to slider change
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
