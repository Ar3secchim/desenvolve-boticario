import Style from "./clock.module.scss"

function Clock(){
  return(
    <>
      <span className={Style.clockNumber}>0</span>
      <span className={Style.clockNumber}>0</span>
      <span className={Style.clockDivision}>:</span>
      <span className={Style.clockNumber}>0</span>
      <span className={Style.clockNumber}>0</span>
    </>
  )
}

export default Clock