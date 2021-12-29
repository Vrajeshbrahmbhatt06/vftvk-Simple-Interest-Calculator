function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);  
    document.getElementById('p').innerHTML=principal;
    document.getElementById('r').innerHTML=rate;
    document.getElementById('t').innerHTML=interest;
    document.getElementById('y').innerHTML=year;

    if(principal==0 || principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
  
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
