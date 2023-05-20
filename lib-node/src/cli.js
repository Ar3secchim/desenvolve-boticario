#!/usr/bin/env node
import chalk from "chalk"
import fs from "fs"
import fileExists from "./index.js"
import listValidation from "./https-validation.js"
 
const arg = process.argv

async function printResults(tagValidation, results, index= "") {

  if(tagValidation){
    console.log(
      chalk.yellow('list validation '), 
      chalk.green.bgWhite( index ),
      await listValidation(results)
    )
  }else{
    console.log(
      chalk.yellow('list links '), 
      chalk.green.bgWhite( index ),
      results
    )
  }
}

async function processText (arg){
  const path = arg[2]
  const tagValidation = arg[3] === "--valida"

  try{
    if(fs.lstatSync(path).isFile()){
      const list = await fileExists(path)
      printResults(tagValidation, list)
  
    }else if(fs.lstatSync(path).isDirectory()){
      const files = await fs.promises.readdir(path)
      
      files.forEach(async file => {
        const links = await fileExists(`${path}/${file}`)
        printResults(tagValidation, links, file) 
      })
  
    }else{
      console.log(chalk.red("Arquivo não encontrado"))
    }
  }catch(err){
    throw new Error(chalk.red(`Directório não encontrado: ${err.code}`))
    return
  }
}

processText(arg)