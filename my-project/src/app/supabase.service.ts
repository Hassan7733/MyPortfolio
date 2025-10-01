import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://gbhjvtiukjvbmzrpwpgl.supabase.co',   // 🔹 Replace with your Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiaGp2dGl1a2p2Ym16cnB3cGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NzQ1MTcsImV4cCI6MjA3NDU1MDUxN30.f-ohw19bu1T6bZDJjOc0oN-QpVHHHrHGSt3hMQTfzEM'                         // 🔹 Replace with your public anon key
    );
  }

  // Function to get only design skills
  async getDesignSkills() {
    const { data, error } = await this.supabase
      .from('Skills')
      .select('*')
      .eq('type', 'design'); // 🔹 Filter by type = design

    if (error) {
      console.error('Error fetching design skills:', error.message);
      return [];
    }
    return data;
  }
  async getTechnicalsSkills() {
    const { data, error } = await this.supabase
      .from('Skills')
      .select('*')
      .eq('type', 'technical'); // 🔹 Filter by type = design

    if (error) {
      console.error('Error fetching design skills:', error.message);
      return [];
    }
    return data;
  }
  async getExperiences() {
    const { data, error } = await this.supabase
      .from('Experiences')
      .select('*')

    if (error) {
      console.error('Error fetching Experiences:', error.message);
      return [];
    }
    return data;
  }
}
