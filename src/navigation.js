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
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sjmsom_iit_bombay/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/SJMSOM/' },
    { ariaLabel: 'Spotify', icon: 'tabler:brand-spotify', href: 'https://open.spotify.com/show/1MxVe0ZjXoRtEHnaYbOyJF' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/school/iit-bombay---shailesh-j.-mehta-school-of-management/?originalSubdomain=in' },
  ],
};
