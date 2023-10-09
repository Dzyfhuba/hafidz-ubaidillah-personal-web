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
      certificates: {
        Row: {
          icon: string | null
          id: number
          label: string | null
          link: string | null
        }
        Insert: {
          icon?: string | null
          id?: number
          label?: string | null
          link?: string | null
        }
        Update: {
          icon?: string | null
          id?: number
          label?: string | null
          link?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          id: number
          label: string | null
          text: string | null
        }
        Insert: {
          id?: number
          label?: string | null
          text?: string | null
        }
        Update: {
          id?: number
          label?: string | null
          text?: string | null
        }
        Relationships: []
      }
      experiences: {
        Row: {
          affiliate: string | null
          affiliate_logo: string | null
          date_end: string | null
          date_start: string | null
          id: number
          position: string | null
        }
        Insert: {
          affiliate?: string | null
          affiliate_logo?: string | null
          date_end?: string | null
          date_start?: string | null
          id?: number
          position?: string | null
        }
        Update: {
          affiliate?: string | null
          affiliate_logo?: string | null
          date_end?: string | null
          date_start?: string | null
          id?: number
          position?: string | null
        }
        Relationships: []
      }
      platforms: {
        Row: {
          icon: string | null
          id: number
          is_active: boolean | null
          platform: string | null
        }
        Insert: {
          icon?: string | null
          id?: number
          is_active?: boolean | null
          platform?: string | null
        }
        Update: {
          icon?: string | null
          id?: number
          is_active?: boolean | null
          platform?: string | null
        }
        Relationships: []
      }
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
      project_platforms: {
        Row: {
          id: number
          link: string | null
          platform_id: number | null
          project_id: number | null
        }
        Insert: {
          id?: number
          link?: string | null
          platform_id?: number | null
          project_id?: number | null
        }
        Update: {
          id?: number
          link?: string | null
          platform_id?: number | null
          project_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_platforms_platform_id_fkey"
            columns: ["platform_id"]
            referencedRelation: "platforms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_platforms_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      project_tech_stacks: {
        Row: {
          id: number
          project_id: number | null
          tech_stack_id: number | null
        }
        Insert: {
          id?: number
          project_id?: number | null
          tech_stack_id?: number | null
        }
        Update: {
          id?: number
          project_id?: number | null
          tech_stack_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_tech_stacks_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_tech_stacks_tech_stack_id_fkey"
            columns: ["tech_stack_id"]
            referencedRelation: "tech_stacks"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          id: number
          name: string | null
          order: number | null
          platforms: Json | null
          status: string | null
          tech_stack: Json | null
        }
        Insert: {
          id?: number
          name?: string | null
          order?: number | null
          platforms?: Json | null
          status?: string | null
          tech_stack?: Json | null
        }
        Update: {
          id?: number
          name?: string | null
          order?: number | null
          platforms?: Json | null
          status?: string | null
          tech_stack?: Json | null
        }
        Relationships: []
      }
      setting: {
        Row: {
          id: number
          updated_at: string | null
        }
        Insert: {
          id?: number
          updated_at?: string | null
        }
        Update: {
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      social_medias: {
        Row: {
          icon_source: string | null
          id: number
          label: string | null
          link: string | null
        }
        Insert: {
          icon_source?: string | null
          id?: number
          label?: string | null
          link?: string | null
        }
        Update: {
          icon_source?: string | null
          id?: number
          label?: string | null
          link?: string | null
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
      tech_stack_categories: {
        Row: {
          id: number
          order: number | null
          text: string | null
        }
        Insert: {
          id?: number
          order?: number | null
          text?: string | null
        }
        Update: {
          id?: number
          order?: number | null
          text?: string | null
        }
        Relationships: []
      }
      tech_stacks: {
        Row: {
          category_id: number | null
          icon: string | null
          icon_source: string | null
          id: number
          text: string | null
        }
        Insert: {
          category_id?: number | null
          icon?: string | null
          icon_source?: string | null
          id?: number
          text?: string | null
        }
        Update: {
          category_id?: number | null
          icon?: string | null
          icon_source?: string | null
          id?: number
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tech_stacks_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "tech_stack_categories"
            referencedColumns: ["id"]
          }
        ]
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
