function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("users-type");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

let var1=document.getElementById("person");
// console.log(var1);
let var2=document.getElementById("name");
let var3=document.getElementById("header_name");
let var4=document.getElementById("users-type");
let var5=document.getElementById("discription");
// let var6=document.getElementById("image1");
// let var7=document.getElementById("received-chats-img");
let userName=document.getElementById("user-name");
let img=document.querySelector("img");
let img2=document.querySelector(".msg-header-img");
let img3=document.querySelector(".received-chats-img");

console.log(img3);


function show_message(){
  var2.textContent="Hi Piyush";
  // var3.innerHTML="<div class="active" id="header_name"><h4>XYZ</h4><h6>10 hours ago...</h6></div>;"
  var3.innerHTML="<h4>Ram</h4><h6>3 hours ago</h6> ";
  var5.innerHTML="<p>I’m the Head of Student Recruitment at Newton School and IU University of Applied Sciences Germany and I believe that you could benefit from starting the next step in your career with Newton University.</p><p>Visit our website to explore our Master's Degrees in various domains and earn up to 40 LPA.</p><p>Courses you can join:</p><ul><li>Master's in Data Science</li><li>Master's in Cybersecurity</li><li>Master's in Artificial Intelligence</li><li>Master's in Computer Science</li></ul>"
  // var6.innerHTML="<img src="boy.jpg">";
  // var7.innerHTML="<img src="boy.jpg">";
  userName.innerHTML="<span>Ram</span>";
  img.src="ram.jpg";
  // img2.src="ram.jpg";
  // img3.src="ram.jpg";
  document.getElementById("image11").src = "ram.jpg";
  document.getElementById("image22").src = "ram.jpg";

}


let write=document.getElementById("write-message");
write.addEventListener("click",function(){
    alert("Write message");
})
console.log(write);