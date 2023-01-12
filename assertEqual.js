const assertEqual = function(actual, expected) {
  if(actual !== expected){
    console.log("fail")
  } else{
    console.log("Pass")
  } 
}  

//Edge Cases
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);