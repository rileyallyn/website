/**
 * A Shiki transformer that adds a header with the programming language name
 * and a copy button to code blocks.
 */

/**
 * @param {CodeHeaderOptions} options
 * @returns {Object}
 */
const codeHeaderTransformer = (options = {}) => {
	return {
		name: "code-header",
		pre(node) {
			const lang = options.meta.lang;
			if (!lang) {
				return; // Only apply to code blocks with a language defined
			}
			const themeBackground = node.properties.style?.split(';')[0].split(':')[1].trim();
			const themeText = node.properties.style?.split(';')[1].split(':')[1].trim();

			// Create the header element
			const header = {
				type: "element",
				tagName: "div",
				properties: {
					class: "shiki-code-header",
					style: `--shiki-color-background: ${themeBackground}; --shiki-color-text: ${themeText};`
				},
				children: [
					{
						type: "element",
						tagName: "span",
						properties: {
							class: "shiki-code-lang-name",
						},
						children: [{ type: "text", value: lang }],
					},
					{
						type: "element",
						tagName: "button",
						properties: {
							class: "shiki-copy-button",
							title: "Copy code",
							onclick: "window.copyCode(this)", // JavaScript function to handle copying
						},
						children: [
							{
								type: "element",
								tagName: "svg",
								properties: {
									xmlns: "http://www.w3.org/2000/svg",
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
								},
								children: [
									{
										type: "element",
										tagName: "rect",
										properties: {
											x: "9",
											y: "9",
											width: "13",
											height: "13",
											rx: "2",
											ry: "2",
										},
									},
									{
										type: "element",
										tagName: "path",
										properties: {
											d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
										},
									},
								],
							},
						],
					},
				],
			};

			// Wrap the original code node and the header in a new div
			const wrapper = {
				type: "element",
				tagName: "div",
				properties: {
					class: "shiki-code-container",
				},
				children: [header, node],
			};

			return wrapper;
		},
	};
};

export default codeHeaderTransformer;