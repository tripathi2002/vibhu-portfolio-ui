export interface ShowcaseProject {
  title: string;
  image: string;
  href: string;
  alt: string;
}

export const LATEST_WORK: ShowcaseProject[] = [
  {
    title: 'File UPLOAD',
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

export const PORTFOLIO_GALLERY: { src: string; alt: string }[] = [
  { src: 'images/portfolio-01.jpg', alt: 'Portfolio sample 1' },
  { src: 'images/portfolio-02.jpg', alt: 'Portfolio sample 2' },
  { src: 'images/portfolio-03.jpg', alt: 'Portfolio sample 3' },
  { src: 'images/portfolio-04.jpg', alt: 'Portfolio sample 4' },
  { src: 'images/portfolio-05.jpg', alt: 'Portfolio sample 5' },
  { src: 'images/portfolio-06.jpg', alt: 'Portfolio sample 6' },
  { src: 'images/portfolio-07.jpg', alt: 'Portfolio sample 7' },
  { src: 'images/portfolio-08.jpg', alt: 'Portfolio sample 8' },
  { src: 'images/portfolio-09.jpg', alt: 'Portfolio sample 9' },
];
