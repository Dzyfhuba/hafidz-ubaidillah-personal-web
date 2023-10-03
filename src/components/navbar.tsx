import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'
import { MdClose, MdTranslate } from 'react-icons/md'
import { Select } from './navbar/select'
import '@/components/navbar/style.css'

type Props = {
  lang: Locale
  // params Locale
  // dictionary: ReturnType<typeof getDictionary>.
}

const Navbar = async (props: Props) => {
  const dictionary = await getDictionary(props.lang)

  return (
    <nav className='bg-orange-600 flex items-center px-2 justify-between h-12'>
      <div className="drawer w-min sm:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button btn-square">
            <BiMenuAltLeft size={32} color='white' />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full sm:w-80 min-h-full bg-base-200 text-base-content">
            <label className='self-end btn' htmlFor='my-drawer'>
              <MdClose size={24} />
            </label>
            <li>
              <Link href={'/'}>
                {dictionary.home}
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                {dictionary.projects}
              </Link>
            </li>
            <li className='flex-row'>
              <label className='inline'>{dictionary.language}: <Select lang={props.lang} /></label>
            </li>
          </ul>
        </div>
      </div>

      <Link href="/">
        <h1 className='text-white font-black'>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      </Link>

      <div className='hidden sm:flex text-white h-full sm:items-center'>
        <Link href={'/'} className='px-5 h-full flex items-center'>
          {dictionary.home}
        </Link>
        <Link href={'/'} className='px-5 h-full flex items-center'>
          {dictionary.projects}
        </Link>
        <div className='flex sm-nav-lang'>
          <label className='flex items-center'><MdTranslate /><Select lang={props.lang} /></label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

