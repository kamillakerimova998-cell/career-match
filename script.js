const ctx = document.getElementById('myChart');
if(ctx){
new Chart(ctx, {
 type:'doughnut',
 data:{
 labels:['Skills','Projects','Experience'],
 datasets:[{data:[90,75,80]}]
 }
});
}

document.getElementById('themeToggle')?.addEventListener('click',()=>{
 document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.job-card button').forEach(btn=>{
 btn.addEventListener('click',()=>{
   btn.innerText='Applied ✓';
   alert('Application sent successfully');
 });
});

const skillZone=document.getElementById('skillDrop');
if(skillZone){
 skillZone.addEventListener('dragover',(e)=>e.preventDefault());
 skillZone.addEventListener('drop',()=>{
   skillZone.innerHTML='Skill Added ✓';
 });
}

function sendMessage(){
 const input=document.getElementById('msgInput');
 const messages=getMessages();
 messages.push(input.value);
 saveMessages(messages);
 input.value='';
}
```javascript
const ctx = document.getElementById('myChart');
if(ctx){
new Chart(ctx, {
 type: 'bar',
 data: {
   labels: ['Profile','Skills','Projects','Tests'],
   datasets: [{
     label: 'Progress %',
     data: [85, 90, 70, 88]
   }]
 }
});
}

document.getElementById('themeToggle')?.addEventListener('click',()=>{
 document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.job-card button').forEach(btn=>{
 btn.addEventListener('click',()=>{
   btn.innerText='Applied ✓';
 });
});