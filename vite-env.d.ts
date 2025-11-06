/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_AIRTABLE_PAT: string;
  readonly NEXT_PUBLIC_AIRTABLE_BASE_ID: string;
  readonly NEXT_PUBLIC_AIRTABLE_TABLE_NAME?: string; // Optional if you want to allow it to default
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
