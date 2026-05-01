const form = document.getElementById('bmi-form');
const result = document.getElementById('result');

function bmiCategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obesity';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const heightCm = Number(form.height.value);
  const weightKg = Number(form.weight.value);

  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    result.textContent = 'Please enter valid positive numbers for height and weight.';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const rounded = bmi.toFixed(1);
  const category = bmiCategory(bmi);

  result.textContent = `Your BMI is ${rounded} (${category}).`;
});
