![header](https://i.ibb.co/mF018gV/emblem.png)

### How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## Scripts
* [DivideBottomPath](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#dividebottompath) `(new, 22.02.2023)`
* [PointsMoveRandom](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#pointsmoverandom) `upd, 19.05.2023`
* [SplitPath](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#splitpath) `(upd, 07.06.2023)`
* [SubtractTopPath](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#subtracttoppath) `(new, 03.04.2022)`
* [TrimOpenEnds](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#trimopenends) `(upd, 22.02.2023)`

## DivideBottomPath

Divides the bottom path at the intersections with the top paths. The paths must have a stroke. This script replaces Pathfinder → Outline, which resets the color and doesn't remove the top paths segments. Scissors tool requires precise clicking and takes time with many points. 

> **Note**   
> If you want to keep the top paths, change `var isRmvTop = true` to `false`. To recolor the segments in random colors, set `isRndColor = true`.

![DivideBottomPath](https://i.ibb.co/LrKDtTz/Divide-Bottom-Path.gif)

## Points Move Random

The script moves randomly in numeric ranges horizontally and vertically selected points or all points on objects. Quick access with <kbd>Q</kbd> + underlined key. Instead of <kbd>Q</kbd> you can set your modifier key in the script file `modKey: 'Q'`.

<a href="https://youtu.be/9wVTDWUAEmE">
  <img width="122" height="47" src="https://i.ibb.co/fqdwXL6/youtube-badge.png">
</a>

![PointsMoveRandom](https://i.ibb.co/9ZsRQJk/demo-Points-Move-Random.gif)

## SplitPath

Powerfull script for subtract shapes from paths. Pathfinder panel in Adobe Illustrator does not do it.   

<a href="https://youtu.be/1_vUUFkTwxk">
  <img width="122" height="47" src="https://i.ibb.co/fqdwXL6/youtube-badge.png">
</a>

![SplitPath](https://i.ibb.co/55fmqgY/demo-Split-Path.gif)

## SubtractTopPath

Subtracts the top selected shape from all the shapes below it. Pathfinder panel in Adobe Illustrator does not do it. Change the value of `isRmvTop` to `false` to keep the original shape. The `isUseFS: true` speeds up processing with a large number of objects. 

> **Warning**   
> Align Stroke to Inside / Outside doesn't work correctly. Apply `Object > Path > Outline Stroke` before running the script.

![SubtractTopPath](https://i.ibb.co/B3QL4k2/Subtract-Top-Path.gif)

## TrimOpenEnds

Removes the ends of open paths up to their intersection points. It's an alternative to the Shape Builder tool.

![TrimOpenEnds](https://i.ibb.co/J3ct3KN/Trim-Open-Ends.gif)
