![header](https://i.ibb.co/mF018gV/emblem.png)

### How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## Scripts
* [CenterClipsToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#centerclipstoartboards)
* [ExtUngroup](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#extungroup)
* [MoveToGroup](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#movetogroup) `(upd, 14.09.2022)`
* [TrimMasks](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#trimmasks)

## CenterClipsToArtboards

Aligns selected clip groups and their contents to the center of the parent artboards. You can also align all selected clip groups on a single artboard. 

![CenterClipsToArtboards](https://i.ibb.co/ykHy3rM/Center-Clips-To-Artboards.gif)

## ExtUngroup

Ungroups groups & releases clipping masks, for selected items only or all artwork in the document.   
*Based on original script by Jiwoong Song & modification by [John Wundes](http://www.wundes.com/).*

![ExtUngroup](https://i.ibb.co/QngnpZL/demo-Ext-Ungroup.gif)

## MoveToGroup

Moves all objects in a selection into a group selected. The order is preserved: the objects above the group are placed inside at the top, the lower ones go at the bottom of the group. If there are several groups in a selection, the dialog allows you to pick between topmost or bottommost groups to be the target.

![MoveToGroup](https://i.ibb.co/jkD5Zx4/Move-To-Group.gif)

## TrimMasks

Automatically trims all clip groups in a selection or a document using `Pathfinder > Crop`.

> **Note**   
> If you want to save the fill of the mask mask after trimming, open the script file in a text editor and change `SAVE_FILLED_CLIPMASK = false;` value to `true`.

![TrimMasks](https://i.ibb.co/prkQGyt/demo-Trim-Masks.gif)
