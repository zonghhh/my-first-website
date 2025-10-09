function show_side_bar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'flex';
};
function hide_side_bar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'none';
};
function submit_form(){
    alert("form submitted! we will get back to you")
    window.location.href = "restaurant.html";
    window.location.replace('./restaurant.html');
}

function first_next(){
    const bullet = document.querySelectorAll(".step .bullet")
    const slidePage = document.querySelector(".slidepage");
    slidePage.style.marginLeft = "-25%";
    bullet[current -1].classList.add("active");
    current += 1;
}
function second_back(){
    const bullet = document.querySelectorAll(".step .bullet")
    const slidePage = document.querySelector(".slidepage");
    slidePage.style.marginLeft = "0%";
    bullet[current +1].classList.add("active");
    current -= 1;
}
function second_next(){
    const bullet = document.querySelectorAll(".step .bullet")
    const slidePage = document.querySelector(".slidepage");
    slidePage.style.marginLeft = "-50%";
    bullet[current -1].classList.add("active");
    current += 1;
}


let max =3;
let current =1;

// console.log("Element slidePage:", slidePage);
// console.log("Element firstNextBtn:", firstNextBtn);
/* its says null value but i dont know why*/
function check_input1(){
    const requiredFields = document.querySelectorAll('.required-field1');
    const slidePage = document.querySelector(".slidepage");
    for (const field of requiredFields) {
        if (!field.value.trim()) {
          alert('Please fill in all required fields.');
          field.focus();
          slidePage.style.marginLeft = "0%";
          return;
        }
      }
}
function check_input2(){
    const requiredFields = document.querySelectorAll('.required-field2');
    const slidePage = document.querySelector(".slidepage");
    for (const field of requiredFields) {
        if (!field.value.trim()) {
          alert('Please fill in all required fields.');
          field.focus();
          slidePage.style.marginLeft = "-25%";
          return;
        }
      }
}
function check_input3(){
    const requiredFields = document.querySelectorAll('.required-field3');
    const slidePage = document.querySelector(".slidepage");
    for (const field of requiredFields) {
        if (!field.value.trim()) {
          alert('Please fill in all required fields.');
          field.focus();
          return;
        }
      }
}