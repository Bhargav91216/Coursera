"use strict";

window.onscroll = function () {
  scrollFunction();
};

document.body.scrollTop = 0;

const w_height = window.innerHeight;

const about = document.querySelector(".about").getBoundingClientRect().top;

let span = document.querySelector(".skills .span1").getBoundingClientRect()
  .bottom;

span = span - w_height;

let iframe1 = document.querySelector(".new_pro_img div").getBoundingClientRect()
  .bottom;
iframe1 = iframe1 - w_height;

let iframe2 = document
  .querySelector(".new_pro2_img2 div")
  .getBoundingClientRect().bottom;
iframe2 = iframe2 - w_height;

let iframe3 = document
  .querySelector(".new_pro3_img div")
  .getBoundingClientRect().bottom;
iframe3 = iframe3 - w_height;

let iframe4 = document
  .querySelector(".new_pro4_img div")
  .getBoundingClientRect().bottom;
iframe4 = iframe4 - w_height;

function scrollFunction() {

  if (document.documentElement.scrollTop > span + 100) {
    const even = document.querySelectorAll(".skill .skill_span ");
    for (let i = 0; i < even.length; i++) {
      even[i].style.left = "0%";
      even[i].style.position = "relative";
      even[i].style.opacity = "1";
    }
  } else {

    const even = document.querySelectorAll(".skill .skill_span ");
    for (let i = 0; i < even.length; i++) {
      if (i % 2 == 0) {
        even[i].style.left = "-40%";
      } else {
        even[i].style.left = "-10%";
      }
      even[i].style.position = "relative";
      even[i].style.opacity = "0";
    }
  }

  if (document.documentElement.scrollTop > iframe1 + 20) {
    const img = document.querySelector(".new_pro_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {

    const img = document.querySelector(".new_pro_img div");
    img.style.left = "-100%";
    img.style.opacity = "0";
  }
  if (document.documentElement.scrollTop > iframe2 + 20) {
    const img = document.querySelector(".new_pro2_img2 div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro2_img2 div");
    img.style.left = "100%";
    img.style.opacity = "0";
  }
  if (document.documentElement.scrollTop > iframe3 + 20) {
    const img = document.querySelector(".new_pro3_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro3_img div");
    img.style.left = "-100%";
    img.style.opacity = "0";
  }
  if (document.documentElement.scrollTop > iframe4 + 20) {
    const img = document.querySelector(".new_pro4_img div");
    img.style.left = "0%";
    img.style.opacity = "1";
  } else {
    const img = document.querySelector(".new_pro4_img div");
    img.style.left = "100%";
    img.style.opacity = "0";
  }
}

const slider_img = document.querySelector(".outer_iframe .img .inner_img");
const l_arrow = document.querySelector(".l_arrow");

let j = 0;
l_arrow.style.opacity = "0";

l_arrow.addEventListener("click", (e) => {

  if (j == 1) {
    l_arrow.style.opacity = "0";
  }

  if (j > 0) {
    r_arrow.style.opacity = "1";
    j = j - 1;
    let left = 100 * j;
    slider_img.style.left = `-${left}%`;
  }

});

const r_arrow = document.querySelector(".r_arrow");

r_arrow.addEventListener("click", (e) => {

  if (j == 6) {
    r_arrow.style.opacity = "0";
  }

  if (j < 7) {
    l_arrow.style.opacity = "1";
    j = j + 1;
    let left = 100 * j;
    slider_img.style.left = `-${left}%`;
  }

});

const pro = document.querySelector(".new_project").getBoundingClientRect()
  .bottom;

const body = document.querySelector("body");

const main_code = document.querySelector(".main_code");

const hidden = document.querySelectorAll(".certficate .hidden");

hidden[0].style.display = "none";

function view() {

  const hide_btn = document.querySelector(".certification .view_more");

  if (hidden[0].style.display == "block") {

    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "none";
    }

    hide_btn.textContent = "view more";
  }

  else if (hidden[0].style.display == "none") {

    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "block";
    }

    hide_btn.textContent = "view less";
  }
}

const dark = document.querySelector(".dark");
const dark_btn = document.querySelector("#light_btn");
const not_dark = document.querySelectorAll("#light");
let get = true;
if (localStorage.getItem("mode") == "true") {
  dark_btn.style.filter = "invert(100%)";
  dark.style.filter = "invert(100%)";
  get = false;
  for (let i = 0; i < not_dark.length; i++) {
    not_dark[i].style.filter = "invert()";
    not_dark[i].style.boxShadow = "none";
  }
  dark_btn.setAttribute(
    "src",
    "https://img.icons8.com/nolan/64/00C6FF/0072FF/sun.png"
  );
} else if (localStorage.getItem("mode") == "false") {
  dark_btn.setAttribute(
    "src",
    "https://img.icons8.com/nolan/64/00C6FF/0072FF/bright-moon.png"
  );
  dark_btn.style.filter = "invert(0%)";
  dark.style.filter = "invert(0%)";
  get = true;
  for (let i = 0; i < not_dark.length; i++) {
    not_dark[i].style.filter = "invert(0)";
    not_dark[i].style.boxShadow =
      "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem white";
  }
}
dark_btn.addEventListener("click", () => {
  if (get) {
    dark_btn.style.filter = "invert(100%)";
    dark.style.filter = "invert(100%)";
    get = false;
    localStorage.setItem("mode", "true");
    for (let i = 0; i < not_dark.length; i++) {
      not_dark[i].style.filter = "invert()";
      not_dark[i].style.boxShadow = "none";
    }
    dark_btn.setAttribute(
      "src",
      "https://img.icons8.com/nolan/64/00C6FF/0072FF/sun.png"
    );
  } else {
    dark_btn.setAttribute(
      "src",
      "https://img.icons8.com/nolan/64/00C6FF/0072FF/bright-moon.png"
    );
    dark_btn.style.filter = "invert(0%)";
    dark.style.filter = "invert(0%)";
    get = true;
    localStorage.setItem("mode", "false");
    for (let i = 0; i < not_dark.length; i++) {
      not_dark[i].style.filter = "invert(0)";
      not_dark[i].style.boxShadow =
        "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem white";
    }
  }
});

 function handleFormSubmit(event) {
      event.preventDefault(); 
      alert('Thank you for your message! We will get back to you soon.')

      const nameInput = document.getElementById("id_name");
      const emailInput = document.getElementById("id_email");
      const messageInput = document.getElementById("id_message");

      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;

      const endpoint = "https://contactapi-1uvn.onrender.com/";
      const data = {
        name: name,
        email: email,
        message: message,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from the API:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      event.target.reset();
    }