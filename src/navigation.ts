export const headerData = {
  links: [
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
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Project',
      links: [
        { text: 'Documentation', href: '/docs/' },
        { text: 'GitHub', href: 'https://github.com/cc-deck/cc-deck' },
      ],
    },
    {
      title: 'Legal',
      links: [{ text: 'Apache 2.0 License', href: 'https://github.com/cc-deck/cc-deck/blob/main/LICENSE' }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/cc-deck/cc-deck' }],
  footNote: `
    cc-deck | The TweetDeck for Claude Code. Created with <a class="text-accent underline" href="https://github.com/rhuss/cc-sdd">Spec-Driven Development</a> by Claude, assisted by <a class="text-accent underline" href="https://github.com/rhuss">Roland Hu&szlig;</a>
  `,
};
