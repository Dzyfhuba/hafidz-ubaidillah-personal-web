import { Database } from '@/types/supabase'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient<Database>('https://bucutjynqxqvjvbsqedc.supabase.co', process.env.SUPABASE_SERVICE_KEY)

export default supabase