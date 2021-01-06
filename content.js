//Remove genuine button action
if(document.getElementById('ZdzlKb') !==null){
  var generateBtn = document.getElementById('ZdzlKb');
  generateBtn.removeAttribute('jsname');
  generateBtn.removeAttribute('jsaction');
  generateBtn.removeAttribute('role');

  //Set variables
  var x = document.getElementsByClassName("gws-csf-randomnumber__result");
  var numbers;
  var minValue;
  var maxValue;

  //Run real random generator
  document.getElementById('ZdzlKb').addEventListener('click',function(){
     minValue = document.getElementById('UMy8j').value;
     maxValue = document.getElementById('nU5Yvb').value;
     numbers = [randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue)];
     numberPicker(numbers);
  });

  //Run fake random generator
  chrome.runtime.onMessage.addListener(request => {

    var i = -1;

    if (request.fixedValue) {
        var fixedValue = request.fixedValue;
        minValue = document.getElementById('UMy8j').value;
        maxValue = document.getElementById('nU5Yvb').value;
        document.getElementById('ZdzlKb').addEventListener('click',function(){
           i++;
           if(i == request.skipValue){
             numbers = [randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), fixedValue];
             numberPicker(numbers);
           } else {
             numbers = [randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue)];
             numberPicker(numbers);
           }
        });
    } else {
        minValue = document.getElementById('UMy8j').value;
        maxValue = document.getElementById('nU5Yvb').value;
        document.getElementById('ZdzlKb').addEventListener('click',function(){
           numbers = [randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue), randomize(minValue,maxValue)];
           numberPicker(numbers);
        });
    }
  });
}

//Math random function
function randomize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Number animation function
function numberPicker(numbers) {
  for (var i = 1; i <= 10; ++i) {
    (function(index) {
      setTimeout(function() {
        x[0].innerText = (numbers[index-1]);
      }, i * 25);
    })(i);
  }
}
