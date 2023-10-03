export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      APP_NAME: string;
      APP_ENV: 'local' | 'production';
      NEXT_PUBLIC_APP_NAME: string;

      SUPABASE_PROJECT_REF: string;
      SUPABASE_SERVICE_KEY: string;
    }
  }
}
