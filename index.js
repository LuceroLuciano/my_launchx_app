/* Archivo principal de este proyecto */

// Importando la clase MissionComander
const MissionComander = require('./app/missionComander');

// Instanciando objetos e imprimiendo los atributos name
const lucero = new MissionComander("Lucero")
const cielo = new MissionComander("Cielo")
const estrella = new MissionComander("Estrella")

console.log(lucero)
console.log(cielo)
console.log(estrella)