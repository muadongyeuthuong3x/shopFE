export enum HeaderPathEnum {
  HOME = '/',
  CONTACT_US = '/contact-us',
  ABOUT_US = '/about-us',
  BLOG = '/blog',
}

export const HeaderNav = [
  {
    id: 2,
    label: 'tin tức',
    path: HeaderPathEnum.BLOG,
  },
  {
    id: 3,
    label: 'giới thiệu',
    path: HeaderPathEnum.ABOUT_US,
  },
  {
    id: 4,
    label: 'liên hệ',
    path: HeaderPathEnum.CONTACT_US,
  },
];
