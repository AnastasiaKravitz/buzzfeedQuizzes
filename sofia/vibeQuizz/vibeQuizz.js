
var demo1 = document.getElementById("1");
demo1.style.backgroundColor = "#F4F873";

var demo2 = document.getElementById("2");
demo2.style.backgroundColor = "#22799C";

var demo3 = document.getElementById("3");
demo3.style.backgroundColor = "#8FE6B4";

var demo4 = document.getElementById("4");
demo4.style.backgroundColor = "#E18FE6";



var aq=["What kind of room would you like to have?","Which artists do you like the most?","Which animal do you like best?","What subject are you best at?","What kind of food do you like?"]

var q2=["https://i.pinimg.com/564x/c7/c8/8e/c7c88ed1a8890727e4845207091245ac.jpg","https://i.pinimg.com/564x/cf/b1/04/cfb104f0f317bb0dc0d6ca3f73cff5e3.jpg","https://i.pinimg.com/564x/9b/12/d9/9b12d998917813c757d96f6466c2f45c.jpg","https://i.pinimg.com/564x/94/ba/cd/94bacda37fbabb3bd37bc53ea6691299.jpg"]
var q3=["https://i.pinimg.com/564x/64/48/55/644855fa3e593c12737da820b9c87717.jpg","https://i.pinimg.com/564x/d3/5b/e5/d35be548972162eb14e0061938ac4550.jpg","https://i.pinimg.com/564x/77/20/63/77206397b0cb826bc9ffd1c0062c3250.jpg","https://i.pinimg.com/564x/03/0f/9a/030f9a4343345c1267732d7c9f3edd93.jpg"]
var q4=["https://i.pinimg.com/736x/13/84/d5/1384d56c604f75a51b36ee8435ee6ed4.jpg","https://i.pinimg.com/736x/7b/b1/92/7bb19236ff5c5bfe1d1dd15029fb6fe4.jpg","https://i.pinimg.com/564x/f5/3c/c0/f53cc094f498c91fd598f840fc5867f0.jpg","https://i.pinimg.com/564x/38/80/8a/38808a240b11117eface344980cc230a.jpg"]
var q5=["https://i.pinimg.com/736x/c6/bc/28/c6bc2813bf601390850e3ebaabadcf70.jpg","https://i.pinimg.com/564x/42/95/88/429588cff1c447d676d30b28af8e4b6d.jpg","https://i.pinimg.com/736x/c6/96/e7/c696e71535376c1737b90b943ea024f8.jpg","https://i.pinimg.com/564x/71/b1/c8/71b1c85936b8576dfdd49035f61ccd2b.jpg"]

var b=["yellow","reding books","not to be afraid of the different","brown","in the village"]

var m=["blue","doing sport","to stay single","red","in the palace"]

var t=["light green","cooking","black","in the town"]

var r=["light purple","drawing","blonde","in a high tower"]

var im=["https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg","https://quizizz.com/media/resource/gs/quizizz-media/quizzes/f0494a37-5b7a-47fc-a251-6b90eb8e7ebf","https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=/global/images/photo/IC-Articles/A_Love_Story_bookIC__600x390.JPG&w=600&h=337&q=100","https://www.disneyfoodblog.com/wp-content/uploads/2021/09/charmed-family-resort-rapunzel-cottage.jpeg","https://www.maariv.co.il/HttpHandlers/ShowImage.ashx?id=408212"];


var coun=0

function say(){
  
  coun=coun+1

  
  if (coun==1){
    alert("coun1")
    document.getElementById("questionText").innerHTML = aq[1]

    document.getElementById("questionNumber").innerHTML = "Questions - 2"

    document.getElementById("1").src = q2[0]

    document.getElementById("2").src = q2[1]

    document.getElementById("3").src = q2[2]

    document.getElementById("4").src  = q2[3]  
    
    document.getElementById("imag").src   = im[1]  
  }
  
  if (coun==2){
  
    document.getElementById("questionText").innerHTML = aq[2]

    document.getElementById("questionNumber").innerHTML = "Questions - 3"

    document.getElementById("1").src = q3[0]

    document.getElementById("2").src = q3[1]

    document.getElementById("3").src = q3[2]

    document.getElementById("4").src  = q3[3]  
     document.getElementById("imag").src   = im[2]  
  }
  
  if (coun==3){
  
    document.getElementById("questionText").innerHTML = aq[3]

    document.getElementById("questionNumber").innerHTML = "Question - 4"

    document.getElementById("1").src = q4[0]

    document.getElementById("2").src = q4[1]

    document.getElementById("3").src = q4[2]

    document.getElementById("4").src  = q4[3]  
    
    document.getElementById("imag").src   = im[4]  

  }
   if (coun==4){
  
    document.getElementById("questionText").innerHTML = aq[4]

    document.getElementById("questionNumber").innerHTML = "Question - 5"

    document.getElementById("1").src = q5[0]

    document.getElementById("2").src = q5[1]

    document.getElementById("3").src = q5[2]

    document.getElementById("4").src  = q5[3]  
     
     document.getElementById("imag").src   = im[3] 
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
