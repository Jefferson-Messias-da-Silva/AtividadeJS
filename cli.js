import chalk from "chalk";
import pegaArquivo from "./Index.js";
import validaURL from "./http-validacao.js";
const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === "validar") {
        console.log(chalk.yellow("lista de validados"), await validaURL(resultado));
    }
    else {
        console.log(chalk.yellow("lista de links"), resultado);
    }
}

processaTexto(caminho);