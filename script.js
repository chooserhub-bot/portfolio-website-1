// DARK MODE
document.getElementById("darkModeBtn")
.onclick = () => document.body.classList.toggle("dark");

// BOOKING FORM
document.getElementById("bookingForm").addEventListener("submit",e=>{
e.preventDefault();
let msg=document.getElementById("formMsg");
msg.innerText="✅ Booking Successful!";
msg.style.color="green";
});

// GSAP HERO
gsap.from(".hero-title",{y:80,opacity:0,duration:1.2});

// SCROLL REVEAL
gsap.utils.toArray(".reveal").forEach(el=>{
gsap.from(el,{
opacity:0,
y:100,
duration:1,
scrollTrigger:{
trigger:el,
start:"top 85%"
}
});
});
