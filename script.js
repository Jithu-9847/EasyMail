
// ---------------------------------------------------animation-------------------------------------------------------------

var t1=gsap.timeline();

t1.from("#separate",
  { 
    y: -700,
    opacity: 0,
    duration:1
  }
   
)
t1.from("#bar img",
  { 
    x: -100,
    opacity: 0,
    duration:0.7,
    stagger:0.7,
    scale:0
  }
   
)
t1.from("#home_head",{
    y:-100,
    duration:0.7,
    opacity:0,
    
})
t1.from("#home_intro",{
  x:-100,
  duration:0.7,
  opacity:0,
  
})
t1.from("#web_logo_img",{
  opacity:0,
  scale:0
})
t1.from("#compose",{
  opacity:0,
  scale:0
})

t1.to("#plus",{
  rotate:360,
  delay:2,
  duration:1,
  repeat:4
})
 
gsap.from("#about1 h1,#about1 p",{
  x:-100,
  duration:1,
  stagger:0.7,
  opacity:0,
})

function  send() {
  if(document.getElementById('email').value!="" && document.getElementById('security').value!=""){
    Email.send({ 
        Host : "smtp.elasticemail.com",
        Username: "programmer730608@gmail.com", 
        Password: "D7061323DA7BE3E24F92"+document.getElementById('security').value,
        To:  document.getElementById('mail_id').value, 
        From: "programmer730608@gmail.com", 
        Subject: document.getElementById('sub').value+" (Email sended using EasyMail)", 
        Body:  document.getElementById('body').value, 
        Attachments : allConvertedFiles
      }) 
        .then(function (message) { 
          document.getElementById('progress').style.display="block";
          document.getElementById('progress_img').setAttribute('src','successfully-done.gif');
          document.getElementById('progress_line').innerText="Email Sended";
          document.getElementById('progress_line2').innerText="Successfully";
          setTimeout(() => {
            document.getElementById('progress').style.display="none";
          }, 6000);
          setTimeout(() => {
            location.reload();
          },  6000);
        }); 
      }
      else{
        alert("Please enter an Email id! or Enter the security code")
      }
     
    
}
let  allConvertedFiles=[];
function convertFile(){
  var reader;
  var dataUri;
  var file = document.getElementById("file").files[document.getElementById("file").files.length-1];
    reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
      document.getElementById('progress').style.display="block";
      document.getElementById('progress_img').setAttribute('src','processing-circle.gif');
      document.getElementById('progress_line').innerText="Uploading...";
    }
    reader.onloadend= function(){
      
      document.getElementById('progress_img').setAttribute('src','successfully-done.gif');
      document.getElementById('progress_line').innerText="Uploaded successfully";
      document.getElementById('attach_name').innerText="Attachment:"+file.name;
      setTimeout(() => {
        document.getElementById('progress').style.display="none";
      },  3000);
      allConvertedFiles.push({name : file.name, data : dataUri});
    }
};

document.getElementById('attach').addEventListener('mouseover',()=>{


  document.getElementById('attach').style.opacity="1";

  setTimeout(() => {
    document.getElementById('attach').style.opacity="0.3";
  },  3000);

})
document.getElementById('cancel').addEventListener('click',()=>{


  document.getElementById('blur').style.display="none";
  document.getElementById('pop_up').style.display="none";

  

})


 function to_up(){

  var text=document.getElementById('body').value;
  document.getElementById('body').value=text.toUpperCase();

 }

 function to_low(){

  var text=document.getElementById('body').value;
  document.getElementById('body').value=text.toLowerCase();

 }

 function space(){

  var text=document.getElementById('body').value;
  document.getElementById('body').value=text.replace(/\s{2}/g," ").trim();

 }

 function re_place(){
  document.getElementById('blur').style.display="block";
  document.getElementById('pop_up').style.display="block";
  
  

 }
 var text=document.getElementById('replace_btn').addEventListener('click',()=>{

   
  var text=document.getElementById('body').value;
  
  if(document.querySelector('#select').value=="Replace one by one"||document.getElementById('select').value=="")
  document.getElementById('body').value=text.replace(document.getElementById('find').value,document.getElementById('replace').value);
  else
  document.getElementById('body').value=text.replaceAll(document.getElementById('find').value,document.getElementById('replace').value);
 })

 function clearall(){
 
  var text=document.getElementById('body').value;
  document.getElementById('body').value="";

 }
 function file(){
 
  var file=document.getElementById('file').files[0];
  console.log(file);

 }

  function compose(){
    location.replace('compose.html');
  }
  

 
 
  

