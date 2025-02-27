#### The getColumn Function takes two parameters, the url of the data set and the column that you want to take data from.  then return a list of the data in the column.
##### url {string} - the url of the raw data
##### columnNumber {string} - the id of the column that you want data from
##### return {list} - all the information in the column
**`function getColumn(url, columnNumber)`**



# 
#### The getCaloriesInItem function takes a food item and returns the amount of calories in that item.
##### item {string} - the specific name of the meal
##### return {number} - the calories in that meal
**` function getCaloriesInItem(item) `**
#
#### The getAverageCalorieCount function takes the parameter vendor It then returns the average caloire count for that vendor.
##### vendor {string} - the name of the fast food location
##### return {number} - average calories from a bisness
**` function getAverageCalorieCount(vendor) `**


#
#### The getMostCommonType function finds the most common food item.
##### return {string} - the most common food type in the list 
**` function getMostCommonType()`**

# 
#### The getCaloriesPerGramsOfProtien function takes the parameters caloire and protien. Then returns all of the food items that have a higher protien to caloire ratio than the one inputted.
##### caloire {number} - amount of calories
##### protien {number} - amount of calories
**`function getCaloriesPerGramsOfProtien (calorie, protien) `**

#
#### The getFoodItemsFromVendor function takes the parameter vendor and returns a list of all the food items from that vendor.
##### vendor {string} - the fast food bissness
##### return {list} - all the food items from the vendor
**` function getFoodItemsFromVendor(vendor)`**
