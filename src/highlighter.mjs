import { createHighlighter } from 'shiki';
import tokyoNight from 'shiki/themes/tokyo-night.mjs';

const highlighter = createHighlighter({
	themes: [tokyoNight],
	langs: ['ts', 'js', 'json', 'css', 'html', 'md', 'mdx'],
});

export default highlighter;