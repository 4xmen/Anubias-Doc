# storage

The `storage` class to store data in secure storage with encryption.

## read

Read value as string
- first parameter is `key` as `String`

```javascript
await storage.read('samplekey');
```

## write

Write value as string by a key
- first parameter is `key` as `String`
- second parameter is `value` as `String`

```javascript
await storage.write('samplekey', 'my value here like a token');
```

## delete

Delete a key
- first parameter is `key` as `String`

```javascript
await storage.delete('samplekey');
```

## truncate
Erase storage of your application

```javascript
await storage.truncate();
```
