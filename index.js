function calculateInterest() {

    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("interestRate").value);
    let time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById("result").innerText =
            "Please enter valid numbers in all fields.";
        return;
    }

    
    let interest = (principal * rate * time) / 100;

    document.getElementById("result").innerText =
        " Simple Interest: Ksh " + interest.toFixed(2);
ii.