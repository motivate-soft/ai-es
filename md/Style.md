![header](https://i.ibb.co/mF018gV/emblem.png)

### How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## Scripts
* [AverageStrokesWidth](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#averagestrokeswidth) `(new, 07.02.2023)`
* [ChangeOpacity](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#changeopacity) `(upd, 01.08.2022)`
* [GrayscaleToOpacity](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#grayscaletoopacity)
* [MakeTrappingStroke](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#maketrappingstroke) `(new, 14.12.2022)`
* [OpacityMaskClip](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#opacitymaskclip)
* [RandomStrokeWidth](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#randomstrokewidth) `upd, 14.10.2022`
* [StrokesWeightUp](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#strokesweight) `upd, 14.10.2022`
* [StrokesWeightDown](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#strokesweight) `upd, 14.10.2022`

## AverageStrokesWidth
[![Direct](https://img.shields.io/badge/Direct%20Link-AverageStrokesWidth.jsx-FF6900.svg)](https://rebrand.ly/avgstrwd) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Averages the stroke width of selected objects, skipping those without strokes. Supports paths, compound paths and text objects.

![AverageStrokesWidth](https://i.ibb.co/3shb651/Average-Strokes-Width.gif)

## ChangeOpacity
[![Direct](https://img.shields.io/badge/Direct%20Link-ChangeOpacity.jsx-FF6900.svg)](https://rebrand.ly/chngopa) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Set the exact Opacity value of the selected objects. The plus or minus sign before a number will shift relative to the current value at each object. Inside Clipping Groups does not change the Opacity of the mask itself. But you can add masks if you change `inclMask: false` to `true` in the code. 

![ChangeOpacity](https://i.ibb.co/zP3Vkww/Change-Opacity.gif)

## GrayscaleToOpacity
[![Direct](https://img.shields.io/badge/Direct%20Link-GrayscaleToOpacity.jsx-FF6900.svg)](https://rebrand.ly/graytoopa) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Convert selection colors to Grayscale and set identical Opacity value.

![GrayscaleToOpacity](https://i.ibb.co/DVfGtkz/Grayscale-To-Opacity.gif)

## MakeTrappingStroke
[![Direct](https://img.shields.io/badge/Direct%20Link-MakeTrappingStroke.jsx-FF6900.svg)](https://rebrand.ly/mktrapstroke) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Sets the stroke color based on the fill of the object, with the Overprint Stroke attribute enabled, for prepress. 

> **Note**   
> In the Mac OS version of Adobe Illustrator strokes are not always added to multiple objects with the `Force add stroke` option. If you have a problem on Mac, manually add any stroke to objects and then run the script.

![MakeTrappingStroke](https://i.ibb.co/QQkJ451/Make-Trapping-Stroke.gif)

## OpacityMaskClip
[![Direct](https://img.shields.io/badge/Direct%20Link-OpacityMaskClip.jsx-FF6900.svg)](https://rebrand.ly/opamclip) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

The script activates `Clip` checkbox in `Transparency > Opacity Mask`.

![OpacityMaskClip](https://i.ibb.co/k0CBJKq/Opacity-Mask-Clip.gif)

## RandomStrokeWidth
[![Direct](https://img.shields.io/badge/Direct%20Link-RandomStrokeWidth.jsx-FF6900.svg)](https://rebrand.ly/rndstrwd) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Sets random stroke width of selected objects in a range with steps. The stroke unit is taken from `Preferences > Units > Stroke`. It has two modes: silent and dialog. Changing in `CFG.showUI`.   

Modes change without editing the code if you hold down the <kbd>Alt</kbd> key when running the script:

* <kbd>Alt</kbd> + `CFG.showUI: false` the dialog will be shown
* <kbd>Alt</kbd> + `CFG.showUI: true` silent mode with the latest options

![RandomStrokeWidth](https://i.ibb.co/PQN1qkV/Random-Stroke-Width.gif) 

## StrokesWeight
[![Direct](https://img.shields.io/badge/Direct%20Link-StrokesWeightDown.jsx-FF6900.svg)](https://rebrand.ly/strwtdn) [![Direct](https://img.shields.io/badge/Direct%20Link-StrokesWeightUp.jsx-FF6900.svg)](https://rebrand.ly/strwtup) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

* StrokesWeightDown.jsx
* StrokesWeightUp.jsx

A set of two scripts that change the weight of the strokes of the selected paths relative to the current ones. To round weights, set the variable `isRoundWeight = true` otherwise `isRoundWeight = false`.  

* +/- 0.01 if weight <= 0.1
* +/- 0.2 if < 1
* +/- 0.5 if < 5
* +/- 1 if >= 5

![StrokesWeight](https://i.ibb.co/kKXhnxN/Strokes-Weight.gif)
