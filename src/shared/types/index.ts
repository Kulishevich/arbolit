export type NewT = {
  content_blocks: ContentBlockT[];
  created_at: string;
  id: number;
  photo_path: string | null;
  background_photo_path: string | null;
  publication_date: string;
  subtitle: string;
  title: string;
  tags: string[];
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
};

export type ReviewT = {
  id: number;
  title: string;
  description: string;
  photo_path: string;
};

export type ProductT = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  discount: string;
  sku: string;
  specifications: SpecificationT[];
  is_active: boolean;
  order: number;
  is_popular: boolean;
  created_at: string;
  updated_at: string;
  photo_path: string;
};

export type MetadataT = {
  id: number;
  name: string;
  title: string;
  description: string;
  keywords: string;
  og_title: string;
  og_description: string;
  created_at: string;
  updated_at: string;
};

export type SettingT = {
  logo_path: string;
  favicon_path: string;
  contacts_enabled: true;
  privacy_policy_enabled: true;
  privacy_policy_text: string;
  address: string;
  phones: string[];
  email: string;
  working_hours: string | null;
  instagram: string;
  telegram: string;
  whatsapp: string;
  viber: string;
  company_info: string;
  bank_details: string | null;
};

export type StatusBlockT = {
  news_section_enabled: true;
  gallery_section_enabled: true;
  reviews_section_enabled: true;
};

export type OurAdvantagesT = {
  blocks: { title: string | null }[];
  enabled: boolean;
  main_text: string | null;
};

export type MaterialAdvantagesT = {
  arbolit_price: string | null;
  advantages: AdvantageT[];
};

export type AdvantageT = {
  created_at: string;
  id: number;
  material: string;
  property: string;
  updated_at: string;
  value: string;
};

export type SpecificationT = {
  id: number;
  name: string;
  slug: string;
  type: string;
  unit: string | null;
  order: number;
  filterable: boolean;
  created_at: string;
  updated_at: string;
  pivot: {
    product_id: number;
    specification_id: number;
    value: string;
    created_at: string;
    updated_at: string;
  };
};

export type ImageResponseT = {
  id: number;
  title: string;
  photo_path: string;
};

export type OrderT = {
  name: string;
  phone: string;
  comment: string;
};

export type SeoTextT = {
  id: number;
  page: string;
  content: string;
};
