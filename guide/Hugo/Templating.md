# Templating

## Access a Predefined Variable

A predefined variable could be a variable already existing in the current scope (like the `.Title` example in the Variables section below) or a custom variable (like the `$address` example in that same section).

```jsx
{{ .Title }}
{{ $address }}
```

Parameters for functions are separated using spaces. The general syntax is:

```jsx
{{ FUNCTION ARG1 ARG2 .. }}
```

### Methods and Fields are Accessed via dot Notation

Accessing the Page Parameter `bar` defined in a piece of content’s [Front Matter](./Front%20Matter.md) .

```jsx
{{ .Params.bar }}
```

### Parentheses Can be Used to Group Items Together

```jsx
{{ if or (isset .Params "alt") (isset .Params "caption") }} Caption {{ end }}
```
