// Single source of truth for routes. Collection in plural (/apps),
// item in singular (/app/:slug). Change here to re-map everywhere.
export const paths = {
  home: '/',
  aboutMe: '/about-me',
  blog: '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
  log: '/build-in-public',
  logPost: (slug: string) => `/build-in-public/${slug}`,
  apps: '/apps',
  app: (slug: string) => `/app/${slug}`,
  appLanding: (slug: string) => `/app/${slug}/landing`,
  appChangelog: (slug: string) => `/app/${slug}/changelog`,
  appTerms: (slug: string) => `/app/${slug}/terms`,
  appPrivacy: (slug: string) => `/app/${slug}/privacy`,
  appDeleteAccount: (slug: string) => `/app/${slug}/delete-account`,
} as const;
