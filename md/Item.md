![header](https://i.ibb.co/mF018gV/emblem.png)

### How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## Scripts
* [AlignToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#aligntoartboards) `(new, 28.06.2023)`
* [BatchTrace](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#batchtrace) `(upd, 07.06.2023)`
* [DuplicateToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#duplicatetoartboards) `(upd, 14.09.2022)`
* [FitSelectionToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#fitselectiontoartboards) `upd, 22.12.2022`
* [MakeEnvelopesWithTops](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#makeenvelopeswithtops)
* [MirrorMove](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#mirrormove) `(upd, 01.08.2022)`
* [RenameItems](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#renameitems) `(upd, 04.05.2023)`
* [Rescale](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#rescale) `upd, 22.12.2022`
* [ResizeOnLargerSide](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#resizeonlargerside) `upd, 14.10.2022`
* [ResizeToSize](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#resizetosize) `upd, 04.05.2023`
* [RoundCoordinates](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#roundcoordinates) `upd, 22.12.2022`

## AlignToArtboards

The script aligns selected objects to their parent artboards or aligns the contents of all artboards in the document. If the object is on multiple artboards, the script checks which artboard has the center of the object and aligns to it. If the center of the object is outside the artboards, it aligns to the first artboard.

> **Warning**   
> The script runs slower the more artboards you have with content and objects selected for alignment.

![AlignToArtboards](https://i.ibb.co/XFQSmvR/Align-To-Artboards.gif)

## BatchTrace

Batch tracing of selected placed and embedded images in a document or all images from a user-selected folder. The native menu `Object → Image Trace → Make` is available for one selected image. Recording the action will not help, because the trace preset are not saved in it. In Adobe Bridge, only the image folder can be traced: `Tools → Illustrator → Image Trace`. 

> **Note**   
> The speed of the script depends on the specifications of your PC, the tracing preset and the amount of images.

> **Warning**   
Adobe scripts incorrectly apply the Colors value from custom presets, so the tracing result may not match the preset. The big difference is seen in CC 2023. Vote for a fix at [Uservoice](https://illustrator.uservoice.com/forums/908050-illustrator-desktop-sdk-scripting-issues/suggestions/46741876-tracing-bugs-in-scripts).

Tweaks in the script code:

* `CFG.extList` — a list of extensions to be processed from the folder. You can add your own or remove some to skip the script;
* `CFG.isReverse` — reverse the order of the presets list (true), the user presets will be at the top.

![BatchTrace](https://i.ibb.co/YkMGpS9/Batch-Trace.gif)

## DuplicateToArtboards

Duplicates the objects selected on the active artboard to the same position on specific artboards. Artboard numbers are entered with a comma or hyphen. Empty input - objects are duplicated to all artboards except the original artboard. Enable `Preserve layers` if the selected objects are in different layers and should stay there.

The color of temporary artboard indexes changes in the code `CFG.color: [255, 0, 0]`.

[Feature Request on Illustrator Uservoice](https://illustrator.uservoice.com/forums/333657-illustrator-desktop-feature-requests/suggestions/32146360--paste-on-selected-artboards)

![DuplicateToArtboards](https://i.ibb.co/mJqLzHr/Duplicate-To-Artboards.gif)

## FitSelectionToArtboards

Places selected objects in the center of artboards and optionally fit the largest side of each object to the size of the artboard. When scaling objects, you can set internal paddings from the artboard bounds. With the `Rename artboards...` option enabled, artboards get names from the objects placed on them.   

It has two modes: silent and dialog. Modes change without editing the code if you hold down the <kbd>Alt</kbd> key when running the script:

* <kbd>Alt</kbd> + `CFG.showUI: false` the dialog will be shown
* <kbd>Alt</kbd> + `CFG.showUI: true` silent mode with the latest options   

The Lite version (FitSelectionToArtboards-Lite.jsx) in silent mode aligns and fit topmost selected object to the active artboard. If the `CFG.isContains:true` flag is changed in its code, then the selected object will be processed only if it was contained on the artboard.

![FitSelectionToArtboards](https://i.ibb.co/YT0qPWL/Fit-Selection-To-Artboards.gif)

## MakeEnvelopesWithTops

Distorts the selected bottom object by the top selected objects separately. Similar to the multiple run of the command `Object > Envelope Distort > Make with Top Object`.

![MakeEnvelopesWithTops](https://i.ibb.co/N24Lmy7/Make-Envelopes-With-Tops.gif)

## MirrorMove

Mirror movement the object or points using the last values of the `Object > Transform > Move...` or last move with the mouse / keyboard. Extends the native `Object > Transform > Transform Again`. Axes: XY, X, Y. Movement ratio — the ratio of how much distance to move relative to the previous one (1 = the same). It has two modes: silent and dialog. Modes change without editing the code if you hold down the <kbd>Alt</kbd> key when running the script:

* <kbd>Alt</kbd> + `CFG.showUI: false` the dialog will be shown
* <kbd>Alt</kbd> + `CFG.showUI: true` silent mode with the latest options

![MirrorMove](https://i.ibb.co/vDPYtQC/Mirror-Move.gif) 

## RenameItems
Script to batch rename selected items or their parent layers with many options or simple rename one selected item / active layer / artboard. The find and replace function supports RegExp.      

![RenameItems](https://i.ibb.co/9T8TfQv/rename-items.gif)

## Rescale

Automatic scaling of objects to the desired size. If you draw a line on top with the length or height of the desired object, 'Old Size' will be filled automatically. Units associated with "Document Setup".      

![Rescale](https://i.ibb.co/gDj142f/demo-Rescale.gif)

## ResizeOnLargerSide

Resize of the selected objects to the specified amount on the larger side. Works with document units.   

![ResizeOnLargerSide](https://i.ibb.co/1bSj1kC/Resize-On-Larger-Side.gif)

## ResizeToSize

Adobe Illustrator has a Transform panel, but you cannot use it to transform several selected objects to a specified value. It also has problems with the accuracy of the result. The script can transform selected objects with 100% accuracy, depending on the selected side: width, height or automatically the larger side. Units associated with "Document Setup". Quick access with <kbd>Q</kbd> + underlined key or digit. Instead of <kbd>Q</kbd> you can set your modifier key in the script file `modKey: 'Q'`.

![ResizeToSize](https://i.ibb.co/q0Ktmfm/Resize-To-Size.gif)

## RoundCoordinates

The script rounds the coordinates of each selected object. The reference point gets from the `Transform` panel. The script aligns to the stroke if `Preferences > Use Preview Bounds` is enabled. In the script file, you can change the coordinate rounding step in the CFG `step: 1`. If the step is 0, the script aligns to the document grid from `Preferences > Guides & Grid`.

![RoundCoordinates](https://i.ibb.co/3y0WpzC/Round-Coordinates.gif)
