# Taxonomies

[https://www.youtube.com/watch?v=pCPCQgqC8RA](https://www.youtube.com/watch?v=pCPCQgqC8RA)

→ How we group text together!

## TAG & CATEGORY

→ Organiese your content

We use [Front Matter](./Front%20Matter.md) to add tags/categories to the page:

```bash
---
title: "A"
date: 2017-09-02T17:50:43-04:00
draft: true
tags: ["tag1", "tag2", "tag3"]
categories: ["category1"]
---
```

🗜️ Creates actual pages for those tags/categories and lists all pages marked with the some ones.

### Custom Taxonomies

```bash
---
title: "A"
date: 2017-09-02T17:50:43-04:00
draft: true
customTaxs: ["ct1", "ct2", ...]
---
```

In the `config.toml` we need to configure hugo to create a overview page for this taxonomie:

```bash
*...*
[taxonomies]
	tag = "tag"
	category = "categories"
	customTaxs = "customTag"
*...*
```

⚠️ We need to include the default taxonomies when adding a new one.
