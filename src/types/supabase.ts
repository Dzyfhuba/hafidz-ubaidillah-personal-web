export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          address: string | null
          affiliation: string | null
          fullname: string | null
          id: number
          long_description: string | null
          short_description: string | null
          username: string | null
          work: string | null
        }
        Insert: {
          address?: string | null
          affiliation?: string | null
          fullname?: string | null
          id?: number
          long_description?: string | null
          short_description?: string | null
          username?: string | null
          work?: string | null
        }
        Update: {
          address?: string | null
          affiliation?: string | null
          fullname?: string | null
          id?: number
          long_description?: string | null
          short_description?: string | null
          username?: string | null
          work?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
