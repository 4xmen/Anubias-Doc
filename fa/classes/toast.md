# toast

این کلاس امکان نمایش پیام از نوع toast را می‌دهد

## Show

این تابع اصلی جهت نمایش است
شما می‌توانید تک‌تک مقادیر دلخواه را جایگزین کنید (xScript):

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
همه اعضای object بالا دلخواه می‌باشد شما هر یک از آنها رو می‌توانید نادیده بگیرید
مثال:

```javascript
toast.show({
    'text': 'My new toast msg :)',
    'bgColor': Colors.red,
});
```

## اطلاعات object show

|  کلید | نوع  | مقدار  |
| ------------ | ------------ | ------------ |
| text  | string  |  'toast sample' |
| bgColor  |  color |  Colors.black38 |
|  txtColor |  color |  Colors.white |
|  fontSize | float  | 16.0  |
|  pos | ثابت  | POS_CENTER  |
|  length | ثابت  | LENGTH_SHORT  |

### pos - ثوابت جهت جایگاه پیام

- POS_CENTER
- POS_CENTER_LEFT
- POS_CENTER_RIGHT
- POS_TOP
- POS_TOP_LEFT
- POS_TOP_RIGHT
- POS_BOTTOM
- POS_BOTTOM_LEFT
- POS_BOTTOM_RIGHT

### length - ثوابت جهت طول نمایش پیام

- LENGTH_SHORT
- LENGTH_LONG
