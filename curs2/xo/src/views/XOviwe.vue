<script setup>
import { reactive } from "vue";

let tabla = reactive([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);
const valori = ["X", "0"];
let gameOver = false;
let indexMutare = 0;

function equalsRow(indexRow) {
  let linie = tabla[indexRow];
  let ref = linie[0];
  if (ref === "") return;
  for (let i = 1; i < linie.length; i++) {
    if (ref !== linie[i]) return false;
  }
  return true;
}

function equalsCol(indexCol) {
  let ref = tabla[0][indexCol];
  if (ref === "") return;
  for (let i = 1; i < tabla.length; i++) {
    if (ref !== tabla[i][indexCol]) return false;
  }
  return true;
}

function principala() {
  let ref = tabla[0][0];
  if (ref === "") return;
  for (let i = 1; i < tabla.length; i++) {
    if (ref !== tabla[i][i]) return false;
  }
  return true;
}

function secundara() {
  let ref = tabla[0][tabla.length - 1];
  if (ref === "") return;
  for (let i = 1; i < tabla.length; i++) {
    if (ref !== tabla[i][tabla.length - i - 1]) return false;
  }
  return true;
}

function endGame() {
  alert(valori[indexMutare] + " a castigat");
  gameOver = true;
}

function clickCell(row, col, celId) {
  if (gameOver) return;
  console.log("Clicked cell [" + row + "][" + col + "]");
  if (tabla[row][col] !== "") return;
  tabla[row][col] = valori[indexMutare];
  let cellElement = document.getElementById(celId);
  cellElement.classList.add("animate__animated", "animate__pulse");
  if (
    equalsRow(row) ||
    equalsCol(col) ||
    (row === col && principala()) ||
    (col === tabla.length - row - 1 && secundara())
  )
    endGame();
  indexMutare++;
  if (indexMutare >= valori.length) indexMutare = 0;
}
</script>

<template>
  <h1>&lt; X &amp; 0 &gt; &copy; 2023</h1>
  <!-- Tabla -->
  <table>
    <tbody>
      <tr v-for="(row, indexRow) in tabla" v-bind:key="indexRow">
        <td
          v-bind:id="'cell-' + indexRow + '-' + indexCol"
          v-for="(cell, indexCol) in row"
          class="cell"
          @click="
            clickCell(indexRow, indexCol, 'cell-' + indexRow + '-' + indexCol)
          "
        >
          <span v-if="cell != ''">{{ cell }}</span>
          <span v-if="cell == ''">-</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.cell {
  border: 1px solid white;
  padding: 1rem;
  font-size: 2rem;
  text-align: center;
  width: 33%;
  height: 5rem;
  cursor: pointer;
}
.cell:hover {
  color: white;
}
</style>