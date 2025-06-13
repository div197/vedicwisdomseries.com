import { IconType } from 'react-icons';

export interface ServiceSocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

export interface ServiceInfo {
  name: string;
  description: string;
  slug: string;
  href: string;
  socialLinks?: ServiceSocialLink[];
} 