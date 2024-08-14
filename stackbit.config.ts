// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
	stackbitVersion: "~0.6.0",
	contentSources: [
		new GitContentSource({
			rootPath: __dirname,
			contentDirs: ["src/posts"],
			models: [
				{
					name: "Page",
					type: "page",
					urlPath: "/{slug}",
					filePath: "src/posts/{slug}/index.md",
					fields: [
						{ name: "title", type: "string", required: true },
						{ name: "description", type: "string", required: true },
						{ name: "datePublished", type: "datetime", required: true },
					]
				}
			],
			assetsConfig: {
				referenceType: "static",
				staticDir: "src/lib/",
				uploadDir: "imgs",
				publicPath: "/"
			}
		})
	]
});
