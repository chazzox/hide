/**
 * @name hide
 * @author chazzox#1001
 * @authorId 267924628670775297
 * @description Plugin template for better discord that hides everything
 * @version 1.0.0
 * @website https://github.com/chazzox/hide-everything#readme
 * @source https://github.com/chazzox/hide-everything
 * @donate https://www.paypal.me/chazzox
 */
/*@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%appdata%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("Hey! This file is not an executable, please try not to run it!", 0, "hide plugin!", 0x30);

    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already. Just reload Discord with Ctrl+R.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder. Are you sure it's even installed?", 0, "Can't find better discord", 0x10);
    } else if (shell.Popup("Would you like me to automatically copy myself to the folder?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed! Just reload Discord with Ctrl+R.", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else @*/
var t=BdApi.React;t.createContext;t.useRef;var e=t.useState;t.useLayoutEffect;var n=t.createElement;t.useContext;var o=t.useEffect;t.useMemo;t.useCallback;t.Children;t.isValidElement;t.Fragment;t.forwardRef;BdApi.injectCSS("hide-styles","#toolButton{background:none;padding:0;outline:none;position:relative;margin:0 6px 0 0}#toolButton #tooltip{visibility:hidden;position:absolute;left:50%;bottom:-8px;transform:translate(-50%,100%)}#toolButton svg *{fill:var(--interactive-normal)}#toolButton:hover svg *{fill:var(--interactive-hover)}#toolButton:hover #tooltip{visibility:visible}");var i="\n".concat([".nowPlayingColumn-2sl4cE",".content-3YMskv > .peopleListItem-2nzedh",".wrapper-24pKcD",".panel-24C3ux.activityPanel-28dQGo",".content-yTz4x3",'a[aria-label~="(direct"], a[aria-label~="(group"]','div[aria-label="Servers"]',".children-gzQq2t",".badge-1Skb69.numberBadge-2s8kKX.base-PmTxvP.baseShapeRound-1Mm1YW",".peopleListItem-2nzedh",".lowerBadge-29hYVK",".privateChannelRecipientsInviteButtonIcon-3A3uTc.iconWrapper-2OrFZ1.clickable-3rdHwn",".bottomControls-lIJyYL.controlSection-2h3cS0",".root-3yg4nC.voiceCallWrapper-3kPwHm",".inviteToolbar-3F-l2g",'div[data-list-id="recents"]'].join(", ")," {\n    display: none\n}\n\nh2.title-30qZAO.container-2ax-kl {\n    color: rgba(255,255,255,0);\n}\n\nh2.title-30qZAO.container-2ax-kl::before {\n    content: 'Online - 0';\n    opacity: 1;\n    display: block;\n    color: var(--header-secondary);\n}"),r=function(t){var e=t.line;return n("svg",{className:"icon-22AiRD",width:"400",height:"237.55102040816325",viewBox:"0, 0, 400,237.55102040816325"},n("g",null,n("g",null,n("path",{d:"M190.204 0.283 C 130.734 3.791,61.288 43.865,8.205 105.306 C -3.624 118.998,-3.443 119.916,15.011\r\n\t\t\t\t\t\t139.842 C 78.427 208.318,153.464 244.150,217.632 236.599 C 276.681 229.651,341.324 190.811,392.335\r\n\t\t\t\t\t\t131.633 C 403.606 118.556,403.393 117.582,384.856 97.564 C 324.127 31.978,253.265 -3.436,190.204\r\n\t\t\t\t\t\t0.283 M216.327 21.622 C 258.776 26.814,303.006 49.529,345.853 88.143 C 356.364 97.616,376.159\r\n\t\t\t\t\t\t117.892,375.822 118.841 C 374.160 123.516,338.376 156.875,321.244 169.722 C 240.580 230.206,167.212\r\n\t\t\t\t\t\t231.911,86.327 175.180 C 67.037 161.651,39.217 136.735,25.985 121.136 C 23.602 118.326,22.931\r\n\t\t\t\t\t\t119.562,32.271 109.544 C 81.066 57.207,138.118 25.205,190.000 21.070 C 193.608 20.783,212.742\r\n\t\t\t\t\t\t21.184,216.327 21.622 M192.245 54.703 C 139.651 61.981,116.941 124.807,153.095 163.009 C 192.496\r\n\t\t\t\t\t\t204.641,262.220 178.202,264.362 120.816 C 265.819 81.773,230.515 49.408,192.245 54.703 M208.239\r\n\t\t\t\t\t\t75.723 C 249.733 84.349,256.744 139.823,218.661 158.188 C 186.646 173.627,148.737 143.890,156.972\r\n\t\t\t\t\t\t109.796 C 162.742 85.909,185.256 70.945,208.239 75.723",fill:"#b9bbbe"})),e&&n("g",null,n("line",{transform:"rotate(-30, 200, 119)",y2:"118.99996",x2:"375.29031",y1:"118.99996",x1:"24.70948","stroke-width":"35",stroke:"#b9bbbe",fill:"none"}))))},a=function(){var t=e(BdApi.loadData("hide-everything","isHidden")),a=t[0],l=t[1];o((function(){a?BdApi.injectCSS("hide-everything",i):BdApi.clearCSS("hide-everything")}),[a]);return n("button",{id:"toolButton",onClick:function(){return l((function(t){BdApi.setData("hide-everything","isHidden",!t);return!t}))}},n("div",{className:"iconWrapper-2OrFZ1 clickable-3rdHwn"},n(r,{line:a}),n("div",{id:"tooltip",className:"tooltip-2QfLtc tooltipBottom-3ARrEK tooltipPrimary-1d1ph4"},n("div",{className:"tooltipPointer-3ZfirK"}),n("div",{className:"tooltipContent-bqVLWK"},a?"Show":"Hide"))))};module.exports=function(){function t(){}t.prototype.start=function(){var t,e=null===(t=BdApi.findModuleByDisplayName("HeaderBarContainer"))||void 0===t?void 0:t.prototype;BdApi.Patcher.after("hide",e,"renderLoggedIn",(function(t,e,o){o.props.toolbar.props.children.push(n(a,null))}))};t.prototype.stop=function(){BdApi.Patcher.unpatchAll("hide")};return t}();
/*@end @*/
