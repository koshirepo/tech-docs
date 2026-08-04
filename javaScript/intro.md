---
id: intro
title: Getting Started
slug: /
---

# 1. Getting Started

Welcome to the JavaScript documentation. This guide introduces JavaScript fundamentals and helps you get started with writing and running JavaScript code.

## 1.1 Major Versions

JavaScript has evolved significantly over the years. Some important milestones include:

1. **The Foundational Era (1997-2009)**
2. **The Modern Milestone (2015)** - Introduction of ES6 (ECMAScript 2015)
3. **The Annual Release Cycle (2016-Present)**

---

# 2. Using `console.log()`

`console.log()` is a JavaScript method used to print messages or values to the browser's Developer Console or a Node.js terminal. It is primarily used for debugging and understanding what your code is doing.

## 2.1 Getting Started

Open the browser's Developer Console, type the following code, and press `Enter`:

```javascript
console.log("Hello World");
```

**Output**

```text
Hello World
```

It will print **Hello World** to the console.

/img/console.log.png

---

## 2.2 Logging Variables

Variables are used to store data that can be reused throughout your program.

**Example**

```javascript
let name = "John Doe";
let age = 25;

console.log(name);
console.log(age);
```

**Output**

```text
John Doe
25
```

You can also log multiple variables together:

```javascript
let name = "John Doe";
let age = 25;

console.log("Name:", name);
console.log("Age:", age);
```

**Output**

```text
Name: John Doe
Age: 25
```

---

## 2.3 Logging Objects

Objects are used to store related data as key-value pairs.

**Example**

```javascript
const user = {
  name: "John Doe",
  role: "Developer",
  experience: 3
};

console.log(user);
```

**Output**

```javascript
{
  name: "John Doe",
  role: "Developer",
  experience: 3
}
```

You can access individual properties of an object:

```javascript
const user = {
  name: "John Doe",
  role: "Developer"
};

console.log(user.name);
console.log(user.role);
```

**Output**

```text
John Doe
Developer
```

---

## 2.4 Logging Arrays

Arrays are used to store multiple values in a single variable.

**Example**

```javascript
const technologies = [
  "JavaScript",
  "React",
  "Node.js"
];

console.log(technologies);
```

**Output**

```javascript
["JavaScript", "React", "Node.js"]
```

Access a specific element:

```javascript
console.log(technologies[0]);
```

**Output**

```text
JavaScript
```

---

## 2.5 String Interpolation

Template literals make it easy to combine text and variables.

**Example**

```javascript
const name = "John Doe";

console.log(`Welcome ${name}!`);
```

**Output**

```text
Welcome John Doe!
```
