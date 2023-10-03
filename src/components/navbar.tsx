import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { Select } from './navbar/select'

type Props = {
  lang: Locale
  // params Locale
  // dictionary: ReturnType<typeof getDictionary>.
}

const Navbar = async (props: Props) => {
  console.log(props.lang)
  const dictionary = await getDictionary(props.lang)

  return (
    <nav className='bg-orange-600 flex items-center px-2 justify-between'>
      <div className="drawer w-min">
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
            {/* Sidebar content here */}
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
              <label htmlFor="language" className='inline'>{dictionary.language}: </label>
              <Select lang={props.lang} />
            </li>
          </ul>
        </div>
      </div>

      <Link href="/">
        <h1 className='text-white font-black'>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      </Link>
    </nav>
  )
}

export default Navbar

