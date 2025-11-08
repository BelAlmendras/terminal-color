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
saludar("Equipo B");
simularError()