import { useTranslation } from 'react-i18next'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import A from './components/A'
import B from './components/B'
import ReactLogo from '~icons/logos/react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/locale'
import DarkToggle from '@/components/common/DarkToggle'

function Login() {
  const { t } = useTranslation()
  const { setLang } = useLocale()
  return (
    <div>
      {t('Welcome to React')}
      <div className="h-screen">
        Login works!123
        <div>
          <div className="wh-5 i-carbon-close text-red"></div>
          <DarkToggle />
          <MoonIcon className="wh-5 text-red" />
          <SunIcon className="wh-5 text-red" />
          <ReactLogo className="wh-5 text-red" />
        </div>
        <button type="button" className="border-1 border-border" onClick={() => setLang('zh')}>changeLang</button>
        <div className="my-10 border-1"></div>
        <B></B>
        <A></A>
        <Button>123</Button>
        {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border rounded-md"
        /> */}
        <div className="bg-ring animate-accordion-down">1</div>
        <div className="flex-center md:text-md h-20 rounded-2xl text-shadow shadow-2xl backdrop-blur-xl md:(text-pink)">123</div>
        <div className="h-40 bg-pink/10 text-center text-2xl text-red leading-5 backdrop-blur-lg">
          This text is red
        </div>
      </div>
    </div>
  )
}

export default Login
