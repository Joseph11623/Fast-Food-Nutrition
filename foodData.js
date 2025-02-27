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


/*
The getCaloriesInItem function takes a food item and returns the amount of calories in that item.
item {string} - the specific name of the meal
return {number} - the calories in that meal

*/
function getCaloriesInItem(item){
    var caloriecount = []
    if(item == ""){
        return 0
    }
    for(var i = 0; i < foodItems.length; i++){
        if(foodItems[i].toLowerCase().includes(item.toLowerCase())){
            caloriecount = calories[i] 
        }
    }
    if (caloriecount == []){
        return 0
    }
    return caloriecount
}
// console.log(getCaloriesInItem(""))




/*
The getAverageCalorieCount function takes the parameter vendor It then returns the average caloire count for that vendor.
vendor {string} - the name of the fast food location
return {number} - average calories from a bisness
*/
function getAverageCalorieCount(vendor){
    var matchingVendors = 0
    var caloriecount = 0
    var averageCalories = 0 
    if(vendor == ""){
        return 0
    }
    for (var i = 0; i < foodTypes.length; i++){
        if(vendors[i].toLowerCase().includes(vendor.toLowerCase() )){
            matchingVendors++
            caloriecount = parseFloat(caloriecount) + parseFloat(calories[i]) 
            
        }
    }
    if(averageCalories == 0){
        return 0
    }
    averageCalories = (caloriecount/matchingVendors)
    
    return averageCalories
}
// console.log(getAverageCalorieCount("fyghbh"))  

/*
The getMostCommonType function finds the most common food item.
return {string} - the most common food type in the list
*/

function getMostCommonType(){
    var uniqueFoodItems = []
    for(var i=0; i < foodTypes.length; i++){
        if(!uniqueFoodItems.includes(foodTypes[i])){ 
            uniqueFoodItems.push(foodTypes[i])
        }
    }
    var itemCounts = []
    for(var i=0; i < uniqueFoodItems.length; i++){
        var count = 0
        for(j = 0; j < foodTypes.length; j++){
            if (uniqueFoodItems[i] == foodTypes[j])
                count++
        }
        itemCounts.push(count)

    }
    var maxType = 0;
    var mostType = ""
    for (var i = 0; i < itemCounts.length; i++){
    if (itemCounts[i] > maxType){
        maxType = itemCounts[i];
        mostType = uniqueFoodItems[i]
    }
}

return mostType
}
// console.log(getMostCommonType())

/*
The getCaloriesPerGramsOfProtien function takes the parameters caloire and protien. Then returns all of the food items that have a higher protien to caloire ratio than the one inputted.
caloire {number} - amount of calories
protien {number} - amount of calories
*/
function getCaloriesPerGramsOfProtien (calorie,protien){
    var caloriesPerProtien = calorie/protien;
    var itemsThatWork = [];
      for(var i = 0; i < calories.length; i++){
        var listcalperpro = parseInt(calories[i])/parseInt(proteins[i])
          if(listcalperpro > caloriesPerProtien){
            itemsThatWork.push(foodItems[i])
        }
    }
  return itemsThatWork
}
   console.log(getCaloriesPerGramsOfProtien(100000,50))
  

/*
The getFoodItemsFromVendor function takes the parameter vendor and returns a list of all the food items from that vendor.
vendor {string} - the fast food bissness
return {list} - all the food items from the vendor
*/
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
  
//   console.log(getFoodItemsFromVendor("mcdonalds"))






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
  