function CardRow(cards) {
  const container = document.getElementsByClassName("main")[0];
  const widthContainer = container.clientWidth;
  const row = Math.floor(widthContainer / (180 + 40));
  Display(row);
  for (let i = row; i < 10; i += row) {
    ConnectingLine(i, row);
  }
}

function Display(row) {
  const adjacentLine = document.getElementsByClassName("items");
  let count = 0;
  for (let element of adjacentLine) {
    count += 1;
    if (count % row != 0) {
      element.style.setProperty("content", "");
      element.style.setProperty("border", "1px solid var(--line-color)");
      element.style.setProperty("width", "40px");
      element.style.setProperty("position", "absolute");
      element.style.setProperty("top", "90px");
      element.style.setProperty("right", "-40px");
      element.style.setProperty("border-left", "none");
      element.style.setProperty("border-bottom", "none");
      element.style.setProperty("border-right", "none");
    }
  }
}

function ConnectingLine(number, row) {
  const line = document.getElementsByClassName("connecting-line")[number - 1];
  const leftSide = document.getElementsByClassName("Left")[number];
  const rightSide = document.getElementsByClassName("Right")[number - 1];
  const adjacentLine = document.getElementsByClassName("items")[number - 1];
  line.style.setProperty("position", "absolute");
  line.style.setProperty("width", "880px");
  line.style.setProperty("border", "1px solid var(--line-color)");
  line.style.setProperty("border-left", "none");
  line.style.setProperty("border-right", "none");
  line.style.setProperty("border-bottom", "none");
  line.style.setProperty("top", "210px");
  line.style.setProperty("right", "-20px");
  line.style.setProperty("z-index", "2");

  leftSide.style.setProperty("position", "absolute");
  leftSide.style.setProperty("width", "20px");
  leftSide.style.setProperty("height", "120px");
  leftSide.style.setProperty("border", "1px solid var(--line-color)");
  leftSide.style.setProperty("top", "-29px");
  leftSide.style.setProperty("left", "-20px");
  leftSide.style.setProperty("border-top", "none");
  leftSide.style.setProperty("border-right", "none");

  rightSide.style.setProperty("position", "absolute");
  rightSide.style.setProperty("width", "20px");
  rightSide.style.setProperty("height", "120px");
  rightSide.style.setProperty("border", "1px solid var(--line-color)");
  rightSide.style.setProperty("top", "90px");
  rightSide.style.setProperty("right", "-20px");
  rightSide.style.setProperty("border-left", "none");
  rightSide.style.setProperty("border-bottom", "none");

  switch (row) {
    case 1:
      line.style.setProperty("width", "220px");
      break;
    case 2:
      line.style.setProperty("width", "440px");
      break;
    case 3:
      line.style.setProperty("width", "660px");
      break;
    case 5:
      line.style.setProperty("width", "1100px");
      break;
    case 6:
      line.style.setProperty("width", "1320px");
      break;
    case 7:
      line.style.setProperty("width", "1540px");
      break;
    case 8:
      line.style.setProperty("width", "1760px");
      break;
    case 9:
      line.style.setProperty("width", "1980px");

      break;
    default:
      line.style.setProperty("width", "880px");
  }
}

const cards = document.querySelectorAll(".main-container");
window.addEventListener("resize", CardRow);
window.onresize = function () {
  location.reload();
};
CardRow(cards);
