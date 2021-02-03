# ℹ️ General Information
At the beginning of the project, we analyzed the old site thoroughly and summarized this in a small documentation, which serves as a good starting point for the project.

You can find the documentation here: #27

We also created a summary of topics for future developers under %5

# 🗃️ Project Structure
HUGO has a specific folder structure we can take advantage of. For more information see also: [Directory-structure in HUGO](https://gohugo.io/getting-started/directory-structure/)

It is important to know that we seperated the content from the styling. So we created our own HUGO theme ([here is explained how](https://retrolog.io/blog/creating-a-hugo-theme-from-scratch/)). You can find it here:
```
themes/mmsTheme
```

Everything related to styling the app lives here. So if you want th change a styling you have to change the theme!

If you want to add a .css-file you should add it here:
```
themes/mmsTheme/static/css
```
(⚠️ Dont forget to include it in the HTML-file!)


### Shortcodes
Our shortcodes can be find in the theme!

### Applets
We created the applest as shortcodes which live here:

The js-code:
```
static/js
```
The styling files:
```
static/css
themes/mmsTheme/static/css
```
The assets:
```
static/assets
```
The HTML:
```
layouts/shortcodes/snippets
```


# 🧬 Shortcodes
To harness the full power of HUGO we have introduced our own shortcodes. We have documented them here (#37) and provided examples.

You can also find a short guide about what they are and how to use them.

# 🎨 Styleguide
We created a styling guide for our project. It is included as a subproject in this one and can be found here:
```
/design/styleguide/
```

The folder includes a README.md with more information on how to use it.

# 💻 Local Installation

* Install HUGO: https://gohugo.io/getting-started/installing/
* Checkout this project `git clone https://git.imld.de/teaching/kp-mi/kp-mi-20/lern-mms.git`
* Open project `cd lern-mms`
* Create and open themes folder `mkdir themes && cd themes`
* Install [Techdoc Theme](https://themes.gohugo.io//theme/hugo-theme-techdoc/getting-started/installation/) `git clone https://github.com/thingsym/hugo-theme-techdoc.git`

# 📺 Preview

* Open project `cd lern-mms`
* Run Hugo’s built-in local server `hugo server -D`
* Open site in browser http://localhost:1313

# 👨🏽‍🏫 HUGO Quickies

## 🗺️ Guides

[Datafiles](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Datafiles%20613aa5e7baca47249a99126eaf69b8cd.md)

[Shortcode Templates](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Shortcode%20Templates%20cb01d77cf56d47498e5521d74f8a985d.md)

[Taxonomies](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Taxonomies%204e69c0ef66e54542afa436b2c5182575.md)

[Partial Templates](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Partial%20Templates%209725f0b5bdcc43fa856175d410109e60.md)

[Front Matter](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Front%20Matter%204177e84103c54b1487dc8e8db6ba13ba.md)

[Section Templates](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Section%20Templates%202663fa27068f4c339e6215a5d34a821e.md)

[Archetypes](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Archetypes%20d1b729353c224ccdb70567094442e949.md)

[Shortcodes](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Shortcodes%209d29790e4a224e2dbade6771f8fa5cbf.md)

[Templating](guide/Hugo%20d30128abd4d3405a83dc8f4b85741991/Templating%2086263d712d394400ae44c06aa7ed5dd8.md)

