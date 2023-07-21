![header](https://i.ibb.co/mF018gV/emblem.png)


### How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## Scripts
* [AverageColors](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#averagecolors) `(new, 27.03.2022)`
* [ColorBlindSimulator](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#colorblindsimulator) `(new, 18.04.2022)`
* [ConvertToGradient](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#converttogradient) `(upd, 14.09.2022)`
* [CycleColors](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#cyclecolors) `(upd, 30.09.2022)`
* [CycleGradient](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#cyclegradient)
* [DistributeGradientStops](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#distributegradientstops)
* [RemoveGradientStops](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#removegradientstops)
* [ReverseGradientColor](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#reversegradientcolor)
* [StrokeColorFromFill](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#strokecolorfromfill) `upd, 14.10.2022`

## AverageColors
Averages the colors of selected objects or separately inside groups or gradients. The script skips objects without color or with a pattern. If nothing is selected, the script process all groups in the document. It has two modes: silent and dialog. Changing in `CFG.showUI`.   

Modes change without editing the code if you hold down the <kbd>Alt</kbd> key when running the script:

* <kbd>Alt</kbd> + `CFG.showUI: false` the dialog will be shown
* <kbd>Alt</kbd> + `CFG.showUI: true` silent mode with the latest options

![AverageColors](https://i.ibb.co/6bjPmLh/average-colors.gif) 

## ColorBlindSimulator

Simulates color vision deficiency of 8 types. You can recolor objects or use only a preview. Adobe is limited to viewing two types in the `View > Proof Setup` menu and cannot apply colors. The script supports: paths, compound paths, text, fills and strokes. You can change the gamma correction in `CFG.gamma: 2.2` and activate the default preview `CFG.defPreview: true`. 

> **Warning**   
> Unfortunately, the copied gradients are one swatch in the Illustrator. Manually break the link by changing the gradient twice with the `Reverse Gradient` button.

![ColorBlindSimulator](https://i.ibb.co/ccps1mg/Color-Blind-Simulator.gif) 

## ConvertToGradient


Convert a flat process color into a matching gradient.   
What's new: The script now works with the RGB and CMYK document profile, Spot & Gray colors. Processes compound paths and groups of items.   
*Based on original script by [Saurabh Sharma](https://tutsplus.com/authors/saurabh-sharma), 2010.*  

![ConvertToGradient](https://i.ibb.co/44tG9JP/demo-Convert-To-Gradient.gif) 

## CycleColors

Swaps the fill and stroke colors of the selected objects in order they have in the Layers panel. Preserves the weight of the strokes, but if an object has no stroke, the script copies one from another object. If your selected objects are in non-consecutive order, you may think that the `Forward` and `Backward` buttons move colors randomly. The `Reset` button doesn't return custom brushes and dash settings applied to strokes, but you You can use the native command `Undo` after closing the dialog box.   

The script by default remembers the position of the dialog window on the screen, to make it open centered, replace `CFG.isResWinPos: true` with `false` in the code.

![CycleColors](https://i.ibb.co/qNXFHry/cycle-colors.gif)

## CycleGradient

* CycleGradient.jsx (UI version)
* CycleGradientBackward.jsx
* CycleGradientForward.jsx
* CycleGradientRandom.jsx   

A set of 4 scripts that change the color order of gradient stops. The position of the stops and opacity don't change. 

> **Warning**   
> Unfortunately, the copied gradients are one swatch in the Illustrator. Manually break the link by changing the gradient twice with the `Reverse Gradient` button.   

![CycleGradient](https://i.ibb.co/84GsCBK/cycle-Gradient.gif)

## DistributeGradientStops

Distributes uniform spacing between all the gradients stops without changing the position of the outermost stops. 

> **Warning**   
> Unfortunately, the copied gradients are one swatch in the Illustrator. Manually break the link by changing the gradient twice with the `Reverse Gradient` button.  

![DistributeGradientStops](https://i.ibb.co/6XNkFqS/Distribute-Gradient-Stops.gif)

## RemoveGradientStops

Removes intermediate color stops of gradient fill and stroke for selected objects.

> **Warning**   
> Unfortunately, the copied gradients are one swatch in the Illustrator. Manually break the link by changing the gradient twice with the `Reverse Gradient` button.  

![RemoveGradientStops](https://i.ibb.co/cv6wgPq/remove-Gradient-Stops.gif)

## ReverseGradientColor

Reverse the order of gradient colors and their opacity. Does not reverse the locations of color stops.

> **Warning**   
> Unfortunately, the copied gradients are one swatch in the Illustrator. Manually break the link by changing the gradient twice with the `Reverse Gradient` button.  

![ReverseGradient](https://i.ibb.co/Fg8nnHZ/Reverse-Gradient-Color.gif)

## StrokeColorFromFill

Setting the Stroke color of object based on an his solid or gradient fill. The option to automatically add an stroke is not available for Mac OS users with an Illustrator older than CC 2020.   

![StrokeColorFromFill](https://i.ibb.co/8dtK1V3/demo-Stroke-Color-From-Fill.gif)