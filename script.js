// Maintenance Calcualtion Formula:
// BMR X Activity Level
// No activity = BMR X 1.2
// normal = BMR X 1.375
// active = BMR X 1.55
// V.active = BMR X 1.725
// BMR males = (10xweight)+(6.25xheight)-(5xage)+5
// BMR females = (10xweight)+(6.25xheight)-(5xage)-161

let form = document.querySelector("form");
form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  let weightElem = document.querySelector("#weight");
  let weightValue = weightElem.value;
  let heightElem = document.querySelector("#height");
  let heightValue = heightElem.value;
  let ageElem = document.querySelector("#age");
  let ageValue = ageElem.value;
  let genderElem = document.querySelector("#genderInput");
  let genderValue = genderElem.value;
  let activityElem = document.querySelector("#activityInput");
  let activityValue = activityElem.value;

  // console.log(`Age: ${ageValue}`)
  // console.log(`Weight: ${weightValue}`)
  // console.log(`Height: ${heightValue}`)
  // console.log(`Gender: ${genderValue}`)
  // console.log(`Activty Level: ${activityValue}`)
  let multiplyFactor = 0;
  let BMR = 0;
  if (activityValue === "veryActive") {
    multiplyFactor = 1.725;
  } else if (activityValue === "Active") {
    multiplyFactor = 1.55;
  } else if (activityValue === "Normal") {
    multiplyFactor = 1.375;
  } else {
    multiplyFactor = 1.2;
  }

  if (genderValue === "Female") {
    BMR = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
  } else {
    BMR = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
  }

  let finalMaintenance = Math.floor(BMR * multiplyFactor);
  let bulkingCalories = finalMaintenance + 200;
  let cuttingCalories = finalMaintenance - 200;

  console.log(finalMaintenance);
  console.log(cuttingCalories);
  console.log(bulkingCalories);
  let maintenance = document.querySelector("#maintain");
  maintenance.textContent = finalMaintenance;

  let cut = document.querySelector("#cut");
  cut.textContent = cuttingCalories;

  let bulk = document.querySelector("#bulk");
  bulk.textContent = bulkingCalories;

  ageElem.value = ''
  weightElem.value = ''
  heightElem.value = ''
});
