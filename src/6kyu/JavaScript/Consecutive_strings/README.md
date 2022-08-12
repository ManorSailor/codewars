## [Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)
---
### Description

You are given an array(list) `strarr` of strings and an integer `k`. Your task is to return the **first** longest string
consisting of k **consecutive** strings taken in the array.

#### Examples:
```
strarr = [tree, foling, trashy, blue, abcdef, uvwxyz], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy (      12)  concatenation of strarr[1] and strarr[2]
trashyblue   (      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   (      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz (      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: folingtrashy and abcdefuvwxyz.
The first that came is folingtrashy so 
longest_consec(strarr, 2) should return folingtrashy.

In the same way:
longest_consec([zone, abigail, theta, form, libe, zas, theta, abigail], 2) --> abigailtheta
```
n being the length of the string array, if `n = 0` or `k > n` or `k <= 0` return  (return `Nothing` in Elm, nothing in Erlang).

#### Note
consecutive strings : follow one after another without an interruption

<br>

###### Tags: `Fundamentals`

###### Creator: [g964](https://www.codewars.com/users/g964)

###### Completed On: `12-08-2022`

###### Last Attempt On: `12-08-2022`

---

### Takeaways
- Breaking the problem down on a paper is recommended
- Can you solve it differently?
- PS, author hasn't done a good enough job with the kata's description, it is flawed. Remember, order of the array shouldn't change, even after you have created a consecutive array of strings
