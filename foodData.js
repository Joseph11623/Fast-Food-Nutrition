var url = "https://raw.githubusercontent.com/Joseph11623/datasets/refs/heads/main/Science/Fast%20Food%20Nutrition.csv"
var foodItems = getColumn(url,1)
var foodTypes = getColumn(url,2)
var vendors = getColumn(url,3)
var calories = getColumn(url,4)
var fats = getColumn(url,5)
var protiens = getColumn(url,6)
var carbs = getColumn(url,7)
var cholesterols = getColumn(url,8)
var sodiums = getColumn(url,10)
 
//this function gets the calories per each gram of protien.
function getCaloriesPerGramsOfProtien (calorie,protien){
  var caloriesPerProtien = calorie/protien;
  var itemsThatWork = [];
    for(var i = 0; i < calories.length; i++){
      var listcalperpro = parseInt(calories[i])/parseInt(protiens[i])
        if(listcalperpro > caloriesPerProtien){
          itemsThatWork.push(foodItems[i])
        }
    }
return itemsThatWork
}
 console.log(getCaloriesPerGramsOfProtien(1000,50))


function getFoodItemsFromVendor(vendor){
var foodPerVendor = []

  for (var i = 0; i < calories.length; i++){
    if (vendors[i].toLowerCase().includes(vendor.toLowerCase()))
      foodPerVendor.push(foodItems[i])
  }
  if (foodPerVendor.length == 0){
    return "No Results"
  }
  return foodPerVendor
}

console.log(getFoodItemsFromVendor("mcdonalds"))



function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }
  
