![header](https://i.ibb.co/mF018gV/emblem.png)

### How to download one script 
1. In the script description, click the "Direct Link" button.
2. The tab will open the script code.
3. Press <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd> for download.

## Scripts
* [DrawPathBySelectedPoints](https://github.com/motivate-soft/ai-es/blob/master/md/Draw.md#drawpathbyselectedpoints) `new, 10.03.2023`
* [NumeratesPoints](https://github.com/motivate-soft/ai-es/blob/master/md/Draw.md#numeratespoints) `upd, 22.12.2022`
* [RandomScribble](https://github.com/motivate-soft/ai-es/blob/master/md/Draw.md#randomscribble) `upd, 14.10.2022`

## DrawPathBySelectedPoints
[![Direct](https://img.shields.io/badge/Direct%20Link-DrawPathBySelectedPoints.jsx-FF6900.svg)](https://rebrand.ly/drawbyselpts) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Draws a polygon based on the selected points. To avoid self-intersections, the script sorts the selected points by polar coordinates from the geometric center of the shape with vertices in points. This is how the drawing direction of the polygon is formed.

The parameter in the `isClose' code is used to close the polygon (true) or keep the first and last point (false).

![DrawPathBySelectedPoints](https://i.ibb.co/3CqGhj7/Draw-Path-By-Selected-Points.gif)

## NumeratesPoints
[![Direct](https://img.shields.io/badge/Direct%20Link-NumeratesPoints.jsx-FF6900.svg)](https://rebrand.ly/numpts) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Numerates selected points and marks them with colored circles.

![NumeratesPoints](https://i.ibb.co/bdJ8tvV/Numerates-Points.gif)

## RandomScribble
[![Direct](https://img.shields.io/badge/Direct%20Link-RandomScribble.jsx-FF6900.svg)](https://rebrand.ly/randscrib) [![Download](https://img.shields.io/badge/Download%20All-Zip%20archive-0088CC.svg)](https://bit.ly/2M0j95N)

Creates random paths with a specified number of points. These can be random straight lines from 2 points or complex shapes that imitate scribbles. The points do not go beyond the bounds of the active artboard. If many shapes are first selected in the document, the script will generate individual paths with points into their bounding box.

![RandomScribble](https://i.ibb.co/b6FftPk/Random-Scribble.gif)
