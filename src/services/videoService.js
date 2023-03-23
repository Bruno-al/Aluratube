import { createClient } from '@supabase/supabase-js'
const PROJECT_URL = "https://hleiljhipwgudbmyvnbw.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZWlsamhpcHdndWRibXl2bmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1MDA5MzYsImV4cCI6MTk5NTA3NjkzNn0.ULaYbYPpkQ3d9bZnp3wmasz4RKBYn4upa4Od0bpK68M"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}