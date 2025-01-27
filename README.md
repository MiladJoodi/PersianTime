
# PersianTime Library

A simple utility to convert any date or time to **Irans's local time** with **Persian date formatting**.

![Example Image](https://s6.uupload.ir/files/01_0q3f.png)

### Installation

Install the library using npm:

```tsx
npm install persiantime
```
or using Yarn:
```tsx
yarn add persiantime
```

### Usage

Import the `persiantime` function into your project and use it to convert numbers or strings containing numbers into Persian format.

#### Example


```tsx
import { PersianTime } from 'persiantime';

const isoDate = "2025-01-17T03:10:54.225000+03:30";
PersianTime(isoDate)

```

### Function Signature

```tsx
export function PersianTime(time: string | Date | number): string;
```

#### Parameters:
▪ time: Can be a string (ISO 8601 format), Date object, or timestamp (number).
#### Returns:

▪ A string representing the date and time in Persian format with Iran's local time.

### Features
**Persian Date:** Converts the date to the Persian calendar.\
**Iran Timezone:** Adjusts the time to Iran's local timezone (UTC +03:30).\
**Handles Invalid Dates:** Returns an error message if the provided date is invalid.

### License
    MIT License