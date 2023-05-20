import fs from "fs"
import chalk from "chalk"

function extractLinks(text) {
  const regex = /\[([^[\}]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
  const matches = [...text.matchAll(regex)]

  const results = matches.map(match => ({[match[1]]: match[2]}))
  
  return results.length === 0 ? "Nenhum link encontrado" : results
}

function tryError(err) {
  throw new Error(chalk.red(`Ops algo acontence: ${err.code}`))
}

async function fileExists(path) {
  try {
    const txt = await fs.promises.readFile(path, "utf8")
    return extractLinks(txt)
  }catch(err) {
    tryError(err)
  }
}

export default fileExists