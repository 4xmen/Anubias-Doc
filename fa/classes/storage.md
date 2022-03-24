# storage

کلاس `storage` برای ذخیره و بازیابی داده‌های شما در یک بستر امن و رمزنگاری شده است .

## read

خواندن مقدار با نوع رشته string
- پارامتر اول `key` نوع `String`

```javascript
await storage.read('samplekey');
```

## write

نوشتن یک مقدار
- پارامتر اول `key` نوع `String`
- پارامتر دوم `value` نوع `String`

```javascript
await storage.write('samplekey', 'my value here like a token');
```

## delete

حذف یک مقدار
- پارامتر اول `key` نوع `String`

```javascript
await storage.delete('samplekey');
```

## truncate
پاک کردن کل مقادیر ذخیره شده

```javascript
await storage.truncate();
```
