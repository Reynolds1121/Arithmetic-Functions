# Resources
https://medium.com/@ctrlalt_diljeet/multiply-without-using-in-javascript-890857bb003c
https://stackoverflow.com/questions/29385437/can-i-perform-multiplication-without-using-the-multiplication-operator-in-ja
https://www.digitalocean.com/community/tutorials/how-to-do-math-in-javascript-with-operators
https://www.geeksforgeeks.org/calculating-the-power-of-a-number-in-java-without-using-math-pow-method/
https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/
https://www.geeksforgeeks.org/write-you-own-power-without-using-multiplication-and-division/

## Reflection

Question 1: In this challenge, your `multiply` and `power` functions are only expected to work with inputs that are positive integers or zero. Why would it be difficult to also allow negative numbers and decimals given the constraints of the challenge (i.e. having to perform multiplication by doing addition in a loop)?

Question 2: Why is it important that the functions that we write can gracefully handle invalid inputs instead of just letting the code produce JavaScript errors?

_(
1. Based on reading i've done allowing negative numbers and decimals in multiplication with addition makes the code significantly more complex due to the need to handle sign changes and precision, which isn't practical in a simple addition-based approach.

2. Based on reading i've done handling invalid inputs gracefully is important for robustness, user-friendliness, security, and maintainability, as it prevents unexpected behavior, provides feedback on input issues, and reduces the risk of security vulnerabilities.
)_