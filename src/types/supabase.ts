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
          long_description_en: string | null
          long_description_id: string | null
          short_description_en: string | null
          short_description_id: string | null
          username: string | null
          work: string | null
        }
        Insert: {
          address?: string | null
          affiliation?: string | null
          fullname?: string | null
          id?: number
          long_description_en?: string | null
          long_description_id?: string | null
          short_description_en?: string | null
          short_description_id?: string | null
          username?: string | null
          work?: string | null
        }
        Update: {
          address?: string | null
          affiliation?: string | null
          fullname?: string | null
          id?: number
          long_description_en?: string | null
          long_description_id?: string | null
          short_description_en?: string | null
          short_description_id?: string | null
          username?: string | null
          work?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          icon: string | null
          id: number
          text: string | null
        }
        Insert: {
          icon?: string | null
          id?: number
          text?: string | null
        }
        Update: {
          icon?: string | null
          id?: number
          text?: string | null
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
