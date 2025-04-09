export type NewT = {
  content_blocks: ContentBlockT[];
  created_at: string;
  id: number;
  photo_path: string;
  publication_date: string;
  subtitle: string;
  title: string;
};

export type ContentBlockT = {
  content: string | undefined;
  type: 'text' | 'image';
  images: { content: string }[] | undefined;
};


export type DesignSettingsT = {
  logo_path: string;
  favicon_path: string;
  contacts_enabled: boolean;
  privacy_policy_enabled: boolean;
  privacy_policy_text: string;
  address: string;
  phones: string[];
  email: string;
  working_hours: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
  viber: string;
  company_info: string;
  bank_details: string;
}
