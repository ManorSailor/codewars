## [Complementary DNA](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)
---
### Description

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the instructions for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols A and T are complements of each other, as C and G. 
Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (**input --> output**)
~~~if-not:haskell
```
ATTGC --> TAACG
GTAT --> CATA
```
~~~
```if:haskell
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
```

<br>

###### Tags: `Strings, Fundamentals`

###### Creator: [JustyFY](https://www.codewars.com/users/JustyFY)

###### Completed On: `29-08-2022`

###### Last Attempt On: `29-08-2022`

---

### Takeaways
- Breaking the problem down on a paper is recommended
- Solve it a bit differently next time
