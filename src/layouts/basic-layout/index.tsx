import { Outlet } from 'react-router-dom'

function BasicLayout() {
  return (
    <div>
      <h1>Basic Layout</h1>
      <Outlet />
    </div>
  )
}

export default BasicLayout
