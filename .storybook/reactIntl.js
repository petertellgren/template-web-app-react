const locales = ['en', 'sv'];

const messages = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]: require(`../compiled-locale/${lang}.json`),
}), {});

const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: 'en',
  locales,
  messages,
  formats,
};
