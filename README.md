# mahdi-time-picker
Angular JS Time Picker that loads inline of the page rather than modal. It is lite and awesome looking. 

## Prerequisites
Angular JS<br>
Moment JS
## INSTALLATION
Installing the time picker is very easy. Just you need bower installed in your project. Then install it using bower like this: 

> yourProjectDirectory> bower install mahdi-time-picker [--save]

<br>After installing the package you need to insert the mahdi-time-picker.js file from the installed package inside your page like this: <br>
> `<script src=".../mahdi-time-picker/mahdi-time-picker.js"></script>`

After loading the script you have to include the module name "mahdiTimePicker" in your app's module list like this:
> `angular.module('yourApp',['mahdiTimePicker'])`

N.B. The file must be linked after the link of Angular and Moment scripts.

## Usage
Put the directive anywhere of your page like this <br>
> `<mahdi-time-picker ng-model="returnedTime"></mahdi-time-picker>`
There will be time showing box with clock icon. Clicking on clock makes the picker area visible and clicking again disappears the area.
After selecting the time you need to Click on Change button. Selected time will be returned in your ng-model attribute.

## Option
You may pass the parameter for your desired time format e.g.- hours/minutes/seconds, hours/minutes AM , etc using time-format attribute like this:<br>
> `<mahdi-time-picker ng-model="returnedTime" time-format="'hh:mm A'"></mahdi-time-picker>`
This package uses MomentJS time format when it returns you the picked time. To learn more about available time formats you may visit : https://momentjs.com/

## Credits
All credits go to Almighty. I'm also thankful to my team members in Aan-Nahl and also Abir Bhai. Special thanks to Hasan for his great design support.

## Usage Policy
Feel free to use the package and you can bring any changes forking the package.


