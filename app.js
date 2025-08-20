      function calculate() {
    let P = parseFloat(document.getElementById("p").value);
    let R = parseFloat(document.getElementById("i").value);
    let d1 = new Date(document.getElementById("d1").value);
    let d2 = new Date(document.getElementById("d2").value);

    if (isNaN(P) || isNaN(R) || !d1.getTime() || !d2.getTime()) {
      document.getElementById("amount").innerText = "Please fill all fields";
      return;
    }

    if (d2 < d1) {
      document.getElementById("amount").innerText = "End date must be after start date";
      return;
    }

    // Calculate time in years (fraction allowed)
    let timeInDays = (d2 - d1) / (1000 * 60 * 60 * 24);
    let t = timeInDays / 365;

    // Compound Interest
    let A = P * Math.pow((1 + R / 100), t);
    let interest = A - P;

    //total years, months, days

    let start = new Date(d1);
    let end = new Date(d2);

    // Initial difference
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // Adjust if negative
    if (days < 0) {
      months -= 1;
      let prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    document.getElementById("amount").innerText = A.toFixed(2);
    document.getElementById("interest").innerText = interest.toFixed(2);
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
}

function resetCalc() {
    document.getElementById("p").value = "";
    document.getElementById("i").value = "";
    document.getElementById("d1").value = "";
    document.getElementById("d2").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("years").value = "";
    document.getElementById("days").value = "";
    document.getElementById("months").value = "";
    document.getElementById("amount").innerText = "first enter";
}
