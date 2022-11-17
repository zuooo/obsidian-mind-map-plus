import { Notice, TFile } from 'obsidian';
import { getComputedCss } from './markmap-svg';

// Mode: 0-Copy PNG 1-Copy SVG code 2-Save SVG 3-Save and open
export function exportImage(svg: SVGElement, _this: any, mode: number) {
    if (mode==0) {
        const canvas = createCanvas(svg); 
        const img = generateImage(svg, canvas, () => { 
            canvas.toBlob((blob: any) => { 
                const item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item]); 
                new Notice('Screenshot copied to the clipboard.')
            });
        });
    } else {
        //get svg source.
        var serializer = new XMLSerializer();
        var source = serializer.serializeToString(svg);

        //add name spaces.
        if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
            source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
        }
        if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
            source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
        }
        const { font } = getComputedCss(_this.containerEl);
        source = source.replace("<style>", "<style>@import url('https://fonts.googleapis.com/css2?family=Inter'); div{ font: "+font+"}</style><style>");

        //add xml declaration
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

        if (mode==1) {
            navigator.clipboard.writeText(source);
            new Notice('SVG code copied to the clipboard.');
        } else {
            const filename = _this.fileName != undefined ? _this.fileName + '.svg' : 'Untitled.svg';
            createFile(source, _this, filename, mode==3);
            new Notice('Saved in Vault as \''+filename+'\'');
        }
    }
}

function getCommandLine() {
    switch (process.platform) { 
       case 'darwin' : return 'open';
       case 'win32' : return 'start';
       default : return 'xdg-open';
    }
}

async function createFile(string: string, _this: any, filename: string, openinapp: boolean) {
   const fileexists = _this.app.vault.getFiles().some((f: TFile)=>f.path==filename);
   if (fileexists) await _this.app.vault.modify(_this.app.vault.getFiles().find((f: TFile)=>f.path==filename), string); else await _this.app.vault.create(filename, string);
   if (openinapp) {
     var exec = require('child_process').exec;
     exec(getCommandLine() + ' "" "' + _this.app.vault.adapter.basePath + '\\' + filename + '"');
   }
}

function createCanvas(svg: SVGElement): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = svg.clientWidth;
    canvas.height = svg.clientHeight;
    return canvas;
}

function generateImage(svg: SVGElement, canvas: HTMLCanvasElement, callback: () => void): HTMLImageElement {
    var ctx = canvas.getContext("2d");
    return drawInlineSVG(ctx, svg, callback);
}

function drawInlineSVG(ctx: CanvasRenderingContext2D, svg: SVGElement, callback: () => void): HTMLImageElement {

    // get svg data
    const xml = new XMLSerializer().serializeToString(svg);

    // make it base64
    const svg64 = btoa(unescape(encodeURIComponent(xml)))

    const b64Start = 'data:image/svg+xml;base64,';

    // prepend a "header"
    const image64 = b64Start + svg64;

    const img = new Image();
    // set it as the source of the img element
    img.onload = function() {
        // draw the image onto the canvas
        ctx.drawImage(img, 0, 0);
        callback();
    }
    img.src = image64;
    return img;
}