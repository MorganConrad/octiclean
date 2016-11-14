# octiclean
Simple-minded command line program to shorten an [octicon sprite file](https://octicons.github.com/) by keeping only the sprites you want (by id).

## Usage

`node octiclean path-to-sprite.octicons.svg id1 id2 ...`  
  or a single comma delimited final argument  
`node octiclean path-to-sprite.octicons.svg id1,id2 ...`


e.g., to use sprite.octicons.svg in current directory, and keep only bell and chevron-up,

`node octiclean . bell chevron-up`

to keep bell and chevron-up from subdir/myspritefile.svg

`node octiclean subdir/myspritefile.svg bell chevron-up`

### Caveats

 1. Logic isn't all that sharp, use with caution
 2. If you misspell an id, tough luck - verify your result file!
 3. Adds sprite.octicons.svg to the path if it doesn't already end with ".svg"
 4. I've done minimal testing, please let me know when you find bugs.
