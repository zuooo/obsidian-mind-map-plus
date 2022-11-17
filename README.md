# Obsidian Mind Map+

![GitHub Workflow Status](https://img.shields.io/github/license/jing-yen/obsidian-mind-map?style=for-the-badge) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/jing-yen/obsidian-mind-map?sort=semver&style=for-the-badge)


This repository contains a plugin for [Obsidian](https://obsidian.md/) for viewing Markdown notes as Mind Maps using [Markmap](https://markmap.js.org/). It is derived from [James Lynch's plugin](https://github.com/lynchjames/obsidian-mind-map) with a few noteworthy upgrades.

👉 Copy and save Mind Map as SVG
👉 Fixed highlights not displayed
👉 Option for single color Mind Map
    
## Features

- Preview your current note as a Mind Map
- Mind Map preview updates as you select other panes, similar to the [Local Graph](https://forum.obsidian.md/t/how-to-open-a-local-graph-view-pane-on-the-right-sidebar/7190), [Outline](https://publish.obsidian.md/help/Plugins/Outline) and [Backlink](https://publish.obsidian.md/help/Plugins/Backlinks) panes

![Mind Map Demo Image](https://raw.githubusercontent.com/jing-yen/obsidian-mind-map/main/images/mind-map-demo.png)

## Usage

You can open the Mind Map preview for the current note with a command.

![Mind Map Preview Command](https://raw.githubusercontent.com/jing-yen/obsidian-mind-map/main/images/mind-map-preview-command.png)


### Preview More Options Menu

The Mind Map Preview view has several options from the "more options" menu:

![Mind Map Preview More Options](https://raw.githubusercontent.com/jing-yen/obsidian-mind-map/main/images/mind-map-view-more-options.png)

#### Pin

Allows you to pin the Mind Map preview pane to the current note so that you can select other notes with the current Mind Map remaining in place. A pin icon will appear in the header of the Mind Map preview pane. Click the pin icon to unpin.

#### Single color / Multi color

Allows you to choose between single color mind maps and multi color mind maps (the default). This applies to the lines drawn in the Mind Map.

#### Copy image / SVG code

Places a copy of the Mind Map PNG / SVG on your clipboard allowing you to paste it into a note in Obsidian or into an image editor of your choice.

#### Save SVG (and open)

Saves a copy of the Mind Map SVG in your vault and additionally opens the image in your default program, allowing you to easily print and export it.

## Options

![Mind Map Plugin Options](https://raw.githubusercontent.com/jing-yen/obsidian-mind-map/main/images/mind-map-plugin-options.png)

## Installing

From Obsidian v0.9.8+, you can activate this plugin within Obsidian by doing the following:

- Open Settings > Third-party plugin
- Make sure Safe mode is off
- Click Browse community plugins
- Search for "Advanced Tables"
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin