// postcss.config.js
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);
const { purge } = require('tailwindcss/stubs/defaultConfig.stub');

const purgecss =postcssPurgecss({
    //Path to template 
    content: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g),  
    whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/],

});

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
  ],
};