// Importamos la librería chalk
import chalk from 'chalk';



function mostrarEstado() {
  function inicio() {
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal rarita!'));
}
function proceso() {
  console.warn(chalk.yellow('ℹ️ Cargando Tarea 1/3...'));
  console.warn(chalk.yellow('ℹ️ Cargando Tarea 2/3...'));
  console.warn(chalk.yellow('ℹ️ Cargando Tarea 3/3...'));
}
function finalizacion() {
  console.info(chalk.green('TAREAS COMPLETADAS'));
}
  inicio();
  proceso();
  finalizacion();
}

// Mensajes iniciales
// console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
//console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
//console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
//console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
//console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Prueba de función
saludar("Equipo A");
mostrarEstado();