// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://odbofshpuoqlksbjuyfl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kYm9mc2hwdW9xbGtzYmp1eWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjgzMDAsImV4cCI6MjA2NzUwNDMwMH0.F2kISFpvolfgxQgg3n3LqavYczXb7OL-GAPrNDXwBkw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});