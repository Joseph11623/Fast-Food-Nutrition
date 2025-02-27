var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Fast%20Food%20Nutrition.csv"
var foodItems = getColumn(url, 1)
var foodTypes = getColumn(url,2)
var vendors = getColumn(url,3)
var calories = getColumn (url,4)
var fats = getColumn (url,5)
var proteins = getColumn (url,6)
var carbs = getColumn (url,7)
var cholesterols = getColumn(url, 8)
var sodiums = getColumn(url,10)

function getCaloriesInItem(item){
    var caloriecount = 0
    for(var i = 0; i < foodItems.length; i++){
        if(item.toLowerCase() == foodItems[i].toLowerCase()){
            caloriecount = calories[i] 
        }
    }
    return caloriecount
}
// console.log(getCaloriesInItem("Kfc Biscuit"))


function getAverageCalorieCount(vendor){
    var matchingVendors = 0
    var caloriecount = 0
    var averageCalories = 0 
    for (var i = 0; i < foodItems.length; i++){
        if(vendor.toLowerCase() == vendors[i].toLowerCase()){
            matchingVendors++
            
            caloriecount = parseFloat(caloriecount) + parseFloat(calories[i])
            console.log(caloriecount)

        }
    }
    averageCalories = (caloriecount/matchingVendors)
    return averageCalories
}
console.log(getAverageCalorieCount("McDonalds"))







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
  