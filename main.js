const submitBtn = document.querySelector(".btn--submit");
const ratingSect = document.querySelector(".rating");
const thanksSect = document.querySelector(".thank-you");
const rating = document.querySelector(".btn--rating");

function submitRating() {
    const ratingInputs = document.querySelectorAll(".btn--rating");
  
    let ratingValue = '';
  
    ratingInputs.forEach(input => {
      if (input.checked) {
        ratingValue = input.value;
      }
    });
  
    if (ratingValue === '') {
      alert("Please select a rating");
      return;
    }

    localStorage.setItem("rating_value", ratingValue);
    document.querySelector(".your-rating__selected").textContent = localStorage.getItem("rating_value");

    ratingSect.classList.remove("active");
    thanksSect.classList.add("active");
  }
