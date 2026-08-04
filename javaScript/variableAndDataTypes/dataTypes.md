---
id: dataTypes
title: Data Types
---

# Data Types

Every value in JavaScript has a data type. A data type tells JavaScript what kind of data a value represents and what operations can be performed on it.

For example:

```javascript
let name = "John Doe";
let age = 25;
let isLoggedIn = true;
```

In the above example:

- `"John Doe"` is a **String**
- `25` is a **Number**
- `true` is a **Boolean**

---

## Why Are Data Types Important?

Data types help JavaScript understand how values should be stored and manipulated.

Consider the following example:

```javascript
console.log(10 + 5);
```

Output:

```text
15
```

Now compare it with:

```javascript
console.log("10" + "5");
```

Output:

```text
105
```

Although the values look similar, their data types are different, resulting in different behavior.

---

## JavaScript Data Types

JavaScript data types are categorized into two groups:

### Primitive Data Types

Primitive data types store a single value.

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

### Non-Primitive (Reference) Data Types

Reference data types can store collections of values.

- Object
- Array
- Function

---

## String

A string represents textual data.

Strings can be enclosed in single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ` ``).

```javascript
let firstName = "John";
let lastName = 'Doe';
let message = `Welcome`;
```

### String Example

```javascript
let name = "John Doe";

console.log(name);
```

Output:

```text
John Doe
```

---

## Number

A number represents both integer and decimal values.

```javascript
let age = 25;
let price = 99.99;
```

### Number Example

```javascript
let quantity = 10;
let price = 100;

console.log(quantity * price);
```

Output:

```text
1000
```

---

## Boolean

A boolean value represents one of two possible states:

- `true`
- `false`

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

### Boolean Example

```javascript
let isOnline = true;

console.log(isOnline);
```

Output:

```text
true
```

---

## Undefined

A variable declared without a value automatically receives the value `undefined`.

```javascript
let address;
```

### Example

```javascript
let city;

console.log(city);
```

Output:

```text
undefined
```

---

## Null

`null` represents the intentional absence of a value.

```javascript
let middleName = null;
```

### Example

```javascript
let selectedUser = null;

console.log(selectedUser);
```

Output:

```text
null
```

### `null` vs `undefined`

```javascript
let city;

console.log(city);
console.log(null);
```

Output:

```text
undefined
null
```

- `undefined` means a value has not been assigned.
- `null` means the value has been intentionally cleared or is empty.

---

## BigInt

BigInt is used to work with very large integers beyond the limit of the Number type.

```javascript
let population = 9007199254740991n;
```

### Example

```javascript
const bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
```

Output:

```text
123456789012345678901234567890n
```

---

## Symbol

A Symbol creates a unique identifier.

```javascript
const id = Symbol();
```

Even if two symbols have the same description, they are different.

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

Output:

```text
false
```

---

# Reference Data Types

Reference data types store collections of data or more complex entities.

---

## Object

Objects store data as key-value pairs.

```javascript
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};
```

### Example

```javascript
console.log(user.firstName);
```

Output:

```text
John
```

---

## Array

Arrays store multiple values in a single variable.

```javascript
const technologies = [
  "JavaScript",
  "React",
  "Node.js"
];
```

### Example

```javascript
console.log(technologies[0]);
```

Output:

```text
JavaScript
```

---

## Function

Functions are reusable blocks of code.

```javascript
function greet() {
  console.log("Hello World");
}
```

### Example

```javascript
greet();
```

Output:

```text
Hello World
```

---

## Checking Data Types

JavaScript provides the `typeof` operator to determine a value's data type.

### Syntax

```javascript
typeof value;
```

### Examples

```javascript
console.log(typeof "John Doe");
console.log(typeof 25);
console.log(typeof true);
```

Output:

```text
string
number
boolean
```

---

## Common `typeof` Results

| Value | Result |
|---------|---------|
| `"John"` | `"string"` |
| `25` | `"number"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `function(){}` | `"function"` |
| `{}` | `"object"` |
| `[]` | `"object"` |

---

## A Common JavaScript Quirk

Many beginners are surprised by this result:

```javascript
console.log(typeof null);
```

Output:

```text
object
```

This is a historical bug in JavaScript that still exists today for backward compatibility.
