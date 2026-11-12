export const environment = {
  production: false,
  // Point local UI at the Hostinger SIT API (or a local PHP server if you run one).
  apiBaseUrl: 'https://vibhu.pro/sit/portfolio/api/v1',
  siteUrl: 'https://vibhu.pro',
  // Local + SIT builds stay noindex so staging never competes with live WordPress.
  allowIndexing: false,
};
