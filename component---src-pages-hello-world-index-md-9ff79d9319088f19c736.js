(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[734],{1198:function(e,o,t){"use strict";t.r(o),t.d(o,{_frontmatter:function(){return i},default:function(){return d}});var a=t(2122),n=t(9756),r=(t(5007),t(4983)),l=t(9536),i={},u={_frontmatter:i},s=l.Z;function d(e){var o=e.components,t=(0,n.Z)(e,["components"]);return(0,r.mdx)(s,(0,a.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"hello-world"},"Hello World"),(0,r.mdx)("h3",{id:"free-trial-users-jwt-authentication"},"Free trial users (JWT authentication)"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"NOTE: Free Trial users will not have access to assets stored in the Creative Cloud so you must use an external storage source when making calls to the API. All free trial users will have 5,000 API calls to test their use case and provide feedback. Please see [Quota Limits](#quota-limits) for more information.\n"),"\nOnce you have created your token you can follow the steps below to make your first call. If you have not created a token please see ","[Authentication]"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},'Open your terminal and paste the code below. Make sure to replace the variables "YOUR_ACCESS_TOKEN"  with the token you generated in the adobe io console. If you haven’t completed this step you can go to “generating a token” and follow the steps there to create one.'),(0,r.mdx)("li",{parentName:"ol"},'You are also going to need your  "YOUR_CLIENT_ID" variable with your api key which can be found in your adobe io console.'),(0,r.mdx)("li",{parentName:"ol"},"Once all variables have been replaced you can run the command.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},'curl --request GET \\\n  --url https://image.adobe.io/pie/psdService/hello \\\n  --header "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\\n  --header "x-api-key: <YOUR_CLIENT_ID>"\n')),(0,r.mdx)("p",null,"Congrats! You just made your first request to the Photoshop API."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"NOTE: Your token will expire every 24 hours and will need to be refreshed after it expires. See  https://paper.dropbox.com/doc/API-DOCS--BKRRFkIV_y_ZMnDQPaCj4cu4Ag-7HOkd3u786hMjCnKYfeb1#:h2=Automating-your-JWT-token# for more information on retrieving your token programmatically.")),(0,r.mdx)("h3",{id:"internal-adobe-users-only"},"Internal Adobe Users Only"),(0,r.mdx)("p",null,"Once you have generated a token you can test your credentials to ensure you can communicate with the API."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Copy and paste the code below into your terminal"),(0,r.mdx)("li",{parentName:"ol"},"Replace <YOUR_OAUTH_TOKEN>. See +API DOCS: Generating-a-token for a walk through on how to create a token."),(0,r.mdx)("li",{parentName:"ol"},"Replace  <YOUR_CLIENT_ID> with your api key which can be found the adobe io console.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},'curl --request GET \\\n  --url https://image.adobe.io/pie/psdService/hello \\\n  --header "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\\n  --header "x-api-key: <YOUR_CLIENT_ID>"\n')),(0,r.mdx)("p",null,"Congrats! You just made your first request to the Photoshop API."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-hello-world-index-md-9ff79d9319088f19c736.js.map