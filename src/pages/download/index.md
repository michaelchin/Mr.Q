---
templateKey: 'simple-page'
path: /download
title: Download
---
### Download GPlates

The current stable release of GPlates is GPlates 2.2, released in August 2019...


DownloadDownload GPlates 2.2
(the latest “stable” release)


The current beta release of pyGPlates is PyGPlates beta revision 28, released in August 2020...


DownloadDownload pyGPlates beta revision 28
(the latest “beta” release)


GPlates runs on Windows, Linux and MacOS X. We provide ready-to-use binary executables for both Windows and MacOS X, enabling a GPlates user to download, install and use the latest version of GPlates immediately. The binaries also include the GPlates-compatible data described below.

For Windows, we provide 32-bit and 64-bit .msi binary installers. Running the 32-bit installer program will install a 32-bit version of GPlates on a 32-bit or 64-bit version of Windows 7/8/8.1/10. Running the 64-bit installer program will install a 64-bit version of GPlates on a 64-bit version of Windows 7/8/8.1/10. We also provide 32-bit and 64-bit .zip files, containing the GPlates executable and its dependency files, for users who wish to use GPlates without installing it.
For MacOS X, we provide a 64-bit bundle for Snow Leopard (10.6) or above in a single .dmg file. To install GPlates, simply:
double-click on a .dmg file to open the disk image in Finder
drag the GPlates binary into your Applications folder.
For Ubuntu, we provide .deb packages for 64 and 32-bit architectures. To install GPlates, simply download the appropriate package for your system and double-click to install.
If you are using a different Linux distribution please use the source code package.
The Ubuntu packages currently contain the sample data (in /usr/share/gplates/) along with the application - future releases may use separate packages for this.
We provide source-code packages for Windows (the winsrc zip-files) and Linux and MacOS X (the unixsrc tarballs). The source-code packages contain simple sample data, but the larger data files (described below) will need to be downloaded separately. To compile GPlates from source, you will require:

Qt 4.4.0 or above (preferably 4.8)
Qwt 6.0.1 or above
OpenGL
GLEW
GDAL 1.3.2 or above (preferably 2.x)
CGAL 3.5 or above
PROJ.4 4.6 or above
Boost 1.35 or above
CMake 2.8.8 or above
Instructions on how to compile GPlates from source may be found in the GPlates source-code releases, in the files:

DEPS.Linux and BUILD.Linux (on Linux)
DEPS.OSX and BUILD.OSX (on MacOS X)
DEPS.Windows and BUILD.Windows (on Windows)
GPlates is free software (also known as open-source software), licensed for distribution under the GNU General Public License (GPL) version 2.

Download GPlates-compatible data
Researchers in the EarthByte Project have made GPlates-compatible data available for use with GPlates.

A sample set of these data-files are also contained within the GPlates installation packages, and will be automatically installed with GPlates. This data has been updated for the GPlates 2.2 release. Thanks to the EarthByte Project for making these data-files available!

Researchers in the Geodynamics Team at the Geological Survey of Norway (NGU) have made GPlates-compatible data available for use with GPlates; in particular:

a sequence of time-dependent global dynamic topography raster images, created by Bernhard Steinberger at NGU
These data-files are also contained within the GPlates installation packages, and will be automatically installed with GPlates. Thanks to Bernhard Steinberger and the Geodynamics Team for making these data-files available!

Researchers in the California Institute of Technology have made GPlates-compatible data available for use with GPlates; in particular:

Global reconstructions with continuously closing plates from 140 Ma to the present.
These data files, along with a corresponding paper, can be found here.

Load data in GPlates
To load the global coastline file and the rotation file in GPlates:

Download each data file and save it to disk.
Pull down the GPlates File menu.
Select the operation Open Feature Collection….
To load a sequence of time-dependent raster images (for example, Bernhard Steinberger's dynamic topography images) in GPlates:

Download the file “dynamic-topography.zip”, save it to disk, and unzip it.
Pull down the GPlates File menu and select the operation Import Time-dependent Raster….
Click the Add Directory button.
Choose the “jpg” folder inside the “dynamic topography” folder. (Don't browse into the “jpg” folder; instead, click the folder once to select it, then press the Choose button.)
Choose the Next button of the dialog to finish the import wizard.
An animated screenshot of these data-sets may be found in the Animations section of the Screenshots page.
