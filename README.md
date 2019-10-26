# Projekt - Webbplats för CV

URL till webbplats:
http://studenter.miun.se/~emno1501/dt173g/projekt/cv/index.php

Webbplatsen konsumerar en skapad webbtjänst som tillhandahåller data om CV-uppgifter. Webbplatsen hämtar datan via anrop med Fetch API. Datan som hämtas är genomförda utbildningar, arbetserfarenheter och skapade webbplatser och skrivs ut i artikelelement i vardera sektioner.

Repot består av;
* En Gulp-grund som konverterar, komprimerar och pipe:ar filer i src-mappen till pub-mappen som är redo för publicering
* En index.html-fil
* En scss-mapp main.scss-fil som importerar tre partials (och i pub har konverterats till CSS): 
    * _base.scss - innehåller variabler för färger, selector inheritances för typografi, mixins för media queries, regler för baselement som rubriker, paragrafer, länkar osv.
    * _component.scss - innehåller selector inheritances för komponenter som menyer, formulär och knappar.
    * _layout.scss - innehåller alla regler för layouten av webbplatsen.
* En js-mapp med en Javascript-fil där koden för fetch-anrop med mera finns.
* En pics-mapp för alla bilder.