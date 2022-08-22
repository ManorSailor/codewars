## [Codewars style ranking system](https://www.codewars.com/kata/51fda2d95d6efda45e00004e)
---
### Description

Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.  

##### Business Rules:

* A user starts at rank -8 and can progress all the way to 8.
* There is no 0 (zero) rank. The next rank after -1 is 1.
* Users will complete activities. These activities also have ranks.
* Each time the user completes a ranked activity the users rank progress is updated based off of the activitys rank
* The progress earned from the completed activity is relative to what the users current rank is compared to the rank of the activity
* A users rank progress starts off at zero, each time the progress reaches 100 the users rank is upgraded to the next level
* Any remaining progress earned while in the previous rank will be applied towards the next ranks progress (we dont throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression). 
* A user cannot progress beyond rank 8. 
* The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error. 

The progress is scored like so:

* Completing an activity that is ranked the same as that of the users will be worth 3 points
* Completing an activity that is ranked one ranking lower than the users will be worth 1 point
* Any activities completed that are ranking 2 levels or more lower than the users ranking will be ignored
* Completing an activity ranked higher than the current users rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is `10 * d * d` where `d` equals the difference in ranking between the activity and the user.  

##### Logic Examples:
* If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
* If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
* If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
* If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
* If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)

##### Code Usage Examples:
```javascript
var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7
```
```coffeescript
user = new User()
user.rank # => -8
user.progress # => 0
user.incProgress(-7)
user.progress # => 10
user.incProgress(-5) # will add 90 progress
user.progress # => 0 # progress is now zero
user.rank # => -7 # rank was upgraded to -7
```
```ruby
user = User.new
user.rank # => -8
user.progress # => 0
user.inc_progress(-7)
user.progress # => 10
user.inc_progress(-5) # will add 90 progress
user.progress # => 0 # progress is now zero
user.rank # => -7 # rank was upgraded to -7
```
```python
user = User()
user.rank # => -8
user.progress # => 0
user.inc_progress(-7)
user.progress # => 10
user.inc_progress(-5) # will add 90 progress
user.progress # => 0 # progress is now zero
user.rank # => -7 # rank was upgraded to -7
```
```java
User user = new User();
user.rank; // => -8
user.progress; // => 0
user.incProgress(-7);
user.progress; // => 10
user.incProgress(-5); // will add 90 progress
user.progress; // => 0 // progress is now zero
user.rank; // => -7 // rank was upgraded to -7
```
```haskell
rank newUser -- => -8
progress newUser -- => 0
let u2 = incProgress (-7) newUser
progress u2 -- =>  10
let u3 = incProgress (-5) u2 -- will add 90 progress
progress u3 -- => 0 -- progress is now zero
rank u3 -- => -7 -- rank was upgraded to -7
```
```csharp
User user = new User();
user.rank; // => -8
user.progress; // => 0
user.incProgress(-7);
user.progress; // => 10
user.incProgress(-5); // will add 90 progress
user.progress; // => 0 // progress is now zero
user.rank; // => -7 // rank was upgraded to -7
```

~~~if:java
**Note:** In **Java** some methods may throw an `IllegalArgumentException`.
~~~
~~~if:csharp
**Note:** In **C#** some methods may throw an `ArgumentException`.
~~~

**Note**: Codewars no longer uses this algorithm for its own ranking system. It uses a pure Math based solution that gives consistent results no matter what order a set of ranked activities are completed at. 

<br>

###### Tags: `Algorithms`

###### Creator: [jhoffner](https://www.codewars.com/users/jhoffner)

###### Completed On: `22-08-2022`

###### Last Attempt On: `22-08-2022`

---

### Takeaways
- Breaking the problem down on a paper is recommended
- Can you improve your solution?
- PS, Add comments
- PPS, never would've thought that ignoring a number while taking difference can be so tricky
