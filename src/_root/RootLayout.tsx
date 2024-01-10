import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import { Outlet} from 'react-router-dom'
import BottomBar from '@/components/shared/BottomBar'

function RootLayout() {
  return (
    <div className='w-full md:flex'>
      <Topbar />
      <LeftSidebar/>
      <section className='flex flex-1 h-full'>
        <Outlet/>
      </section>
      <BottomBar />
    </div>
  )
}

export default RootLayout