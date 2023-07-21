![header](https://i.ibb.co/mF018gV/emblem.png)

### How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## Scripts
* [CornersSelector](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#cornersselector) `(new, 21.04.2023)`
* [NamedItemsFinder](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#named-items-finder) `(upd, 14.09.2022)`
* [SelectAllLayersAbove](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectalllayersabove) `(new, 21.02.2022)`
* [SelectAllLayersBelow](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectalllayersabove) `(new, 21.02.2022)`
* [SelectBySwatches](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectbyswatches) `(upd, 11.05.2023)`
* [SelectOnlyPoints](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectonlypoints)
* [SelectPointsByType](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectpointsbytype) `(upd, 14.09.2022)`
* [SelectRotatedItems](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectrotateditems) `(new, 22.06.2022)`

## CornersSelector

Selects points on objects that are inside or outside the shape of the object. For example, for the task, select all the rays of a star and round them.

![CornersSelector](https://i.ibb.co/Jy12pLW/Corners-Selector.gif)

## Named Items Finder

Search items in the document by name and zoom to them contents. Inspired by Photoshop CC 2020 features.   

<a href="https://youtu.be/30AwGPf_2Wk">
  <img width="122" height="47" src="https://i.ibb.co/fqdwXL6/youtube-badge.png">
</a>

![NamedItemsFinder](https://i.ibb.co/QDVtnXP/demo-Named-Items-Finder.gif)

## SelectAllLayersAbove

The SelectAllLayersAbove script selects objects in all layers above the active layer. And the SelectAllLayersBelow script is in the layers below. If something is selected in the document, the parent layer of the selected object becomes active. Otherwise, the active layer is the layer that is selected in the Layers panel. Change `var isInclActive = false` in the code to `true` so that objects in the source layer are also selected.

![SelectAllLayersAbove](https://i.ibb.co/t3f2Mvr/Select-All-Layers-Above.gif)

## SelectBySwatches

The Magic Wand tool selects objects that match the color of the sample. Selecting samples with the <kbd>Shift</kbd> key will select items of different colors. The script will select items if a fill or stroke color matches the colors selected in the Swatches panel.

> **Note**   
> To select objects with a different spot color tint, first uncheck Illustrator: Preferences → General → Select Same Tint %.

> **Warning**   
> Do not put the script inside an action to run with hotkeys. Running SelectBySwatches through an action can cause Illustrator to freeze.

![SelectBySwatches](https://i.ibb.co/JR5h4pq/Select-By-Swatches.gif)

## SelectOnlyPoints


After using the Lasso tool <kbd>A</kbd> or Direct Selection Tool <kbd>Q</kbd>, both Points and Path segments are selected. 

![SelectOnlyPoints](https://i.ibb.co/NF7bbpQ/demo-Select-Only-Points.gif)

## SelectPointsByType

Selects points on the selected paths according to their type. Does the thing that even Astute Graphics plugins can't do :)   

> **Note**   
> Select `View → Hide Bounding Box` to see active points in real time.   

<a href="https://youtu.be/pjHmBDLIWbw">
  <img width="122" height="47" src="https://i.ibb.co/fqdwXL6/youtube-badge.png">
</a>

**Keyboard shortcuts:**   
Instead of <kbd>Q</kbd> you can set your modifier key in the script file `modKey: 'Q'`.
   
* Bezier <kbd>Q</kbd> + <kbd>1</kbd>
* Ortho <kbd>Q</kbd> + <kbd>2</kbd>
* Flush <kbd>Q</kbd> + <kbd>3</kbd>
* Corner <kbd>Q</kbd> + <kbd>4</kbd>
* Broken <kbd>Q</kbd> + <kbd>5</kbd>
* Flat <kbd>Q</kbd> + <kbd>6</kbd>

![SelectPointsType](https://i.ibb.co/1MTyHx8/Select-Points-By-Type.gif)

## SelectRotatedItems

Finds rotated objects in a selection or in a document. If `isSkipRight: true`, then objects rotated 90, 180, 270 degrees are ignored, if `false` value, then all objects with rotation angle different from 0 degrees are selected.

![SelectRotatedItems](https://i.ibb.co/7YpGm9M/Select-Rotated-Items.gif)
