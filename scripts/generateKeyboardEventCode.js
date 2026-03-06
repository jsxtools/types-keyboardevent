/// <reference types="node" />
// @ts-check

import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { Biome } from "@biomejs/js-api/nodejs";
import { fetchText, getTyping } from "./sharedUtils.js";

/** Project Root Directory */
const rootDir = new URL("../", import.meta.url);

/* Generated Declaration File */
const srcKey = "src/KeyboardEventCode.ts";
const srcUrl = new URL(srcKey, rootDir);

const url = "https://cdn.jsdelivr.net/gh/w3c/uievents-code@gh-pages/index-source.txt";

/** Represents the text content of the Bikeshed file. */
const bikeshed = await fetchText(url);

/** Represents the regular expressions used to parse blocks of code from the Bikeshed file. */
const matchers = {
	codeTable: /^\t+BEGIN_CODE_TABLE ([a-z][0-9a-z-]*) "([^"]+)"\n([\W\w]+?)\n\t+END_CODE_TABLE$/gm,
	codeEntry: /^\t+CODE(?:_OPT)? ([A-Z][0-9A-Za-z]*)\b[^\n]*$/gm,
};

/** Represents the regular expressions used to replace text in the Bikeshed file. */
const replaces = {
	sectionName: {
		of: /(^\w|-\w)/g,
		to: (match = "") => match.replace("-", "").toUpperCase(),
	},
	sectionDescription: {
		of: /^List of/,
		to: "Represents a union of",
	},
};

const modifierNames = ["Alt", "Control", "Meta", "Shift"];
const modifierSides = ["Left", "Right"];
const modifierCodes = modifierNames.flatMap((modifierName) => modifierSides.map((modifierSide) => JSON.stringify(`${modifierName}${modifierSide}`)));

const parts = [...bikeshed.matchAll(matchers.codeTable)]
	.map(
		([, name, desc, content]) =>
			/** @type {[string, string, string[]]} */ ([
				/* Formatted Section Name */
				name.replace(replaces.sectionName.of, replaces.sectionName.to),

				/* Formatted Section Description */
				desc.replace(replaces.sectionDescription.of, replaces.sectionDescription.to),

				/* Formatted Section KeyboardEvent Codes */
				[...content.matchAll(matchers.codeEntry)]
					.map(([, name]) => JSON.stringify(name))
					.filter((code) => !modifierCodes.includes(code)),
			]),
	)
	.filter(([, , codes]) => codes.length);

const dts = getTyping(
	"code",
	"KeyboardEventCode",
	[
		{
			name: "Modifier",
			desc: "Represents a union of code values for modifier keys.",
			codes: modifierCodes,
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
