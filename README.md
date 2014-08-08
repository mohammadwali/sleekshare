SleekShare
=========

Sleekshare is a Jquery based lightweight social sharing plugin with inbuilt feature of displaying your total share counts of current page same as you have seen on [Mashable](http://mashable.com) or other sites.

Features
-------------
  *  Share counts
  *  Light weight
  *  Easy optimizations
  *  Allows Custom styles
  *  Clean and Fast

Installation / Usage
-------------
Installing SleekShare is quite simple all you just need is to follow the below steps.

  **Include jquery library first (If not included already).**

```html
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" ></script>
``` 

 **After that you can use the below links to include plugin files which are hosted with Cloudflare CDN or [Download the zip](https://github.com/mohammadwali/sleekshare/archive/master.zip) and host it your self.**

```html
<link type="text/css" rel="stylesheet" href="http://mohammadwali.net/sleekshare/sleekShare-min.css" id="sleekShare-style"> 
<script type="text/javascript" src="http://mohammadwali.net/sleekshare/sleekShare-min.js" ></script>
```

 **Include these lines in your page <head> section remember to add jquery library above these files means you need to add these link after the jquery library so it can work properly.**

 **Now simply call the plugin with your desired options or you can leave it blank for defaults.**

```javascript
$(function(){
 $.sleekShare()
})
```

 **Blogger users if you need this plugin only on post page so you can simply call this in a [condition](http://blog.mohammadwali.in/2013/11/understanding-blogger-conditional-tags.html)**

```html
<b:if cond='data:blog.pageType == "item"'>
<script type="text/javascript">
$(function(){
    $.sleekShare();
})
</script>
</b:if>
```


Available options!
-------------
|     Option        |     Default   |    Can be   | Data type  |
| :---------------- |:-------------:| :---------: | :--------: |
| **position:**     | left          | left, right | String     |
| **countEach:**    | true          | true, false | Boolean    |
| **commentIcon:**  | true          | true, false | Boolean    |
| **customStyles:** | false         | true, false | Boolean    |



Roles of options
-------------
|     Option        |     Default   |
| :---------------- |:-------------|
| **position:**     | Align the social bar to left or right of browser window |
| **countEach:**    | Count each network share (EX. Facebook 120 shares)      |
| **commentIcon:**  | The comment icon you can remove it if you are not using this on blogger by just using the false statement.          |
| **customStyles:** | Custom styles allows you to add a custom stylesheet to the plugin by default the plugin check for the stylesheet and if not found it add that automatically so making this true will not add the stylesheet automatically and you can use your own custom stylesheet.         |

Using Custom options
-------------
**The Syntax**
```javascript
$(function(){
$.sleekShare({
   //options
})

// for example
$.sleekShare({
   position : "right"
}) 

// multiple options 

$.sleekShare({
   position : "right", commentIcon: false
})
})
```

Demo 
-----------

[Take a Demo here](http://blog.mohammadwali.in/2014/04/sleekshare-social-share-plugin-with-share-counts.html#download-demo)



License
-------------
The MIT License (MIT)
