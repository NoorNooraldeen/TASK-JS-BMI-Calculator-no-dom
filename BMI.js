/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */
function calculateBMI(weight, height) {
  let heightInMeters = height / 100;

  let BMI = weight / (heightInMeters * heightInMeters);

  /**
   * Stop making changes here!
   */
  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  let BMIState;

  if (BMI <= 18.5) {
    BMIState = "underweight";
  }
  if (BMI >= 18.5 && BMI <= 24.9) {
    BMIState = "healthy";
  }

  if (BMI > 25.0 && BMI < 29.9) {
    BMIState = "overweight";
  }

  if (BMI > 30) {
    BMIState = "obese";
  }

  /**
   * Stop making changes here!
   */
  return BMIState;
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  let BMIState = "not healthy";

  // if (
  //   (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) ||
  //   (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) ||
  //   (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) ||
  //   (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) ||
  //   (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) ||
  //   (age >= 65 && BMI >= 24 && BMI <= 29)
  // ) {
  //   BMIState = "healthy";
  // }

  if (19 <= age && age <= 24 && 19 <= BMI && BMI <= 24) {
    BMIState = "healthy";
  } else if (25 <= age && age <= 34 && 20 <= BMI && BMI <= 25) {
    BMIState = "healthy";
  } else if (35 <= age && age <= 44 && 21 <= BMI && BMI <= 26) {
    BMIState = "healthy";
  } else if (45 <= age && age <= 54 && 22 <= BMI && BMI <= 27) {
    BMIState = "healthy";
  } else if (55 <= age && age <= 64 && 23 <= BMI && BMI <= 28) {
    BMIState = "healthy";
  } else if (age >= 65 && 24 <= BMI && BMI <= 29) {
    BMIState = "healthy";
  }

  /**
   * Stop making changes here!
   */
  return BMIState;
}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };
