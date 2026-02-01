const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const salaryInput = document.getElementById("salary");
    const salary = Number(salaryInput.value); // 🔥 important
    let amount = 0;

    if (salary <= 1200000) {
        amount = 0;
    } 
    else if (salary <= 1600000) {
        amount = (salary - 1200000) * 0.15;
    } 
    else if (salary <= 2000000) {
        amount = (salary - 1600000) * 0.20 + 60000;
    } 
    else {
        amount = (salary - 2000000) * 0.30 + 60000 + 80000;
    }

    const result = document.getElementById("result");
    result.textContent = `Tax Amount: ₹${amount}`;
});
