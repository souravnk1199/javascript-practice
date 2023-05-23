const task1El1 = document.getElementById("task-1");
const task1El2 = document.querySelector("#task-1");

task1El1.style.color = "white";
task1El1.style.backgroundColor = "black";

const docTitle1 = document.querySelector("title");
// docTitle1.textContent = "Assignment - Solved!";

const docHead = document.head;
const docTitle2 = docHead.querySelector("title");

docTitle2.textContent = "Assignment - Solved!";

// const h1 = document.querySelector('h1');

const h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Assignment - Solved";

////////////////////////////////////////////
/* 
function printDate(now) {
  const getDayName = (num) => {
    switch (num) {
      case 0:
        return "SUNDAY";
      case 1:
        return "MONDAY";
      case 2:
        return "TUESDAY";
      case 3:
        return "WEDNESDAY";
      case 4:
        return "THURSDAY";
      case 5:
        return "FRIDAY";
      case 6:
        return "SATURDAY";
    }
  };

  const getAmPm = (hour) => {
    if (hour > 11) {
      return "PM";
    } else {
      return "AM";
    }
  };

  const day = getDayName(now.getDay());
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  hours1 = hours > 12 ? hours - 12 : hours;

  console.log(
    `Today is : ${day}.\nCurrent time is ${hours1} ${getAmPm(
      hours
    )} : ${minutes} : ${seconds}`
  );
}
 */
