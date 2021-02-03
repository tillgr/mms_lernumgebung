# Shortcode Templates

[https://www.youtube.com/watch?v=Eu4zSaKOY4A](https://www.youtube.com/watch?v=Eu4zSaKOY4A)

Little pieces of code that you can put into you .md file.

➡️ essentially partial templates used in the markdown files

### Where do they life?

```html
/layouts/shortcodes/...
```

### How does the file look like?

➡️ HTML

```
[myShortcodeFileName].html
```

```html
<!-- Simple Text -->
This is valid shortcode!
```

### How to use those shortcodes?

➡️ in a markdown file we can now say:

```markdown
{{< [myShortcodeFileName] >}}
```

### Can I make them dynamic?

➡️ we can pass variables to the shortcode:

```
{{< [myShortcodeFileName] **color**="blue" >}}
```

```html
<!-- Use passed vars -->
<p style="color: {{ .Get `**color**` }}">We used the var to style this text!<p>
```

⚠️ We need to use ``` everywhere, where `"` would 'cause us trouble. As seen here in the inline styling of the HTML element.

➡️ we can also pass  positional variables to the shortcode:

```
{{< [myShortcodeFileName] blue >}}
```

```html
<!-- Use passed vars -->
<p style="color: {{ .Get **0** }}">We used the var to style this text!<p>
```

ℹ️ The index `0` greps the first variable passed to the shortcode

### Encapsulate data in a shortcode?

➡️ How to use in the markdown file:

```html
{{< [myShortcodeFileName] blue >}}
	<!-- Some Text, etc. -->
{{< **/**[myShortcodeFileName] >}}
```

➡️ How to use in the shortcode file:

```html
<p style="color: {{ .Get **0** }}">
	{{ .Inner }}
<p>
```

⚠️ Markdown syntax won't be rendered e.g.: `** bold text **` which should display a bold text won't be rendered as markdown but simple as a text. To support markdown rendering you need to replace the `<` and `>` with `%` .
