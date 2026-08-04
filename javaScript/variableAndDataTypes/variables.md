---
id: variables
title: Variables
---

# Variables

Variables are one of the most fundamental concepts in JavaScript. A variable is a named container used to store and manage values in a program.

Think of a variable as a labeled box. You can place a value inside the box, access it whenever needed, and in some cases replace its value later.

---

## Why Do We Need Variables?

Variables help us store information that can be used multiple times throughout a program.

Without variables:

```javascript
console.log("John Doe");
console.log("Welcome John Doe");
console.log("Goodbye John Doe");
```

If the value changes, you would need to update every occurrence manually.

Using a variable:

```javascript
const name = "John Doe";

console.log(name);
console.log(`Welcome ${name}`);
console.log(`Goodbye ${name}`);
```

Now the value only needs to be updated in one place.

---

## Declaring Variables

In JavaScript, variables can be declared using:

- `var`
- `let`
- `const`

### Syntax

```javascript
let variableName = value;
```

Example:

```javascript
let name = "John Doe";
```

Here:

- `let` is the declaration keyword.
- `name` is the variable name.
- `"John Doe"` is the assigned value.

---

## Variable Declaration vs Initialization

Declaring and initializing a variable are two separate concepts.

### Declaration

A declaration creates the variable.

```javascript
let name;
```

### Initialization

Initialization assigns a value to the variable.

```javascript
name = "John Doe";
```

### Declaration and Initialization Together

```javascript
let name = "John Doe";
```

This is the most common approach.

---

## Variable Assignment

Assignment is the process of storing a value in a variable.

```javascript
let name;

name = "John Doe";
```

The assignment operator (`=`) assigns the value on the right to the variable on the left.

---

## Using Variables

Once a variable has been declared, its value can be accessed anywhere within its scope.

```javascript
let name = "John Doe";

console.log(name);
```

---

## Variable Naming Rules

JavaScript variable names must follow these rules:

### ✅ Allowed

Variable names can:

- Contain letters, numbers, `_`, and `$`
- Start with a letter, `_`, or `$`
- Use uppercase and lowercase letters

```javascript
let firstName = "John Doe";
let age1 = 25;
let _user = "John Doe";
let $price = 100;
```

---

### ❌ Not Allowed

Variable names cannot:

- Start with a number
- Contain spaces
- Contain hyphens (`-`)
- Use reserved keywords

```javascript
let 123user = "John";
let first name = "John";
let first-name = "John";
let const = "John";
```

---

### Case Sensitivity

JavaScript is case-sensitive.

```javascript
let firstName = "John";
let firstname = "Jane";
let FIRSTNAME = "Doe";
```

These are three different variables.

---

### Naming Convention

Use **camelCase** for variable names.

✅ Recommended

```javascript
let firstName = "John";
let totalOrderAmount = 1000;
let customerAddress = "New York";
```

❌ Avoid

```javascript
let x = "John";
let firstname = "John";
let FIRSTNAME = "John";
```

Choose names that clearly describe what the variable represents.

## Naming Conventions

Following naming conventions is not required by JavaScript, but it improves readability and maintainability.

### Use camelCase

The most widely used naming convention in JavaScript is **camelCase**.

✅ Recommended

```javascript
let firstName = "John";
let lastName = "Doe";
let userAge = 25;
let totalOrderAmount = 1000;
```

❌ Not Recommended

```javascript
let first_name = "John";
let FIRSTNAME = "John";
let firstname = "John";
```

In camelCase:

- The first word starts with a lowercase letter.
- Each subsequent word starts with an uppercase letter.

Example:

```javascript
let employeeDepartmentName = "Engineering";
```

---

### Use Meaningful Names

✅ Good

```javascript
let customerName = "John Doe";
let totalPrice = 1000;
```

❌ Poor

```javascript
let x = "John Doe";
let y = 1000;
```

---

### Avoid Unnecessary Abbreviations

✅ Good

```javascript
let customerAddress = "New York";
```

❌ Poor

```javascript
let custAddr = "New York";
```

---

## Reassigning Variables

Variables declared using `let` can be reassigned.

```javascript
let city = "New York";

city = "London";

console.log(city);
```

---

# Using `let`

The `let` keyword was introduced in ES6 and is commonly used when a variable's value may change.

```javascript
let counter = 1;

counter = 2;

console.log(counter);
```

---

# Using `const`

The `const` keyword is used when a variable should not be reassigned after its initial value has been set.

```javascript
const company = "Microsoft";

console.log(company);
```

Attempting to reassign a `const` variable results in an error.

```javascript
const company = "Microsoft";

company = "Google";
```

---

# Using `var`

Before ES6, JavaScript developers primarily used `var`.

```javascript
var language = "JavaScript";

console.log(language);
```

Although still supported, modern JavaScript development generally prefers `let` and `const`.

---

## Difference Between `var`, `let`, and `const`

| Feature | var | let | const |
|----------|-----|-----|-------|
| Can Reassign Value | ✅ | ✅ | ❌ |
| Can Redeclare Variable | ✅ | ❌ | ❌ |
| Block Scoped | ❌ | ✅ | ✅ |
| Modern Usage | ❌ | ✅ | ✅ |

---

## Variable Redeclaration

Redeclaration means declaring the same variable again in the same scope.

### Using `var`

```javascript
var name = "John Doe";
var name = "Jane Doe";
```

This is allowed.

### Using `let`

```javascript
let name = "John Doe";
let name = "Jane Doe";
```

This produces an error.

### Using `const`

```javascript
const name = "John Doe";
const name = "Jane Doe";
```

This also produces an error.

---

## Variable Scope

Scope determines where a variable can be accessed.

### Global Scope

```javascript
let company = "Tech Corp";

function printCompany() {
  console.log(company);
}
```

---

### Function Scope

```javascript
function greet() {
  let name = "John Doe";

  console.log(name);
}
```

The variable cannot be accessed outside the function.

---

### Block Scope

```javascript
if (true) {
  let name = "John Doe";

  console.log(name);
}
```

Variables declared with `let` and `const` are limited to the block in which they are declared.

---

## Variable Lifetime

The lifetime of a variable depends on its scope.

```javascript
function greet() {
  let name = "John Doe";
}
```

The variable exists only while execution is inside the function.

---

## Hoisting

JavaScript moves declarations to the top of their scope during execution. This behavior is known as **hoisting**.

### Hoisting with `var`

```javascript
console.log(name);

var name = "John Doe";
```

Output:

```text
undefined
```

---

### Hoisting with `let`

```javascript
console.log(name);

let name = "John Doe";
```

Output:

```text
ReferenceError
```

---

### Hoisting with `const`

```javascript
console.log(name);

const name = "John Doe";
```

Output:

```text
ReferenceError
```

---

## Temporal Dead Zone (TDZ)

Variables declared with `let` and `const` exist in a special state called the **Temporal Dead Zone**.

```javascript
console.log(name);

let name = "John Doe";
```

The variable cannot be accessed before its declaration is reached.

---

## Multiple Variable Declarations

Multiple variables can be declared in a single statement.

```javascript
let firstName = "John",
    lastName = "Doe",
    age = 25;
```

For better readability, many developers prefer:

```javascript
let firstName = "John";
let lastName = "Doe";
let age = 25;
```

---

## Choosing Between `let` and `const`

A common modern JavaScript practice is:

- Use `const` by default.
- Use `let` only when reassignment is necessary.
- Avoid using `var`.

```javascript
const company = "Tech Corp";

let counter = 0;

counter++;
```

---

## Common Beginner Mistakes

### Using a Variable Before Declaration

```javascript
console.log(name);

let name = "John Doe";
```

### Accidentally Reassigning a Constant

```javascript
const age = 25;

age = 30;
```

### Using Unclear Variable Names

```javascript
let x = 1500;
```

Prefer:

```javascript
let totalOrderAmount = 1500;
```

---

## Best Practices

- Prefer `const` whenever possible.
- Use `let` when reassignment is required.
- Avoid using `var` in modern applications.
- Follow the camelCase naming convention.
- Use meaningful and descriptive variable names.
- Declare variables close to where they are used.
- Avoid unnecessary global variables.
