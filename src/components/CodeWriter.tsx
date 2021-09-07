import { Box, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

const CodeWriter: React.FC = () => {
	const codeString = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}
function createClassNameString(classNames) {
  return classNames.join(' ');
}
function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key:\`code-segment-$\{childrenCount}-$\{i}\`
    }));
  }
}
function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}
  `;
	const [ runningText, setRunningText ] = useState<string>("");
	const [ index, setIndex ] = useState<number>(0);
	let timeout: NodeJS.Timeout;
	const generateText = () => {
		clearTimeout(timeout);
		const speed = 1000 / 400;
		if (index < codeString.length) {
			timeout = setTimeout(() => {
				setRunningText(runningText + codeString[index]);
				setIndex(index + 1);
			}, speed);
		} else {
			clearTimeout(timeout);
		}
	};
	useEffect(() => {
		generateText();
		return () => {
			clearTimeout(timeout);
		};
	});
	return (
		<Card variant="outlined" sx={{ maxHeight: "340px", overflowY: "auto" }}>
			<ReactSyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{ marginTop: "0px", marginBottom: "0px" }} wrapLines>
				{runningText}
			</ReactSyntaxHighlighter>
		</Card>
	);
};

export default CodeWriter;