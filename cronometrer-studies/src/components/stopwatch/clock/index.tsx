import Style from "./clock.module.scss"

interface Props {
  time: number| undefined
}

function Clock({time = 0} : Props){
  
  const min = Math.floor( time / 60)
  const seg = time % 60 
  
  const [minDez, minUni ] = String(min).padStart(2, '0')
  const [segDez, segUni ] = String(seg).padStart(2, '0')
  
  return(
    <>
      <span className={Style.clockNumber}>{minDez}</span>
      <span className={Style.clockNumber}>{minUni}</span>
      <span className={Style.clockDivision}>:</span>
      <span className={Style.clockNumber}>{segDez}</span>
      <span className={Style.clockNumber}>{segUni}</span>
    </>
  )
}

export default Clock