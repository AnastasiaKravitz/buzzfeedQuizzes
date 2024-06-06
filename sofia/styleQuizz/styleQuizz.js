
var demo1 = document.getElementById("1");
demo1.style.backgroundColor = "#F4F873";

var demo2 = document.getElementById("2");
demo2.style.backgroundColor = "#22799C";

var demo3 = document.getElementById("3");
demo3.style.backgroundColor = "#8FE6B4";

var demo4 = document.getElementById("4");
demo4.style.backgroundColor = "#E18FE6";



var aq=["Which shoes would you rather wear?","What jewelery wuold you wear?","Which bag would you rather have?","What outfit would you wear?","What kind of makeup would you loke to do for yourself?"]

var q2=["https://i.pinimg.com/564x/9e/6d/74/9e6d74338ecfa53b9bbb7663a0cd14b7.jpg","https://i.pinimg.com/736x/e2/38/3b/e2383be6ddb02f2b72d019f51a0191cc.jpg","https://i.pinimg.com/564x/87/e7/c7/87e7c7a5c66a6e6c8617539f2738faa0.jpg","https://i.pinimg.com/736x/2a/85/69/2a856908648ff91c6ca0b123c38ffc39.jpg"]
var q3=["https://i.pinimg.com/564x/92/07/d7/9207d7417644ccfe44d7de1caae391d3.jpg","https://i.pinimg.com/736x/f7/6d/bb/f76dbb3c70ff2cf5e75a56cf701b1dc2.jpg","https://i.pinimg.com/736x/ce/a8/5b/cea85bcb2a468cba294c4acfd60cec31.jpg","https://i.pinimg.com/564x/03/88/73/03887343ac7c8a76a82729940d6e8b38.jpg"]
var q4=["https://i.pinimg.com/564x/fb/ac/b5/fbacb5170f8a7a2f355696db22eda398.jpg","https://i.pinimg.com/564x/4f/5d/0d/4f5d0d98ccb8a53e5b5001b362c72584.jpg","https://i.pinimg.com/564x/b4/33/5c/b4335cd54c23817bfe65674d05fe4d52.jpg","https://i.pinimg.com/564x/82/b4/20/82b420ceef30a3bcfc897d6331081347.jpg"]
var q5=["https://i.pinimg.com/736x/ca/ec/57/caec57b28cbf157aaa1ee46bd41fc227.jpg","https://i.pinimg.com/564x/51/5b/e9/515be92a46dd35ac3bb713017132035b.jpg","https://i.pinimg.com/564x/c9/3f/5e/c93f5ed125c96608ba34252075178a00.jpg","https://i.pinimg.com/564x/e3/0b/e1/e30be10b3d1ef5c89a15e388572d12ff.jpg"]

var b=["yellow","reding books","not to be afraid of the different","brown","in the village"]

var m=["blue","doing sport","to stay single","red","in the palace"]

var t=["light green","cooking","black","in the town"]

var r=["light purple","drawing","blonde","in a high tower"]

var im=["https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg","https://quizizz.com/media/resource/gs/quizizz-media/quizzes/f0494a37-5b7a-47fc-a251-6b90eb8e7ebf","https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=/global/images/photo/IC-Articles/A_Love_Story_bookIC__600x390.JPG&w=600&h=337&q=100","https://www.disneyfoodblog.com/wp-content/uploads/2021/09/charmed-family-resort-rapunzel-cottage.jpeg","https://www.maariv.co.il/HttpHandlers/ShowImage.ashx?id=408212"];


var coun=0

function say(){
  
  coun=coun+1

  
  if (coun==1){
    
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

