const numArray = [1, 4, 5, 2, 9, 6, 3, 7, 8, -2, 100];
const greaterThanFive = numArray.filter((n) => n > 5);
console.log(greaterThanFive);
const objArrays = numArray.map((n) => ({ num: n }));
console.log(objArrays);
const reduceNum = numArray.reduce((pv, cv) => pv * cv, 1);
console.log(reduceNum);

function findMax(...nums) {
  let currMax = nums[0];
  for (const num of nums) {
    if (num > currMax) {
      currMax = num;
    }
  }
  return currMax;
}

console.log(findMax(...numArray));

function findMinMax(...nums) {
  let currMax = nums[0];
  let currMin = nums[0];
  for (const num of nums) {
    if (num > currMax) {
      currMax = num;
    }
    if (num < currMin) {
      currMin = num;
    }
  }
  return [currMin, currMax];
}

const [min, max] = findMinMax(...numArray);
console.log(min, max);

const userIds = new Set();
userIds.add(1);
userIds.add(2);
userIds.add(4);
userIds.add(1);
console.log(userIds);
