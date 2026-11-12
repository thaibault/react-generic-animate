<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
4.0 international license.
See https://creativecommons.org/licenses/by/4.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
<!--|frFR:Statut du projet-->
Project Status
--------------

[![npm](https://img.shields.io/npm/v/react-generic-animate?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/react-generic-animate)
[![npm downloads](https://img.shields.io/npm/dy/react-generic-animate.svg?style=for-the-badge)](https://www.npmjs.com/package/react-generic-animate)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-animate/build.yaml?style=for-the-badge)](https://github.com/thaibault/react-generic-animate/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-animate/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/react-generic-animate/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-animate/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/react-generic-animate/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-animate/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/react-generic-animate/actions/workflows/lint.yaml)
[![test](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-animate/test-coverage-report.yaml?label=test&style=for-the-badge)](https://github.com/thaibault/react-generic-animate/actions/workflows/test-coverage-report.yaml)

[![code coverage](https://img.shields.io/coverallsCoverage/github/thaibault/react-generic-animate?label=code%20coverage&style=for-the-badge)](https://coveralls.io/github/thaibault/react-generic-animate)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-animate/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/react-generic-animate/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/react-generic-animate.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/react-generic-animate)


<!--|deDE:Einsatzmöglichkeiten-->
<!--|frFR:Cas d'utilisation-->
Use case
--------

A React component which fades its content in when it appears and out before
it disappears. Wrap anything that is shown conditionally, like hints, error
messages or list entries, and it no longer pops in and out abruptly. It is a
thin, preconfigured layer on top of "CSSTransition" from
[react-transition-group](https://reactcommunity.org/react-transition-group).
<!--deDE:
    Eine React-Komponente, die ihren Inhalt beim Erscheinen ein- und vor dem
    Verschwinden ausblendet. Umschließen Sie alles, was bedingt angezeigt
    wird, etwa Hinweise, Fehlermeldungen oder Listeneinträge, und es taucht
    nicht mehr abrupt auf und verschwindet. Sie ist eine dünne,
    vorkonfigurierte Schicht über "CSSTransition" aus
    [react-transition-group](https://reactcommunity.org/react-transition-group).
-->
<!--frFR:
    Un composant React qui fait apparaître son contenu en fondu et le fait
    disparaître en fondu avant qu'il ne soit retiré. Enveloppez tout ce qui
    est affiché de manière conditionnelle, comme des indications, des messages
    d'erreur ou des entrées de liste, et rien n'apparaît ni ne disparaît plus
    brusquement. Il s'agit d'une fine couche préconfigurée au-dessus de
    "CSSTransition" de
    [react-transition-group](https://reactcommunity.org/react-transition-group).
-->

Features included:
<!--deDE:Enthaltene Funktionen:-->
<!--frFR:Fonctionnalités incluses:-->

- Fade animation of 200 milliseconds on mount, on "in" changes and before
  unmount.<!--deDE:Überblendung von 200 Millisekunden beim Einhängen, bei Änderungen von "in" und vor dem Aushängen.--><!--frFR:Fondu de 200 millisecondes au montage, lors des changements de "in" et avant le démontage.-->
- Removes the content from the DOM once it is faded out.<!--deDE:Entfernt den Inhalt aus dem DOM, sobald er ausgeblendet ist.--><!--frFR:Retire le contenu du DOM une fois le fondu terminé.-->
- Wraps text and single elements in a "span" and lists in a "div".<!--deDE:Umschließt Text und einzelne Elemente mit einem "span" und Listen mit einem "div".--><!--frFR:Enveloppe le texte et les éléments uniques dans un "span" et les listes dans un "div".-->
- Accepts all "CSSTransition" properties, e.g. for own animations.<!--deDE:Akzeptiert alle Eigenschaften von "CSSTransition", z. B. für eigene Animationen.--><!--frFR:Accepte toutes les propriétés de "CSSTransition", par exemple pour vos propres animations.-->

<div class="wd-table-of-contents">
    <h2 id="content">Content<!--deDE:Inhalt--><!--frFR:Contenu--></h2>
    <!--wd-table-of-contents-->
</div>

Installation
------------

Install the package together with its peer dependencies:
<!--deDE:Installieren Sie das Paket zusammen mit seinen Peer-Abhängigkeiten:-->
<!--frFR:Installez le paquet avec ses dépendances pairs:-->

```bash
npm install \
    react-generic-animate \
    clientnode core-js prop-types react react-dom react-transition-group
```

Include the stylesheet once, either in your CSS or in your JavaScript entry
module:
<!--deDE:
    Binden Sie das Stylesheet einmal ein, entweder in Ihrem CSS oder in Ihrem
    JavaScript-Einstiegsmodul:
-->
<!--frFR:
    Intégrez la feuille de style une fois, soit dans votre CSS, soit dans
    votre module d'entrée JavaScript:
-->

```CSS
@import "react-generic-animate/dist/index.css";
```

<!--|deDE:Beispiel-->
<!--|frFR:Exemple-->
Example
-------

Two texts which take turns every two seconds:
<!--deDE:Zwei Texte, die sich alle zwei Sekunden abwechseln:-->
<!--frFR:Deux textes qui alternent toutes les deux secondes:-->

```TypeScript
import {useEffect, useState} from 'react'
import GenericAnimate from 'react-generic-animate'

export const Application = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const interval = setInterval(
            () => {
                setVisible((value) => !value)
            },
            2000
        )

        return () => {
            clearInterval(interval)
        }
    }, [])

    return <>
        <GenericAnimate in={visible}>Now you see me.</GenericAnimate>
        <GenericAnimate in={!visible}>Now you see me instead.</GenericAnimate>
    </>
}
```

<!--|deDE:Eigenschaften-->
<!--|frFR:Propriétés-->
Properties
----------

All properties are passed to "CSSTransition". The most important ones:
<!--deDE:
    Alle Eigenschaften werden an "CSSTransition" weitergereicht. Die
    wichtigsten:
-->
<!--frFR:
    Toutes les propriétés sont transmises à "CSSTransition". Les plus
    importantes:
-->

- "in": Shows the content if "true" (default), hides it if "false".<!--deDE:"in": Zeigt den Inhalt bei "true" (Standard), blendet ihn bei "false" aus.--><!--frFR:"in": Affiche le contenu si "true" (par défaut), le masque si "false".-->
- "timeout": Duration in milliseconds until a transition is finished.
  Defaults to "200" which matches the included stylesheet.<!--deDE:"timeout": Dauer in Millisekunden, bis ein Übergang abgeschlossen ist. Standardmäßig "200", passend zum enthaltenen Stylesheet.--><!--frFR:"timeout": Durée en millisecondes jusqu'à la fin d'une transition. Par défaut "200", ce qui correspond à la feuille de style incluse.-->
- "appear": Animates on first mount as well. Defaults to "true".<!--deDE:"appear": Animiert auch beim ersten Einhängen. Standardmäßig "true".--><!--frFR:"appear": Anime également au premier montage. Par défaut "true".-->
- "unmountOnExit": Removes the content after it is hidden. Defaults to
  "true".<!--deDE:"unmountOnExit": Entfernt den Inhalt, nachdem er ausgeblendet wurde. Standardmäßig "true".--><!--frFR:"unmountOnExit": Retire le contenu une fois masqué. Par défaut "true".-->
- "classNames": Class name prefix for the transition states. Defaults to
  "generic-animate".<!--deDE:"classNames": Präfix der Klassennamen für die Übergangszustände. Standardmäßig "generic-animate".--><!--frFR:"classNames": Préfixe des noms de classe pour les états de transition. Par défaut "generic-animate".-->
- "onEnter", "onEntered", "onExit", "onExited" and similar: Callbacks for the
  transition phases.<!--deDE:"onEnter", "onEntered", "onExit", "onExited" und ähnliche: Callbacks für die Übergangsphasen.--><!--frFR:"onEnter", "onEntered", "onExit", "onExited" et similaires: Callbacks pour les phases de transition.-->

<!--|deDE:Eigene Animationen-->
<!--|frFR:Animations personnalisées-->
### Custom animations

Give another class name prefix and define the transition states in your CSS:
<!--deDE:
    Geben Sie ein anderes Klassennamen-Präfix an und definieren Sie die
    Übergangszustände in Ihrem CSS:
-->
<!--frFR:
    Indiquez un autre préfixe de nom de classe et définissez les états de
    transition dans votre CSS:
-->

```TypeScript
<GenericAnimate classNames="slide" in={open} timeout={300}>
    <Menu />
</GenericAnimate>
```

```CSS
.slide-appear, .slide-enter {transform: translateY(-1em); opacity: 0}
.slide-appear-active, .slide-enter-active {
    transform: none;
    opacity: 1;
    transition: all 300ms ease-out;
}
.slide-exit {opacity: 1}
.slide-exit-active {opacity: 0; transition: opacity 300ms ease-in}
```

<!--|deDE:Entwicklung-->
<!--|frFR:Développement-->
Development
-----------

```bash
yarn install
yarn start
yarn test
```

"yarn start" serves a playground with an example similar to the one above.
<!--deDE:"yarn start" stellt eine Spielwiese mit einem ähnlichen Beispiel wie oben bereit.-->
<!--frFR:"yarn start" sert un terrain de jeu avec un exemple semblable à celui ci-dessus.-->
