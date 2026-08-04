---
id: builtInConstants
title: Built-in Constants
---

# Built-in Constants

JavaScript provides several built-in constants that represent special numeric values and commonly used mathematical concepts.

These constants are available globally or through the `Number` object.

---

## `undefined`

`undefined` represents the absence of an assigned value.

### Example

```javascript
let username;

console.log(username);
```

Output:

```text
undefined
```

### Notes

- Variables that have been declared but not assigned a value are `undefined`.
- Functions that do not explicitly return a value also return `undefined`.

---

## `null`

`null` represents the intentional absence of a value.

### Example

```javascript
const selectedUser = null;

console.log(selectedUser);
```

Output:

```text
null
```

### Comparing `null` and `undefined`

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

Output:

```text
true
false
```

### Notes

- `undefined` means a value has not been assigned.
- `null` means a value has been intentionally set to "no value".

---

## `NaN`

`NaN` stands for **Not a Number**.

It is returned when a mathematical operation cannot produce a valid numeric result.

### Example

```javascript
console.log(0 / 0);
```

Output:

```text
NaN
```

### Example

```javascript
console.log(Number("John Doe"));
```

Output:

```text
NaN
```

---

## Checking for `NaN`

Use `Number.isNaN()` to determine whether a value is `NaN`.

### Example

```javascript
const result = Number("John Doe");

console.log(Number.isNaN(result));
```

Output:

```text
true
```

### Incorrect Approach

```javascript
console.log(NaN === NaN);
```

Output:

```text
false
```

### Notes

`NaN` is the only value in JavaScript that is not equal to itself.

---

## `Infinity`

`Infinity` represents positive mathematical infinity.

### Example

```javascript
console.log(1 / 0);
```

Output:

```text
Infinity
```

### Example

```javascript
console.log(Infinity > 1000000);
```

Output:

```text
true
```

---

## `-Infinity`

`-Infinity` represents negative mathematical infinity.

### Example

```javascript
console.log(-1 / 0);
```

Output:

```text
-Infinity
```

### Example

```javascript
console.log(-Infinity < -999999);
```

Output:

```text
true
```

---

# Number Constants

The `Number` object provides several useful constants.

---

## `Number.MAX_VALUE`

Represents the largest positive number that JavaScript can represent.

### Example

```javascript
console.log(Number.MAX_VALUE);
```

Output:

```text
1.7976931348623157e+308
```

---

## `Number.MIN_VALUE`

Represents the smallest positive number greater than zero.

### Example

```javascript
console.log(Number.MIN_VALUE);
```

Output:

```text
5e-324
```

---

## `Number.MAX_SAFE_INTEGER`

Represents the largest integer that can be safely represented without losing precision.

### Example

```javascript
console.log(Number.MAX_SAFE_INTEGER);
```

Output:

```text
9007199254740991
```

### Example

```javascript
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
```

Output:

```text
9007199254740992
9007199254740992
```

### Notes

Values larger than `MAX_SAFE_INTEGER` may produce unexpected results.

---

## `Number.MIN_SAFE_INTEGER`

Represents the smallest safe integer value.

### Example

```javascript
console.log(Number.MIN_SAFE_INTEGER);
```

Output:

```text
-9007199254740991
```

---

## `Number.EPSILON`

Represents the smallest difference between `1` and the next representable number greater than `1`.

### Example

```javascript
console.log(Number.EPSILON);
```

Output:

```text
2.220446049250313e-16
```

### Example

```javascript
console.log(0.1 + 0.2 === 0.3);
```

Output:

```text
false
```

A safer comparison:

```javascript
console.log(
  Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON
);
```

Output:

```text
true
```

---

## `Number.POSITIVE_INFINITY`

Represents positive infinity.

### Example

```javascript
console.log(Number.POSITIVE_INFINITY);
```

Output:

```text
Infinity
```

---

## `Number.NEGATIVE_INFINITY`

Represents negative infinity.

### Example

```javascript
console.log(Number.NEGATIVE_INFINITY);
```

Output:

```text
-Infinity
```

---

# Type Checking Built-in Constants

The `typeof` operator can be used to examine these values.

### Example

```javascript
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof Infinity);
```

Output:

```text
undefined
object
number
number
```

### Notes

```javascript
typeof null;
```

Output:

```text
object
```

This is a long-standing JavaScript quirk that exists for backward compatibility.

---

## Common Mistakes

### Checking for `NaN` Using Equality

```javascript
console.log(NaN === NaN);
```

Output:

```text
false
```

Prefer:

```javascript
console.log(Number.isNaN(NaN));
```

---

### Mixing `null` and `undefined`

```javascript
let firstName;

const middleName = null;
```

These values have different meanings:

- `undefined` → value not assigned.
- `null` → intentionally empty value.

---

## Summary

JavaScript provides several built-in constants:

| Constant | Description |
|-----------|-------------|
| `undefined` | Variable has no assigned value |
| `null` | Intentional absence of a value |
| `NaN` | Not a Number |
| `Infinity` | Positive infinity |
| `-Infinity` | Negative infinity |
| `Number.MAX_VALUE` | Largest representable number |
| `Number.MIN_VALUE` | Smallest positive number |
| `Number.MAX_SAFE_INTEGER` | Largest safe integer |
| `Number.MIN_SAFE_INTEGER` | Smallest safe integer |
| `Number.EPSILON` | Smallest precision difference |

Understanding these constants will help you write more reliable code and avoid common JavaScript pitfalls.