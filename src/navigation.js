import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'SOMCast',
      href: '/category/somcast',
    },
    {
      text: 'SOMClips',
      href: '/category/somclips',
    },
    {
      text: 'SOMShots',
      href: '/somshots',
    },
    {
      text: 'SOMInks',
      href: '/category/sominks',
    },
    {
      text: 'SOMEngage',
      href: '/comingsoon'
    }
  ],
  actions: [{ text: 'Placement Report', href: 'https://www.som.iitb.ac.in/wp-content/uploads/2016/07/Final-Placement-Report-2021-23.pdf', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:brand-spotify', href: getAsset('/rss.xml') },
  ],
};
