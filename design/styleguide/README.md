# README

## How to use the Styleguide
* read all steps carefully

### View the Styleguide
* open the styleGuide.combined.html in your browser

### Make changes in the Styleguide
* go to /styleGuideElements/content and edit the desired html file
* run the build script

### Add new menu point in the Styleguide
* go to /styleGuideElements/content and create a new File following the naming convention X.X_NAME.html
* spaces in the NAME are generated from underscores _
* run the build script

### Building the Styleguide
* run the build script that suits your system. Either build.sh or build.bat.
* your changes in the content should now be visible in the styleGuide

### Making changes to the styling
* only change the styling in the /scss/custom.scss
* if you don't know about scss, read this intro https://dzone.com/articles/introduction-of-scss
* if you don't know how bootstrap theming works: https://getbootstrap.com/docs/4.0/getting-started/theming/

* to compile the scss file to the custom.min.css you will need a sass compiler https://www.npmjs.com/package/node-sass
* you will also need nodejs for that
* there are plugins available for Atom and VSCode, that autocompile the scss file on save

### Add the changed styling to the Website
* copy the custom.min.css file to themes/mmsTheme/static/css/
