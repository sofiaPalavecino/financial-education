import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://onhbqjxxzhdbtxhwuypa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uaGJxanh4emhkYnR4aHd1eXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMTg4MzcsImV4cCI6MjA1ODc5NDgzN30._V0zlzIPYeH8_IuV86YYItJecF194X8BpUucsoHBBIM';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase }