
import React from "react";

export const Colors = ["#3BB0EA",
  "#F78765",
  "#22C993",
  "#FFC66B",
  "#FE8999",
  "#9690DF"]


export const getRandomColor=()=> {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}