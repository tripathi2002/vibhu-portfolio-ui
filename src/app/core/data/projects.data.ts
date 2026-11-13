export interface ShowcaseProject {
  title: string;
  image: string;
  href: string;
  alt: string;
}

export const LATEST_WORK: ShowcaseProject[] = [
  {
    title: 'File Upload',
    image: 'images/project-file-upload.png',
    href: 'https://vibhu.pro/file-app/',
    alt: 'Screenshot of the File Upload project',
  },
  {
    title: 'Notepad',
    image: 'images/project-notepad.png',
    href: 'https://notepad.vibhu.pro',
    alt: 'Screenshot of the Notepad project',
  },
];

export const PORTFOLIO_GALLERY: ShowcaseProject[] = [...LATEST_WORK];
