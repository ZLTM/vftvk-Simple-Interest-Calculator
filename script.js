 //receive data
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = interest + principal;
       
    document.getElementById("result").innerHTML="If you deposit '<mark>'"+principal+"'</mark>',\<br\>at an interest rate of '<mark>'"+rate+"'</mark>'%\<br\>You will receive an amount of '<mark>'"+amount+"'</mark>',\<br\>in the year '<mark>'"+year+"'</mark>'\<br\>" 
}

//Read rate
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Do not accept values less or equal to 0
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var moreThanZero = parseInt(principal) > 0;
    if (!moreThanZero) {
        alert("Enter a positive number please");
        document.getElementById("principal").focus();
    }
}