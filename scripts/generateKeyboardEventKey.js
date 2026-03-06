/// <reference types="node" />
// @ts-check

import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { Biome } from "@biomejs/js-api/nodejs";
import { fetchText, getTyping } from "./sharedUtils.js";

/** Project Root Directory */
const rootDir = new URL("../", import.meta.url);

/* Generated Declaration File */
const srcKey = "src/KeyboardEventKey.ts";
const srcUrl = new URL(srcKey, rootDir);

const url = "https://cdn.jsdelivr.net/gh/w3c/uievents-key@gh-pages/index-source.txt";

/** Represents the text content of the Bikeshed file. */
const bikeshed = await fetchText(url);

/** Represents the regular expressions used to parse blocks of code from the Bikeshed file. */
const matchers = {
	codeTable: /^\t+BEGIN_KEY_TABLE ([a-z][0-9a-z-]*)\n([\W\w]+?)\n\t+END_KEY_TABLE$/gm,
	codeEntry: /^\t+KEY(?:_OPT|_DUP|_DUP_OPT)? ([A-Z][0-9A-Za-z]*)\b[^\n]*$/gm,
};

/** Represents the regular expressions used to replace text in the Bikeshed file. */
const replaces = {
	sectionName: {
		of: /(^\w|-\w)/g,
		to: (match = "") => match.replace("-", "").toUpperCase(),
	},
};
const explains = /** @type {Record<string, string>} */ ({
	general: "Represents a key used to provide fallback or sentinel meanings when a more specific meaning cannot be determined.",
	modifier: "Represents a union of keys used to modify how other key presses are interpreted.",
	whitespace: "Represents a union of keys used to insert whitespace or control text-flow and activation.",
	navigation: "Represents a union of keys used to move the cursor, focus, or viewport through content or UI.",
	editing: "Represents a union of keys used to edit content by changing, removing, or manipulating existing input or selection.",
	ui: "Represents a union of keys used to control user-interface interactions.",
	device: "Represents a key used to control device or hardware-related functions, including power-state behaviors.",
	function: "Represents a union of keys used to invoke general-purpose functions whose actions are typically application-defined.",
});
const getDescription = (name = "") => explains[name] ?? `Represents a union of key values from the ${name} key table.`;

const parts = [...bikeshed.matchAll(matchers.codeTable)]
	.map(
		([, name, content]) =>
			/** @type {[name: string, desc: string, codes: string[]]} */ ([
				/* Formatted Section Name */
				name.replace(replaces.sectionName.of, replaces.sectionName.to),

				/* Formatted Section Description */
				getDescription(name),

				/* Formatted Section KeyboardEvent Codes */
				[...content.matchAll(matchers.codeEntry)].map(([, name]) => JSON.stringify(name)),
			]),
	)
	.filter(([, , keys]) => keys.length);

const dts = getTyping(
	"key",
	"KeyboardEventKey",
	[
		{
			name: `KeyString`,
			desc: `Represents a 0 or 1 non-control characters ("base" characters) followed by 0 or more combining characters.`,
			codes: [`string & {}`],
		},
	],
	parts,
);

console.log(`Generated ${srcKey}`);

const biome = new Biome();
const { projectKey } = biome.openProject(rootDir.pathname);

const dprint = (input = "") =>
	spawnSync("dprint", ["fmt", "--stdin", srcKey], {
		input,
		encoding: "utf8", // ensures input/output are strings
		stdio: ["pipe", "pipe", "inherit"], // capture stdout, show stderr
	}).stdout;

const formattedDts = dprint(
	biome.formatContent(projectKey, dts, {
		filePath: srcKey,
	}).content,
);

writeFileSync(srcUrl, formattedDts);

console.log(`Formatted ${srcKey}`);
