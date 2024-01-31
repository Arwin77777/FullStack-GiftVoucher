
import ProfileBar from './Navbar'
import Sidebar from './Sidebar'
import ProfilePage from './User/User'

const Second = () => {
  return (
    <div >
    <div style={{display:'flex'}}>
        <div style={{marginLeft:'0px',position:'fixed'}}>
        <Sidebar></Sidebar>
        </div>
        <div style={{marginLeft:'30%'}}>
        <ProfileBar></ProfileBar>
            <ProfilePage></ProfilePage>

        </div>
    </div>
    </div>
  )
}

export default Second