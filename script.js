const services=[
{name:"Normal Stitching",urdu:"سادہ سلائی",price:"1200rs"},
{name:"Fancy Stitching",urdu:"فینسی سلائی",price:"1500rs"},
{name:"Child Suit",urdu:"بچوں کا سوٹ",price:"800rs"},
{name:"Repairing",urdu:"مرمت",price:"300rs"},
{name:"Buttons",urdu:"فینسی بٹن",price:"+300rs"}
];
const menuContainer=document.getElementById('service-menu');
services.forEach(s=>{
const card=document.createElement('div');
card.className='card';
card.onclick=openBookingAlert;
card.innerHTML=`
<h3>${s.name}</h3>
<p class="urdu-text">${s.urdu}</p>
<h2 style="color:var(--brand-blue);">${s.price}</h2>
<span style="font-size:0.8rem;color:var(--accent-pink)">Click to Book</span>`;
menuContainer.appendChild(card);
});
function openBookingAlert(){document.getElementById('bookingModal').style.display='flex'}
function closeBookingAlert(){document.getElementById('bookingModal').style.display='none'}
window.onclick=function(event){
const modal=document.getElementById('bookingModal');
if(event.target==modal){modal.style.display="none"}
}