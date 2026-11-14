# Calculator (US English)

A static, installable calculator for GitHub Pages, using US English number formatting. The appearance and both secret methods are preserved from the original version.

## Publish on GitHub Pages

1. Create a GitHub repository
2. Upload all files to its root directory
3. In **Settings > Pages**, select **Deploy from a branch**, choose the main branch, and select **/(root)**
4. Open the GitHub Pages URL

`index.html` is the entry point. The PWA manifest installs with the name **Calculator**. Numbers use commas for thousands and periods for decimals, such as `123,456,789` and `1,234.56`.

## Secret modes

Enter a number and tap the **clock** icon to save it as the target for the classic force. The **calculator** icon at the top right instead creates a classic-force target from the current local date and time in US order: **month + day + two-digit year + hour + minute**. The year is omitted if the concatenation would exceed nine digits. Hours use 12-hour format (01–12), without an AM/PM suffix, and month and day are not zero-padded. To move the target ahead by one to nine minutes, enter a single digit from `1` to `9` before tapping that icon.

Enter a number and tap the **+/−** key to store it as the target for the alternate addition effect. The stored target and selected mode persist across app restarts until the effect is completed.

**Press and hold the decimal key (`.`)** to temporarily reveal the stored number. A short press enters the decimal point normally. In the alternate effect, a number already on screen may stay visible: tap **+**, enter the spectator's number, then press **=** to finish. The displayed expression is adjusted so that the answer matches the configured target; afterward, the stored configuration is automatically cleared.

**AC** only clears the usual calculator state. **Press and hold Delete** to fully reset the calculator and clear the stored target.

## Installation and offline use

The service worker caches the app for offline use. Updating to this US English version replaces the previous calculator cache. On an already installed iPhone app, you may need to remove it from the Home Screen and add it again to refresh its displayed name.

The layout targets modern iPhones in portrait orientation. Very short screens may need a separate compact layout.
