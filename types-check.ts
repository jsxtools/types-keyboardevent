import type { KeyboardEventCode as KeyboardEventCodeOnly } from "./src/KeyboardEventCode.js";
import type { KeyboardEventKey as KeyboardEventKeyOnly } from "./src/KeyboardEventKey.js";
import type { KeyboardEventCode, KeyboardEventKey } from "./src/types.js";

const arrowpadCode = "ArrowRight" as const satisfies KeyboardEventCode.Arrowpad;
const numpadCode = "NumpadEnter" as const satisfies KeyboardEventCode.Numpad;
const mediaCode = "AudioVolumeUp" as const satisfies KeyboardEventCodeOnly.Media;
const legacyProcessCode = "Resume" as const satisfies KeyboardEventCodeOnly.LegacyProcess;
const rootCode = arrowpadCode satisfies KeyboardEventCode;

const navigationKey = "ArrowRight" as const satisfies KeyboardEventKey.Navigation;
const mediaKey = "MediaPlayPause" as const satisfies KeyboardEventKeyOnly.Multimedia;
const audioKey = "AudioVolumeUp" as const satisfies KeyboardEventKeyOnly.Audio;
const browserKey = "BrowserBack" as const satisfies KeyboardEventKeyOnly.Browser;
const rootKey = navigationKey satisfies KeyboardEventKey;

void [rootCode, numpadCode, mediaCode, legacyProcessCode, rootKey, mediaKey, audioKey, browserKey];
