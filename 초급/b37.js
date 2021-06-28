"use strict";

function drawChart(width = 200, height = 400) {
  console.log(`${width} X ${height} 차트를 그립니다`);
}
drawChart(100);
drawChart();

function drawCahrt2(width = 200, height = width / 2) {
  console.log(`${width} X ${height} 차트를 그립니다`);
}
drawCahrt2(300); //width 에만 값이 적용됨 첫번째 인자값만
drawCahrt2();
