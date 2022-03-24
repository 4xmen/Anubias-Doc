# app

The `app` class is a general class
to do get general actions or get application's information.

## mainColor

Retrun the main color of application:

```javascript
text1.color = app.mainColor();
```

## colorOrMainColor

If you want to use safe color, 
If the color is null then use main color You can use it:

```javascript
text1.color = app.colorOrMainColor(text2.color);
```

## isDark

The `isDark` function let you to know app is dark or not:
```javascript
if (app.isDark()){
    // code
}
```

## pageBack
Go back page or minimize app:

```javascript
app.pageBack();
```

## pageLoad
You can load new page with this function

```javascript
app.pageLoad( Page2() );
```

Page2 is name of your page need to load