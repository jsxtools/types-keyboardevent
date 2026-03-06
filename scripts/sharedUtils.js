/// <reference types="node" />
// @ts-check

export const fetchText = (url = "") => fetch(url).then((response) => response.text());

export const getTyping = (
	keyName = "code",
	dtsName = "KeyboardEventCode",
	/** @type {{ name: string; desc: string; codes: string[] }[]} */ custom = [],
	/** @type {Part[]} */ parts,
) => {
	const t = "\t";
	const n = "\n";

	return [
		/* Base */
		`/** Represents a union of ${keyName} values. */`,
		`export type ${dtsName} = ${custom.length ? custom.map(({ name }) => `${dtsName}.${name}`).join(" | ") + " | " : ""}${parts.map(([name]) => `${dtsName}.${name}`).join(" | ")};`,
		``,

		/* Parts */
		`export namespace ${dtsName} {`,
		[
			...custom.map(({ name, desc, codes }) => [`${t}/** ${desc} */`, `${t}export type ${name} = ${codes.join(" | ")};`].join(n)),
			...parts.map(([name, desc, codes]) => [`${t}/** ${desc} */`, `${t}export type ${name} = ${codes.join(" | ")};`].join(n)),
		].join(n + n),
		`}`,
		``,
	].join(n);
};

/** @typedef {[string, string, string[]]} Part */
