import MainDash from './MainDash/MainDash'
import ProfileBar from './Navbar'
import RightSide from './RigtSide/RightSide'
import Sidebar from './Sidebar'
const First = () => {
  return (
    <div >
    <div style={{display:'flex'}}>
        <div style={{marginLeft:'0px',position:'fixed'}}>
        <Sidebar></Sidebar>
        </div>
        <div style={{marginLeft:'22%'}}>
        <ProfileBar></ProfileBar>
        <MainDash></MainDash>
        <br />
        <RightSide></RightSide>
        </div>
    </div>
    </div>
  )
}

export default First