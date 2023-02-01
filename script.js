
    document.getElementById("first-image").addEventListener("click", function() {
  document.getElementById("form-container").style.display = "block";
});

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  console.log("hi")
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  console.log(name, username)
  document.getElementById("display-name").innerText = name;
  document.getElementById("display-username").innerText = username;
  document.getElementById("form-container").style.display = "none";
});

document.getElementById("second-image").addEventListener("click", function() {
  document.getElementById("display-container").style.display = "block";
});

    
//image 3 & 4

document.getElementById("dice").addEventListener("click", function() {
  document.getElementById("diceimage").style.display = "block";
});


const diceimage = document.getElementById("diceimage");
const result = document.getElementById("result");
const coupon = document.getElementById("img4");
let clicks = 0;
let sum = 0;
let attempts = 0;
let formSubmitted = false;
let diceRolled = false;
let couponGenerated = false;


diceimage.addEventListener("click", function() {
  if (clicks === 0) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    result.innerHTML += `${randomNum} `;
    sum += randomNum;
    clicks++;
  } else if (clicks === 1) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    result.innerHTML += `${randomNum} `;
    sum += randomNum;
    clicks++;
  } else if (clicks === 2) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    result.innerHTML += `${randomNum} `;
    sum += randomNum;
    clicks++;

    if (sum <= 10) {
      if (attempts === 0) {
        result.innerHTML = "Try again!";
        clicks = 0;
        sum = 0;
        attempts++;
      } else {
        result.innerHTML = "Bad luck.";
      }
    } else {
      //code for fourth image
      let coupon = "";
      for (let i = 0; i < 12; i++) {
        coupon += Math.floor(Math.random() * 10);

}  
result.innerText=" click on Next Image "
      // result.innerHTML = `Coupon: ${coupon}`;
} 
  } else {
    result.innerHTML = "You've already clicked the dice 3 times.";
  }
});

document.getElementById("img4").addEventListener("click", function () {
  
    if (sum > 10) {
      if (!couponGenerated) {
        let coupon = Math.random().toString(36).substring(2, 14) + Math.random().toString(36).substring(2, 14);
        document.getElementById("coupon").innerHTML = coupon;
        couponGenerated = true;
      }
      document.getElementById("congrats").style.display = "block";
    } else {
      alert("Please score more than 10 first");
    } 
  
});