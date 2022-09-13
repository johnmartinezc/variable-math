let x1 = 1;
let y1 = 3;
let x2 = 7; 
let y2 = 6;

coordinate1 = "(" + x1 + "," + y1 + ")";
coordinate2 = "(" + x2 + "," + y2 + ")";

console.log(Math.sqrt(x1,y1))
console.log(Math.sqrt(x2,y2))
console.log(Math.sqrt(x1,y1) + Math.sqrt(x1,y1))


powerCoordinate1 = Math.pow((x2-x1),2)
powerCoordinate2 = Math.pow((y2-y1),2)

console.log("The distance between " + coordinate1 + " and " + coordinate2 + " is " + Math.sqrt(powerCoordinate1 + powerCoordinate2))