## [Strip Comments](https://www.codewars.com/kata/51c8e37cee245da6b40000bd)
---
### Description

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. 

**Example:**

Given an input string of:
```
apples, pears # and bananas
grapes
bananas !apples
```

The output expected would be:
```
apples, pears
grapes
bananas
```

The code would be called like so:

```javascript
var result = solution(apples, pears # and bananas\ngrapes\nbananas !apples, [#, !])
// result should == apples, pears\ngrapes\nbananas

```

```kotlin
var result = solution(apples, pears # and bananas\ngrapes\nbananas !apples, charArrayOf(#, !))
// result should == apples, pears\ngrapes\nbananas

```

```coffeescript
result = solution(apples, pears # and bananas\ngrapes\nbananas !apples, [#, !])
# result should == apples, pears\nograpes\nbananas

```

```ruby
result = solution(apples, pears # and bananas\ngrapes\nbananas !apples, [#, !])
# result should == apples, pears\ngrapes\nbananas

```

```crystal
result = solution(apples, pears # and bananas\ngrapes\nbananas !apples, [#, !])
# result should == apples, pears\ngrapes\nbananas

```

```python
result = solution(apples, pears # and bananas\ngrapes\nbananas !apples, [#, !])
# result should == apples, pears\ngrapes\nbananas

```

```csharp
string stripped = StripCommentsSolution.StripComments(apples, pears # and bananas\ngrapes\nbananas !apples, new [] { #, ! })
// result should == apples, pears\ngrapes\nbananas
```

```julia
result = stripcomments(apples, pears # and bananas\ngrapes\nbananas !apples, [#, !])
# result should == apples, pears\ngrapes\nbananas
```

```factor
apples, pears # and bananas\ngrapes\nbananas !apples
#!
strip-comments ! apples, pears\ngrapes\nbananas
```

<br>

###### Tags: `Strings, Algorithms`

###### Creator: [jhoffner](https://www.codewars.com/users/jhoffner)

###### Completed On: `24-08-2022`

###### Last Attempt On: `24-08-2022`

---

### Takeaways
- Breaking the problem down on a paper is recommended
- Can you solve it without using RegEx?
