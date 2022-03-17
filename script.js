function compute()
{
    amount = document.getElementById("amount").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = amount*(1+(rate*years))
    document.getElementById("result").innerHTML = result
}
        