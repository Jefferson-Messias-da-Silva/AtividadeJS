import chalk from "chalk";
import fs from "fs";
import validaURL from "./http-validacao.js";

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = [];

    let temp;
    while ((temp = regex.exec(texto)) != null) {
        arrayResultado.push({ [temp[1]]: [temp[2]] });
    }
    return arrayResultado.length === 0 ? "não há links":arrayResultado;
    //const linksExtraidos = texto.match(regex);
    //const linksExtraidos = regex.exec(texto);
    //console.log(linksExtraidos);
    return arrayResultado
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = "utf-8";
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return(extraiLinks(texto));
    }
    catch (erro) {
        trataErro(erro);
    }
}

//pegaArquivo('./Arquivos/texto.md');

export default pegaArquivo;

/*function pegaArquivo(caminhoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}*/

/*function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro))
}*/

/*async function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.blueBright(texto));
}*/