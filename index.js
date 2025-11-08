import chalk from 'chalk';
function simularError() {
    console.warn(chalk.yellow('⚠️ Atención: Se ha escapado un bug 🐞'));
    console.error(chalk.red('❌ HA OCURRIDO UN ERROR. LOS BUG SE HAN APODERADO DEL SISTEMA'));
    console.info(chalk.blue('ℹ️ Liberando bug...🐞...🐞...'));
    console.info(chalk.green('✔️ BUG LIBERADO. EL SISTEMA HA SIDO RESTABLECIDO'));
}
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}


function mostrarEstado() {
  function inicio() {
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal rarita!'));
}
function proceso() {
  console.warn(chalk.yellow('ℹ️ Cargando Tarea 1/3...'));
  console.warn(chalk.yellow('ℹ️ Cargando Tarea 2/3...'));
  console.warn(chalk.yellow('ℹ️ Cargando Tarea 3/3...'));
  simularError()
}
function finalizacion() {
  console.info(chalk.green('TAREAS COMPLETADAS'));
}
  inicio();
  proceso();
  finalizacion();
}

saludar("Equipo B");
saludar("Equipo A");
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Prueba de función

mostrarEstado();

