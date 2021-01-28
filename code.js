function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length === 0)
  {
      return 0;
  }
  
  var numbers = [];
  for (var i = 0; i < arr.length; i++)
  {
      if (typeof arr[i] === "number")
      {
          numbers.push(arr[i]);
      }
  }
  
  if (numbers.length === 0)
  {
      return 0;
  }
  
  var smallestNum = numbers[0];
  for (var i = 0; i < arr.length; i++)
  {
      if (numbers[i]<smallestNum)
      {
          smallestNum = numbers[i];
      }
  }
  return smallestNum;
}
