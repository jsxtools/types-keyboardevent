/** Represents a union of code values. */
export type KeyboardEventCode =
	| KeyboardEventCode.Modifier
	| KeyboardEventCode.AlphanumericWritingSystem
	| KeyboardEventCode.AlphanumericFunctional1
	| KeyboardEventCode.AlphanumericFunctional2
	| KeyboardEventCode.Controlpad
	| KeyboardEventCode.Arrowpad
	| KeyboardEventCode.Numpad
	| KeyboardEventCode.Function
	| KeyboardEventCode.Media
	| KeyboardEventCode.LegacyModifier
	| KeyboardEventCode.LegacyProcess
	| KeyboardEventCode.LegacyEditing
	| KeyboardEventCode.International
	| KeyboardEventCode.Special;

export namespace KeyboardEventCode {
	/** Represents a union of code values for modifier keys. */
	export type Modifier = "AltLeft" | "AltRight" | "ControlLeft" | "ControlRight" | "MetaLeft" | "MetaRight" | "ShiftLeft" | "ShiftRight";

	/** Represents a union of code values for writing system keys in the Alphanumeric section. */
	export type AlphanumericWritingSystem =
		| "Backquote"
		| "Backslash"
		| "BracketLeft"
		| "BracketRight"
		| "Comma"
		| "Digit0"
		| "Digit1"
		| "Digit2"
		| "Digit3"
		| "Digit4"
		| "Digit5"
		| "Digit6"
		| "Digit7"
		| "Digit8"
		| "Digit9"
		| "Equal"
		| "IntlBackslash"
		| "IntlRo"
		| "IntlYen"
		| "KeyA"
		| "KeyB"
		| "KeyC"
		| "KeyD"
		| "KeyE"
		| "KeyF"
		| "KeyG"
		| "KeyH"
		| "KeyI"
		| "KeyJ"
		| "KeyK"
		| "KeyL"
		| "KeyM"
		| "KeyN"
		| "KeyO"
		| "KeyP"
		| "KeyQ"
		| "KeyR"
		| "KeyS"
		| "KeyT"
		| "KeyU"
		| "KeyV"
		| "KeyW"
		| "KeyX"
		| "KeyY"
		| "KeyZ"
		| "Minus"
		| "Period"
		| "Quote"
		| "Semicolon"
		| "Slash";

	/** Represents a union of code values for functional keys in the Alphanumeric section. */
	export type AlphanumericFunctional1 = "Backspace" | "CapsLock" | "ContextMenu" | "Enter" | "Space" | "Tab";

	/** Represents a union of code values for functional keys found on Japanese and Korean keyboards. */
	export type AlphanumericFunctional2 = "Convert" | "KanaMode" | "Lang1" | "Lang2" | "Lang3" | "Lang4" | "Lang5" | "NonConvert";

	/** Represents a union of code values for keys in the ControlPad section. */
	export type Controlpad = "Delete" | "End" | "Help" | "Home" | "Insert" | "PageDown" | "PageUp";

	/** Represents a union of code values for keys in the ArrowPad section. */
	export type Arrowpad = "ArrowDown" | "ArrowLeft" | "ArrowRight" | "ArrowUp";

	/** Represents a union of code values for keys in the Numpad section. */
	export type Numpad =
		| "NumLock"
		| "Numpad0"
		| "Numpad1"
		| "Numpad2"
		| "Numpad3"
		| "Numpad4"
		| "Numpad5"
		| "Numpad6"
		| "Numpad7"
		| "Numpad8"
		| "Numpad9"
		| "NumpadAdd"
		| "NumpadBackspace"
		| "NumpadClear"
		| "NumpadClearEntry"
		| "NumpadComma"
		| "NumpadDecimal"
		| "NumpadDivide"
		| "NumpadEnter"
		| "NumpadEqual"
		| "NumpadHash"
		| "NumpadMemoryAdd"
		| "NumpadMemoryClear"
		| "NumpadMemoryRecall"
		| "NumpadMemoryStore"
		| "NumpadMemorySubtract"
		| "NumpadMultiply"
		| "NumpadParenLeft"
		| "NumpadParenRight"
		| "NumpadStar"
		| "NumpadSubtract";

	/** Represents a union of code values for keys in the Function section. */
	export type Function =
		| "Escape"
		| "F1"
		| "F2"
		| "F3"
		| "F4"
		| "F5"
		| "F6"
		| "F7"
		| "F8"
		| "F9"
		| "F10"
		| "F11"
		| "F12"
		| "Fn"
		| "FnLock"
		| "PrintScreen"
		| "ScrollLock"
		| "Pause";

	/** Represents a union of code values for media keys. */
	export type Media =
		| "BrowserBack"
		| "BrowserFavorites"
		| "BrowserForward"
		| "BrowserHome"
		| "BrowserRefresh"
		| "BrowserSearch"
		| "BrowserStop"
		| "Eject"
		| "LaunchApp1"
		| "LaunchApp2"
		| "LaunchMail"
		| "MediaPlayPause"
		| "MediaSelect"
		| "MediaStop"
		| "MediaTrackNext"
		| "MediaTrackPrevious"
		| "Power"
		| "Sleep"
		| "AudioVolumeDown"
		| "AudioVolumeMute"
		| "AudioVolumeUp"
		| "WakeUp";

	/** Represents a union of code values for legacy modifier keys. */
	export type LegacyModifier = "Hyper" | "Super" | "Turbo";

	/** Represents a union of code values for legacy process control keys. */
	export type LegacyProcess = "Abort" | "Resume" | "Suspend";

	/** Represents a union of code values for legacy editing keys. */
	export type LegacyEditing = "Again" | "Copy" | "Cut" | "Find" | "Open" | "Paste" | "Props" | "Select" | "Undo";

	/** Represents a union of code values for keys found on international keyboards. */
	export type International = "Hiragana" | "Katakana";

	/** Represents a union of special code values. */
	export type Special = "Unidentified";
}
