#!/bin/bash

echo "Compiling Styleguide HTML page"

# overwrite links.html and get all filenames in "content" directory
echo "" > styleGuideElements/links.html

echo "<nav class='sidebar'><div class='sidebar-header'><h1>jExam Style Guide</h1></div><ul>" > styleGuideElements/links.html

for FILE in styleGuideElements/content/*.html
do
	WITH_UNDERSCORE=$(basename $FILE | sed -e "s/\.html$//g")
	WITHOUT_UNDERSCORE=$(basename $FILE | sed -e "s/\.html$//g" -e "s/\_/ /g")
	echo "<li><a href="?section=$WITH_UNDERSCORE">$WITHOUT_UNDERSCORE</a></li>" >> styleGuideElements/links.html
done

echo "</ul></nav>" >> styleGuideElements/links.html

cat styleGuideElements/start.html > styleGuide.combined.html
echo "<div class='wrapper'>" >> styleGuide.combined.html
cat styleGuideElements/links.html >> styleGuide.combined.html

for FILE in styleGuideElements/content/*.html
do
	WITH_UNDERSCORE=$(basename $FILE | sed -e "s/\.html$//g")
	echo "<section id='$WITH_UNDERSCORE' class='container'>" >> styleGuide.combined.html
	cat $FILE >> styleGuide.combined.html
	echo "</section>" >> styleGuide.combined.html
done

echo "</div>" >> styleGuide.combined.html
cat styleGuideElements/end.html >> styleGuide.combined.html

echo "Done."
