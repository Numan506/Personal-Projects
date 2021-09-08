// document.querySelector(".btn1").addEventListener("click",function(){
//         var num1 = document.querySelector("#ban").value;
//         console.log(num1);
// });

function total(){
   var sub1 = parseInt (document.querySelector("#ban").value);
   var sub2 = parseInt (document.querySelector("#eng").value);
   var sub3 = parseInt(document.querySelector("#math").value);
   var sub4 = parseInt(document.querySelector("#phy").value);
   var sub5 = parseInt(document.querySelector("#che").value);

   if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
         alert("Please enter marks in range of 100")
   }else{
        var result=sub1+sub2+sub3+sub4+sub5;
        
        document.querySelector("#total").innerHTML="Bangla: "+sub1 +"<br> English: "+sub2 +"<br> Biology: "+sub3 +"<br> History: "+sub4 +" <br>Physical: "+sub5 +"<br>___________________________ <br>Total Marks: "+result;
        
        }
}

function average() {

        var sub1 = parseInt (document.querySelector("#ban").value);
        var sub2 = parseInt (document.querySelector("#eng").value);
        var sub3 = parseInt(document.querySelector("#math").value);
        var sub4 = parseInt(document.querySelector("#phy").value);
        var sub5 = parseInt(document.querySelector("#che").value);
     
        if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
              alert("Please enter marks in range of 100")
        }else{
             var result=(sub1+sub2+sub3+sub4+sub5)/5;
             
             document.querySelector("#average").innerHTML="Average : "+result 
             
             }
        
}

function grade() {

        var sub1 = parseInt (document.querySelector("#ban").value);
        var sub2 = parseInt (document.querySelector("#eng").value);
        var sub3 = parseInt(document.querySelector("#math").value);
        var sub4 = parseInt(document.querySelector("#phy").value);
        var sub5 = parseInt(document.querySelector("#che").value);

        var result=sub1+sub2+sub3+sub4+sub5
     
        if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
              alert("Please enter marks in range of 100")
        }else {
             if(result>=400 && result<=500){
                document.querySelector("#grade").innerHTML="Grade: A+"
             }else if(result>=350 && result<=399){
                document.querySelector("#grade").innerHTML="Grade: A"
             }else if(result>=300 && result<=349){
                document.querySelector("#grade").innerHTML="Grade: A-"
             }else if(result>=250 && result<=299){
                document.querySelector("#grade").innerHTML="Grade: B"
             }else if(result>=200 && result<=249){
                document.querySelector("#grade").innerHTML="Grade: C"
             }else if(result>=175 && result<=199){
                document.querySelector("#grade").innerHTML="Grade: D"
             }else if( result<199){
                document.querySelector("#grade").innerHTML="Grade: F"
             }
             }
             
            
             
             }
        



//    var result = sub1+sub2+sub3+sub4+sub5;
//         console.log(result);
        


// function total(){
//     var sub1 = parseInt(document.querySelector("#ban").value); 
//     var sub2 = parseInt(document.querySelector("#eng").value);
//     var sub3 = parseInt(document.querySelector("#math").value);
//     var sub4 = parseInt(document.querySelector("#phy").value);
//     var sub5 = parseInt(document.querySelector("#che").value);

//     if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
//         alert("Please enter marks in range of 100")
//     }else{
//         var total=sub1+sub2+sub3+sub4+sub5;
//         document.getElementById("total").innerHTML="Bangla: "+sub1 +"<br> English: "+sub2 +"<br> Mathmatics: "+sub3 +"<br> Physics: "+sub4 +"<br> Chemestry: "+sub5;

//     }
// }


// function Average(){
//     var sub1 = parseInt(document.getElementById("ban").value);
//     var sub2 = parseInt(document.getElementById("eng").value);
//     var sub3 = parseInt(document.getElementById("math").value);
//     var sub4 = parseInt(document.getElementById("phy").value);
//     var sub5 = parseInt(document.getElementById("che").value);

//     if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
//         alert("Please enter marks in range of 100")
//     }else{
//         var total=sub1+sub2+sub3+sub4+sub5;
//         var Ave = total/5;
//         document.getElementById("average").innerHTML="Average Marks:"+Ave;
        
//     }
// }


// function Grade(){
//     var sub1 = parseInt(document.getElementById("ban").value);
//     var sub2 = parseInt(document.getElementById("eng").value);
//     var sub3 = parseInt(document.getElementById("math").value);
//     var sub4 = parseInt(document.getElementById("phy").value);
//     var sub5 = parseInt(document.getElementById("che").value);

//     if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
//         alert("Please enter marks in range of 100")
//     }else{
//         var total=sub1+sub2+sub3+sub4+sub5;
//         var Ave = total/5;
        
//         if(Ave>=80 && Ave<=100){
//             document.getElementById("grade").innerHTML="Your grde is A+";
//         }else if(Ave>=70 && Ave<=80){
//             document.getElementById("grade").innerHTML="Your grde is A";
//         }else if(Ave>=60 && Ave<=70){
//             document.getElementById("grade").innerHTML="Your grde is A-";
//         }else if(Ave>=50 && Ave<=60){
//             document.getElementById("grade").innerHTML="Your grde is B+";
//         }else if(Ave>=40 && Ave<=50){
//             document.getElementById("grade").innerHTML="Your grde is C";
//         }else if(Ave>=33 && Ave<=39){
//             document.getElementById("grade").innerHTML="Your grde is D";
//         }else{
//             document.getElementById("grade").innerHTML="Your are a Fail";
//         }
        
//     }
// }