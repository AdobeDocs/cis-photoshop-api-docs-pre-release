(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[355],{8875:function(e,o,t){"use strict";t.r(o),t.d(o,{_frontmatter:function(){return r},default:function(){return d}});var n=t(2122),a=t(9756),i=(t(5007),t(4983)),s=t(9536),r={},l={_frontmatter:r},p=s.Z;function d(e){var o=e.components,t=(0,a.Z)(e,["components"]);return(0,i.mdx)(p,(0,n.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"general-workflow"},"General Workflow"),(0,i.mdx)("p",null,"The typical workflow involves making one or more calls to our API to optionally edit an input PSD or image file, and/or create new image renditions. The endpoints are asynchronous so the response will contain the /status endpoint to poll for job status and results."),(0,i.mdx)("h2",{id:"input-and-output-file-storage"},"Input and Output file storage"),(0,i.mdx)("p",null,"Clients can use assets stored on one of the following storage types:\nExternal:\nAWS S3: By using a presigned GET/PUT URL\nAzure: By generating a SAS (Shared Access Signature) for upload/download\nDropbox: Generate temporary upload/download links using ",(0,i.mdx)("a",{parentName:"p",href:"https://dropbox.github.io/dropbox-api-v2-explorer/"},"https://dropbox.github.io/dropbox-api-v2-explorer/")),(0,i.mdx)("p",null,"Internal Adobe Employees can use Adobe Creative Cloud Storage by referencing the path to the files in Creative Cloud."),(0,i.mdx)("h2",{id:"current-limitations"},"Current Limitations"),(0,i.mdx)("p",null,"There are a few limitations to the APIs you should be aware of ahead of time.  "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Multi-part uploads and downloads are not yet supported"),(0,i.mdx)("li",{parentName:"ul"},"All the endpoints only support a single PSD input"),(0,i.mdx)("li",{parentName:"ul"},"Error handling is a work in progress. Sometimes you may not see the most helpful of messages")),(0,i.mdx)("h2",{id:"photoshop"},"Photoshop"),(0,i.mdx)("h3",{id:"tracking-document-changes-for-photoshop-services"},"Tracking document changes for Photoshop Services"),(0,i.mdx)("p",null,"If you are making multiple edits to a PSD during the course of a user session it is your decision on how you want to track and store changes from one version of a PSD to another. Some clients will choose to refresh the document's JSON manifest by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"/documentManifest")," again after each call to ",(0,i.mdx)("inlineCode",{parentName:"p"},"/documentOperations"),". Other clients may choose to cache the changes locally and then make one final call to ",(0,i.mdx)("inlineCode",{parentName:"p"},"/documentOperations")," with the original PSD and the accumulated changes requested by the user."),(0,i.mdx)("h3",{id:"compatibility-with-photoshop-versions"},"Compatibility with Photoshop versions"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"The API’s will open any PSD created with Photoshop 1.0 through the current release and this will always be true."),(0,i.mdx)("li",{parentName:"ol"},"When saving as PSD, the API’s will create PSD’s compatible with the current shipping Photoshop."),(0,i.mdx)("li",{parentName:"ol"},"In regards to “maximize compatibility” referenced in ",(0,i.mdx)("a",{parentName:"li",href:"https://helpx.adobe.com/photoshop/using/file-formats.html#maximize_compatibility_for_psd_and_psb_files"},"https://helpx.adobe.com/photoshop/using/file-formats.html#maximize_compatibility_for_psd_and_psb_files"),"  the API's default to “yes”")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-general-workflow-index-md-437694fc7dd163ea3f7a.js.map