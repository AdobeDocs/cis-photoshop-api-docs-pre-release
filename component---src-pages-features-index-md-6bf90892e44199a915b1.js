(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[258],{948:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return p}});var o=a(2122),n=a(9756),i=(a(5007),a(4983)),s=a(9536),r={},l={_frontmatter:r},d=s.Z;function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.mdx)(d,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"supported-features"},"Supported Features"),(0,i.mdx)("p",null,"This is a list of currently supported features.  Please also see the ",(0,i.mdx)("a",{parentName:"p",href:"../release-notes/index.md"},"Release Notes")," for a list of newly added features"),(0,i.mdx)("h2",{id:"photoshop"},"Photoshop"),(0,i.mdx)("p",null,"The API's are documented at ",(0,i.mdx)("a",{parentName:"p",href:"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Photoshop"},"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Lightroom")),(0,i.mdx)("h3",{id:"smartobject"},"SmartObject"),(0,i.mdx)("p",null,"The Photoshop APIs currently support creating and editing of Embedded Smart Objects. Support for Linked Smart Objects is forthcoming."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"In order to update an embedded smart object that is referenced by multiple layers you need to update each of those layers, then only the effect will be reflected in all layers referencing the same smart object.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The replaced smart object is placed within the bounding box of the original image. If the new image is bigger or smaller than the original image, it fits into the original bounding box maintaining the aspect ratio. You can change the bounds of the replaced image by passing bounds parameters in the API call.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"If your document contains transparent pixels (e.g some .png) for the smart object layer, you may not get consistent bounds."))),(0,i.mdx)("p",null,"The API's are documented ",(0,i.mdx)("a",{parentName:"p",href:"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Photoshop-document_operations"},"here"),".\nWe also have an example of replacing a Smart Object within a layer.\n",(0,i.mdx)("a",{parentName:"p",href:"../code-sample/#example-1-smartobject"},"Smart Object Example Code"),".\nFor better performance, we rasterize our smart objects that are bigger than  2000 pixels * 2000 pixels.\nFor optimal processing, please make sure the embedded smart object that you want to replace only contains alphanumeric characters in it's name."),(0,i.mdx)("h3",{id:"text-layers"},"Text layers"),(0,i.mdx)("p",null,"The Photoshop API currently support creating and editing of Text Layer with different fonts, character styles and paragraph styles. The set of text attributes that can be edited is listed below:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Edit the text contents"),(0,i.mdx)("li",{parentName:"ul"},"Change the font (See the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Fonts")," section for more info)"),(0,i.mdx)("li",{parentName:"ul"},"Edit the font size"),(0,i.mdx)("li",{parentName:"ul"},"Change the font color in the following formats: rgb, cmyk, gray, lab"),(0,i.mdx)("li",{parentName:"ul"},"Edit the text orientation (horizontal/vertical)"),(0,i.mdx)("li",{parentName:"ul"},"Edit the paragraph alignment (left, center, right, justify, justifyLeft, justifyCenter, justifyRight)")),(0,i.mdx)("p",null,"The API's are documented ",(0,i.mdx)("a",{parentName:"p",href:"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Photoshop-document_operations"},"here")),(0,i.mdx)("p",null,"We also have an example of making a simple text layer edit."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"../code-sample/#example-3-making-a-text-layer-edit"},"Text layer Example Code")),(0,i.mdx)("h4",{id:"font-handling"},"Font handling"),(0,i.mdx)("p",null,"In order to be able to correctly operate on text layers in the PSD, the corresponding fonts needed for these layers will need to be available when the server is processing the PSD. These include fonts from the following cases:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"The font that is in the text layer being edited, but the font itself is not being changed"),(0,i.mdx)("li",{parentName:"ol"},"If the font in a text layer is being changed to a new font")),(0,i.mdx)("p",null,"While referencing fonts in the API request, please ensure that the correct Postscript name for that font is used. Referencing to that font with any other name will result in the API treating this as a missing font."),(0,i.mdx)("p",null,"The Photoshop APIs supports using the following category of fonts:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Currently Installed Fonts on the server listed ",(0,i.mdx)("a",{parentName:"li",href:"/cis-photoshop-api-docs/features/supported-fonts/"},"here")),(0,i.mdx)("li",{parentName:"ul"},"Fonts that you are authorized to access via ",(0,i.mdx)("a",{parentName:"li",href:"https://fonts.adobe.com/fonts"},"Adobe Fonts"),".\n",(0,i.mdx)("strong",{parentName:"li"},"Note:")," Currently only available for OAuth tokens, JWT service token support is forthcoming."),(0,i.mdx)("li",{parentName:"ul"},"Custom/Other Fonts: These are the fonts that are either owned by you or the ones that only you are authorized to use.\nTo use a custom font you must include an href to the font in your request. Look at the ",(0,i.mdx)("inlineCode",{parentName:"li"},"options.fonts")," section of the API docs for more information.\nFor including an href to the font in your request, please ensure the font file name to be in this format: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<font_postscript_name>.<ext>"),", when it is being uploaded in your choice of storage. A sample ",(0,i.mdx)("inlineCode",{parentName:"li"},"options.fonts")," section will look like so:",(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "storage": "external",\n  "href": "<Storage URL to OpenSansCondensed-Light.ttf>"\n}\n')),(0,i.mdx)("strong",{parentName:"li"},"Note:")," This also applies to any other font present in the document which is not to be found in the first 2 categories above.")),(0,i.mdx)("p",null,"Here is an example usage of a custom font\n",(0,i.mdx)("a",{parentName:"p",href:"../code-sample/#example-4-custom-font-in-a-text-layer"},"Custom font")),(0,i.mdx)("h4",{id:"handle-missing-fonts-in-the-document"},"Handle missing fonts in the document."),(0,i.mdx)("p",null,"The API provides two options to control the behavior when there are missing fonts, as the request is being processed:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Specify a global font which would act as a default font for the current request: The ",(0,i.mdx)("inlineCode",{parentName:"li"},"globalFont")," field in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"options")," section of the request can be used to specify the full postscript name of this font.\nFor any textLayer edit/add operation, if the font used specifically for that layer is missing, this font will be used as the default. If the global font itself is missing, then the action to be taken will be dictated by the ",(0,i.mdx)("inlineCode",{parentName:"li"},"manageMissingFonts")," options as explained here in the next bullet point.")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note"),": If using an OAuth integration, Adobe Fonts can be used as a global font as well. If the global font is a custom font, please upload the font to one of the cloud storage types that is supported and specify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"href")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"storage")," type in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"options.fonts")," section of the request."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Specify the action to be taken if one or more fonts required for the add/edit operation(s) are missing: The ",(0,i.mdx)("inlineCode",{parentName:"li"},"manageMissingFonts")," field in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"options")," section of the request can be used to specify this action. It can accept one of the following 2 values:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fail")," to force the request/job to fail"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useDefault")," to use our system designated default font, which is: ",(0,i.mdx)("inlineCode",{parentName:"li"},"ArialMT"))))),(0,i.mdx)("p",null,"Here is an example usage of ",(0,i.mdx)("inlineCode",{parentName:"p"},"manageMissingFonts")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"globalFont"),". ",(0,i.mdx)("a",{parentName:"p",href:"../code-sample/#example-5-dictating-actions-for-missing-fonts"},"Handle missing fonts")),(0,i.mdx)("h4",{id:"limitations"},"Limitations"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Most of the text attributes retain their respective original values. There are some attributes however that do not retain their original values. For example (and not limited to): tracking, leading, kerning")),(0,i.mdx)("h3",{id:"photoshop-actionsnew"},"Photoshop Actions(",(0,i.mdx)("inlineCode",{parentName:"h3"},"New!"),")"),(0,i.mdx)("h4",{id:"execute-photoshop-actions"},"Execute Photoshop Actions"),(0,i.mdx)("p",null,"Adobe Photoshop APIs supports playing back Photoshop Actions recorded from Photoshop.  ",(0,i.mdx)("a",{href:"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Photoshop-photoshopActions",target:"_blank"},"Click here to see API documentation")),(0,i.mdx)("p",null,"An action is a series of tasks that you play back on a single file or a batch of files—menu commands, panel options, tool actions, and so on. For example, you can create an action that changes the size of an image, applies an effect to the image, and then saves the file in the desired format."),(0,i.mdx)("p",null,"For more information on how to create Photoshop Actions, see ",(0,i.mdx)("a",{href:"https://helpx.adobe.com/photoshop/using/actions-actions-panel.html",target:"_blank"},"Adobe Help Center")),(0,i.mdx)("h4",{id:"usage-recommendations"},"Usage Recommendations"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create actions that do not open any operating system dialogs. All Photoshop dialogs are supported, but not operating system dialogs."),(0,i.mdx)("li",{parentName:"ul"},"It is recommended to create Actions that do not require user interactions."),(0,i.mdx)("li",{parentName:"ul"},"Input and Output file format should be any of PSD, JPEG, PNG, or TIFF."),(0,i.mdx)("li",{parentName:"ul"},"Make sure to test your actions on Photoshop, with several different input/images. If it has any errors on Photoshop, it won't run successfully on our servers either.")),(0,i.mdx)("h4",{id:"known-limitations"},"Known Limitations"),(0,i.mdx)("p",null,"The following are known limitations for the Alpha release"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Not supported, 3D and Video features"),(0,i.mdx)("li",{parentName:"ul"},"Custom presets (for example color swatches and brushes)"),(0,i.mdx)("li",{parentName:"ul"},"The action should operate on one document.  Multiple documents support will be in a future release")),(0,i.mdx)("p",null,"Here are examples of submitting and executing Photoshop Actions.\n",(0,i.mdx)("a",{parentName:"p",href:"../code-sample/#example-15--photoshop-actions---play-all-actions-in-atn-file"},"Execute Photoshop Actions with all actions")," and ",(0,i.mdx)("a",{parentName:"p",href:"../code-sample/#example-16--photoshop-actions-play-a-specific-action"},"Execute Photoshop Actions with a specific action")),(0,i.mdx)("h3",{id:"rendering--conversions"},"Rendering / Conversions"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create a new PSD document"),(0,i.mdx)("li",{parentName:"ul"},"Create a JPEG, TIFF or PNG rendition of various sizes"),(0,i.mdx)("li",{parentName:"ul"},"Request thumbnail previews of all renderable layers"),(0,i.mdx)("li",{parentName:"ul"},"Convert between any of the supported filetypes (PSD, JPEG, TIFF, PNG)")),(0,i.mdx)("p",null,"Here is an example of creating JPEG and PNG rendtions of a PSD document.\n",(0,i.mdx)("a",{parentName:"p",href:"../code-sample/#example-10-create-a-document-rendition"},"Render PSD document")),(0,i.mdx)("h3",{id:"layer-level-edits"},"Layer level edits"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"General layer edits",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Edit the layer name"),(0,i.mdx)("li",{parentName:"ul"},"Toggle the layer locked state"),(0,i.mdx)("li",{parentName:"ul"},"Toggle layer visibility"),(0,i.mdx)("li",{parentName:"ul"},"Move or resize the layer via it's bounds"),(0,i.mdx)("li",{parentName:"ul"},"Delete layers"))),(0,i.mdx)("li",{parentName:"ul"},"Adjustment layers  (",(0,i.mdx)("inlineCode",{parentName:"li"},"Pre-Release Feature!!"),")",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add or edit an adjustment layer. The following types of adjustment layers are currently supported:"),(0,i.mdx)("li",{parentName:"ul"},"Brightness and Contrast"),(0,i.mdx)("li",{parentName:"ul"},"Exposure"),(0,i.mdx)("li",{parentName:"ul"},"Hue and Saturation"),(0,i.mdx)("li",{parentName:"ul"},"Color Balance"))),(0,i.mdx)("li",{parentName:"ul"},"Image/Pixel layers (",(0,i.mdx)("inlineCode",{parentName:"li"},"Pre-Release Feature!!"),")",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add a new pixel layer, with optional image"),(0,i.mdx)("li",{parentName:"ul"},"Swap the image in an existing pixel layer"))),(0,i.mdx)("li",{parentName:"ul"},"Shape layers (",(0,i.mdx)("inlineCode",{parentName:"li"},"Pre-Release Feature!!"),")",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Resize a shape layer via it's bounds")))),(0,i.mdx)("h4",{id:"the-add-edit-and-delete-objects"},"The add, edit and delete objects"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"/documentOperations")," API should primarily be used to make layer and/or document level edits to your PSD and then generate new renditions with the changes. You can pass in a flat array of only the layers that you wish to act upon, in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"options.layers")," argument of the request body.\nThe layer name (or the layer id) will be used by the service to identify the correct layer to operation upon in your PSD."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"add"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"edit"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"move")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"delete")," blocks indicate the action you would like to be taken on a particular layer object. Any layer block passed into the API that is missing one of these attributes will be ignored.\nThe ",(0,i.mdx)("inlineCode",{parentName:"p"},"add")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"move")," blocks must also supply one of the attributes ",(0,i.mdx)("inlineCode",{parentName:"p"},"insertAbove"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"insertBelow"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"insertInto"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"insertTop")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"insertBottom")," to indicate where you want to move the layer to. More details on this can be found in the API documentation."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note"),": Adding a new layer does not require the ID to be included, the service will generate a new layer id for you."),(0,i.mdx)("p",null,"Here are some examples of making various layer level edits."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../code-sample/#example-6-making-a-simple-edit"},"Layer level editing")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../code-sample/#example-8-adding-a-new-adjustment-layer"},"Adding a new Adjustment Layer")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../code-sample/#example-9-editing-a-pixel-layer"},"Editing Image in a Pixel Layer"))),(0,i.mdx)("h3",{id:"document-level-edits"},"Document level edits"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Crop a PSD"),(0,i.mdx)("li",{parentName:"ul"},"Resize a PSD")),(0,i.mdx)("h3",{id:"artboards"},"Artboards"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Show artboard information in the JSON Manifest"),(0,i.mdx)("li",{parentName:"ul"},"Create a new artboard from multiple input psd's")),(0,i.mdx)("h2",{id:"lightroom"},"Lightroom"),(0,i.mdx)("p",null,"The API's are documented at ",(0,i.mdx)("a",{parentName:"p",href:"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Lightroom"},"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Lightroom")),(0,i.mdx)("h3",{id:"autotone"},"AutoTone"),(0,i.mdx)("p",null,"Automatically tone an image to correct exposure/contrast/sharpness/etc"),(0,i.mdx)("h3",{id:"autostraighten"},"AutoStraighten"),(0,i.mdx)("p",null,"Applies the Auto Upright transformation on an image"),(0,i.mdx)("h3",{id:"presets"},"Presets"),(0,i.mdx)("p",null,"Apply one or more XMP Lightroom presets to an image, by referencing preset file(s) stored on cloud.\nThe preset file can be created by editing an image in lightroom and exporting it as a ",(0,i.mdx)("inlineCode",{parentName:"p"},".xmp")," file.\nThe details on how to create a preset can be found ",(0,i.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/lightroom-cc/how-to/photo-presets-lightroom-cc.html"},"here"),".\nIf the use case would be to be able to create an ",(0,i.mdx)("inlineCode",{parentName:"p"},".xmp")," file from a set of slider values obtained directly from a user, there are 2 ways to achieve this workflow:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Start with the empty ",(0,i.mdx)("inlineCode",{parentName:"li"},".xmp")," file from ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/blob/main/sample-code/lr-sample-app/crs.xml"},"here")," and add the corresponding slider values"),(0,i.mdx)("li",{parentName:"ol"},"Or please look ahead in this documentation page at the ",(0,i.mdx)("a",{parentName:"li",href:"/cis-photoshop-api-docs/features/#edit"},"/edit API"))),(0,i.mdx)("h3",{id:"edit"},"Edit"),(0,i.mdx)("p",null,"Apply one or more Lightroom edits to an image."),(0,i.mdx)("h3",{id:"xmp"},"XMP"),(0,i.mdx)("p",null,"Apply a Lightroom preset to an image, by passing in the preset XMP contents inline through the API."),(0,i.mdx)("h2",{id:"sensei"},"Sensei"),(0,i.mdx)("p",null,"These are the APIs powered by Sensei, Adobe’s Artificial Intelligence Technology, and Photoshop. The API's can identify the main subject of an image and produce two types of outputs. You can create a greyscale ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Layers_(digital_image_editing)#Layer_mask"},"mask")," png file that you can composite onto the original image (or any other).  You can also create a cutout where the mask has already composited onto your original image so that everything except the main subject has been removed."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"center"},"Original"),(0,i.mdx)("th",{parentName:"tr",align:"center"},"Mask"),(0,i.mdx)("th",{parentName:"tr",align:"center"},"Cutout"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"center"},(0,i.mdx)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cis-photoshop-api-docs/static/73a9fada148a5aaa52f4be937841b6fb/cb523/sensei_orig.webp 320w","/cis-photoshop-api-docs/static/73a9fada148a5aaa52f4be937841b6fb/797b9/sensei_orig.webp 640w","/cis-photoshop-api-docs/static/73a9fada148a5aaa52f4be937841b6fb/01256/sensei_orig.webp 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cis-photoshop-api-docs/static/73a9fada148a5aaa52f4be937841b6fb/cb69c/sensei_orig.jpg 320w","/cis-photoshop-api-docs/static/73a9fada148a5aaa52f4be937841b6fb/c08c5/sensei_orig.jpg 640w","/cis-photoshop-api-docs/static/73a9fada148a5aaa52f4be937841b6fb/4a8d4/sensei_orig.jpg 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/jpeg"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cis-photoshop-api-docs/static/73a9fada148a5aaa52f4be937841b6fb/4a8d4/sensei_orig.jpg",alt:"alt image",title:"Original Image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("td",{parentName:"tr",align:"center"},(0,i.mdx)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cis-photoshop-api-docs/static/77a422845f3e4ca09f2cff4434e7adef/cb523/sensei_mask.webp 320w","/cis-photoshop-api-docs/static/77a422845f3e4ca09f2cff4434e7adef/797b9/sensei_mask.webp 640w","/cis-photoshop-api-docs/static/77a422845f3e4ca09f2cff4434e7adef/01256/sensei_mask.webp 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cis-photoshop-api-docs/static/77a422845f3e4ca09f2cff4434e7adef/72799/sensei_mask.png 320w","/cis-photoshop-api-docs/static/77a422845f3e4ca09f2cff4434e7adef/6af66/sensei_mask.png 640w","/cis-photoshop-api-docs/static/77a422845f3e4ca09f2cff4434e7adef/5a6dd/sensei_mask.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cis-photoshop-api-docs/static/77a422845f3e4ca09f2cff4434e7adef/5a6dd/sensei_mask.png",alt:"alt image",title:"Mask",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("td",{parentName:"tr",align:"center"},(0,i.mdx)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cis-photoshop-api-docs/static/16a593c2c170dd00562f2312f2204895/cb523/sensei_cutout.webp 320w","/cis-photoshop-api-docs/static/16a593c2c170dd00562f2312f2204895/797b9/sensei_cutout.webp 640w","/cis-photoshop-api-docs/static/16a593c2c170dd00562f2312f2204895/01256/sensei_cutout.webp 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cis-photoshop-api-docs/static/16a593c2c170dd00562f2312f2204895/72799/sensei_cutout.png 320w","/cis-photoshop-api-docs/static/16a593c2c170dd00562f2312f2204895/6af66/sensei_cutout.png 640w","/cis-photoshop-api-docs/static/16a593c2c170dd00562f2312f2204895/5a6dd/sensei_cutout.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cis-photoshop-api-docs/static/16a593c2c170dd00562f2312f2204895/5a6dd/sensei_cutout.png",alt:"alt image",title:"Original Image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))))),(0,i.mdx)("p",null,"The API's are documented at ",(0,i.mdx)("a",{parentName:"p",href:"https://adobedocs.github.io/photoshop-api-docs-pre-release/#api-Sensei"},"https://adobedocs.github.io/photoshop-api-docs/#api-Sensei")),(0,i.mdx)("h3",{id:"image-cutout"},"Image Cutout"),(0,i.mdx)("p",null,"Initiate a job to create an image cutout. Code example here."),(0,i.mdx)("h3",{id:"image-mask"},"Image Mask"),(0,i.mdx)("p",null,"Initiate a job to create an image mask. Code example here."),(0,i.mdx)("h3",{id:"customized-workflow"},"Customized Workflow"),(0,i.mdx)("p",null,"You can make a 'customized workflow' by chaining different APIs. Example of which can be found here.(TODO)"),(0,i.mdx)("h2",{id:"using-webhooks-through-adobe-io-events-pre-release-feature"},"Using Webhooks through Adobe I/O Events (",(0,i.mdx)("inlineCode",{parentName:"h2"},"Pre-Release Feature!!"),")"),(0,i.mdx)("p",null,"Adobe I/O Events offers the possibility to build an event-driven application, based on events originating from Photoshop and Lightroom API's. To start listening for events, your application needs to register a webhook URL, specifying the Event Types to receive. Whenever a matching event gets triggered, your application is notified through an HTTP POST request to the webhook URL.\nThe Event Provider for Photoshop and Lightroom API's is ",(0,i.mdx)("inlineCode",{parentName:"p"},"Imaging API Events"),".\nThis event provider has two event types:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"Photoshop API events")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"Lightroom API events"))),(0,i.mdx)("p",null,"As the names indicate, these event types represent events triggered by the individual APIs."),(0,i.mdx)("h3",{id:"registering-your-application-to-our-event-provider"},"Registering your application to our Event Provider"),(0,i.mdx)("h4",{id:"prerequisites-needed-to-use-the-event-provider"},"Prerequisites needed to use the Event Provider"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Only supported for a ",(0,i.mdx)("inlineCode",{parentName:"li"},"JWT Integration"),": You will have to create your own JWT Integration, please refer to ",(0,i.mdx)("a",{parentName:"li",href:"../authentication/#generating-a-token"},"this")," section of the document for details on how to create a Service Integration."),(0,i.mdx)("li",{parentName:"ol"},"Make sure that the integration is created under your own Organization Role in ",(0,i.mdx)("a",{parentName:"li",href:"https://console.adobe.io"},"https://console.adobe.io")," and this will ensure that you have a unique ",(0,i.mdx)("inlineCode",{parentName:"li"},"Organization ID"),". A typical ID would look something like this: ",(0,i.mdx)("inlineCode",{parentName:"li"},"ABCDEF123B6CCB7B0A495E2E@AdobeOrg")," and can be found in the overview section of the details of the integration."),(0,i.mdx)("li",{parentName:"ol"},"Create a Webhook application. ",(0,i.mdx)("a",{parentName:"li",href:"https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/webhooks_intro.md"},"This")," page gives all the details of what the skeleton of a basic application would look like. You can find a sample NodeJS application ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/webhook-sample-app"},"here"))),(0,i.mdx)("h4",{id:"registering-the-webhook"},"Registering the Webhook"),(0,i.mdx)("p",null,"Once the above prerequisites are met, you can now proceed to register the webhook to the service integration. The steps to do that can be found  ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/webhooks_intro.md#your-first-webhook"},"here"),".\nAfter the webhook has been successfully registered, you will start to receive the events for any submitted job that either succeeded or failed, from the Event Types selected. This eliminates the need for your application to poll for the status of the job using the jobID. Examples can be found here (TODO)"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-features-index-md-6bf90892e44199a915b1.js.map