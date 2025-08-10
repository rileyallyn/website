import { createHighlighter } from 'shiki';
import tokyoNight from 'shiki/themes/tokyo-night.mjs';
import catppuccin from 'shiki/themes/catppuccin-latte.mjs';
const highlighter = createHighlighter({
	themes: [tokyoNight, catppuccin],
	langs: ['ts', 'js', 'json', 'css', 'html', 'md', 'mdx']
});

export default highlighter;
