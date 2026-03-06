/** Represents a union of key values. */
export type KeyboardEventKey =
	| KeyboardEventKey.KeyString
	| KeyboardEventKey.General
	| KeyboardEventKey.Modifier
	| KeyboardEventKey.ModifierLegacy
	| KeyboardEventKey.Whitespace
	| KeyboardEventKey.Navigation
	| KeyboardEventKey.Editing
	| KeyboardEventKey.Ui
	| KeyboardEventKey.Device
	| KeyboardEventKey.Composition
	| KeyboardEventKey.ImeKorean
	| KeyboardEventKey.ImeJapanese
	| KeyboardEventKey.Function
	| KeyboardEventKey.Multimedia
	| KeyboardEventKey.MultimediaNumpad
	| KeyboardEventKey.Audio
	| KeyboardEventKey.Speech
	| KeyboardEventKey.Apps
	| KeyboardEventKey.Browser
	| KeyboardEventKey.MobilePhone
	| KeyboardEventKey.Tv
	| KeyboardEventKey.MediaController
	| KeyboardEventKey.MediaControllerDup;

export namespace KeyboardEventKey {
	/** Represents a 0 or 1 non-control characters ("base" characters) followed by 0 or more combining characters. */
	export type KeyString = string & {};

	/** Represents a key used to provide fallback or sentinel meanings when a more specific meaning cannot be determined. */
	export type General = "Unidentified";

	/** Represents a union of keys used to modify how other key presses are interpreted. */
	export type Modifier = "Alt" | "AltGraph" | "CapsLock" | "Control" | "Fn" | "FnLock" | "Meta" | "NumLock" | "ScrollLock" | "Shift" | "Symbol" | "SymbolLock";

	/** Represents a union of key values from the modifier-legacy key table. */
	export type ModifierLegacy = "Hyper" | "Super";

	/** Represents a union of keys used to insert whitespace or control text-flow and activation. */
	export type Whitespace = "Enter" | "Tab";

	/** Represents a union of keys used to move the cursor, focus, or viewport through content or UI. */
	export type Navigation = "ArrowDown" | "ArrowLeft" | "ArrowRight" | "ArrowUp" | "End" | "Home" | "PageDown" | "PageUp";

	/** Represents a union of keys used to edit content by changing, removing, or manipulating existing input or selection. */
	export type Editing = "Backspace" | "Clear" | "Copy" | "CrSel" | "Cut" | "Delete" | "EraseEof" | "ExSel" | "Insert" | "Paste" | "Redo" | "Undo";

	/** Represents a union of keys used to control user-interface interactions. */
	export type Ui =
		| "Accept"
		| "Again"
		| "Attn"
		| "Cancel"
		| "ContextMenu"
		| "Escape"
		| "Execute"
		| "Find"
		| "Help"
		| "Pause"
		| "Play"
		| "Props"
		| "Select"
		| "ZoomIn"
		| "ZoomOut";

	/** Represents a key used to control device or hardware-related functions, including power-state behaviors. */
	export type Device = "BrightnessDown" | "BrightnessUp" | "Eject" | "LogOff" | "Power" | "PowerOff" | "PrintScreen" | "Hibernate" | "Standby" | "WakeUp";

	/** Represents a union of key values from the composition key table. */
	export type Composition =
		| "AllCandidates"
		| "Alphanumeric"
		| "CodeInput"
		| "Compose"
		| "Convert"
		| "Dead"
		| "FinalMode"
		| "GroupFirst"
		| "GroupLast"
		| "GroupNext"
		| "GroupPrevious"
		| "ModeChange"
		| "NextCandidate"
		| "NonConvert"
		| "PreviousCandidate"
		| "Process"
		| "SingleCandidate";

	/** Represents a union of key values from the ime-korean key table. */
	export type ImeKorean = "HangulMode" | "HanjaMode" | "JunjaMode";

	/** Represents a union of key values from the ime-japanese key table. */
	export type ImeJapanese =
		| "Eisu"
		| "Hankaku"
		| "Hiragana"
		| "HiraganaKatakana"
		| "KanaMode"
		| "KanjiMode"
		| "Katakana"
		| "Romaji"
		| "Zenkaku"
		| "ZenkakuHankaku";

	/** Represents a union of keys used to invoke general-purpose functions whose actions are typically application-defined. */
	export type Function = "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12" | "Soft1" | "Soft2" | "Soft3" | "Soft4";

	/** Represents a union of key values from the multimedia key table. */
	export type Multimedia =
		| "ChannelDown"
		| "ChannelUp"
		| "Close"
		| "MailForward"
		| "MailReply"
		| "MailSend"
		| "MediaClose"
		| "MediaFastForward"
		| "MediaPause"
		| "MediaPlay"
		| "MediaPlayPause"
		| "MediaRecord"
		| "MediaRewind"
		| "MediaStop"
		| "MediaTrackNext"
		| "MediaTrackPrevious"
		| "New"
		| "Open"
		| "Print"
		| "Save"
		| "SpellCheck";

	/** Represents a union of key values from the multimedia-numpad key table. */
	export type MultimediaNumpad = "Key11" | "Key12";

	/** Represents a union of key values from the audio key table. */
	export type Audio =
		| "AudioBalanceLeft"
		| "AudioBalanceRight"
		| "AudioBassBoostDown"
		| "AudioBassBoostToggle"
		| "AudioBassBoostUp"
		| "AudioFaderFront"
		| "AudioFaderRear"
		| "AudioSurroundModeNext"
		| "AudioTrebleDown"
		| "AudioTrebleUp"
		| "AudioVolumeDown"
		| "AudioVolumeUp"
		| "AudioVolumeMute"
		| "MicrophoneToggle"
		| "MicrophoneVolumeDown"
		| "MicrophoneVolumeUp"
		| "MicrophoneVolumeMute";

	/** Represents a union of key values from the speech key table. */
	export type Speech = "SpeechCorrectionList" | "SpeechInputToggle";

	/** Represents a union of key values from the apps key table. */
	export type Apps =
		| "LaunchApplication1"
		| "LaunchApplication2"
		| "LaunchCalendar"
		| "LaunchContacts"
		| "LaunchMail"
		| "LaunchMediaPlayer"
		| "LaunchMusicPlayer"
		| "LaunchPhone"
		| "LaunchScreenSaver"
		| "LaunchSpreadsheet"
		| "LaunchWebBrowser"
		| "LaunchWebCam"
		| "LaunchWordProcessor";

	/** Represents a union of key values from the browser key table. */
	export type Browser = "BrowserBack" | "BrowserFavorites" | "BrowserForward" | "BrowserHome" | "BrowserRefresh" | "BrowserSearch" | "BrowserStop";

	/** Represents a union of key values from the mobile-phone key table. */
	export type MobilePhone =
		| "AppSwitch"
		| "Call"
		| "Camera"
		| "CameraFocus"
		| "EndCall"
		| "GoBack"
		| "GoHome"
		| "HeadsetHook"
		| "LastNumberRedial"
		| "Notification"
		| "MannerMode"
		| "VoiceDial";

	/** Represents a union of key values from the tv key table. */
	export type Tv =
		| "TV"
		| "TV3DMode"
		| "TVAntennaCable"
		| "TVAudioDescription"
		| "TVAudioDescriptionMixDown"
		| "TVAudioDescriptionMixUp"
		| "TVContentsMenu"
		| "TVDataService"
		| "TVInput"
		| "TVInputComponent1"
		| "TVInputComponent2"
		| "TVInputComposite1"
		| "TVInputComposite2"
		| "TVInputHDMI1"
		| "TVInputHDMI2"
		| "TVInputHDMI3"
		| "TVInputHDMI4"
		| "TVInputVGA1"
		| "TVMediaContext"
		| "TVNetwork"
		| "TVNumberEntry"
		| "TVPower"
		| "TVRadioService"
		| "TVSatellite"
		| "TVSatelliteBS"
		| "TVSatelliteCS"
		| "TVSatelliteToggle"
		| "TVTerrestrialAnalog"
		| "TVTerrestrialDigital"
		| "TVTimer";

	/** Represents a union of key values from the media-controller key table. */
	export type MediaController =
		| "AVRInput"
		| "AVRPower"
		| "ColorF0Red"
		| "ColorF1Green"
		| "ColorF2Yellow"
		| "ColorF3Blue"
		| "ColorF4Grey"
		| "ColorF5Brown"
		| "ClosedCaptionToggle"
		| "Dimmer"
		| "DisplaySwap"
		| "DVR"
		| "Exit"
		| "FavoriteClear0"
		| "FavoriteClear1"
		| "FavoriteClear2"
		| "FavoriteClear3"
		| "FavoriteRecall0"
		| "FavoriteRecall1"
		| "FavoriteRecall2"
		| "FavoriteRecall3"
		| "FavoriteStore0"
		| "FavoriteStore1"
		| "FavoriteStore2"
		| "FavoriteStore3"
		| "Guide"
		| "GuideNextDay"
		| "GuidePreviousDay"
		| "Info"
		| "InstantReplay"
		| "Link"
		| "ListProgram"
		| "LiveContent"
		| "Lock"
		| "MediaApps"
		| "MediaAudioTrack"
		| "MediaLast"
		| "MediaSkipBackward"
		| "MediaSkipForward"
		| "MediaStepBackward"
		| "MediaStepForward"
		| "MediaTopMenu"
		| "NavigateIn"
		| "NavigateNext"
		| "NavigateOut"
		| "NavigatePrevious"
		| "NextFavoriteChannel"
		| "NextUserProfile"
		| "OnDemand"
		| "Pairing"
		| "PinPDown"
		| "PinPMove"
		| "PinPToggle"
		| "PinPUp"
		| "PlaySpeedDown"
		| "PlaySpeedReset"
		| "PlaySpeedUp"
		| "RandomToggle"
		| "RcLowBattery"
		| "RecordSpeedNext"
		| "RfBypass"
		| "ScanChannelsToggle"
		| "ScreenModeNext"
		| "Settings"
		| "SplitScreenToggle"
		| "STBInput"
		| "STBPower"
		| "Subtitle"
		| "Teletext"
		| "VideoModeNext"
		| "Wink"
		| "ZoomToggle";

	/** Represents a union of key values from the media-controller-dup key table. */
	export type MediaControllerDup =
		| "AudioVolumeDown"
		| "AudioVolumeUp"
		| "AudioVolumeMute"
		| "BrowserBack"
		| "BrowserForward"
		| "ChannelDown"
		| "ChannelUp"
		| "ContextMenu"
		| "Eject"
		| "End"
		| "Enter"
		| "Home"
		| "MediaFastForward"
		| "MediaPlay"
		| "MediaPlayPause"
		| "MediaRecord"
		| "MediaRewind"
		| "MediaStop"
		| "MediaPause"
		| "MediaTrackNext"
		| "MediaTrackPrevious"
		| "Power"
		| "Unidentified";
}
