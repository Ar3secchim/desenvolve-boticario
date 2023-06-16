function timeForSeg(time: string){
  const [ hours ="0", min ="0", seg ="0" ] = time.split(":")
  
  const hoursInSeg = Number(hours) * 3600
  const minInSeg = Number(min) * 60

   return hoursInSeg + minInSeg + Number(seg)
} 

export default timeForSeg