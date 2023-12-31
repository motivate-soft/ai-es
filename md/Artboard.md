![header](https://i.ibb.co/mF018gV/emblem.png)

## How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## 📜 Scripts
* [ArtboardsFinder](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#artboardsfinder) `upd, 22.12.2022`
* [ArtboardsRemapper](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#artboardsremapper) `new, 12.04.2023`
* [BatchRenamer](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#batchrenamer) `upd, 13.02.2023`
* [DuplicateArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#duplicateartboardslight) `upd, 22.12.2022`
* [FitArtboardsToArtwork](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#fitartboardstoartwork) `upd, 22.12.2022`
* [MoveArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#moveartboards) `upd, 04.05.2023`
* [RenameArtboardAsLayer](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#renameartboardaslayer) `(upd, 14.09.2022)`
* [RenameArtboardAsSize](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#renameartboardassize) `upd, 22.12.2022`
* [RenameArtboardAsTopObj](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#renameartboardastopobj) `(upd, 14.09.2022)`

## ArtboardsFinder

Search for artboards by name or size and shows the selected artboards in the center of the window. Width and height in document units. Landscape, portrait, square artboards are displayed in descending order of size when searching by orientation.

![ArtboardsFinder](https://i.ibb.co/VJXKjWQ/artboards-finder.gif)

## ArtboardsRemapper
Writes artboard names to a text file or applies from it. The script starts saving or renaming artboards from the specified index to the last artboard.

![ArtboardsRemapper](https://i.ibb.co/XVgb9Lj/Artboards-Remapper.gif)

## BatchRenamer

Batch renames Artboards, top-level Layers and selected objects in the document. Adds a common prefix and suffix to names. "Find & Replace" replaces matching strings in current names.

**Placeholders** 

* {w} - the width of the artboard or selected object in units of the document
* {h} - the height of the artboard or selected object
* {u} - document units (Document Setup > Units) 
* {nu:0} - ascending auto-numbering from the entered value
* {nd:0} - descending auto-numbering from the entered value
* {c} - document color model (RGB or CMYK)
* {d} - current date (YYYYMMDD)
* {fn} - filename without extension
* {n} - the current name to be replaced in "Find & Replace"

> **Note**   
> If you want to change the number of rows, change the CFG `rows: 5` in the script file and the same value in `listHeight: 5 * 32`. In `precision: 0` sets the number of decimal places for height and width of artboards and objects.

![BatchRenamer](https://i.ibb.co/p2VXbY9/Batch-Renamer.gif)

## DuplicateArtboardsLight
Script for copying the selected Artboard with his artwork. The Pro version with more options is available at [Gumroad](https://gumroad.com/sergosokin)   

![DuplicateArtboardsLight](https://i.ibb.co/rF92HpV/demo-Duplicate-Artboards-Light.gif) 

## FitArtboardsToArtwork

Fit artboards by the visible unlocked content with custom margins.

![FitArtboardsToArtwork](https://i.ibb.co/SJJh5Hc/Fit-Artboards-To-Artwork.gif) 

## MoveArtboards

Script for moving artboards range with artwork along the X and Y axis.

![MoveArtboards](https://i.ibb.co/wrHTpTG/Move-Artboards.gif) 

## RenameArtboardAsLayer


The script renames each Artboard by the custom name of Layer with the first visible unlocked item on it.

![RenameArtboardAsLayer](https://i.ibb.co/9nk8Lqn/Rename-Artboard-As-Layer.gif)

## RenameArtboardAsSize

The script names the artboard by its size in pixels. If you don't want save Artboard name, but replace with his size, change `var SAVE_NAME = true;` in the script file to `false`.

![RenameArtboardAsSize](https://i.ibb.co/54H4Jcm/Rename-Artboard-As-Size.gif)

## RenameArtboardAsTopObj

The script renames each Artboard by the custom name of the first visible unlocked item on it. If the top object is text, its contents will be the name of Artboard. 

![RenameArtboardAsTopObj](https://i.ibb.co/WPmf14B/Rename-Artboard-As-Top-Obj.gif)


