const Submit = document.querySelector(".Submit");
const Result = document.querySelector("#Next-page");
const closebtn = document.querySelector(".close");
const Taxamt = document.querySelector("#taxAmount");
const error1 = document.querySelector(".error-icon");
const error2 = document.querySelector(".error-icon2");
const input = document.querySelector("input");

// suggestion 1
const hoverLine = document.getElementById("question");
const tooltip = document.getElementById("tooltip");

hoverLine.addEventListener("mouseenter", () => {
  tooltip.style.display = "block";
});

hoverLine.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});

//suggestion 2
const q1 = document.getElementById("question2");
const sug1 = document.getElementById("sug1");

q1.addEventListener("mouseenter", () => {
  sug1.style.display = "block";
});

q1.addEventListener("mouseleave", () => {
  sug1.style.display = "none";
});
//suggestion 3
const q3 = document.getElementById("question3");
const sug2 = document.getElementById("sug2");

q3.addEventListener("mouseenter", () => {
  sug2.style.display = "block";
});

q3.addEventListener("mouseleave", () => {
  sug2.style.display = "none";
});
//suggestion 4
const q4 = document.getElementById("question4");
const sug3 = document.getElementById("sug3");

q4.addEventListener("mouseenter", () => {
  sug3.style.display = "block";
});

q4.addEventListener("mouseleave", () => {
  sug3.style.display = "none";
});

// end All Question

// error message 1
const hoverline1 = document.getElementById("error1");
const tool1 = document.getElementById("tool1");

hoverline1.addEventListener("mouseenter", function () {
  tool1.style.display = "block";
});

hoverline1.addEventListener("mouseleave", function () {
  tool1.style.display = "none";
});

// error message 2
const hoverline2 = document.getElementById("error2");
const tool2 = document.getElementById("tool2");

hoverline2.addEventListener("mouseenter", function () {
  tool2.style.display = "block";
});

hoverline2.addEventListener("mouseleave", function () {
  tool2.style.display = "none";
});

Submit.addEventListener("click", function () {
  const Annualincome = parseInt(document.querySelector(".Annual-income").value);
  const Extraincome = parseInt(document.querySelector(".Extra-income").value);
  const Age = parseInt(document.querySelector(".Age").value);
  const Deduction = parseInt(document.querySelector(".Deduction").value);

  Result.style.display = "block";

  //  Calculate total income after deductions
  const totalIncome = Annualincome + Extraincome - Deduction;

  if (totalIncome <= 800000) {
    Taxamt.textContent = "No tax applicable";
  } else {
    const taxableIncome = totalIncome - 800000;

    let taxRate = 0;
    if (Age < 40) {
      taxRate = 0.3;
    } else if (Age >= 40 && Age < 60) {
      taxRate = 0.4;
    } else {
      taxRate = 0.1;
    }

    const taxAmount = taxRate * taxableIncome;
    Taxamt.textContent = totalIncome - taxAmount;
    console.log(Annualincome - taxAmount);
  }
});

closebtn.addEventListener("click", function () {
  Result.style.display = "none";
});
