# app

کلاس `app` یک کلاس عمومی است که 
به شما اجازه می‌دهد که کارهای عمومی در برنامه انجام دهید
و اطلاعات از برنامه بدست بیاورید

## mainColor

برای دریافت رنگ اصلی برنامه :

```javascript
text1.color = app.mainColor();
```

## colorOrMainColor

اگر به یک رنگ ایمن نیاز داشتید
می‌توانید رنگ ورودی را به این تابع بدهید و در صورت خالی بودن رنگ،
آنگاه رنگ اصلی برنامه برای شما باز می‌گردد:

```javascript
text1.color = app.colorOrMainColor(text2.color);
```

## isDark

تابع `isDark` امکانش تخصیص این که برنامه به صورت تیره است یا خیر را به شما میدهد:
```javascript
if (app.isDark()){
    // code
}
```

## pageBack
برای بازگشت به صفحه قبلی و یا کوچک کردن برنامه:

```javascript
app.pageBack();
```

## pageLoad
برای نمایش یک صفحه دیگر این تابع کارایی دارید

```javascript
app.pageLoad( Page2() );
```

Page2 در اینجا نام صفحه جدید جهت بارگزاری است