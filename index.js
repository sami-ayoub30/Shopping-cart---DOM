var likes = Array.from(document.querySelectorAll(".fa-heart"));

var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-can"));

var cards = Array.from(document.querySelectorAll(".card"));

var plusBtns = Array.from(
  document.querySelectorAll(".fa-solid.fa-square-plus")
);

var minusBtns = Array.from(
  document.querySelectorAll(".fa-solid.fa-square-minus")
);

// like button

for (let like of likes) {
  like.addEventListener("click", function () {
    if (like.style.color != "red") {
      like.style.color = "red";
    } else {
      like.style.color = "#212529";
    }
  });
}

// delete

for (let i in deleteBtns) {
  deleteBtns[i].addEventListener("click", function () {
    let result = confirm("Are you sure you want to delete this product ?");
    if (result) {
      cards[i].remove();
      totalPrice();
    }
  });
}

// plus
for (let plus of plusBtns) {
  plus.addEventListener("click", function () {
    plus.previousElementSibling.innerHTML =
      Number(plus.previousElementSibling.innerHTML) + 1;
    totalPrice();
  });
}

// minus
for (let minus of minusBtns) {
  minus.addEventListener("click", function () {
    let counter = Number(minus.nextElementSibling.innerHTML);
    if (counter) {
      minus.nextElementSibling.innerHTML = counter - 1;
    }
    totalPrice();
  });
}

// total price

function totalPrice() {
  let quantities = Array.from(document.querySelectorAll(".quantity"));

  let unitPrices = Array.from(document.querySelectorAll(".unitPrice"));

  let sum = 0;

  for (let i = 0; i < quantities.length; i++) {
    sum += unitPrices[i].innerHTML * quantities[i].innerHTML;
  }

  document.getElementById("totalPrice").innerHTML = sum;
}
