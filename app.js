function getValue() {
  var first = document.getElementById("word-1").value.toLowerCase().trim();
  var second = document.getElementById("word-2").value.toLowerCase().trim();
  
  var arr1 = first.split("").sort();
  var arr2 = second.split("").sort();
  
  console.log(arr1);
  console.log(arr2);
  
  if (arr1.length !== arr2.length) {
    document.getElementById("result").textContent = swal("Sorry! Anagram must be of the same length.");
    return;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      document.getElementById("result").textContent = swal("Opps!", "They are not Anagram!", "error");
      return;
    }
   
  }
  document.getElementById("result").textContent = swal("Good job!", "They are Anagram!", "success");

}




