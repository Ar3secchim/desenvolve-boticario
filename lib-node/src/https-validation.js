import chalk from "chalk"

function extractLinks (arrLinks){
  return arrLinks.map(objectLink => Object.values(objectLink).join())
}

async function checkValidation (listUrls){
    const arrStatus = Promise.all(
      listUrls.map(async url => {
        try {
          const res = await fetch(url)
          return res.status
        }catch(err){
          return errorUrl(err)
        }
      })
    )
    return arrStatus  
}

function errorUrl(err){
  if(err.cause.code === "ENOTFOUND"){
    return 'URL não encontrada'
  }else{
    return 'Ocorreu algum erro'
  }
}


export default async function listValidation (listLinks){
  const links =  extractLinks(listLinks)
  const status = await checkValidation(links)

  return listLinks.map( (objectLink, index) => {
    return {
      ...objectLink,
      status: status[index]
    }
  })
}