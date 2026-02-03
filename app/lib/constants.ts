export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Community', href: '#community' },
  { name: 'Events', href: '#events' },
  { name: 'Connect', href: '#connect' },
];

export const STATS = [
  { label: 'Members', value: '1+' },
  { label: 'Events Held', value: '0' },
  { label: 'Technologies', value: 'All' },
];

export const TECH_STACK = [
  { category: 'Languages', items: ['JavaScript/TypeScript', 'Python', 'Go'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Vercel'] },
  { category: 'DevOps', items: ['Docker', 'Terraform', 'Bicep', 'CI/CD'] },
  { category: 'Mobile & AI', items: ['React Native', 'iOS/Android', 'Machine Learning', 'LLMs', 'OpenAI'] },
];

export const SOCIAL_LINKS = {
  discord: process.env.NEXT_PUBLIC_DISCORD_INVITE || '#',
  luma: process.env.NEXT_PUBLIC_LUMA_CALENDAR_ID ? `https://lu.ma/${process.env.NEXT_PUBLIC_LUMA_CALENDAR_ID}` : 'https://lu.ma/dfw-cloud-devs', // Fallback or env var
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/dfw-cloud-devs',
  twitter: process.env.NEXT_PUBLIC_X_URL || '#',
};

export const SITE_CONFIG = {
  name: 'DFW Cloud Devs',
  description: 'Where DFW connects & grows. Join 1+ developers building the future of cloud computing in Texas.',
  year: new Date().getFullYear(),
};
