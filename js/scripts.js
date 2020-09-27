$(document).ready(function() {
  $("#button").click(function(event) { 
    const flavors=["cookies 'n cream", "mint chocolate chip", "vanilla", "Chocolate chip cookie dough"]
    const favoriteFlavors = flavors.join(", ");
/*     let flavorComma=[]
    flavors.forEach(function(flavor) {
      flavorComma = flavorComma.push(flavors) */
    
    // const separator = flavors.join();
    // flavors.forEach(function(flavor) {

    // $("#Flavors").append(flavor).concat(", ");
      console.log(flavors);
      console.log(favoriteFlavors);
      $("#Flavors").append(favoriteFlavors)
    });
  });




// works BUT all words together with no commas
// $(document).ready(function() {
//   $("#button").click(function(event) { 
// // let displayFlavors
// const flavors=["cookies 'n cream", "mint chocolate chip", "vanilla", "Chocolate chip cookie dough"]
// flavors.forEach(function(flavor) {
//   $("#Flavors").append(flavor)
//     });
//   });
// });