setlocal EnableDelayedExpansion
echo on
echo "Compiling Styleguide HTML page"

REM overwrite links.html and get all filenames in "content" directory
copy nul styleGuideElements\links.html
@echo ^<nav class=^'sidebar^'^>^<div class=^"sidebar-header^"^>^<h1^>Style Guide^</h1^>^</div^>^<ul^> > styleGuideElements\links.html

for %%a in ("styleGuideElements\content\*.html") do (
      set "noscore=%%~na"
      @echo ^<li^>^<a href=^"?section=%%~na^"^>!noscore:_= !^</a^>^</li^> >> styleGuideElements\links.html
   )

@echo ^</ul^>^</nav^> >> styleGuideElements\links.html

type "styleGuideElements\start.html" > styleGuide.combined.html
@echo ^<div class=^"wrapper^"^> >> styleGuide.combined.html
type "styleGuideElements\links.html" >> styleGuide.combined.html

for %%a in ("styleGuideElements\content\*.html") do (
      @echo ^<section id=^"%%~na^" class=^"container^"^> >> styleGuide.combined.html
      type %%a >> styleGuide.combined.html
      @echo ^</section^> >> styleGuide.combined.html
   )

@echo ^</div^> >> styleGuide.combined.html
type "styleGuideElements\end.html" >> styleGuide.combined.html

echo "Done."
