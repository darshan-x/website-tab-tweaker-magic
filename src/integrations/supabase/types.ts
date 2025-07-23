export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      build_logs: {
        Row: {
          commit_hash: string | null
          completed_at: string | null
          created_at: string | null
          duration: number | null
          error_message: string | null
          id: string
          site_id: string
          started_at: string | null
          status: string
        }
        Insert: {
          commit_hash?: string | null
          completed_at?: string | null
          created_at?: string | null
          duration?: number | null
          error_message?: string | null
          id?: string
          site_id: string
          started_at?: string | null
          status?: string
        }
        Update: {
          commit_hash?: string | null
          completed_at?: string | null
          created_at?: string | null
          duration?: number | null
          error_message?: string | null
          id?: string
          site_id?: string
          started_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "build_logs_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "subsites"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          company: string | null
          created_at: string | null
          email: string | null
          id: string
          message: string | null
          name: string | null
          phone: string | null
          source: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          source?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          source?: string | null
        }
        Relationships: []
      }
      nav_links: {
        Row: {
          href: string
          id: string
          label: string
          order_int: number | null
        }
        Insert: {
          href: string
          id?: string
          label: string
          order_int?: number | null
        }
        Update: {
          href?: string
          id?: string
          label?: string
          order_int?: number | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          created_at: string | null
          email: string
          id: string
          metadata: Json | null
          name: string | null
          source: string | null
          status: string | null
          subscribed_at: string | null
          unsubscribed_at: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          metadata?: Json | null
          name?: string | null
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          metadata?: Json | null
          name?: string | null
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pages: {
        Row: {
          author: string | null
          body_md: string | null
          cover_url: string | null
          cta_buttons: Json | null
          departments: Json | null
          description: string | null
          features: Json | null
          hero_md: string | null
          id: string
          iframe_path: string | null
          layout: string | null
          process: Json | null
          published: boolean | null
          published_at: string | null
          resource_url: string | null
          site_scope: string
          slug: string | null
          statistics: Json | null
          tags_body: string | null
          tags_footer: string | null
          tags_head: string | null
          template_data: Json | null
          title: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          body_md?: string | null
          cover_url?: string | null
          cta_buttons?: Json | null
          departments?: Json | null
          description?: string | null
          features?: Json | null
          hero_md?: string | null
          id?: string
          iframe_path?: string | null
          layout?: string | null
          process?: Json | null
          published?: boolean | null
          published_at?: string | null
          resource_url?: string | null
          site_scope?: string
          slug?: string | null
          statistics?: Json | null
          tags_body?: string | null
          tags_footer?: string | null
          tags_head?: string | null
          template_data?: Json | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          body_md?: string | null
          cover_url?: string | null
          cta_buttons?: Json | null
          departments?: Json | null
          description?: string | null
          features?: Json | null
          hero_md?: string | null
          id?: string
          iframe_path?: string | null
          layout?: string | null
          process?: Json | null
          published?: boolean | null
          published_at?: string | null
          resource_url?: string | null
          site_scope?: string
          slug?: string | null
          statistics?: Json | null
          tags_body?: string | null
          tags_footer?: string | null
          tags_head?: string | null
          template_data?: Json | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          category: string | null
          description: string | null
          key: string
          updated_at: string | null
          value: Json
        }
        Insert: {
          category?: string | null
          description?: string | null
          key: string
          updated_at?: string | null
          value?: Json
        }
        Update: {
          category?: string | null
          description?: string | null
          key?: string
          updated_at?: string | null
          value?: Json
        }
        Relationships: []
      }
      subsites: {
        Row: {
          build_hook: string
          build_status: string | null
          config_json: Json | null
          created_at: string | null
          created_by: string | null
          domain: string
          environment: string | null
          full_domain: string | null
          id: string
          is_active: boolean | null
          name: string
          netlify_deploy_url: string | null
          netlify_site_id: string | null
          subdomain_name: string | null
          template_type: string | null
          updated_at: string | null
        }
        Insert: {
          build_hook: string
          build_status?: string | null
          config_json?: Json | null
          created_at?: string | null
          created_by?: string | null
          domain: string
          environment?: string | null
          full_domain?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          netlify_deploy_url?: string | null
          netlify_site_id?: string | null
          subdomain_name?: string | null
          template_type?: string | null
          updated_at?: string | null
        }
        Update: {
          build_hook?: string
          build_status?: string | null
          config_json?: Json | null
          created_at?: string | null
          created_by?: string | null
          domain?: string
          environment?: string | null
          full_domain?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          netlify_deploy_url?: string | null
          netlify_site_id?: string | null
          subdomain_name?: string | null
          template_type?: string | null
          updated_at?: string | null
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
