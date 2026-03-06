# types-keyboardevent

**types-keyboardevent** provides TypeScript types for `KeyboardEvent`,
generated directly from W3C UI Events KeyboardEvent specifications.

```bash
npm install types-keyboardevent
```

- `KeyboardEventCode` represents a union of known `event.code` values.
- `KeyboardEventKey` represents a union of known `event.key` values.
- Includes sub-types such as `KeyboardEventCode.Numpad` and `KeyboardEventKey.Navigation`.
- Source is generated directly from:
  - https://w3c.github.io/uievents-code/
  - https://w3c.github.io/uievents-key/

This package is type-only at runtime.
Its JavaScript entrypoints intentionally export no values.

## Usage

```ts
import type { KeyboardEventCode, KeyboardEventKey } from "types-keyboardevent";

const isMovementCode = (code: KeyboardEventCode.Arrowpad) => code === "ArrowLeft" || code === "ArrowRight";

const isConfirmKey = (key: KeyboardEventKey) => key === "Enter" || key === " ";
```

You can also import the type families directly from their subpaths:

```ts
import type { KeyboardEventCode } from "types-keyboardevent/KeyboardEventCode";
import type { KeyboardEventKey } from "types-keyboardevent/KeyboardEventKey";
```

## API surface

### `KeyboardEventCode`

Includes values such as `"KeyA"`, `"ArrowRight"`, `"NumpadEnter"`, and media-related codes.

Useful namespaces include:

- `KeyboardEventCode.Modifier`
- `KeyboardEventCode.Arrowpad`
- `KeyboardEventCode.Numpad`
- `KeyboardEventCode.Function`
- `KeyboardEventCode.Media`

### `KeyboardEventKey`

Includes values such as `"Enter"`, `"ArrowRight"`, `"AudioVolumeUp"`, and `"MediaPlayPause"`.

Useful namespaces include:

- `KeyboardEventKey.Modifier`
- `KeyboardEventKey.Navigation`
- `KeyboardEventKey.Editing`
- `KeyboardEventKey.Multimedia`
- `KeyboardEventKey.Audio`
- `KeyboardEventKey.Browser`

## License

[MIT-0](./LICENSE.md)
