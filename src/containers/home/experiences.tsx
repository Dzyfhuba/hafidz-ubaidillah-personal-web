import { getDictionary } from '@/get-dictionary'
import supabase from '@/helpers/supabase'
import { Locale } from '@/i18n-config'
import styles from './experiences.module.css'
import Image from 'next/image'
import moment from 'moment'

type Props = {
  lang: Locale
}

const Experiences = async (props: Props) => {
  const t = await getDictionary(props.lang)
  const { data } = await supabase.from('experiences').select('*')

  const getDateDifferenceYearAndMonth = (date1: string, date2: string) => {
    const moment1 = moment(date1)
    const moment2 = moment(date2)
    const years = moment2.diff(moment1, 'years')
    const months = moment2.diff(moment1, 'months') - (years * 12)
  
    return `${years} ${years > 1 ? t.years : t.year}, ${months} ${months > 1 ? t.months : t.month}`
  }

  return (
    <section>
      <h3 className={styles.h3}>{t.experiences}</h3>
      <div className={styles.container}>
        {
          data?.map(item => (
            <div key={item.id} className={styles.item}>
              <Image src={item.affiliate_logo || ''} alt={item.affiliate || ''} width={56} height={56} />
              <h4>{item.position}</h4>
              <p>{item.affiliate}</p>
              <p>
                {`${moment(item.date_start).format('MMM YYYY')} - ${moment(item.date_end).format('MMM YYYY')}, `}
                <span>{getDateDifferenceYearAndMonth(item.date_start || '', item.date_end || '')}</span>
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}


export default Experiences