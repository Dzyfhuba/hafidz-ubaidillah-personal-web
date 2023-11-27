import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { BiMenuAltLeft } from 'react-icons/bi'
import { MdClose, MdTranslate } from 'react-icons/md'
import { Select } from './navbar/select'
import '@/components/navbar/style.css'
import NavLink from './nav-link'

type Props = {
  lang: Locale
  // params Locale
  // dictionary: ReturnType<typeof getDictionary>.
}

const Navbar = async (props: Props) => {
  const dictionary = await getDictionary(props.lang)

  return (
    <nav className='bg-base-100 shadow-xl flex items-center px-2 justify-between h-12 sticky top-0'>
      <div className="drawer w-min sm:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button btn-square">
            <BiMenuAltLeft size={32} />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full sm:w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <label className='btn self-end' htmlFor='my-drawer'>
                <MdClose size={24} />
              </label>
            </li>
            <li>
              <NavLink href={'/'} className='' inputId='my-drawer'>
                {dictionary.home}
              </NavLink>
            </li>
            <li>
              <NavLink href={'/projects'} inputId='my-drawer'>
                {dictionary.projects}
              </NavLink>
            </li>
            <li className='flex-row'>
              <label className='inline'>{dictionary.language}: <Select lang={props.lang} /></label>
            </li>
          </ul>
        </div>
      </div>

      <div className='sm:max-w-3xl flex mx-auto w-full justify-end sm:justify-between px-4 sm:px-2'>
        <NavLink href="/" className='ml-auto sm:mr-auto sm:ml-4'>
          <h1 className='dark:text-white font-black text-xl'>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
        </NavLink>
        <div className='hidden sm:flex dark:text-white h-full sm:items-center'>
          <NavLink href={'/'} className='px-5 h-full flex items-center' inputId='my-drawer'>
            {dictionary.home}
          </NavLink>
          <NavLink href={'/projects'} className='px-5 h-full flex items-center' inputId='my-drawer'>
            {dictionary.projects}
          </NavLink>
          <div className='flex sm-nav-lang'>
            <label className='flex items-center'><MdTranslate /><Select lang={props.lang} /></label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

