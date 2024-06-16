import { Button } from "@/components/ui/button"
import {  useGlobalStore} from "@/store/modules/global"
function DarkToggle() {
  const themeMode = useGlobalStore((state) => state.themeMode)
  const toggleTheme = useGlobalStore((state) => state.toggleTheme)

  return ( 
        <Button variant="ghost" onClick={toggleTheme}>
          {themeMode === 'light' ? (<div className='i-ri-moon-line'></div>) :(<div className='i-ri-sun-line'></div>)}
        </Button>
   );
}

export default DarkToggle;
// function Aa() {
//   return ( <div>Aa</div> );
// }

// export default Aa;
