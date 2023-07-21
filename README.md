# Adobe Illustrator Scripts For Reference

## Hi
This is a collection of JS scripts for Adobe Illustrator by Seth Kingry. All scripts created by me, sometimes using parts of other authors’ code. 
The descriptions for each file can be found in the file’s header text. Test environment: Illustrator CS6, CC 2022, 2023 (Windows), CC 2018-2023 (Mac OS).   

## How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## How to run scripts

#### Variant 1 — Install 

1. [Download archive] and unzip. All scripts are in the folder `jsx`
2. Place `<script_name>.jsx` in the Illustrator Scripts folder:
	- OS X: `/Applications/Adobe Illustrator [vers.]/Presets.localized/en_GB/Scripts`
	- Windows (32 bit): `C:\Program Files (x86)\Adobe\Adobe Illustrator [vers.]\Presets\en_GB\Scripts\`
	- Windows (64 bit): `C:\Program Files\Adobe\Adobe Illustrator [vers.] (64 Bit)\Presets\en_GB\Scripts\`
3. Restart Illustrator

#### Variant 2 — Drag & Drop
Drag and drop the script file (JS or JSX) onto the tabs of Illustrator documents. If you drag it to the area of the open document, the script may not work correctly (Adobe bug).  

#### Variant 3 — Use extensions
I recommend the [Scripshon Trees] or [LAScripts] panel. In it you can specify which folder your script files are stored in.

[Scripshon Trees]: https://exchange.adobe.com/creativecloud.details.15873.scripshon-trees.html


> **Warning**   
> To run scripts via the F1-F15 hotkeys, users add them to the Actions panel. If another action is running inside the script, Illustrator will freeze. How do you check it? Open the script in a text editor, if you find `app.doScript()` in the code, it is using an action. This is in all versions from CS6 to CC 2023 on Mac and Windows.


## Categories
Click the category name to learn more about the scripts in the selected category.   

### [Artboard](md/Artboard.md)  

* [ArtboardsFinder](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#artboardsfinder) `upd, 22.12.2022`
* [ArtboardsRemapper](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#artboardsremapper) `new, 12.04.2023`
* [BatchRenamer](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#batchrenamer) `upd, 13.02.2023`
* [DuplicateArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#duplicateartboardslight) `upd, 22.12.2022`
* [FitArtboardsToArtwork](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#fitartboardstoartwork) `upd, 22.12.2022`
* [MoveArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#moveartboards) `upd, 04.05.2023`
* [RenameArtboardAsLayer](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#renameartboardaslayer) `(upd, 14.09.2022)`
* [RenameArtboardAsSize](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#renameartboardassize) `upd, 22.12.2022`
* [RenameArtboardAsTopObj](https://github.com/motivate-soft/ai-es/blob/master/md/Artboard.md#renameartboardastopobj) `(upd, 14.09.2022)`

### [Color](md/Color.md)  

* [AverageColors](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#averagecolors) `(new, 27.03.2022)`
* [ColorBlindSimulator](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#colorblindsimulator) `(new, 18.04.2022)`
* [ConvertToGradient](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#converttogradient) `(upd, 14.09.2022)`
* [CycleColors](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#cyclecolors) `(upd, 30.09.2022)`
* [CycleGradient](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#cyclegradient)
* [DistributeGradientStops](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#distributegradientstops)
* [RemoveGradientStops](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#removegradientstops)
* [ReverseGradientColor](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#reversegradientcolor)
* [StrokeColorFromFill](https://github.com/motivate-soft/ai-es/blob/master/md/Color.md#strokecolorfromfill) `upd, 14.10.2022`

### [Draw](md/Draw.md) 

* [DrawPathBySelectedPoints](https://github.com/motivate-soft/ai-es/blob/master/md/Draw.md#drawpathbyselectedpoints) `new, 10.03.2023`
* [NumeratesPoints](https://github.com/motivate-soft/ai-es/blob/master/md/Draw.md#numeratespoints) `upd, 22.12.2022`
* [RandomScribble](https://github.com/motivate-soft/ai-es/blob/master/md/Draw.md#randomscribble) `upd, 14.10.2022`

### [Export](md/Export.md)  

* [Export selection as AI](https://github.com/motivate-soft/ai-es/blob/master/md/Export.md#export-selection-as-ai) `(upd, 06.10.2022)`
* [ExportToDXF](https://github.com/motivate-soft/ai-es/blob/master/md/Export.md#exporttodxf) `(upd, 04.05.2023)`

### [Group | Mask](md/Group.md)  

* [CenterClipsToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#centerclipstoartboards)
* [ExtUngroup](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#extungroup)
* [MoveToGroup](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#movetogroup) `(upd, 14.09.2022)`
* [TrimMasks](https://github.com/motivate-soft/ai-es/blob/master/md/Group.md#trimmasks)

### [Item](md/Item.md)  

* [AlignToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#aligntoartboards) `(new, 28.06.2023)`
* [BatchTrace](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#batchtrace) `(upd, 07.06.2023)`
* [DuplicateToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#duplicatetoartboards) `(upd, 14.09.2022)`
* [FitSelectionToArtboards](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#fitselectiontoartboards) `upd, 22.12.2022`
* [MakeEnvelopesWithTops](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#makeenvelopeswithtops)
* [MirrorMove](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#mirrormove) `(upd, 01.08.2022)`
* [RenameItems](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#renameitems) `(upd, 04.05.2023)`
* [Rescale](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#rescale) `upd, 22.12.2022`
* [ResizeOnLargerSide](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#resizeonlargerside) `upd, 22.12.2022`
* [ResizeToSize](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#resizetosize) `upd, 04.05.2023`
* [RoundCoordinates](https://github.com/motivate-soft/ai-es/blob/master/md/Item.md#roundcoordinates) `upd, 22.12.2022`

### [Layer](md/Layer.md)  

* [RememberSelectionLayers](https://github.com/motivate-soft/ai-es/blob/master/md/Layer.md#rememberselectionlayers) `(upd, 26.02.2022)`
* [RenameLayerAsText](https://github.com/motivate-soft/ai-es/blob/master/md/Layer.md#renamelayerastext) `(new, 15.06.2023)`
* [SortLayerItems](https://github.com/motivate-soft/ai-es/blob/master/md/Layer.md#sortlayeritems) `(new, 29.08.2022)`

### [Path](md/Path.md)  

* [DivideBottomPath](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#dividebottompath) `(new, 22.02.2023)`
* [PointsMoveRandom](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#points-move-random) `upd, 19.05.2023`
* [SplitPath](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#splitpath) `(upd, 07.06.2023)`
* [SubtractTopPath](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#subtracttoppath) `(new, 03.04.2022)`
* [TrimOpenEnds](https://github.com/motivate-soft/ai-es/blob/master/md/Path.md#trimopenends) `(upd, 22.02.2023)`

### [Select](md/Select.md)  

* [CornersSelector](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#cornersselector) `(new, 21.04.2023)`
* [NamedItemsFinder](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#named-items-finder) `(upd, 14.09.2022)`
* [SelectAllLayersAbove](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectalllayersabove) `(new, 21.02.2022)`
* [SelectAllLayersBelow](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectalllayersabove) `(new, 21.02.2022)`
* [SelectBySwatches](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectbyswatches) `(upd, 11.05.2023)`
* [SelectOnlyPoints](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectonlypoints)
* [SelectPointsByType](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectpointsbytype) `(upd, 14.09.2022)`
* [SelectRotatedItems](https://github.com/motivate-soft/ai-es/blob/master/md/Select.md#selectrotateditems) `(new, 22.06.2022)`

### [Style](md/Style.md)  

* [AverageStrokesWidth](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#averagestrokeswidth) `(new, 07.02.2023)`
* [ChangeOpacity](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#changeopacity) `(upd, 01.08.2022)`
* [GrayscaleToOpacity](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#grayscaletoopacity)
* [MakeTrappingStroke](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#maketrappingstroke) `(new, 14.12.2022)`
* [OpacityMaskClip](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#opacitymaskclip)
* [RandomStrokeWidth](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#randomstrokewidth) `upd, 14.10.2022`
* [StrokesWeightUp](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#strokesweight) `upd, 14.10.2022`
* [StrokesWeightDown](https://github.com/motivate-soft/ai-es/blob/master/md/Style.md#strokesweight) `upd, 14.10.2022`

### [Text](md/Text.md)  

* [AlignTextBaseline](https://github.com/motivate-soft/ai-es/blob/master/md/Text.md#aligntextbaseline) `(new, 28.04.2023)`
* [MakeNumbersSequence](https://github.com/motivate-soft/ai-es/blob/master/md/Text.md#makenumberssequence) `(upd, 04.07.2023)`
* [ReplaceFormattedText](https://github.com/motivate-soft/ai-es/blob/master/md/Text.md#replaceformattedtext) `(new, 29.12.2022)`

### [Utility](md/Utility.md)  

* [CheckPixelPerfect](https://github.com/motivate-soft/ai-es/blob/master/md/Utility.md#checkpixelperfect) `(new, 03.02.2022)`
* [FileVersionInformer](https://github.com/motivate-soft/ai-es/blob/master/md/Utility.md#fileversioninformer)
* [ObjectsCounter](https://github.com/motivate-soft/ai-es/blob/master/md/Utility.md#objectscounter)
* [SaveAllDocs](https://github.com/motivate-soft/ai-es/blob/master/md/Utility.md#savealldocs)
* [SyncGlobalColorsNames](https://github.com/motivate-soft/ai-es/blob/master/md/Utility.md#syncglobalcolorsnames)

### [View](md/View.md)  

* [Zoom And Center](https://github.com/motivate-soft/ai-es/blob/master/md/View.md#zoom-and-center) `(upd, 14.09.2022)`

### License

All scripts is licensed under the MIT licence.  
See the included LICENSE file for more details.
