import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Docs',
      href: '/docs/',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/cc-deck/cc-deck',
      target: '_blank',
    },
  ],
  actions: [
    {
      text: 'Get Started',
      href: getPermalink('/#get-started'),
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Project',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Documentation', href: '/docs/' },
        { text: 'Getting Started', href: getPermalink('/#get-started') },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/cc-deck/cc-deck' },
        { text: 'Issues', href: 'https://github.com/cc-deck/cc-deck/issues' },
        { text: 'Discussions', href: 'https://github.com/cc-deck/cc-deck/discussions' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Apache 2.0 License', href: 'https://github.com/cc-deck/cc-deck/blob/main/LICENSE' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/cc-deck/cc-deck' },
  ],
  footNote: `
    cc-deck | The TweetDeck for Claude Code. Created with <a class="text-accent underline" href="https://github.com/rhuss/cc-sdd">Spec-Driven Development</a> by Claude, assisted by <a class="text-accent underline" href="https://github.com/rhuss">Roland Hu&szlig;</a>
  `,
};
