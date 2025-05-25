# Xiaomi Air Purifier filter reset

The Xiaomi Air Purifier filters are e-waste waiting to happen.

The filter can be cleaned and re-used, but Xiaomi do not allow this to happen. The filter has a RFID tag in it that contains information about how long the filter has been running for.

The filters start at 100% when new, and slowly degrade to 0%.

Once the filter is at 0%, the air purifier will no longer function, you will need to purchase another filter and throw your old one away.

Or, you can just reset the counter in the RFID tag...

## installing

```
$ git clone https://github.com/logikal/xiaomi-air-purifier-filter-reset 
$ cd xiaomi-air-purifier-filter-reset
$ pnpm i
$ # RTFM (below)
```

## how-to

1. Download NFC Tools from the app store.
2. Scan the filters RFID tag
  a. Open NFC Tools
  b. Tap "Read" from main menu.
  c. Scan RFID tag
3. Copy the "Serial number"
4. Run `pnpm run start <serial number>`
5. The script will produce a Reset code to reset the filter back to 100% (new)
6. Write the reset code back to the RFID tag
  a. Open NFC Tools
  b. Tap "Other" in main menu
  c. Tap "Advanced NFC Commands"
  d. Agree to the disclaimer
  e. Paste/write in the reset code in the "Data" field.
  f. Tap "Send command"
  g. Hold phone near RFID tag.

