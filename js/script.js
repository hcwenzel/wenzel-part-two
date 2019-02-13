tempFahr = prompt("What is the temperature in degrees?");
eventType = prompt("Are you going to a casual, semi-formal or formal event?");

if (eventType === "casual") {
    var clothingType = "something comfy";
} else if (eventType === "semi-formal") {
    var clothingType = "a polo";
} else if (eventType === "formal") {
    var clothingType = "a suit";
}

if (tempFahr < 54) {
    var jacketType = "a coat";
} else if (tempFahr >= 54 && tempFahr <= 70) {
    var jacketType = "a jacket";
} else if (tempFahr > 70) {
    var jacketType = "no jacket";
}

console.log("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + clothingType + " and " + jacketType + ".");