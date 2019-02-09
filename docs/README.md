---
home: true
actionText: Get Started →
actionLink: /api/
features:
- title: "Slim Imports"
  details: "Reduce bloat with Destructuring and Submodules"
- title: "Written in TypeScript"
  details: Statically Typed for Typed Apps and IDE Intergration
- title: "Zero Bundled Dependices"
  details: Only Dependencies are the Offical Library for the Database
footer: MIT Licensed | Copyright © 2018-present fall project
---
<style lang="stylus">
@import "./.vuepress/palette.styl"
.home .hero .action-button
    display: inline-block
    font-size: 1.2rem
    color: #fff
    background-color: $accentColor
    padding: 0.8rem 1.6rem
    border-radius: 4px
    transition: background-color .1s ease
    box-sizing: border-box
    border-bottom: 1px solid darken($accentColor, 10%)
    &:hover
        background-color: lighten($accentColor, 10%)
</style>