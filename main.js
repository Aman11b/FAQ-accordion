const plusBtns = document.querySelectorAll(".plus_btn");
const minusBtns = document.querySelectorAll(".minus_btn");
const responses = document.querySelectorAll(".question_response");

// console.log(plusBtns);
// (plusBtns, minusBtns).forEach((plusBtn, minusBtn) => {
//   plusBtn.addEventListener("click", () => {
//     plusBtn.style.display = "none";
//     minusBtn.style.display = "";
//   });
//   minusBtn.addEventListener("click", () => {
//     plusBtn.style.display = "";
//     minusBtn.style.display = "none";
//   });
// });

plusBtns.forEach((plusBtn, index) => {
  const minusBtn = minusBtns[index];
  const response = responses[index];

  plusBtn.addEventListener("click", () => {
    plusBtn.style.display = "none";
    minusBtn.style.display = "";
    response.style.display = "";
  });
  minusBtn.addEventListener("click", () => {
    plusBtn.style.display = "";
    minusBtn.style.display = "none";
    response.style.display = "none";
  });
});
