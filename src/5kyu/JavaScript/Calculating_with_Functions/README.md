## [Calculating with Functions](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39)
---
### Description

This time we want to write calculations using functions and get the results. Lets have a look at some examples:

```javascript
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```
```haskell
seven $ times $ five   ->  35 :: Int
four $ plus $ nine     ->  13 :: Int
eight $ minus $ three  ->   5 :: Int
six $ dividedBy $ two  ->   3 :: Int
```
```ruby
seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
```
```python
seven(times(five())) # must return 35
four(plus(nine())) # must return 13
eight(minus(three())) # must return 5
six(divided_by(two())) # must return 3
```
```factor
seven multiplied-by five   ! must evaluate to 35
four plus nine             ! must evaluate to 13
eight minus three          ! must evaluate to 5
six divided-by two         ! must evaluate to 3
```

Requirements:
~~~if:ruby,python
* There must be a function for each number from 0 (zero) to 9 (nine)
* There must be a function for each of the following mathematical operations: plus, minus, times, divided_by
* Each calculation consist of exactly one operation and two numbers
* The most outer function represents the left operand, the most inner function represents the right operand
* Division should be **integer division**. For example, this should return `2`, not `2.666666...`:
~~~
~~~if:factor
* There must be a word for each number from 0 (zero) to 9 (nine)
* There must be a word for each of the following mathematical operations: plus, minus, multiplied-by, divided-by
* Each calculation consist of exactly one operation and two numbers
* The leftmost word represents the left operand, the rightmost word represents the right operand
* Division should be **integer division**. For example, this should return `2`, not `2.666666...`:
~~~
~~~if-not:ruby,python,factor
* There must be a function for each number from 0 (zero) to 9 (nine)
* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
* Each calculation consist of exactly one operation and two numbers
* The most outer function represents the left operand, the most inner function represents the right operand
* Division should be **integer division**. For example, this should return `2`, not `2.666666...`:
~~~

```javascript
eight(dividedBy(three()));
```
```haskell
eight $ dividedBy $ three
```
```ruby
eight(divided_by(three))
```
```python
eight(divided_by(three()))
```
```factor
eight divided-by three
```

<br>

###### Tags: `FunctionalProgramming`

###### Creator: [BattleRattle](https://www.codewars.com/users/BattleRattle)

###### Completed On: `31-07-2022`

###### Last Attempt On: `31-07-2022`

---

### Takeaways
- Breaking the problem down on a paper is recommended
- Functional programming paradigm seems arcane & impossible at first, but its really good? I wouldn't say easy lol
- Anonymous functions can be really useful sometimes
- Also, learn more about function scope, trust me, it had me stuck until I turned one of anonymous function parameter optional
- I would like to revisit this kata sometime in the future soon, people on the solution kata has amazing solutions