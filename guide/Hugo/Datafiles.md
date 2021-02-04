# Datafiles

[https://www.youtube.com/watch?v=FyPgSuwIMWQ](https://www.youtube.com/watch?v=FyPgSuwIMWQ)

File types to store in data:

```
.json, .yaml, .toml
```

Where are they stored:

```jsx
/data/...
```

Access data from a datafile:

```html
{{ range .Site.Data.[fileName] }}
	{{ .name }}
{{ ende }}
```

→ Loops over the data in the file with `[fileName]` stored in the `/data/` folder.
