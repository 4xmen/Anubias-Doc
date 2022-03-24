
# toast

Toast class help you to show a toast message

## Show

This is main function of toast class,
You can change default params as an object (xScript):

```javascript
toast.show({
    'text': 'toast sample',
    'bgColor': Colors.black38,
    'txtColor': Colors.white,
    'fontSize': 16.0,
    'pos': toast.POS_CENTER,
    'length': Toast.LENGTH_SHORT,
});
```
All members of the object are optional, You can ignore them.
for example:

```javascript
toast.show({
    'text': 'My new toast msg :)',
    'bgColor': Colors.red,
});
```

## show object information

|  Key | Type  | Default  |
| ------------ | ------------ | ------------ |
| text  | string  |  'toast sample' |
| bgColor  |  color |  Colors.black38 |
|  txtColor |  color |  Colors.white |
|  fontSize | float  | 16.0  |
|  pos | const  | POS_CENTER  |
|  length | const  | LENGTH_SHORT  |

### pos - Position constants

- POS_CENTER
- POS_CENTER_LEFT
- POS_CENTER_RIGHT
- POS_TOP
- POS_TOP_LEFT
- POS_TOP_RIGHT
- POS_BOTTOM
- POS_BOTTOM_LEFT
- POS_BOTTOM_RIGHT

### length = toast duration

- LENGTH_SHORT
- LENGTH_LONG