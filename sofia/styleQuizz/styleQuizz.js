document.getElementById("1").innerHTML = "yellow"

document.getElementById("2").innerHTML = "blue"

document.getElementById("3").innerHTML = "light green"

document.getElementById("4").innerHTML = "light purple"




var demo1 = document.getElementById("1");
demo1.style.backgroundColor = "#F4F873";

var demo2 = document.getElementById("2");
demo2.style.backgroundColor = "#22799C";

var demo3 = document.getElementById("3");
demo3.style.backgroundColor = "#8FE6B4";

var demo4 = document.getElementById("4");
demo4.style.backgroundColor = "#E18FE6";



var aq=["Which shoes would you rather wear?","What jewelery wuold you wear?","Which bag would you rather have?","What outfit would you wear?","What kind of makeup would you loke to do for yourself?"]

var q1=["yellow","blue","light green","light purple"]
var q2=["reding books","doing sport","cooking ","drawing"]
var q3=["not to be afraid of the different","to stay single","to love the other"," a girl in\n danger\n being saved"]
var q4=["brown","red","black","blonde"]
var q5=["in the village","in the palace","in the town","in a high tower"]

var b=["yellow","reding books","not to be afraid of the different","brown","in the village"]

var m=["blue","doing sport","to stay single","red","in the palace"]

var t=["light green","cooking","black","in the town"]

var r=["light purple","drawing","blonde","in a high tower"]

var im=["https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg","https://quizizz.com/media/resource/gs/quizizz-media/quizzes/f0494a37-5b7a-47fc-a251-6b90eb8e7ebf","https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=/global/images/photo/IC-Articles/A_Love_Story_bookIC__600x390.JPG&w=600&h=337&q=100","https://www.disneyfoodblog.com/wp-content/uploads/2021/09/charmed-family-resort-rapunzel-cottage.jpeg","https://www.maariv.co.il/HttpHandlers/ShowImage.ashx?id=408212"];


var coun=0

function say(){
  
  coun=coun+1
  //console.log(coun)
  
  if (coun==1){
  
    document.getElementById("questionText").innerHTML = aq[1]

    document.getElementById("questionNumber").innerHTML = "Questions - 2"

    document.getElementById("1").innerHTML = q2[0]

    document.getElementById("2").innerHTML = q2[1]

    document.getElementById("3").innerHTML = q2[2]

    document.getElementById("4").innerHTML  = q2[3]  
    
    document.getElementById("imag").src   = im[1]  
  }
  
  if (coun==2){
  
    document.getElementById("questionText").innerHTML = aq[2]

    document.getElementById("questionNumber").innerHTML = "Questions - 3"

    document.getElementById("1").innerHTML = q3[0]

    document.getElementById("2").innerHTML = q3[1]

    document.getElementById("3").innerHTML = q3[2]

    document.getElementById("4").innerHTML  = q3[3]  
     document.getElementById("imag").src   = im[2]  
  }
  
  if (coun==3){
  
    document.getElementById("questionText").innerHTML = aq[3]

    document.getElementById("questionNumber").innerHTML = "Question - 4"

    document.getElementById("1").innerHTML = q4[0]

    document.getElementById("2").innerHTML = q4[1]

    document.getElementById("3").innerHTML = q4[2]

    document.getElementById("4").innerHTML  = q4[3]  
    
    document.getElementById("imag").src   = im[4]  

  }
   if (coun==4){
  
    document.getElementById("questionText").innerHTML = aq[4]

    document.getElementById("questionNumber").innerHTML = "Question - 5"

    document.getElementById("1").innerHTML = q5[0]

    document.getElementById("2").innerHTML = q5[1]

    document.getElementById("3").innerHTML = q5[2]

    document.getElementById("4").innerHTML  = q5[3]  
     
     document.getElementById("imag").src   = im[3] 
  }
  if (coun==5){
    
   if(p=>2){
    window.open("https://cdpn.io/pen/debug/MWzWegX?authentication_hash=dGkXWpJxjPmA");
   }
    
   if(po=>2){
    window.open("https://cdpn.io/pen/debug/wvQBJwm?authentication_hash=bZAQWdwPWePM");
   }
    
   if(poi=>2){
    window.open("https://cdpn.io/pen/debug/PoxwWvJ?authentication_hash=mWAoNBgONxZr");
   }
    
   if(poin=>2){
     window.open("https://cdpn.io/pen/debug/WNYbRVK?authentication_hash=mVMbGgNJGqQr");
   }

  }
}



var p=0;
var po=0;
var poi=0;
var poin=0;

function p1(){
  p=p+1;
  console.log(p);
}

function p2(){
  po=po+1;
  console.log(po);
}

function p3(){
  poi=poi+1;
  console.log(poi);
}

function p4(){
  poin=poin+1;
  console.log(poin);
}

