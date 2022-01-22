/*
* @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing
* permissions and limitations under the License.
*/
"use strict";
window.LH_CURRENT_VERSION = "9.0.0", function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ReportGenerator = e()
    }
}((function () {
    return function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = n[a] = {exports: {}};
                t[a][0].call(d.exports, (function (e) {
                    return i(t[a][1][e] || e)
                }), d, d.exports, e, t, n, r)
            }
            return n[a].exports
        }

        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function (e, t, n) {
        }, {}], 2: [function (e, t, n) {
            e("fs");
            const r = e("./flow-report-assets.js");
            t.exports = {
                REPORT_TEMPLATE: '\x3c!--\n@license\nCopyright 2018 The Lighthouse Authors. All Rights Reserved.\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS-IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n--\x3e\n<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">\n  <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEhklEQVR4AWJxL/BhIAesev1U5tcflpncgNrKIsqNIwzC9feMpDUzs70kOczMzMzJJcxwCTMzncPMnOwtzBwzMzPb0vRfeZPp0VhPS5I39V5fdiXV1/VD+9QC7OVn9BsyH1XIoEI1PfmJvLFowVV564+34DFUHudbmfDh4kVXh//7XwE+WjS/YfXZe3yr4j2rqj1AIhSB7hZ8ZtPZu/zw8cK523U4wE1/rvPfWrz4zs0m9ZdC9yUJAlASdBAgocRegfF/f3/h/PuaFsxMdwjAR0vm1+06eMMfIrhLqTWqdH4EumU2SPfMhigJAlRQbZrgrRsl9U+Y2DYDFCz3ILC9kiAiqSrMwbWT0nceEnR+9Kggc2zjOJCASDENkg0a5HfZZgDP81CM3CrQs2Z1+o7DJ6ePr8sK0AOCHv5Jjdt3evyYSaZ351VIStIxPRAUtrBYbxC6w+BZ0ivVSBKkIhJhemSyZpfB00EiPO2VjzYkxhcqXQqCWCShGplvi3y0QxqbuBurMjyJeWnkHZuAEgIQGsUBqwrfjZ+IlBgKyRJzVVYF8O6qFWdh86YzQzMrZigYmxAyfvHgLZQ/LC1CbeniW2Hkqr/PH16SgvGuf2/uzNMBwJA/njxizGPtSyAf7EziJCMGRDRdhoAC4PL1A/SrKQMAAQkEfpJAcRQdrBJ7gNwjSpJsdwK+CANBkqa1LgQB4IicV9nYUct7gaxuDJUErQIiEAiMxLVOFlKzIktPpT0ggpdpC/8YAHnxbgkUY4tAAFSR7AAXNyAAWHJrA/kHGjzg5nleuwFO7Nd/IoDw4Pm58+4jNLmYG0wRA5bErc2Mr3Y+dXTDW1VvwqbJkzMCHQ4S1GTCBOIgUHJrGdEwqzR+jAp/o2qAZelUDoQnruEEdDclJI6576AlNVfc+22XN/+Y1vnJD0Yind6UpEEvn/Hqq15EYjCW7jZCJEpnNvDgkyelDjs106kuux2AAXCSobULOWP8mLhYlpoDMK4qAFXJGk+grtH8YXVz5KJblqaG1+VUdTc0I290bmUQAriGITRbdQnom0aoFj8kx1+wMD2ifncAXUQE4SkDqN1hE0jEophs1SUwZAOhUAiMCLwRtamtTZtbbmZErSAUHbSysaoEmnrsakiMiUAURi283gN6wans9oX8rOCrj7/JP35DFD+iQ7Au/K2KE1jzx6ujjUnXFH9KjEq6ZlhsTBICrNLJf47Pv/pkHzvup1w4dmUbEei0+bcXRqJuh5kVARQ8byyYxOwNGr7A87xh1tp8sGT+uMInrwi++Xj7TQz2d27NvwEkrOflAFQGIDA5khASBCGdO2/Z/MnLPwYfv5TFhjW7QhVKAB6afwe2LpFlFsCnlQEosgQgDsdOG1/LKeNqJS4JCSPJ/i+TakwEARor7gER1Iva5JmPOJK0RUqmoPnnlzFCtmIAhAAQEIQRgDaiYPIauNXcnDlRIrWNFY3hm7PG9YRqr7IV7HrCgAC17befjEvRq2nGhAHtBqDpOuI/I1diUUAMYIxEdyejBJqLnNoszGZtfiX/CztGv2mq+sdaAAAAAElFTkSuQmCC">\n  <title>Lighthouse Report</title>\n  <style>body {margin: 0}</style>\n</head>\n<body>\n  <noscript>Lighthouse report requires JavaScript. Please enable.</noscript>\n\n  <div id="lh-log"></div>\n\n  <script>window.__LIGHTHOUSE_JSON__ = %%LIGHTHOUSE_JSON%%;<\/script>\n  <script>%%LIGHTHOUSE_JAVASCRIPT%%\n  __initLighthouseReport__();\n  //# sourceURL=compiled-reportrenderer.js\n  <\/script>\n  <script>console.log(\'window.__LIGHTHOUSE_JSON__\', __LIGHTHOUSE_JSON__);<\/script>\n</body>\n</html>\n',
                REPORT_JAVASCRIPT: '!function(){"use strict";\n/**\n   * @license\n   * Copyright 2017 The Lighthouse Authors. All Rights Reserved.\n   *\n   * Licensed under the Apache License, Version 2.0 (the "License");\n   * you may not use this file except in compliance with the License.\n   * You may obtain a copy of the License at\n   *\n   *      http://www.apache.org/licenses/LICENSE-2.0\n   *\n   * Unless required by applicable law or agreed to in writing, software\n   * distributed under the License is distributed on an "AS-IS" BASIS,\n   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   * See the License for the specific language governing permissions and\n   * limitations under the License.\n   */const e="data:image/jpeg;base64,",t="pass",n=.9,r="average",o=.5,i="fail",a="error",l=["com","co","gov","edu","ac","org","go","gob","or","net","in","ne","nic","gouv","web","spb","blog","jus","kiev","mil","wi","qc","ca","bel","on"];class s{static i18n=null;static get PASS_THRESHOLD(){return.9}static get MS_DISPLAY_VALUE(){return"%10d ms"}static prepareReportResult(t){const n=JSON.parse(JSON.stringify(t));n.configSettings.locale||(n.configSettings.locale="en"),n.configSettings.formFactor||(n.configSettings.formFactor=n.configSettings.emulatedFormFactor);for(const t of Object.values(n.audits))if("not_applicable"!==t.scoreDisplayMode&&"not-applicable"!==t.scoreDisplayMode||(t.scoreDisplayMode="notApplicable"),t.details&&(void 0!==t.details.type&&"diagnostic"!==t.details.type||(t.details.type="debugdata"),"filmstrip"===t.details.type))for(const n of t.details.items)n.data.startsWith(e)||(n.data=e+n.data);if("object"!=typeof n.categories)throw new Error("No categories provided.");const r=new Map,[o]=n.lighthouseVersion.split(".").map(Number),i=n.categories.performance;if(o<9&&i){n.categoryGroups||(n.categoryGroups={}),n.categoryGroups.hidden={title:""};for(const e of i.auditRefs)e.group?["load-opportunities","diagnostics"].includes(e.group)&&delete e.group:e.group="hidden"}for(const e of Object.values(n.categories))e.auditRefs.forEach((e=>{e.relevantAudits&&e.relevantAudits.forEach((t=>{const n=r.get(t)||[];n.push(e),r.set(t,n)}))})),e.auditRefs.forEach((e=>{const t=n.audits[e.id];e.result=t,r.has(e.id)&&(e.relevantMetrics=r.get(e.id)),n.stackPacks&&n.stackPacks.forEach((t=>{t.descriptions[e.id]&&(e.stackPacks=e.stackPacks||[],e.stackPacks.push({title:t.title,iconDataURL:t.iconDataURL,description:t.descriptions[e.id]}))}))}));return n}static showAsPassed(e){switch(e.scoreDisplayMode){case"manual":case"notApplicable":return!0;case"error":case"informative":return!1;case"numeric":case"binary":default:return Number(e.score)>=n}}static calculateRating(e,l){if("manual"===l||"notApplicable"===l)return t;if("error"===l)return a;if(null===e)return i;let s=i;return e>=n?s=t:e>=o&&(s=r),s}static splitMarkdownCodeSpans(e){const t=[],n=e.split(/`(.*?)`/g);for(let e=0;e<n.length;e++){const r=n[e];if(!r)continue;const o=e%2!=0;t.push({isCode:o,text:r})}return t}static splitMarkdownLink(e){const t=[],n=e.split(/\\[([^\\]]+?)\\]\\((https?:\\/\\/.*?)\\)/g);for(;n.length;){const[e,r,o]=n.splice(0,3);e&&t.push({isLink:!1,text:e}),r&&o&&t.push({isLink:!0,text:r,linkHref:o})}return t}static getURLDisplayName(e,t){const n=void 0!==(t=t||{numPathParts:void 0,preserveQuery:void 0,preserveHost:void 0}).numPathParts?t.numPathParts:2,r=void 0===t.preserveQuery||t.preserveQuery,o=t.preserveHost||!1;let i;if("about:"===e.protocol||"data:"===e.protocol)i=e.href;else{i=e.pathname;const t=i.split("/").filter((e=>e.length));n&&t.length>n&&(i="鈥�"+t.slice(-1*n).join("/")),o&&(i=`${e.host}/${i.replace(/^\\//,"")}`),r&&(i=`${i}${e.search}`)}if(i=i.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g,"$1鈥�"),i=i.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g,"$1鈥�"),i=i.replace(/(\\d{3})\\d{6,}/g,"$1鈥�"),i=i.replace(/\\u2026+/g,"鈥�"),i.length>64&&i.includes("?")&&(i=i.replace(/\\?([^=]*)(=)?.*/,"?$1$2鈥�"),i.length>64&&(i=i.replace(/\\?.*/,"?鈥�"))),i.length>64){const e=i.lastIndexOf(".");i=e>=0?i.slice(0,63-(i.length-e))+"鈥�"+i.slice(e):i.slice(0,63)+"鈥�"}return i}static parseURL(e){const t=new URL(e);return{file:s.getURLDisplayName(t),hostname:t.hostname,origin:t.origin}}static createOrReturnURL(e){return e instanceof URL?e:new URL(e)}static getTld(e){const t=e.split(".").slice(-2);return l.includes(t[0])?"."+t.join("."):"."+t[t.length-1]}static getRootDomain(e){const t=s.createOrReturnURL(e).hostname,n=s.getTld(t).split(".");return t.split(".").slice(-n.length).join(".")}static getEmulationDescriptions(e){let t,n,r;const o=e.throttling;switch(e.throttlingMethod){case"provided":r=n=t=s.i18n.strings.throttlingProvided;break;case"devtools":{const{cpuSlowdownMultiplier:e,requestLatencyMs:i}=o;t=s.i18n.formatNumber(e)+"x slowdown (DevTools)",n=`${s.i18n.formatNumber(i)} ms HTTP RTT, ${s.i18n.formatNumber(o.downloadThroughputKbps)} Kbps down, ${s.i18n.formatNumber(o.uploadThroughputKbps)} Kbps up (DevTools)`,r=562.5===i&&o.downloadThroughputKbps===1638.4*.9&&675===o.uploadThroughputKbps?s.i18n.strings.runtimeSlow4g:s.i18n.strings.runtimeCustom;break}case"simulate":{const{cpuSlowdownMultiplier:e,rttMs:i,throughputKbps:a}=o;t=s.i18n.formatNumber(e)+"x slowdown (Simulated)",n=`${s.i18n.formatNumber(i)} ms TCP RTT, ${s.i18n.formatNumber(a)} Kbps throughput (Simulated)`,r=150===i&&1638.4===a?s.i18n.strings.runtimeSlow4g:s.i18n.strings.runtimeCustom;break}default:r=t=n=s.i18n.strings.runtimeUnknown}return{deviceEmulation:{mobile:s.i18n.strings.runtimeMobileEmulation,desktop:s.i18n.strings.runtimeDesktopEmulation}[e.formFactor]||s.i18n.strings.runtimeNoEmulation,cpuThrottling:t,networkThrottling:n,summary:r}}static filterRelevantLines(e,t,n){if(0===t.length)return e.slice(0,2*n+1);const r=new Set;return(t=t.sort(((e,t)=>(e.lineNumber||0)-(t.lineNumber||0)))).forEach((({lineNumber:e})=>{let t=e-n,o=e+n;for(;t<1;)t++,o++;r.has(t-3-1)&&(t-=3);for(let e=t;e<=o;e++){const t=e;r.add(t)}})),e.filter((e=>r.has(e.lineNumber)))}static isPluginCategory(e){return e.startsWith("lighthouse-plugin-")}static shouldDisplayAsFraction(e){return"timespan"===e||"snapshot"===e}static calculateCategoryFraction(e){let t=0,n=0,r=0,o=0;for(const i of e.auditRefs){const e=s.showAsPassed(i.result);"hidden"!==i.group&&"manual"!==i.result.scoreDisplayMode&&"notApplicable"!==i.result.scoreDisplayMode&&("informative"!==i.result.scoreDisplayMode?(++t,o+=i.weight,e&&n++):e||++r)}return{numPassed:n,numPassableAudits:t,numInformative:r,totalWeight:o}}}s.reportJson=null,s.getUniqueSuffix=(()=>{let e=0;return function(){return e++}})(),s.UIStrings={varianceDisclaimer:"Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.",calculatorLink:"See calculator.",showRelevantAudits:"Show audits relevant to:",opportunityResourceColumnLabel:"Opportunity",opportunitySavingsColumnLabel:"Estimated Savings",errorMissingAuditInfo:"Report error: no audit information",errorLabel:"Error!",warningHeader:"Warnings: ",warningAuditsGroupTitle:"Passed audits but with warnings",passedAuditsGroupTitle:"Passed audits",notApplicableAuditsGroupTitle:"Not applicable",manualAuditsGroupTitle:"Additional items to manually check",toplevelWarningsMessage:"There were issues affecting this run of Lighthouse:",crcInitialNavigation:"Initial Navigation",crcLongestDurationLabel:"Maximum critical path latency:",snippetExpandButtonLabel:"Expand snippet",snippetCollapseButtonLabel:"Collapse snippet",lsPerformanceCategoryDescription:"[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",labDataTitle:"Lab Data",thirdPartyResourcesLabel:"Show 3rd-party resources",viewTreemapLabel:"View Treemap",dropdownPrintSummary:"Print Summary",dropdownPrintExpanded:"Print Expanded",dropdownCopyJSON:"Copy JSON",dropdownSaveHTML:"Save as HTML",dropdownSaveJSON:"Save as JSON",dropdownViewer:"Open in Viewer",dropdownSaveGist:"Save as Gist",dropdownDarkTheme:"Toggle Dark Theme",runtimeSettingsDevice:"Device",runtimeSettingsNetworkThrottling:"Network throttling",runtimeSettingsCPUThrottling:"CPU throttling",runtimeSettingsUANetwork:"User agent (network)",runtimeSettingsBenchmark:"CPU/Memory Power",runtimeSettingsAxeVersion:"Axe version",footerIssue:"File an issue",runtimeNoEmulation:"No emulation",runtimeMobileEmulation:"Emulated Moto G4",runtimeDesktopEmulation:"Emulated Desktop",runtimeUnknown:"Unknown",runtimeSingleLoad:"Single page load",runtimeAnalysisWindow:"Initial page load",runtimeSingleLoadTooltip:"This data is taken from a single page load, as opposed to field data summarizing many sessions.",throttlingProvided:"Provided by environment",show:"Show",hide:"Hide",expandView:"Expand view",collapseView:"Collapse view",runtimeSlow4g:"Slow 4G throttling",runtimeCustom:"Custom throttling"};\n/**\n   * @license\n   * Copyright 2017 The Lighthouse Authors. All Rights Reserved.\n   *\n   * Licensed under the Apache License, Version 2.0 (the "License");\n   * you may not use this file except in compliance with the License.\n   * You may obtain a copy of the License at\n   *\n   *      http://www.apache.org/licenses/LICENSE-2.0\n   *\n   * Unless required by applicable law or agreed to in writing, software\n   * distributed under the License is distributed on an "AS-IS" BASIS,\n   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   * See the License for the specific language governing permissions and\n   * limitations under the License.\n   */\nclass c{constructor(e,t){this._document=e,this._lighthouseChannel="unknown",this._componentCache=new Map,this.rootEl=t}createElement(e,t){const n=this._document.createElement(e);if(t)for(const e of t.split(/\\s+/))e&&n.classList.add(e);return n}createElementNS(e,t,n){const r=this._document.createElementNS(e,t);if(n)for(const e of n.split(/\\s+/))e&&r.classList.add(e);return r}createFragment(){return this._document.createDocumentFragment()}createTextNode(e){return this._document.createTextNode(e)}createChildOf(e,t,n){const r=this.createElement(t,n);return e.appendChild(r),r}createComponent(e){let t=this._componentCache.get(e);if(t){const e=t.cloneNode(!0);return this.findAll("style",e).forEach((e=>e.remove())),e}return t=function(e,t){switch(t){case"3pFilter":return function(e){const t=e.createFragment(),n=e.createElement("style");n.append("\\n    .lh-3p-filter {\\n      color: var(--color-gray-600);\\n      float: right;\\n      padding: 6px var(--stackpack-padding-horizontal);\\n    }\\n    .lh-3p-filter-label, .lh-3p-filter-input {\\n      vertical-align: middle;\\n      user-select: none;\\n    }\\n    .lh-3p-filter-input:disabled + .lh-3p-ui-string {\\n      text-decoration: line-through;\\n    }\\n  "),t.append(n);const r=e.createElement("div","lh-3p-filter"),o=e.createElement("label","lh-3p-filter-label"),i=e.createElement("input","lh-3p-filter-input");i.setAttribute("type","checkbox"),i.setAttribute("checked","");const a=e.createElement("span","lh-3p-ui-string");a.append("Show 3rd party resources");const l=e.createElement("span","lh-3p-filter-count");return o.append(" ",i," ",a," (",l,") "),r.append(" ",o," "),t.append(r),t}(e);case"audit":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-audit"),r=e.createElement("details","lh-expandable-details"),o=e.createElement("summary"),i=e.createElement("div","lh-audit__header lh-expandable-details__summary"),a=e.createElement("span","lh-audit__score-icon"),l=e.createElement("span","lh-audit__title-and-text"),s=e.createElement("span","lh-audit__title"),c=e.createElement("span","lh-audit__display-text");l.append(" ",s," ",c," ");const d=e.createElement("div","lh-chevron-container");i.append(" ",a," ",l," ",d," "),o.append(" ",i," ");const h=e.createElement("div","lh-audit__description"),p=e.createElement("div","lh-audit__stackpacks");return r.append(" ",o," ",h," ",p," "),n.append(" ",r," "),t.append(n),t}(e);case"categoryHeader":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-category-header"),r=e.createElement("div","lh-score__gauge");r.setAttribute("role","heading"),r.setAttribute("aria-level","2");const o=e.createElement("div","lh-category-header__description");return n.append(" ",r," ",o," "),t.append(n),t}(e);case"chevron":return function(e){const t=e.createFragment(),n=e.createElementNS("http://www.w3.org/2000/svg","svg","lh-chevron");n.setAttribute("viewBox","0 0 100 100");const r=e.createElementNS("http://www.w3.org/2000/svg","g","lh-chevron__lines"),o=e.createElementNS("http://www.w3.org/2000/svg","path","lh-chevron__line lh-chevron__line-left");o.setAttribute("d","M10 50h40");const i=e.createElementNS("http://www.w3.org/2000/svg","path","lh-chevron__line lh-chevron__line-right");return i.setAttribute("d","M90 50H50"),r.append(" ",o," ",i," "),n.append(" ",r," "),t.append(n),t}(e);case"clump":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-audit-group"),r=e.createElement("details","lh-clump"),o=e.createElement("summary"),i=e.createElement("div","lh-audit-group__summary"),a=e.createElement("div","lh-audit-group__header"),l=e.createElement("span","lh-audit-group__title"),s=e.createElement("span","lh-audit-group__itemcount");a.append(" ",l," ",s," "," "," ");const c=e.createElement("div","lh-clump-toggle"),d=e.createElement("span","lh-clump-toggletext--show"),h=e.createElement("span","lh-clump-toggletext--hide");return c.append(" ",d," ",h," "),i.append(" ",a," ",c," "),o.append(" ",i," "),r.append(" ",o," "),n.append(" "," ",r," "),t.append(n),t}(e);case"crc":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-crc-container"),r=e.createElement("style");r.append(\'\\n      .lh-crc .lh-tree-marker {\\n        width: 12px;\\n        height: 26px;\\n        display: block;\\n        float: left;\\n        background-position: top left;\\n      }\\n      .lh-crc .lh-horiz-down {\\n        background: url(\\\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>\\\');\\n      }\\n      .lh-crc .lh-right {\\n        background: url(\\\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\\\');\\n      }\\n      .lh-crc .lh-up-right {\\n        background: url(\\\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\\\');\\n      }\\n      .lh-crc .lh-vert-right {\\n        background: url(\\\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\\\');\\n      }\\n      .lh-crc .lh-vert {\\n        background: url(\\\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\\\');\\n      }\\n      .lh-crc .lh-crc-tree {\\n        font-size: 14px;\\n        width: 100%;\\n        overflow-x: auto;\\n      }\\n      .lh-crc .lh-crc-node {\\n        height: 26px;\\n        line-height: 26px;\\n        white-space: nowrap;\\n      }\\n      .lh-crc .lh-crc-node__tree-value {\\n        margin-left: 10px;\\n      }\\n      .lh-crc .lh-crc-node__tree-value div {\\n        display: inline;\\n      }\\n      .lh-crc .lh-crc-node__chain-duration {\\n        font-weight: 700;\\n      }\\n      .lh-crc .lh-crc-initial-nav {\\n        color: #595959;\\n        font-style: italic;\\n      }\\n      .lh-crc__summary-value {\\n        margin-bottom: 10px;\\n      }\\n    \');const o=e.createElement("div"),i=e.createElement("div","lh-crc__summary-value"),a=e.createElement("span","lh-crc__longest_duration_label"),l=e.createElement("b","lh-crc__longest_duration");i.append(" ",a," ",l," "),o.append(" ",i," ");const s=e.createElement("div","lh-crc"),c=e.createElement("div","lh-crc-initial-nav");return s.append(" ",c," "," "),n.append(" ",r," ",o," ",s," "),t.append(n),t}(e);case"crcChain":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-crc-node"),r=e.createElement("span","lh-crc-node__tree-marker"),o=e.createElement("span","lh-crc-node__tree-value");return n.append(" ",r," ",o," "),t.append(n),t}(e);case"elementScreenshot":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-element-screenshot"),r=e.createElement("div","lh-element-screenshot__content"),o=e.createElement("div","lh-element-screenshot__mask"),i=e.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("height","0"),i.setAttribute("width","0");const a=e.createElementNS("http://www.w3.org/2000/svg","defs"),l=e.createElementNS("http://www.w3.org/2000/svg","clipPath");l.setAttribute("clipPathUnits","objectBoundingBox"),a.append(" ",l," "," "),i.append(" ",a," "),o.append(" ",i," ");const s=e.createElement("div","lh-element-screenshot__image"),c=e.createElement("div","lh-element-screenshot__element-marker");return r.append(" ",o," ",s," ",c," "),n.append(" ",r," "),t.append(n),t}(e);case"footer":return function(e){const t=e.createFragment(),n=e.createElement("style");n.append("\\n    .lh-footer {\\n      padding: var(--footer-padding-vertical) calc(var(--default-padding) * 2);\\n      max-width: var(--report-content-width);\\n      margin: 0 auto;\\n    }\\n    .lh-footer .lh-generated {\\n      text-align: center;\\n    }\\n  "),t.append(n);const r=e.createElement("footer","lh-footer"),o=e.createElement("ul","lh-meta__items");o.append(" ");const i=e.createElement("div","lh-generated"),a=e.createElement("b");a.append("Lighthouse");const l=e.createElement("span","lh-footer__version"),s=e.createElement("a","lh-footer__version_issue");return s.setAttribute("href","https://github.com/GoogleChrome/Lighthouse/issues"),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),s.append("File an issue"),i.append(" "," Generated by ",a," ",l," | ",s," "),r.append(" ",o," ",i," "),t.append(r),t}(e);case"fraction":return function(e){const t=e.createFragment(),n=e.createElement("a","lh-fraction__wrapper"),r=e.createElement("div","lh-fraction__content-wrapper"),o=e.createElement("div","lh-fraction__content"),i=e.createElement("div","lh-fraction__background");o.append(" ",i," "),r.append(" ",o," ");const a=e.createElement("div","lh-fraction__label");return n.append(" ",r," ",a," "),t.append(n),t}(e);case"gauge":return function(e){const t=e.createFragment(),n=e.createElement("a","lh-gauge__wrapper"),r=e.createElement("div","lh-gauge__svg-wrapper"),o=e.createElementNS("http://www.w3.org/2000/svg","svg","lh-gauge");o.setAttribute("viewBox","0 0 120 120");const i=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-gauge-base");i.setAttribute("r","56"),i.setAttribute("cx","60"),i.setAttribute("cy","60"),i.setAttribute("stroke-width","8");const a=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-gauge-arc");a.setAttribute("r","56"),a.setAttribute("cx","60"),a.setAttribute("cy","60"),a.setAttribute("stroke-width","8"),o.append(" ",i," ",a," "),r.append(" ",o," ");const l=e.createElement("div","lh-gauge__percentage"),s=e.createElement("div","lh-gauge__label");return n.append(" "," ",r," ",l," "," ",s," "),t.append(n),t}(e);case"gaugePwa":return function(e){const t=e.createFragment(),n=e.createElement("style");n.append("\\n    .lh-gauge--pwa .lh-gauge--pwa__component {\\n      display: none;\\n    }\\n    .lh-gauge--pwa__wrapper:not(.lh-badged--all) .lh-gauge--pwa__logo > path {\\n      /* Gray logo unless everything is passing. */\\n      fill: #B0B0B0;\\n    }\\n\\n    .lh-gauge--pwa__disc {\\n      fill: var(--color-gray-200);\\n    }\\n\\n    .lh-gauge--pwa__logo--primary-color {\\n      fill: #304FFE;\\n    }\\n\\n    .lh-gauge--pwa__logo--secondary-color {\\n      fill: #3D3D3D;\\n    }\\n    .lh-dark .lh-gauge--pwa__logo--secondary-color {\\n      fill: #D8B6B6;\\n    }\\n\\n    /* No passing groups. */\\n    .lh-gauge--pwa__wrapper:not([class*=\'lh-badged--\']) .lh-gauge--pwa__na-line {\\n      display: inline;\\n    }\\n    /* Just optimized. Same n/a line as no passing groups. */\\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-optimized:not(.lh-badged--pwa-installable) .lh-gauge--pwa__na-line {\\n      display: inline;\\n    }\\n\\n    /* Just installable. */\\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-installable .lh-gauge--pwa__installable-badge {\\n      display: inline;\\n    }\\n\\n    /* All passing groups. */\\n    .lh-gauge--pwa__wrapper.lh-badged--all .lh-gauge--pwa__check-circle {\\n      display: inline;\\n    }\\n  "),t.append(n);const r=e.createElement("a","lh-gauge__wrapper lh-gauge--pwa__wrapper"),o=e.createElementNS("http://www.w3.org/2000/svg","svg","lh-gauge lh-gauge--pwa");o.setAttribute("viewBox","0 0 60 60");const i=e.createElementNS("http://www.w3.org/2000/svg","defs"),a=e.createElementNS("http://www.w3.org/2000/svg","linearGradient");a.setAttribute("id","lh-gauge--pwa__check-circle__gradient"),a.setAttribute("x1","50%"),a.setAttribute("y1","0%"),a.setAttribute("x2","50%"),a.setAttribute("y2","100%");const l=e.createElementNS("http://www.w3.org/2000/svg","stop");l.setAttribute("stop-color","#00C852"),l.setAttribute("offset","0%");const s=e.createElementNS("http://www.w3.org/2000/svg","stop");s.setAttribute("stop-color","#009688"),s.setAttribute("offset","100%"),a.append(" ",l," ",s," ");const c=e.createElementNS("http://www.w3.org/2000/svg","linearGradient");c.setAttribute("id","lh-gauge--pwa__installable__shadow-gradient"),c.setAttribute("x1","76.056%"),c.setAttribute("x2","24.111%"),c.setAttribute("y1","82.995%"),c.setAttribute("y2","24.735%");const d=e.createElementNS("http://www.w3.org/2000/svg","stop");d.setAttribute("stop-color","#A5D6A7"),d.setAttribute("offset","0%");const h=e.createElementNS("http://www.w3.org/2000/svg","stop");h.setAttribute("stop-color","#80CBC4"),h.setAttribute("offset","100%"),c.append(" ",d," ",h," ");const p=e.createElementNS("http://www.w3.org/2000/svg","g");p.setAttribute("id","lh-gauge--pwa__installable-badge");const u=e.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("fill","#FFFFFF"),u.setAttribute("cx","10"),u.setAttribute("cy","10"),u.setAttribute("r","10");const g=e.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("fill","#009688"),g.setAttribute("d","M10 4.167A5.835 5.835 0 0 0 4.167 10 5.835 5.835 0 0 0 10 15.833 5.835 5.835 0 0 0 15.833 10 5.835 5.835 0 0 0 10 4.167zm2.917 6.416h-2.334v2.334H9.417v-2.334H7.083V9.417h2.334V7.083h1.166v2.334h2.334v1.166z"),p.append(" ",u," ",g," "),i.append(" ",a," ",c," ",p," ");const m=e.createElementNS("http://www.w3.org/2000/svg","g");m.setAttribute("stroke","none"),m.setAttribute("fill-rule","nonzero");const f=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-gauge--pwa__disc");f.setAttribute("cx","30"),f.setAttribute("cy","30"),f.setAttribute("r","30");const v=e.createElementNS("http://www.w3.org/2000/svg","g","lh-gauge--pwa__logo"),b=e.createElementNS("http://www.w3.org/2000/svg","path","lh-gauge--pwa__logo--secondary-color");b.setAttribute("d","M35.66 19.39l.7-1.75h2L37.4 15 38.6 12l3.4 9h-2.51l-.58-1.61z");const _=e.createElementNS("http://www.w3.org/2000/svg","path","lh-gauge--pwa__logo--primary-color");_.setAttribute("d","M33.52 21l3.65-9h-2.42l-2.5 5.82L30.5 12h-1.86l-1.9 5.82-1.35-2.65-1.21 3.72L25.4 21h2.38l1.72-5.2 1.64 5.2z");const w=e.createElementNS("http://www.w3.org/2000/svg","path","lh-gauge--pwa__logo--secondary-color");w.setAttribute("fill-rule","nonzero"),w.setAttribute("d","M20.3 17.91h1.48c.45 0 .85-.05 1.2-.15l.39-1.18 1.07-3.3a2.64 2.64 0 0 0-.28-.37c-.55-.6-1.36-.91-2.42-.91H18v9h2.3V17.9zm1.96-3.84c.22.22.33.5.33.87 0 .36-.1.65-.29.87-.2.23-.59.35-1.15.35h-.86v-2.41h.87c.52 0 .89.1 1.1.32z"),v.append(" ",b," ",_," ",w," ");const y=e.createElementNS("http://www.w3.org/2000/svg","rect","lh-gauge--pwa__component lh-gauge--pwa__na-line");y.setAttribute("fill","#FFFFFF"),y.setAttribute("x","20"),y.setAttribute("y","32"),y.setAttribute("width","20"),y.setAttribute("height","4"),y.setAttribute("rx","2");const x=e.createElementNS("http://www.w3.org/2000/svg","g","lh-gauge--pwa__component lh-gauge--pwa__installable-badge");x.setAttribute("transform","translate(20, 29)");const k=e.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("fill","url(#lh-gauge--pwa__installable__shadow-gradient)"),k.setAttribute("d","M33.629 19.487c-4.272 5.453-10.391 9.39-17.415 10.869L3 17.142 17.142 3 33.63 19.487z");const E=e.createElementNS("http://www.w3.org/2000/svg","use");E.setAttribute("href","#lh-gauge--pwa__installable-badge"),x.append(" ",k," ",E," ");const A=e.createElementNS("http://www.w3.org/2000/svg","g","lh-gauge--pwa__component lh-gauge--pwa__check-circle");A.setAttribute("transform","translate(18, 28)");const C=e.createElementNS("http://www.w3.org/2000/svg","circle");C.setAttribute("fill","#FFFFFF"),C.setAttribute("cx","12"),C.setAttribute("cy","12"),C.setAttribute("r","12");const z=e.createElementNS("http://www.w3.org/2000/svg","path");z.setAttribute("fill","url(#lh-gauge--pwa__check-circle__gradient)"),z.setAttribute("d","M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"),A.append(" ",C," ",z," "),m.append(" "," ",f," ",v," "," ",y," "," ",x," "," ",A," "),o.append(" ",i," ",m," ");const S=e.createElement("div","lh-gauge__label");return r.append(" ",o," ",S," "),t.append(r),t}(e);case"heading":return function(e){const t=e.createFragment(),n=e.createElement("style");n.append("\\n    /* CSS Fireworks. Originally by Eddie Lin\\n       https://codepen.io/paulirish/pen/yEVMbP\\n    */\\n    .lh-pyro {\\n      display: none;\\n      z-index: 1;\\n      pointer-events: none;\\n    }\\n    .lh-score100 .lh-pyro {\\n      display: block;\\n    }\\n    .lh-score100 .lh-lighthouse stop:first-child {\\n      stop-color: hsla(200, 12%, 95%, 0);\\n    }\\n    .lh-score100 .lh-lighthouse stop:last-child {\\n      stop-color: hsla(65, 81%, 76%, 1);\\n    }\\n\\n    .lh-pyro > .lh-pyro-before, .lh-pyro > .lh-pyro-after {\\n      position: absolute;\\n      width: 5px;\\n      height: 5px;\\n      border-radius: 2.5px;\\n      box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\\n      animation: 1s bang ease-out infinite backwards,  1s gravity ease-in infinite backwards,  5s position linear infinite backwards;\\n      animation-delay: 1s, 1s, 1s;\\n    }\\n\\n    .lh-pyro > .lh-pyro-after {\\n      animation-delay: 2.25s, 2.25s, 2.25s;\\n      animation-duration: 1.25s, 1.25s, 6.25s;\\n    }\\n    .lh-fireworks-paused .lh-pyro > div {\\n      animation-play-state: paused;\\n    }\\n\\n    @keyframes bang {\\n      to {\\n        box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47;\\n      }\\n    }\\n    @keyframes gravity {\\n      to {\\n        transform: translateY(80px);\\n        opacity: 0;\\n      }\\n    }\\n    @keyframes position {\\n      0%, 19.9% {\\n        margin-top: 4%;\\n        margin-left: 47%;\\n      }\\n      20%, 39.9% {\\n        margin-top: 7%;\\n        margin-left: 30%;\\n      }\\n      40%, 59.9% {\\n        margin-top: 6%;\\n        margin-left: 70%;\\n      }\\n      60%, 79.9% {\\n        margin-top: 3%;\\n        margin-left: 20%;\\n      }\\n      80%, 99.9% {\\n        margin-top: 3%;\\n        margin-left: 80%;\\n      }\\n    }\\n  "),t.append(n);const r=e.createElement("div","lh-header-container"),o=e.createElement("div","lh-scores-wrapper-placeholder");return r.append(" ",o," "),t.append(r),t}(e);case"metric":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-metric"),r=e.createElement("div","lh-metric__innerwrap"),o=e.createElement("div","lh-metric__icon"),i=e.createElement("span","lh-metric__title"),a=e.createElement("div","lh-metric__value"),l=e.createElement("div","lh-metric__description");return r.append(" ",o," ",i," ",a," ",l," "),n.append(" ",r," "),t.append(n),t}(e);case"opportunity":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-audit lh-audit--load-opportunity"),r=e.createElement("details","lh-expandable-details"),o=e.createElement("summary"),i=e.createElement("div","lh-audit__header"),a=e.createElement("div","lh-load-opportunity__cols"),l=e.createElement("div","lh-load-opportunity__col lh-load-opportunity__col--one"),s=e.createElement("span","lh-audit__score-icon"),c=e.createElement("div","lh-audit__title");l.append(" ",s," ",c," ");const d=e.createElement("div","lh-load-opportunity__col lh-load-opportunity__col--two"),h=e.createElement("div","lh-load-opportunity__sparkline"),p=e.createElement("div","lh-sparkline"),u=e.createElement("div","lh-sparkline__bar");p.append(u),h.append(" ",p," ");const g=e.createElement("div","lh-audit__display-text"),m=e.createElement("div","lh-chevron-container");d.append(" ",h," ",g," ",m," "),a.append(" ",l," ",d," "),i.append(" ",a," "),o.append(" ",i," ");const f=e.createElement("div","lh-audit__description"),v=e.createElement("div","lh-audit__stackpacks");return r.append(" ",o," ",f," ",v," "),n.append(" ",r," "),t.append(n),t}(e);case"opportunityHeader":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-load-opportunity__header lh-load-opportunity__cols"),r=e.createElement("div","lh-load-opportunity__col lh-load-opportunity__col--one"),o=e.createElement("div","lh-load-opportunity__col lh-load-opportunity__col--two");return n.append(" ",r," ",o," "),t.append(n),t}(e);case"scorescale":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-scorescale"),r=e.createElement("span","lh-scorescale-range lh-scorescale-range--fail");r.append("0鈥�49");const o=e.createElement("span","lh-scorescale-range lh-scorescale-range--average");o.append("50鈥�89");const i=e.createElement("span","lh-scorescale-range lh-scorescale-range--pass");return i.append("90鈥�100"),n.append(" ",r," ",o," ",i," "),t.append(n),t}(e);case"scoresWrapper":return function(e){const t=e.createFragment(),n=e.createElement("style");n.append("\\n    .lh-scores-container {\\n      display: flex;\\n      flex-direction: column;\\n      padding: var(--default-padding) 0;\\n      position: relative;\\n      width: 100%;\\n    }\\n\\n    .lh-sticky-header {\\n      --gauge-circle-size: var(--gauge-circle-size-sm);\\n      --plugin-badge-size: 16px;\\n      --plugin-icon-size: 75%;\\n      --gauge-wrapper-width: 60px;\\n      --gauge-percentage-font-size: 13px;\\n      position: fixed;\\n      left: 0;\\n      right: 0;\\n      top: var(--topbar-height);\\n      font-weight: 500;\\n      display: none;\\n      justify-content: center;\\n      background-color: var(--sticky-header-background-color);\\n      border-bottom: 1px solid var(--color-gray-200);\\n      padding-top: var(--score-container-padding);\\n      padding-bottom: 4px;\\n      z-index: 1;\\n      pointer-events: none;\\n    }\\n\\n    .lh-devtools .lh-sticky-header {\\n      /* The report within DevTools is placed in a container with overflow, which changes the placement of this header unless we change `position` to `sticky.` */\\n      position: sticky;\\n    }\\n\\n    .lh-sticky-header--visible {\\n      display: grid;\\n      grid-auto-flow: column;\\n      pointer-events: auto;\\n    }\\n\\n    /* Disable the gauge arc animation for the sticky header, so toggling display: none\\n       does not play the animation. */\\n    .lh-sticky-header .lh-gauge-arc {\\n      animation: none;\\n    }\\n\\n    .lh-sticky-header .lh-gauge__label {\\n      display: none;\\n    }\\n\\n    .lh-highlighter {\\n      width: var(--gauge-wrapper-width);\\n      height: 1px;\\n      background-color: var(--highlighter-background-color);\\n      /* Position at bottom of first gauge in sticky header. */\\n      position: absolute;\\n      grid-column: 1;\\n      bottom: -1px;\\n    }\\n\\n    .lh-gauge__wrapper:first-of-type {\\n      contain: none;\\n    }\\n  "),t.append(n);const r=e.createElement("div","lh-scores-wrapper"),o=e.createElement("div","lh-scores-container"),i=e.createElement("div","lh-pyro"),a=e.createElement("div","lh-before"),l=e.createElement("div","lh-after");return i.append(" ",a," ",l," "),o.append(" ",i," "),r.append(" ",o," "),t.append(r),t}(e);case"snippet":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-snippet"),r=e.createElement("style");return r.append(\'\\n          :root {\\n            --snippet-highlight-light: #fbf1f2;\\n            --snippet-highlight-dark: #ffd6d8;\\n          }\\n\\n         .lh-snippet__header {\\n          position: relative;\\n          overflow: hidden;\\n          padding: 10px;\\n          border-bottom: none;\\n          color: var(--snippet-color);\\n          background-color: var(--snippet-background-color);\\n          border: 1px solid var(--report-border-color-secondary);\\n        }\\n        .lh-snippet__title {\\n          font-weight: bold;\\n          float: left;\\n        }\\n        .lh-snippet__node {\\n          float: left;\\n          margin-left: 4px;\\n        }\\n        .lh-snippet__toggle-expand {\\n          padding: 1px 7px;\\n          margin-top: -1px;\\n          margin-right: -7px;\\n          float: right;\\n          background: transparent;\\n          border: none;\\n          cursor: pointer;\\n          font-size: 14px;\\n          color: #0c50c7;\\n        }\\n\\n        .lh-snippet__snippet {\\n          overflow: auto;\\n          border: 1px solid var(--report-border-color-secondary);\\n        }\\n        /* Container needed so that all children grow to the width of the scroll container */\\n        .lh-snippet__snippet-inner {\\n          display: inline-block;\\n          min-width: 100%;\\n        }\\n\\n        .lh-snippet:not(.lh-snippet--expanded) .lh-snippet__show-if-expanded {\\n          display: none;\\n        }\\n        .lh-snippet.lh-snippet--expanded .lh-snippet__show-if-collapsed {\\n          display: none;\\n        }\\n\\n        .lh-snippet__line {\\n          background: white;\\n          white-space: pre;\\n          display: flex;\\n        }\\n        .lh-snippet__line:not(.lh-snippet__line--message):first-child {\\n          padding-top: 4px;\\n        }\\n        .lh-snippet__line:not(.lh-snippet__line--message):last-child {\\n          padding-bottom: 4px;\\n        }\\n        .lh-snippet__line--content-highlighted {\\n          background: var(--snippet-highlight-dark);\\n        }\\n        .lh-snippet__line--message {\\n          background: var(--snippet-highlight-light);\\n        }\\n        .lh-snippet__line--message .lh-snippet__line-number {\\n          padding-top: 10px;\\n          padding-bottom: 10px;\\n        }\\n        .lh-snippet__line--message code {\\n          padding: 10px;\\n          padding-left: 5px;\\n          color: var(--color-fail);\\n          font-family: var(--report-font-family);\\n        }\\n        .lh-snippet__line--message code {\\n          white-space: normal;\\n        }\\n        .lh-snippet__line-icon {\\n          padding-top: 10px;\\n          display: none;\\n        }\\n        .lh-snippet__line--message .lh-snippet__line-icon {\\n          display: block;\\n        }\\n        .lh-snippet__line-icon:before {\\n          content: "";\\n          display: inline-block;\\n          vertical-align: middle;\\n          margin-right: 4px;\\n          width: var(--score-icon-size);\\n          height: var(--score-icon-size);\\n          background-image: var(--fail-icon-url);\\n        }\\n        .lh-snippet__line-number {\\n          flex-shrink: 0;\\n          width: 40px;\\n          text-align: right;\\n          font-family: monospace;\\n          padding-right: 5px;\\n          margin-right: 5px;\\n          color: var(--color-gray-600);\\n          user-select: none;\\n        }\\n    \'),n.append(" ",r," "),t.append(n),t}(e);case"snippetContent":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-snippet__snippet"),r=e.createElement("div","lh-snippet__snippet-inner");return n.append(" ",r," "),t.append(n),t}(e);case"snippetHeader":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-snippet__header"),r=e.createElement("div","lh-snippet__title"),o=e.createElement("div","lh-snippet__node"),i=e.createElement("button","lh-snippet__toggle-expand"),a=e.createElement("span","lh-snippet__btn-label-collapse lh-snippet__show-if-expanded"),l=e.createElement("span","lh-snippet__btn-label-expand lh-snippet__show-if-collapsed");return i.append(" ",a," ",l," "),n.append(" ",r," ",o," ",i," "),t.append(n),t}(e);case"snippetLine":return function(e){const t=e.createFragment(),n=e.createElement("div","lh-snippet__line"),r=e.createElement("div","lh-snippet__line-number"),o=e.createElement("div","lh-snippet__line-icon"),i=e.createElement("code");return n.append(" ",r," ",o," ",i," "),t.append(n),t}(e);case"styles":return function(e){const t=e.createFragment(),n=e.createElement("style");return n.append(\'/**\\n * @license\\n * Copyright 2017 The Lighthouse Authors. All Rights Reserved.\\n *\\n * Licensed under the Apache License, Version 2.0 (the "License");\\n * you may not use this file except in compliance with the License.\\n * You may obtain a copy of the License at\\n *\\n *      http://www.apache.org/licenses/LICENSE-2.0\\n *\\n * Unless required by applicable law or agreed to in writing, software\\n * distributed under the License is distributed on an "AS-IS" BASIS,\\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n * See the License for the specific language governing permissions and\\n * limitations under the License.\\n */\\n\\n/*\\n  Naming convention:\\n\\n  If a variable is used for a specific component: --{component}-{property name}-{modifier}\\n\\n  Both {component} and {property name} should be kebab-case. If the target is the entire page,\\n  use \\\'report\\\' for the component. The property name should not be abbreviated. Use the\\n  property name the variable is intended for - if it\\\'s used for multiple, a common descriptor\\n  is fine (ex: \\\'size\\\' for a variable applied to \\\'width\\\' and \\\'height\\\'). If a variable is shared\\n  across multiple components, either create more variables or just drop the "{component}-"\\n  part of the name. Append any modifiers at the end (ex: \\\'big\\\', \\\'dark\\\').\\n\\n  For colors: --color-{hue}-{intensity}\\n\\n  {intensity} is the Material Design tag - 700, A700, etc.\\n*/\\n.lh-vars {\\n  /* Palette using Material Design Colors\\n   * https://www.materialui.co/colors */\\n  --color-amber-50: #FFF8E1;\\n  --color-blue-200: #90CAF9;\\n  --color-blue-900: #0D47A1;\\n  --color-blue-A700: #2962FF;\\n  --color-blue-primary: #06f;\\n  --color-cyan-500: #00BCD4;\\n  --color-gray-100: #F5F5F5;\\n  --color-gray-300: #CFCFCF;\\n  --color-gray-200: #E0E0E0;\\n  --color-gray-400: #BDBDBD;\\n  --color-gray-50: #FAFAFA;\\n  --color-gray-500: #9E9E9E;\\n  --color-gray-600: #757575;\\n  --color-gray-700: #616161;\\n  --color-gray-800: #424242;\\n  --color-gray-900: #212121;\\n  --color-gray: #000000;\\n  --color-green-700: #080;\\n  --color-green: #0c6;\\n  --color-lime-400: #D3E156;\\n  --color-orange-50: #FFF3E0;\\n  --color-orange-700: #C33300;\\n  --color-orange: #fa3;\\n  --color-red-700: #c00;\\n  --color-red: #f33;\\n  --color-teal-600: #00897B;\\n  --color-white: #FFFFFF;\\n\\n  /* Context-specific colors */\\n  --color-average-secondary: var(--color-orange-700);\\n  --color-average: var(--color-orange);\\n  --color-fail-secondary: var(--color-red-700);\\n  --color-fail: var(--color-red);\\n  --color-hover: var(--color-gray-50);\\n  --color-informative: var(--color-blue-900);\\n  --color-pass-secondary: var(--color-green-700);\\n  --color-pass: var(--color-green);\\n  --color-not-applicable: var(--color-gray-600);\\n\\n  /* Component variables */\\n  --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));\\n  --audit-explanation-line-height: 16px;\\n  --audit-group-margin-bottom: calc(var(--default-padding) * 6);\\n  --audit-group-padding-vertical: 8px;\\n  --audit-margin-horizontal: 5px;\\n  --audit-padding-vertical: 8px;\\n  --category-padding: calc(var(--default-padding) * 6) calc(var(--default-padding) * 4) calc(var(--default-padding) * 4);\\n  --chevron-line-stroke: var(--color-gray-600);\\n  --chevron-size: 12px;\\n  --default-padding: 8px;\\n  --env-item-background-color: var(--color-gray-100);\\n  --env-item-font-size: 28px;\\n  --env-item-line-height: 36px;\\n  --env-item-padding: 10px 0px;\\n  --env-name-min-width: 220px;\\n  --footer-padding-vertical: 16px;\\n  --gauge-circle-size-big: 96px;\\n  --gauge-circle-size: 48px;\\n  --gauge-circle-size-sm: 32px;\\n  --gauge-label-font-size-big: 18px;\\n  --gauge-label-font-size: var(--report-font-size-secondary);\\n  --gauge-label-line-height-big: 24px;\\n  --gauge-label-line-height: var(--report-line-height-secondary);\\n  --gauge-percentage-font-size-big: 38px;\\n  --gauge-percentage-font-size: var(--report-font-size-secondary);\\n  --gauge-wrapper-width: 120px;\\n  --header-line-height: 24px;\\n  --highlighter-background-color: var(--report-text-color);\\n  --icon-square-size: calc(var(--score-icon-size) * 0.88);\\n  --image-preview-size: 48px;\\n  --link-color: var(--color-blue-primary);\\n  --locale-selector-background-color: var(--color-white);\\n  --metric-toggle-lines-fill: #7F7F7F;\\n  --metric-value-font-size: calc(var(--report-font-size) * 1.8);\\n  --metrics-toggle-background-color: var(--color-gray-200);\\n  --plugin-badge-background-color: var(--color-white);\\n  --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);\\n  --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);\\n  --plugin-icon-size: 65%;\\n  --pwa-icon-margin: 0 var(--default-padding);\\n  --pwa-icon-size: var(--topbar-logo-size);\\n  --report-background-color: #fff;\\n  --report-border-color-secondary: #ebebeb;\\n  --report-font-family-monospace: \\\'Roboto Mono\\\', \\\'Menlo\\\', \\\'dejavu sans mono\\\', \\\'Consolas\\\', \\\'Lucida Console\\\', monospace;\\n  --report-font-family: Roboto, Helvetica, Arial, sans-serif;\\n  --report-font-size: 14px;\\n  --report-font-size-secondary: 12px;\\n  --report-icon-size: var(--score-icon-background-size);\\n  --report-line-height: 24px;\\n  --report-line-height-secondary: 20px;\\n  --report-min-width: 360px;\\n  --report-monospace-font-size: calc(var(--report-font-size) * 0.85);\\n  --report-text-color-secondary: var(--color-gray-800);\\n  --report-text-color: var(--color-gray-900);\\n  --report-content-width: calc(60 * var(--report-font-size)); /* defaults to 840px */\\n  --score-container-padding: 8px;\\n  --score-icon-background-size: 24px;\\n  --score-icon-margin-left: 6px;\\n  --score-icon-margin-right: 14px;\\n  --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);\\n  --score-icon-size: 12px;\\n  --score-icon-size-big: 16px;\\n  --screenshot-overlay-background: rgba(0, 0, 0, 0.3);\\n  --section-padding-vertical: calc(var(--default-padding) * 6);\\n  --snippet-background-color: var(--color-gray-50);\\n  --snippet-color: #0938C2;\\n  --sparkline-height: 5px;\\n  --stackpack-padding-horizontal: 10px;\\n  --sticky-header-background-color: var(--report-background-color);\\n  --table-higlight-background-color: hsla(210, 17%, 77%, 0.1);\\n  --tools-icon-color: var(--color-gray-600);\\n  --topbar-background-color: var(--color-white);\\n  --topbar-height: 32px;\\n  --topbar-logo-size: 24px;\\n  --topbar-padding: 0 8px;\\n  --toplevel-warning-background-color: hsla(30, 100%, 75%, 10%);\\n  --toplevel-warning-message-text-color: var(--color-average-secondary);\\n  --toplevel-warning-padding: 18px;\\n  --toplevel-warning-text-color: var(--report-text-color);\\n\\n  /* SVGs */\\n  --plugin-icon-url-dark: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>\\\');\\n  --plugin-icon-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23757575"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>\\\');\\n\\n  --pass-icon-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>check</title><path fill="%23178239" d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/></svg>\\\');\\n  --average-icon-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>info</title><path fill="%23E67700" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z"/></svg>\\\');\\n  --fail-icon-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>warn</title><path fill="%23C7221F" d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/></svg>\\\');\\n\\n  --pwa-installable-gray-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23DAE0E3" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>\\\');\\n  --pwa-optimized-gray-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%23DAE0E3" width="24" height="24" rx="12"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/><path d="M5 5h14v14H5z"/></g></svg>\\\');\\n\\n  --pwa-installable-gray-url-dark: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23424242" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>\\\');\\n  --pwa-optimized-gray-url-dark: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%23424242" width="24" height="24" rx="12"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/><path d="M5 5h14v14H5z"/></g></svg>\\\');\\n\\n  --pwa-installable-color-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><circle fill="%230CCE6B" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>\\\');\\n  --pwa-optimized-color-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%230CCE6B" width="24" height="24" rx="12"/><path d="M5 5h14v14H5z"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/></g></svg>\\\');\\n\\n  --swap-locale-icon-url: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>\\\');\\n}\\n\\n@media not print {\\n  .lh-dark {\\n    /* Pallete */\\n    --color-gray-200: var(--color-gray-800);\\n    --color-gray-300: #616161;\\n    --color-gray-400: var(--color-gray-600);\\n    --color-gray-700: var(--color-gray-400);\\n    --color-gray-50: #757575;\\n    --color-gray-600: var(--color-gray-500);\\n    --color-green-700: var(--color-green);\\n    --color-orange-700: var(--color-orange);\\n    --color-red-700: var(--color-red);\\n    --color-teal-600: var(--color-cyan-500);\\n\\n    /* Context-specific colors */\\n    --color-hover: rgba(0, 0, 0, 0.2);\\n    --color-informative: var(--color-blue-200);\\n\\n    /* Component variables */\\n    --env-item-background-color: #393535;\\n    --link-color: var(--color-blue-200);\\n    --locale-selector-background-color: var(--color-gray-200);\\n    --plugin-badge-background-color: var(--color-gray-800);\\n    --report-background-color: var(--color-gray-900);\\n    --report-border-color-secondary: var(--color-gray-200);\\n    --report-text-color-secondary: var(--color-gray-400);\\n    --report-text-color: var(--color-gray-100);\\n    --snippet-color: var(--color-cyan-500);\\n    --topbar-background-color: var(--color-gray);\\n    --toplevel-warning-background-color: hsl(33deg 14% 18%);\\n    --toplevel-warning-message-text-color: var(--color-orange-700);\\n    --toplevel-warning-text-color: var(--color-gray-100);\\n\\n    /* SVGs */\\n    --plugin-icon-url: var(--plugin-icon-url-dark);\\n    --pwa-installable-gray-url: var(--pwa-installable-gray-url-dark);\\n    --pwa-optimized-gray-url: var(--pwa-optimized-gray-url-dark);\\n  }\\n}\\n\\n@media only screen and (max-width: 480px) {\\n  .lh-vars {\\n    --audit-group-margin-bottom: 20px;\\n    --category-padding: 12px;\\n    --env-name-min-width: 120px;\\n    --gauge-circle-size-big: 96px;\\n    --gauge-circle-size: 72px;\\n    --gauge-label-font-size-big: 22px;\\n    --gauge-label-font-size: 14px;\\n    --gauge-label-line-height-big: 26px;\\n    --gauge-label-line-height: 20px;\\n    --gauge-percentage-font-size-big: 34px;\\n    --gauge-percentage-font-size: 26px;\\n    --gauge-wrapper-width: 112px;\\n    --header-padding: 16px 0 16px 0;\\n    --image-preview-size: 24px;\\n    --plugin-icon-size: 75%;\\n    --pwa-icon-margin: 0 7px 0 -3px;\\n    --report-font-size: 14px;\\n    --report-line-height: 20px;\\n    --score-icon-margin-left: 2px;\\n    --score-icon-size: 10px;\\n    --topbar-height: 28px;\\n    --topbar-logo-size: 20px;\\n  }\\n\\n  /* Not enough space to adequately show the relative savings bars. */\\n  .lh-sparkline {\\n    display: none;\\n  }\\n}\\n\\n.lh-vars.lh-devtools {\\n  --audit-explanation-line-height: 14px;\\n  --audit-group-margin-bottom: 20px;\\n  --audit-group-padding-vertical: 12px;\\n  --audit-padding-vertical: 4px;\\n  --category-padding: 12px;\\n  --default-padding: 12px;\\n  --env-name-min-width: 120px;\\n  --footer-padding-vertical: 8px;\\n  --gauge-circle-size-big: 72px;\\n  --gauge-circle-size: 64px;\\n  --gauge-label-font-size-big: 22px;\\n  --gauge-label-font-size: 14px;\\n  --gauge-label-line-height-big: 26px;\\n  --gauge-label-line-height: 20px;\\n  --gauge-percentage-font-size-big: 34px;\\n  --gauge-percentage-font-size: 26px;\\n  --gauge-wrapper-width: 97px;\\n  --header-line-height: 20px;\\n  --header-padding: 16px 0 16px 0;\\n  --screenshot-overlay-background: transparent;\\n  --plugin-icon-size: 75%;\\n  --pwa-icon-margin: 0 7px 0 -3px;\\n  --report-font-family-monospace: \\\'Menlo\\\', \\\'dejavu sans mono\\\', \\\'Consolas\\\', \\\'Lucida Console\\\', monospace;\\n  --report-font-family: \\\'.SFNSDisplay-Regular\\\', \\\'Helvetica Neue\\\', \\\'Lucida Grande\\\', sans-serif;\\n  --report-font-size: 12px;\\n  --report-line-height: 20px;\\n  --score-icon-margin-left: 2px;\\n  --score-icon-size: 10px;\\n  --section-padding-vertical: 8px;\\n}\\n\\n.lh-devtools.lh-root {\\n  height: 100%;\\n}\\n.lh-devtools.lh-root img {\\n  /* Override devtools default \\\'min-width: 0\\\' so svg without size in a flexbox isn\\\'t collapsed. */\\n  min-width: auto;\\n}\\n.lh-devtools .lh-container {\\n  overflow-y: scroll;\\n  height: calc(100% - var(--topbar-height));\\n}\\n@media print {\\n  .lh-devtools .lh-container {\\n    overflow: unset;\\n  }\\n}\\n.lh-devtools .lh-sticky-header {\\n  /* This is normally the height of the topbar, but we want it to stick to the top of our scroll container .lh-container` */\\n  top: 0;\\n}\\n\\n@keyframes fadeIn {\\n  0% { opacity: 0;}\\n  100% { opacity: 0.6;}\\n}\\n\\n.lh-root *, .lh-root *::before, .lh-root *::after {\\n  box-sizing: border-box;\\n}\\n\\n.lh-root {\\n  font-family: var(--report-font-family);\\n  font-size: var(--report-font-size);\\n  margin: 0;\\n  line-height: var(--report-line-height);\\n  background: var(--report-background-color);\\n  color: var(--report-text-color);\\n}\\n\\n.lh-root :focus {\\n    outline: -webkit-focus-ring-color auto 3px;\\n}\\n.lh-root summary:focus {\\n    outline: none;\\n    box-shadow: 0 0 0 1px hsl(217, 89%, 61%);\\n}\\n\\n.lh-root [hidden] {\\n  display: none !important;\\n}\\n\\n.lh-root pre {\\n  margin: 0;\\n}\\n\\n.lh-root details > summary {\\n  cursor: pointer;\\n}\\n\\n.lh-hidden {\\n  display: none !important;\\n}\\n\\n.lh-container {\\n  /*\\n  Text wrapping in the report is so much FUN!\\n  We have a `word-break: break-word;` globally here to prevent a few common scenarios, namely\\n  long non-breakable text (usually URLs) found in:\\n    1. The footer\\n    2. .lh-node (outerHTML)\\n    3. .lh-code\\n\\n  With that sorted, the next challenge is appropriate column sizing and text wrapping inside our\\n  .lh-details tables. Even more fun.\\n    * We don\\\'t want table headers ("Potential Savings (ms)") to wrap or their column values, but\\n    we\\\'d be happy for the URL column to wrap if the URLs are particularly long.\\n    * We want the narrow columns to remain narrow, providing the most column width for URL\\n    * We don\\\'t want the table to extend past 100% width.\\n    * Long URLs in the URL column can wrap. Util.getURLDisplayName maxes them out at 64 characters,\\n      but they do not get any overflow:ellipsis treatment.\\n  */\\n  word-break: break-word;\\n}\\n\\n.lh-audit-group a,\\n.lh-category-header__description a,\\n.lh-audit__description a,\\n.lh-warnings a,\\n.lh-footer a,\\n.lh-table-column--link a {\\n  color: var(--link-color);\\n}\\n\\n.lh-audit__description, .lh-audit__stackpack {\\n  --inner-audit-padding-right: var(--stackpack-padding-horizontal);\\n  padding-left: var(--audit-description-padding-left);\\n  padding-right: var(--inner-audit-padding-right);\\n  padding-top: 8px;\\n  padding-bottom: 8px;\\n}\\n\\n.lh-details {\\n  margin-top: var(--default-padding);\\n  margin-bottom: var(--default-padding);\\n  margin-left: var(--audit-description-padding-left);\\n  /* whatever the .lh-details side margins are */\\n  width: 100%;\\n}\\n\\n.lh-audit__stackpack {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.lh-audit__stackpack__img {\\n  max-width: 30px;\\n  margin-right: var(--default-padding)\\n}\\n\\n/* Report header */\\n\\n.lh-report-icon {\\n  display: flex;\\n  align-items: center;\\n  padding: 10px 12px;\\n  cursor: pointer;\\n}\\n.lh-report-icon[disabled] {\\n  opacity: 0.3;\\n  pointer-events: none;\\n}\\n\\n.lh-report-icon::before {\\n  content: "";\\n  margin: 4px;\\n  background-repeat: no-repeat;\\n  width: var(--report-icon-size);\\n  height: var(--report-icon-size);\\n  opacity: 0.7;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n.lh-report-icon:hover::before {\\n  opacity: 1;\\n}\\n.lh-dark .lh-report-icon::before {\\n  filter: invert(1);\\n}\\n.lh-report-icon--print::before {\\n  background-image: url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>\\\');\\n}\\n.lh-report-icon--copy::before {\\n  background-image: url(\\\'data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>\\\');\\n}\\n.lh-report-icon--open::before {\\n  background-image: url(\\\'data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>\\\');\\n}\\n.lh-report-icon--download::before {\\n  background-image: url(\\\'data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\\\');\\n}\\n.lh-report-icon--dark::before {\\n  background-image:url(\\\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 100 125"><path d="M50 23.587c-16.27 0-22.799 12.574-22.799 21.417 0 12.917 10.117 22.451 12.436 32.471h20.726c2.32-10.02 12.436-19.554 12.436-32.471 0-8.843-6.528-21.417-22.799-21.417zM39.637 87.161c0 3.001 1.18 4.181 4.181 4.181h.426l.41 1.231C45.278 94.449 46.042 95 48.019 95h3.963c1.978 0 2.74-.551 3.365-2.427l.409-1.231h.427c3.002 0 4.18-1.18 4.18-4.181V80.91H39.637v6.251zM50 18.265c1.26 0 2.072-.814 2.072-2.073v-9.12C52.072 5.813 51.26 5 50 5c-1.259 0-2.072.813-2.072 2.073v9.12c0 1.259.813 2.072 2.072 2.072zM68.313 23.727c.994.774 2.135.634 2.91-.357l5.614-7.187c.776-.992.636-2.135-.356-2.909-.992-.776-2.135-.636-2.91.357l-5.613 7.186c-.778.993-.636 2.135.355 2.91zM91.157 36.373c-.306-1.222-1.291-1.815-2.513-1.51l-8.85 2.207c-1.222.305-1.814 1.29-1.51 2.512.305 1.223 1.291 1.814 2.513 1.51l8.849-2.206c1.223-.305 1.816-1.291 1.511-2.513zM86.757 60.48l-8.331-3.709c-1.15-.512-2.225-.099-2.736 1.052-.512 1.151-.1 2.224 1.051 2.737l8.33 3.707c1.15.514 2.225.101 2.7var(--report-monospace-font-size);\\n}\\n\\n/* 在显示文本前添加 em 破折号分隔符。但不是在机会中。*/\\n.lh-audit__display-text:not(:empty):before {\\n content: \\\'鈥擞\\';\\n margin-right: var(--audit-margin-水平);\\n}\\n.lh-audit-group.lh-audit-group--load-opportunities .lh-audit__display-text:not(:empty):before {\\n display: none;\ \n}\\n\\n/* 可扩展的详细信息（审核组、审核）*/\\n.lh-audit__header {\\n 显示：弹性；\\n 对齐项：居中；\\n 填充： var(--default-padding);\\n}\\n\\n.lh-audit--load-opportunity .lh-audit__header {\\n 显示：块;\\n}\\n\\n \\n.lh-metricfilter {\\n 显示：网格；\\n 对齐内容：结束；\\n 对齐项目：中心；\\n 网格自动流：列；\\n 间隙：4px ;\\n 颜色：var(--color-gray-700);\\n}\\n\\n.lh-metricfilter__radio {\\n 位置：绝对；\\n 左：lh-category--filtered .lh-audit-group .lh-audit-group__itemcount {\\n display: none;\\n}\\n\\n\\n.lh-audit__header:hover {\\n 背景-color: var(--color-hover);\\n}\\n\\n/* 我们想在摘要元素上隐藏浏览器\\\的默认箭头标记。诚然，这很复杂。*/\\n.lh-root details > summary {\\n /* Blink 89+ 和 Firefox 将在显示从（新）默认的 `list-item` 更改为阻止时隐藏箭头。https://chromestatus.com/feature/6730096436051968*/\\n display: block;\\n}\\n/* Safari 和 Blink <=88 需要使用 -webkit-details-marker 选择器 */\\n .lh-root details > summary::-webkit-details-marker {\\n display: none;\\n}\\n\\n/* Perf Metric */\\n\\n.lh-metrics-容器 {\\n display: grid;\\n grid-auto-rows: 1fr;\\n grid-template-columns: 1fr 1fr;\\n grid-column-gap: lh-metric__value {\\n font-size: var(--metric-value-font-size);\\n margin: calc(var(--default-padding) / 2) 0;\\n white-space ：无包装；/* 度量值和图标之间没有换行 */\\n grid-column-start: 2;\\n}\\n\\n\\n@media screen and (max-width: 535px) {\\ n .lh-metrics-container {\\n 显示：块；\\n }\\n\\n .lh-metric {\\n 边框底部：无 !important;\\n }\\n .lh -metric:nth-last-child(1) {\\n border-bottom: 1px solid var(--report-border-color-secondary) !important;\\n }\\n\\n /* 改变网格到 3 列用于窄视口。*/\\n .lh-metric__innerwrap {\\n /**\\n * 图标 -- 度量名称 -- 度量值\\n */\\n grid-template-columns: calc(var(--score -icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right)) 2fr 1fr;\\n }\\n .lh-metric__value {\\n自我辩护：结束；-webkit-focus-ring-color auto 3px;\\n}\\n\\n.lh-metrics-toggle__label {\\n 光标：指针；\\n 字体大小：var(--report-font- size-secondary);\\n line-height: var(--report-line-height-secondary);\\n color: var(--color-gray-700);\\n}\\n\\ n/* 向右推动度量描述切换按钮。*/\\n.lh-audit-group--metrics .lh-audit-group__header {\\n display: flex;\\n justify-content: space-between;\\n}\\n\\n. lh-metric__icon,\\n.lh-scorescale-range::before {\\n 内容: \\\'\\\';\\n 宽度: var(--score-icon-size);\\n高度：var(--score-icon-size);\\n 显示：inline-block;\\n 边距：var(--score-icon-margin);\\n}\\n\\n.lh -metric--pass .lh-metric__value {\\n color: var(--color-pass-secondary);\\n}\\n.lh-metric--pass .lh-metric__icon {\\n 边界-半径：100%;\\n 背景：var(--color-pass);\\n}\\n\\n.lh-metric--average 。1px solid var(--report-border-color-secondary);\\n}\\n\\n/* 仅将border-top应用于第一次审核。*/\\n.lh-audit {\\n border-top: 1px solid var(--report-border-color-secondary);\\n}\\n.lh-audit ~ .lh-audit {\ \n 边框顶部：无；\\n}\\n\\n\\n.lh-audit--error .lh-audit__display-text {\\n 颜色：var(--color-fail);\ \n}\\n\\n/* 审核组 */\\n\\n.lh-audit-group {\\n margin-bottom: var(--audit-group-margin-bottom);\\ n 位置：相对；\\n}\\n.lh-audit-group--metrics {\\n margin-bottom: calc(var(--audit-group-margin-bottom) / 2);\\n }\\n\\n.lh-audit-group__header::before {\\n /* 默认情况下，组不会\\\'得到图标 */\\n content: none;\\n width: var (--pwa-icon-size);\\n 高度：var(--pwa-icon-size);\\n 边距：var(--pwa-icon-margin);\\n 显示：inline-block ;\\n 垂直对齐：中间；\\n}\\n\\n/* 设置 " var(--plugin-icon-size);\\n 背景位置: 58% 50%;\\n 内容: "";\\n 位置: 绝对;\\n 右: -6px;\\n 底部: 0px;\\n display: block;\\n z-index: 100;\\n box-shadow: 0 0 4px rgba(0,0,0,.2);\\n 边框半径: 25% ;\\n}\\n.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\\n width: var(--plugin-badge-size-big);\\n高度：var(--plugin-badge-size-big);\\n}\\n\\n\\n@keyframes load-gauge {\\n from { stroke-dasharray: 0 352; }\\n}\\n\\n.lh-gauge__percentage {\\n 宽度：100%；\\n 高度：var(--gauge-circle-size)；\\n 位置：绝对值；\\n字体系列：var（--report-font-family-monospace）；\\n 字体大小：计算（var（--gauge-circle-size）* 0.34 + 1.3px）；\\n 行高： 0;\\n text-align: center;\\n top: calc(var(--score-container-padding) + var(--gauge-circle-size) / 2);\\n}\\n \\n.lh 类别。lh-gauge__percentage {\\n --gauge-circle-size: var(--gauge-circle-size-big);\\n --gauge-percentage-font-size: var(--gauge-percentage-font -size-big);\\n}\\n\\n.lh-gauge__wrapper,\\n.lh-fraction__wrapper {\\n 位置：相对；\\n 显示：弹性；\\n 对齐项：中心；\\n 弹性方向：列；\\n 文本装饰：无；\\n 填充：var(--score-container-padding)；\\n\\n --transition-length：1s； \\n\\n /* 包含动画期间的布局样式paint & layers*/\\n contains: content;\\n will-change: opacity; /* 仅用于图层提升 */\\n}\\n\\n.lh-gauge__label,\\n.lh-fraction__label {\\n font-size: var(--gauge-label-font-size );\\n font-weight: 500;\\n line-height: var(--gauge-label-line-height);\\n margin-top: 10px;\\n text-align: center;\ \n 颜色: var(--report-text-color);\\n 断字: keep-all; calc(var(--gauge-circle-size-sm) + var(--score-container-padding) * 2);\\n --topbar-plus-sticky-header: calc(var(--topbar- height) + var(--sticky-header-height));\\n scroll-margin-top: var(--topbar-plus-sticky-header);\\n\\n /* 更快的重新计算样式和布局的报告。https://web.dev/content-visibility/ */\\n content-visibility: auto;\\n contains-intrinsic-size: 1000px;\\n}\\n\\n.lh-category-wrapper {\\n 边框底部：1px 实心 var(--color-gray-200);\\n}\\n\\n.lh-category-wrapper:first-of-type {\\n 边框顶部: 1px 实心 var(--color-gray-200);\\n}\\n\\n.lh-category-header {\\n margin-bottom: var(--section-padding-vertical);\ \n}\\n\\n.lh-category-header .lh-score__gauge {\\n max-width: 400px;\\n width: auto;\\n margin: 0px auto;\\n}\\ n\\n.lh-category-header__finalscreenshot {\\n 显示：网格；\\n 网格模板：无 / 1fr 1px 1fr; \\n }\\n}\\n\\n\\n/* 964 适合幻灯片的最小宽度 */\\n@media 屏幕和 (max-width: 964px) {\\n .lh -report {\\n margin-left: 0;\\n width: 100%;\\n }\\n}\\n\\n@media print {\\n body {\\n -webkit-print -颜色调整：精确；/* 打印背景颜色 */\\n }\\n .lh-container {\\n display: block;\\n }\\n .lh-report {\\n margin-left: 0;\\n padding-top: 0;\\n }\\n .lh-categories {\\n margin-top: 0;\\n }\\n}\\n\\n.lh-table {\\n 边框-collapse: collapse;\\n /* 不能为表格分配填充，所以缩短宽度。*/\\n 宽度：calc(100% - var(--audit-description-padding-left) - var(--stackpack-padding-horizo​​ntal));\\n 边框：1px 实心 var(--report- border-color-secondary);\\n\\n}\\n\\n.lh-table thead th {\\n font-weight: normal;\\n color: var(--color-gray-600 ); \\n /* 请参阅 .lh-container 上的文本换行注释。*/\\n 分词：正常；\\n}\\n\\n.lh-row--even {\\n 背景色：var(--table-higlight-background-color);\ \n}\\n.lh-row--hidden {\\n display: none;\\n}\\n\\n.lh-table th,\\n.lh-table td {\\n padding : var(--default-padding);\\n}\\n\\n.lh-table tr {\\n vertical-align: middle;\\n}\\n\\n/* 看起来没必要，但主要是为了保持 <th> 的左对齐 */\\n.lh-table-column--text,\\n.lh-table-column--source-location,\\n.lh-table- column--url,\\n/* .lh-table-column--thumbnail, */\\n/* .lh-table-column--empty,*/\\n.lh-table-column--代码，\\n.lh-table-column--node {\\n text-align: left;\\n}\\n\\n.lh-table-column--code {\\n min-width : 100px;\\n}\\n\\n.lh-table-column--bytes,\\n.lh-table-column--timespanMs,\\n.lh-table-column--ms,\ \n.lh-table-column--numeric {\\n text-align: right; 摘要 {\\n 边框底部宽度：0;\\n}\\n\\n\\n\\ndetails .lh-clump-toggletext--hide,\\ndetails[open] .lh-clump- toggletext--显示 { 显示：无；}\\ndetails[open] .lh-clump-toggletext--hide { display: block;}\\n\\n\\n/* 工具提示 */\\n.lh-tooltip-boundary {\\n 位置：相对；\\n}\\n\\n.lh-tooltip {\\n 位置：绝对；\\n 显示：无；/* 不要在不需要时保留这些层 */\\n opacity: 0;\\n background: #ffffff;\\n white-space: pre-line; /* 在文本中渲染换行符 */\\n min-width: 246px;\\n max-width: 275px;\\n padding: 15px;\\n border-radius: 5px;\\n text-align: initial;\\n line-height: 1.4;\\n}\\n/* 缩小工具提示，使其在窄视口的左边缘不被截断\\n 45vw 被选择为 ~= 度量左列的宽度\ \n*/\\n@media screen and (max-width: 535px) {\\n . lh-tooltip {\\n min-width: 45vw;\\n padding: 3vw;\\n }\\n}\\n\\n.lh-tooltip-boundary:hover .lh-tooltip {\\n显示：块；\\n 动画：fadeInTooltip 250 毫秒；\\n 动画填充模式：前进；\\n 动画延迟：850 毫秒；\\n 底部：100%；\\n z-index：1；\ \n will-change: opacity;\\n right: 0;\\n pointer-events: none;\\n}\\n\\n.lh-tooltip::before {\\n content: ""; \\n 边框：纯色透明；\\n 边框底部颜色：#fff；\\n 边框宽度：10px；\\n 位置：绝对；\\n 底部：-20px；\\n 右侧：6px ;\\n 变换：旋转（180 度）；\\n 指针事件：无；\\n}\\n\\n@keyframes fadeInTooltip {\\n 0%​​ { 不透明度：0; }\\n 75% { 不透明度：1; }\\n 100% { 不透明度：1; 过滤器：阴影（1px 0px 1px #aaa）阴影（0px 2px 4px hsla（206, 6%, 25%, 0.15））；指针事件：自动；}\\n}\\n\\n/* 元素截图 */\\n. lh-element-screenshot {\\n 位置：相对；\\n 溢出：隐藏；\\n 浮动：左；\\n 边距-右：20px；\\n}\\n.lh-element-screenshot__content { \\n overflow: hidden;\\n}\\n.lh-element-screenshot__image {\\n /* 由 ElementScreenshotRenderer.installFullPageScreenshotCssVariable 设置 */\\n background-image: var(--element-screenshot-url) ;\\n 轮廓：2px 实心 #777;\\n 背景颜色：白色；\\n 背景重复：无重复；\\n}\\n.lh-element-screenshot__mask {\\n 位置：绝对；\\n 背景：#555；\\n 不透明度：0.8；\\n}\\n.lh-element-screenshot__element-marker {\\n 位置：绝对；\\n 轮廓：2px 实心 var(- -color-lime-400);\\n}\\n.lh-element-screenshot__overlay {\\n 位置：固定；\\n 顶部：0；\\n 左：0；\\n 右：0； \\n 底部：0；\\n z-index：2000；/* .lh-topbar 为 1000 */\\n 背景：var(--screenshot-overlay-background);\\n display: flex;\\n align-items: center;\\n justify-content: center;\\n 光标: 缩小;\\n}\ \n\\n.lh-element-screenshot__overlay .lh-element-screenshot {\\n margin-right: 0; /* 缩略图情况下使用的清除边距 */\\n outline: 1px solid var(--color-gray-700);\\n}\\n\\n.lh-screenshot-overlay--enabled .lh- element-screenshot {\\n cursor: zoom-out;\\n}\\n.lh-screenshot-overlay--enabled .lh-node .lh-element-screenshot {\\n cursor: zoom-in;\ \n}\\n\\n\\n.lh-meta__items {\\n --meta-icon-size: calc(var(--report-icon-size) * 0.667);\\n padding: var (--default-padding);\\n 显示：网格;\\n 网格模板列：1fr 1fr 1fr;\\n 背景颜色：var(--env-item-background-color);\\ n 边框半径：3px；\\n 边距：0 0 var(--default-padding) 0；\\n 字体大小：12px；\\n 列间距：var(--default-padding);\\n 颜色：var(--color-gray-700);\\n}\\n\\n.lh-meta__item {\\n 显示：块；\\n列表样式类型：无；\\n 位置：相对；\\n 填充：0 0 0 calc(var(--meta-icon-size) + var(--default-padding) * 2);\\ n 光标：未设置；/* 禁用报告图标中的指针光标 */\\n}\\n\\n.lh-meta__item.lh-tooltip-boundary {\\n text-decoration: dotted underline var(--color-gray-500 );\\n 光标：帮助；\\n}\\n\\n.lh-meta__item.lh-report-icon::before {\\n 位置：绝对；\\n 左：var(--default -padding);\\n 宽度：var(--meta-icon-size);\\n 高度：var(--meta-icon-size);\\n}\\n\\n.lh-meta__item .lh-report-icon:hover::before {\\n 不透明度：0.7;\\n}\\n\\n.lh-meta__item .lh-tooltip {\\n 颜色：var(--color-gray -800);\\n}\\n\\n.lh-meta__item .lh-tooltip::before {\\n right: auto; /* 将工具提示箭头设置在左侧 */\\n 左侧：6px;\\n}\\n\\n/* 更改窄视口的网格。*/\\n@media screen and (max-width: 640px) {\\n .lh-meta__items {\\n grid-template-columns: 1fr 1fr;\\n }\\n}\\n@media屏幕和（最大宽度：535px）{\\n .lh-meta__items {\\n 显示：块；\\n }\\n}\\n\\n\\n/*# sourceURL=report-styles .css */\\n\'),t.append(n),t}(e);case"topbar":return function(e){const t=e.createFragment(),n=e.createElement( "style");n.append("\\n .lh-topbar {\\n 位置：粘性；\\n 顶部：0；\\n 左：0；\\n 右：0；\\n z -index: 1000;\\n 显示: flex;\\n 对齐项目: 中心;\\n 高度: var(--topbar-height);\\n 填充: var(--topbar-padding);\ \n 字体大小：var(--report-font-size-secondary);\\n 背景颜色：var(--topbar-background-color);\\n 边框底部：但我们希望将其设置为透明 div。*/\\n 显示：弹性；\\n 背景：无；\\n 颜色：继承；\\n 边框：无；\\n 填充：0；\\n 字体：继承；\\n 轮廓：继承;\\n }\\n .lh-tools__button svg {\\n 填充：var(--tools-icon-color);\\n }\\n .lh-dark .lh-tools__button svg {\\n过滤器：反转（1）；\\n }\\n .lh-tools__button.lh-active + .lh-tools__dropdown {\\n 不透明度：1；\\n 剪辑：矩形（-1px，194px，242px，- 3px);\\n 可见性：可见；\\n }\\n .lh-tools__dropdown {\\n 位置：绝对；\\n 背景颜色：var(--report-background-color);\\n边框：1px 实心 var(--report-border-color);\\n 边框半径：3px;\\n 填充：计算(var(--default-padding) / 2) 0;\\n 光标：指针;\\n 上：36px;\\n 右：0; \\n box-shadow: 1px 1px 3px #ccc;\\n min-width: 125px;\\n 剪辑: rect(0, 164px, 0, 0);\\n 可见性：隐藏;\\n 不透明度： 0;\\n 过渡：所有 200ms 三次贝塞尔曲线（0,0,0.2,1）;\\n }\\n .lh-tools__dropdown a {\\n 颜色：currentColor;\\n 文本装饰：无;\\n 空白：nowrap;\\n 填充：0 6px;\\n 行高：2;\\n }\\n .lh-tools__dropdown a:hover,\\n .lh-tools__dropdown a :focus {\\n background-color: var(--color-gray-200);\\n outline: none;\\n }\\n /* save-gist 选项隐藏在报告中。*/\\n .lh-tools__dropdown a[data-action=\'save-gist\'] {\\n display: none;\\n }\\n\\n .lh-locale-selector {\\ n 宽度：100%;\\n 颜色：var(--report-text-color);\\n 背景颜色：var(--locale-selector-background-color);\\n 填充：add("lh-clump--failed"),r.appendChild(e);continue}const o="manual"===n?e.manualDescription:void 0,a=this.renderClump(n,{auditRefs: i,description:o});r.appendChild(a)}return r}}\n/**\n * @license\n * 版权所有 2017 The Lighthouse Authors。保留所有权利。\n *\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；\n * 除非遵守许可证，否则您不得使用此文件。\n * 您可以获得许可证位于\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件\n *按“原样”分发，\n * 不提供任何明示或暗示的保证或条件。)?o.slice(0):[];return void 0!==i&&d.push(!i),{node:a,isLastChild:s,hasChildren:c,startTime:n,transferSize:r+a.request.transferSize,treeMarkers:d}}static createChainNode(e,t,n){const r=e.createComponent("crcChain");e.find(".lh-crc-node",r).setAttribute("title",t.node.request.url);const o=e.find(".lh-crc-node__tree-marker",r);t.treeMarkers.forEach((t=>{t?(o.appendChild(e.createElement("span","lh-tree-marker lh-vert")),o.appendChild(e.createElement("span","lh-tree-marker"))):(o.appendChild(e.createElement("span","lh-tree-marker")),o.appendChild(e.createElement("span","lh-tree-marker")))})),t.isLastChild?(o.appendChild(e.createElement("span","lh-tree-marker lh-up-right")),o.appendChild(e.createElement("span","lh-tree-marker lh-right"))):(o.appendChild(e.createElement("span","lh-tree-marker lh-vert-right")),o.appendChild(e.createElement("span","lh-tree-marker lh-right"))),t.hasChildren?o.appendChild(e.createElement("span","lh-tree-marker lh-horiz-down")):o.appendChild(e.createElement("span","lh-tree-marker lh-right"));const i=t.node.request.url,a=n.renderTextURL(i),l=e.find(".lh-crc-node__tree-value",r);if(l.appendChild(a),!t.hasChildren){const{startTime:n,endTime:r,transferSize:o}=t.node.request,i=e.createElement("span","lh-crc-node__chain-duration");i.textContent=" - "+s.i18n.formatMilliseconds(1e3*(r-n))+", ";const a=e.createElement("span","lh-crc-node__chain-duration");a.textContent=s.i18n.formatBytesToKiB(o,.01),l.appendChild(i),l.appendChild(a)}return r}static buildTree(e,t,n,r,o,i){if(r.appendChild(p.createChainNode(e,n,i)),n.node.children)for(const a of Object.keys(n.node.children)){const l=p.createSegment(n.node.children,a,n.startTime,n.transferSize,n.treeMarkers,n.isLastChild);p.buildTree(e,t,l,r,o,i)}}static render(e,t,n){const r=e.createComponent("crc"),o=e.find(".lh-crc",r);e.find(".lh-crc-initial-nav",r).textContent=s.i18n.strings.crcInitialNavigation,e.find(".lh-crc__longest_duration_label",r).textContent=s.i18n.strings.crcLongestDurationLabel,e.find(".lh-crc__longest_duration",r).textContent=s.i18n.formatMilliseconds(t.longestChain.duration);const i=p.initTree(t.chains);for(const a of Object.keys(i.tree)){const l=p.createSegment(i.tree,a,i.startTime,i.transferSize);p.buildTree(e,r,l,o,t,n)}return e.find(".lh-crc-container",r)}}const p=h,u={0:["lh-snippet__line--content"],1:["lh-snippet__line--content","lh-snippet__line--content-highlighted"],2:["lh-snippet__line--placeholder"],3:["lh-snippet__line--message"]};\n/**\n   * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.\n   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0\n   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.\n   */function g(e,t){return{line:e.find((e=>e.lineNumber===t)),previousLine:e.find((e=>e.lineNumber===t-1))}}function m(e,t){return e.filter((e=>e.lineNumber===t))}function f(e){return s.filterRelevantLines(e.lines,e.lineMessages,2)}class v{static renderHeader(e,t,n,r){const o=f(t).length<t.lines.length,i=e.createComponent("snippetHeader");e.find(".lh-snippet__title",i).textContent=t.title;const{snippetCollapseButtonLabel:a,snippetExpandButtonLabel:l}=s.i18n.strings;e.find(".lh-snippet__btn-label-collapse",i).textContent=a,e.find(".lh-snippet__btn-label-expand",i).textContent=l;const c=e.find(".lh-snippet__toggle-expand",i);return o?c.addEventListener("click",(()=>r())):c.remove(),t.node&&e.isDevTools()&&e.find(".lh-snippet__node",i).appendChild(n.renderNode(t.node)),i}static renderSnippetLine(e,t,{content:n,lineNumber:r,truncated:o,contentType:i,visibility:a}){const l=e.createComponent("snippetLine"),s=e.find(".lh-snippet__line",l),{classList:c}=s;u[i].forEach((e=>c.add(e))),1===a?c.add("lh-snippet__show-if-collapsed"):2===a&&c.add("lh-snippet__show-if-expanded");const d=n+(o?"鈥�":""),h=e.find(".lh-snippet__line code",s);return 3===i?h.appendChild(e.convertMarkdownLinkSnippets(d)):h.textContent=d,e.find(".lh-snippet__line-number",s).textContent=r.toString(),s}static renderMessage(e,t,n){return v.renderSnippetLine(e,t,{lineNumber:" ",content:n.message,contentType:3})}static renderOmittedLinesPlaceholder(e,t,n){return v.renderSnippetLine(e,t,{lineNumber:"鈥�",content:"",visibility:n,contentType:2})}static renderSnippetContent(e,t,n){const r=e.createComponent("snippetContent"),o=e.find(".lh-snippet__snippet-inner",r);return n.generalMessages.forEach((n=>o.append(v.renderMessage(e,t,n)))),o.append(v.renderSnippetLines(e,t,n)),r}static renderSnippetLines(e,t,n){const{lineMessages:r,generalMessages:o,lineCount:i,lines:a}=n,l=f(n),s=o.length>0&&0===r.length,c=e.createFragment();let d=!1;for(let n=1;n<=i;n++){const{line:o,previousLine:i}=g(a,n),{line:h,previousLine:p}=g(l,n),u=!!h;!!p&&!u&&(d=!0),u&&d&&(c.append(v.renderOmittedLinesPlaceholder(e,t,1)),d=!1);const f=!o&&1===n;if(!o&&i||f){const r=!l.some((e=>e.lineNumber>n))||1===n;c.append(v.renderOmittedLinesPlaceholder(e,t,r?2:0)),d=!1}if(!o)continue;const b=m(r,n),_=b.length>0||s,w=Object.assign({},o,{contentType:_?1:0,visibility:h?0:2});c.append(v.renderSnippetLine(e,t,w)),b.forEach((n=>{c.append(v.renderMessage(e,t,n))}))}return c}static render(e,t,n){const r=e.createComponent("snippet"),o=e.find(".lh-snippet",r),i=v.renderHeader(e,t,n,(()=>o.classList.toggle("lh-snippet--expanded"))),a=v.renderSnippetContent(e,r,t);return o.append(i,a),o\n/**\n   * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.\n   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0\n   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.\n   */}}function b(e,t,n){return e<t?t:e>n?n:e}class _{static getScreenshotPositions(e,t,n){const r=(i=e).left+i.width/2,o=i.top+i.height/2;var i;const a=b(r-t.width/2,0,n.width-t.width),l=b(o-t.height/2,0,n.height-t.height);return{screenshot:{left:a,top:l},clip:{left:e.left-a,top:e.top-l}}}static renderClipPathInScreenshot(e,t,n,r,o){const i=e.find("clipPath",t),a="clip-"+s.getUniqueSuffix();i.id=a,t.style.clipPath=`url(#${a})`;const l=n.top/o.height,c=l+r.height/o.height,d=n.left/o.width,h=d+r.width/o.width,p=[`0,0             1,0            1,${l}          0,${l}`,`0,${c}     1,${c}    1,1               0,1`,`0,${l}        ${d},${l} ${d},${c} 0,${c}`,`${h},${l} 1,${l}       1,${c}       ${h},${c}`];for(const t of p){const n=e.createElementNS("http://www.w3.org/2000/svg","polygon");n.setAttribute("points",t),i.append(n)}}static installFullPageScreenshot(e,t){e.style.setProperty("--element-screenshot-url",`url(\'${t.data}\')`)}static installOverlayFeature(e){const{dom:t,rootEl:n,overlayContainerEl:r,fullPageScreenshot:o}=e,i="lh-screenshot-overlay--enabled";n.classList.contains(i)||(n.classList.add(i),n.addEventListener("click",(e=>{const n=e.target;if(!n)return;const i=n.closest(".lh-node > .lh-element-screenshot");if(!i)return;const a=t.createElement("div","lh-element-screenshot__overlay");r.append(a);const l={width:.95*a.clientWidth,height:.8*a.clientHeight},s={width:Number(i.dataset.rectWidth),height:Number(i.dataset.rectHeight),left:Number(i.dataset.rectLeft),right:Number(i.dataset.rectLeft)+Number(i.dataset.rectWidth),top:Number(i.dataset.rectTop),bottom:Number(i.dataset.rectTop)+Number(i.dataset.rectHeight)},c=_.render(t,o.screenshot,s,l);c?(a.appendChild(c),a.addEventListener("click",(()=>a.remove()))):a.remove()})))}static _computeZoomFactor(e,t){const n={x:t.width/e.width,y:t.height/e.height},r=.75*Math.min(n.x,n.y);return Math.min(1,r)}static render(e,t,n,r){if(!function(e,t){return t.left<=e.width&&0<=t.right&&t.top<=e.height&&0<=t.bottom}(t,n))return null;const o=e.createComponent("elementScreenshot"),i=e.find("div.lh-element-screenshot",o);i.dataset.rectWidth=n.width.toString(),i.dataset.rectHeight=n.height.toString(),i.dataset.rectLeft=n.left.toString(),i.dataset.rectTop=n.top.toString();const a=this._computeZoomFactor(n,r),l={width:r.width/a,height:r.height/a};l.width=Math.min(t.width,l.width);const s=l.width*a,c=l.height*a,d=_.getScreenshotPositions(n,l,{width:t.width,height:t.height});e.find("div.lh-element-screenshot__content",i).style.top=`-${c}px`;const h=e.find("div.lh-element-screenshot__image",i);h.style.width=s+"px",h.style.height=c+"px",h.style.backgroundPositionY=-d.screenshot.top*a+"px",h.style.backgroundPositionX=-d.screenshot.left*a+"px",h.style.backgroundSize=`${t.width*a}px ${t.height*a}px`;const p=e.find("div.lh-element-screenshot__element-marker",i);p.style.width=n.width*a+"px",p.style.height=n.height*a+"px",p.style.left=d.clip.left*a+"px",p.style.top=d.clip.top*a+"px";const u=e.find("div.lh-element-screenshot__mask",i);return u.style.width=s+"px",u.style.height=c+"px",_.renderClipPathInScreenshot(e,u,d.clip,n,l),i\n/**\n   * @license\n   * Copyright 2017 The Lighthouse Authors. All Rights Reserved.\n   *\n   * Licensed under the Apache License, Version 2.0 (the "License");\n   * you may not use this file except in compliance with the License.\n   * You may obtain a copy of the License at\n   *\n   *      http://www.apache.org/licenses/LICENSE-2.0\n   *\n   * Unless required by applicable law or agreed to in writing, software\n   * distributed under the License is distributed on an "AS-IS" BASIS,\n   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   * See the License for the specific language governing permissions and\n   * limitations under the License.\n   */}}const w=["http://","https://","data:"];class y{constructor(e,t={}){this._dom=e,this._fullPageScreenshot=t.fullPageScreenshot}render(e){switch(e.type){case"filmstrip":return this._renderFilmstrip(e);case"list":return this._renderList(e);case"table":return this._renderTable(e);case"criticalrequestchain":return h.render(this._dom,e,this);case"opportunity":return this._renderTable(e);case"screenshot":case"debugdata":case"full-page-screenshot":case"treemap-data":return null;default:return this._renderUnknown(e.type,e)}}_renderBytes(e){const t=s.i18n.formatBytesToKiB(e.value,e.granularity),n=this._renderText(t);return n.title=s.i18n.formatBytes(e.value),n}_renderMilliseconds(e){let t=s.i18n.formatMilliseconds(e.value,e.granularity);return"duration"===e.displayUnit&&(t=s.i18n.formatDuration(e.value)),this._renderText(t)}renderTextURL(e){const t=e;let n,r,o;try{const e=s.parseURL(t);n="/"===e.file?e.origin:e.file,r="/"===e.file||""===e.hostname?"":`(${e.hostname})`,o=t}catch(e){n=t}const i=this._dom.createElement("div","lh-text__url");if(i.appendChild(this._renderLink({text:n,url:t})),r){const e=this._renderText(r);e.classList.add("lh-text__url-host"),i.appendChild(e)}return o&&(i.title=t,i.dataset.url=t),i}_renderLink(e){const t=this._dom.createElement("a");if(this._dom.safelySetHref(t,e.url),!t.href){const t=this._renderText(e.text);return t.classList.add("lh-link"),t}return t.rel="noopener",t.target="_blank",t.textContent=e.text,t.classList.add("lh-link"),t}_renderText(e){const t=this._dom.createElement("div","lh-text");return t.textContent=e,t}_renderNumeric(e){const t=s.i18n.formatNumber(e.value,e.granularity),n=this._dom.createElement("div","lh-numeric");return n.textContent=t,n}_renderThumbnail(e){const t=this._dom.createElement("img","lh-thumbnail"),n=e;return t.src=n,t.title=n,t.alt="",t}_renderUnknown(e,t){console.error("Unknown details type: "+e,t);const n=this._dom.createElement("details","lh-unknown");return this._dom.createChildOf(n,"summary").textContent=`We don\'t know how to render audit details of type \\`${e}\\`. The Lighthouse version that collected this data is likely newer than the Lighthouse version of the report renderer. Expand for the raw JSON.`,this._dom.createChildOf(n,"pre").textContent=JSON.stringify(t,null,2),n}_renderTableValue(e,t){if(null==e)return null;if("object"==typeof e)switch(e.type){case"code":return this._renderCode(e.value);case"link":return this._renderLink(e);case"node":return this.renderNode(e);case"numeric":return this._renderNumeric(e);case"source-location":return this.renderSourceLocation(e);case"url":return this.renderTextURL(e.value);default:return this._renderUnknown(e.type,e)}switch(t.valueType){case"bytes":{const n=Number(e);return this._renderBytes({value:n,granularity:t.granularity})}case"code":{const t=String(e);return this._renderCode(t)}case"ms":{const n={value:Number(e),granularity:t.granularity,displayUnit:t.displayUnit};return this._renderMilliseconds(n)}case"numeric":{const n=Number(e);return this._renderNumeric({value:n,granularity:t.granularity})}case"text":{const t=String(e);return this._renderText(t)}case"thumbnail":{const t=String(e);return this._renderThumbnail(t)}case"timespanMs":{const t=Number(e);return this._renderMilliseconds({value:t})}case"url":{const t=String(e);return w.some((e=>t.startsWith(e)))?this.renderTextURL(t):this._renderCode(t)}default:return this._renderUnknown(t.valueType,e)}}_getCanonicalizedHeadingsFromTable(e){return"opportunity"===e.type?e.headings:e.headings.map((e=>this._getCanonicalizedHeading(e)))}_getCanonicalizedHeading(e){let t;return e.subItemsHeading&&(t=this._getCanonicalizedsubItemsHeading(e.subItemsHeading,e)),{key:e.key,valueType:e.itemType,subItemsHeading:t,label:e.text,displayUnit:e.displayUnit,granularity:e.granularity}}_getCanonicalizedsubItemsHeading(e,t){return e.key||console.warn("key should not be null"),{key:e.key||"",valueType:e.itemType||t.itemType,granularity:e.granularity||t.granularity,displayUnit:e.displayUnit||t.displayUnit}}_getDerivedsubItemsHeading(e){return e.subItemsHeading?{key:e.subItemsHeading.key||"",valueType:e.subItemsHeading.valueType||e.valueType,granularity:e.subItemsHeading.granularity||e.granularity,displayUnit:e.subItemsHeading.displayUnit||e.displayUnit,label:""}:null}_renderTableRow(e,t){const n=this._dom.createElement("tr");for(const r of t){if(!r||!r.key){this._dom.createChildOf(n,"td","lh-table-column--empty");continue}const t=e[r.key];let o;if(null!=t&&(o=this._renderTableValue(t,r)),o){const e="lh-table-column--"+r.valueType;this._dom.createChildOf(n,"td",e).appendChild(o)}else this._dom.createChildOf(n,"td","lh-table-column--empty")}return n}_renderTableRowsFromItem(e,t){const n=this._dom.createFragment();if(n.append(this._renderTableRow(e,t)),!e.subItems)return n;const r=t.map(this._getDerivedsubItemsHeading);if(!r.some(Boolean))return n;for(const t of e.subItems.items){const e=this._renderTableRow(t,r);e.classList.add("lh-sub-item-row"),n.append(e)}return n}_renderTable(e){if(!e.items.length)return this._dom.createElement("span");const t=this._dom.createElement("table","lh-table"),n=this._dom.createChildOf(t,"thead"),r=this._dom.createChildOf(n,"tr"),o=this._getCanonicalizedHeadingsFromTable(e);for(const e of o){const t="lh-table-column--"+(e.valueType||"text"),n=this._dom.createElement("div","lh-text");n.textContent=e.label,this._dom.createChildOf(r,"th",t).appendChild(n)}const i=this._dom.createChildOf(t,"tbody");let a=!0;for(const t of e.items){const e=this._renderTableRowsFromItem(t,o);for(const t of this._dom.findAll("tr",e))t.classList.add(a?"lh-row--even":"lh-row--odd");a=!a,i.append(e)}return t}_renderList(e){const t=this._dom.createElement("div","lh-list");return e.items.forEach((e=>{const n=v.render(this._dom,e,this);t.appendChild(n)})),t}renderNode(e){const t=this._dom.createElement("span","lh-node");if(e.nodeLabel){const n=this._dom.createElement("div");n.textContent=e.nodeLabel,t.appendChild(n)}if(e.snippet){const n=this._dom.createElement("div");n.classList.add("lh-node__snippet"),n.textContent=e.snippet,t.appendChild(n)}if(e.selector&&(t.title=e.selector),e.path&&t.setAttribute("data-path",e.path),e.selector&&t.setAttribute("data-selector",e.selector),e.snippet&&t.setAttribute("data-snippet",e.snippet),!this._fullPageScreenshot)return t;const n=e.lht\n/**\n * @license 版权所有 2020 The Lighthouse Authors。保留所有权利。\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 上获取许可证的副本\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件按“原样”分发" 基础，不提供任何形式的明示或暗示的保证或条件。请参阅许可证以了解许可证下的特定语言管理权限和限制。\n */}}class x{constructor(e,t){"en-XA"===e&&(e="de"),this. _numberDateLocale=e,this._numberFormatter=new Intl.NumberFormat(e),this._percentFormatter=new Intl.NumberFormat(e,{style:"percent" forEach((e=>{const o=r[e],i=Math.floor(t/o);i>0&&(t-=i*o,n.push(`${i} ${e} `))})),n.join(" ")\n/**\n * @license\n * 版权所有 2018 The Lighthouse Authors。保留所有权利。\n *\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；\n * 除非遵守许可证，否则您不得使用此文件。\n * 您可以获得许可证位于\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件\n *按“原样”分发，\n * 不提供任何明示或暗示的保证或条件。\n * 请参阅许可证以了解特定语言的管理权限和\n * 许可证下的限制。getUniqueSuffix(),r=t.querySelectorAll("[id]");for(const t of r){const r=t.id,o=`${r}-${n}`;t.id= o;const i=e.querySelectorAll(`use[href="#${r}"]`);for(const e of i)e.setAttribute("href","#"+o);const a= e.querySelectorAll(`[fill="url(#${r})"]`);for(const e of a)e.setAttribute("fill",`url(#${o})`)}} }\n/**\n * @license\n * 版权所有 2017 The Lighthouse Authors。保留所有权利。\n *\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；\n * 除非遵守许可证，否则您不得使用此文件。\n * 您可以获得许可证位于\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件\n *分布在“ values(e.categories)){const n=i[t.id]||o;n.dom.createChildOf(u,"div","lh-category-wrapper").appendChild(n.render(t, e.categoryGroups,g))}o.injectFinalScreenshot(u,e.audits,p);const m=this._dom.createFragment();return m.append(this._dom.createComponent("styles")),this ._opts.omitTopbar||m.appendChild(this._renderReportTopbar(e)),m.appendChild(l),l.appendChild(a),l.appendChild(c),c.appendChild(this._renderReportFooter(e)) ,n&&_.installFullPageScreenshot(this._dom.rootEl,n.screenshot),m\n/**\n * @license 版权所有 2021 The Lighthouse Authors。保留所有权利。\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2 上获取许可证的副本。0\n * 除非适用法律要求或书面同意，否则根据许可分发的软件将按“原样”分发，没有任何明示或暗示的保证或条件。有关许可下的特定语言管理权限和限制，请参阅许可。\n */}}function C(e,t){const n=e.rootEl;void 0===t?n.classList.toggle(" lh-dark"):n.classList.toggle("lh-dark",t)}\n/**\n * @license 版权所有 2021 The Lighthouse Authors。保留所有权利。\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 上获取许可证的副本\n * 除非适用法律要求或书面同意，根据许可分发的软件是按“原样”分发的，没有任何明示或暗示的保证或条件。请参阅许可证以了解许可证下管理权限和限制的特定语言。\n */const z="undefined"!=typeof btoa?btoa:e=>Buffer.from(e).toString("base64"),S =("undefined"!=typeof atob&&atob,async function(e,t){let n=(new TextEncoder).encode(e);if(t.gzip)if("undefined"!=typeof CompressionStream){const e =new CompressionStream("gzip"),t=e.writable.getWriter();t.write(n),t.close();const r=await new Response(e.readable).arrayBuffer();n= new Uint8Array(r)}else n=window.pako.gzip(e);let r="";for(let e=0;e<n.length;e+=5e3)r+=String.fromCharCode(... n.subarray(e,e+5e3));返回 z(r)}); \n/**\n * @license\n * 版权所有 2021 The Lighthouse Authors。保留所有权利。\n *\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；\n * 除非遵守许可证，否则您不得使用此文件。\n * 您可以获得许可证位于\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件\n *按“原样”分发，\n * 不提供任何明示或暗示的保证或条件。\n * 请参阅许可证以了解特定语言的管理权限和\n * 许可证下的限制。\n * /\nfunction L(){const e=window.location.host.endsWith(".vercel.app"),t=new URLSearchParams(window.location.search).has("dev"); 返回e?`https://${window.location.host}/gh-pages`:t?"http://localhost:8000":"https://googlechrome.github.io/lighthouse"}函数M (e){const t=e.generatedTime,n=e.fetchTime||t;return`${e.lighthouseVersion}-${e.requestedUrl}-${n}`}异步函数F(e,t, n){const r=new URL(t),o=Boolean(window.CompressionStream);r.hash=await S(JSON.stringify(e),{gzip:o}),o&&r.searchParams.set("gzip ","1"),window.open(r.toString(),n)}\n/**\n * @license 版权所有 2021 The Lighthouse Authors。保留所有权利。\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 上获取许可证的副本\n * 除非适用法律要求或书面同意，根据许可分发的软件是按“原样”分发的，没有任何明示或暗示的保证或条件。请参阅许可证以了解许可证下管理权限和限制的特定语言。\n */\nclass N{constructor(e){this._dom=e,this._toggleEl,this._menuEl,this.onDocumentKeyDown=this.onDocumentKeyDown. bind(this),this.onToggleClick=this.onToggleClick.bind(this),this.onToggleKeydown=this.onToggleKeydown.bind(this),this.onMenuFocusOut=this.onMenuFocusOut.bind(this),this.onMenuKeydown=this. onMenuKeydown.bind(this),this._getNextMenuItem=this._getNextMenuItem.bind(this),this._getNextSelectableNode=this._getNextSelectableNode.bind(this),this._getPreviousMenuItem=this._getPreviousMenuItem.bind(this)}setup(e) {this._toggleEl=this._dom.find(".lh-topbar button.lh-tools__button", return this._getNextSelectableNode(t,e)}}\n/**\n * @license 版权所有 2021 The Lighthouse Authors。保留所有权利。\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 上获取许可证的副本\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件按“原样”分发" 基础，不提供任何形式的明示或暗示的保证或条件。请参阅许可证以了解许可证下的特定语言管理权限和限制。\n */class T{constructor(e,t){this.lhr,this._reportUIFeatures=e,this._dom=t,this._dropDownMenu=new N(this._dom),this._copyAttempt=!1,this.topbarEl,this.categoriesEl,this.stickyHeaderEl, getBoundingClientRect().left-i;this.highlightEl.style.transform=`translate(${a}px)`,this.stickyHeaderEl.classList.toggle("lh-sticky-header--visible",e)}} \n/**\n * @license 版权所有 2017 The Lighthouse 作者。保留所有权利。\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 上获取许可证的副本\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件按“原样”分发" 基础，不提供任何形式的明示或暗示的保证或条件。请参阅许可证以了解许可证下管理权限和限制的特定语言。\n */function D(e,t){const n=t?new Date(t):new Date,r=n. 除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 上获取许可证的副本\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件按“原样”分发" 基础，不提供任何形式的明示或暗示的保证或条件。请参阅许可证，了解许可证下管理权限和限制的特定语言。\n */\n/**\n * @license\n * 版权所有 2017 The Lighthouse Authors。保留所有权利。\n *\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；\n * 除非遵守许可证，否则您不得使用此文件。\n * 您可以获得许可证位于\n *\n * http://www.apache.org/licenses/LICENSE-2。_id&&clearTimeout(this._id),this.el.classList.remove("lh-show")\n/**\n * @license 版权所有 2021 The Lighthouse Authors。保留所有权利。\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 上获取许可证的副本\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件按“原样”分发" 基础，不提供任何形式的明示或暗示的保证或条件。请参阅许可证以了解许可证下的特定语言管理权限和限制。\n */}}window.__initLighthouseReport__=function(){const e=function(e,t={}){const n=document.createElement("文章");n.classList。
                REPORT_CSS: '/**\n * @license\n * 版权所有 2017 The Lighthouse Authors。保留所有权利。\n *\n * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；\n * 除非遵守许可证，否则您不得使用此文件。\n * 您可以获得许可证位于\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * 除非适用法律要求或书面同意，否则根据许可证分发的软件\n *按“原样”分发，\n * 不提供任何明示或暗示的保证或条件。\n * 请参阅许可证以了解特定语言的管理权限和\n * 许可证下的限制。\n * /\n\n/*\n 命名约定：\n\n 如果变量用于特定组件：--{component}-{property name}-{modifier}\n\n {component} 和 {property name} 都应该是 kebab-case。如果目标是整个页面，\n 使用 \'report\' 作为组件。属性名称不应缩写。使用该变量的\n 属性名称 - 如果它用于多个，一个通用描述符\n 就可以了（例如：\'size\' 用于应用到 \'width\' 和 \'height 的变量\'）。如果一个变量在多个组件之间共享\n，则要么创建更多变量，要么只删除名称中的“{component}-”\n 部分。在末尾附加任何修饰符（例如：\'big\'、\'dark\'）。\n\n 对于颜色：--color-{hue}-{intensity}\n\n {intensity} 是材质设计标签 - 700、A700 等。\n*/\n.lh-vars {\n /* 使用 Material Design 颜色的调色板\n * https://www.materialui. \n --report-border-color-secondary: #ebebeb;\n --report-font-family-monospace: \'Roboto Mono\', \'Menlo\', \'dejavu sans mono\', \' Consolas\', \'Lucida Console\', 等宽字体；\n --report-font-family: Roboto, Helvetica, Arial, sans-serif;\n --report-font-size: 14px;\n --report -font-size-secondary: 12px;\n --report-icon-size: var(--score-icon-background-size);\n --report-line-height: 24px;\n --report- line-height-secondary: 20px;\n --report-min-width: 360px;\n --report-monospace-font-size: calc(var(--report-font-size) * 0.85);\n --report-text-color-secondary: var(--color-gray-800);\n --report-text-color: var(--color-gray-900);\n --report-content-宽度：计算（60 * var（--report-font-size））；/* 默认为 840px */\n --score-container-padding: 8px;\n --score-icon-background-size: 24px; \n --env-name-min-width: 120px;\n --gauge-circle-size-big: 96px;\n --gauge-circle-size: 72px;\n --gauge-label-font- size-big: 22px;\n --gauge-label-font-size: 14px;\n --gauge-label-line-height-big: 26px;\n --gauge-label-line-height: 20px; \n --gauge-percentage-font-size-big: 34px;\n --gauge-percentage-font-size: 26px;\n --gauge-wrapper-width: 112px;\n --header-padding: 16px 0 16px 0;\n --image-preview-size: 24px;\n --plugin-icon-size: 75%;\n --pwa-icon-margin: 0 7px 0 -3px;\n --报告字体大小：14px；\n --report-line-height：20px；\n --score-icon-margin-left：2px；\n --score-icon-size：10px；\n -- topbar-height: 28px;\n --topbar-logo-size: 20px;\n }\n\n /* 没有足够的空间来充分显示相对节省栏。*/\n .lh-sparkline {\n 显示：无；\n }\n}\n\n.lh-vars。dejavu sans mono\', \'Consolas\', \'Lucida Console\', monospace;\n --report-font-family: \'.SFNSDisplay-Regular\', \'Helvetica Neue\', \'Lucida Grande\', sans-serif;\n --report-font-size: 12px;\n --report-line-height: 20px;\n --score-icon-margin-left: 2px;\n -- score-icon-size: 10px;\n --section-padding-vertical: 8px;\n}\n\n.lh-devtools.lh-root {\n 高度: 100%;\n}\n.lh -devtools.lh-root img {\n /* 覆盖 devtools 默认值 \'min-width: 0\' 因此 flexbox 中没有大小的 svg 不会折叠。*/\n min-width: auto;\n}\n.lh-devtools .lh-container {\n overflow-y: scroll;\n height: calc(100% - var(--topbar-height)) ;\n}\n@media print {\n .lh-devtools .lh-container {\n 溢出：未设置；\n }\n}\n.lh-devtools .lh-sticky-header {\n /*这通常是顶栏的高度，lh-container {\n /*\n 报告中的文本换行非常有趣！\n 我们在此处全局设置了一个 `word-break: break-word;` 以防止一些常见情况，即\n long non-可破坏文本（通常是 URL）位于：\n 1. 页脚\n 2. .lh-node (outerHTML)\n 3. .lh-code\n\n 排序后，下一个挑战是适当的列大小和文本环绕在我们的\n .lh-details 表中。更有趣。\n * 我们不希望表头（“Potential Savings (ms)”）或它们的列值换行，但是\n 如果 URL 是特别长。\n * 我们希望窄列保持窄，为 URL 提供最大的列宽\n * 我们不希望表格超过 100% 宽度。\n * URL 列中的长 URL 可以裹。实用程序。4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.6 14.6 0 0 1 0 4zm.3 5.6c.6-1.2 1-2.4 1.4-3.6h3a8 8 0 0 1-4.4 3.6zm1.8-5.6a16.5 16.5 0 0 0 0-4h3.3a8.2 8.2 0 0 1 0 4h-3.3z"/></svg>\');\n}\n.lh-report-icon--stopwatch::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.1-6.6L20.5 6l-1.4-1.4L17.7 6A9 9 0 0 0 3 13a9 9 0 1 0 16-5.6zm-7 12.6a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/></svg>\');\n}\n.lh-report-icon--networkspeed::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.9 5c-.2 0-.3 0-.4.2v.2L10.1 17a2 2 0 0 0-.2 1 2 2 0 0 0 4 .4l2.4-12.9c0-.3-.2-.5-.5-.5zM1 9l2 2c2.9-2.9 6.8-4 10.5-3.6l1.2-2.7C10 3.8 4.7 5.3 1 9zm20 2 2-2a15.4 15.4 0 0 0-5.6-3.6L17 8.2c1.5.7 2.9 1.6 4.1 2.8zm-4 4 2-2a9.9 9.9 0 0 0-2.7-1.9l-.5 3 1.2.9zM5 13l2 2a7.1 7.1 0 0 1 4-2l1.3-2.9C9.7 10.1 7 11 5 13z"/></svg>\');\n}\n.lh-report-icon--samples-one::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="14" r="3"/><path d="M7 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.6 17.6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>\');\n}\n.lh-report-icon--samples-many::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.6 17.6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/></svg>\');\n}\n.lh-report-icon--chrome::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 562 562"><path d="M256 25.6v25.6a204 204 0 0 1 144.8 60 204 204 0 0 1 60 144.8 204 204 0 0 1-60 144.8 204 204 0 0 1-144.8 60 204 204 0 0 1-144.8-60 204 204 0 0 1-60-144.8 204 204 0 0 1 60-144.8 204 204 0 0 1 144.8-60V0a256 256 0 1 0 0 512 256 256 0 0 0 0-512v25.6z"/><path d="M256 179.2v25.6a51.3 51.3 0 0 1 0 102.4 51.3 51.3 0 0 1 0-102.4v-51.2a102.3 102.3 0 1 0-.1 204.7 102.3 102.3 0 0 0 .1-204.7v25.6z"/><path d="M256 204.8h217.6a25.6 25.6 0 0 0 0-51.2H256a25.6 25.6 0 0 0 0 51.2m44.3 76.8L191.5 470.1a25.6 25.6 0 1 0 44.4 25.6l108.8-188.5a25.6 25.6 0 1 0-44.4-25.6m-88.6 0L102.9 93.2a25.7 25.7 0 0 0-35-9.4 25.7 25.7 0 0 0-9.4 35l108.8 188.5a25.7 25.7 0 0 0 35 9.4 25.9 25.9 0 0 0 9.4-35.1"/></svg>\');\n}\n\n\n\n.lh-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  margin: var(--default-padding) 0;\n}\n.lh-button {\n  height: 32px;\n  border: 1px solid var(--report-border-color-secondary);\n  border-radius: 3px;\n  color: var(--link-color);\n  background-color: var(--report-background-color);\n  margin: 5px;\n}\n\n.lh-button:first-of-type {\n  margin-left: 0;\n}\n\n/* Node */\n.lh-node__snippet {\n  font-family: var(--report-font-family-monospace);\n  color: var(--snippet-color);\n  font-size: var(--report-monospace-font-size);\n  line-height: 20px;\n}\n\n/* Score */\n\n.lh-audit__score-icon {\n  width: var(--score-icon-size);\n  height: var(--score-icon-size);\n  margin: var(--score-icon-margin);\n}\n\n.lh-audit--pass .lh-audit__display-text {\n  color: var(--color-pass-secondary);\n}\n.lh-audit--pass .lh-audit__score-icon,\n.lh-scorescale-range--pass::before {\n  border-radius: 100%;\n  background: var(--color-pass);\n}\n\n.lh-audit--average .lh-audit__display-text {\n  color: var(--color-average-secondary);\n}\n.lh-audit--average .lh-audit__score-icon,\n.lh-scorescale-range--average::before {\n  background: var(--color-average);\n  width: var(--icon-square-size);\n  height: var(--icon-square-size);\n}\n\n.lh-audit--fail .lh-audit__display-text {\n  color: var(--color-fail-secondary);\n}\n.lh-audit--fail .lh-audit__score-icon,\n.lh-audit--error .lh-audit__score-icon,\n.lh-scorescale-range--fail::before {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n\n.lh-audit--manual .lh-audit__display-text,\n.lh-audit--notapplicable .lh-audit__display-text {\n  color: var(--color-gray-600);\n}\n.lh-audit--manual .lh-audit__score-icon,\n.lh-audit--notapplicable .lh-audit__score-icon {\n  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-400);\n  border-radius: 100%;\n  background: none;\n}\n\n.lh-audit--informative .lh-audit__display-text {\n  color: var(--color-gray-600);\n}\n\n.lh-audit--informative .lh-audit__score-icon {\n  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-400);\n  border-radius: 100%;\n}\n\n.lh-audit__description,\n.lh-audit__stackpack {\n  color: var(--report-text-color-secondary);\n}\n.lh-audit__adorn {\n  border: 1px solid slategray;\n  border-radius: 3px;\n  margin: 0 3px;\n  padding: 0 2px;\n  line-height: 1.1;\n  display: inline-block;\n  font-size: 90%;\n}\n\n.lh-category-header__description  {\n  text-align: center;\n  color: var(--color-gray-700);\n  margin: 0px auto;\n  max-width: 400px;\n}\n\n\n.lh-audit__display-text,\n.lh-load-opportunity__sparkline,\n.lh-chevron-container {\n  margin: 0 var(--audit-margin-horizontal);\n}\n.lh-chevron-container {\n  margin-right: 0;\n}\n\n.lh-audit__title-and-text {\n  flex: 1;\n}\n\n.lh-audit__title-and-text code {\n  color: var(--snippet-color);\n  font-size: var(--report-monospace-font-size);\n}\n\n/* Prepend display text with em dash separator. But not in Opportunities. */\n.lh-audit__display-text:not(:empty):before {\n  content: \'鈥擻';\n  margin-right: var(--audit-margin-horizontal);\n}\n.lh-audit-group.lh-audit-group--load-opportunities .lh-audit__display-text:not(:empty):before {\n  display: none;\n}\n\n/* Expandable Details (Audit Groups, Audits) */\n.lh-audit__header {\n  display: flex;\n  align-items: center;\n  padding: var(--default-padding);\n}\n\n.lh-audit--load-opportunity .lh-audit__header {\n  display: block;\n}\n\n\n.lh-metricfilter {\n  display: grid;\n  justify-content: end;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 4px;\n  color: var(--color-gray-700);\n}\n\n.lh-metricfilter__radio {\n  position: absolute;\n  left: -9999px;\n}\n.lh-metricfilter input[type=\'radio\']:focus-visible + label {\n  outline: -webkit-focus-ring-color auto 1px;\n}\n\n.lh-metricfilter__label {\n  display: inline-flex;\n  padding: 0 4px;\n  height: 16px;\n  text-decoration: underline;\n  align-items: center;\n  cursor: pointer;\n  font-size: 90%;\n}\n\n.lh-metricfilter__label--active {\n  background: var(--color-blue-primary);\n  color: var(--color-white);\n  border-radius: 3px;\n  text-decoration: none;\n}\n/* Give the \'All\' choice a more muted display */\n.lh-metricfilter__label--active[for="metric-All"] {\n  background-color: var(--color-blue-200) !important;\n  color: black !important;\n}\n\n.lh-metricfilter__text {\n  margin-right: 8px;\n}\n\n/* If audits are filtered, hide the itemcount for Passed Audits鈥� */\n.lh-category--filtered .lh-audit-group .lh-audit-group__itemcount {\n  display: none;\n}\n\n\n.lh-audit__header:hover {\n  background-color: var(--color-hover);\n}\n\n/* We want to hide the browser\'s default arrow marker on summary elements. Admittedly, it\'s complicated. */\n.lh-root details > summary {\n  /* Blink 89+ and Firefox will hide the arrow when display is changed from (new) default of `list-item` to block.  https://chromestatus.com/feature/6730096436051968*/\n  display: block;\n}\n/* Safari and Blink <=88 require using the -webkit-details-marker selector */\n.lh-root details > summary::-webkit-details-marker {\n  display: none;\n}\n\n/* Perf Metric */\n\n.lh-metrics-container {\n  display: grid;\n  grid-auto-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: var(--report-line-height);\n}\n\n.lh-metric {\n  border-top: 1px solid var(--report-border-color-secondary);\n}\n\n.lh-metric:nth-last-child(-n+2) {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\n\n\n.lh-metric__innerwrap {\n  display: grid;\n  /**\n   * Icon -- Metric Name\n   *      -- Metric Value\n   */\n  grid-template-columns: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right)) 1fr;\n  align-items: center;\n  padding: var(--default-padding);\n}\n\n.lh-metric__details {\n  order: -1;\n}\n\n.lh-metric__title {\n  flex: 1;\n}\n\n.lh-calclink {\n  padding-left: calc(1ex / 3);\n}\n\n.lh-metric__description {\n  display: none;\n  grid-column-start: 2;\n  grid-column-end: 4;\n  color: var(--report-text-color-secondary);\n}\n\n.lh-metric__value {\n  font-size: var(--metric-value-font-size);\n  margin: calc(var(--default-padding) / 2) 0;\n  white-space: nowrap; /* No wrapping between metric value and the icon */\n  grid-column-start: 2;\n}\n\n\n@media screen and (max-width: 535px) {\n  .lh-metrics-container {\n    display: block;\n  }\n\n  .lh-metric {\n    border-bottom: none !important;\n  }\n  .lh-metric:nth-last-child(1) {\n    border-bottom: 1px solid var(--report-border-color-secondary) !important;\n  }\n\n  /* Change the grid to 3 columns for narrow viewport. */\n  .lh-metric__innerwrap {\n  /**\n   * Icon -- Metric Name -- Metric Value\n   */\n    grid-template-columns: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right)) 2fr 1fr;\n  }\n  .lh-metric__value {\n    justify-self: end;\n    grid-column-start: unset;\n  }\n}\n\n/* No-JS toggle switch */\n/* Keep this selector sync\'d w/ `magicSelector` in report-ui-features-test.js */\n .lh-metrics-toggle__input:checked ~ .lh-metrics-container .lh-metric__description {\n  display: block;\n}\n\n/* TODO get rid of the SVGS and clean up these some more */\n.lh-metrics-toggle__input {\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0px;\n}\n\n.lh-metrics-toggle__input + div > label > .lh-metrics-toggle__labeltext--hide,\n.lh-metrics-toggle__input:checked + div > label > .lh-metrics-toggle__labeltext--show {\n  display: none;\n}\n.lh-metrics-toggle__input:checked + div > label > .lh-metrics-toggle__labeltext--hide {\n  display: inline;\n}\n.lh-metrics-toggle__input:focus + div > label {\n  outline: -webkit-focus-ring-color auto 3px;\n}\n\n.lh-metrics-toggle__label {\n  cursor: pointer;\n  font-size: var(--report-font-size-secondary);\n  line-height: var(--report-line-height-secondary);\n  color: var(--color-gray-700);\n}\n\n/* Pushes the metric description toggle button to the right. */\n.lh-audit-group--metrics .lh-audit-group__header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.lh-metric__icon,\n.lh-scorescale-range::before {\n  content: \'\';\n  width: var(--score-icon-size);\n  height: var(--score-icon-size);\n  display: inline-block;\n  margin: var(--score-icon-margin);\n}\n\n.lh-metric--pass .lh-metric__value {\n  color: var(--color-pass-secondary);\n}\n.lh-metric--pass .lh-metric__icon {\n  border-radius: 100%;\n  background: var(--color-pass);\n}\n\n.lh-metric--average .lh-metric__value {\n  color: var(--color-average-secondary);\n}\n.lh-metric--average .lh-metric__icon {\n  background: var(--color-average);\n  width: var(--icon-square-size);\n  height: var(--icon-square-size);\n}\n\n.lh-metric--fail .lh-metric__value {\n  color: var(--color-fail-secondary);\n}\n.lh-metric--fail .lh-metric__icon,\n.lh-metric--error .lh-metric__icon {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n\n.lh-metric--error .lh-metric__value,\n.lh-metric--error .lh-metric__description {\n  color: var(--color-fail-secondary);\n}\n\n/* Perf load opportunity */\n\n.lh-load-opportunity__cols {\n  display: flex;\n  align-items: flex-start;\n}\n\n.lh-load-opportunity__header .lh-load-opportunity__col {\n  color: var(--color-gray-600);\n  display: unset;\n  line-height: calc(2.3 * var(--report-font-size));\n}\n\n.lh-load-opportunity__col {\n  display: flex;\n}\n\n.lh-load-opportunity__col--one {\n  flex: 5;\n  align-items: center;\n  margin-right: 2px;\n}\n.lh-load-opportunity__col--two {\n  flex: 4;\n  text-align: right;\n}\n\n.lh-audit--load-opportunity .lh-audit__display-text {\n  text-align: right;\n  flex: 0 0 calc(3 * var(--report-font-size));\n}\n\n\n/* Sparkline */\n\n.lh-load-opportunity__sparkline {\n  flex: 1;\n  margin-top: calc((var(--report-line-height) - var(--sparkline-height)) / 2);\n}\n\n.lh-sparkline {\n  height: var(--sparkline-height);\n  width: 100%;\n}\n\n.lh-sparkline__bar {\n  height: 100%;\n  float: right;\n}\n\n.lh-audit--pass .lh-sparkline__bar {\n  background: var(--color-pass);\n}\n\n.lh-audit--average .lh-sparkline__bar {\n  background: var(--color-average);\n}\n\n.lh-audit--fail .lh-sparkline__bar {\n  background: var(--color-fail);\n}\n\n/* Filmstrip */\n\n.lh-filmstrip-container {\n  /* smaller gap between metrics and filmstrip */\n  margin: -8px auto 0 auto;\n}\n\n.lh-filmstrip {\n  display: grid;\n  justify-content: space-between;\n  padding-bottom: var(--default-padding);\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, 60px);\n}\n\n.lh-filmstrip__frame {\n  text-align: right;\n  position: relative;\n}\n\n.lh-filmstrip__thumbnail {\n  border: 1px solid var(--report-border-color-secondary);\n  max-height: 100px;\n  max-width: 60px;\n}\n\n/* Audit */\n\n.lh-audit {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\n\n/* Apply border-top to just the first audit. */\n.lh-audit {\n  border-top: 1px solid var(--report-border-color-secondary);\n}\n.lh-audit ~ .lh-audit {\n  border-top: none;\n}\n\n\n.lh-audit--error .lh-audit__display-text {\n  color: var(--color-fail);\n}\n\n/* Audit Group */\n\n.lh-audit-group {\n  margin-bottom: var(--audit-group-margin-bottom);\n  position: relative;\n}\n.lh-audit-group--metrics {\n  margin-bottom: calc(var(--audit-group-margin-bottom) / 2);\n}\n\n.lh-audit-group__header::before {\n  /* By default, groups don\'t get an icon */\n  content: none;\n  width: var(--pwa-icon-size);\n  height: var(--pwa-icon-size);\n  margin: var(--pwa-icon-margin);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n/* Style the "over budget" columns red. */\n.lh-audit-group--budgets #performance-budget tbody tr td:nth-child(4),\n.lh-audit-group--budgets #performance-budget tbody tr td:nth-child(5),\n.lh-audit-group--budgets #timing-budget tbody tr td:nth-child(3) {\n  color: var(--color-red-700);\n}\n\n/* Align the "over budget request count" text to be close to the "over budget bytes" column. */\n.lh-audit-group--budgets .lh-table tbody tr td:nth-child(4){\n  text-align: right;\n}\n\n.lh-audit-group--budgets .lh-details--budget {\n  width: 100%;\n  margin: 0 0 var(--default-padding);\n}\n\n.lh-audit-group--pwa-installable .lh-audit-group__header::before {\n  content: \'\';\n  background-image: var(--pwa-installable-gray-url);\n}\n.lh-audit-group--pwa-optimized .lh-audit-group__header::before {\n  content: \'\';\n  background-image: var(--pwa-optimized-gray-url);\n}\n.lh-audit-group--pwa-installable.lh-badged .lh-audit-group__header::before {\n  background-image: var(--pwa-installable-color-url);\n}\n.lh-audit-group--pwa-optimized.lh-badged .lh-audit-group__header::before {\n  background-image: var(--pwa-optimized-color-url);\n}\n\n.lh-audit-group--metrics .lh-audit-group__summary {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.lh-audit-group__summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.lh-audit-group__header .lh-chevron {\n  margin-top: calc((var(--report-line-height) - 5px) / 2);\n}\n\n.lh-audit-group__header {\n  letter-spacing: 0.8px;\n  padding: var(--default-padding);\n  padding-left: 0;\n}\n\n.lh-audit-group__header, .lh-audit-group__summary {\n  font-size: var(--report-font-size-secondary);\n  line-height: var(--report-line-height-secondary);\n  color: var(--color-gray-700);\n}\n\n.lh-audit-group__title {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.lh-audit-group__itemcount {\n  color: var(--color-gray-600);\n}\n\n.lh-audit-group__footer {\n  color: var(--color-gray-600);\n  display: block;\n  margin-top: var(--default-padding);\n}\n\n.lh-details,\n.lh-category-header__description,\n.lh-load-opportunity__header,\n.lh-audit-group__footer {\n  font-size: var(--report-font-size-secondary);\n  line-height: var(--report-line-height-secondary);\n}\n\n.lh-audit-explanation {\n  margin: var(--audit-padding-vertical) 0 calc(var(--audit-padding-vertical) / 2) var(--audit-margin-horizontal);\n  line-height: var(--audit-explanation-line-height);\n  display: inline-block;\n}\n\n.lh-audit--fail .lh-audit-explanation {\n  color: var(--color-fail);\n}\n\n/* Report */\n.lh-list > div:not(:last-child) {\n  padding-bottom: 20px;\n}\n\n.lh-header-container {\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  word-wrap: break-word;\n}\n\n.lh-report {\n  min-width: var(--report-min-width);\n}\n\n.lh-exception {\n  font-size: large;\n}\n\n.lh-code {\n  white-space: normal;\n  margin-top: 0;\n  font-size: var(--report-monospace-font-size);\n}\n\n.lh-warnings {\n  --item-margin: calc(var(--report-line-height) / 6);\n  color: var(--color-average-secondary);\n  margin: var(--audit-padding-vertical) 0;\n  padding: var(--default-padding)\n    var(--default-padding)\n    var(--default-padding)\n    calc(var(--audit-description-padding-left));\n  background-color: var(--toplevel-warning-background-color);\n}\n.lh-warnings span {\n  font-weight: bold;\n}\n\n.lh-warnings--toplevel {\n  --item-margin: calc(var(--header-line-height) / 4);\n  color: var(--toplevel-warning-text-color);\n  margin-left: auto;\n  margin-right: auto;\n  --content-width-minus-category-padding-sides: calc(var(--report-content-width) - calc(var(--default-padding) * 4) * 2);\n  max-width: var(--content-width-minus-category-padding-sides);\n  padding: var(--toplevel-warning-padding);\n  border-radius: 8px;\n}\n\n.lh-warnings__msg {\n  color: var(--toplevel-warning-message-text-color);\n  margin: 0;\n}\n\n.lh-warnings ul {\n  margin: 0;\n}\n.lh-warnings li {\n  margin: var(--item-margin) 0;\n}\n.lh-warnings li:last-of-type {\n  margin-bottom: 0;\n}\n\n.lh-scores-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.lh-scores-header__solo {\n  padding: 0;\n  border: 0;\n}\n\n/* Gauge */\n\n.lh-gauge__wrapper--pass {\n  color: var(--color-pass-secondary);\n  fill: var(--color-pass);\n  stroke: var(--color-pass);\n}\n\n.lh-gauge__wrapper--average {\n  color: var(--color-average-secondary);\n  fill: var(--color-average);\n  stroke: var(--color-average);\n}\n\n.lh-gauge__wrapper--fail {\n  color: var(--color-fail-secondary);\n  fill: var(--color-fail);\n  stroke: var(--color-fail);\n}\n\n.lh-gauge__wrapper--not-applicable {\n  color: var(--color-not-applicable);\n  fill: var(--color-not-applicable);\n  stroke: var(--color-not-applicable);\n}\n\n.lh-fraction__wrapper .lh-fraction__content::before {\n  content: \'\';\n  height: var(--score-icon-size);\n  width: var(--score-icon-size);\n  margin: var(--score-icon-margin);\n  display: inline-block;\n}\n.lh-fraction__wrapper--pass .lh-fraction__content {\n  color: var(--color-pass-secondary);\n}\n.lh-fraction__wrapper--pass .lh-fraction__background {\n  background-color: var(--color-pass);\n}\n.lh-fraction__wrapper--pass .lh-fraction__content::before {\n  background-color: var(--color-pass);\n  border-radius: 50%;\n}\n.lh-fraction__wrapper--average .lh-fraction__content {\n  color: var(--color-average-secondary);\n}\n.lh-fraction__wrapper--average .lh-fraction__background,\n.lh-fraction__wrapper--average .lh-fraction__content::before {\n  background-color: var(--color-average);\n}\n.lh-fraction__wrapper--fail .lh-fraction__content {\n  color: var(--color-fail);\n}\n.lh-fraction__wrapper--fail .lh-fraction__background {\n  background-color: var(--color-fail);\n}\n.lh-fraction__wrapper--fail .lh-fraction__content::before {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n.lh-fraction__wrapper--null .lh-fraction__content {\n  color: var(--color-gray-700);\n}\n.lh-fraction__wrapper--null .lh-fraction__background {\n  background-color: var(--color-gray-700);\n}\n.lh-fraction__wrapper--null .lh-fraction__content::before {\n  border-radius: 50%;\n  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-700);\n}\n\n.lh-fraction__background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: calc(var(--gauge-circle-size) / 2);\n  opacity: 0.1;\n  z-index: -1;\n}\n\n.lh-fraction__content-wrapper {\n  height: var(--gauge-circle-size);\n  display: flex;\n  align-items: center;\n}\n\n.lh-fraction__content {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(0.3 * var(--gauge-circle-size));\n  line-height: calc(0.4 * var(--gauge-circle-size));\n  width: max-content;\n  min-width: calc(1.5 * var(--gauge-circle-size));\n  padding: calc(0.1 * var(--gauge-circle-size)) calc(0.2 * var(--gauge-circle-size));\n  --score-icon-size: calc(0.21 * var(--gauge-circle-size));\n  --score-icon-margin: 0 calc(0.15 * var(--gauge-circle-size)) 0 0;\n}\n\n.lh-gauge {\n  stroke-linecap: round;\n  width: var(--gauge-circle-size);\n  height: var(--gauge-circle-size);\n}\n\n.lh-category .lh-gauge {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n.lh-gauge-base {\n  opacity: 0.1;\n}\n\n.lh-gauge-arc {\n  fill: none;\n  transform-origin: 50% 50%;\n  animation: load-gauge var(--transition-length) ease forwards;\n  animation-delay: 250ms;\n}\n\n.lh-gauge__svg-wrapper {\n  position: relative;\n  height: var(--gauge-circle-size);\n}\n.lh-category .lh-gauge__svg-wrapper,\n.lh-category .lh-fraction__wrapper {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n/* The plugin badge overlay */\n.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size);\n  height: var(--plugin-badge-size);\n  background-color: var(--plugin-badge-background-color);\n  background-image: var(--plugin-icon-url);\n  background-repeat: no-repeat;\n  background-size: var(--plugin-icon-size);\n  background-position: 58% 50%;\n  content: "";\n  position: absolute;\n  right: -6px;\n  bottom: 0px;\n  display: block;\n  z-index: 100;\n  box-shadow: 0 0 4px rgba(0,0,0,.2);\n  border-radius: 25%;\n}\n.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size-big);\n  height: var(--plugin-badge-size-big);\n}\n\n@keyframes load-gauge {\n  from { stroke-dasharray: 0 352; }\n}\n\n.lh-gauge__percentage {\n  width: 100%;\n  height: var(--gauge-circle-size);\n  position: absolute;\n  font-family: var(--report-font-family-monospace);\n  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);\n  line-height: 0;\n  text-align: center;\n  top: calc(var(--score-container-padding) + var(--gauge-circle-size) / 2);\n}\n\n.lh-category .lh-gauge__percentage {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);\n}\n\n.lh-gauge__wrapper,\n.lh-fraction__wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-decoration: none;\n  padding: var(--score-container-padding);\n\n  --transition-length: 1s;\n\n  /* Contain the layout style paint & layers during animation*/\n  contain: content;\n  will-change: opacity; /* Only using for layer promotion */\n}\n\n.lh-gauge__label,\n.lh-fraction__label {\n  font-size: var(--gauge-label-font-size);\n  font-weight: 500;\n  line-height: var(--gauge-label-line-height);\n  margin-top: 10px;\n  text-align: center;\n  color: var(--report-text-color);\n  word-break: keep-all;\n}\n\n/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */\n.lh-category .lh-gauge__label,\n.lh-category .lh-fraction__label {\n  --gauge-label-font-size: var(--gauge-label-font-size-big);\n  --gauge-label-line-height: var(--gauge-label-line-height-big);\n  margin-top: 14px;\n}\n\n.lh-scores-header .lh-gauge__wrapper,\n.lh-scores-header .lh-fraction__wrapper,\n.lh-scores-header .lh-gauge--pwa__wrapper,\n.lh-sticky-header .lh-gauge__wrapper,\n.lh-sticky-header .lh-fraction__wrapper,\n.lh-sticky-header .lh-gauge--pwa__wrapper {\n  width: var(--gauge-wrapper-width);\n}\n\n.lh-scorescale {\n  display: inline-flex;\n\n  gap: calc(var(--default-padding) * 4);\n  margin: 16px auto 0 auto;\n  font-size: var(--report-font-size-secondary);\n  color: var(--color-gray-700);\n\n}\n\n.lh-scorescale-range {\n  display: flex;\n  align-items: center;\n  font-family: var(--report-font-family-monospace);\n  white-space: nowrap;\n}\n\n.lh-category-header__finalscreenshot .lh-scorescale {\n  border: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.lh-category-header__finalscreenshot .lh-scorescale-range {\n  font-family: unset;\n  font-size: 12px;\n}\n\n.lh-scorescale-wrap {\n  display: contents;\n}\n\n/* Hide category score gauages if it\'s a single category report */\n.lh-header--solo-category .lh-scores-wrapper {\n  display: none;\n}\n\n\n.lh-categories {\n  width: 100%;\n  overflow: hidden;\n}\n\n.lh-category {\n  padding: var(--category-padding);\n  max-width: var(--report-content-width);\n  margin: 0 auto;\n\n  --sticky-header-height: calc(var(--gauge-circle-size-sm) + var(--score-container-padding) * 2);\n  --topbar-plus-sticky-header: calc(var(--topbar-height) + var(--sticky-header-height));\n  scroll-margin-top: var(--topbar-plus-sticky-header);\n\n  /* Faster recalc style & layout of the report. https://web.dev/content-visibility/ */\n  content-visibility: auto;\n  contain-intrinsic-size: 1000px;\n}\n\n.lh-category-wrapper {\n  border-bottom: 1px solid var(--color-gray-200);\n}\n\n.lh-category-wrapper:first-of-type {\n  border-top: 1px solid var(--color-gray-200);\n}\n\n.lh-category-header {\n  margin-bottom: var(--section-padding-vertical);\n}\n\n.lh-category-header .lh-score__gauge {\n  max-width: 400px;\n  width: auto;\n  margin: 0px auto;\n}\n\n.lh-category-header__finalscreenshot {\n  display: grid;\n  grid-template: none / 1fr 1px 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: var(--report-line-height);\n  min-height: 288px;\n  margin-bottom: var(--default-padding);\n}\n\n.lh-final-ss-image {\n  /* constrain the size of the image to not be too large */\n  max-height: calc(var(--gauge-circle-size-big) * 2.8);\n  max-width: calc(var(--gauge-circle-size-big) * 3.5);\n  border: 1px solid var(--color-gray-200);\n  padding: 4px;\n  border-radius: 3px;\n  display: block;\n}\n\n.lh-category-headercol--separator {\n  background: var(--color-gray-200);\n  width: 1px;\n  height: var(--gauge-circle-size-big);\n}\n\n@media screen and (max-width: 780px) {\n  .lh-category-header__finalscreenshot {\n    grid-template: 1fr 1fr / none\n  }\n  .lh-category-headercol--separator {\n    display: none;\n  }\n}\n\n\n/* 964 fits the min-width of the filmstrip */\n@media screen and (max-width: 964px) {\n  .lh-report {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n\n@media print {\n  body {\n    -webkit-print-color-adjust: exact; /* print background colors */\n  }\n  .lh-container {\n    display: block;\n  }\n  .lh-report {\n    margin-left: 0;\n    padding-top: 0;\n  }\n  .lh-categories {\n    margin-top: 0;\n  }\n}\n\n.lh-table {\n  border-collapse: collapse;\n  /* Can\'t assign padding to table, so shorten the width instead. */\n  width: calc(100% - var(--audit-description-padding-left) - var(--stackpack-padding-horizontal));\n  border: 1px solid var(--report-border-color-secondary);\n\n}\n\n.lh-table thead th {\n  font-weight: normal;\n  color: var(--color-gray-600);\n  /* See text-wrapping comment on .lh-container. */\n  word-break: normal;\n}\n\n.lh-row--even {\n  background-color: var(--table-higlight-background-color);\n}\n.lh-row--hidden {\n  display: none;\n}\n\n.lh-table th,\n.lh-table td {\n  padding: var(--default-padding);\n}\n\n.lh-table tr {\n  vertical-align: middle;\n}\n\n/* Looks unnecessary, but mostly for keeping the <th>s left-aligned */\n.lh-table-column--text,\n.lh-table-column--source-location,\n.lh-table-column--url,\n/* .lh-table-column--thumbnail, */\n/* .lh-table-column--empty,*/\n.lh-table-column--code,\n.lh-table-column--node {\n  text-align: left;\n}\n\n.lh-table-column--code {\n  min-width: 100px;\n}\n\n.lh-table-column--bytes,\n.lh-table-column--timespanMs,\n.lh-table-column--ms,\n.lh-table-column--numeric {\n  text-align: right;\n  word-break: normal;\n}\n\n\n\n.lh-table .lh-table-column--thumbnail {\n  width: var(--image-preview-size);\n}\n\n.lh-table-column--url {\n  min-width: 250px;\n}\n\n.lh-table-column--text {\n  min-width: 80px;\n}\n\n/* Keep columns narrow if they follow the URL column */\n/* 12% was determined to be a decent narrow width, but wide enough for column headings */\n.lh-table-column--url + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--ms,\n.lh-table-column--url + .lh-table-column--ms + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--timespanMs {\n  width: 12%;\n}\n\n.lh-text__url-host {\n  display: inline;\n}\n\n.lh-text__url-host {\n  margin-left: calc(var(--report-font-size) / 2);\n  opacity: 0.6;\n  font-size: 90%\n}\n\n.lh-thumbnail {\n  object-fit: cover;\n  width: var(--image-preview-size);\n  height: var(--image-preview-size);\n  display: block;\n}\n\n.lh-unknown pre {\n  overflow: scroll;\n  border: solid 1px var(--color-gray-200);\n}\n\n.lh-text__url > a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.lh-text__url > a:hover {\n  text-decoration: underline dotted #999;\n}\n\n.lh-sub-item-row {\n  margin-left: 20px;\n  margin-bottom: 0;\n  color: var(--color-gray-700);\n}\n.lh-sub-item-row td {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 20px;\n}\n\n/* Chevron\n   https://codepen.io/paulirish/pen/LmzEmK\n */\n.lh-chevron {\n  --chevron-angle: 42deg;\n  /* Edge doesn\'t support transform: rotate(calc(...)), so we define it here */\n  --chevron-angle-right: -42deg;\n  width: var(--chevron-size);\n  height: var(--chevron-size);\n  margin-top: calc((var(--report-line-height) - 12px) / 2);\n}\n\n.lh-chevron__lines {\n  transition: transform 0.4s;\n  transform: translateY(var(--report-line-height));\n}\n.lh-chevron__line {\n stroke: var(--chevron-line-stroke);\n stroke-width: var(--chevron-size);\n stroke-linecap: square;\n transform-origin: 50%;\n transform: rotate(var(--chevron-angle));\n transition: transform 300ms, stroke 300ms;\n}\n\n.lh-expandable-details .lh-chevron__line-right,\n.lh-expandable-details[open] .lh-chevron__line-left {\n transform: rotate(var(--chevron-angle-right));\n}\n\n.lh-expandable-details[open] .lh-chevron__line-right {\n  transform: rotate(var(--chevron-angle));\n}\n\n\n.lh-expandable-details[open]  .lh-chevron__lines {\n transform: translateY(calc(var(--chevron-size) * -1));\n}\n\n.lh-expandable-details[open] {\n  animation: 300ms openDetails forwards;\n  padding-bottom: var(--default-padding);\n}\n\n@keyframes openDetails {\n  from {\n    outline: 1px solid var(--report-background-color);\n  }\n  to {\n   outline: 1px solid;\n   box-shadow: 0 2px 4px rgba(0, 0, 0, .24);\n  }\n}\n\n@media screen and (max-width: 780px) {\n  /* no black outline if we\'re not confident the entire table can be displayed within bounds */\n  .lh-expandable-details[open] {\n    animation: none;\n  }\n}\n\n.lh-expandable-details[open] summary, details.lh-clump > summary {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\ndetails.lh-clump[open] > summary {\n  border-bottom-width: 0;\n}\n\n\n\ndetails .lh-clump-toggletext--hide,\ndetails[open] .lh-clump-toggletext--show { display: none; }\ndetails[open] .lh-clump-toggletext--hide { display: block;}\n\n\n/* Tooltip */\n.lh-tooltip-boundary {\n  position: relative;\n}\n\n.lh-tooltip {\n  position: absolute;\n  display: none; /* Don\'t retain these layers when not needed */\n  opacity: 0;\n  background: #ffffff;\n  white-space: pre-line; /* Render newlines in the text */\n  min-width: 246px;\n  max-width: 275px;\n  padding: 15px;\n  border-radius: 5px;\n  text-align: initial;\n  line-height: 1.4;\n}\n/* shrink tooltips to not be cutoff on left edge of narrow viewports\n   45vw is chosen to be ~= width of the left column of metrics\n*/\n@media screen and (max-width: 535px) {\n  .lh-tooltip {\n    min-width: 45vw;\n    padding: 3vw;\n  }\n}\n\n.lh-tooltip-boundary:hover .lh-tooltip {\n  display: block;\n  animation: fadeInTooltip 250ms;\n  animation-fill-mode: forwards;\n  animation-delay: 850ms;\n  bottom: 100%;\n  z-index: 1;\n  will-change: opacity;\n  right: 0;\n  pointer-events: none;\n}\n\n.lh-tooltip::before {\n  content: "";\n  border: solid transparent;\n  border-bottom-color: #fff;\n  border-width: 10px;\n  position: absolute;\n  bottom: -20px;\n  right: 6px;\n  transform: rotate(180deg);\n  pointer-events: none;\n}\n\n@keyframes fadeInTooltip {\n  0% { opacity: 0; }\n  75% { opacity: 1; }\n  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); pointer-events: auto; }\n}\n\n/* Element screenshot */\n.lh-element-screenshot {\n  position: relative;\n  overflow: hidden;\n  float: left;\n  margin-right: 20px;\n}\n.lh-element-screenshot__content {\n  overflow: hidden;\n}\n.lh-element-screenshot__image {\n  /* Set by ElementScreenshotRenderer.installFullPageScreenshotCssVariable */\n  background-image: var(--element-screenshot-url);\n  outline: 2px solid #777;\n  background-color: white;\n  background-repeat: no-repeat;\n}\n.lh-element-screenshot__mask {\n  position: absolute;\n  background: #555;\n  opacity: 0.8;\n}\n.lh-element-screenshot__element-marker {\n  position: absolute;\n  outline: 2px solid var(--color-lime-400);\n}\n.lh-element-screenshot__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000; /* .lh-topbar is 1000 */\n  background: var(--screenshot-overlay-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n}\n\n.lh-element-screenshot__overlay .lh-element-screenshot {\n  margin-right: 0; /* clearing margin used in thumbnail case */\n  outline: 1px solid var(--color-gray-700);\n}\n\n.lh-screenshot-overlay--enabled .lh-element-screenshot {\n  cursor: zoom-out;\n}\n.lh-screenshot-overlay--enabled .lh-node .lh-element-screenshot {\n  cursor: zoom-in;\n}\n\n\n.lh-meta__items {\n  --meta-icon-size: calc(var(--report-icon-size) * 0.667);\n  padding: var(--default-padding);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-color: var(--env-item-background-color);\n  border-radius: 3px;\n  margin: 0 0 var(--default-padding) 0;\n  font-size: 12px;\n  column-gap: var(--default-padding);\n  color: var(--color-gray-700);\n}\n\n.lh-meta__item {\n  display: block;\n  list-style-type: none;\n  position: relative;\n  padding: 0 0 0 calc(var(--meta-icon-size) + var(--default-padding) * 2);\n  cursor: unset; /* disable pointer cursor from report-icon */\n}\n\n.lh-meta__item.lh-tooltip-boundary {\n  text-decoration: dotted underline var(--color-gray-500);\n  cursor: help;\n}\n\n.lh-meta__item.lh-report-icon::before {\n  position: absolute;\n  left: var(--default-padding);\n  width: var(--meta-icon-size);\n  height: var(--meta-icon-size);\n}\n\n.lh-meta__item.lh-report-icon:hover::before {\n  opacity: 0.7;\n}\n\n.lh-meta__item .lh-tooltip {\n  color: var(--color-gray-800);\n}\n\n.lh-meta__item .lh-tooltip::before {\n  right: auto; /* Set the tooltip arrow to the leftside */\n  left: 6px;\n}\n\n/* Change the grid for narrow viewport. */\n@media screen and (max-width: 640px) {\n  .lh-meta__items {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media screen and (max-width: 535px) {\n  .lh-meta__items {\n    display: block;\n  }\n}\n\n\n/*# sourceURL=report-styles.css */\n', ...r
            }
            }, {"./flow-report-assets.js": 1, fs: 1}], 3: [function (e, t, n) {
                const r = e("./report-assets.js");

                class i {
                    static replaceStrings(e, t) {
                        if (0 === t.length) return e;
                        const n = t[0], r = t.slice(1);
                        return e.split(n.search).map((e => i.replaceStrings(e, r))).join(n.replacement)
                    }

                    static sanitizeJson(e) {
                        return JSON.stringify(e).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
                    }

                    static generateReportHtml(e) {
                        const t = i.sanitizeJson(e), n = r.REPORT_JAVASCRIPT.replace(/<\//g, "\\u003c/");
                        return i.replaceStrings(r.REPORT_TEMPLATE, [{
                            search: "%%LIGHTHOUSE_JSON%%",
                            replacement: t
                        }, {search: "%%LIGHTHOUSE_JAVASCRIPT%%", replacement: n}])
                    }

                    static generateFlowReportHtml(e) {
                        const t = i.sanitizeJson(e);
                        return i.replaceStrings(r.FLOW_REPORT_TEMPLATE, [{
                            search: "%%LIGHTHOUSE_FLOW_JSON%%",
                            replacement: t
                        }, {
                            search: "%%LIGHTHOUSE_FLOW_JAVASCRIPT%%",
                            replacement: r.FLOW_REPORT_JAVASCRIPT
                        }, {
                            search: "/*%%LIGHTHOUSE_FLOW_CSS%%*/",
                            replacement: r.FLOW_REPORT_CSS
                        }, {search: "/*%%LIGHTHOUSE_CSS%%*/", replacement: r.REPORT_CSS}])
                    }

                    static generateReportCSV(e) {
                        const t = e => `"${e.replace(/"/g, '""')}"`, n = e => e.map((e => e.toString())).map(t),
                            r = Object.keys(e.categories).map((t => {
                                const r = [], i = e.categories[t], o = null === i.score ? -1 : i.score;
                                return r.push(n([e.requestedUrl, e.finalUrl, i.title, t + "-score", `Overall ${i.title} Category Score`, "numeric", o])), r.concat(i.auditRefs.map((t => {
                                    const r = e.audits[t.id], o = null === r.score ? -1 : r.score;
                                    return n([e.requestedUrl, e.finalUrl, i.title, r.id, r.title, r.scoreDisplayMode, o])
                                })))
                            }));
                        return [["requestedUrl", "finalUrl", "category", "name", "title", "type", "score"]].concat(...r).map((e => e.join(","))).join("\r\n")
                    }

                    static generateReport(e, t) {
                        const n = Array.isArray(t);
                        "string" == typeof t && (t = [t]);
                        const r = t.map((t => {
                            if ("html" === t) return i.generateReportHtml(e);
                            if ("csv" === t) return i.generateReportCSV(e);
                            if ("json" === t) return JSON.stringify(e, null, 2);
                            throw new Error("Invalid output mode: " + t)
                        }));
                        return n ? r : r[0]
                    }
                }

                t.exports = i
            }, {"./report-assets.js": 2}]
            }, {}, [3])(3)
    })),
    /*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).pako = {})
    }(this, (function (e) {
        var t = (e, t, n, r) => {
            let i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0;
            for (; 0 !== n;) {
                a = n > 2e3 ? 2e3 : n, n -= a;
                do {
                    i = i + t[r++] | 0, o = o + i | 0
                } while (--a);
                i %= 65521, o %= 65521
            }
            return i | o << 16 | 0
        };
        const n = new Uint32Array((() => {
            let e, t = [];
            for (var n = 0; n < 256; n++) {
                e = n;
                for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[n] = e
            }
            return t
        })());
        var r = (e, t, r, i) => {
            const o = n, a = i + r;
            e ^= -1;
            for (let n = i; n < a; n++) e = e >>> 8 ^ o[255 & (e ^ t[n])];
            return -1 ^ e
        };
        var i = function (e, t) {
            let n, r, i, o, a, s, l, c, d, h, p, u, g, m, f, v, b, _, w, y, x, k, E, A;
            const S = e.state;
            n = e.next_in, E = e.input, r = n + (e.avail_in - 5), i = e.next_out, A = e.output, o = i - (t - e.avail_out), a = i + (e.avail_out - 257), s = S.dmax, l = S.wsize, c = S.whave, d = S.wnext, h = S.window, p = S.hold, u = S.bits, g = S.lencode, m = S.distcode, f = (1 << S.lenbits) - 1, v = (1 << S.distbits) - 1;
            e:do {
                u < 15 && (p += E[n++] << u, u += 8, p += E[n++] << u, u += 8), b = g[p & f];
                t:for (; ;) {
                    if (_ = b >>> 24, p >>>= _, u -= _, _ = b >>> 16 & 255, 0 === _) A[i++] = 65535 & b; else {
                        if (!(16 & _)) {
                            if (0 == (64 & _)) {
                                b = g[(65535 & b) + (p & (1 << _) - 1)];
                                continue t
                            }
                            if (32 & _) {
                                S.mode = 12;
                                break e
                            }
                            e.msg = "invalid literal/length code", S.mode = 30;
                            break e
                        }
                        w = 65535 & b, _ &= 15, _ && (u < _ && (p += E[n++] << u, u += 8), w += p & (1 << _) - 1, p >>>= _, u -= _), u < 15 && (p += E[n++] << u, u += 8, p += E[n++] << u, u += 8), b = m[p & v];
                        n:for (; ;) {
                            if (_ = b >>> 24, p >>>= _, u -= _, _ = b >>> 16 & 255, !(16 & _)) {
                                if (0 == (64 & _)) {
                                    b = m[(65535 & b) + (p & (1 << _) - 1)];
                                    continue n
                                }
                                e.msg = "invalid distance code", S.mode = 30;
                                break e
                            }
                            if (y = 65535 & b, _ &= 15, u < _ && (p += E[n++] << u, u += 8, u < _ && (p += E[n++] << u, u += 8)), y += p & (1 << _) - 1, y > s) {
                                e.msg = "invalid distance too far back", S.mode = 30;
                                break e
                            }
                            if (p >>>= _, u -= _, _ = i - o, y > _) {
                                if (_ = y - _, _ > c && S.sane) {
                                    e.msg = "invalid distance too far back", S.mode = 30;
                                    break e
                                }
                                if (x = 0, k = h, 0 === d) {
                                    if (x += l - _, _ < w) {
                                        w -= _;
                                        do {
                                            A[i++] = h[x++]
                                        } while (--_);
                                        x = i - y, k = A
                                    }
                                } else if (d < _) {
                                    if (x += l + d - _, _ -= d, _ < w) {
                                        w -= _;
                                        do {
                                            A[i++] = h[x++]
                                        } while (--_);
                                        if (x = 0, d < w) {
                                            _ = d, w -= _;
                                            do {
                                                A[i++] = h[x++]
                                            } while (--_);
                                            x = i - y, k = A
                                        }
                                    }
                                } else if (x += d - _, _ < w) {
                                    w -= _;
                                    do {
                                        A[i++] = h[x++]
                                    } while (--_);
                                    x = i - y, k = A
                                }
                                for (; w > 2;) A[i++] = k[x++], A[i++] = k[x++], A[i++] = k[x++], w -= 3;
                                w && (A[i++] = k[x++], w > 1 && (A[i++] = k[x++]))
                            } else {
                                x = i - y;
                                do {
                                    A[i++] = A[x++], A[i++] = A[x++], A[i++] = A[x++], w -= 3
                                } while (w > 2);
                                w && (A[i++] = A[x++], w > 1 && (A[i++] = A[x++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (n < r && i < a);
            w = u >> 3, n -= w, u -= w << 3, p &= (1 << u) - 1, e.next_in = n, e.next_out = i, e.avail_in = n < r ? r - n + 5 : 5 - (n - r), e.avail_out = i < a ? a - i + 257 : 257 - (i - a), S.hold = p, S.bits = u
        };
        const o = 15,
            a = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
            s = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
            l = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
            c = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
        var d = (e, t, n, r, i, d, h, p) => {
            const u = p.bits;
            let g, m, f, v, b, _, w = 0, y = 0, x = 0, k = 0, E = 0, A = 0, S = 0, C = 0, z = 0, L = 0, T = null, I = 0;
            const N = new Uint16Array(16), R = new Uint16Array(16);
            let O, M, F, D = null, P = 0;
            for (w = 0; w <= o; w++) N[w] = 0;
            for (y = 0; y < r; y++) N[t[n + y]]++;
            for (E = u, k = o; k >= 1 && 0 === N[k]; k--) ;
            if (E > k && (E = k), 0 === k) return i[d++] = 20971520, i[d++] = 20971520, p.bits = 1, 0;
            for (x = 1; x < k && 0 === N[x]; x++) ;
            for (E < x && (E = x), C = 1, w = 1; w <= o; w++) if (C <<= 1, C -= N[w], C < 0) return -1;
            if (C > 0 && (0 === e || 1 !== k)) return -1;
            for (R[1] = 0, w = 1; w < o; w++) R[w + 1] = R[w] + N[w];
            for (y = 0; y < r; y++) 0 !== t[n + y] && (h[R[t[n + y]]++] = y);
            if (0 === e ? (T = D = h, _ = 19) : 1 === e ? (T = a, I -= 257, D = s, P -= 257, _ = 256) : (T = l, D = c, _ = -1), L = 0, y = 0, w = x, b = d, A = E, S = 0, f = -1, z = 1 << E, v = z - 1, 1 === e && z > 852 || 2 === e && z > 592) return 1;
            for (; ;) {
                O = w - S, h[y] < _ ? (M = 0, F = h[y]) : h[y] > _ ? (M = D[P + h[y]], F = T[I + h[y]]) : (M = 96, F = 0), g = 1 << w - S, m = 1 << A, x = m;
                do {
                    m -= g, i[b + (L >> S) + m] = O << 24 | M << 16 | F | 0
                } while (0 !== m);
                for (g = 1 << w - 1; L & g;) g >>= 1;
                if (0 !== g ? (L &= g - 1, L += g) : L = 0, y++, 0 == --N[w]) {
                    if (w === k) break;
                    w = t[n + h[y]]
                }
                if (w > E && (L & v) !== f) {
                    for (0 === S && (S = E), b += x, A = w - S, C = 1 << A; A + S < k && (C -= N[A + S], !(C <= 0));) A++, C <<= 1;
                    if (z += 1 << A, 1 === e && z > 852 || 2 === e && z > 592) return 1;
                    f = L & v, i[f] = E << 24 | A << 16 | b - d | 0
                }
            }
            return 0 !== L && (i[b + L] = w - S << 24 | 64 << 16 | 0), p.bits = E, 0
        }, h = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        };
        const {
            Z_FINISH: p,
            Z_BLOCK: u,
            Z_TREES: g,
            Z_OK: m,
            Z_STREAM_END: f,
            Z_NEED_DICT: v,
            Z_STREAM_ERROR: b,
            Z_DATA_ERROR: _,
            Z_MEM_ERROR: w,
            Z_BUF_ERROR: y,
            Z_DEFLATED: x
        } = h, k = 12, E = 30, A = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);

        function S() {
            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
        }

        const C = e => {
            if (!e || !e.state) return b;
            const t = e.state;
            return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 1, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(852), t.distcode = t.distdyn = new Int32Array(592), t.sane = 1, t.back = -1, m
        }, z = e => {
            if (!e || !e.state) return b;
            const t = e.state;
            return t.wsize = 0, t.whave = 0, t.wnext = 0, C(e)
        }, L = (e, t) => {
            let n;
            if (!e || !e.state) return b;
            const r = e.state;
            return t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? b : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, z(e))
        }, T = (e, t) => {
            if (!e) return b;
            const n = new S;
            e.state = n, n.window = null;
            const r = L(e, t);
            return r !== m && (e.state = null), r
        };
        let I, N, R = !0;
        const O = e => {
            if (R) {
                I = new Int32Array(512), N = new Int32Array(32);
                let t = 0;
                for (; t < 144;) e.lens[t++] = 8;
                for (; t < 256;) e.lens[t++] = 9;
                for (; t < 280;) e.lens[t++] = 7;
                for (; t < 288;) e.lens[t++] = 8;
                for (d(1, e.lens, 0, 288, I, 0, e.work, {bits: 9}), t = 0; t < 32;) e.lens[t++] = 5;
                d(2, e.lens, 0, 32, N, 0, e.work, {bits: 5}), R = !1
            }
            e.lencode = I, e.lenbits = 9, e.distcode = N, e.distbits = 5
        }, M = (e, t, n, r) => {
            let i;
            const o = e.state;
            return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), r >= o.wsize ? (o.window.set(t.subarray(n - o.wsize, n), 0), o.wnext = 0, o.whave = o.wsize) : (i = o.wsize - o.wnext, i > r && (i = r), o.window.set(t.subarray(n - r, n - r + i), o.wnext), (r -= i) ? (o.window.set(t.subarray(n - r, n), 0), o.wnext = r, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0
        };
        var F = {
            inflateReset: z,
            inflateReset2: L,
            inflateResetKeep: C,
            inflateInit: e => T(e, 15),
            inflateInit2: T,
            inflate: (e, n) => {
                let o, a, s, l, c, h, S, C, z, L, T, I, N, R, F, D, P, U, H, B, V, j, G = 0;
                const $ = new Uint8Array(4);
                let W, q;
                const K = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return b;
                o = e.state, o.mode === k && (o.mode = 13), c = e.next_out, s = e.output, S = e.avail_out, l = e.next_in, a = e.input, h = e.avail_in, C = o.hold, z = o.bits, L = h, T = S, j = m;
                e:for (; ;) switch (o.mode) {
                    case 1:
                        if (0 === o.wrap) {
                            o.mode = 13;
                            break
                        }
                        for (; z < 16;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        if (2 & o.wrap && 35615 === C) {
                            o.check = 0, $[0] = 255 & C, $[1] = C >>> 8 & 255, o.check = r(o.check, $, 2, 0), C = 0, z = 0, o.mode = 2;
                            break
                        }
                        if (o.flags = 0, o.head && (o.head.done = !1), !(1 & o.wrap) || (((255 & C) << 8) + (C >> 8)) % 31) {
                            e.msg = "incorrect header check", o.mode = E;
                            break
                        }
                        if ((15 & C) !== x) {
                            e.msg = "unknown compression method", o.mode = E;
                            break
                        }
                        if (C >>>= 4, z -= 4, V = 8 + (15 & C), 0 === o.wbits) o.wbits = V; else if (V > o.wbits) {
                            e.msg = "invalid window size", o.mode = E;
                            break
                        }
                        o.dmax = 1 << o.wbits, e.adler = o.check = 1, o.mode = 512 & C ? 10 : k, C = 0, z = 0;
                        break;
                    case 2:
                        for (; z < 16;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        if (o.flags = C, (255 & o.flags) !== x) {
                            e.msg = "unknown compression method", o.mode = E;
                            break
                        }
                        if (57344 & o.flags) {
                            e.msg = "unknown header flags set", o.mode = E;
                            break
                        }
                        o.head && (o.head.text = C >> 8 & 1), 512 & o.flags && ($[0] = 255 & C, $[1] = C >>> 8 & 255, o.check = r(o.check, $, 2, 0)), C = 0, z = 0, o.mode = 3;
                    case 3:
                        for (; z < 32;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        o.head && (o.head.time = C), 512 & o.flags && ($[0] = 255 & C, $[1] = C >>> 8 & 255, $[2] = C >>> 16 & 255, $[3] = C >>> 24 & 255, o.check = r(o.check, $, 4, 0)), C = 0, z = 0, o.mode = 4;
                    case 4:
                        for (; z < 16;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        o.head && (o.head.xflags = 255 & C, o.head.os = C >> 8), 512 & o.flags && ($[0] = 255 & C, $[1] = C >>> 8 & 255, o.check = r(o.check, $, 2, 0)), C = 0, z = 0, o.mode = 5;
                    case 5:
                        if (1024 & o.flags) {
                            for (; z < 16;) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            o.length = C, o.head && (o.head.extra_len = C), 512 & o.flags && ($[0] = 255 & C, $[1] = C >>> 8 & 255, o.check = r(o.check, $, 2, 0)), C = 0, z = 0
                        } else o.head && (o.head.extra = null);
                        o.mode = 6;
                    case 6:
                        if (1024 & o.flags && (I = o.length, I > h && (I = h), I && (o.head && (V = o.head.extra_len - o.length, o.head.extra || (o.head.extra = new Uint8Array(o.head.extra_len)), o.head.extra.set(a.subarray(l, l + I), V)), 512 & o.flags && (o.check = r(o.check, a, I, l)), h -= I, l += I, o.length -= I), o.length)) break e;
                        o.length = 0, o.mode = 7;
                    case 7:
                        if (2048 & o.flags) {
                            if (0 === h) break e;
                            I = 0;
                            do {
                                V = a[l + I++], o.head && V && o.length < 65536 && (o.head.name += String.fromCharCode(V))
                            } while (V && I < h);
                            if (512 & o.flags && (o.check = r(o.check, a, I, l)), h -= I, l += I, V) break e
                        } else o.head && (o.head.name = null);
                        o.length = 0, o.mode = 8;
                    case 8:
                        if (4096 & o.flags) {
                            if (0 === h) break e;
                            I = 0;
                            do {
                                V = a[l + I++], o.head && V && o.length < 65536 && (o.head.comment += String.fromCharCode(V))
                            } while (V && I < h);
                            if (512 & o.flags && (o.check = r(o.check, a, I, l)), h -= I, l += I, V) break e
                        } else o.head && (o.head.comment = null);
                        o.mode = 9;
                    case 9:
                        if (512 & o.flags) {
                            for (; z < 16;) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            if (C !== (65535 & o.check)) {
                                e.msg = "header crc mismatch", o.mode = E;
                                break
                            }
                            C = 0, z = 0
                        }
                        o.head && (o.head.hcrc = o.flags >> 9 & 1, o.head.done = !0), e.adler = o.check = 0, o.mode = k;
                        break;
                    case 10:
                        for (; z < 32;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        e.adler = o.check = A(C), C = 0, z = 0, o.mode = 11;
                    case 11:
                        if (0 === o.havedict) return e.next_out = c, e.avail_out = S, e.next_in = l, e.avail_in = h, o.hold = C, o.bits = z, v;
                        e.adler = o.check = 1, o.mode = k;
                    case k:
                        if (n === u || n === g) break e;
                    case 13:
                        if (o.last) {
                            C >>>= 7 & z, z -= 7 & z, o.mode = 27;
                            break
                        }
                        for (; z < 3;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        switch (o.last = 1 & C, C >>>= 1, z -= 1, 3 & C) {
                            case 0:
                                o.mode = 14;
                                break;
                            case 1:
                                if (O(o), o.mode = 20, n === g) {
                                    C >>>= 2, z -= 2;
                                    break e
                                }
                                break;
                            case 2:
                                o.mode = 17;
                                break;
                            case 3:
                                e.msg = "invalid block type", o.mode = E
                        }
                        C >>>= 2, z -= 2;
                        break;
                    case 14:
                        for (C >>>= 7 & z, z -= 7 & z; z < 32;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        if ((65535 & C) != (C >>> 16 ^ 65535)) {
                            e.msg = "invalid stored block lengths", o.mode = E;
                            break
                        }
                        if (o.length = 65535 & C, C = 0, z = 0, o.mode = 15, n === g) break e;
                    case 15:
                        o.mode = 16;
                    case 16:
                        if (I = o.length, I) {
                            if (I > h && (I = h), I > S && (I = S), 0 === I) break e;
                            s.set(a.subarray(l, l + I), c), h -= I, l += I, S -= I, c += I, o.length -= I;
                            break
                        }
                        o.mode = k;
                        break;
                    case 17:
                        for (; z < 14;) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        if (o.nlen = 257 + (31 & C), C >>>= 5, z -= 5, o.ndist = 1 + (31 & C), C >>>= 5, z -= 5, o.ncode = 4 + (15 & C), C >>>= 4, z -= 4, o.nlen > 286 || o.ndist > 30) {
                            e.msg = "too many length or distance symbols", o.mode = E;
                            break
                        }
                        o.have = 0, o.mode = 18;
                    case 18:
                        for (; o.have < o.ncode;) {
                            for (; z < 3;) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            o.lens[K[o.have++]] = 7 & C, C >>>= 3, z -= 3
                        }
                        for (; o.have < 19;) o.lens[K[o.have++]] = 0;
                        if (o.lencode = o.lendyn, o.lenbits = 7, W = {bits: o.lenbits}, j = d(0, o.lens, 0, 19, o.lencode, 0, o.work, W), o.lenbits = W.bits, j) {
                            e.msg = "invalid code lengths set", o.mode = E;
                            break
                        }
                        o.have = 0, o.mode = 19;
                    case 19:
                        for (; o.have < o.nlen + o.ndist;) {
                            for (; G = o.lencode[C & (1 << o.lenbits) - 1], F = G >>> 24, D = G >>> 16 & 255, P = 65535 & G, !(F <= z);) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            if (P < 16) C >>>= F, z -= F, o.lens[o.have++] = P; else {
                                if (16 === P) {
                                    for (q = F + 2; z < q;) {
                                        if (0 === h) break e;
                                        h--, C += a[l++] << z, z += 8
                                    }
                                    if (C >>>= F, z -= F, 0 === o.have) {
                                        e.msg = "invalid bit length repeat", o.mode = E;
                                        break
                                    }
                                    V = o.lens[o.have - 1], I = 3 + (3 & C), C >>>= 2, z -= 2
                                } else if (17 === P) {
                                    for (q = F + 3; z < q;) {
                                        if (0 === h) break e;
                                        h--, C += a[l++] << z, z += 8
                                    }
                                    C >>>= F, z -= F, V = 0, I = 3 + (7 & C), C >>>= 3, z -= 3
                                } else {
                                    for (q = F + 7; z < q;) {
                                        if (0 === h) break e;
                                        h--, C += a[l++] << z, z += 8
                                    }
                                    C >>>= F, z -= F, V = 0, I = 11 + (127 & C), C >>>= 7, z -= 7
                                }
                                if (o.have + I > o.nlen + o.ndist) {
                                    e.msg = "invalid bit length repeat", o.mode = E;
                                    break
                                }
                                for (; I--;) o.lens[o.have++] = V
                            }
                        }
                        if (o.mode === E) break;
                        if (0 === o.lens[256]) {
                            e.msg = "invalid code -- missing end-of-block", o.mode = E;
                            break
                        }
                        if (o.lenbits = 9, W = {bits: o.lenbits}, j = d(1, o.lens, 0, o.nlen, o.lencode, 0, o.work, W), o.lenbits = W.bits, j) {
                            e.msg = "invalid literal/lengths set", o.mode = E;
                            break
                        }
                        if (o.distbits = 6, o.distcode = o.distdyn, W = {bits: o.distbits}, j = d(2, o.lens, o.nlen, o.ndist, o.distcode, 0, o.work, W), o.distbits = W.bits, j) {
                            e.msg = "无效距离设置", o.mode = E;
                            中断
                        }
                        if (o.mode = 20, n === g) 中断 e;
                        案例 20：
                        o.mode = 21；
                    案例 21：
                        如果 (h >= 6 && S >= 258) {
                        e.next_out = c, e.avail_out = S, e.next_in = l, e.avail_in = h, o.hold = C, o.bits = z, i(e, T), c = e.next_out, s = e.output, S = e.avail_out, l = e.next_in, a = e.input, h = e.avail_in, C = o.hold, z = o.bits, o.mode === k && (o.back = -1);
                        break
                    }
                        for (o.back = 0; G = o.lencode[C & (1 << o.lenbits) - 1], F = G >>> 24, D = G >>> 16 & 255, P = 65535 & G, !(F <= z);) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        if (D && 0 == (240 & D)) {
                            for (U = F, H = D, B = P; G = o.lencode[B + ((C & (1 << U + H) - 1) >> U)], F = G >>> 24, D = G >>> 16 & 255, P = 65535 & G, !(U + F <= z);) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            C >>>= U, z -= U, o.back += U
                        }
                        if (C >>>= F, z -= F, o.back += F, o.length = P, 0 === D) {
                            o.mode = 26;
                            break
                        }
                        if (32 & D) {
                            o.back = -1, o.mode = k;
                            break
                        }
                        if (64 & D) {
                            e.msg = "invalid literal/length code", o.mode = E;
                            break
                        }
                        o.extra = 15 & D, o.mode = 22;
                    case 22:
                        if (o.extra) {
                            for (q = o.extra; z < q;) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            o.length += C & (1 << o.extra) - 1, C >>>= o.extra, z -= o.extra, o.back += o.extra
                        }
                        o.was = o.length, o.mode = 23;
                    case 23:
                        for (; G = o.distcode[C & (1 << o.distbits) - 1], F = G >>> 24, D = G >>> 16 & 255, P = 65535 & G, !(F <= z);) {
                            if (0 === h) break e;
                            h--, C += a[l++] << z, z += 8
                        }
                        if (0 == (240 & D)) {
                            for (U = F, H = D, B = P; G = o.distcode[B + ((C & (1 << U + H) - 1) >> U)], F = G >>> 24, D = G >>> 16 & 255, P = 65535 & G, !(U + F <= z);) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            C >>>= U, z -= U, o.back += U
                        }
                        if (C >>>= F, z -= F, o.back += F, 64 & D) {
                            e.msg = "invalid distance code", o.mode = E;
                            break
                        }
                        o.offset = P, o.extra = 15 & D, o.mode = 24;
                    case 24:
                        if (o.extra) {
                            for (q = o.extra; z < q;) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            o.offset += C & (1 << o.extra) - 1, C >>>= o.extra, z -= o.extra, o.back += o.extra
                        }
                        if (o.offset > o.dmax) {
                            e.msg = "invalid distance too far back", o.mode = E;
                            break
                        }
                        o.mode = 25;
                    case 25:
                        if (0 === S) break e;
                        if (I = T - S, o.offset > I) {
                            if (I = o.offset - I, I > o.whave && o.sane) {
                                e.msg = "invalid distance too far back", o.mode = E;
                                break
                            }
                            I > o.wnext ? (I -= o.wnext, N = o.wsize - I) : N = o.wnext - I, I > o.length && (I = o.length), R = o.window
                        } else R = s, N = c - o.offset, I = o.length;
                        I > S && (I = S), S -= I, o.length -= I;
                        do {
                            s[c++] = R[N++]
                        } while (--I);
                        0 === o.length && (o.mode = 21);
                        break;
                    case 26:
                        if (0 === S) break e;
                        s[c++] = o.length, S--, o.mode = 21;
                        休息;
                        案例 27:
                        if (o.wrap) {
                            for (; z < 32;) {
                                if (0 === h) break e;
                                h--, C |= a[l++] << z, z += 8
                            }
                            if (T -= S, e.total_out += T, o.total += T, T && (e.adler = o. check = o.flags ? r(o.check, s, T, c - T) : t(o.check, s, T, c - T)), T = S, (o.flags ? C : A( C)) !== o.check) {
                                e.msg = "不正确的数据检查", o.mode = E;
                                中断
                            }
                            C = 0, z = 0
                        }
                        o.mode = 28;
                    case 28:
                        if (o.wrap && o.flags) {
                            for (; z < 32;) {
                                if (0 === h) break e;
                                h--, C += a[l++] << z, z += 8
                            }
                            if (C !== (4294967295 & o.total)) {
                                e.msg = "incorrect length check", o.mode = E;
                                break
                            }
                            C = 0, z = 0
                        }
                        o.mode = 29;
                    case 29:
                        j = f;
                        break e;
                    case E:
                        j = _;
                        break e;
                    case 31:
                        return w;
                    case 32:
                    default:
                        return b
                }
                return e.next_out = c, e.avail_out = S, e.next_in = l, e.avail_in = h, o.hold = C, o.bits = z, (o.wsize || T !== e.avail_out && o.mode < E && (o.mode < 27 || n !== p)) && M(e, e.output, e.next_out, T - e.avail_out), L -= e.avail_in, T -= e.avail_out, e.total_in += L, e.total_out += T, o.total += T, o.wrap && T && (e.adler = o.check = o.flags ? r(o.check, s, T, e.next_out - T) : t(o.check, s, T, e.next_out - T)), e.data_type = o.bits + (o.last ? 64 : 0) + (o.mode === k ? 128 : 0) + (20 === o.mode || 15 === o.mode ? 256 : 0), (0 === L && 0 === T || n === p) && j === m && (j = y), j
            },
            inflateEnd: e => {
                if (!e || !e.state) return b;
                let t = e.state;
                return t.window && (t.window = null), e.state = null, m
            },
            inflateGetHeader: (e, t) => {
                if (!e || !e.state) return b;
                const n = e.state;
                return 0 == (2 & n.wrap) ? b : (n.head = t, t.done = !1, m)
            },
            inflateSetDictionary: (e, n) => {
                const r = n.length;
                let i, o, a;
                return e && e.state ? (i = e.state, 0 !== i.wrap && 11 !== i.mode ? b : 11 === i.mode && (o = 1, o = t(o, n, r, 0), o !== i.check) ? _ : (a = M(e, n, r, r), a ? (i.mode = 31, w) : (i.havedict = 1, m))) : b
            },
            inflateInfo: "pako inflate (from Nodeca project)"
        };
        const D = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var P = function (e) {
            const t = Array.prototype.slice.call(arguments, 1);
            for (; t.length;) {
                const n = t.shift();
                if (n) {
                    if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                    for (const t in n) D(n, t) && (e[t] = n[t])
                }
            }
            return e
        }, U = e => {
            let t = 0;
            for (let n = 0, r = e.length; n < r; n++) t += e[n].length;
            const n = new Uint8Array(t);
            for (let t = 0, r = 0, i = e.length; t < i; t++) {
                let i = e[t];
                n.set(i, r), r += i.length
            }
            return n
        };
        let H = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (e) {
            H = !1
        }
        const B = new Uint8Array(256);
        for (let e = 0; e < 256; e++) B[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
        B[254] = B[254] = 1;
        var V = e => {
            let t, n, r, i, o, a = e.length, s = 0;
            for (i = 0; i < a; i++) n = e.charCodeAt(i), 55296 == (64512 & n) && i + 1 < a && (r = e.charCodeAt(i + 1), 56320 == (64512 & r) && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
            for (t = new Uint8Array(s), o = 0, i = 0; o < s; i++) n = e.charCodeAt(i), 55296 == (64512 & n) && i + 1 < a && (r = e.charCodeAt(i + 1), 56320 == (64512 & r) && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6, t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n);
            return t
        }, j = (e, t) => {
            let n, r;
            const i = t || e.length, o = new Array(2 * i);
            for (r = 0, n = 0; n < i;) {
                let t = e[n++];
                if (t < 128) {
                    o[r++] = t;
                    continue
                }
                let a = B[t];
                if (a > 4) o[r++] = 65533, n += a - 1; else {
                    for (t &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < i;) t = t << 6 | 63 & e[n++], a--;
                    a > 1 ? o[r++] = 65533 : t < 65536 ? o[r++] = t : (t -= 65536, o[r++] = 55296 | t >> 10 & 1023, o[r++] = 56320 | 1023 & t)
                }
            }
            return ((e, t) => {
                if (t < 65534 && e.subarray && H) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
                let n = "";
                for (let r = 0; r < t; r++) n += String.fromCharCode(e[r]);
                return n
            })(o, r)
        }, G = (e, t) => {
            (t = t || e.length) > e.length && (t = e.length);
            let n = t - 1;
            for (; n >= 0 && 128 == (192 & e[n]);) n--;
            return n < 0 || 0 === n ? t : n + B[e[n]] > t ? n : t
        }, $ = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        };
        var W = function () {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        };
        var q = function () {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        };
        const K = Object.prototype.toString, {
            Z_NO_FLUSH: J,
            Z_FINISH: Y,
            Z_OK: Z,
            Z_STREAM_END: Q,
            Z_NEED_DICT: X,
            Z_STREAM_ERROR: ee,
            Z_DATA_ERROR: te,
            Z_MEM_ERROR: ne
        } = h;

        function re(e) {
            this.options = P({chunkSize: 65536, windowBits: 15, to: ""}, e || {});
            const t = this.options;
            t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new W, this.strm.avail_out = 0;
            让 n = F.inflateInit2(this.strm, t.windowBits);
            if (n !== Z) throw new Error($[n]);
            if (this.header = new q, F.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = V(t.dictionary) : "[object ArrayBuffer]" === K.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = F.inflateSetDictionary(this.strm, t.dictionary), n !== Z))) throw new Error($[n])
        }

        function ie(e, t) {
            const n = new re(t);
            if (n.push(e), n.err) throw n.msg || $[n.err];
            return n.result
        }

        re.prototype.push = function (e, t) {
            const n = this.strm, r = this.options.chunkSize, i = this.options.dictionary;
            let o, a, s;
            if (this.ended) return !1;
            for (a = t === ~~t ? t : !0 === t ? Y : J, "[object ArrayBuffer]" === K.call(e) ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length; ;) {
                for (0 === n.avail_out && (n.output = new Uint8Array(r), n.next_out = 0, n.avail_out = r), o = F.inflate(n, a), o === X && i && (o = F.inflateSetDictionary(n, i), o === Z ? o = F.inflate(n, a) : o === te && (o = X)); n.avail_in > 0 && o === Q && n.state.wrap > 0 && 0 !== e[n.next_in];) F.inflateReset(n), o = F.inflate(n, a);
                switch (o) {
                    case ee:
                    case te:
                    case X:
                    case ne:
                        return this.onEnd(o), this.ended = !0, !1
                }
                if (s = n.avail_out, n.next_out && (0 === n.avail_out || o === Q)) if ("string" === this.options.to) {
                    let e = G(n.output, n.next_out), t = n.next_out - e, i = j(n.output, e);
                    n.next_out = t, n.avail_out = r - t, t && n.output.set(n.output.subarray(e, e + t), 0), this.onData(i)
                } else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
                if (o !== Z || 0 !== s) {
                    if (o === Q) return o = F.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, !0;
                    if (0 === n.avail_in) break
                }
            }
            return !0
        }, re.prototype.onData = function (e) {
            this.chunks.push(e)
        }, re.prototype.onEnd = function (e) {
            e === Z && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = U(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
        };
        var oe = re, ae = ie, se = function (e, t) {
            return (t = t || {}).raw = !0, ie(e, t)
        }, le = ie, ce = h, de = {Inflate: oe, inflate: ae, inflateRaw: se, ungzip: le, constants: ce};
        e.Inflate = oe, e.constants = ce, e.default = de, e.inflate = ae, e.inflateRaw = se, e.ungzip = le, Object.defineProperty(e, "__esModule", {value: !0})
    }));

/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class e {
    constructor(e) {
        this.el = e;
        const t = document.createElement("style");
        if (t.textContent = "\n      #lh-log {\n        position: fixed;\n        background-color: #323232;\n        color: #fff;\n        min-height: 48px;\n        min-width: 288px;\n        padding: 16px 24px;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n        border-radius: 2px;\n        margin: 12px;\n        font-size: 14px;\n        cursor: default;\n        transition: transform 0.3s, opacity 0.3s;\n        transform: translateY(100px);\n        opacity: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 3;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n      }\n      \n      #lh-log.lh-show {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    ", !this.el.parentNode) throw new Error("element needs to be in the DOM");
        this.el.parentNode.insertBefore(t, this.el), this._id = void 0
    }

    log(e, t = !0) {
        this._id && clearTimeout(this._id), this.el.textContent = e, this.el.classList.add("lh-show"), t && (this._id = setTimeout((() => {
            this.el.classList.remove("lh-show")
        }), 7e3))
    }

    warn(e) {
        this.log("Warning: " + e)
    }

    error(e) {
        this.log(e), setTimeout((() => {
            throw new Error(e)
        }), 0)
    }

    hide() {
        this._id && clearTimeout(this._id), this.el.classList.remove("lh-show")
    }
}

var t, n = {exports: {}};
t = n, function () {
    var e;

    function n(t, n) {
        return (e || (e = new Promise((function (e, t) {
            var n = indexedDB.open("keyval-store", 1);
            n.onerror = function () {
                t(n.error)
            }, n.onupgradeneeded = function () {
                n.result.createObjectStore("keyval")
            }, n.onsuccess = function () {
                e(n.result)
            }
        }))), e).then((function (e) {
            return new Promise((function (r, i) {
                var o = e.transaction("keyval", t);
                o.oncomplete = function () {
                    r()
                }, o.onerror = function () {
                    i(o.error)
                }, n(o.objectStore("keyval"))
            }))
        }))
    }

    var r = {
        get: function (e) {
            var t;
            return n("readonly", (function (n) {
                t = n.get(e)
            })).then((function () {
                return t.result
            }))
        }, set: function (e, t) {
            return n("readwrite", (function (n) {
                n.put(t, e)
            }))
        }, delete: function (e) {
            return n("readwrite", (function (t) {
                t.delete(e)
            }))
        }, clear: function () {
            return n("readwrite", (function (e) {
                e.clear()
            }))
        }, keys: function () {
            var e = [ ];
            return n("readonly", (function (t) {
                (t.openKeyCursor || t.openCursor).call(t).onsuccess = function () {
                    this.result && (e.push(this.result.key) , this.result.continue())
                }
            })).then((function () {
                return e
            }))
        }
    };
    t.出口？t.exports = r : self.idbKeyval = r
}();
var r = n.exports;

/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
class i {
    constructor(e) {
        const t = document.querySelector(".drop_zone");
        if (!t) throw new Error("Drag and drop `.drop_zone` element not found in page");
        this._dropZone = t, this._fileHandlerCallback = e, this._dragging = !1, this._addListeners()
    }

    readFile(e) {
        return new Promise(((t, n) => {
            const r = new FileReader;
            r.onload = function (e) {
                const r = e.target && e.target.result;
                r ? t(r) : n("Could not read file")
            }, r.onerror = n, r.readAsText(e)
        }))
    }

    _addListeners() {
        document.addEventListener("mouseleave", (e => {
            this._dragging && this._resetDraggingUI()
        })), document.addEventListener("dragover", (e => {
            e.stopPropagation(), e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy")
        })), document.addEventListener("dragenter", (e => {
            this._dropZone.classList.add("dropping"), this._dragging = !0
        })), document.addEventListener("drop", (e => {
            e.stopPropagation(), e.preventDefault(), this._resetDraggingUI(), e.dataTransfer && this.readFile(e.dataTransfer.files[0]).then((e => {
                this._fileHandlerCallback(e)
            })).catch((e => logger.error(e)))
        }))
    }

    _resetDraggingUI() {
        this._dropZone.classList.remove("dropping"), this._dragging = !1
        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    }
}

var o = function (e, t) {
    return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
        e.__proto__ = t
    } || function (e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    })(e, t)
};

function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
        this.constructor = e
    }

    o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
}

function s(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
    }
    return n
}

function l(e, t, n, r) {
    return new (n || (n = Promise))((function (i, o) {
        function a(e) {
            try {
                l(r.next(e))
            } catch (e) {
                o(e)
            }
        }

        function s(e) {
            try {
                l(r.throw(e))
            } catch (e) {
                o(e)
            }
        }

        function l(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
            }))).then(a, s)
        }

        l((r = r.apply(e, t || [])).next())
    }))
}

function c(e, t) {
    var n, r, i, o, a = {
        label: 0, sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1]
        }, trys: [], ops: []
    };
    return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this
    }), o;

    function s(o) {
        return function (s) {
            return function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a;) try {
                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return a.label++, {value: o[1], done: !1};
                        case 5:
                            a.label++, r = o[1], o = [0];
                            continue;
                        case 7:
                            o = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                a.label = o[1];
                                break
                            }
                            if (6 === o[0] && a.label < i[1]) {
                                a.label = i[1], i = o;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(o);
                                break
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    o = t.call(e, a)
                } catch (e) {
                    o = [6, e], r = 0
                } finally {
                    n = i = 0
                }
                if (5 & o[0]) throw o[1];
                return {value: o[0] ? o[1] : void 0, done: !0}
            }([o, s])
        }
    }
}

function d(e) {
    var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
        next: function () {
            return e && r >= e.length && (e = void 0), {value: e && e[r++], done: !e}
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

函数 h(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    如果 (!n) 返回 e;
    var r, i, o = n.call(e), a = [];
    尝试 {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
    } catch (e) {
        i = {error: e}
    } finally {
        try {
            r && !r.done && (n = o.return) && n.call(o)
        } finally {
            if (i) throw i.error
        }
    }
    return a
}

function p (e, t, n) {
    if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
    return e.concat(r || Array.prototype.slice.call(t))
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u = function () {
    function e() {
        var e = this;
        this.reject = function () {
        }, this.resolve = function () {
        }, this.promise = new Promise((function (t, n) {
            e.resolve = t, e.reject = n
        }))
    }

    return e.prototype.wrapCallback = function (e) {
        var t = this;
        return function (n, r) {
            n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch((function () {
            })), 1 === e.length ? e(n) : e(n, r))
        }
    }, e
}(), g = function (e) {
    function t(n, r, i) {
        var o = e.call(this, r) || this;
        return o.code = n, o.customData = i, o.name = "FirebaseError", Object.setPrototypeOf(o, t.prototype), Error.captureStackTrace && Error.captureStackTrace(o, m.prototype.create), o
    }

    return a(t, e), t
}(Error), m = function () {
    function e(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n
    }

    return e.prototype.create = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], a = o ? f(o, r) : "Error",
            s = this.serviceName + ": " + a + " (" + i + ").", l = new g(i, s, r);
        return l
    }, e
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e, t) {
    return e.replace(v, (function (e, n) {
        var r = t[n];
        return null != r ? String(r) : "<" + n + "?>"
    }))
}

var w, y, v = /\{\$([^}]+)}/g, _ = function () {
    function e(e, t, n) {
        this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }

    return e.prototype.setInstantiationMode = function (e) {
        return this.instantiationMode = e, this
    }, e.prototype.setMultipleInstances = function (e) {
        return this.multipleInstances = e, this
    }, e.prototype.setServiceProps = function (e) {
        return this.serviceProps = e, this
    }, e.prototype.setInstanceCreatedCallback = function (e) {
        return this.onInstanceCreated = e, this
    }, e
}(), b = function () {
    function e(e, t) {
        this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }

    return e.prototype.get = function (e) {
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
            var n = new u;
            if (this.instancesDeferred.set(t, n), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                var r = this.getOrInitializeService({instanceIdentifier: t});
                r && n.resolve(r)
            } catch (e) {
            }
        }
        return this.instancesDeferred.get(t).promise
    }, e.prototype.getImmediate = function (e) {
        var t, n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
            r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
        if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
            if (r) return null;
            throw Error("Service " + this.name + " is not available")
        }
        try {
            return this.getOrInitializeService({instanceIdentifier: n})
        } catch (e) {
            if (r) return null;
            throw e
        }
    }, e.prototype.getComponent = function () {
        return this.component
    }, e.prototype.setComponent = function (e) {
        var t, n;
        if (e.name !== this.name) throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
        if (this.component) throw Error("Component for " + this.name + " has already been provided");
        if (this.component = e, this.shouldAutoInitialize()) {
            if (function (e) {
                return "EAGER" === e.instantiationMode
            }
                /**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */(e)) try {
                this.getOrInitializeService({instanceIdentifier: "[DEFAULT]"})
            } catch (e) {
            }
            try {
                for (var r = d(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
                    var o = h(i.value, 2), a = o[0], s = o[1], l = this.normalizeInstanceIdentifier(a);
                    try {
                        var c = this.getOrInitializeService({instanceIdentifier: l});
                        s.resolve(c)
                    } catch (e) {
                    }
                }
            } catch (e) {
                t = {error: e}
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (t) throw t.error
                }
            }
        }
    }, e.prototype.clearInstance = function (e) {
        void 0 === e && (e = "[DEFAULT]"), this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
    }, e.prototype.delete = function () {
        return l(this, void 0, void 0, (function () {
            var e;
            return c(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return e = Array.from(this.instances.values()), [4, Promise.all(p(p([], h(e.filter((function (e) {
                            return "INTERNAL" in e
                        })).map((function (e) {
                            return e.INTERNAL.delete()
                        })))), h(e.filter((function (e) {
                            return "_delete" in e
                        })).map((function (e) {
                            return e._delete()
                        })))))];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }, e.prototype.isComponentSet = function () {
        return null != this.component
    }, e.prototype.isInitialized = function (e) {
        return void 0 === e && (e = "[DEFAULT]"), this.instances.has(e)
    }, e.prototype.getOptions = function (e) {
        return void 0 === e && (e = "[DEFAULT]"), this.instancesOptions.get(e) || {}
    }, e.prototype.initialize = function (e) {
        var t, n;
        void 0 === e && (e = {});
        var r = e.options, i = void 0 === r ? {} : r, o = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(o)) throw Error(this.name + "(" + o + ") has already been initialized");
        if (!this.isComponentSet()) throw Error("Component " + this.name + " has not been registered yet");
        var a = this.getOrInitializeService({instanceIdentifier: o, options: i});
        try {
            for (var s = d(this.instancesDeferred.entries()), l = s.next(); !l.done; l = s.next()) {
                var c = h(l.value, 2), p = c[0], u = c[1];
                o === this.normalizeInstanceIdentifier(p) && u.resolve(a)
            }
        } catch (e) {
            t = {error: e}
        } finally {
            try {
                l && !l.done && (n = s.return) && n.call(s)
            } finally {
                if (t) throw t.error
            }
        }
        return a
    }, e.prototype.onInit = function (e, t) {
        var n, r = this.normalizeInstanceIdentifier(t),
            i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
        i.add(e), this.onInitCallbacks.set(r, i);
        var o = this.instances.get(r);
        return o && e(o, r), function () {
            i.delete(e)
        }
    }, e.prototype.invokeOnInitCallbacks = function (e, t) {
        var n, r, i = this.onInitCallbacks.get(t);
        if (i) try {
            for (var o = d(i), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                try {
                    s(e, t)
                } catch (e) {
                }
            }
        } catch (e) {
            n = {error: e}
        } finally {
            try {
                a && !a.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
    }, e.prototype.getOrInitializeService = function (e) {
        var t, n = e.instanceIdentifier, r = e.options, i = void 0 === r ? {} : r, o = this.instances.get(n);
        if (!o && this.component && (o = this.component.instanceFactory(this.container, {
            instanceIdentifier: (t = n, "[DEFAULT]" === t ? void 0 : t),
            options: i
        }), this.instances.set(n, o), this.instancesOptions.set(n, i), this.invokeOnInitCallbacks(o, n), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, n, o)
        } catch (e) {
        }
        return o || null
    }, e.prototype.normalizeInstanceIdentifier = function (e) {
        return void 0 === e && (e = "[DEFAULT]"), this.component ? this.component.multipleInstances ? e : "[DEFAULT]" : e
    }, e.prototype.shouldAutoInitialize = function () {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
    }, e
}(), x = function () {
    function e(e) {
        this.name = e, this.providers = new Map
    }

    return e.prototype.addComponent = function (e) {
        var t = this.getProvider(e.name);
        if (t.isComponentSet()) throw new Error("Component " + e.name + " has already been registered with " + this.name);
        t.setComponent(e)
    }, e.prototype.addOrOverwriteComponent = function (e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
    }, e.prototype.getProvider = function (e) {
        if (this.providers.has(e)) return this.providers.get(e);
        var t = new b(e, this);
        return this.providers.set(e, t), t
    }, e.prototype.getProviders = function () {
        return Array.from(this.providers.values())
    }, e
}();

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function k() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
    var r = Array(e), i = 0;
    for (t = 0; t < n; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
    return r
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function (e) {
    e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
}(y || (y = {}));
var E = {debug: y.DEBUG, verbose: y.VERBOSE, info: y.INFO, warn: y.WARN, error: y.ERROR, silent: y.SILENT}, A = y.INFO,
    S = ((w = {})[y.DEBUG] = "log", w[y.VERBOSE] = "log", w[y.INFO] = "info", w[y.WARN] = "warn", w[y.ERROR] = "error", w),
    C = function (e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
            var i = (new Date).toISOString(), o = S[t];
            if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
            console[o].apply(console, k(["[" + i + "]  " + e.name + ":"], n))
        }
    }, I = function () {
        function e(e) {
            this.name = e, this._logLevel = A, this._logHandler = C, this._userLogHandler = null
        }

        return Object.defineProperty(e.prototype, "logLevel", {
            get: function () {
                return this._logLevel
            }, set: function (e) {
                if (!(e in y)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                this._logLevel = e
            }, enumerable: !1, configurable: !0
        }), e.prototype.setLogLevel = function (e) {
            this._logLevel = "string" == typeof e ? E[e] : e
        }, Object.defineProperty(e.prototype, "logHandler", {
            get: function () {
                return this._logHandler
            }, set: function (e) {
                if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                this._logHandler = e
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "userLogHandler", {
            get: function () {
                return this._userLogHandler
            }, set: function (e) {
                this._userLogHandler = e
            }, enumerable: !1, configurable: !0
        }), e.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, k([this, y.DEBUG], e)), this._logHandler.apply(this, k([this, y.DEBUG], e))
        }, e.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, k([this, y.VERBOSE], e)), this._logHandler.apply(this, k([this, y.VERBOSE], e))
        }, e.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, k([this, y.INFO], e)), this._logHandler.apply(this, k([this, y.INFO], e))
        }, e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, k([this, y.WARN], e)), this._logHandler.apply(this, k([this, y.WARN], e))
        }, e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, k([this, y.ERROR], e)), this._logHandler.apply(this, k([this, y.ERROR], e))
        }, e
    }(), T = function (e) {
        function t(n, r, i) {
            var o = e.call(this, r) || this;
            return o.code = n, o.customData = i, o.name = "FirebaseError", Object.setPrototypeOf(o, t.prototype), Error.captureStackTrace && Error.captureStackTrace(o, L.prototype.create), o
        }

        return a(t, e), t
    }(Error), L = function () {
        function e(e, t, n) {
            this.service = e, this.serviceName = t, this.errors = n
        }

        return e.prototype.create = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], a = o ? N(o, r) : "Error",
                s = this.serviceName + ": " + a + " (" + i + ").", l = new T(i, s, r);
            return l
        }, e
    }();

function N(e, t) {
    return e.replace(z, (function (e, n) {
        var r = t[n];
        return null != r ? String(r) : "<" + n + "?>"
    }))
}

var z = /\{\$([^}]+)}/g;

function R(e, t) {
    if (e === t) return !0;
    for (var n = Object.keys(e), r = Object.keys(t), i = 0, o = n; i < o.length; i++) {
        var a = o[i];
        if (!r.includes(a)) return !1;
        var s = e[a], l = t[a];
        if (M(s) && M(l)) {
            if (!R(s, l)) return !1
        } else if (s !== l) return !1
    }
    for (var c = 0, d = r; c < d.length; c++) if (a = d[c], !n.includes(a)) return !1;
    return !0
}

function M(e) {
    return null !== e && "object" == typeof e
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O {
    constructor(e) {
        this.container = e
    }

    getPlatformInfoString() {
        return this.container.getProviders().map((e => {
            if (function (e) {
                const t = e.getComponent();
                return "VERSION" === (null == t ? void 0 : t.type)
            }(e)) {
                const t = e.getImmediate();
                return `${t.library}/${t.version}`
            }
            return null
        })).filter((e => e)).join(" ")
    }
}

const P = new I("@firebase/app"), D = {
    "@firebase/app": "fire-core",
    "@firebase/app-compat": "fire-core-compat",
    "@firebase/analytics": "fire-analytics",
    "@firebase/analytics-compat": "fire-analytics-compat",
    "@firebase/app-check": "fire-app-check",
    "@firebase/app-check-compat": "fire-app-check-compat",
    "@firebase/auth": "fire-auth",
    "@firebase/auth-compat": "fire-auth-compat",
    "@firebase/database": "fire-rtdb",
    "@firebase/database-compat": "fire-rtdb-compat",
    "@firebase/functions": "fire-fn",
    "@firebase/functions-compat": "fire-fn-compat",
    "@firebase/installations": "fire-iid",
    "@firebase/installations-compat": "fire-iid-compat",
    "@firebase/messaging": "fire-fcm",
    "@firebase/messaging-compat": "fire-fcm-compat",
    "@firebase/performance": "fire-perf",
    "@firebase/performance-compat": "fire-perf-compat",
    "@firebase/remote-config": "fire-rc",
    "@firebase/remote-config-compat": "fire-rc-compat",
    "@firebase/storage": "fire-gcs",
    "@firebase/storage-compat": "fire-gcs-compat",
    "@firebase/firestore": "fire-fst",
    "@firebase/firestore-compat": "fire-fst-compat",
    "fire-js": "fire-js",
    firebase: "fire-js-all"
}, F = new Map, U = new Map;

function H(e, t) {
    try {
        e.container.addComponent(t)
    } catch (n) {
        P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
}

function j(e) {
    const t = e.name;
    if (U.has(t)) return P.debug(`There were multiple attempts to register component ${t}.`), !1;
    U.set(t, e);
    for (const t of F.values()) H(t, e);
    return !0
}

function $(e, t) {
    return e.container.getProvider(t)
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V = new L("app", "Firebase", {
    "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function."
});

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B {
    constructor(e, t, n) {
        this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new _("app", (() => this), "PUBLIC"))
    }

    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }

    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = e
    }

    get name() {
        return this.checkDestroyed(), this._name
    }

    get options() {
        return this.checkDestroyed(), this._options
    }

    get config() {
        return this.checkDestroyed(), this._config
    }

    get container() {
        return this._container
    }

    get isDeleted() {
        return this._isDeleted
    }

    set isDeleted(e) {
        this._isDeleted = e
    }

    checkDestroyed() {
        if (this.isDeleted) throw V.create("app-deleted", {appName: this._name})
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e, t, n) {
    var r;
    let i = null !== (r = D[e]) && void 0 !== r ? r : e;
    n && (i += "-" + n);
    const o = i.match(/\s|\//), a = t.match(/\s|\//);
    if (o || a) {
        const e = [`Unable to register library "${i}" with version "${t}":`];
        return o && e.push(`library name "${i}" contains illegal characters (whitespace or "/")`), o && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void P.warn(e.join(" "))
    }
    j(new _(i + "-version", (() => ({library: i, version: t})), "VERSION"))
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;
j(new _("platform-logger", (e => new O(e)), "PRIVATE")), G("@firebase/app", "0.7.0", W), G("fire-js", ""),
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    G("firebase", "9.0.2", "app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var q = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/="
    },
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_."
    },
    HAS_NATIVE_SUPPORT: "function" == typeof atob,
    encodeByteArray: function (e, t) {
        if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
            var o = e[i], a = i + 1 < e.length, s = a ? e[i + 1] : 0, l = i + 2 < e.length, c = l ? e[i + 2] : 0,
                d = o >> 2, h = (3 & o) << 4 | s >> 4, p = (15 & s) << 2 | c >> 6, u = 63 & c;
            l || (u = 64, a || (p = 64)), r.push(n[d], n[h], n[p], n[u])
        }
        return r.join("")
    },
    encodeString: function (e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(function (e) {
            for (var t = [], n = 0, r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r);
                i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
            }
            return t
        }(e), t)
    },
    decodeString: function (e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function (e) {
            for (var t = [], n = 0, r = 0; n < e.length;) {
                var i = e[n++];
                if (i < 128) t[r++] = String.fromCharCode(i); else if (i > 191 && i < 224) {
                    var o = e[n++];
                    t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                } else if (i > 239 && i < 365) {
                    var a = ((7 & i) << 18 | (63 & (o = e[n++])) << 12 | (63 & (s = e[n++])) << 6 | 63 & e[n++]) - 65536;
                    t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a))
                } else {
                    o = e[n++];
                    var s = e[n++];
                    t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & s)
                }
            }
            return t.join("")
        }(this.decodeStringToByteArray(e, t))
    },
    decodeStringToByteArray: function (e, t) {
        this.init_();
        for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length;) {
            var o = n[e.charAt(i++)], a = i < e.length ? n[e.charAt(i)] : 0, s = ++i < e.length ? n[e.charAt(i)] : 64,
                l = ++i < e.length ? n[e.charAt(i)] : 64;
            if (++i, null == o || null == a || null == s || null == l) throw Error();
            var c = o << 2 | a >> 4;
            if (r.push(c), 64 !== s) {
                var d = a << 4 & 240 | s >> 2;
                if (r.push(d), 64 !== l) {
                    var h = s << 6 & 192 | l;
                    r.push(h)
                }
            }
        }
        return r
    },
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
        }
    }
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * 除非适用法律要求或书面同意，否则
 根据许可分发的软件 * 按“原样”分发，
 * 不提供任何保证或任何明示或暗示的条件。
 * 请参阅许可证以了解许可证下的特定语言管理权限和
 * 限制。
 */function K() {
    return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
}

/**
 * @license
 * 版权所有 2017 Google LLC
 *
 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J = function (e) {
    function t(n, r, i) {
        var o = e.call(this, r) || this;
        return o.code = n, o.customData = i, o.name = "FirebaseError", Object.setPrototypeOf(o, t.prototype), Error.captureStackTrace && Error.captureStackTrace(o, X.prototype.create), o
    }

    return a(t, e), t
}(Error), X = function () {
    function e(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n
    }

    return e.prototype.create = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], a = o ? Y(o, r) : "Error",
            s = this.serviceName + ": " + a + " (" + i + ").", l = new J(i, s, r);
        return l
    }, e
}();

function Y(e, t) {
    return e.replace(Z, (function (e, n) {
        var r = t[n];
        return null != r ? String(r) : "<" + n + "?>"
    }))
}

var Z = /\{\$([^}]+)}/g;

function Q(e, t) {
    if (e === t) return !0;
    for (var n = Object.keys(e), r = Object.keys(t), i = 0, o = n; i < o.length; i++) {
        var a = o[i];
        if (!r.includes(a)) return !1;
        var s = e[a], l = t[a];
        if (ee(s) && ee(l)) {
            if (!Q(s, l)) return !1
        } else if (s !== l) return !1
    }
    for (var c = 0, d = r; c < d.length; c++) if (a = d[c], !n.includes(a)) return !1;
    return !0
}

function ee(e) {
    return null !== e && "object" == typeof e
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e) {
    for (var t = [], n = function (e, n) {
        Array.isArray(n) ? n.forEach((function (n) {
            t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
        })) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
    }, r = 0, i = Object.entries(e); r < i.length; r++) {
        var o = i[r];
        n(o[0], o[1])
    }
    return t.length ? "&" + t.join("&") : ""
}

var ne = function () {
    function e(e, t) {
        var n = this;
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then((function () {
            e(n)
        })).catch((function (e) {
            n.error(e)
        }))
    }

    return e.prototype.next = function (e) {
        this.forEachObserver((function (t) {
            t.next(e)
        }))
    }, e.prototype.error = function (e) {
        this.forEachObserver((function (t) {
            t.error(e)
        })), this.close(e)
    }, e.prototype.complete = function () {
        this.forEachObserver((function (e) {
            e.complete()
        })), this.close()
    }, e.prototype.subscribe = function (e, t, n) {
        var r, i = this;
        if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
        void 0 === (r = function (e, t) {
            if ("object" != typeof e || null === e) return !1;
            for (var n = 0, r = ["next", "error", "complete"]; n < r.length; n++) {
                var i = r[n];
                if (i in e && "function" == typeof e[i]) return !0
            }
            return !1
        }(e) ? e : {
            next: e,
            error: t,
            complete: n
        }).next && (r.next = re), void 0 === r.error && (r.error = re), void 0 === r.complete && (r.complete = re);
        var o = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((function () {
            try {
                i.finalError ? r.error(i.finalError) : r.complete()
            } catch (e) {
            }
        })), this.observers.push(r), o
    }, e.prototype.unsubscribeOne = function (e) {
        void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
    }, e.prototype.forEachObserver = function (e) {
        if (!this.finalized) for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
    }, e.prototype.sendOne = function (e, t) {
        var n = this;
        this.task.then((function () {
            if (void 0 !== n.observers && void 0 !== n.observers[e]) try {
                t(n.observers[e])
            } catch (e) {
                "undefined" != typeof console && console.error && console.error(e)
            }
        }))
    }, e.prototype.close = function (e) {
        var t = this;
        this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then((function () {
            t.observers = void 0, t.onNoObservers = void 0
        })))
    }, e
}();

function re() {
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e) {
    return e && e._delegate ? e._delegate : e
}

function oe() {
    return {"dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}
}

const ae = oe,
    se = new X("auth", "Firebase", {"dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),
    le = new I("@firebase/auth");

function ce(e, ...t) {
    le.logLevel <= y.ERROR && le.error("Auth (9.0.0): " + e, ...t)
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e, ...t) {
    throw ue(e, ...t)
}

function he(e, ...t) {
    return ue(e, ...t)
}

function pe(e, t, n) {
    const r = Object.assign(Object.assign({}, ae()), {[t]: n});
    return new X("auth", "Firebase", r).create(t, {appName: e.name})
}

function ue(e, ...t) {
    if ("string" != typeof e) {
        const n = t[0], r = [...t.slice(1)];
        return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r)
    }
    return se.create(e, ...t)
}

function ge(e, t, ...n) {
    if (!e) throw ue(t, ...n)
}

function me(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e;
    throw ce(t), new Error(t)
}

function fe(e, t) {
    e || me(t)
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve = new Map;

function _e(e) {
    fe(e instanceof Function, "Expected a class definition");
    let t = ve.get(e);
    return t ? (fe(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e, ve.set(e, t), t)
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e, t) {
    const n = $(e, "auth");
    if (n.isInitialized()) {
        const e = n.getImmediate();
        if (Q(n.getOptions(), null != t ? t : {})) return e;
        de(e, "already-initialized")
    }
    return n.initialize({options: t})
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we() {
    var e;
    return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
}

function ye() {
    var e;
    return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe() {
    return "undefined" == typeof navigator || !navigator || !("onLine" in navigator) || "boolean" != typeof navigator.onLine || "http:" !== ye() && "https:" !== ye() && ("object" != typeof (e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0) || void 0 === e.id) && !("connection" in navigator) || navigator.onLine;
    var e
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke {
    constructor(e, t) {
        this.shortDelay = e, this.longDelay = t, fe(t > e, "Short delay should be less than long delay!"), this.isMobile = "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K()) || "object" == typeof navigator && "ReactNative" === navigator.product
    }

    get() {
        return xe() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e, t) {
    fe(e.emulator, "Emulator should always be set here");
    const {url: n} = e.emulator;
    return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae {
    static initialize(e, t, n) {
        this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n)
    }

    static fetch() {
        return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : void me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }

    static headers() {
        return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers : void me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }

    static response() {
        return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response : void me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "internal-error",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
}, Ce = new ke(3e4, 6e4);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e, t, n, r, i = {}) {
    return Te(e, i, (() => {
        let i = {}, o = {};
        r && ("GET" === t ? o = r : i = {body: JSON.stringify(r)});
        const a = te(Object.assign({key: e.config.apiKey}, o)).slice(1), s = new (Ae.headers());
        return s.set("Content-Type", "application/json"), s.set("X-Client-Version", e._getSdkClientVersion()), e.languageCode && s.set("X-Firebase-Locale", e.languageCode), Ae.fetch()(Le(e, e.config.apiHost, n, a), Object.assign({
            method: t,
            headers: s,
            referrerPolicy: "no-referrer"
        }, i))
    }))
}

async function Te(e, t, n) {
    e._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, Se), t);
    try {
        const t = new Ne(e), i = await Promise.race([n(), t.promise]);
        t.clearNetworkTimeout();
        const o = await i.json();
        if ("needConfirmation" in o) throw ze(e, "account-exists-with-different-credential", o);
        if (i.ok && !("errorMessage" in o)) return o;
        {
            const t = i.ok ? o.errorMessage : o.error.message, [n, a] = t.split(" : ");
            if ("FEDERATED_USER_ID_ALREADY_LINKED" === n) throw ze(e, "credential-already-in-use", o);
            if ("EMAIL_EXISTS" === n) throw ze(e, "email-already-in-use", o);
            const s = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
            if (a) throw pe(e, s, a);
            de(e, s)
        }
    } catch (t) {
        if (t instanceof J) throw t;
        de(e, "network-request-failed")
    }
}

function Le(e, t, n, r) {
    const i = `${t}${n}?${r}`;
    return e.config.emulator ? Ee(e.config, i) : `${e.config.apiScheme}://${i}`
}

class Ne {
    constructor(e) {
        this.auth = e, this.timer = null, this.promise = new Promise(((e, t) => {
            this.timer = setTimeout((() => t(he(this.auth, "timeout"))), Ce.get())
        }))
    }

    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
}

function ze(e, t, n) {
    const r = {appName: e.name};
    n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
    const i = he(e, t, r);
    return i.customData._tokenResponse = n, i
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e) {
    if (e) try {
        const t = new Date(Number(e));
        if (!isNaN(t.getTime())) return t.toUTCString()
    } catch (e) {
    }
}

function Me(e) {
    return 1e3 * Number(e)
}

function Oe(e) {
    const [t, n, r] = e.split(".");
    if (void 0 === t || void 0 === n || void 0 === r) return ce("JWT malformed, contained fewer than 3 sections"), null;
    try {
        const e = function (e) {
            try {
                return q.decodeString(e, !0)
            } catch (e) {
                console.error("base64Decode failed: ", e)
            }
            return null
        }(n);
        return e ? JSON.parse(e) : (ce("Failed to decode base64 JWT payload"), null)
    } catch (e) {
        return ce("Caught error parsing JWT payload as JSON", e), null
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
    }
}

async function Pe(e, t, n = !1) {
    if (n) return t;
    try {
        return await t
    } catch (t) {
        throw t instanceof J && function ({code: e}) {
            return "auth/user-disabled" === e || "auth/user-token-expired" === e
        }
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t) && e.auth.currentUser === e && await e.auth.signOut(), t
    }
}

class De {
    constructor(e) {
        this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
    }

    _start() {
        this.isRunning || (this.isRunning = !0, this.schedule())
    }

    _stop() {
        this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
    }

    getInterval(e) {
        var t;
        if (e) {
            const e = this.errorBackoff;
            return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
        }
        {
            this.errorBackoff = 3e4;
            const e = (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5;
            return Math.max(0, e)
        }
    }

    schedule(e = !1) {
        if (!this.isRunning) return;
        const t = this.getInterval(e);
        this.timerId = setTimeout((async () => {
            await this.iteration()
        }), t)
    }

    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (e) {
            return void ("auth/network-request-failed" === e.code && this.schedule(!0))
        }
        this.schedule()
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe {
    constructor(e, t) {
        this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
    }

    _initializeTime() {
        this.lastSignInTime = Re(this.lastLoginAt), this.creationTime = Re(this.createdAt)
    }

    _copy(e) {
        this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
    }

    toJSON() {
        return {createdAt: this.createdAt, lastLoginAt: this.lastLoginAt}
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e) {
    var t;
    const n = e.auth, r = await e.getIdToken(), i = await Pe(e, async function (e, t) {
        return Ie(e, "POST", "/v1/accounts:lookup", t)
    }(n, {idToken: r}));
    ge(null == i ? void 0 : i.users.length, n, "internal-error");
    const o = i.users[0];
    e._notifyReloadListener(o);
    const a = (null === (t = o.providerUserInfo) || void 0 === t ? void 0 : t.length) ? o.providerUserInfo.map((e => {
            var {providerId: t} = e, n = s(e, ["providerId"]);
            return {
                providerId: t,
                uid: n.rawId || "",
                displayName: n.displayName || null,
                email: n.email || null,
                phoneNumber: n.phoneNumber || null,
                photoURL: n.photoUrl || null
            }
        })) : [],
        l = (c = e.providerData, d = a, [...c.filter((e => !d.some((t => t.providerId === e.providerId)))), ...d]);
    var c, d;
    const h = e.isAnonymous, p = !(e.email && o.passwordHash || (null == l ? void 0 : l.length)), u = !!h && p, g = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: l,
        metadata: new Fe(o.createdAt, o.lastLoginAt),
        isAnonymous: u
    };
    Object.assign(e, g)
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He {
    constructor() {
        this.refreshToken = null, this.accessToken = null, this.expirationTime = null
    }

    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }

    updateFromServerResponse(e) {
        ge(e.idToken, "internal-error"), ge(void 0 !== e.idToken, "internal-error"), ge(void 0 !== e.refreshToken, "internal-error");
        const t = "expiresIn" in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : function (e) {
            const t = Oe(e);
            return ge(t, "internal-error"), ge(void 0 !== t.exp, "internal-error"), ge(void 0 !== t.iat, "internal-error"), Number(t.exp) - Number(t.iat)
        }(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
    }

    async getToken(e, t = !1) {
        return ge(!this.accessToken || this.refreshToken, e, "user-token-expired"), t || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken
    }

    clearRefreshToken() {
        this.refreshToken = null
    }

    async refresh(e, t) {
        const {accessToken: n, refreshToken: r, expiresIn: i} = await
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            async function (e, t) {
                const n = await Te(e, {}, (() => {
                    const n = te({grant_type: "refresh_token", refresh_token: t}).slice(1), {
                        tokenApiHost: r,
                        apiKey: i
                    } = e.config, o = Le(e, r, "/v1/token", "key=" + i);
                    return Ae.fetch()(o, {
                        method: "POST",
                        headers: {
                            "X-Client-Version": e._getSdkClientVersion(),
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: n
                    })
                }));
                return {accessToken: n.access_token, expiresIn: n.expires_in, refreshToken: n.refresh_token}
            }(e, t);
        this.updateTokensAndExpiration(n, r, Number(i))
    }

    updateTokensAndExpiration(e, t, n) {
        this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * n
    }

    static fromJSON(e, t) {
        const {refreshToken: n, accessToken: r, expirationTime: i} = t, o = new He;
        return n && (ge("string" == typeof n, "internal-error", {appName: e}), o.refreshToken = n), r && (ge("string" == typeof r, "internal-error", {appName: e}), o.accessToken = r), i && (ge("number" == typeof i, "internal-error", {appName: e}), o.expirationTime = i), o
    }

    toJSON() {
        return {refreshToken: this.refreshToken, accessToken: this.accessToken, expirationTime: this.expirationTime}
    }

    _assign(e) {
        this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
    }

    _clone() {
        return Object.assign(new He, this.toJSON())
    }

    _performRefresh() {
        return me("not implemented")
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e, t) {
    ge("string" == typeof e || void 0 === e, "internal-error", {appName: t})
}

class $e {
    constructor(e) {
        var {uid: t, auth: n, stsTokenManager: r} = e, i = s(e, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase", this.emailVerified = !1, this.isAnonymous = !1, this.tenantId = null, this.providerData = [], this.proactiveRefresh = new De(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = n, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.metadata = new Fe(i.createdAt || void 0, i.lastLoginAt || void 0)
    }

    async getIdToken(e) {
        const t = await Pe(this, this.stsTokenManager.getToken(this.auth, e));
        return ge(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
    }

    getIdTokenResult(e) {
        return async function (e, t = !1) {
            const n = ie(e), r = await n.getIdToken(t), i = Oe(r);
            ge(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
            const o = "object" == typeof i.firebase ? i.firebase : void 0, a = null == o ? void 0 : o.sign_in_provider;
            return {
                claims: i,
                token: r,
                authTime: Re(Me(i.auth_time)),
                issuedAtTime: Re(Me(i.iat)),
                expirationTime: Re(Me(i.exp)),
                signInProvider: a || null,
                signInSecondFactor: (null == o ? void 0 : o.sign_in_second_factor) || null
            }
        }(this, e)
    }

    reload() {
        return async function (e) {
            const t = ie(e);
            await Ue(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
        }(this)
    }

    _assign(e) {
        this !== e && (ge(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e => Object.assign({}, e))), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
    }

    _clone(e) {
        return new $e(Object.assign(Object.assign({}, this), {auth: e, stsTokenManager: this.stsTokenManager._clone()}))
    }

    _onReload(e) {
        ge(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
    }

    _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
    }

    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }

    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }

    async _updateTokensIfNecessary(e, t = !1) {
        let n = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await Ue(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this)
    }

    async delete() {
        const e = await this.getIdToken();
        return await Pe(this, async function (e, t) {
            return Ie(e, "POST", "/v1/accounts:delete", t)
        }(this.auth, {idToken: e})), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
    }

    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((e => Object.assign({}, e))),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {apiKey: this.auth.config.apiKey, appName: this.auth.name})
    }

    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }

    静态 _fromJSON(e, t) {
        var n, r, i, o, a, s, l, c;
        const d = null !== (n = t.displayName) && void 0 !== n ？n : void 0,
            h = null !== (r = t.email) && void 0 !== r ? r : void 0,
            p = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
            u = null !== (o = t.photoURL) && void 0 !== o ? o : void 0,
            g = null !== (a = t.tenantId) && void 0 !== a ? a : void 0,
            m = null !== (s = t._redirectEventId) && void 0 !== s ? s : void 0,
            f = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
            v = null !== (c = t.lastLoginAt) && void 0 !== c ? c : 无效 0,
            emailVerified: _,
            isAnonymous: w,
            providerData: y,
            stsTokenManager: x
    } = t;
    ge(b && x, e, "internal-error");
    const k = He.fromJSON(this.name, x);
    ge("string" == typeof b, e, "internal-error"), je(d, e.name), je(h, e.name), ge("boolean" == typeof _, e, "internal-error"), ge("boolean" == typeof w, e, "internal-error"), je(p, e.name), je(u, e.name), je(g, e.name), je(m, e.name), je(f, e.name), je(v, e.name);
    const E = new $e({
        uid: b,
        auth: e,
        email: h,
        emailVerified: _,
        displayName: d,
        isAnonymous: w,
        photoURL: u,
        phoneNumber: p,
        tenantId: g,
        stsTokenManager: k,
        createdAt: f,
        lastLoginAt: v
    });
    return y && Array.isArray(y) && (E.providerData = y.map((e => Object.assign({}, e)))), m && (E._redirectEventId = m), E
}

static async _fromIdTokenResponse(e, t, n = !1) {
    const r = new He;
    r.updateFromServerResponse(t);
    const i = new $e({uid: t.localId, auth: e, stsTokenManager: r, isAnonymous: n});
    return await Ue(i), i
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
}
}

class Ve {
    constructor() {
        this.type = "NONE", this.storage = {}
    }

    async _isAvailable() {
        return !0
    }

    async _set(e, t) {
        this.storage[e] = t
    }

    async _get(e) {
        const t = this.storage[e];
        return void 0 === t ? null : t
    }

    async _remove(e) {
        delete this.storage[e]
    }

    _addListener(e, t) {
    }

    _removeListener(e, t) {
    }
}

Ve.type = "NONE";
const Be = Ve;

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e, t, n) {
    return `firebase:${e}:${t}:${n}`
}

class We {
    constructor(e, t, n) {
        this.persistence = e, this.auth = t, this.userKey = n;
        const {config: r, name: i} = this.auth;
        this.fullUserKey = Ge(this.userKey, r.apiKey, i), this.fullPersistenceKey = Ge("persistence", r.apiKey, i), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }

    setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
    }

    async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? $e._fromJSON(this.auth, e) : null
    }

    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }

    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }

    async setPersistence(e) {
        if (this.persistence === e) return;
        const t = await this.getCurrentUser();
        return await this.removeCurrentUser(), this.persistence = e, t ? this.setCurrentUser(t) : void 0
    }

    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }

    static async create(e, t, n = "authUser") {
        if (!t.length) return new We(_e(Be), e, n);
        const r = (await Promise.all(t.map((async e => {
            if (await e._isAvailable()) return e
        })))).filter((e => e));
        let i = r[0] || _e(Be);
        const o = Ge(n, e.config.apiKey, e.name);
        let a = null;
        for (const n of t) try {
            const t = await n._get(o);
            if (t) {
                const r = $e._fromJSON(e, t);
                n !== i && (a = r), i = n;
                break
            }
        } catch (e) {
        }
        const s = r.filter((e => e._shouldAllowMigration));
        返回 i._shouldAllowMigration && s.length ？(i = s[0], a && await i._set(o, a.toJSON()), await Promise.all(t.map((async e => {
            if (e !== i) try {
                await e._remove(o)
            } catch (e) {
            }
        }))), new We(i, e, n)) : new We(i, e, n)
    }
}

/**
 * @license
 * 版权所有 2020 Google LLC
 *
 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
 * 除非遵守许可，否则您不得使用此文件。
 * 您可以在*
 处获取许可证的副本
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e) {
    const t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
    if (Ye(t)) return "IEMobile";
    if (t.includes("msie") || t.includes("trident/")) return "IE";
    if (t.includes("edge/")) return "Edge";
    if (Ke(t)) return "Firefox";
    if (t.includes("silk/")) return "Silk";
    if (Qe(t)) return "Blackberry";
    if (et(t)) return "Webos";
    if (Je(t)) return "Safari";
    if ((t.includes("chrome/") || Xe(t)) && !t.includes("edge/")) return "Chrome";
    if (Ze(t)) return "Android";
    {
        const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = e.match(t);
        if (2 === (null == n ? void 0 : n.length)) return n[1]
    }
    return "Other"
}

function Ke(e = K()) {
    return /firefox\//i.test(e)
}

function Je(e = K()) {
    const t = e.toLowerCase();
    return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
}

function Xe(e = K()) {
    return /crios\//i.test(e)
}

function Ye(e = K()) {
    return /iemobile/i.test(e)
}

function Ze(e = K()) {
    return /android/i.test(e)
}

function Qe(e = K()) {
    return /blackberry/i.test(e)
}

function et(e = K()) {
    return /webos/i.test(e)
}

function tt(e = K()) {
    return /iphone|ipad|ipod/i.test(e)
}

function nt() {
    return ((e = K()).indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0) && 10 === document.documentMode;
    var e
}

function rt(e = K()) {
    return tt(e) || Ze(e) || et(e) || Qe(e) || /windows phone/i.test(e) || Ye(e)
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e, t = []) {
    let n;
    switch (e) {
        case"Browser":
            n = qe(K());
            break;
        case"Worker":
            n = `${qe(K())}-${e}`;
            break;
        default:
            n = e
    }
    return `${n}/JsCore/9.0.0/${t.length ? t.join(",") : "FirebaseCore-web"}`
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
}

class ot {
    constructor(e, t) {
        this.app = e, this.config = t, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new st(this), this.idTokenSubscription = new st(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = se, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {appVerificationDisabledForTesting: !1}, this.frameworks = [], this.name = e.name, this.clientVersion = t.sdkClientVersion
    }

    _initializeWithPersistence(e, t) {
        return t && (this._popupRedirectResolver = _e(t)), this._initializationPromise = this.queue((async () => {
            var n;
            this._deleted || (this.persistenceManager = await We.create(this, e), this._deleted || ((null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively) && await this._popupRedirectResolver._initialize(this), await this.initializeCurrentUser(t), this._deleted || (this._isInitialized = !0)))
        })), this._initializationPromise
    }

    async _onStorageEvent() {
        if (this._deleted) return;
        const e = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || e ? this.currentUser && e && this.currentUser.uid === e.uid ? (this._currentUser._assign(e), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(e) : void 0
    }

    async initializeCurrentUser(e) {
        var t;
        let n = await this.assertedPersistence.getCurrentUser();
        if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const r = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
                i = null == n ? void 0 : n._redirectEventId, o = await this.tryRedirectSignIn(e);
            r && r !== i || !(null == o ? void 0 : o.user) || (n = o.user)
        }
        return n ? n._redirectEventId ? (ge(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === n._redirectEventId ? this.directlySetCurrentUser(n) : this.reloadAndSetCurrentUserOrClear(n)) : this.reloadAndSetCurrentUserOrClear(n) : this.directlySetCurrentUser(null)
    }

    async tryRedirectSignIn(e) {
        let t = null;
        try {
            t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch (e) {
            await this._setRedirectUser(null)
        }
        return t
    }

    async reloadAndSetCurrentUserOrClear(e) {
        try {
            await Ue(e)
        } catch (e) {
            if ("auth/network-request-failed" !== e.code) return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
    }

    useDeviceLanguage() {
        this.languageCode = function () {
            if ("undefined" == typeof navigator) return null;
            const e = navigator;
            return e.languages && e.languages[0] || e.language || null
        }()
    }

    async _delete() {
        this._deleted = !0
    }

    async updateCurrentUser(e) {
        const t = e ? ie(e) : null;
        return t && ge(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
    }

    async _updateCurrentUser(e) {
        if (!this._deleted) return e && ge(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), this.queue((async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners()
        }))
    }

    async signOut() {
        return (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null)
    }

    setPersistence(e) {
        return this.queue((async () => {
            await this.assertedPersistence.setPersistence(_e(e))
        }))
    }

    _getPersistence() {
        return this.assertedPersistence.persistence.type
    }

    _updateErrorMap(e) {
        this._errorFactory = new X("auth", "Firebase", e())
    }

    onAuthStateChanged(e, t, n) {
        return this.registerStateListener(this.authStateSubscription, e, t, n)
    }

    onIdTokenChanged(e, t, n) {
        return this.registerStateListener(this.idTokenSubscription, e, t, n)
    }

    toJSON() {
        var e;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
        }
    }

    async _setRedirectUser(e, t) {
        const n = await this.getOrInitRedirectPersistenceManager(t);
        return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
    }

    async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
            const t = e && _e(e) || this._popupRedirectResolver;
            ge(t, this, "argument-error"), this.redirectPersistenceManager = await We.create(this, [_e(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }

    async _redirectUserForId(e) {
        var t, n;
        return this._isInitialized && await this.queue((async () => {
        })), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
    }

    async _persistUserIfCurrent(e) {
        if (e === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(e)))
    }

    _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
    }

    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }

    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
    }

    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
    }

    get _currentUser() {
        return this.currentUser
    }

    notifyAuthListeners() {
        var e, t;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
        this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser))
    }

    registerStateListener(e, t, n, r) {
        if (this._deleted) return () => {
        };
        const i = "function" == typeof t ? t : t.next.bind(t),
            o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        return ge(o, this, "internal-error"), o.then((() => i(this.currentUser))), "function" == typeof t ? e.addObserver(t, n, r) : e.addObserver(t)
    }

    async directlySetCurrentUser(e) {
        this.currentUser && this.currentUser !== e && (this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh()), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
    }

    queue(e) {
        return this.operations = this.operations.then(e, e), this.operations
    }

    get assertedPersistence() {
        return ge(this.persistenceManager, this, "internal-error"), this.persistenceManager
    }

    _logFramework(e) {
        e && !this.frameworks.includes(e) && (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = it(this.config.clientPlatform, this._getFrameworks()))
    }

    _getFrameworks() {
        return this.frameworks
    }

    _getSdkClientVersion() {
        return this.clientVersion
    }
}

function at(e) {
    return ie(e)
}

class st {
    constructor(e) {
        var t;
        this.auth = e, this.observer = null, this.addObserver = (t = new ne((e => this.observer = e), undefined)).subscribe.bind(t)
    }

    get next() {
        return ge(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
    }
}

class lt {
    constructor(e, t) {
        this.providerId = e, this.signInMethod = t
    }

    toJSON() {
        return me("not implemented")
    }

    _getIdTokenResponse(e) {
        return me("not implemented")
    }

    _linkToIdToken(e, t) {
        return me("not implemented")
    }

    _getReauthenticationResolver(e) {
        return me("not implemented")
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e, t) {
    return async function (e, t, n, r, i = {}) {
        const o = await Ie(e, t, n, r, i);
        return "mfaPendingCredential" in o && de(e, "multi-factor-auth-required", {serverResponse: o}), o
    }(e, "POST", "/v1/accounts:signInWithIdp", function (e, t) {
        return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {tenantId: e.tenantId}) : t
    }(e, t))
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt extends lt {
    constructor() {
        super(...arguments), this.pendingToken = null
    }

    static _fromParams(e) {
        const t = new dt(e.providerId, e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : de("argument-error"), t
    }

    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }

    static fromJSON(e) {
        const t = "string" == typeof e ? JSON.parse(e) : e, {providerId: n, signInMethod: r} = t,
            i = s(t, ["providerId", "signInMethod"]);
        if (!n || !r) return null;
        const o = new dt(n, r);
        return Object.assign(o, i), o
    }

    _getIdTokenResponse(e) {
        return ct(e, this.buildRequest())
    }

    _linkToIdToken(e, t) {
        const n = this.buildRequest();
        return n.idToken = t, ct(e, n)
    }

    _getReauthenticationResolver(e) {
        const t = this.buildRequest();
        return t.autoCreate = !1, ct(e, t)
    }

    buildRequest() {
        const e = {requestUri: "http://localhost", returnSecureToken: !0};
        if (this.pendingToken) e.pendingToken = this.pendingToken; else {
            const t = {};
            this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = te(t)
        }
        return e
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht {
    constructor(e) {
        this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
    }

    setDefaultLanguage(e) {
        this.defaultLanguageCode = e
    }

    setCustomParameters(e) {
        return this.customParameters = e, this
    }

    getCustomParameters() {
        return this.customParameters
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht {
    constructor() {
        super(...arguments), this.scopes = []
    }

    addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e), this
    }

    getScopes() {
        return [...this.scopes]
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends pt {
    constructor() {
        super("facebook.com")
    }

    static credential(e) {
        return dt._fromParams({providerId: ut.PROVIDER_ID, signInMethod: ut.FACEBOOK_SIGN_IN_METHOD, accessToken: e})
    }

    static credentialFromResult(e) {
        return ut.credentialFromTaggedObject(e)
    }

    static credentialFromError(e) {
        return ut.credentialFromTaggedObject(e.customData || {})
    }

    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e || !("oauthAccessToken" in e)) return null;
        if (!e.oauthAccessToken) return null;
        try {
            return ut.credential(e.oauthAccessToken)
        } catch (e) {
            return null
        }
    }
}

ut.FACEBOOK_SIGN_IN_METHOD = "facebook.com", ut.PROVIDER_ID = "facebook.com";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends pt {
    constructor() {
        super("google.com"), this.addScope("profile")
    }

    static credential(e, t) {
        return dt._fromParams({
            providerId: gt.PROVIDER_ID,
            signInMethod: gt.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: t
        })
    }

    static credentialFromResult(e) {
        return gt.credentialFromTaggedObject(e)
    }

    static credentialFromError(e) {
        return gt.credentialFromTaggedObject(e.customData || {})
    }

    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e) return null;
        const {oauthIdToken: t, oauthAccessToken: n} = e;
        if (!t && !n) return null;
        try {
            return gt.credential(t, n)
        } catch (e) {
            return null
        }
    }
}

gt.GOOGLE_SIGN_IN_METHOD = "google.com", gt.PROVIDER_ID = "google.com";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends pt {
    constructor() {
        super("github.com")
    }

    static credential(e) {
        return dt._fromParams({providerId: mt.PROVIDER_ID, signInMethod: mt.GITHUB_SIGN_IN_METHOD, accessToken: e})
    }

    static credentialFromResult(e) {
        return mt.credentialFromTaggedObject(e)
    }

    static credentialFromError(e) {
        return mt.credentialFromTaggedObject(e .customData || {})
    }

    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e || !("oauthAccessToken" in e)) return null;
        如果（！e.oauthAccessToken）返回null；
        尝试 {
            返回 mt.credential(e.oauthAccessToken)
        } 捕获 (e) {
            返回 null
        }
    }
}

mt.GITHUB_SIGN_IN_METHOD = "github.com", mt.PROVIDER_ID = "github.com";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft extends pt {
    constructor() {
        super("twitter.com")
    }

    static credential(e, t) {
        return dt._fromParams({
            providerId: ft.PROVIDER_ID,
            signInMethod: ft.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: t
        })
    }

    static credentialFromResult(e) {
        return ft.credentialFromTaggedObject(e)
    }

    static credentialFromError(e) {
        return ft.credentialFromTaggedObject(e.customData || {})
    }

    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e) return null;
        常量 {oauthAccessToken: t, oauthTokenSecret: n} = e;
        如果 (!t || !n) 返回空值；
        尝试 {
            返回 ft.credential(t, n)
        } 捕获 (e) {
            返回 null
        }
    }
}

ft.TWITTER_SIGN_IN_METHOD = "twitter.com", ft.PROVIDER_ID = "twitter.com";

/**
 * @license
 * 版权所有 2020 Google LLC
 *
 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
 * 除非遵守许可，否则您不得使用此文件。
 * 您可以在以下网址获取许可证的副本
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt {
    constructor(e) {
        this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
    }

    static async _fromIdTokenResponse(e, t, n, r = !1) {
        const i = await $e._fromIdTokenResponse(e, n, r), o = _t(n);
        return new vt({user: i, providerId: o, _tokenResponse: n, operationType: t})
    }

    static async _forOperation(e, t, n) {
        await e._updateTokensIfNecessary(n, !0);
        const r = _t(n);
        return new vt({user: e, providerId: r, _tokenResponse: n, operationType: t})
    }
}

function _t(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends J {
    constructor(e, t, n, r) {
        var i;
        super(t.code, t.message), this.operationType = n, this.user = r, this.name = "FirebaseError", Object.setPrototypeOf(this, bt.prototype), this.appName = e.name, this.code = t.code, this.tenantId = null !== (i = e.tenantId) && void 0 !== i ? i : void 0, this.serverResponse = t.customData.serverResponse
    }

    static _fromErrorAndOperation(e, t, n, r) {
        return new bt(e, t, n, r)
    }
}

function wt(e, t, n, r) {
    return ("reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n => {
        if ("auth/multi-factor-auth-required" === n.code) throw bt._fromErrorAndOperation(e, n, t, r);
        throw n
    }))
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt {
    constructor(e, t) {
        this.storage = e, this.type = t
    }

    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem("__sak", "1"), this.storage.removeItem("__sak"), Promise.resolve(!0)) : Promise.resolve(!1)
        } catch (e) {
            return Promise.resolve(!1)
        }
    }

    _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
    }

    _get(e) {
        const t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null)
    }

    _remove(e) {
        return this.storage.removeItem(e), Promise.resolve()
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
    }
}

class xt extends yt {
    constructor() {
        super(window.localStorage, "LOCAL"), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function () {
            const e = K();
            return Je(e) || tt(e)
        }() && function () {
            try {
                return !(!window || window === window.top)
            } catch (e) {
                return !1
            }
        }(), this.fallbackToPolling = rt(), this._shouldAllowMigration = !0, this.boundEventHandler = this.onStorageEvent.bind(this)
    }

    forAllChangedKeys(e) {
        for (const t of Object.keys(this.listeners)) {
            const n = this.storage.getItem(t), r = this.localCache[t];
            n !== r && e(t, r, n)
        }
    }

    onStorageEvent(e, t = !1) {
        if (!e.key) return void this.forAllChangedKeys(((e, t, n) => {
            this.notifyListeners(e, n)
        }));
        const n = e.key;
        if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
            const r = this.storage.getItem(n);
            if (e.newValue !== r) null !== e.newValue ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n); else if (this.localCache[n] === e.newValue && !t) return
        }
        const r = () => {
            const e = this.storage.getItem(n);
            (t || this.localCache[n] !== e) && this.notifyListeners(n, e)
        }, i = this.storage.getItem(n);
        nt() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, 10) : r()
    }

    notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n) for (const e of Array.from(n)) e(t ? JSON.parse(t) : t)
    }

    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval((() => {
            this.forAllChangedKeys(((e, t, n) => {
                this.onStorageEvent(new StorageEvent("storage", {key: e, oldValue: t, newValue: n}), !0)
            }))
        }), 1e3)
    }

    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }

    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }

    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }

    _addListener(e, t) {
        0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
    }

    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
    }

    async _set(e, t) {
        await super._set(e, t), this.localCache[e] = JSON.stringify(t)
    }

    async _get(e) {
        const t = await super._get(e);
        return this.localCache[e] = JSON.stringify(t), t
    }

    async _remove(e) {
        await super._remove(e), delete this.localCache[e]
    }
}

xt.type = "LOCAL";
const kt = xt;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends yt {
    constructor() {
        super(window.sessionStorage, "SESSION")
    }

    _addListener(e, t) {
    }

    _removeListener(e, t) {
    }
}

Et.type = "SESSION";
const At = Et;

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St {
    constructor(e) {
        this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
    }

    static _getInstance(e) {
        const t = this.receivers.find((t => t.isListeningto(e)));
        if (t) return t;
        const n = new St(e);
        return this.receivers.push(n), n
    }

    isListeningto(e) {
        return this.eventTarget === e
    }

    async handleEvent(e) {
        const t = e, {eventId: n, eventType: r, data: i} = t.data, o = this.handlersMap[r];
        if (!(null == o ? void 0 : o.size)) return;
        t.ports[0].postMessage({status: "ack", eventId: n, eventType: r});
        const a = Array.from(o).map((async e => e(t.origin, i))), s = await function (e) {
            return Promise.all(e.map((async e => {
                try {
                    return {fulfilled: !0, value: await e}
                } catch (e) {
                    return {fulfilled: !1, reason: e}
                }
            })))
        }(a);
        t.ports[0].postMessage({status: "done", eventId: n, eventType: r, response: s})
    }

    _subscribe(e, t) {
        0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
    }

    _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
    }
}

function Ct(e = "", t = 10) {
    let n = "";
    for (let e = 0; e < t; e++) n += Math.floor(10 * Math.random());
    return e + n
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.receivers = [];

class It {
    constructor(e) {
        this.target = e, this.handlers = new Set
    }

    removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
    }

    async _send(e, t, n = 50) {
        const r = "undefined" != typeof MessageChannel ? new MessageChannel : null;
        if (!r) throw new Error("connection_unavailable");
        let i, o;
        return new Promise(((a, s) => {
            const l = Ct("", 20);
            r.port1.start();
            const c = setTimeout((() => {
                s(new Error("unsupported_event"))
            }), n);
            o = {
                messageChannel: r, onMessage(e) {
                    const t = e;
                    if (t.data.eventId === l) switch (t.data.status) {
                        case"ack":
                            clearTimeout(c), i = setTimeout((() => {
                                s(new Error("timeout"))
                            }), 3e3);
                            break;
                        case"done":
                            clearTimeout(i), a(t.data.response);
                            break;
                        default:
                            clearTimeout(c), clearTimeout(i), s(new Error("invalid_response"))
                    }
                }
            }, this.handlers.add(o), r.port1.addEventListener("message", o.onMessage), this.target.postMessage({
                eventType: e,
                eventId: l,
                data: t
            }, [r.port2])
        })).finally((() => {
            o && this.removeMessageHandler(o)
        }))
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt() {
    return window
}

/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt() {
    return void 0 !== Tt().WorkerGlobalScope && "function" == typeof Tt().importScripts
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt = "firebaseLocalStorageDb";

class zt {
    constructor(e) {
        this.request = e
    }

    toPromise() {
        return new Promise(((e, t) => {
            this.request.addEventListener("success", (() => {
                e(this.request.result)
            })), this.request.addEventListener("error", (() => {
                t(this.request.error)
            }))
        }))
    }
}

function Rt(e, t) {
    return e.transaction(["firebaseLocalStorage"], t ? "readwrite" : "readonly").objectStore("firebaseLocalStorage")
}

function Mt() {
    const e = indexedDB.open(Nt, 1);
    return new Promise(((t, n) => {
        e.addEventListener("error", (() => {
            n(e.error)
        })), e.addEventListener("upgradeneeded", (() => {
            const t = e.result;
            try {
                t.createObjectStore("firebaseLocalStorage", {keyPath: "fbase_key"})
            } catch (e) {
                n(e)
            }
        })), e.addEventListener("success", (async () => {
            const n = e.result;
            n.objectStoreNames.contains("firebaseLocalStorage") ? t(n) : (n.close(), await function () {
                const e = indexedDB.deleteDatabase(Nt);
                return new zt(e).toPromise()
            }(), t(await Mt()))
        }))
    }))
}

async function Ot(e, t, n) {
    const r = Rt(e, !0).put({fbase_key: t, value: n});
    return new zt(r).toPromise()
}

function Pt(e, t) {
    const n = Rt(e, !0).delete(t);
    return new zt(n).toPromise()
}

class Dt {
    constructor() {
        this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {
        }), (() => {
        }))
    }

    async _openDb() {
        return this.db || (this.db = await Mt()), this.db
    }

    async _withRetries(e) {
        let t = 0;
        for (; ;) try {
            const t = await this._openDb();
            return await e(t)
        } catch (e) {
            if (t++ > 3) throw e;
            this.db && (this.db.close(), this.db = void 0)
        }
    }

    async initializeServiceWorkerMessaging() {
        return Lt() ? this.initializeReceiver() : this.initializeSender()
    }

    async initializeReceiver() {
        this.receiver = St._getInstance(Lt() ? self : null), this.receiver._subscribe("keyChanged", (async (e, t) => ({keyProcessed: (await this._poll()).includes(t.key)}))), this.receiver._subscribe("ping", (async (e, t) => ["keyChanged"]))
    }

    async initializeSender() {
        var e, t;
        if (this.activeServiceWorker = await async function () {
            if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
            try {
                return (await navigator.serviceWorker.ready).active
            } catch (e) {
                return null
            }
        }(), !this.activeServiceWorker) return;
        this.sender = new It(this.activeServiceWorker);
        const n = await this.sender._send("ping", {}, 800);
        n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
    }

    async notifyServiceWorker(e) {
        if (this.sender && this.activeServiceWorker && function () {
            var e;
            return (null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === e ? void 0 : e.controller) || null
        }() === this.activeServiceWorker) try {
            await this.sender._send("keyChanged", {key: e}, this.serviceWorkerReceiverAvailable ? 800 : 50)
        } catch (e) {
        }
    }

    async _isAvailable() {
        try {
            if (!indexedDB) return !1;
            const e = await Mt();
            return await Ot(e, "__sak", "1"), await Pt(e, "__sak"), !0
        } catch (e) {
        }
        return !1
    }

    async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
            await e()
        } finally {
            this.pendingWrites--
        }
    }

    async _set(e, t) {
        return this._withPendingWrite((async () => (await this._withRetries((n => Ot(n, e, t))), this.localCache[e] = t, this.notifyServiceWorker(e))))
    }

    async _get(e) {
        const t = await this._withRetries((t => async function (e, t) {
            const n = Rt(e, !1).get(t), r = await new zt(n).toPromise();
            return void 0 === r ? null : r.value
        }(t, e)));
        return this.localCache[e] = t, t
    }

    async _remove(e) {
        return this._withPendingWrite((async () => (await this._withRetries((t => Pt(t, e))), delete this.localCache[e], this.notifyServiceWorker(e))))
    }

    async _poll() {
        const e = await this._withRetries((e => {
            const t = Rt(e, !1).getAll();
            return new zt(t).toPromise()
        }));
        if (!e) return [];
        if (0 !== this.pendingWrites) return [];
        const t = [], n = new Set;
        for (const {
            fbase_key: r,
            value: i
        } of e) n.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(i) && (this.notifyListeners(r, i), t.push(r));
        for (const e of Object.keys(this.localCache)) this.localCache[e] && !n.has(e) && (this.notifyListeners(e, null), t.push(e));
        return t
    }

    notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n) for (const e of Array.from(n)) e(t)
    }

    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
    }

    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }

    _addListener(e, t) {
        0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
    }

    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling()
    }
}

Dt.type = "LOCAL";
const Ft = Dt;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e) {
    return new Promise(((t, n) => {
        const r = document.createElement("script");
        r.setAttribute("src", e), r.onload = t, r.onerror = e => {
            const t = he("internal-error");
            t.customData = e, n(t)
        }, r.type = "text/javascript", r.charset = "UTF-8", function () {
            var e, t;
            return null !== (t = null === (e = document.getElementsByTagName("head")) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : document
        }().appendChild(r)
    }))
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e, t) {
    return t ? _e(t) : (ge(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ke(3e4, 6e4);

class jt extends lt {
    constructor(e) {
        super("custom", "custom"), this.params = e
    }

    _getIdTokenResponse(e) {
        return ct(e, this._buildIdpRequest())
    }

    _linkToIdToken(e, t) {
        return ct(e, this._buildIdpRequest(t))
    }

    _getReauthenticationResolver(e) {
        return ct(e, this._buildIdpRequest())
    }

    _buildIdpRequest(e) {
        const t = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return e && (t.idToken = e), t
    }
}

function $t(e) {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    return async function (e, t, n = !1) {
        const r = "signIn", i = await wt(e, r, t), o = await vt._fromIdTokenResponse(e, r, i);
        return n || await e._updateCurrentUser(o.user), o
    }(e.auth, new jt(e), e.bypassAuthState)
}

function Vt(e) {
    const {auth: t, user: n} = e;
    return ge(n, t, "internal-error"),
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        async function (e, t, n = !1) {
            const {auth: r} = e, i = "reauthenticate";
            try {
                const o = await Pe(e, wt(r, i, t, e), n);
                ge(o.idToken, r, "internal-error");
                const a = Oe(o.idToken);
                ge(a, r, "internal-error");
                const {sub: s} = a;
                return ge(e.uid === s, r, "user-mismatch"), vt._forOperation(e, i, o)
            } catch (e) {
                throw"auth/user-not-found" === (null == e ? void 0 : e.code) && de(r, "user-mismatch"), e
            }
        }(n, new jt(e), e.bypassAuthState)
}

异步函数 Bt(e) {
    const {auth: t, user: n} = e;
    return ge(n, t, "internal-error"), async function (e, t, n = !1) {
        const r = await Pe(e, t._linkToIdToken(e.auth, await e.getIdToken()) , n);
        return vt._forOperation(e, "link", r)
    }(n, new jt(e), e.bypassAuthState)
}

/**
 * @license
 * 版权所有 2020 Google LLC
 *
 * 根据 Apache 许可证 2.0 版获得许可（ “许可证”）；
 * 除非遵守许可，否则您不得使用此文件。
 * 您可以在*
 * http://www.apache.org/licenses/LICENSE-2.0 *
 获得许可证的副本
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt {
    constructor(e, t, n, r, i = !1) {
        this.auth = e, this.resolver = n, this.user = r, this.bypassAuthState = i, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
    }

    execute() {
        return new Promise((async (e, t) => {
            this.pendingPromise = {resolve: e, reject: t};
            try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
            } catch (e) {
                this.reject(e)
            }
        }))
    }

    async onAuthEvent(e) {
        const {urlResponse: t, sessionId: n, postBody: r, tenantId: i, error: o, type: a} = e;
        if (o) return void this.reject(o);
        const s = {
            auth: this.auth,
            requestUri: t,
            sessionId: n,
            tenantId: i || void 0,
            postBody: r || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(a)(s))
        } catch (e) {
            this.reject(e)
        }
    }

    onError(e) {
        this.reject(e)
    }

    getIdpTask(e) {
        switch (e) {
            case"signInViaPopup":
            case"signInViaRedirect":
                return $t;
            case"linkViaPopup":
            case"linkViaRedirect":
                return Bt;
            case"reauthViaPopup":
            case"reauthViaRedirect":
                return Vt;
                默认值：
                de(this.auth, "internal-error")
        }
    }

    resolve(e) {
        fe(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
    }

    reject(e) {
        fe(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
    }

    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer( this), this.pendingPromise = null, this.cleanUp()
        /**
         * @license
         * 版权所有 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
    }
}

const Wt = new ke(2e3, 1e4);

async function qt(e, t, n) {
    const r = at(e);
    !function (e, t, n) {
        if (!(t instanceof ht)) throw ht.name !== t.constructor.name && de(e, "argument-error"), pe(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
    }(e, t);
    const i = Ht(r, n);
    return new Kt(r, "signInViaPopup", t, i).executeNotNull()
}

class Kt extends Gt {
    constructor(e, t, n, r, i) {
        super(e, t, r, i), this.provider = n, this.authWindow = null, this.pollId = null, Kt.currentPopupAction && Kt.currentPopupAction.cancel(), Kt.currentPopupAction = this
    }

    async executeNotNull() {
        const e = await this.execute();
        return ge(e, this.auth, "internal-error"), e
    }

    async onExecution() {
        fe(1 === this.filter.length, "Popup operations only handle one event");
        const e = Ct();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e => {
            this.reject(e)
        })), this.resolver._isIframeWebStorageSupported(this.auth, (e => {
            e || this.reject(he(this.auth, "web-storage-unsupported"))
        })), this.pollUserCancellation()
    }

    get eventId() {
        var e;
        return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
    }

    cancel() {
        this.reject(he(this.auth, "cancelled-popup-request"))
    }

    cleanUp() {
        this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Kt.currentPopupAction = null
    }

    pollUserCancellation() {
        const e = () => {
            var t, n;
            (null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(he(this.auth, "popup-closed-by-user"))
            }), 2e3) : this.pollId = window.setTimeout(e, Wt.get())
        };
        e()
    }
}

Kt.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jt = new Map;

class Xt extends Gt {
    constructor(e, t, n = !1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, n), this.eventId = null
    }

    async execute() {
        let e = Jt.get(this.auth._key());
        if (!e) {
            try {
                const t = await async function (e, t) {
                    const n = function (e) {
                        return Ge("pendingRedirect", e.config.apiKey, e.name)
                    }(t), r = "true" === await Yt(e)._get(n);
                    return await Yt(e)._remove(n), r
                }(this.resolver, this.auth) ? await super.execute() : null;
                e = () => Promise.resolve(t)
            } catch (t) {
                e = () => Promise.reject(t)
            }
            Jt.set(this.auth._key(), e)
        }
        return e()
    }

    async onAuthEvent(e) {
        if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
        if ("unknown" !== e.type) {
            if (e.eventId) {
                const t = await this.auth._redirectUserForId(e.eventId);
                if (t) return this.user = t, super.onAuthEvent(e);
                this.resolve(null)
            }
        } else this.resolve(null)
    }

    async onExecution() {
    }

    cleanUp() {
    }
}

function Yt(e) {
    return _e(e._redirectPersistence)
}

async function Zt(e, t, n = !1) {
    const r = at(e), i = Ht(r, t), o = new Xt(r, i, n), a = await o.execute();
    return a && !n && (delete a.user._redirectEventId, await r._persistUserIfCurrent(a.user), await r._setRedirectUser(null, t)), a
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt {
    constructor(e) {
        this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
    }

    registerConsumer(e) {
        this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
    }

    unregisterConsumer(e) {
        this.consumers.delete(e)
    }

    onEvent(e) {
        if (this.hasEventBeenHandled(e)) return !1;
        let t = !1;
        return this.consumers.forEach((n => {
            this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e))
        })), this.hasHandledPotentialRedirect || !function (e) {
            switch (e.type) {
                case"signInViaRedirect":
                case"linkViaRedirect":
                case"reauthViaRedirect":
                    return !0;
                case"unknown":
                    return tn(e);
                default:
                    return !1
            }
        }
            /**
             * @license
             * 版权所有 2020 Google LLC
             *
             * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
             * 除非遵守许可，否则您不得使用此文件。
             * 您可以在*
             * http://www.apache.org/licenses/LICENSE-2.0
             * *
             获得许可证的副本*
             * 除非适用法律要求或书面同意，否则
             根据许可证分发的软件 * 在“原样”基础，
             * 不提供任何明示或暗示的保证或条件。
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
    }

    sendToConsumer(e, t) {
        var n;
        if (e.error && !tn(e)) {
            const r = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
            t.onError(he(this.auth, r))
        } else t.onAuthEvent(e)
    }

    isEventForConsumer(e, t) {
        const n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
        return t.filter.includes(e.type) && n
    }

    hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(en(e))
    }

    saveEventToCache(e) {
        this.cachedEventUids.add(en(e)), this.lastProcessedEventTime = Date.now()
    }
}

function en(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter((e => e)).join("-")
}

function tn({type: e, error: t}) {
    return "unknown" === e && "auth/no-auth-event" === (null == t ? void 0 : t.code)
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
 * 除非遵守许可，否则您不得使用此文件。
 * 您可以在*
 * http://www.apache.org/licenses/LICENSE-2.0
 * *
 获得许可证的副本*
 * 除非适用法律要求或书面同意，否则
 根据许可证分发的软件 * 在“原样”基础，
 * 不提供任何明示或暗示的保证或条件。
 * 请参阅许可证以了解许可证下的特定语言管理权限和
 * 限制。
 */const nn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, rn = /^https? /;
异步函数 on(e) {

    if (e.config.emulator) return;
    const {authorizedDomains: t} = await async function (e, t = {}) {
        return Ie(e, "GET", "/v1/projects", t)
    }(e);
    for (const n of t) try {
        if (an(n)) return
    } catch (e) {
    }
    de(e, "unauthorized-domain")
}

function an(e) {
    const t = we(), {protocol: n, hostname: r} = new URL(t);
    if (e.startsWith("chrome-extension://")) {
        const i = new URL(e);
        return "" === i.hostname && "" === r ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && i.hostname === r
    }
    if (!rn.test(n)) return !1;
    if (nn.test(e)) return r === e;
    const i = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
}

/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn = new ke(3e4, 6e4);

function ln() {
    const e = Tt().___jsl;
    if (null == e ? void 0 : e.H) for (const t of Object.keys(e.H)) if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP) for (let t = 0; t < e.CP.length; t++) e.CP[t] = null
}

function cn(e) {
    return new Promise(((t, n) => {
        var r, i, o;

        function a() {
            ln(), gapi.load("gapi.iframes", {
                callback: () => {
                    t(gapi.iframes.getContext())
                }, ontimeout: () => {
                    ln(), n(he(e, "network-request-failed"))
                }, timeout: sn.get()
            })
        }

        if (null === (i = null === (r = Tt().gapi) || void 0 === r ? void 0 : r.iframes) || void 0 === i ? void 0 : i.Iframe) t(gapi.iframes.getContext()); else {
            if (!(null === (o = Tt().gapi) || void 0 === o ? void 0 : o.load)) {
                const t = "__iframefcb" + Math.floor(1e6 * Math.random());
                return Tt()[t] = () => {
                    gapi.load ? a() : n(he(e, "network-request-failed"))
                }, Ut("https://apis.google.com/js/api.js?onload=" + t)
            }
            a()
        }
    })).catch((e => {
        throw dn = null, e
    }))
}

let dn = null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn = new ke(5e3, 15e3), pn = {style: {position: "absolute", top: "-100px", width: "1px", height: "1px"}},
    un = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);

function gn(e) {
    const t = e.config;
    ge(t.authDomain, e, "auth-domain-config-required");
    const n = t.emulator ? Ee(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`,
        r = {apiKey: t.apiKey, appName: e.name, v: "9.0.0"}, i = un.get(e.config.apiHost);
    i && (r.eid = i);
    const o = e._getFrameworks();
    return o.length && (r.fw = o.join(",")), `${n}?${te(r).slice(1)}`
}

async function mn(e) {
    const t = await function (e) {
        return dn = dn || cn(e), dn
    }(e), n = Tt().gapi;
    return ge(n, e, "internal-error"), t.open({
        where: document.body,
        url: gn(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: pn,
        dontclear: !0
    }, (t => new Promise((async (n, r) => {
        await t.restyle({setHideOnLeave: !1});
        const i = he(e, "network-request-failed"), o = Tt().setTimeout((() => {
            r(i)
        }), hn.get());

        function a() {
            Tt().clearTimeout(o), n(t)
        }

        t.ping(a).then(a, (() => {
            r(i)
        }))
    }))))
}

/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn = {location: "yes", resizable: "yes", statusbar: "yes", toolbar: "no"};

class vn {
    constructor(e) {
        this.window = e, this.associatedEvent = null
    }

    close() {
        if (this.window) try {
            this.window.close()
        } catch (e) {
        }
    }
}

function _n(e, t, n, r = 500, i = 600) {
    const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
        a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let s = "";
    const l = Object.assign(Object.assign({}, fn), {width: r.toString(), height: i.toString(), top: o, left: a}),
        c = K().toLowerCase();
    n && (s = Xe(c) ? "_blank" : n), Ke(c) && (t = t || "http://localhost", l.scrollbars = "yes");
    const d = Object.entries(l).reduce(((e, [t, n]) => `${e}${t}=${n},`), "");
    if (function (e = K()) {
        var t;
        return tt(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone)
    }(c) && "_self" !== s) return function (e, t) {
        const n = document.createElement("a");
        n.href = e, n.target = t;
        const r = document.createEvent("MouseEvent");
        r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r)
    }
        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * 您可以在*
         * http://www.apache.org/licenses/LICENSE-2.0
         * *
         获得许可证的副本*
         * 除非适用法律要求或书面同意，否则
         根据许可证分发的软件 * 在“原样”基础，
         * 不提供任何明示或暗示的保证或条件。
         * 请参阅许可证以了解许可证下的特定语言管理权限和
         * 限制。
         */(t || "", s), new vn(null);
    常量 h = window.open(t || "", s, d);
    ge(h, e, "弹出窗口被阻止");
    尝试 {
        h.focus()
    } 捕捉 (e) {
    }
    return new vn(h)
}

function bn(e, t, n, r, i, o) {
    ge(e.config.authDomain, e, "auth-domain-config-required"), ge(e.config.apiKey, e, "invalid-api-key");
    const a = {apiKey: e.config.apiKey, appName: e.name, authType: n, redirectUrl: r, v: "9.0.0", eventId: i};
    if (t instanceof ht) {
        t.setDefaultLanguage(e.languageCode), a.providerId = t.providerId || "", function (e) {
            for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
            return !0
        }(t.getCustomParameters()) || (a.customParameters = JSON.stringify(t.getCustomParameters()));
        for (const [e, t] of Object.entries(o || {})) a[e] = t
    }
    if (t instanceof pt) {
        const e = t.getScopes().filter((e => "" !== e));
        e.length > 0 && (a.scopes = e.join(","))
    }
    e.tenantId && (a.tid = e.tenantId);
    const s = a;
    for (const e of Object.keys(s)) void 0 === s[e] && delete s[e];
    return `${function ({config: e}) {
        return e.emulator ? Ee(e, "emulator/auth/handler") : `https://${e.authDomain}/__/auth/handler`
    }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */(e)}?${te(s).slice(1)}`
}

const wn = class {
    constructor() {
        this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = At, this._completeRedirectFn = Zt
    }

    async _openPopup(e, t, n, r) {
        var i;
        return fe(null === (i = this.eventManagers[e._key()]) || void 0 === i ? void 0 : i.manager, "_initialize() not called before _openPopup()"), _n(e, bn(e, t, n, we(), r), Ct())
    }

    async _openRedirect(e, t, n, r) {
        var i;
        return await this._originValidation(e), i = bn(e, t, n, we(), r), Tt().location.href = i, new Promise((() => {
        }))
    }

    _initialize(e) {
        const t = e._key();
        if (this.eventManagers[t]) {
            const {manager: e, promise: n} = this.eventManagers[t];
            return e ? Promise.resolve(e) : (fe(n, "If manager is not set, promise should be"), n)
        }
        const n = this.initAndGetManager(e);
        return this.eventManagers[t] = {promise: n}, n
    }

    async initAndGetManager(e) {
        const t = await mn(e), n = new Qt(e);
        return t.register("authEvent", (t => (ge(null == t ? void 0 : t.authEvent, e, "invalid-auth-event"), {status: n.onEvent(t.authEvent) ? "ACK" : "ERROR"})), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {manager: n}, this.iframes[e._key()] = t, n
    }

    _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send("webStorageSupport", {type: "webStorageSupport"}, (n => {
            var r;
            const i = null === (r = null == n ? void 0 : n[0]) || void 0 === r ? void 0 : r.webStorageSupport;
            void 0 !== i && t(!!i), de(e, "internal-error")
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }

    _originValidation(e) {
        const t = e._key();
        return this.originValidationPromises[t] || (this.originValidationPromises[t] = on(e)), this.originValidationPromises[t]
    }

    get _shouldInitProactively() {
        return rt() || Je() || tt()
    }
};
var yn;

/**
 * @license
 * 版权所有 2020 Google LLC
 *
 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
 * 除非遵守许可，否则您不得使用此文件。
 * 您可以在*
 * http://www.apache.org/licenses/LICENSE-2.0
 * *
 获得许可证的副本*
 * 除非适用法律要求或书面同意，否则
 根据许可证分发的软件 * 在“原样”基础，
 * 不提供任何明示或暗示的保证或条件。
 * 请参阅许可证以了解许可证下的特定语言管理权限和
 * 限制。
 */
类 xn {
    构造函数(e) {
        this.auth = e, this.internalListeners = new Map
    }

    getUid() {
        var e;
        返回 this.assertAuthConfigured(), (null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.uid) || null
    }

    async getToken(e) {
        return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? {accessToken: await this.auth.currentUser.getIdToken(e)} : null
    }

    addAuthTokenListener(e) {
        if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
        常量 t = this.auth.onIdTokenChanged((t => {
            var n;
            e((null === (n = t) || void 0 === n ? void 0 : n.stsTokenManager.accessToken) || null)
        }));
        this.internalListeners.set(e, t), this.updateProactiveRefresh()
    }

    removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const t = this.internalListeners.get(e);
        t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh())
    }

    assertAuthConfigured() {
        ge(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }

    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e = function (e = "[DEFAULT]") {
    常量 t = F.get(e);
    if (!t) throw V.create("no-app", {appName: e});
    return t
}()) {
    const t = $(e, "auth");
    返回 t.isInitialized() ？t.getImmediate() : be(e, {popupRedirectResolver: wn, persistence: [Ft, kt, At]})
}

yn = "Browser", j(new _("auth", ((e, {options: t }) => {
    const n = e.getProvider("app").getImmediate(), {apiKey: r, authDomain: i} = n.options;
    return (e => {
        ge(r && !r.includes( ":"), "invalid-api-key", {appName: e.name}), ge(!(null == i ? void 0 : i.includes(":")), "argument-error", {appName: e.name});
        const n = {
            apiKey: r,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: it(yn)
        }, o = new ot(e, n);
        return function (e, t) {
            const n = (null == t ? void 0 : t.persistence) || [], r = (Array.isArray(n) ? n : [n]).map(_e);
            (null == t ? void 0 : t.errorMap) && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(r, null == t ? void 0 : t.popupRedirectResolver)
        }(o, t), o
    })(n)
}), "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e, t, n) => {
    e.getProvider("auth-internal").initialize()
}))), j(new _("auth-internal", (e => (e => new xn(e))(at(e.getProvider("auth").getImmediate()))), " PRIVATE").setInstantiationMode("EXPLICIT")), G("@firebase/auth", "0.17.2", function (e) {
    switch (yn) {
        case"Node":
            return "node";
        case"ReactNative ":
            return "rn";
        case"Worker":
            return "webworker";
        case"Cordova":
            return "cordova";
            默认:
                return
    }
}());

/**
 * @license 版权所有 2016 The Lighthouse 作者。
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
class En {
    constructor() {
        this._accessToken = null, this._firebaseApp = function (e, t = {}) {
            "object" != typeof t && (t = {name: t});
            const n = Object.assign({name: "[DEFAULT]", automaticDataCollectionEnabled: !1}, t), r = n.name;
            if ("string" != typeof r || !r) throw V.create("bad-app-name", {appName: String(r)});
            const i = F.get(r);
            if (i) {
                if (R(e, i.options) && R(n, i.config)) return i;
                throw V.create("duplicate-app", {appName: r})
            }
            const o = new x(r);
            for (const e of U.values()) o.addComponent(e);
            const a = new B(e, n, o);
            return F.set(r, a), a
        }({
            apiKey: "AIzaSyBQEZMlX6A9B0jJ6PFGcBADbXZG9ogyCmQ",
            authDomain: "lighthouse-chrom-1560304954232.firebaseapp.com",
            projectId: "lighthouse-chrom-1560304954232",
            storageBucket: "lighthouse-chrom-1560304954232.appspot.com",
            messagingSenderId: "89319782509",
            appId: "1:89319782509:web:9ea5d8e149048c7836e764",
            measurementId: "G-7FMYHPW5YC"
        }), this._auth = kn(), this._provider = new mt, this._provider.addScope("gist"), this._ready = Promise.resolve(r.get("accessToken").then((e => {
            e && (this._accessToken = e)
        })))
    }

    async getAccessTokenIfLoggedIn() {
        return await this._ready, this._accessToken
    }

    async getAccessToken() {
        return await this._ready, this._accessToken ? this._accessToken : this.signIn()
    }

    async signIn() {
        const e = await qt(this._auth, this._provider), t = mt.credentialFromResult(e);
        if (!t || !t.accessToken) throw new Error("unexpected credential");
        const n = t.accessToken;
        return this._accessToken = n, await r.set("accessToken", n), n
        /**
         * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
         * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
         * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
         */
    }
}

function An(e, t) {
    const n = t ? new Date(t) : new Date, r = n.toLocaleTimeString("en-US", {hour12: !1}),
        i = n.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"}).split("/");
    return i.unshift(i.pop()), `${e}_${i.join("-")}_${r}`.replace(/[/?<>\\:*|"]/g, "-")
}

var Sn = {
    getLhrFilenamePrefix: function (e) {
        return An(new URL(e.finalUrl).hostname, e.fetchTime)
    }, getFilenamePrefix: An
};

/**
 * @license Copyright 2016 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
class Cn {
    constructor() {
        this._auth = new En, this._saving = !1
    }

    static get LH_JSON_EXT() {
        return ".lighthouse.report.json"
    }

    getFirebaseAuth() {
        return this._auth
    }

    async createGist(e) {
        if (this._saving) throw new Error("Save already in progress");
        logger.log("Saving report to GitHub...", !1), this._saving = !0;
        try {
            const t = await this._auth.getAccessToken(), n = {
                description: "Lighthouse json report",
                public: !1,
                files: {
                    [`${Sn.getLhrFilenamePrefix({
                        finalUrl: e.finalUrl,
                        fetchTime: e.fetchTime
                    })}${Cn.LH_JSON_EXT}`]: {content: JSON.stringify(e)}
                }
            }, r = new Request("https://api.github.com/gists", {
                method: "POST",
                headers: new Headers({Authorization: "token " + t}),
                body: JSON.stringify(n)
            }), i = await fetch(r), o = await i.json();
            if (o.id) return logger.log("Saved!"), o.id;
            throw new Error("Error: " + JSON.stringify(o))
        } finally {
            this._saving = !1
        }
    }

    getGistFileContentAsJson(e) {
        return logger.log("Fetching report from GitHub...", !1), this._auth.getAccessTokenIfLoggedIn().then((t => {
            const n = new Headers;
            return t && n.set("Authorization", "token " + t), r.get(e).then((t => (t && t.etag && n.set("If-None-Match", t.etag), fetch("https://api.github.com/gists/" + e, {headers: n}).then((n => {
                const i = Number(n.headers.get("X-RateLimit-Remaining")),
                    o = Number(n.headers.get("X-RateLimit-Limit"));
                if (i < 10 && logger.warn(`Approaching GitHub's rate limit. ${o - i}/${o} requests used. Consider signing in to increase this limit.`), !n.ok) {
                    if (304 === n.status) return Promise.resolve(t);
                    throw 404 === n.status && r.delete(e), new Error(n.status + " fetching gist")
                }
                const a = n.headers.get("ETag");
                return n.json().then((t => {
                    const n = Object.keys(t.files);
                    let r = n.find((e => e.endsWith(Cn.LH_JSON_EXT)));
                    if (r || (r = n.find((e => e.endsWith(".json")))), !r) throw new Error(`Failed to find a Lighthouse report (*${Cn.LH_JSON_EXT}) in gist ${e}`);
                    const i = t.files[r];
                    if (i.truncated) return fetch(i.raw_url).then((e => e.json())).then((e => ({etag: a, content: e})));
                    const o = JSON.parse(i.content);
                    return {etag: a, content: o}
                }))
            })))))
        })).then((t => r.set(e, t).then((e => (logger.hide(), t.content)))))
        /**
         * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
         * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
         * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
         */
    }
}

const In = ["performance", "accessibility", "seo", "best-practices", "pwa"];

class Tn {
    fetchPSI(e) {
        const t = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
        for (let [n, r] of Object.entries(e)) Array.isArray(r) || ("策略" === n && (r = r || "移动"), void 0 !== r && t.searchParams.append(n, r));
        for (const n of e.category || In) t.searchParams.append("category", n);
        return t.searchParams.append("key", "AIzaSyAjcDRNN9CX9dCazhqI4lGR7yyQbkd_oYE"), fetch(t.href).then((e => e.json()))
        /**
         * @license
         * 版权所有 2017 The Lighthouse Authors。版权所有。
         *
         * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
         * You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS-IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
    }
}

const Ln = {label: "pass", minScore: .9}, Nn = {label: "average", minScore: .5}, zn = {label: "fail"},
    Rn = {label: "error"},
    Mn = ["com", "co", "gov", "edu", "ac", "org", "go", "gob", "or", "net", "in", "ne", "nic", "gouv", "web", "spb", "blog", "jus", "kiev", "mil", "wi", "qc", "ca", "bel", "on"];

class On {
    static i18n = null;

    static get PASS_THRESHOLD() {
        return .9
    }

    static get MS_DISPLAY_VALUE() {
        return "%10d ms"
    }

    static prepareReportResult(e) {
        const t = JSON.parse(JSON.stringify(e));
        t.configSettings.locale || (t.configSettings.locale = "en"), t.configSettings.formFactor || (t.configSettings.formFactor = t.configSettings.emulatedFormFactor);
        for (const e of Object.values(t.audits)) if ("not_applicable" !== e.scoreDisplayMode && "not-applicable" !== e.scoreDisplayMode || (e.scoreDisplayMode = "notApplicable"), e.details && (void 0 !== e.details.type && "diagnostic" !== e.details.type || (e.details.type = "debugdata"), "filmstrip" === e.details.type)) for (const t of e.details.items) t.data.startsWith("data:image/jpeg;base64,") || (t.data = "data:image/jpeg;base64," + t.data);
        if ("object" != typeof t.categories) throw new Error("No categories provided.");
        const n = new Map, [r] = t.lighthouseVersion.split(".").map(Number), i = t.categories.performance;
        if (r < 9 && i) {
            t.categoryGroups || (t.categoryGroups = {}), t.categoryGroups.hidden = {title: ""};
            for (const e of i.auditRefs) e.group ? ["load-opportunities", "diagnostics"].includes(e.group) && delete e.group : e.group = "hidden"
        }
        for (const e of Object.values(t.categories)) e.auditRefs.forEach((e => {
            e.relevantAudits && e.relevantAudits.forEach((t => {
                const r = n.get(t) || [];
                r.push(e), n.set(t, r)
            }))
        })), e.auditRefs.forEach((e => {
            const r = t.audits[e.id];
            e.result = r, n.has(e.id) && (e.relevantMetrics = n.get(e.id)), t.stackPacks && t.stackPacks.forEach((t => {
                t.descriptions[e.id] && (e.stackPacks = e.stackPacks || [], e.stackPacks.push({
                    title: t.title,
                    iconDataURL: t.iconDataURL,
                    description: t.descriptions[e.id]
                }))
            }))
        }));
        return t
    }

    static showAsPassed(e) {
        switch (e.scoreDisplayMode) {
            case"manual":
            case"notApplicable":
                return !0;
            case"error":
            case"informative":
                return !1;
            case"numeric":
            case"binary":
            default:
                return Number(e.score) >= Ln.minScore
        }
    }

    static calculateRating(e, t) {
        if ("manual" === t || "notApplicable" === t) return Ln.label;
        if ("error" === t) return Rn.label;
        if (null === e) return zn.label;
        let n = zn.label;
        return e >= Ln.minScore ? n = Ln.label : e >= Nn.minScore && (n = Nn.label), n
    }

    static splitMarkdownCodeSpans(e) {
        const t = [], n = e.split(/`(.*?)`/g);
        for (let e = 0; e < n.length; e++) {
            const r = n[e];
            if (!r) continue;
            const i = e % 2 != 0;
            t.push({isCode: i, text: r})
        }
        return t
    }

    static splitMarkdownLink(e) {
        const t = [], n = e.split(/\[([^\]]+?)\]\((https?:\/\/.*?)\)/g);
        for (; n.length;) {
            const [e, r, i] = n.splice(0, 3);
            e && t.push({isLink: !1, text: e}), r && i && t.push({isLink: !0, text: r, linkHref: i})
        }
        return t
    }

    static getURLDisplayName(e, t) {
        const n = void 0 !== (t = t || {
                numPathParts: void 0,
                preserveQuery: void 0,
                preserveHost: void 0
            }).numPathParts ? t.numPathParts : 2, r = void 0 === t.preserveQuery || t.preserveQuery,
            i = t.preserveHost || !1;
        让o;
        if ("about:" === e.protocol || "data:" === e.protocol) o = e.href; 否则 {
            o = e.pathname;
            const t = o.split("/").filter((e => e.length));
            n && t.length > n && (o = "鈥 " + t.slice(-1 * n).join("/")), i && (o = `${e.host}/${o .replace(/^\//, "")}`), r && (o = `${o}${e.search}`)
        }
        if (o = o.replace(/([a-f0- 9]{7})[a-f0-9]{13}[a-f0-9]*/g, "$1"), o = o.replace(/([a-zA-Z0-9 -_]{9})(?=.*[az])(?=.*[AZ])(?=.*[0-9])[a-zA-Z0-9-_]{10, }/g, "$1"), o = o.replace(/(\d{3})\d{6,}/g, "$1"), o = o.replace(/\u2026+ /g, "鈥 "), o.length > 64 && o.includes("?"
            const e = o.lastIndexOf(".");
        o = e >= 0 ? o.slice(0, 63 - (o.length - e)) + "鈥�" + o.slice(e) : o.slice(0, 63) + "鈥�"
    }
    return o
}

static parseURL(e) {
    const t = new URL(e);
    return {file: On.getURLDisplayName(t), hostname: t.hostname, origin: t.origin}
}

static createOrReturnURL(e) {
    return e instanceof URL ? e : new URL(e)
}

static getTld(e) {
    const t = e.split(".").slice(-2);
    return Mn.includes(t[0]) ? "." + t.join(".") : "." + t[t.length - 1]
}

static getRootDomain(e) {
    const t = On.createOrReturnURL(e).hostname, n = On.getTld(t).split(".");
    return t.split(".").slice(-n.length).join(".")
}

static getEmulationDescriptions(e) {
    let t, n, r;
    const i = e.throttling;
    switch (e.throttlingMethod) {
        case"provided":
            r = n = t = On.i18n.strings.throttlingProvided;
            break;
        case"devtools": {
            const {cpuSlowdownMultiplier: e, requestLatencyMs: o} = i;
            t = On.i18n.formatNumber(e) + "x slowdown (DevTools)", n = `${On.i18n.formatNumber(o)} ms HTTP RTT, ${On.i18n.formatNumber(i.downloadThroughputKbps)} Kbps down, ${On.i18n.formatNumber(i.uploadThroughputKbps)} Kbps up (DevTools)`, r = 562.5 === o && i.downloadThroughputKbps === 1638.4 * .9 && 675 === i.uploadThroughputKbps ? On.i18n.strings.runtimeSlow4g : On.i18n.strings.runtimeCustom;
            break
        }
        case"simulate": {
            const {cpuSlowdownMultiplier: e, rttMs: o, throughputKbps: a} = i;
            t = On.i18n.formatNumber(e) + "x slowdown (Simulated)", n = `${On.i18n.formatNumber(o)} ms TCP RTT, ${On.i18n.formatNumber(a)} Kbps throughput (Simulated)`, r = 150 === o && 1638.4 === a ? On.i18n.strings.runtimeSlow4g : On.i18n.strings.runtimeCustom;
            break
        }
        default:
            r = t = n = On.i18n.strings.runtimeUnknown
    }
    return {
        deviceEmulation: {
            mobile: On.i18n.strings.runtimeMobileEmulation,
            desktop: On.i18n.strings.runtimeDesktopEmulation
        }[e.formFactor] || On.i18n.strings.runtimeNoEmulation, cpuThrottling: t, networkThrottling: n, summary: r
    }
}

static filterRelevantLines(e, t, n) {
    if (0 === t.length) return e.slice(0, 2 * n + 1);
    const r = new Set;
    return (t = t.sort(((e, t) => (e.lineNumber || 0) - (t.lineNumber || 0)))).forEach((({lineNumber: e}) => {
        let t = e - n, i = e + n;
        for (; t < 1;) t++, i++;
        r.has(t - 3 - 1) && (t -= 3);
        for (let e = t; e <= i; e++) {
            const t = e;
            r.add(t)
        }
    })), e.filter((e => r.has(e.lineNumber)))
}

static isPluginCategory(e) {
    return e.startsWith("lighthouse-plugin-")
}

static shouldDisplayAsFraction(e) {
    return "timespan" === e || "snapshot" === e
}

static calculateCategoryFraction(e) {
    let t = 0, n = 0, r = 0, i = 0;
    for (const o of e.auditRefs) {
        const e = On.showAsPassed(o.result);
        "hidden" !== o.group && "manual" !== o.result.scoreDisplayMode && "notApplicable" !== o.result.scoreDisplayMode && ("informative" !== o.result.scoreDisplayMode ? (++t, i += o.weight, e && n++) : e || ++r)
    }
    return {numPassed: n, numPassableAudits: t, numInformative: r, totalWeight: i}
}
}

function Pn(e, t, n) {
    return e < t ? t : e > n ? n : e
}

On.reportJson = null, On.getUniqueSuffix = (() => {
    let e = 0;
    return function () {
        return e++
    }
})(), On.UIStrings = {
    varianceDisclaimer: "值是估计的，可能会有所不同。 [性能分数计算]（https://web.dev/performance-scoring/）直接从这些指标。”，
    calculatorLink：“查看计算器。”，
    showRelevantAudits：“显示与：相关的审计：”，
    opportunityResourceColumnLabel：“机会” ，
    opportunitySavingsColumnLabel：“估计节省”，
    errorMissingAuditInfo：“报告错误：没有审计信息”，
    errorLabel：“错误！”，
    warningHeader：“警告：",com/web/tools/lighthouse/) 分析模拟移动网络上的当前页面。值是估计值，可能会有所不同。",
    labDataTitle：“实验室数据”，
    thirdPartyResourcesLabel：“显示第三方资源”，
    viewTreemapLabel：“查看树形图”，
    dropdownPrintSummary：“打印摘要”，
    dropdownPrintExpanded：“打印扩展”，
    dropdownCopyJSON：“复制JSON”，
    dropdownSaveHTML：“另存为HTML”，
    dropdownSaveJSON：“另存为 JSON”，
    dropdownViewer：“在查看器中打开”，
    dropdownSaveGist：“另存为 Gist”，
    dropdownDarkTheme：“切换深色主题”，
    runtimeSettingsDevice：“设备”，
    runtimeSettingsNetworkThrottling：“网络节流”，
    runtimeSettingsCPUThrottling："CPU 节流",
    runtimeSettingsUANetwork: "用户代理(网络)",
    runtimeSettingsBenchmark: "CPU/Memory Power",
    runtimeSettingsAxeVersion: "Axe version",
    footerIssue: "File an issue",
    runtimeNoEmulation: "No emulation",
    runtimeMobileEmulation: "Emulated Moto G4",
    runtimeDesktopEmulation: "Emulated Desktop",
    runtimeUnknown: "Unknown",
    runtimeSingleLoad: "Single page load",
    runtimeAnalysisWindow: "Initial page load",
    runtimeSingleLoadTooltip: "This data is taken from a single page load, as opposed to field data summarizing many sessions.",
    throttlingProvided: "Provided by environment",
    show: "Show",
    hide: "Hide",
    expandView: "Expand view",
    collapseView: "折叠视图",
    runtimeSlow4g: "慢速 4G 节流",
    runtimeCustom: "自定义节流"
};

类 Dn {
    静态 getScreenshotPositions(e, t, n) {
        const r = (o = e).left + o.width / 2, i = o.top + o.height / 2;
        var o;
        常量 a = Pn(r - t.width / 2, 0, n.width - t.width), s = Pn(i - t.height / 2, 0, n.height - t.height);
        return {screenshot: {left: a, top: s}, clip: {left: e.left - a, top: e.top - s}}
    }

    静态 renderClipPathInScreenshot(e, t, n, r, i) {
        const o = e.find("clipPath", t), a = "clip-" + On.getUniqueSuffix();
        o.id = a, t.style.clipPath = `url(#${a})`;
        const s = n.top / i.height, l = s + r.height / i.height, c = n.left / i.width, d = c + r.width / i.width,
            h = [`0,0             1,0            1,${s}          0,${s}`, `0,${l}     1,${l}    1,1               0,1`, `0,${s}        ${c},${s} ${c},${l} 0,${l}`, `${d},${s} 1,${s}       1,${l}       ${d},${l}`];
        for (const t of h) {
            const n = e.createElementNS("http://www.w3.org/2000/svg", "polygon");
            n.setAttribute("points", t), o.append(n)
        }
    }

    static installFullPageScreenshot(e, t) {
        e.style.setProperty("--element-screenshot-url", `url('${t.data}')`)
    }

    static installOverlayFeature(e) {
        const {dom: t, rootEl: n, overlayContainerEl: r, fullPageScreenshot: i} = e,
            o = "lh-screenshot-overlay--enabled";
        n.classList.contains(o) || (n.classList.add(o), n.addEventListener("click", (e => {
            const n = e.target;
            if (!n) return;
            const o = n.closest(".lh-node > .lh-element-screenshot");
            if (!o) return;
            const a = t.createElement("div", "lh-element-screenshot__overlay");
            r.append(a);
            const s = {width: .95 * a.clientWidth, height: .8 * a.clientHeight}, l = {
                width: Number(o.dataset.rectWidth),
                height: Number(o.dataset.rectHeight),
                left: Number(o.dataset.rectLeft),
                right: Number(o.dataset.rectLeft) + Number(o.dataset.rectWidth),
                top: Number(o.dataset.rectTop),
                bottom: Number(o.dataset.rectTop) + Number(o.dataset.rectHeight)
            }, c = Dn.render(t, i.screenshot, l, s);
            c ? (a.appendChild(c), a.addEventListener("click", (() => a.remove()))) : a.remove()
        })))
    }

    static _computeZoomFactor(e, t) {
        const n = {x: t.width / e.width, y: t.height / e.height}, r = .75 * Math.min(n.x, n.y);
        return Math.min(1, r)
    }

    static render(e, t, n, r) {
        if (!
            /**
             * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
             * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
             * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
             */
            function (e, t) {
                return t.left <= e.width && 0 <= t.right && t.top <= e.height && 0 <= t.bottom
            }(t, n)) return null;
        const i = e.createComponent("elementScreenshot"), o = e.find("div.lh-element-screenshot", i);
        o.dataset.rectWidth = n.width.toString(), o.dataset.rectHeight = n.height.toString(), o.dataset.rectLeft = n.left.toString(), o.dataset.rectTop = n.top.toString();
        const a = this._computeZoomFactor(n, r), s = {width: r.width / a, height: r.height / a};
        s.width = Math.min(t.width, s.width);
        const l = s.width * a, c = s.height * a,
            d = Dn.getScreenshotPositions(n, s, {width: t.width, height: t.height});
        e.find("div.lh-element-screenshot__content", o).style.top = `-${c}px`;
        const h = e.find("div.lh-element-screenshot__image", o);
        h.style.width = l + "px", h.style.height = c + "px", h.style.backgroundPositionY = -d.screenshot.top * a + "px", h.style.backgroundPositionX = -d.screenshot.left * a + "px", h.style.backgroundSize = `${t.width * a}px ${t.height * a}px`;
        const p = e.find("div.lh-element-screenshot__element-marker", o);
        p.style.width = n.width * a + "px", p.style.height = n.height * a + "px", p.style.left = d.clip.left * a + "px", p.style.top = d.clip.top * a + "px";
        const u = e.find("div.lh-element-screenshot__mask", o);
        return u.style.width = l + "px", u.style.height = c + "px", Dn.renderClipPathInScreenshot(e, u, d.clip, n, s), o
        /**
         * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
         * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
         * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
         */
    }
}

function Fn(e, t) {
    const n = e.rootEl;
    void 0 === t ? n.classList.toggle("lh-dark") : n.classList.toggle("lh-dark", t)
}

/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */const Un = "undefined" != typeof btoa ? btoa : e => Buffer.from(e).toString("base64"),
    Hn = "undefined" != typeof atob ? atob : e => Buffer.from(e, "base64").toString(), jn = {
        toBase64: async function (e, t) {
            let n = (new TextEncoder).encode(e);
            if (t.gzip) if ("undefined" != typeof CompressionStream) {
                const e = new CompressionStream("gzip"), t = e.writable.getWriter();
                t.write(n), t.close();
                const r = await new Response(e.readable).arrayBuffer();
                n = new Uint8Array(r)
            } else n = window.pako.gzip(e);
            let r = "";
            for (let e = 0; e < n.length; e += 5e3) r += String.fromCharCode(...n.subarray(e, e + 5e3));
            return Un(r)
        }, fromBase64: function (e, t) {
            const n = Hn(e), r = Uint8Array.from(n, (e => e.charCodeAt(0)));
            return t.gzip ? window.pako.ungzip(r, {to: "string"}) : (new TextDecoder).decode(r)
        }
    };

/**
 * @license
 * Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $n() {
    const e = window.location.host.endsWith(".vercel.app"), t = new URLSearchParams(window.location.search).has("dev");
    return e ? `https://${window.location.host}/gh-pages` : t ? "http://localhost:8000" : "https://googlechrome.github.io/lighthouse"
}

function Vn(e) {
    const t = e.generatedTime, n = e.fetchTime || t;
    return `${e.lighthouseVersion}-${e.requestedUrl}-${n}`
}

async function Bn(e, t, n) {
    const r = new URL(t), i = Boolean(window.CompressionStream);
    r.hash = await jn.toBase64(JSON.stringify(e), {gzip: i}), i && r.searchParams.set("gzip", "1"), window.open(r.toString(), n)
}

async function Gn(e) {
    const t = "viewer-" + Vn(e);
    !function (e, t, n) {
        const r = new URL(t).origin;
        window.addEventListener("message", (function t(n) {
            n.origin === r && i && n.data.opened && (i.postMessage(e, r), window.removeEventListener("message", t))
        }));
        const i = window.open(t, n)
    }({lhr: e}, $n() + "/viewer/", t)
}

/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
class Wn {
    constructor(e) {
        this._dom = e, this._toggleEl, this._menuEl, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onToggleClick = this.onToggleClick.bind(this), this.onToggleKeydown = this.onToggleKeydown.bind(this), this.onMenuFocusOut = this.onMenuFocusOut.bind(this), this.onMenuKeydown = this.onMenuKeydown.bind(this), this._getNextMenuItem = this._getNextMenuItem.bind(this), this._getNextSelectableNode = this._getNextSelectableNode.bind(this), this._getPreviousMenuItem = this._getPreviousMenuItem.bind(this)
    }

    setup(e) {
        this._toggleEl = this._dom.find(".lh-topbar button.lh-tools__button", this._dom.rootEl), this._toggleEl.addEventListener("click", this.onToggleClick), this._toggleEl.addEventListener("keydown", this.onToggleKeydown), this._menuEl = this._dom.find(".lh-topbar div.lh-tools__dropdown", this._dom.rootEl), this._menuEl.addEventListener("keydown", this.onMenuKeydown), this._menuEl.addEventListener("click", e)
    }

    close() {
        this._toggleEl.classList.remove("lh-active"), this._toggleEl.setAttribute("aria-expanded", "false"), this._menuEl.contains(this._dom.document().activeElement) && this._toggleEl.focus(), this._menuEl.removeEventListener("focusout", this.onMenuFocusOut), this._dom.document().removeEventListener("keydown", this.onDocumentKeyDown)
    }

    打开（e）{
    this._toggleEl.classList.contains（“lh-active”）？e.focus() : this._menuEl.addEventListener("transitionend", (() => {
    e.focus()
}), {once: !0}), this._toggleEl.classList.add("lh-active "), this._toggleEl.setAttribute("aria-expanded", "true"), this._menuEl.addEventListener("focusout", this.onMenuFocusOut), this._dom.document().addEventListener("keydown", this .onDocumentKeyDown)
}

onToggleClick(e) {
    e.preventDefault(), e.stopImmediatePropagation(), this._toggleEl.classList.contains("lh-active") ？this.close() : this.open(this._getNextMenuItem())
}

onToggleKeydown(e) {
    switch (e.
    e.preventDefault(), this.open(this._getPreviousMenuItem());
        break;
        case"ArrowDown":
        case"Enter":
        case" ":
            e.preventDefault(), this.open(this._getNextMenuItem())
}
}

onMenuKeydown(e) {
    const t = e.target;
    switch (e.code) {
        case"ArrowUp":
            e.preventDefault(), this._getPreviousMenuItem(t).focus();
            break;
        case"ArrowDown":
            e.preventDefault(), this._getNextMenuItem(t).focus();
            break;
        case"Home":
            e.preventDefault(), this._getNextMenuItem().focus();
            break;
        case"End":
            e.preventDefault(), this._getPreviousMenuItem().focus()
    }
}

onDocumentKeyDown(e) {
    27 === e.keyCode && this.close()
}

onMenuFocusOut(e) {
    const t = e.relatedTarget;
    this._menuEl.contains(t) || this.close()
}

_getNextSelectableNode(e, t) {
    const n = e.filter((e => e instanceof HTMLElement && !e.hasAttribute("disabled") && "none" !== window.getComputedStyle(e).display));
    let r = t ? n.indexOf(t) + 1 : 0;
    return r >= n.length && (r = 0), n[r]
}

_getNextMenuItem(e) {
    const t = Array.from(this._menuEl.childNodes);
    return this._getNextSelectableNode(t, e)
}

_getPreviousMenuItem(e) {
    const t = Array.from(this._menuEl.childNodes).reverse();
    return this._getNextSelectableNode(t, e)
}
}

/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
class qn {
    constructor(e, t) {
        this.lhr, this._reportUIFeatures = e, this._dom = t, this._dropDownMenu = new Wn(this._dom), this._copyAttempt = !1, this.topbarEl, this.categoriesEl, this.stickyHeaderEl, this.highlightEl, this.onDropDownMenuClick = this.onDropDownMenuClick.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.onCopy = this.onCopy.bind(this), this.collapseAllDetails = this.collapseAllDetails.bind(this)
    }

    enable(e) {
        this.lhr = e, this._dom.rootEl.addEventListener("keyup", this.onKeyUp), this._dom.document().addEventListener("copy", this.onCopy), this._dropDownMenu.setup(this.onDropDownMenuClick), this._setUpCollapseDetailsAfterPrinting(), this._dom.find(".lh-topbar__logo", this._dom.rootEl).addEventListener("click", (() => Fn(this._dom))), this._setupStickyHeader()
    }

    onDropDownMenuClick(e) {
        e.preventDefault();
        const t = e.target;
        if (t && t.hasAttribute("data-action")) {
            switch (t.getAttribute("data-action")) {
                case"copy":
                    this.onCopyButtonClick();
                    break;
                case"print-summary":
                    this.collapseAllDetails(), this._print();
                    break;
                case"print-expanded":
                    this.expandAllDetails(), this._print();
                    break;
                case"save-json": {
                    const e = JSON.stringify(this.lhr, null, 2);
                    this._reportUIFeatures._saveFile(new Blob([e], {type: "application/json"}));
                    break
                }
                case"save-html": {
                    const t = this._reportUIFeatures.getReportHtml();
                    try {
                        this._reportUIFeatures._saveFile(new Blob([t], {type: "text/html"}))
                    } catch (e) {
                        this._dom.fireEventOn("lh-log", this._dom.document(), {
                            cmd: "error",
                            msg: "Could not export as HTML. " + e.message
                        })
                    }
                    break
                }
                case"open-viewer":
                    this._dom.isDevTools() ? async function (e) {
                        const t = "viewer-" + Vn(e), n = $n() + "/viewer/";
                        await Bn({lhr: e}, n, t)
                    }(this.lhr) : Gn(this.lhr);
                    break;
                case"save-gist":
                    this._reportUIFeatures.saveAsGist();
                    break;
                case"toggle-dark":
                    Fn(this._dom)
            }
            this._dropDownMenu.close()
        }
    }

    onCopy(e) {
        this._copyAttempt && e.clipboardData && (e.preventDefault(), e.clipboardData.setData("text/plain", JSON.stringify(this.lhr, null, 2)), this._dom.fireEventOn("lh-log", this._dom.document(), {
            cmd: "log",
            msg: "Report JSON copied to clipboard"
        })), this._copyAttempt = !1
    }

    onCopyButtonClick() {
        this._dom.fireEventOn("lh-analytics", this._dom.document(), {
            cmd: "send",
            fields: {hitType: "event", eventCategory: "report", eventAction: "copy"}
        });
        try {
            this._dom.document().queryCommandSupported("copy") && (this._copyAttempt = !0, this._dom.document().execCommand("copy") || (this._copyAttempt = !1, this._dom.fireEventOn("lh-log", this._dom.document(), {
                cmd: "warn",
                msg: "Your browser does not support copy to clipboard."
            })))
        } catch (e) {
            this._copyAttempt = !1, this._dom.fireEventOn("lh-log", this._dom.document(), {cmd: "log", msg: e.message})
        }
    }

    onKeyUp(e) {
        (e.ctrlKey || e.metaKey) && 80 === e.keyCode && this._dropDownMenu.close()
    }

    expandAllDetails() {
        this._dom.findAll(".lh-categories details", this._dom.rootEl).map((e => e.open = !0))
    }

    collapseAllDetails() {
        this._dom.findAll(".lh-categories details", this._dom.rootEl).map((e => e.open = !1))
    }

    _print() {
        self.print()
    }

    resetUIState() {
        this._dropDownMenu.close()
    }

    _getScrollParent(e) {
        const {overflowY: t} = window.getComputedStyle(e);
        return "visible" !== t && "hidden" !== t ? e : e.parentElement ? this._getScrollParent(e.parentElement) : document
    }

    _setUpCollapseDetailsAfterPrinting() {
        "onbeforeprint" in self ? self.addEventListener("afterprint", this.collapseAllDetails) : self.matchMedia("print").addListener((e => {
            e.matches ? this.expandAllDetails() : this.collapseAllDetails()
        }))
    }

    _setupStickyHeader() {
        this.topbarEl = this._dom.find("div.lh-topbar", this._dom.rootEl), this.categoriesEl = this._dom.find("div.lh-categories", this._dom.rootEl), window.requestAnimationFrame((() => window.requestAnimationFrame((() => {
            try {
                this.stickyHeaderEl = this._dom.find("div.lh-sticky-header", this._dom.rootEl)
            } catch {
                return
            }
            this.highlightEl = this._dom.createChildOf(this.stickyHeaderEl, "div", "lh-highlighter");
            const e = this._getScrollParent(this._dom.find(".lh-container", this._dom.rootEl));
            e.addEventListener("scroll", (() => this._updateStickyHeader()));
            const t = e instanceof window.Document ? document.documentElement : e;
            new window.ResizeObserver((() => this._updateStickyHeader())).observe(t)
        }))))
    }

    _updateStickyHeader() {
        if (!this.stickyHeaderEl) return;
        const e = this.topbarEl.getBoundingClientRect().bottom >= this.categoriesEl.getBoundingClientRect().top,
            t = Array.from(this._dom.rootEl.querySelectorAll(".lh-category")).filter((e => e.getBoundingClientRect().top - window.innerHeight / 2 < 0)),
            n = t.length > 0 ? t.length - 1 : 0, r = this.stickyHeaderEl.querySelectorAll(".lh-gauge__wrapper"),
            i = r[n], o = r[0].getBoundingClientRect().left, a = i.getBoundingClientRect().left - o;
        this.highlightEl.style.transform = `translate(${a}px)`, this.stickyHeaderEl.classList.toggle("lh-sticky-header--visible", e)
    }
}

/**
 * @license
 * 版权所有2017 灯塔作者。版权所有。
 *
 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
 * 除非遵守许可，否则您不得使用此文件。
 * 您可以在
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * 除非适用法律要求或书面同意，软件
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
class Kn {
    constructor(e, t, n) {
        this._reportUIFeatures = e, this._dom = t, this._localeSelectedCallback = n.onLocaleSelected
    }

    enable(e) {
        if (!this._reportUIFeatures.json.i18n.icuMessagePaths) throw new Error("missing icuMessagePaths");
        this._dom.find(".lh-tools-locale", this._dom.rootEl).classList.remove("lh-hidden");
        const t = this._reportUIFeatures.json.configSettings.locale,
            n = this._dom.find(".lh-tools-locale__selector-wrapper", this._dom.rootEl);
        n.removeAttribute("aria-hidden");
        const r = this._dom.createChildOf(n, "select", "lh-locale-selector");
        r.name = "lh-locale-list", r.setAttribute("role", "menuitem");
        const i = this._dom.find(".lh-tool-locale__button", this._dom.rootEl);
        i.addEventListener("click", (() => {
            i.classList.toggle("lh-active")
        }));
        for (const n of e) {
            const e = this._dom.createChildOf(r, "option", "");
            if (e.value = n, n === t && (e.selected = !0), window.Intl && Intl.DisplayNames) {
                const r = new Intl.DisplayNames([t], {type: "language"}),
                    i = new Intl.DisplayNames([n], {type: "language"}).of(n), o = r.of(n);
                e.textContent = i !== o ? `${i} 鈥� ${o}` : o
            } else e.textContent = n
        }
        r.addEventListener("change", (() => {
            const e = r.value;
            this._localeSelectedCallback(e)
        }))
    }
}

/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
class Jn extends class {
    constructor(e, t = {}) {
        this.json, this._dom = e, this._opts = t, this._topbar = t.omitTopbar ? null : new qn(this, e), this.onMediaQueryChange = this.onMediaQueryChange.bind(this)
    }

    initFeatures(e) {
        this.json = e, this._topbar && (this._topbar.enable(e), this._topbar.resetUIState()), this._setupMediaQueryListeners(), this._setupThirdPartyFilter(), this._setupElementScreenshotOverlay( this._dom.rootEl);
        让 t = !1;
        !this._dom.isDevTools() && !this._opts.disableAutoDarkModeAndFireworks && window.matchMedia("(prefers-color-scheme: dark)").matches && (t = !0), ["performance", "accessibility" , "最佳实践", "seo"].every((t => {
            const n = e.categories[t];
            return n && 1 === n.score
        })) && (t = !0, this._enableFireworks()), t && Fn(this._dom, !0), e.categories.performance && e.categories.performance.auditRefs.some((t => Boolean("metrics" === t.group && e.audits[t.id].errorMessage))) && (this._dom.find("input.lh-metrics-toggle__input", this._dom.rootEl).checked = !0), this.json.audits["script-treemap-data"] && this.json.audits["script-treemap-data"].details && this.addButton({
            text: On.i18n.strings.viewTreemapLabel,
            icon: "treemap",
            onClick: () => function (e) {
                if (!e.audits["script-treemap-data"].details) throw new Error("no script treemap data found");
                Bn({
                    lhr: {
                        requestedUrl: e.requestedUrl,
                        finalUrl：e.finalUrl，
                        审计：{“script-treemap-data”：e.audits[“script-treemap-data”]}，
                        configSettings：{locale：e.configSettings.locale}
            }
            }，$n（）+ "/treemap/", "treemap-" + Vn(e))
            }(this.json)
        });
        for (const e of this._dom.findAll("[data-i18n]", this._dom.rootEl)) {
            const t = e.getAttribute("data-i18n");
            e.textContent = On.i18n.strings[t]
        }
    }

    addButton(e) {
        const t = this._dom.rootEl.querySelector(".lh-audit-group--metrics");
        let n = t.querySelector(".lh-buttons");
        n || (n = this._dom.createChildOf(t, "div", "lh-buttons"));
        const r = ["lh-button"];
        e.icon && (r.push("lh-report-icon"), r.push("lh-report-icon--" + e.icon));
        const i = this._dom.createChildOf(n, "button", r.join(" "));
        return i.textContent = e.text, i.addEventListener("click", e.onClick), i
    }

    getReportHtml() {
        return this._topbar && this._topbar.resetUIState(), "<!doctype html><body>" + this._dom.rootEl.outerHTML
    }

    saveAsGist() {
        throw new Error("Cannot save as gist from base report")
    }

    _enableFireworks() {
        const e = this._dom.find(".lh-scores-container", this._dom.rootEl);
        e.classList.add("lh-score100"), e.addEventListener("click", (t => {
            e.classList.toggle("lh-fireworks-paused")
        }))
    }

    _setupMediaQueryListeners() {
        const e = self.matchMedia("(max-width: 500px)");
        e.addListener(this.onMediaQueryChange), this.onMediaQueryChange(e)
    }

    _resetUIState() {
        this._topbar && this._topbar.resetUIState()
    }

    onMediaQueryChange(e) {
        this._dom.rootEl.classList.toggle("lh-narrow", e.matches)
    }

    _setupThirdPartyFilter() {
        const e = ["uses-rel-preconnect", "third-party-facades"], t = ["legacy-javascript"];
        Array.from(this._dom.rootEl.querySelectorAll("table.lh-table")).filter((e => e.querySelector("td.lh-table-column--url, td.lh-table-column--source-location"))).filter((t => {
            const n = t.closest(".lh-audit");
            if (!n) throw new Error(".lh-table not within audit");
            return !e.includes(n.id)
        })).forEach((e => {
            const n = function (e) {
                    return Array.from(e.tBodies[0].rows)
                }(e), r = this._getThirdPartyRows(n, this.json.finalUrl), i = this._dom.createComponent("3pFilter"),
                o = this._dom.find("input", i);
            o.addEventListener("change", (e => {
                const t = e.target instanceof HTMLInputElement && !e.target.checked;
                let i = !0, o = n[0];
                for (; o;) {
                    const e = t && r.includes(o);
                    do {
                        o.classList.toggle("lh-row--hidden", e), o.classList.toggle("lh-row--even", !e && i), o.classList.toggle("lh-row--odd", !e && !i), o = o.nextElementSibling
                    } while (o && o.classList.contains("lh-sub-item-row"));
                    e || (i = !i)
                }
            })), this._dom.find(".lh-3p-filter-count", i).textContent = "" + r.length, this._dom.find(".lh-3p-ui-string", i).textContent = On.i18n.strings.thirdPartyResourcesLabel;
            const a = r.length === n.length, s = !r.length;
            if ((a || s) && (this._dom.find("div.lh-3p-filter", i).hidden = !0), !e.parentNode) return;
            e.parentNode.insertBefore(i, e);
            const l = e.closest(".lh-audit");
            if (!l) throw new Error(".lh-table not within audit");
            t.includes(l.id) && !a && o.click()
        }))
    }

    _setupElementScreenshotOverlay(e) {
        const t = this.json.audits["full-page-screenshot"] && this.json.audits["full-page-screenshot"].details && "full-page-screenshot" === this.json.audits["full-page-screenshot"].details.type && this.json.audits["full-page-screenshot"].details;
        t && Dn.installOverlayFeature({dom: this._dom, rootEl: e, overlayContainerEl: e, fullPageScreenshot: t})
    }

    _getThirdPartyRows(e, t) {
        const n = [], r = On.getRootDomain(t);
        for (const t of e) {
            if (t.classList.contains("lh-sub-item-row")) continue;
            const e = t.querySelector("div.lh-text__url");
            if (!e) continue;
            const i = e.dataset.url;
            i && (On.getRootDomain(i) !== r && n.push(t))
        }
        return n
    }

    _saveFile(e) {
        const t = Sn.getLhrFilenamePrefix(this.json);
        this._dom.saveFile(e, t)
    }
} {
    constructor(e, t) {
        super(e), this._saveGistCallback = t.saveGist, this._refreshCallback = t.refresh, this._swapLocales = new Kn(this, this._dom, {onLocaleSelected: this._swapLocale.bind(this)})
    }

    initFeatures(e) {
        super.initFeatures(e), this._saveGistCallback || this._dom.find('.lh-tools__dropdown a[data-action="save-gist"]', this._dom.rootEl).setAttribute("disabled", "true"), this._getI18nModule().then((async e => {
            const t = await e.format.getCanonicalLocales();
            this._swapLocales.enable(t)
        })).catch((e => console.error(e)))
    }

    getReportHtml() {
        return ReportGenerator.generateReportHtml(this.json)
    }

    saveAsGist() {
        if (!this._saveGistCallback) throw new Error("Cannot save this report as a gist");
        this._saveGistCallback(this.json), this._dom.find('.lh-tools__dropdown a[data-action="save-gist"]', this._dom.rootEl).setAttribute("disabled", "true")
    }

    async _fetchLocaleMessages(e) {
        return (await fetch(`./locales/${e}.json`)).json()
    }

    async _swapLocale(e) {
        const t = await this._fetchLocaleMessages(e), n = await this._getI18nModule();
        if (!t) throw new Error("could not fetch data for locale: " + e);
        n.format.registerLocaleData(e, t);
        const r = n.swapLocale(this.json, e).lhr;
        this._refreshCallback(r)
    }

    _getI18nModule() {
        return import("./i18n-module-4eee9d4b.js").then((function (e) {
            return e.i
        }))
    }
}

/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn {
    constructor(e, t) {
        this._document = e, this._lighthouseChannel = "unknown", this._componentCache = new Map, this.rootEl = t
    }

    createElement(e, t) {
        const n = this._document.createElement(e);
        if (t) for (const e of t.split(/\s+/)) e && n.classList.add(e);
        return n
    }

    createElementNS(e, t, n) {
        const r = this._document.createElementNS(e, t);
        if (n) for (const e of n.split(/\s+/)) e && r.classList.add(e);
        return r
    }

    createFragment() {
        return this._document.createDocumentFragment()
    }

    createTextNode(e) {
        return this._document.createTextNode(e)
    }

    createChildOf(e, t, n) {
        const r = this.createElement(t, n);
        return e.appendChild(r), r
    }

    createComponent(e) {
        let t = this._componentCache.get(e);
        if (t) {
            const e = t.cloneNode(!0);
            return this.findAll("style", e).forEach((e => e.remove())), e
        }
        return t = function (e, t) {
            switch (t) {
                case"3pFilter":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("style");
                        n.append("\n .lh-3p-filter {\n color: var(--color-gray-600);\n float: right;\n padding: 6px var(--stackpack-padding-horizo​​ntal) ;\n }\n .lh-3p-filter-label, .lh-3p-filter-input {\n 垂直对齐：中间；\n 用户选择：无；\n }\n .lh-3p- filter-input:disabled + .lh-3p-ui-string {\n text-decoration: line-through;\n }\n "), t.append(n);
                        const r = e.createElement("div", "lh-3p-filter"),
                            i = e.createElement("label", "lh-3p-filter-label"),
                            o = e.createElement("input" , "lh-3p 滤波器输入");
                        o.setAttribute("type", "checkbox"), o.
                            const a = e.createElement("span", "lh-3p-ui-string");
                        a.append("Show 3rd party resources");
                        const s = e.createElement("span", "lh-3p-filter-count");
                        return i.append(" ", o, " ", a, " (", s, ") "), r.append(" ", i, " "), t.append(r), t
                    }(e);
                case"audit":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-audit"),
                            r = e.createElement("details", "lh-expandable-details"), i = e.createElement("summary"),
                            o = e.createElement("div", "lh-audit__header lh-expandable-details__summary"),
                            a = e.createElement("span", "lh-audit__score-icon"),
                            s = e.createElement("span", "lh-audit__title-and-text"),
                            l = e.createElement("span", "lh-audit__title"),
                            c = e.createElement("span", "lh-audit__display-text");
                        s.append(" ", l, " ", c, " ");
                        const d = e.createElement("div", "lh-chevron-container");
                        o.append(" ", a, " ", s, " ", d, " "), i.append(" ", o, " ");
                        const h = e.createElement("div", "lh-audit__description"),
                            p = e.createElement("div", "lh-audit__stackpacks");
                        return r.append(" ", i, " ", h, " ", p, " "), n.append(" ", r, " "), t.append(n), t
                    }(e);
                case"categoryHeader":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-category-header"),
                            r = e.createElement("div", "lh-score__gauge");
                        r.setAttribute("role", "heading"), r.setAttribute("aria-level", "2");
                        const i = e.createElement("div", "lh-category-header__description");
                        return n.append(" ", r, " ", i, " "), t.append(n), t
                    }(e);
                case"chevron":
                    return function (e) {
                        const t = e.createFragment(),
                            n = e.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-chevron");
                        n.setAttribute("viewBox", "0 0 100 100");
                        const r = e.createElementNS("http://www.w3.org/2000/svg", "g", "lh-chevron__lines"),
                            i = e.createElementNS("http://www.w3.org/2000/svg", "path", "lh-chevron__line lh-chevron__line-left");
                        i.setAttribute("d", "M10 50h40");
                        const o = e.createElementNS("http://www.w3.org/2000/svg", "path", "lh-chevron__line lh-chevron__line-right");
                        return o.setAttribute("d", "M90 50H50"), r.append(" ", i, " ", o, " "), n.append(" ", r, " "), t.append(n), t
                    }(e);
                case"clump":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-audit-group"),
                            r = e.createElement("details", "lh-clump"), i = e.createElement("summary"),
                            o = e.createElement("div", "lh-audit-group__summary"),
                            a = e.createElement("div", "lh-audit-group__header"),
                            s = e.createElement("span", "lh-audit-group__title"),
                            l = e.createElement("span", "lh-audit-group__itemcount");
                        a.append(" ", s, " ", l, " ", " ", " ");
                        const c = e.createElement("div", "lh-clump-toggle"),
                            d = e.createElement("span", "lh-clump-toggletext--show"),
                            h = e.createElement("span", "lh-clump-toggletext--hide");
                        return c.append(" ", d, " ", h, " "), o.append(" ", a, " ", c, " "), i.append(" ", o, " "), r.append(" ", i, " "), n.append(" ", " ", r, " "), t.append(n), t
                    }(e);
                case"crc":
                    返回函数 (e) {
                    const t = e.createFragment(), n = e.createElement("div", "lh-crc-container"),
                        r = e.createElement("style");
                    r.append('\n      .lh-crc .lh-tree-marker {\n        width: 12px;\n        height: 26px;\n        display: block;\n        float: left;\n        background-position: top left;\n      }\n      .lh-crc .lh-horiz-down {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>\');\n      }\n      .lh-crc .lh-right {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-up-right {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-vert-right {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-vert {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-crc-tree {\n        font-size: 14px;\n        width: 100%;\n        overflow-x: auto;\n      }\n      .lh-crc .lh-crc-node {\n        height: 26px;\n        line-height: 26px;\n        white-space: nowrap;\n      }\n      .lh-crc .lh-crc-node__tree-value {\n        margin-left: 10px;\n      }\n      .lh-crc .lh-crc-node__tree-value div {\n        display: inline;\n      }\n      .lh-crc .lh-crc-node__chain-duration {\n        font-weight: 700;\n      }\n      .lh-crc .lh-crc-initial-nav {\n        color: #595959;\n        font-style: italic;\n      }\n      .lh-crc__summary-value {\n        margin-bottom: 10px;\n      }\n    ');
                    const i = e.createElement("div"), o = e.createElement("div", "lh-crc__summary-value"),
                        a = e.createElement("span", "lh-crc__longest_duration_label"),
                        s = e.createElement("b", "lh-crc__longest_duration");
                    o.append(" ", a, " ", s, " "), i.append(" ", o, " ");
                    const l = e.createElement("div", "lh-crc"), c = e.createElement("div", "lh-crc-initial-nav");
                    return l.append(" ", c, " ", " "), n.append(" ", r, " ", i, " ", l, " "), t.append(n), t
                }(e);
                case"crcChain":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-crc-node"),
                            r = e.createElement("span", "lh-crc-node__tree-marker"),
                            i = e.createElement("span", "lh-crc-node__tree-value");
                        return n.append(" ", r, " ", i, " "), t.append(n), t
                    }(e);
                case"elementScreenshot":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-element-screenshot"),
                            r = e.createElement("div", "lh-element-screenshot__content"),
                            i = e.createElement("div", "lh-element-screenshot__mask"),
                            o = e.createElementNS("http://www.w3.org/2000/svg", "svg");
                        o.setAttribute("height", "0"), o.setAttribute("width", "0");
                        const a = e.createElementNS("http://www.w3.org/2000/svg", "defs"),
                            s = e.createElementNS("http://www.w3.org/2000/svg", "clipPath");
                        s.setAttribute("clipPathUnits", "objectBoundingBox"), a.append(" ", s, " ", " "), o.append(" ", a, " "), i.append(" ", o, " ");
                        const l = e.createElement("div", "lh-element-screenshot__image"),
                            c = e.createElement("div", "lh-element-screenshot__element-marker");
                        return r.append(" ", i, " ", l, " ", c, " "), n.append(" ", r, " "), t.append(n), t
                    }(e);
                case"footer":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("style");
                        n.append("\n    .lh-footer {\n      padding: var(--footer-padding-vertical) calc(var(--default-padding) * 2);\n      max-width: var(--report-content-width);\n      margin: 0 auto;\n    }\n    .lh-footer .lh-generated {\n      text-align: center;\n    }\n  "), t.append(n);
                        const r = e.createElement("footer", "lh-footer"), i = e.createElement("ul", "lh-meta__items");
                        i.append(" ");
                        const o = e.createElement("div", "lh-generated"), a = e.createElement("b");
                        a.append("Lighthouse");
                        const s = e.createElement("span", "lh-footer__version"),
                            l = e.createElement("a", "lh-footer__version_issue");
                        return l.setAttribute("href", "https://github.com/GoogleChrome/Lighthouse/issues"), l.setAttribute("target", "_blank"), l.setAttribute("rel", "noopener"), l.append("File an issue"), o.append(" ", " Generated by ", a, " ", s, " | ", l, " "), r.append(" ", i, " ", o, " "), t.append(r), t
                    }(e);
                case"fraction":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("a", "lh-fraction__wrapper"),
                            r = e.createElement("div", "lh-fraction__content-wrapper"),
                            i = e.createElement("div", "lh-fraction__content"),
                            o = e.createElement("div", "lh-fraction__background");
                        i.append(" ", o, " "), r.append(" ", i, " ");
                        const a = e.createElement("div", "lh-fraction__label");
                        return n.append(" ", r, " ", a, " "), t.append(n), t
                    }(e);
                case"gauge":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("a", "lh-gauge__wrapper"),
                            r = e.createElement("div", "lh-gauge__svg-wrapper"),
                            i = e.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-gauge");
                        i.setAttribute("viewBox", "0 0 120 120");
                        const o = e.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-gauge-base");
                        o.setAttribute("r", "56"), o.setAttribute("cx", "60"), o.setAttribute("cy", "60"), o.setAttribute("stroke-width", "8");
                        const a = e.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-gauge-arc");
                        a.setAttribute("r", "56"), a.setAttribute("cx", "60"), a.setAttribute("cy", "60"), a.setAttribute("stroke-width", "8"), i.append(" ", o, " ", a, " "), r.append(" ", i, " ");
                        const s = e.createElement("div", "lh-gauge__percentage"),
                            l = e.createElement("div", "lh-gauge__label");
                        返回 n.append(" ", " ", r, " ", s, " ", " ", l, " "), t.append(n), t
                    }(e);
                case"gaugePwa":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("style");
                        n.append("\n    .lh-gauge--pwa .lh-gauge--pwa__component {\n      display: none;\n    }\n    .lh-gauge--pwa__wrapper:not(.lh-badged--all) .lh-gauge--pwa__logo > path {\n      /* Gray logo unless everything is passing. */\n      fill: #B0B0B0;\n    }\n\n    .lh-gauge--pwa__disc {\n      fill: var(--color-gray-200);\n    }\n\n    .lh-gauge--pwa__logo--primary-color {\n      fill: #304FFE;\n    }\n\n    .lh-gauge--pwa__logo--secondary-color {\n      fill: #3D3D3D;\n    }\n    .lh-dark .lh-gauge--pwa__logo--secondary-color {\n      fill: #D8B6B6;\n    }\n\n    /* No passing groups. */\n    .lh-gauge--pwa__wrapper:not([class*='lh-badged--']) .lh-gauge--pwa__na-line {\n      display: inline;\n    }\n    /* Just optimized. Same n/a line as no passing groups. */\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-optimized:not(.lh-badged--pwa-installable) .lh-gauge--pwa__na-line {\n      display: inline;\n    }\n\n    /* Just installable. */\n    .lh-gauge--pwa__wrapper.lh-badged--pwa-installable .lh-gauge--pwa__installable-badge {\n      display: inline;\n    }\n\n    /* All passing groups. */\n    .lh-gauge--pwa__wrapper.lh-badged--all .lh-gauge--pwa__check-circle {\n      display: inline;\n    }\n  "), t.append(n);
                        const r = e.createElement("a", "lh-gauge__wrapper lh-gauge--pwa__wrapper"),
                            i = e.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-gauge lh-gauge--pwa");
                        i.setAttribute("viewBox", "0 0 60 60");
                        const o = e.createElementNS("http://www.w3.org/2000/svg", "defs"),
                            a = e.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                        a.setAttribute("id", "lh-gauge--pwa__check-circle__gradient"), a.setAttribute("x1", "50%"), a.setAttribute("y1", "0%"), a.setAttribute("x2", "50%"), a.setAttribute("y2", "100%");
                        const s = e.createElementNS("http://www.w3.org/2000/svg", "stop");
                        s.setAttribute("stop-color", "#00C852"), s.setAttribute("offset", "0%");
                        const l = e.createElementNS("http://www.w3.org/2000/svg", "stop");
                        l.setAttribute("stop-color", "#009688"), l.setAttribute("offset", "100%"), a.append(" ", s, " ", l, " ");
                        const c = e.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                        c.setAttribute("id", "lh-gauge--pwa__installable__shadow-gradient"), c.setAttribute("x1", "76.056%"), c.setAttribute("x2", "24.111%"), c.setAttribute("y1", "82.995%"), c.setAttribute("y2", "24.735%");
                        const d = e.createElementNS("http://www.w3.org/2000/svg", "stop");
                        d.setAttribute("stop-color", "#A5D6A7"), d.setAttribute("offset", "0%");
                        const h = e.createElementNS("http://www.w3.org/2000/svg", "stop");
                        h.setAttribute("stop-color", "#80CBC4"), h.setAttribute("offset", "100%"), c.append(" ", d, " ", h, " ");
                        常量 p = e.createElementNS("http://www.w3.org/2000/svg", "g");
                        p.setAttribute("id", "lh-gauge--pwa__installable-badge");
                        const u = e.createElementNS("http://www.w3.org/2000/svg", "circle");
                        const g = e.createElementNS("http://www.w3.org/2000/svg", "path");
                        g.setAttribute("fill", "#009688"), g.setAttribute("d", "M10 4.167A5.835 5.835 0 0 0 4.167 10 5.835 5.835 0 0 0 10 15.833 5.835 5.835 0 0 0 15.833 10 5.835 5.835 0 0 0 10 4.167zm2.917 6.416h-2.334v2.334H9.417v-2.334H7.083V9.417h2.334V7.083h1.166v2.334h2.334v1.166z"), p.append(" ", u, " ", g, " "), o.append(" ", a, " ", c, " ", p, " ");
                        const m = e.createElementNS("http://www.w3.org/2000/svg", "g");
                        m.setAttribute("stroke", "none"), m.setAttribute("fill-rule", "nonzero");
                        const f = e.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-gauge--pwa__disc");
                        f.setAttribute("cx", "30"), f.setAttribute("cy", "30"), f.setAttribute("r", "30");
                        const v = e.createElementNS("http://www.w3.org/2000/svg", "g", "lh-gauge--pwa__logo"),
                            b = e.createElementNS("http://www.w3.org/2000/svg", "path", "lh-gauge--pwa__logo--secondary-color");
                        b.setAttribute("d", "M35.66 19.39l.7-1.75h2L37.4 15 38.6 12l3.4 9h-2.51l-.58-1.61z");
                        const _ = e.createElementNS("http://www.w3.org/2000/svg", "path", "lh-gauge--pwa__logo--primary-color");
                        _.setAttribute("d", "M33.52 21l3.65-9h-2.42l-2.5 5.82L30.5 12h-1.86l-1.9 5.82-1.35-2.65-1.21 3.72L25.4 21h2.38l1.72-5.2 1.64 5.2z");
                        const w = e.createElementNS("http://www.w3.org/2000/svg", "path", "lh-gauge--pwa__logo--secondary-color");
                        w.setAttribute("fill-rule", "nonzero"), w.setAttribute("d", "M20.3 17.91h1.48c.45 0 .85-.05 1.2-.15l.39-1.18 1.07-3.3a2.64 2.64 0 0 0-.28-.37c-.55-.6-1.36-.91-2.42-.91H18v9h2.3V17.9zm1.96-3.84c.22.22.33.5.33.87 0 .36-.1.65-.29.87-.2.23-.59.35-1.15.35h-.86v-2.41h.87c.52 0 .89.1 1.1.32z"), v.append(" ", b, " ", _, " ", w, " ");
                        const y = e.createElementNS("http://www.w3.org/2000/svg", "rect", "lh-gauge--pwa__component lh-gauge--pwa__na-line");
                        y.setAttribute("fill", "#FFFFFF"), y.setAttribute("x", "20"), y.setAttribute("y", "32"), y.setAttribute("width", "20"), y.setAttribute("height", "4"), y.setAttribute("rx", "2");
                        const x = e.createElementNS("http://www.w3.org/2000/svg", "g", "lh-gauge--pwa__component lh-gauge--pwa__installable-badge");
                        x.setAttribute("transform", "translate(20, 29)");
                        const k = e.createElementNS("http://www.w3.org/2000/svg", "path");
                        k.setAttribute("fill", "url(#lh-gauge--pwa__installable__shadow-gradient)"), k.setAttribute("d", "M33.629 19.487c-4.272 5.453-10.391 9.39-17.415 10.869L3 17.142 17.142 3 33.63 19.487z");
                        const E = e.createElementNS("http://www.w3.org/2000/svg", "use");
                        E.setAttribute("href", "#lh-gauge--pwa__installable-badge"), x.append(" ", k, " ", E, " ");
                        const A = e.createElementNS("http://www.w3.org/2000/svg", "g", "lh-gauge--pwa__component lh-gauge--pwa__check-circle");
                        A.setAttribute("transform", "translate(18, 28)");
                        const S = e.createElementNS("http://www.w3.org/2000/svg", "circle");
                        S.setAttribute("fill", "#FFFFFF"), S.setAttribute("cx", "12"), S.setAttribute("cy", "12"), S.setAttribute("r", "12");
                        const C = e.createElementNS("http://www.w3.org/2000/svg", "path");
                        C.setAttribute("fill", "url(#lh-gauge--pwa__check-circle__gradient)"), C.setAttribute("d", "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"), A.append(" ", S, " ", C, " "), m.append(" ", " ", f, " ", v, " ", " ", y, " ", " ", x, " ", " ", A, " "), i.append(" ", o, " ", m, " ");
                        const z = e.createElement("div", "lh-gauge__label");
                        return r.append(" ", i, " ", z, " "), t.append(r), t
                    }(e);
                case"heading":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("style");
                        n.append("\n    /* CSS Fireworks. Originally by Eddie Lin\n       https://codepen.io/paulirish/pen/yEVMbP\n    */\n    .lh-pyro {\n      display: none;\n      z-index: 1;\n      pointer-events: none;\n    }\n    .lh-score100 .lh-pyro {\n      display: block;\n    }\n    .lh-score100 .lh-lighthouse stop:first-child {\n      stop-color: hsla(200, 12%, 95%, 0);\n    }\n    .lh-score100 .lh-lighthouse stop:last-child {\n      stop-color: hsla(65, 81%, 76%, 1);\n    }\n\n    .lh-pyro > .lh-pyro-before, .lh-pyro > .lh-pyro-after {\n      position: absolute;\n      width: 5px;\n      height: 5px;\n      border-radius: 2.5px;\n      box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n      animation: 1s bang ease-out infinite backwards,  1s gravity ease-in infinite backwards,  5s position linear infinite backwards;\n      animation-delay: 1s, 1s, 1s;\n    }\n\n    .lh-pyro > .lh-pyro-after {\n      animation-delay: 2.25s, 2.25s, 2.25s;\n      animation-duration: 1.25s, 1.25s, 6.25s;\n    }\n    .lh-fireworks-paused .lh-pyro > div {\n      animation-play-state: paused;\n    }\n\n    @keyframes bang {\n      to {\n        box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47;\n      }\n    }\n    @keyframes gravity {\n      to {\n        transform: translateY(80px);\n        opacity: 0;\n      }\n    }\n    @keyframes position {\n      0%, 19.9% {\n        margin-top: 4%;\n        margin-left: 47%;\n      }\n      20%, 39.9% {\n        margin-top: 7%;\n        margin-left: 30%;\n      }\n      40%, 59.9% {\n        margin-top: 6%;\n        margin-left: 70%;\n      }\n      60%, 79.9% {\n        margin-top: 3%;\n        margin-left: 20%;\n      }\n      80%, 99.9% {\n        margin-top: 3%;\n        margin-left: 80%;\n      }\n    }\n  "), t.append(n);
                        const r = e.createElement("div", "lh-header-container"),
                            i = e.createElement("div", "lh-scores-wrapper-placeholder");
                        return r.append(" ", i, " "), t.append(r), t
                    }(e);
                case"metric":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-metric"),
                            r = e.createElement("div", "lh-metric__innerwrap"),
                            i = e.createElement("div", "lh-metric__icon"),
                            o = e.createElement("span", "lh-metric__title"),
                            a = e.createElement("div", "lh-metric__value"),
                            s = e.createElement("div", "lh-metric__description");
                        return r.append(" ", i, " ", o, " ", a, " ", s, " "), n.append(" ", r, " "), t.append(n), t
                    }(e);
                case"opportunity":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-audit lh-audit--load-opportunity"),
                            r = e.createElement("details", "lh-expandable-details"), i = e.createElement("summary"),
                            o = e.createElement("div", "lh-audit__header"),
                            a = e.createElement("div", "lh-load-opportunity__cols"),
                            s = e.createElement("div", "lh-load-opportunity__col lh-load-opportunity__col--one"),
                            l = e.createElement("span", "lh-audit__score-icon"),
                            c = e.createElement("div", "lh-audit__title");
                        s.append(" ", l, " ", c, " ");
                        const d = e.createElement("div", "lh-load-opportunity__col lh-load-opportunity__col--two"),
                            h = e.createElement("div", "lh-load-opportunity__sparkline"),
                            p = e.createElement("div", "lh-sparkline"), u = e.createElement("div", "lh-sparkline__bar");
                        p.append(u), h.append(" ", p, " ");
                        const g = e.createElement("div", "lh-audit__display-text"),
                            m = e.createElement("div", "lh-chevron-container");
                        d.append(" ", h, " ", g, " ", m, " "), a.append(" ", s, " ", d, " "), o.append(" ", a, " "), i.append(" ", o, " ");
                        const f = e.createElement("div", "lh-audit__description"),
                            v = e.createElement("div", "lh-audit__stackpacks");
                        return r.append(" ", i, " ", f, " ", v, " "), n.append(" ", r, " "), t.append(n), t
                    }(e);
                case"opportunityHeader":
                    return function (e) {
                        const t = e.createFragment(),
                            n = e.createElement("div", "lh-load-opportunity__header lh-load-opportunity__cols"),
                            r = e.createElement("div", "lh-load-opportunity__col lh-load-opportunity__col--one"),
                            i = e.createElement("div", "lh-load-opportunity__col lh-load-opportunity__col--two");
                        return n.append(" ", r, " ", i, " "), t.append(n), t
                    }(e);
                case"scorescale":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-scorescale"),
                            r = e.createElement("span", "lh-scorescale-range lh-scorescale-range--fail");
                        r.append("0鈥�49");
                        const i = e.createElement("span", "lh-scorescale-range lh-scorescale-range--average");
                        i.append("50鈥�89");
                        const o = e.createElement("span", "lh-scorescale-range lh-scorescale-range--pass");
                        return o.append("90鈥�100"), n.append(" ", r, " ", i, " ", o, " "), t.append(n), t
                    }(e);
                case"scoresWrapper":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("style");
                        n.append("\n    .lh-scores-container {\n      display: flex;\n      flex-direction: column;\n      padding: var(--default-padding) 0;\n      position: relative;\n      width: 100%;\n    }\n\n    .lh-sticky-header {\n      --gauge-circle-size: var(--gauge-circle-size-sm);\n      --plugin-badge-size: 16px;\n      --plugin-icon-size: 75%;\n      --gauge-wrapper-width: 60px;\n      --gauge-percentage-font-size: 13px;\n      position: fixed;\n      left: 0;\n      right: 0;\n      top: var(--topbar-height);\n      font-weight: 500;\n      display: none;\n      justify-content: center;\n      background-color: var(--sticky-header-background-color);\n      border-bottom: 1px solid var(--color-gray-200);\n      padding-top: var(--score-container-padding);\n      padding-bottom: 4px;\n      z-index: 1;\n      pointer-events: none;\n    }\n\n    .lh-devtools .lh-sticky-header {\n      /* The report within DevTools is placed in a container with overflow, which changes the placement of this header unless we change `position` to `sticky.` */\n      position: sticky;\n    }\n\n    .lh-sticky-header--visible {\n      display: grid;\n      grid-auto-flow: column;\n      pointer-events: auto;\n    }\n\n    /* Disable the gauge arc animation for the sticky header, so toggling display: none\n       does not play the animation. */\n    .lh-sticky-header .lh-gauge-arc {\n      animation: none;\n    }\n\n    .lh-sticky-header .lh-gauge__label {\n      display: none;\n    }\n\n    .lh-highlighter {\n      width: var(--gauge-wrapper-width);\n      height: 1px;\n      background-color: var(--highlighter-background-color);\n      /* Position at bottom of first gauge in sticky header. */\n      position: absolute;\n      grid-column: 1;\n      bottom: -1px;\n    }\n\n    .lh-gauge__wrapper:first-of-type {\n      contain: none;\n    }\n  "), t.append(n);
                        const r = e.createElement("div", "lh-scores-wrapper"),
                            i = e.createElement("div", "lh-scores-container"), o = e.createElement("div", "lh-pyro"),
                            a = e.createElement("div", "lh-before"), s = e.createElement("div", "lh-after");
                        return o.append(" ", a, " ", s, " "), i.append(" ", o, " "), r.append(" ", i, " "), t.append(r), t
                    }(e);
                case"snippet":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-snippet"),
                            r = e.createElement("style");
                        return r.append('\n          :root {\n            --snippet-highlight-light: #fbf1f2;\n            --snippet-highlight-dark: #ffd6d8;\n          }\n\n         .lh-snippet__header {\n          position: relative;\n          overflow: hidden;\n          padding: 10px;\n          border-bottom: none;\n          color: var(--snippet-color);\n          background-color: var(--snippet-background-color);\n          border: 1px solid var(--report-border-color-secondary);\n        }\n        .lh-snippet__title {\n          font-weight: bold;\n          float: left;\n        }\n        .lh-snippet__node {\n          float: left;\n          margin-left: 4px;\n        }\n        .lh-snippet__toggle-expand {\n          padding: 1px 7px;\n          margin-top: -1px;\n          margin-right: -7px;\n          float: right;\n          background: transparent;\n          border: none;\n          cursor: pointer;\n          font-size: 14px;\n          color: #0c50c7;\n        }\n\n        .lh-snippet__snippet {\n          overflow: auto;\n          border: 1px solid var(--report-border-color-secondary);\n        }\n        /* Container needed so that all children grow to the width of the scroll container */\n        .lh-snippet__snippet-inner {\n          display: inline-block;\n          min-width: 100%;\n        }\n\n        .lh-snippet:not(.lh-snippet--expanded) .lh-snippet__show-if-expanded {\n          display: none;\n        }\n        .lh-snippet.lh-snippet--expanded .lh-snippet__show-if-collapsed {\n          display: none;\n        }\n\n        .lh-snippet__line {\n          background: white;\n          white-space: pre;\n          display: flex;\n        }\n        .lh-snippet__line:not(.lh-snippet__line--message):first-child {\n          padding-top: 4px;\n        }\n        .lh-snippet__line:not(.lh-snippet__line--message):last-child {\n          padding-bottom: 4px;\n        }\n        .lh-snippet__line--content-highlighted {\n          background: var(--snippet-highlight-dark);\n        }\n        .lh-snippet__line--message {\n          background: var(--snippet-highlight-light);\n        }\n        .lh-snippet__line--message .lh-snippet__line-number {\n          padding-top: 10px;\n          padding-bottom: 10px;\n        }\n        .lh-snippet__line--message code {\n          padding: 10px;\n          padding-left: 5px;\n          color: var(--color-fail);\n          font-family: var(--report-font-family);\n        }\n        .lh-snippet__line--message code {\n          white-space: normal;\n        }\n        .lh-snippet__line-icon {\n          padding-top: 10px;\n          display: none;\n        }\n        .lh-snippet__line--message .lh-snippet__line-icon {\n          display: block;\n        }\n        .lh-snippet__line-icon:before {\n          content: "";\n          display: inline-block;\n          vertical-align: middle;\n          margin-right: 4px;\n          width: var(--score-icon-size);\n          height: var(--score-icon-size);\n          background-image: var(--fail-icon-url);\n        }\n        .lh-snippet__line-number {\n          flex-shrink: 0;\n          width: 40px;\n          text-align: right;\n          font-family: monospace;\n          padding-right: 5px;\n          margin-right: 5px;\n          color: var(--color-gray-600);\n          user-select: none;\n        }\n    '), n.append(" ", r, " "), t.append(n), t
                    }(e);
                case"snippetContent":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-snippet__snippet"),
                            r = e.createElement("div", "lh-snippet__snippet-inner");
                        return n.append(" ", r, " "), t.append(n), t
                    }(e);
                case"snippetHeader":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-snippet__header"),
                            r = e.createElement("div", "lh-snippet__title"),
                            i = e.createElement("div", "lh-snippet__node"),
                            o = e.createElement("button", "lh-snippet__toggle-expand"),
                            a = e.createElement("span", "lh-snippet__btn-label-collapse lh-snippet__show-if-expanded"),
                            s = e.createElement("span", "lh-snippet__btn-label-expand lh-snippet__show-if-collapsed");
                        return o.append(" ", a, " ", s, " "), n.append(" ", r, " ", i, " ", o, " "), t.append(n), t
                    }(e);
                case"snippetLine":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("div", "lh-snippet__line"),
                            r = e.createElement("div", "lh-snippet__line-number"),
                            i = e.createElement("div", "lh-snippet__line-icon"), o = e.createElement("code");
                        return n.append(" ", r, " ", i, " ", o, " "), t.append(n), t
                    }(e);
                case"styles":
                    return function (e) {
                        const t = e.createFragment(), n = e.createElement("style");
                        return n.append('/**\n * @license\n * Copyright 2017 The Lighthouse Authors. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS-IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n/*\n  Naming convention:\n\n  If a variable is used for a specific component: --{component}-{property name}-{modifier}\n\n  Both {component} and {property name} should be kebab-case. If the target is the entire page,\n  use \'report\' for the component. The property name should not be abbreviated. Use the\n  property name the variable is intended for - if it\'s used for multiple, a common descriptor\n  is fine (ex: \'size\' for a variable applied to \'width\' and \'height\'). If a variable is shared\n  across multiple components, either create more variables or just drop the "{component}-"\n  part of the name. Append any modifiers at the end (ex: \'big\', \'dark\').\n\n  For colors: --color-{hue}-{intensity}\n\n  {intensity} is the Material Design tag - 700, A700, etc.\n*/\n.lh-vars {\n  /* Palette using Material Design Colors\n   * https://www.materialui.co/colors */\n  --color-amber-50: #FFF8E1;\n  --color-blue-200: #90CAF9;\n  --color-blue-900: #0D47A1;\n  --color-blue-A700: #2962FF;\n  --color-blue-primary: #06f;\n  --color-cyan-500: #00BCD4;\n  --color-gray-100: #F5F5F5;\n  --color-gray-300: #CFCFCF;\n  --color-gray-200: #E0E0E0;\n  --color-gray-400: #BDBDBD;\n  --color-gray-50: #FAFAFA;\n  --color-gray-500: #9E9E9E;\n  --color-gray-600: #757575;\n  --color-gray-700: #616161;\n  --color-gray-800: #424242;\n  --color-gray-900: #212121;\n  --color-gray: #000000;\n  --color-green-700: #080;\n  --color-green: #0c6;\n  --color-lime-400: #D3E156;\n  --color-orange-50: #FFF3E0;\n  --color-orange-700: #C33300;\n  --color-orange: #fa3;\n  --color-red-700: #c00;\n  --color-red: #f33;\n  --color-teal-600: #00897B;\n  --color-white: #FFFFFF;\n\n  /* Context-specific colors */\n  --color-average-secondary: var(--color-orange-700);\n  --color-average: var(--color-orange);\n  --color-fail-secondary: var(--color-red-700);\n  --color-fail: var(--color-red);\n  --color-hover: var(--color-gray-50);\n  --color-informative: var(--color-blue-900);\n  --color-pass-secondary: var(--color-green-700);\n  --color-pass: var(--color-green);\n  --color-not-applicable: var(--color-gray-600);\n\n  /* Component variables */\n  --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));\n  --audit-explanation-line-height: 16px;\n  --audit-group-margin-bottom: calc(var(--default-padding) * 6);\n  --audit-group-padding-vertical: 8px;\n  --audit-margin-horizontal: 5px;\n  --audit-padding-vertical: 8px;\n  --category-padding: calc(var(--default-padding) * 6) calc(var(--default-padding) * 4) calc(var(--default-padding) * 4);\n  --chevron-line-stroke: var(--color-gray-600);\n  --chevron-size: 12px;\n  --default-padding: 8px;\n  --env-item-background-color: var(--color-gray-100);\n  --env-item-font-size: 28px;\n  --env-item-line-height: 36px;\n  --env-item-padding: 10px 0px;\n  --env-name-min-width: 220px;\n  --footer-padding-vertical: 16px;\n  --gauge-circle-size-big: 96px;\n  --gauge-circle-size: 48px;\n  --gauge-circle-size-sm: 32px;\n  --gauge-label-font-size-big: 18px;\n  --gauge-label-font-size: var(--report-font-size-secondary);\n  --gauge-label-line-height-big: 24px;\n  --gauge-label-line-height: var(--report-line-height-secondary);\n  --gauge-percentage-font-size-big: 38px;\n  --gauge-percentage-font-size: var(--report-font-size-secondary);\n  --gauge-wrapper-width: 120px;\n  --header-line-height: 24px;\n  --highlighter-background-color: var(--report-text-color);\n  --icon-square-size: calc(var(--score-icon-size) * 0.88);\n  --image-preview-size: 48px;\n  --link-color: var(--color-blue-primary);\n  --locale-selector-background-color: var(--color-white);\n  --metric-toggle-lines-fill: #7F7F7F;\n  --metric-value-font-size: calc(var(--report-font-size) * 1.8);\n  --metrics-toggle-background-color: var(--color-gray-200);\n  --plugin-badge-background-color: var(--color-white);\n  --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);\n  --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);\n  --plugin-icon-size: 65%;\n  --pwa-icon-margin: 0 var(--default-padding);\n  --pwa-icon-size: var(--topbar-logo-size);\n  --report-background-color: #fff;\n  --report-border-color-secondary: #ebebeb;\n  --report-font-family-monospace: \'Roboto Mono\', \'Menlo\', \'dejavu sans mono\', \'Consolas\', \'Lucida Console\', monospace;\n  --report-font-family: Roboto, Helvetica, Arial, sans-serif;\n  --report-font-size: 14px;\n  --report-font-size-secondary: 12px;\n  --report-icon-size: var(--score-icon-background-size);\n  --report-line-height: 24px;\n  --report-line-height-secondary: 20px;\n  --report-min-width: 360px;\n  --report-monospace-font-size: calc(var(--report-font-size) * 0.85);\n  --report-text-color-secondary: var(--color-gray-800);\n  --report-text-color: var(--color-gray-900);\n  --report-content-width: calc(60 * var(--report-font-size)); /* defaults to 840px */\n  --score-container-padding: 8px;\n  --score-icon-background-size: 24px;\n  --score-icon-margin-left: 6px;\n  --score-icon-margin-right: 14px;\n  --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);\n  --score-icon-size: 12px;\n  --score-icon-size-big: 16px;\n  --screenshot-overlay-background: rgba(0, 0, 0, 0.3);\n  --section-padding-vertical: calc(var(--default-padding) * 6);\n  --snippet-background-color: var(--color-gray-50);\n  --snippet-color: #0938C2;\n  --sparkline-height: 5px;\n  --stackpack-padding-horizontal: 10px;\n  --sticky-header-background-color: var(--report-background-color);\n  --table-higlight-background-color: hsla(21\n --score-icon-margin-left: 2px;\n --score-icon-size: 10px;\n --topbar-height: 28px;\n --topbar-logo-size: 20px;\n }\n\n /* 没有足够的空间来充分显示相对储蓄条。*/\n .lh-sparkline {\n 显示：无；\n }\n}\n\n.lh-vars.lh-devtools {\n --audit-explanation-line-height: 14px;\n --audit-group-margin-bottom: 20px;\n --audit-group-padding-vertical: 12px;\n --audit-padding-vertical: 4px;\n --category-padding: 12px;\n --default-padding: 12px;\n --env-name-min-width: 120px;\n --footer-padding-vertical: 8px;\n --gauge-circle-size-big: 72px;\n --gauge-circle-size: 64px;\n --gauge-label-font-size-big: 22px;\n --gauge-label-font-size: 14px;\n --gauge-label-line-高度大：26px；\n --gauge-label-line-height：20px；\n --gauge-percentage-font-size-big：34px；\n --gauge-percentage-font-size：26px；\n --gauge-wrapper-width: 97px;\n --header-line-height: 20px;\n --header-padding: 16px 0 16px 0;\n --screenshot-overlay-background: 透明;\ n --plugin-icon-size: 75%;\n --pwa-icon-margin: 0 7px 0 -3px;\n --report-font-family-monospace: \'Menlo\', \'dejavu sans mono\', \'Consolas\', \'Lucida Console\', 等宽；\n --report-font-family: \'.SFNSDisplay-Regular\', \'Helvetica Neue\', \'Lucida Grande\ ', sans-serif;\n --report-font-size: 12px;\n --report-line-height: 20px;\n --score-icon-margin-left: 2px;\n --score- icon-size: 10px;\n --section-padding-vertical: 8px;\n}\n\n.lh-devtools.lh-root {\n height: 100%;\n}\n.lh-devtools .lh-root img {\n /* 覆盖 devtools 默认值 \'min-width: 0\' 因此 flexbox 中没有大小的 svg 不会折叠。*/\n 最小宽度：自动；\n}\n. none;\n box-shadow: 0 0 0 1px hsl(217, 89%, 61%);\n}\n\n.lh-root [hidden] {\n display: none !important;\n}\ n\n.lh-root pre {\n margin: 0;\n}\n\n.lh-root details > summary {\n cursor: pointer;\n}\n\n.lh-hidden {\n display: none !important;\n}\n\n.lh-container {\n /*\n 报告中的文本换行非常有趣！\n 我们有一个全局的 `word-break: break-word;`这里是为了防止一些常见的情况，即\n 不可破坏的长文本（通常是 URL）位于：\n 1. 页脚\n 2. .lh-node (outerHTML)\n 3. .lh-code\n \n 排序后，下一个挑战是在我们的\n .lh-details 表中适当的列大小和文本换行。更有趣。\n * 我们不希望表头 ("Potential Savings (ms)") 或它们的列值换行，但是\n 我们\' 如果 URL 特别长，我们会很高兴 URL 列换行。\n * 我们希望窄列保持窄，为 URL 提供最大的列宽\n * 我们不希望表格超过 100 % 宽度。\n * URL 列中的长 URL 可以换行。Util.getURLDisplayName 将它们最大化为 64 个字符，\n 但它们没有得到任何溢出：省略号处理。\n */\n word-break: break-word;\n}\n\n.lh-audit-group a,\n.lh-category-header__description a,\n.lh-audit__description a,\n.lh-warnings a,\n.lh-footer a,\n.lh-table-column--link a {\ n 颜色: var(--link-color);\n}\n\n.lh-audit__description, .lh-audit__stackpack {\n --inner-audit-padding-right: var(--stackpack-padding-horizo​​ntal );\n padding-left: var(--audit-description-padding-left);\n padding-right: var(--inner-audit-padding-right);\n padding-top: 8px; \n 最大宽度：400px；\n}\n\n\n.lh-audit__display-text，\n.lh-load-opportunity__sparkline，\n.lh-chevron-container {\n 边距：0 var(- -audit-margin-horizo​​ntal);\n}\n.lh-chevron-container {\n margin-right: 0;\n}\n\n.lh-audit__title-and-text {\n flex: 1; \n}\n\n.lh-audit__title-and-text code {\n color: var(--snippet-color);\n font-size: var(--report-monospace-font-size);\ n}\n\n/* 在显示文本前添加 em 破折号分隔符。但不是在机会中。*/\n.lh-audit__display-text:not(:empty):before {\n content: \'鈥擞';\n margin-right: var(--audit-margin-horizo​​ntal);\n}\ n.lh-audit-group.lh-audit-group--load-opportunities .lh-audit__display-text:not(:empty):before {\n display: none;\n}\n\n/* Expandable Details （审计组，审计）*/\n.lh-audit__header {\n display: flex;\n align-items: center;\n padding: var(--default-padding);\n}\n\n. lh-metricfilter__label--active[for="metric-All"] {\n 背景颜色: var(--color-blue-200) !important;\n 颜色: black !important;\n}\n\n .lh-metricfilter__text {\n margin-right: 8px;\n}\n\n/* 如果审核被过滤，隐藏通过审核的 itemcount——*/\n.lh-category--filtered .lh-audit -group .lh-audit-group__itemcount {\n display: none;\n}\n\n\n.lh-audit__header:hover {\n background-color: var(--color-hover);\n}\ n\n/* 我们希望在摘要元素上隐藏浏览器的默认箭头标记。诚然，这很复杂。*/\n.lh-root details > summary {\n /* 闪烁 89+ 并且 Firefox 将在显示从（新）默认的 `list-item` 更改为阻止时隐藏箭头。https://chromestatus.com/feature/6730096436051968*/\n display: block;\n}\n/* Safari 和 Blink < lh-metric__title {\n flex: 1;\n}\n\n.lh-calclink {\n padding-left: calc(1ex / 3);\n}\n\n.lh-metric__description {\n 显示: none;\n grid-column-start: 2;\n grid-column-end: 4;\n color: var(--report-text-color-secondary);\n}\n\n.lh- metric__value {\n font-size: var(--metric-value-font-size);\n margin: calc(var(--default-padding) / 2) 0;\n white-space: nowrap; /* 度量值和图标之间没有换行 */\n grid-column-start: 2;\n}\n\n\n@media screen and (max-width: 535px) {\n .lh-metrics-容器 {\n 显示：块；\n }\n\n .lh-metric {\n 边框底部：无 !important;\n }\n .lh-metric:nth-last-child(1) {\ n border-bottom: 1px solid var(--report-border-color-secondary) !important;\n }\n\n /* 将网格更改为 3 列以实现窄视口。*/\n 。lh-metrics-toggle__labeltext--show {\n display: none;\n}\n.lh-metrics-toggle__input:checked + div > label > .lh-metrics-toggle__labeltext--hide {\n display: inline;\ n}\n.lh-metrics-toggle__input:focus + div > label {\n 轮廓：-webkit-focus-ring-color auto 3px;\n}\n\n.lh-metrics-toggle__label {\n 光标：指针;\n 字体大小: var(--report-font-size-secondary);\n 行高: var(--report-line-height-secondary);\n 颜色: var(--color- gray-700);\n}\n\n/* 向右推动指标描述切换按钮。*/\n.lh-audit-group--metrics .lh-audit-group__header {\n display: flex;\n justify-content: space-between;\n}\n\n.lh-metric__icon,\n .lh-scorescale-range::before {\n 内容: \'\';​​\n 宽度: var(--score-icon-size);\n 高度: var(--score-icon-size);\ n 显示：inline-block;\n 边距：var(--score-icon-margin);\n}\n\n. 100px;\n 最大宽度: 60px;\n}\n\n/* 审核 */\n\n.lh-audit {\n 边框底部: 1px 实心 var(--report-border-color-secondary );\n}\n\n/* 仅对第一次审核应用border-top。*/\n.lh-audit {\n border-top: 1px solid var(--report-border-color-secondary);\n}\n.lh-audit ~ .lh-audit {\n border-top : none;\n}\n\n\n.lh-audit--error .lh-audit__display-text {\n color: var(--color-fail);\n}\n\n/* 审核组*/\n\n.lh-audit-group {\n margin-bottom: var(--audit-group-margin-bottom);\n position: relative;\n}\n.lh-audit-group- -metrics {\n margin-bottom: calc(var(--audit-group-margin-bottom) / 2);\n}\n\n.lh-audit-group__header::before {\n /* 默认, 组没有得到图标 */\n content: none;\n width: var(--pwa-icon-size);\n height: var(--pwa-icon-size);\n margin : var(--pwa-icon-margin);\n display: inline-block;\n vertical-align: middle; \n}\n\n/* 将“超出预算”列设置为红色。*/\n.lh-audit-group--budgets #performance-budget tbody tr td:nth-child(4),\n.lh-audit-group--budgets #performance-budget tbody tr td:nth-child (5),\n.lh-audit-group--budgets #timing-budget tbody tr td:nth-child(3) {\n color: var(--color-red-700);\n}\n \n/* 将“超出预算的请求计数”文本与“超出预算的字节数”列对齐。*/\n.lh-audit-group--budgets .lh-table tbody tr td:nth-child(4){\n text-align: right;\n}\n\n.lh-audit-group- -budgets .lh-details--budget {\n width: 100%;\n margin: 0 0 var(--default-padding);\n}\n\n.lh-audit-group--pwa-installable .lh-audit-group__header::before {\n 内容: \'\';​​\n 背景图片: var(--pwa-installable-gray-url);\n}\n.lh-audit-group- -pwa-optimized .lh-audit-group__header::before {\n 内容：\'-category-padding-sides: calc(var(--report-content-width) - calc(var(--default-padding) * 4) * 2);\n  max-width: var(--content-width-minus-category-padding-sides);\n  padding: var(--toplevel-warning-padding);\n  border-radius: 8px;\n}\n\n.lh-warnings__msg {\n  color: var(--toplevel-warning-message-text-color);\n  margin: 0;\n}\n\n.lh-warnings ul {\n  margin: 0;\n}\n.lh-warnings li {\n  margin: var(--item-margin) 0;\n}\n.lh-warnings li:last-of-type {\n  margin-bottom: 0;\n}\n\n.lh-scores-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.lh-scores-header__solo {\n  padding: 0;\n  border: 0;\n}\n\n/* Gauge */\n\n.lh-gauge__wrapper--pass {\n  color: var(--color-pass-secondary);\n  fill: var(--color-pass);\n  stroke: var(--color-pass);\n}\n\n.lh-gauge__wrapper--average {\n  color: var(--color-average-secondary);\n  fill: var(--color-average);\n  stroke: var(--color-average);\n}\n\n.lh-gauge__wrapper--fail {\n  color: var(--color-fail-secondary);\n  fill: var(--color-fail);\n  stroke: var(--color-fail);\n}\n\n.lh-gauge__wrapper--not-applicable {\n  color: var(--color-not-applicable);\n  fill: var(--color-not-applicable);\n  stroke: var(--color-not-applicable);\n}\n\n.lh-fraction__wrapper .lh-fraction__content::before {\n  content: \'\';\n  height: var(--score-icon-size);\n  width: var(--score-icon-size);\n  margin: var(--score-icon-margin);\n  display: inline-block;\n}\n.lh-fraction__wrapper--pass .lh-fraction__content {\n  color: var(--color-pass-secondary);\n}\n.lh-fraction__wrapper--pass .lh-fraction__background {\n  background-color: var(--color-pass);\n}\n.lh-fraction__wrapper--pass .lh-fraction__content::before {\n  background-color: var(--color-pass);\n  border-radius: 50%;\n}\n.lh-fraction__wrapper--average .lh-fraction__content {\n  color: var(--color-average-secondary);\n}\n.lh-fraction__wrapper--average .lh-fraction__background,\n.lh-fraction__wrapper--average .lh-fraction__content::before {\n  background-color: var(--color-average);\n}\n.lh-fraction__wrapper--fail .lh-fraction__content {\n  color: var(--color-fail);\n}\n.lh-fraction__wrapper--fail .lh-fraction__background {\n  background-color: var(--color-fail);\n}\n.lh-fraction__wrapper--fail .lh-fraction__content::before {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n.lh-fraction__wrapper--null .lh-fraction__content {\n  color: var(--color-gray-700);\n}\n.lh-fraction__wrapper--null .lh-fraction__background {\n  background-color: var(--color-gray-700);\n}\n.lh-fraction__wrapper--null .lh-fraction__content::before {\n  border-radius: 50%;\n  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-700);\n}\n\n.lh-fraction__background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: calc(var(--gauge-circle-size) / 2);\n  opacity: 0.1;\n  z-index: -1;\n}\n\n.lh-fraction__content-wrapper {\n  height: var(--gauge-circle-size);\n  display: flex;\n  align-items: center;\n}\n\n.lh-fraction__content {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(0.3 * var(--gauge-circle-size));\n  line-height: calc(0.4 * var(--gauge-circle-size));\n  width: max-content;\n  min-width: calc(1.5 * var(--gauge-circle-size));\n  padding: calc(0.1 * var(--gauge-circle-size)) calc(0.2 * var(--gauge-circle-size));\n  --score-icon-size: calc(0.21 * var(--gauge-circle-size));\n  --score-icon-margin: 0 calc(0.15 * var(--gauge-circle-size)) 0 0;\n}\n\n.lh-gauge {\n  stroke-linecap: round;\n  width: var(--gauge-circle-size);\n  height: var(--gauge-circle-size);\n}\n\n.lh-category .lh-gauge {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n.lh-gauge-base {\n  opacity: 0.1;\n}\n\n.lh-gauge-arc {\n  fill: none;\n  transform-origin: 50% 50%;\n  animation: load-gauge var(--transition-length) ease forwards;\n  animation-delay: 250ms;\n}\n\n.lh-gauge__svg-wrapper {\n  position: relative;\n  height: var(--gauge-circle-size);\n}\n.lh-category .lh-gauge__svg-wrapper,\n.lh-category .lh-fraction__wrapper {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n/* The plugin badge overlay */\n.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size);\n  height: var(--plugin-badge-size);\n  background-color: var(--plugin-badge-background-color);\n  background-image: var(--plugin-icon-url);\n  background-repeat: no-repeat;\n  background-size: var(--plugin-icon-size);\n  background-position: 58% 50%;\n  content: "";\n  position: absolute;\n  right: -6px;\n  bottom: 0px;\n  display: block;\n  z-index: 100;\n  box-shadow: 0 0 4px rgba(0,0,0,.2);\n  border-radius: 25%;\n}\n.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size-big);\n  height: var(--plugin-badge-size-big);\n}\n\n@keyframes load-gauge {\n  from { stroke-dasharray: 0 352; }\n}\n\n.lh-gauge__percentage {\n  width: 100%;\n  height: var(--gauge-circle-size);\n  position: absolute;\n  font-family: var(--report-font-family-monospace);\n  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);\n  line-height: 0;\n  text-align: center;\n  top: calc(var(--score-container-padding) + var(--gauge-circle-size) / 2);\n}\n\n.lh-category .lh-gauge__percentage {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);\n}\n\n.lh-gauge__wrapper,\n.lh-fraction__wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-decoration: none;\n  padding: var(--score-container-padding);\n\n  --transition-length: 1s;\n\n  /* Contain the layout style paint & layers during animation*/\n  contain: content;\n  will-change: opacity; /* Only using for layer promotion */\n}\n\n.lh-gauge__label,\n.lh-fraction__label {\n  font-size: var(--gauge-label-font-size);\n  font-weight: 500;\n  line-height: var(--gauge-label-line-height);\n  margin-top: 10px;\n  text-align: center;\n  color: var(--report-text-color);\n  word-break: keep-all;\n}\n\n/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */\n.lh-category .lh-gauge__label,\n.lh-category .lh-fraction__label {\n  --gauge-label-font-size: var(--gauge-label-font-size-big);\n  --gauge-label-line-height: var(--gauge-label-line-height-big);\n  margin-top: 14px;\n}\n\n.lh-scores-header .lh-gauge__wrapper,\n.lh-scores-header .lh-fraction__wrapper,\n.lh-scores-header .lh-gauge--pwa__wrapper,\n.lh-sticky-header .lh-gauge__wrapper,\n.lh-sticky-header .lh-fraction__wrapper,\n.lh-sticky-header .lh-gauge--pwa__wrapper {\n  width: var(--gauge-wrapper-width);\n}\n\n.lh-scorescale {\n  display: inline-flex;\n\n  gap: calc(var(--default-padding) * 4);\n  margin: 16px auto 0 auto;\n  font-size: var(--report-font-size-secondary);\n  color: var(--color-gray-700);\n\n}\n\n.lh-scorescale-range {\n  display: flex;\n  align-items: center;\n  font-family: var(--report-font-family-monospace);\n  white-space: nowrap;\n}\n\n.lh-category-header__finalscreenshot .lh-scorescale {\n  border: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.lh-category-header__finalscreenshot .lh-scorescale-range {\n  font-family: unset;\n  font-size: 12px;\n}\n\n.lh-scorescale-wrap {\n  display: contents;\n}\n\n/* Hide category score gauages if it\'s a single category report */\n.lh-header--solo-category .lh-scores-wrapper {\n  display: none;\n}\n\n\n.lh-categories {\n  width: 100%;\n  overflow: hidden;\n}\n\n.lh-category {\n  padding: var(--category-padding);\n  max-width: var(--report-content-width);\n  margin: 0 auto;\n\n  --sticky-header-height: calc(var(--gauge-circle-size-sm) + var(--score-container-padding) * 2);\n  --topbar-plus-sticky-header: calc(var(--topbar-height) + var(--sticky-header-height));\n  scroll-margin-top: var(--topbar-plus-sticky-header);\n\n  /* Faster recalc style & layout of the report. https://web.dev/content-visibility/ */\n  content-visibility: auto;\n  contain-intrinsic-size: 1000px;\n}\n\n.lh-category-wrapper {\n  border-bottom: 1px solid var(--color-gray-200);\n}\n\n.lh-category-wrapper:first-of-type {\n  border-top: 1px solid var(--color-gray-200);\n}\n\n.lh-category-header {\n  margin-bottom: var(--section-padding-vertical);\n}\n\n.lh-category-header .lh-score__gauge {\n  max-width: 400px;\n  width: auto;\n  margin: 0px auto;\n}\n\n.lh-category-header__finalscreenshot {\n  display: grid;\n  grid-template: none / 1fr 1px 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: var(--report-line-height);\n  min-height: 288px;\n  margin-bottom: var(--default-padding);\n}\n\n.lh-final-ss-image {\n  /* constrain the size of the image to not be too large */\n  max-height: calc(var(--gauge-circle-size-big) * 2.8);\n  max-width: calc(var(--gauge-circle-size-big) * 3.5);\n  border: 1px solid var(--color-gray-200);\n  padding: 4px;\n  border-radius: 3px;\n  display: block;\n}\n\n.lh-category-headercol--separator {\n  background: var(--color-gray-200);\n  width: 1px;\n  height: var(--gauge-circle-size-big);\n}\n\n@media screen and (max-width: 780px) {\n  .lh-category-header__finalscreenshot {\n    grid-template: 1fr 1fr / none\n  }\n  .lh-category-headercol--separator {\n    display: none;\n  }\n}\n\n\n/* 964 fits the min-width of the filmstrip */\n@media screen and (max-width: 964px) {\n  .lh-report {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n\n@media print {\n  body {\n    -webkit-print-color-adjust: exact; /* print background colors */\n  }\n  .lh-container {\n    display: block;\n  }\n  .lh-report {\n    margin-left: 0;\n    padding-top: 0;\n  }\n  .lh-categories {\n    margin-top: 0;\n  }\n}\n\n.lh-table {\n  border-collapse: collapse;\n  /* Can\'t assign padding to table, so shorten the width instead. */\n  width: calc(100% - var(--audit-description-padding-left) - var(--stackpack-padding-horizontal));\n  border: 1px solid var(--report-border-color-secondary);\n\n}\n\n.lh-table thead th {\n  font-weight: normal;\n  color: var(--color-gray-600);\n  /* See text-wrapping comment on .lh-container. */\n  word-break: normal;\n}\n\n.lh-row--even {\n  background-color: var(--table-higlight-background-color);\n}\n.lh-row--hidden {\n  display: none;\n}\n\n.lh-table th,\n.lh-table td {\n  padding: var(--default-padding);\n}\n\n.lh-table tr {\n  vertical-align: middle;\n}\n\n/* Looks unnecessary, but mostly for keeping the <th>s left-aligned */\n.lh-table-column--text,\n.lh-table-column--source-location,\n.lh-table-column--url,\n/* .lh-table-column--thumbnail, */\n/* .lh-table-column--empty,*/\n.lh-table-column--code,\n.lh-table-column--node {\n  text-align: left;\n}\n\n.lh-table-column--code {\n  min-width: 100px;\n}\n\n.lh-table-column--bytes,\n.lh-table-column--timespanMs,\n.lh-table-column--ms,\n.lh-table-column--numeric {\n  text-align: right;\n  word-break: normal;\n}\n\n\n\n.lh-table .lh-table-column--thumbnail {\n  width: var(--image-preview-size);\n}\n\n.lh-table-column--url {\n  min-width: 250px;\n}\n\n.lh-table-column--text {\n  min-width: 80px;\n}\n\n/* Keep columns narrow if they follow the URL column */\n/* 12% was determined to be a decent narrow width, but wide enough for column headings */\n.lh-table-column--url + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--ms,\n.lh-table-column--url + .lh-table-column--ms + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--timespanMs {\n  width: 12%;\n}\n\n.lh-text__url-host {\n  display: inline;\n}\n\n.lh-text__url-host {\n  margin-left: calc(var(--report-font-size) / 2);\n  opacity: 0.6;\n  font-size: 90%\n}\n\n.lh-thumbnail {\n  object-fit: cover;\n  width: var(--image-preview-size);\n  height: var(--image-preview-size);\n  display: block;\n}\n\n.lh-unknown pre {\n  overflow: scroll;\n  border: solid 1px var(--color-gray-200);\n}\n\n.lh-text__url > a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.lh-text__url > a:hover {\n  text-decoration: underline dotted #999;\n}\n\n.lh-sub-item-row {\n  margin-left: 20px;\n  margin-bottom: 0;\n  color: var(--color-gray-700);\n}\n.lh-sub-item-row td {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 20px;\n}\n\n/* Chevron\n   https://codepen.io/paulirish/pen/LmzEmK\n */\n.lh-chevron {\n  --chevron-angle: 42deg;\n  /* Edge doesn\'t support transform: rotate(calc(...)), so we define it here */\n  --chevron-angle-right: -42deg;\n  width: var(--chevron-size);\n  height: var(--chevron-size);\n  margin-top: calc((var(--report-line-height) - 12px) / 2);\n}\n\n.lh-chevron__lines {\n  transition: transform 0.4s;\n  transform: translateY(var(--report-line-height));\n}\n.lh-chevron__line {\n stroke: var(--chevron-line-stroke);\n stroke-width: var(--chevron-size);\n stroke-linecap: square;\n transform-origin: 50%;\n transform: rotate(var(--chevron-angle));\n transition: transform 300ms, stroke 300ms;\n}\n\n.lh-expandable-details .lh-chevron__line-right,\n.lh-expandable-details[open] .lh-chevron__line-left {\n transform: rotate(var(--chevron-angle-right));\n}\n\n.lh-expandable-details[open] .lh-chevron__line-right {\n  transform: rotate(var(--chevron-angle));\n}\n\n\n.lh-expandable-details[open]  .lh-chevron__lines {\n transform: translateY(calc(var(--chevron-size) * -1));\n}\n\n.lh-expandable-details[open] {\n  animation: 300ms openDetails forwards;\n  padding-bottom: var(--default-padding);\n}\n\n@keyframes openDetails {\n  from {\n    outline: 1px solid var(--report-background-color);\n  }\n  to {\n   outline: 1px solid;\n   box-shadow: 0 2px 4px rgba(0, 0, 0, .24);\n  }\n}\n\n@media screen and (max-width: 780px) {\n  /* no black outline if we\'re not confident the entire table can be displayed within bounds */\n  .lh-expandable-details[open] {\n    animation: none;\n  }\n}\n\n.lh-expandable-details[open] summary, details.lh-clump > summary {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\ndetails.lh-clump[open] > summary {\n  border-bottom-width: 0;\n}\n\n\n\ndetails .lh-clump-toggletext--hide,\ndetails[open] .lh-clump-toggletext--show { display: none; }\ndetails[open] .lh-clump-toggletext--hide { display: block;}\n\n\n/* Tooltip */\n.lh-tooltip-boundary {\n  position: relative;\n}\n\n.lh-tooltip {\n  position: absolute;\n  display: none; /* Don\'t retain these layers when not needed */\n  opacity: 0;\n  background: #ffffff;\n  white-space: pre-line; /* Render newlines in the text */\n  min-width: 246px;\n  max-width: 275px;\n  padding: 15px;\n  border-radius: 5px;\n  text-align: initial;\n  line-height: 1.4;\n}\n/* shrink tooltips to not be cutoff on left edge of narrow viewports\n   45vw is chosen to be ~= width of the left column of metrics\n*/\n@media screen and (max-width: 535px) {\n  .lh-tooltip {\n    min-width: 45vw;\n    padding: 3vw;\n  }\n}\n\n.lh-tooltip-boundary:hover .lh-tooltip {\n  display: block;\n  animation: fadeInTooltip 250ms;\n  animation-fill-mode: forwards;\n  animation-delay: 850ms;\n  bottom: 100%;\n  z-index: 1;\n  will-change: opacity;\n  right: 0;\n  pointer-events: none;\n}\n\n.lh-tooltip::before {\n  content: "";\n  border: solid transparent;\n  border-bottom-color: #fff;\n  border-width: 10px;\n  position: absolute;\n  bottom: -20px;\n  right: 6px;\n  transform: rotate(180deg);\n  pointer-events: none;\n}\n\n@keyframes fadeInTooltip {\n  0% { opacity: 0; }\n  75% { opacity: 1; }\n  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); pointer-events: auto; }\n}\n\n/* Element screenshot */\n.lh-element-screenshot {\n  position: relative;\n  overflow: hidden;\n  float: left;\n  margin-right: 20px;\n}\n.lh-element-screenshot__content {\n  overflow: hidden;\n}\n.lh-element-screenshot__image {\n  /* Set by ElementScreenshotRenderer.installFullPageScreenshotCssVariable */\n  background-image: var(--element-screenshot-url);\n  outline: 2px solid #777;\n  background-color: white;\n  background-repeat: no-repeat;\n}\n.lh-element-screenshot__mask {\n  position: absolute;\n  background: #555;\n  opacity: 0.8;\n}\n.lh-element-screenshot__element-marker {\n  position: absolute;\n  outline: 2px solid var(--color-lime-400);\n}\n.lh-element-screenshot__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000; /* .lh-topbar is 1000 */\n  background: var(--screenshot-overlay-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n}\n\n.lh-element-screenshot__overlay .lh-element-screenshot {\n  margin-right: 0; /* clearing margin used in thumbnail case */\n  outline: 1px solid var(--color-gray-700);\n}\n\n.lh-screenshot-overlay--enabled .lh-element-screenshot {\n  cursor: zoom-out;\n}\n.lh-screenshot-overlay--enabled .lh-node .lh-element-screenshot {\n  cursor: zoom-in;\n}\n\n\n.lh-meta__items {\n  --meta-icon-size: calc(var(--report-icon-size) * 0.667);\n  padding: var(--default-padding);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-color: var(--env-item-background-color);\n  border-radius: 3px;\n  margin: 0 0 var(--default-padding) 0;\n  font-size: 12px;\n  column-gap: var(--default-padding);\n  color: var(--color-gray-700);\n}\n\n.lh-meta__item {\n  display: block;\n  list-style-type: none;\n  position: relative;\n  padding: 0 0 0 calc(var(--meta-icon-size) + var(--default-padding) * 2);\n  cursor: unset; /* disable pointer cursor from report-icon */\n}\n\n.lh-meta__item.lh-tooltip-boundary {\n  text-decoration: dotted underline var(--color-gray-500);\n  cursor: help;\n}\n\n.lh-meta__item.lh-report-icon::before {\n  position: absolute;\n  left: var(--default-padding);\n  width: var(--meta-icon-size);\n  height: var(--meta-icon-size);\n}\n\n.lh-meta__item.lh-report-icon:hover::before {\n  opacity: 0.7;\n}\n\n.lh-meta__item .lh-tooltip {\n  color: var(--color-gray-800);\n}\n\n.lh-meta__item .lh-tooltip::before {\n  right: auto; /* Set the tooltip arrow to the leftside */\n  left: 6px;\n}\n\n/* Change the grid for narrow viewport. */\n@media screen and (max-width: 640px) {\n  .lh-meta__items {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media screen and (max-width: 535px) {\n  .lh-meta__items {\n    display: block;\n  }\n}\n\n\n/*# sourceURL=report-styles.css */\n'), t.append(n), t
}(e);
case"topbar":
return function (e) {
    const t = e.createFragment(), n = e.createElement("style");
    lh-tools {\n display: flex;\n align-items: center;\n margin-left: auto;\n will-change: transform;\n min-width: var(--report-icon-size) ;\n }\n .lh-tools__button {\n 宽度: var(--report-icon-size);\n 最小宽度: 24px;\n 高度: var(--report-icon-size);\ n cursor:pointer;\n margin-right: 5px;\n /* 这实际上是一个按钮元素，但我们希望将其设置为透明 div 的样式。*/\n 显示：flex；\n 背景：无；\n 颜色：继承；\n 边框：无；\n 填充：0；\n 字体：继承；\n 轮廓：继承；\n }\n . lh-tools__button svg {\n fill: var(--tools-icon-color);\n }\n .lh-dark .lh-tools__button svg {\n filter: invert(1);\n }\n . lh-tools__button.lh-active + .lh-tools__dropdown {\n 不透明度：1；\n 剪辑：rect(-1px, 194px, none;\n }\n /* save-gist 选项隐藏在报告中。*/\n .lh-tools__dropdown a[data-action='save-gist'] {\n display: none;\n }\n\n .lh-locale-selector {\n width: 100%;\n颜色：var(--report-text-color);\n 背景颜色：var(--locale-selector-background-color);\n padding: 2px;\n }\n .lh-tools-locale { \n display: flex;\n align-items: center;\n flex-direction: row-reverse;\n }\n .lh-tools-locale__selector-wrapper {\n transition: opacity 0.15s;\n opacity: 0;\n 最大宽度: 200px;\n }\n .lh-button.lh-tool-locale__button {\n 高度: var(--topbar-height);\n 颜色: var(--tools-icon -color);\n padding: calc(var(--default-padding) / 2);\n }\n .lh-tool-locale__button.lh-active + .lh-tools-locale__selector-wrapper {\n 不透明度: 1;
        const r = e.createElement("div", "lh-topbar"),
            i = e.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-topbar__logo");
        i.setAttribute("viewBox", "0 0 24 24");
        const o = e.createElementNS("http://www.w3.org/2000/svg", "defs"),
            a = e.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        a.setAttribute("x1", "57.456%"), a.setAttribute("y1", "13.086%"), a.setAttribute("x2", "18.259%"), a.setAttribute("y2", "72.322%"), a.setAttribute("id", "lh-topbar__logo--a");
        const s = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        s.setAttribute("stop-color", "#262626"), s.setAttribute("stop-opacity", ".1"), s.setAttribute("offset", "0%");
        const l = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        l.setAttribute("stop-color", "#262626"), l.setAttribute("stop-opacity", "0"), l.setAttribute("offset", "100%"), a.append(" ", s, " ", l, " ");
        const c = e.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        c.setAttribute("x1", "100%"), c.setAttribute("y1", "50%"), c.setAttribute("x2", "0%"), c.setAttribute("y2", "50%"), c.setAttribute("id", "lh-topbar__logo--b");
        const d = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        d.setAttribute("stop-color", "#262626"), d.setAttribute("stop-opacity", ".1"), d.setAttribute("offset", "0%");
        const h = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        h.setAttribute("stop-color", "#262626"), h.setAttribute("stop-opacity", "0"), h.setAttribute("offset", "100%"), c.append(" ", d, " ", h, " ");
        const p = e.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        p.setAttribute("x1", "58.764%"), p.setAttribute("y1", "65.756%"), p.setAttribute("x2", "36.939%"), p.setAttribute("y2", "50.14%"), p.setAttribute("id", "lh-topbar__logo--c");
        const u = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        u.setAttribute("stop-color", "#262626"), u.setAttribute("stop-opacity", ".1"), u.setAttribute("offset", "0%");
        const g = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        g.setAttribute("stop-color", "#262626"), g.setAttribute("stop-opacity", "0"), g.setAttribute("offset", "100%"), p.append(" ", u, " ", g, " ");
        const m = e.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        m.setAttribute("x1", "41.635%"), m.setAttribute("y1", "20.358%"), m.setAttribute("x2", "72.863%"), m.setAttribute("y2", "85.424%"), m.setAttribute("id", "lh-topbar__logo--d");
        const f = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        f.setAttribute("stop-color", "#FFF"), f.setAttribute("stop-opacity", ".1"), f.setAttribute("offset", "0%");
        const v = e.createElementNS("http://www.w3.org/2000/svg", "stop");
        v.setAttribute("stop-color", "#FFF"), v.setAttribute("stop-opacity", "0"), v.setAttribute("offset", "100%"), m.append(" ", f, " ", v, " "), o.append(" ", a, " ", c, " ", p, " ", m, " ");
        const b = e.createElementNS("http://www.w3.org/2000/svg", "g");
        b.setAttribute("fill", "none"), b.setAttribute("fill-rule", "evenodd");
        const _ = e.createElementNS("http://www.w3.org/2000/svg", "path");
        _.setAttribute("d", "M12 3l4.125 2.625v3.75H18v2.25h-1.688l1.5 9.375H6.188l1.5-9.375H6v-2.25h1.875V5.648L12 3zm2.201 9.938L9.54 14.633 9 18.028l5.625-2.062-.424-3.028zM12.005 5.67l-1.88 1.207v2.498h3.75V6.86l-1.87-1.19z"), _.setAttribute("fill", "#F44B21");
        const w = e.createElementNS("http://www.w3.org/2000/svg", "path");
        w.setAttribute("fill", "#FFF"), w.setAttribute("d", "M14.201 12.938L9.54 14.633 9 18.028l5.625-2.062z");
        const y = e.createElementNS("http://www.w3.org/2000/svg", "path");
        y.setAttribute("d", "M6 18c-2.042 0-3.95-.01-5.813 0l1.5-9.375h4.326L6 18z"), y.setAttribute("fill", "url(#lh-topbar__logo--a)"), y.setAttribute("fill-rule", "nonzero"), y.setAttribute("transform", "translate(6 3)");
        const x = e.createElementNS("http://www.w3.org/2000/svg", "path");
        x.setAttribute("fill", "#FFF176"), x.setAttribute("fill-rule", "nonzero"), x.setAttribute("d", "M13.875 9.375v-2.56l-1.87-1.19-1.88 1.207v2.543z");
        const k = e.createElementNS("http://www.w3.org/2000/svg", "path");
        k.setAttribute("fill", "url(#lh-topbar__logo--b)"), k.setAttribute("fill-rule", "nonzero"), k.setAttribute("d", "M0 6.375h6v2.25H0z"), k.setAttribute("transform", "translate(6 3)");
        const E = e.createElementNS("http://www.w3.org/2000/svg", "path");
        E.setAttribute("fill", "url(#lh-topbar__logo--c)"), E.setAttribute("fill-rule", "nonzero"), E.setAttribute("d", "M6 6.375H1.875v-3.75L6 0z"), E.setAttribute("transform", "translate(6 3)");
        const A = e.createElementNS("http://www.w3.org/2000/svg", "path");
        A.setAttribute("fill", "url(#lh-topbar__logo--d)"), A.setAttribute("fill-rule", "nonzero"), A.setAttribute("d", "M6 0l4.125 2.625v3.75H12v2.25h-1.688l1.5 9.375H.188l1.5-9.375H0v-2.25h1.875V2.648z"), A.setAttribute("transform", "translate(6 3)"), b.append(" ", _, " ", w, " ", y, " ", x, " ", k, " ", E, " ", A, " "), i.append(" ", o, " ", b, " ");
        const S = e.createElement("a", "lh-topbar__url");
        S.setAttribute("href", ""), S.setAttribute("target", "_blank"), S.setAttribute("rel", "noopener");
        const C = e.createElement("div", "lh-tools"),
            z = e.createElement("div", "lh-tools-locale lh-hidden"),
            L = e.createElement("button", "lh-button lh-tool-locale__button");
        L.setAttribute("id", "lh-button__swap-locales"), L.setAttribute("title", "Show Language Picker"), L.setAttribute("aria-label", "Toggle language picker"), L.setAttribute("aria-haspopup", "menu"), L.setAttribute("aria-expanded", "false"), L.setAttribute("aria-controls", "lh-tools-locale__selector-wrapper");
        const T = e.createElementNS("http://www.w3.org/2000/svg", "svg");
        T.setAttribute("width", "20px"), T.setAttribute("height", "20px"), T.setAttribute("viewBox", "0 0 24 24"), T.setAttribute("fill", "currentColor");
        const I = e.createElementNS("http://www.w3.org/2000/svg", "path");
        I.setAttribute("d", "M0 0h24v24H0V0z"), I.setAttribute("fill", "none");
        const N = e.createElementNS("http://www.w3.org/2000/svg", "path");
        N.setAttribute("d", "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"), T.append(I, N), L.append(" ", T, " ");
        const R = e.createElement("div", "lh-tools-locale__selector-wrapper");
        R.setAttribute("id", "lh-tools-locale__selector-wrapper"), R.setAttribute("role", "menu"), R.setAttribute("aria-labelledby", "lh-button__swap-locales") , R.setAttribute("aria-hidden", "true"), R.append(" ", " "), z.append(" ", L, " ", R, " ");
        const O = e.createElement("button", "lh-tools__button");
        O.setAttribute("id", "lh-tools-button"), O.setAttribute("title", "工具菜单"), O.setAttribute("aria-label", "切换报表工具菜单"), O .setAttribute("aria-haspopup", "menu"), O.setAttribute("aria-expanded", "
        M.setAttribute("width", "100%"), M.setAttribute("height", "100%"), M.setAttribute("viewBox", "0 0 24 24");
        const F = e.createElementNS("http://www.w3.org/2000/svg", "path");
        F.setAttribute("d", "M0 0h24v24H0z"), F.setAttribute("fill", "none");
        const D = e.createElementNS("http://www.w3.org/2000/svg", "path");
        D.setAttribute("d", "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9 -2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9 -2-2-2z"), M.append(" ", F, " ", D, " "), O.append(" ", M, " ");
        const P = e.createElement("div", "lh-tools__dropdown");
        P.setAttribute("id", "lh-tools-dropdown"), P.setAttribute("role", "menu"), P.setAttribute("aria-labelledby", "lh-tools-button");
        const U = e.createElement("a", "lh-report-icon lh-report-icon--print");
        U.setAttribute("role", "menuitem"), U.setAttribute("tabindex", "-1"), U.setAttribute("href", "#"), U.setAttribute("data-i18n", "dropdownPrintSummary"), U.setAttribute("data-action", "print-summary");
        const H = e.createElement("a", "lh-report-icon lh-report-icon--print");
        H.setAttribute("role", "menuitem"), H.setAttribute("tabindex", "-1"), H.setAttribute("href", "#"), H.setAttribute("data-i18n", "dropdownPrintExpanded"), H.setAttribute("data-action", "print-expanded");
        const B = e.createElement("a", "lh-report-icon lh-report-icon--copy");
        B.setAttribute("role", "menuitem"), B.setAttribute("tabindex", "-1"), B.setAttribute("href", "#"), B.setAttribute("data-i18n", "dropdownCopyJSON"), B.setAttribute("data-action", "copy");
        const V = e.createElement("a", "lh-report-icon lh-report-icon--download");
        V.setAttribute("role", "menuitem"), V.setAttribute("tabindex", "-1"), V.setAttribute("href", "#"), V.setAttribute("data-i18n", "dropdownSaveHTML"), V.setAttribute("data-action", "save-html");
        const j = e.createElement("a", "lh-report-icon lh-report-icon--download");
        j.setAttribute("role", "menuitem"), j.setAttribute("tabindex", "-1"), j.setAttribute("href", "#"), j.setAttribute("data-i18n", "dropdownSaveJSON"), j.setAttribute("data-action", "save-json");
        const G = e.createElement("a", "lh-report-icon lh-report-icon--open");
        G.setAttribute("role", "menuitem"), G.setAttribute("tabindex", "-1"), G.setAttribute("href", "#"), G.setAttribute("data-i18n", "dropdownViewer"), G.setAttribute("data-action", "open-viewer");
        const $ = e.createElement("a", "
        $.setAttribute("role", "menuitem"), $.setAttribute("tabindex", "-1"), $.setAttribute("href", "#"), $.setAttribute("data-i18n", "dropdownSaveGist"), $.setAttribute("data-action", "save-gist");
        const W = e.createElement("a", "lh-report-icon lh-report-icon--dark");
        return W.setAttribute("role", "menuitem"), W.setAttribute("tabindex", "-1"), W.setAttribute("href", "#"), W.setAttribute("data-i18n", "dropdownDarkTheme"), W.setAttribute("data-action", "toggle-dark"), P.append(" ", U, " ", H, " ", B, " ", V, " ", j, " ", G, " ", $, " ", W, " "), C.append(" ", z, " ", O, " ", P, " "), r.append(" ", " ", i, " ", S, " ", C, " "), t.append(r), t
    }(e);
case"warningsToplevel":
    返回函数 (e) {
        const t = e.createFragment(), n = e.createElement("div", "lh-warnings lh-warnings--toplevel"),
            r = e.createElement("p", "lh -warnings__msg"), i = e.createElement("ul");
        return n.append(" ", r, " ", i, " "), t.append(n), t
    }(e)
}
throw new Error("unexpected component: " + t)
}(this, e) , this._componentCache.set(e, t), t.cloneNode(!0)
}

clearComponentCache() {
    this._componentCache.

    for (const n of On.splitMarkdownLink(e)) {
        if (!n.isLink) {
            t.appendChild(this._document.createTextNode(n.text));
            continue
        }
        const e = new URL(n.linkHref);
        ["https://developers.google.com", "https://web.dev"].includes(e.origin) && (e.searchParams.set("utm_source", "lighthouse"), e.searchParams.set("utm_medium", this._lighthouseChannel));
        const r = this.createElement("a");
        r.rel = "noopener", r.target = "_blank", r.textContent = n.text, this.safelySetHref(r, e.href), t.appendChild(r)
    }
    return t
}

safelySetHref(e, t) {
    if ((t = t || "").startsWith("#")) return void (e.href = t);
    let n;
    try {
        n = new URL(t)
    } catch (e) {
    }
    n && ["https:", "http:"].includes(n.protocol) && (e.href = n.href)
}

safelySetBlobHref(e, t) {
    if ("text/html" !== t.type && "application/json" !== t.type) throw new Error("Unsupported blob type");
    const n = URL.createObjectURL(t);
    e.href = n
}

convertMarkdownCodeSnippets(e) {
    const t = this.createElement("span");
    for (const n of On.splitMarkdownCodeSpans(e)) if (n.isCode) {
        const e = this.createElement("code");
        e.textContent = n.text, t.appendChild(e)
    } else t.appendChild(this._document.createTextNode(n.text));
    return t
}

setLighthouseChannel(e) {
    this._lighthouseChannel = e
}

document() {
    return this._document
}

isDevTools() {
    return !!this._document.querySelector(".lh-devtools")
}

find(e, t) {
    const n = t.querySelector(e);
    if (null === n) throw new Error(`query ${e} not found`);
    return n
}

findAll(e, t) {
    return Array.from(t.querySelectorAll(e))
}

fireEventOn(e, t = this._document, n) {
    const r = new CustomEvent(e, n ? {detail: n} : void 0);
    t.dispatchEvent(r)
}

saveFile(e, t) {
    const n = e.type.match("json") ? ".json" : ".html", r = this.createElement("a");
    r.download = `${t}${n}`, this.safelySetBlobHref(r, e), this._document.body.appendChild(r), r.click(), this._document.body.removeChild(r), setTimeout((() => URL.revokeObjectURL(r.href)), 500)
}
}

/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn {
    constructor(e, t) {
        this.dom = e, this.detailsRenderer = t
    }

    get _clumpTitles() {
        return {
            warning: On.i18n.strings.warningAuditsGroupTitle,
            manual: On.i18n.strings.manualAuditsGroupTitle,
            passed: On.i18n.strings.passedAuditsGroupTitle,
            notApplicable: On.i18n.strings.notApplicableAuditsGroupTitle
        }
    }

    renderAudit(e) {
        const t = this.dom.createComponent("audit");
        return this.populateAuditValues(e, t)
    }

    populateAuditValues(e, t) {
        const n = On.i18n.strings, r = this.dom.find(".lh-audit", t);
        r.id = e.result.id;
        const i = e.result.scoreDisplayMode;
        e.result.displayValue && (this.dom.find(".lh-audit__display-text", r).textContent = e.result.displayValue);
        const o = this.dom.find(".lh-audit__title", r);
        o.appendChild(this.dom.convertMarkdownCodeSnippets(e.result.title));
        const a = this.dom.find(".lh-audit__description", r);
        a.appendChild(this.dom.convertMarkdownLinkSnippets(e.result.description));
        for (const t of e.relevantMetrics || []) {
            const e = this.dom.createChildOf(a, "span", "lh-audit__adorn");
            e.title = "Relevant to " + t.result.title, e.textContent = t.acronym || t.id
        }
        e.stackPacks && e.stackPacks.forEach((e => {
            const t = this.dom.createElement("div");
            t.classList.add("lh-audit__stackpack");
            常量 n = this.dom.createElement("img");
            n.classList.add("lh-audit__stackpack__img"), n.src = e.iconDataURL, n.alt = e.title, t.appendChild(n), t.appendChild(this.dom.convertMarkdownLinkSnippets(e.description) ), this.dom.find(".lh-audit__stackpacks", r).appendChild(t)
        }));
        const s = this.dom.find("详细信息", r);
        if (e.result.details) {
            const t = this.detailsRenderer.render(e.result.details);
            t && (t.classList.add("lh-details"), s.appendChild(t))
        }
        if (this.dom.find(".lh-chevron-container", r).appendChild(this._createChevron()), this._setRatingClass(r, e.result.score, i), "error" === e.result.scoreDisplayMode) {
            r.classList.add("lh-audit--error");
            const t = this.dom.find(".lh-audit__display-text", r);
            t.textContent = n.errorLabel, t.classList.add("lh-tooltip-boundary"), this.dom.createChildOf(t, "div", "lh-tooltip lh-tooltip--error").textContent = e.result.errorMessage || n.errorMissingAuditInfo
        } else e.result.explanation && (this.dom.createChildOf(o, "div", "lh-audit-explanation").textContent = e.result.explanation);
        const l = e.result.warnings;
        if (!l || 0 === l.length) return r;
        const c = this.dom.find("summary", s), d = this.dom.createChildOf(c, "div", "lh-warnings");
        if (this.dom.createChildOf(d, "span").textContent = n.warningHeader, 1 === l.length) d.appendChild(this.dom.createTextNode(l.join(""))); else {
            const e = this.dom.createChildOf(d, "ul");
            for (const t of l) this.dom.createChildOf(e, "li").textContent = t
        }
        return r
    }

    injectFinalScreenshot(e, t, n) {
        const r = t["final-screenshot"];
        if (!r || "error" === r.scoreDisplayMode) return null;
        if (!r.details || "screenshot" !== r.details.type) return null;
        const i = this.dom.createElement("img", "lh-final-ss-image"), o = r.details.data;
        i.src = o, i.alt = r.title;
        const a = this.dom.find(".lh-category .lh-category-header", e),
            s = this.dom.createElement("div", "lh-category-headercol"),
            l = this.dom.createElement("div", "lh-category-headercol lh-category-headercol--separator"),
            c = this.dom.createElement("div", "lh-category-headercol");
        s.append(...a.childNodes), s.append(n), c.append(i), a.append(s, l, c), a.classList.add("lh-category-header__finalscreenshot")
    }

    _createChevron() {
        const e = this.dom.createComponent("chevron");
        return this.dom.find("svg.lh-chevron", e)
    }

    _setRatingClass(e, t, n) {
        const r = On.calculateRating(t, n);
        return e.classList.add("lh-audit--" + n.toLowerCase()), "informative" !== n && e.classList.add("lh-audit--" + r), e
    }

    renderCategoryHeader (e, t, n) {
        const r = this.dom.createComponent("categoryHeader"), i = this.dom.find(".lh-score__gauge", r),
            o = this.renderCategoryScore(e, t, n);
        if (i.appendChild(o), e.description) {
            const t = this.dom.convertMarkdownLinkSnippets(e.description);
            this.dom.find(".lh-category-header__description", r)。

        const t = this.dom.createElement("div", "lh-audit-group"),
            n = this.dom.createElement("div", "lh-audit-group__header");
            this.dom.createChildOf(n, "span", "lh-audit-group__title").textContent = e.title, t.appendChild(n);
            let r = null;
            return e.description && (r = this.dom.convertMarkdownLinkSnippets(e.description), r.classList.add("lh-audit-group__description", "lh-audit-group__footer"), t.appendChild(r)), [t, r]
        }

        _renderGroupedAudits(e, t) {
            const n = new Map, r = "NotAGroup";
            n.set(r, []);
            for (const t of e) {
                const e = t.group || r, i = n.get(e) || [];
                i.push(t), n.set(e, i)
            }
            常量 i = [];
            for (const [e, o] of n) {
                if (e === r) {
                    for (const e of o) i.push(this.renderAudit(e));
                    继续
                }
                const n = t[e], [a, s] = this.renderAuditGroup(n);
                for (const e of o) a.insertBefore(this.renderAudit(e), s);
                a.classList.add("lh-audit-group--" + e), i.push(a)
            }
            return i
        }

        renderUnexpandableClump(e, t) {
            const n = this.dom.createElement("div");
            返回 this._renderGroupedAudits(e, t).forEach((e => n.appendChild(e))), n
        }

        renderClump(e, {auditRefs: t, description: n}) {
            const r = this.dom.createComponent("clump"), i = this.dom.find(".lh-clump", r);
            "warning" === e && i.setAttribute("open", "");
            const o = this.dom.find(".lh-audit-group__header", i), a = this._clumpTitles[e];
            this.dom.find(".lh-audit-group__title", o).textContent = a, this.dom.find(".lh-audit-group__itemcount", i).textContent = `(${t.length})`;
            const s = t.map(this.renderAudit.bind(this));
            i.append(...s);
            const l = this.dom.find(".lh-audit-group", r);
            if (n) {
                const e = this.dom.convertMarkdownLinkSnippets(n);
                e.classList.add("lh-audit-group__description", "lh-audit-group__footer"), l.appendChild(e)
            }
            return this.dom.find(".lh-clump-toggletext--show", l).textContent = On.i18n.strings.show, this.dom.find(".lh-clump-toggletext--hide", l).textContent = On.i18n.strings.hide, i.classList.add("lh-clump--" + e.toLowerCase()), l
        }

        renderCategoryScore(e, t, n) {
            return n && On.shouldDisplayAsFraction(n.gatherMode) ? this.renderCategoryFraction(e) : this.renderScoreGauge(e, t)
        }

        renderScoreGauge(e, t) {
            const n = this.dom.createComponent("gauge"), r = this.dom.find("a.lh-gauge__wrapper", n);
            On.isPluginCategory(e.id) && r.classList.add("lh-gauge__wrapper--plugin");
            const i = Number(e.score), o = this.dom.find(".lh-gauge", n), a = this.dom.find("circle.lh-gauge-arc", o);
            a && this._setGaugeArc(a, i);
            const s = Math.round(100 * i), l = this.dom.find("div.lh-gauge__percentage", n);
            return l.textContent = s.toString(), null === e.score && (l.textContent = "?", l.title = On.i18n.strings.errorLabel), 0 === e.auditRefs.length || this.hasApplicableAudits(e) ？r.classList.add("lh-gauge__wrapper--" + On.calculateRating(e.score)) : (r.classList.add("lh-gauge__wrapper--not-applicable"), l.textContent = "-" , l.title = On.i18n.strings.notApplicableAuditsGroupTitle), this.dom.find(".lh-gauge__label", n).textContent = e.title,

            const t = this.dom.createComponent("fraction"), n = this.dom.find("a.lh-fraction__wrapper", t), {
                    numPassed: r,
                    numPassableAudits: i,
                    totalWeight: o
                } = On.calculateCategoryFraction (e), a = r / i, s = this.dom.find(".lh-fraction__content", t),
                l = this.dom.createElement("span");
            l.textContent = `${r}/${i}`, s.appendChild(l);
            让 c = On.calculateRating(a);
            return 0 === o && (c = "null"), n.classList.add("lh-fraction__wrapper--" + c), this.dom.find(".lh-fraction__label", t).textContent = e.title, t
        }

        hasApplicableAudits(e) {
            return e.auditRefs.some((e => "notApplicable" !== e.result.scoreDisplayMode))
        }

        _setGaugeArc(e, t) {
            const n = 2 * Math.PI * Number(e.getAttribute("r")), r = Number(e.getAttribute("stroke-width")),
                i = .25 * r / n;
            e.style.transform = `rotate(${360 * i - 90}deg)`;
            let o = t * n - r / 2;
            0 === t && (e.style.opacity = "0"), 1 === t && (o = n), e.style.strokeDasharray = `${Math.max(o, 0)} ${n}`
        }

        _auditHasWarning(e) {
            return Boolean(e.result.warnings && e.result.warnings.length)
        }

        _getClumpIdForAuditRef(e) {
            const t = e.result.scoreDisplayMode;
            return "manual" === t || "notApplicable" === t ? t : On.showAsPassed(e.result) ? this._auditHasWarning(e) ? "warning" : "passed" : "failed"
        }

        render(e, t = {}, n) {
            const r = this.dom.createElement("div", "lh-category");
            r.id = e.id, r.appendChild(this.renderCategoryHeader(e, t, n));
            const i = new Map;
            i.set("failed", []), i.set("warning", []), i.set("manual", []), i.set("passed", []), i.set("notApplicable", []);
            for (const t of e.auditRefs) {
                const e = this._getClumpIdForAuditRef(t), n = i.get(e);
                n.push(t), i.set(e, n)
            }
            for (const e of i.values()) e.sort(((e, t) => t.weight - e.weight));
            for (const [n, o] of i) {
                if (0 === o.length) continue;
                if ("failed" === n) {
                    const e = this.renderUnexpandableClump(o, t);
                    e.classList.add("lh-clump--failed"), r.appendChild(e);
                    continue
                }
                const i = "manual" === n ? e.manualDescription : void 0,
                    a = this.renderClump(n, {auditRefs: o, description: i});
                r.appendChild(a)
            }
            return r
        }
    }

    /**
     * @license
     * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS-IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class Zn {
    static initTree(e) {
        let t = 0;
        const n = Object.keys(e);
        return n.length > 0 && (t = e[n[0]].request.startTime), {tree: e, startTime: t, transferSize: 0}
    }

    static createSegment(e, t, n, r, i, o) {
        const a = e[t], s = Object.keys(e), l = s.indexOf(t) === s.length - 1,
            c = !!a.children && Object.keys(a.children).length > 0, d = Array.isArray(i) ? i.slice(0) : [];
        return void 0 !== o && d.push(!o), {
            node: a,
            isLastChild: l,
            hasChildren: c,
            startTime: n,
            transferSize: r + a.request.transferSize,
            treeMarkers: d
        }
    }

    static createChainNode(e, t, n) {
        const r = e.createComponent("crcChain");
        e.find(".lh-crc-node", r).setAttribute("title", t.node.request.url);
        const i = e.find(".lh-crc-node__tree-marker", r);
        t.treeMarkers.forEach((t => {
            t ? (i.appendChild(e.createElement("span", "lh-tree-marker lh-vert")), i.appendChild(e.createElement("span", "lh-tree-marker"))) : (i.appendChild(e.createElement("span", "lh-tree-marker")), i.appendChild(e.createElement("span", "lh-tree-marker")))
        })), t.isLastChild ? (i.appendChild(e.createElement("span", "lh-tree-marker lh-up-right")), i.appendChild(e.createElement("span", "lh-tree-marker lh-right"))) : (i.appendChild(e.createElement("span", "lh-tree-marker lh-vert-right")), i.appendChild(e.createElement("span", "lh-tree-marker lh-right"))), t.hasChildren ? i.appendChild(e.createElement("span", "lh-tree-marker lh-horiz-down")) : i.appendChild(e.createElement("span", "lh-tree-marker lh-right"));
        const o = t.node.request.url, a = n.renderTextURL(o), s = e.find(".lh-crc-node__tree-value", r);
        if (s.appendChild(a), !t.hasChildren) {
            const {startTime: n, endTime: r, transferSize: i} = t.node.request,
                o = e.createElement("span", "lh-crc-node__chain-duration");
            o.textContent = " - " + On.i18n.formatMilliseconds(1e3 * (r - n)) + ", ";
            const a = e.createElement("span", "lh-crc-node__chain-duration");
            a.textContent = On.i18n.formatBytesToKiB(i, .01), s.appendChild(o), s.appendChild(a)
        }
        return r
    }

    static buildTree(e, t, n, r, i, o) {
        if (r.appendChild(Qn.createChainNode(e, n, o)), n.node.children) for (const a of Object.keys(n.node.children)) {
            const s = Qn.createSegment(n.node.children, a, n.startTime, n.transferSize, n.treeMarkers, n.isLastChild);
            Qn.buildTree(e, t, s, r, i, o)
        }
    }

    static render(e, t, n) {
        const r = e.createComponent("crc"), i = e.find(".lh-crc", r);
        e.find(".lh-crc-initial-nav", r).textContent = On.i18n.strings.crcInitialNavigation, e.find(".lh-crc__longest_duration_label", r).textContent = On.i18n.strings.crcLongestDurationLabel, e.find(".lh-crc__longest_duration", r).textContent = On.i18n.formatMilliseconds(t.longestChain.duration);
        const o = Qn.initTree(t.chains);
        for (const a of Object.keys(o.tree)) {
            const s = Qn.createSegment(o.tree, a, o.startTime, o.transferSize);
            Qn.buildTree(e, r, s, i, t, n)
        }
        return e.find(".lh-crc-container", r)
    }
}

const Qn = Zn, er = 0, tr = 1, nr = 2, rr = 0, ir = 1, or = 2, ar = 3, sr = {
    0: ["lh-snippet__line--content"],
    1: ["lh-snippet__line--content", "lh-snippet__line--content-highlighted"],
    2: ["lh-snippet__line--placeholder"],
    3: ["lh-snippet__line--message"]
};

/**
 * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */function lr(e, t) {
    return {line: e.find((e => e.lineNumber === t)), previousLine: e.find((e => e.lineNumber === t - 1))}
}

function cr(e, t) {
    return e.filter((e => e.lineNumber === t))
}

function dr(e) {
    return On.filterRelevantLines(e.lines, e.lineMessages, 2)
}

class hr {
    static renderHeader(e, t, n, r) {
        const i = dr(t).length < t.lines.length, o = e.createComponent("snippetHeader");
        e.find(".lh-snippet__title", o).textContent = t.title;
        const {snippetCollapseButtonLabel: a, snippetExpandButtonLabel: s} = On.i18n.strings;
        e.find(".lh-snippet__btn-label-collapse", o).textContent = a, e.find(".lh-snippet__btn-label-expand", o).textContent = s;
        const l = e.find(".lh-snippet__toggle-expand", o);
        return i ? l.addEventListener("click", (() => r())) : l.remove(), t.node && e.isDevTools() && e.find(".lh-snippet__node", o).appendChild(n.renderNode(t.node)), o
    }

    static renderSnippetLine(e, t, {content: n, lineNumber: r, truncated: i, contentType: o, visibility: a}) {
        const s = e.createComponent("snippetLine"), l = e.find(".lh-snippet__line", s), {classList: c} = l;
        sr[o].forEach((e => c.add(e))), 1 === a ? c.add("lh-snippet__show-if-collapsed") : 2 === a && c.add("lh-snippet__show-if-expanded");
        const d = n + (i ? "鈥�" : ""), h = e.find(".lh-snippet__line code", l);
        return 3 === o ? h.appendChild(e.convertMarkdownLinkSnippets(d)) : h.textContent = d, e.find(".lh-snippet__line-number", l).textContent = r.toString(), l
    }

    static renderMessage(e, t, n) {
        return hr.renderSnippetLine(e, t, {lineNumber: " ", content: n.message, contentType: 3})
    }

    static renderOmittedLinesPlaceholder(e, t, n) {
        return hr.renderSnippetLine(e, t, {lineNumber: "鈥�", content: "", visibility: n, contentType: 2})
    }

    static renderSnippetContent(e, t, n) {
        const r = e.createComponent("snippetContent"), i = e.find(".lh-snippet__snippet-inner", r);
        return n.generalMessages.forEach((n => i.append(hr.renderMessage(e, t, n)))), i.append(hr.renderSnippetLines(e, t, n)), r
    }

    static renderSnippetLines(e, t, n) {
        const {lineMessages: r, generalMessages: i, lineCount: o, lines: a} = n, s = dr(n),
            l = i.length > 0 && 0 === r.length, c = e.createFragment();
        let d = !1;
        for (let n = 1; n <= o; n++) {
            const {line: i, previousLine: o} = lr(a, n), {line: h, previousLine: p} = lr(s, n), u = !!h;
            !!p && !u && (d = !0), u && d && (c.append(hr.renderOmittedLinesPlaceholder(e, t, 1)), d = !1);
            const g = !i && 1 === n;
            if (!i && o || g) {
                const r = !s.some((e => e.lineNumber > n)) || 1 === n;
                c.append(hr.renderOmittedLinesPlaceholder(e, t, r ? 2 : 0)), d = !1
            }
            if (!i) continue;
            const m = cr(r, n), f = m.length > 0 || l,
                v = Object.assign({}, i, {contentType: f ? 1 : 0, visibility: h ? 0 : 2});
            c.append(hr.renderSnippetLine(e, t, v)), m.forEach((n => {
                c.append(hr.renderMessage(e, t, n))
            }))
        }
        return c
    }

    static render(e, t, n) {
        const r = e.createComponent("snippet"), i = e.find( ".lh-snippet", r),
            o = hr.renderHeader(e, t, n, (() => i.classList.toggle("lh-snippet--expanded"))),
            a = hr.renderSnippetContent (e, r, t);
        return i.append(o, a), i
        /**
         * @license
         * 版权所有 2017 The Lighthouse Authors。版权所有。
         *
         * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
         * You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS-IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
    }
}

const pr = ["http://", "https://", "data:"];

class ur {
    constructor(e, t = {}) {
        this._dom = e, this._fullPageScreenshot = t.fullPageScreenshot
    }

    render(e) {
        switch (e.type) {
            case"filmstrip":
                return this._renderFilmstrip(e);
            case"list":
                return this._renderList(e);
            case"table":
                return this._renderTable(e);
            case"criticalrequestchain":
                return Zn.render(this._dom, e, this);
            case"opportunity":
                return this._renderTable(e);
            case"screenshot":
            case"debugdata":
            case"full-page-screenshot":
            case"treemap-data":
                return null;
            default:
                return this._renderUnknown(e.type, e)
        }
    }

    _renderBytes(e) {
        const t = On.i18n.formatBytesToKiB(e.value, e.granularity), n = this._renderText(t);
        return n.title = On.i18n.formatBytes(e.value), n
    }

    _renderMilliseconds(e) {
        let t = On.i18n.formatMilliseconds(e.value, e.granularity);
        return "duration" === e.displayUnit && (t = On.i18n.formatDuration(e.value)), this._renderText(t)
    }

    renderTextURL(e) {
        const t = e;
        let n, r, i;
        try {
            const e = On.parseURL(t);
            n = "/" === e.file ? e.origin : e.file, r = "/" === e.file || "" === e.hostname ? "" : `(${e.hostname})`, i = t
        } catch (e) {
            n = t
        }
        const o = this._dom.createElement("div", "lh-text__url");
        if (o.appendChild(this._renderLink({text: n, url: t})), r) {
            const e = this._renderText(r);
            e.classList.add("lh-text__url-host"), o.appendChild(e)
        }
        return i && (o.title = t, o.dataset.url = t), o
    }

    _renderLink(e) {
        const t = this._dom.createElement("a");
        if (this._dom.safelySetHref(t, e.url), !t.href) {
            const t = this._renderText(e.text);
            return t.classList.add("lh-link"), t
        }
        return t.rel = "noopener", t.target = "_blank", t.textContent = e.text, t.classList.add("lh-link"), t
    }

    _renderText(e) {
        const t = this._dom.createElement("div", "lh-text");
        return t.textContent = e, t
    }

    _renderNumeric(e) {
        const t = On.i18n.formatNumber(e.value, e.granularity), n = this._dom.createElement("div", "lh-numeric");
        return n.textContent = t, n
    }

    _renderThumbnail(e) {
        const t = this._dom.createElement("img", "lh-thumbnail"), n = e;
        return t.src = n, t.title = n, t.alt = "", t
    }

    _renderUnknown(e, t) {
        console.error("Unknown details type: " + e, t);
        const n = this._dom.createElement("details", "lh-unknown");
        return this._dom.createChildOf(n, "summary").textContent = `We don't know how to render audit details of type \`${e}\`. The Lighthouse version that collected this data is likely newer than the Lighthouse version of the report renderer. Expand for the raw JSON.`, this._dom.createChildOf(n, "pre").textContent = JSON.stringify(t, null, 2), n
    }

    _renderTableValue(e, t) {
        if (null == e) return null;
        if ("object" == typeof e) switch (e.type) {
            case"code":
                return this._renderCode(e.value);
            case"link":
                return this._renderLink(e);
            case"node":
                return this.renderNode(e);
            case"numeric":
                return this._renderNumeric(e);
            case"source-location":
                return this.renderSourceLocation(e);
            case"url":
                return this.renderTextURL(e.value);
            default:
                return this._renderUnknown(e.type, e)
        }
        switch (t.valueType) {
            case"bytes": {
                const n = Number(e);
                return this._renderBytes({value: n, granularity: t.granularity})
            }
            case"code": {
                const t = String(e);
                return this._renderCode(t)
            }
            case"ms": {
                const n = {value: Number(e), granularity: t.granularity, displayUnit: t.displayUnit};
                return this._renderMilliseconds(n)
            }
            case"numeric": {
                const n = Number(e);
                return this._renderNumeric({value: n, granularity: t.granularity})
            }
            case"text": {
                const t = String(e);
                return this._renderText(t)
            }
            case"thumbnail": {
                const t = String(e);
                return this._renderThumbnail(t)
            }
            case"timespanMs": {
                const t = Number(e);
                return this._renderMilliseconds({value: t})
            }
            case"url": {
                const t = String(e);
                return pr.some((e => t.startsWith(e))) ? this.renderTextURL(t) : this._renderCode(t)
            }
            default:
                return this._renderUnknown(t.valueType, e)
        }
    }

    _getCanonicalizedHeadingsFromTable(e) {
        return "opportunity" === e.type ? e.headings : e.headings.map((e => this._getCanonicalizedHeading(e)))
    }

    _getCanonicalizedHeading(e) {
        让 t;
        return e.subItemsHeading && (t = this._getCanonicalizedsubItemsHeading(e.subItemsHeading, e)), {
            key: e.key,
            valueType: e.itemType,
            subItemsHeading: t,
            label: e.text,
            displayUnit: e.displayUnit,
            粒度: e.granularity
        }
    }

    _getCanonicalizedsubItemsHeading(e, t) {
        return e.key || console.warn("key 不能为空"), {
            key: e.key || "",
            valueType: e.itemType || t.itemType,
            granularity: e.granularity || t.granularity,
            displayUnit: e.displayUnit || t.displayUnit
        }
    }

    _getDerivedsubItemsHeading(e) {
        return e.subItemsHeading ? {
            key: e.subItemsHeading.key || "",
            valueType: e.subItemsHeading.valueType || e.valueType,
            granularity: e.subItemsHeading.granularity || e.granularity,
            displayUnit: e.subItemsHeading.displayUnit || e.displayUnit,
            label: ""
        } : null
    }

    _renderTableRow(e, t) {
        常量 n = this._dom.createElement("tr");
        for (const r of t) {
            if (!r || !r.key) {
                this._dom.createChildOf(n, "td", "lh-table-column--empty");
                继续
            }
            常量 t = e[r.key];
            让我；
            if (null != t && (i = this._renderTableValue(t, r)), i) {
                const e = "lh-table-column--" + r.valueType;
                this._dom.createChildOf(n, "td", e).appendChild(i)
            } 否则 this._dom.createChildOf(n, "td", "lh-table-column--empty"

            const n = this._dom.createFragment();
            if (n.append(this._renderTableRow(e, t)), !e.subItems) return n;
            const r = t.map(this._getDerivedsubItemsHeading);
            if (!r.some(Boolean)) return n;
            for (const t of e.subItems.items) {
                const e = this._renderTableRow(t, r);
                e.classList.add("lh-sub-item-row"), n.append(e)
            }
            return n
        }

        _renderTable(e) {
            if (!e.items.length) return this._dom.createElement("span");
            const t = this._dom.createElement("table", "lh-table"), n = this._dom.createChildOf(t, "thead"),
                r = this._dom.createChildOf(n, "tr"), i = this._getCanonicalizedHeadingsFromTable(e);
            for (const e of i) {
                const t = "lh-table-column--" + (e.valueType || "text"), n = this._dom.createElement("div", "lh-text");
                n.textContent = e.label, this._dom.createChildOf(r, "th", t).appendChild(n)
            }
            const o = this._dom.createChildOf(t, "tbody");
            let a = !0;
            for (const t of e.items) {
                const e = this._renderTableRowsFromItem(t, i);
                for (const t of this._dom.findAll("tr", e)) t.classList.add(a ? "lh-row--even" : "lh-row--odd");
                a = !a, o.append(e)
            }
            return t
        }

        _renderList(e) {
            const t = this._dom.createElement("div", "lh-list");
            return e.items.forEach((e => {
                const n = hr.render(this._dom, e, this);
                t.appendChild(n)
            })), t
        }

        renderNode(e) {
            const t = this._dom.createElement("span", "lh-node");
            if (e.nodeLabel) {
                const n = this._dom.createElement("div");
                n.textContent = e.nodeLabel, t.appendChild(n)
            }
            if (e.snippet) {
                const n = this._dom.createElement("div");
                n.classList.add("lh-node__snippet"), n.textContent = e.snippet, t.appendChild(n)
            }
            if (e.selector && (t.title = e.selector), e.path && t.setAttribute("data-path", e.path), e.selector && t.setAttribute("data-selector", e.selector), e.snippet && t.setAttribute("data-snippet", e.snippet), !this._fullPageScreenshot) return t;
            const n = e.lhId && this._fullPageScreenshot.nodes[e.lhId];
            if (!n || 0 === n.width || 0 === n.height) 返回 t;
            const r = Dn.render(this._dom, this._fullPageScreenshot.screenshot, n, {width: 147, height: 100});
            return r && t.prepend(r), t
        }

        renderSourceLocation(e) {
            if (!e.url) return null;
            常量 t = `${e.url}:${e.line + 1}:${e.column}`;
            if (e.original && (n = `${e.original.file || "<unmapped>"}:${e.original.line + 1}:${e.original.column}`), "network" === e.urlProvider && n) r = this._renderLink({
                url: e.url,
                text: n
            }), r.title = "maps to generated location " + t; else if ("network" !== e.urlProvider || n) if ("comment" === e.urlProvider && n) r = this._renderText(n + " (from source map)"), r.title = t + " (from sourceURL)"; else {
                if ("comment" !== e.urlProvider || n) return null;
                r = this._renderText(t + " (from sourceURL)")
            } else r = this.renderTextURL(e.url), this._dom.find(".lh-link", r).textContent += `:${e.line + 1}:${e.column}`;
            return r.classList.add("lh-source-location"), r.setAttribute("data-source-url", e.url), r.setAttribute("data-source-line", String(e.line )), r.setAttribute("data-source-column", String(e.column)), r
        }

        _renderFilmstrip(e) {
            const t = this._dom.createElement("div", "lh-filmstrip");
            for (const n of e.items) {
                const e = this._dom.createChildOf(t, "div", "lh-filmstrip__frame"),
                    r = this._dom.createChildOf(e, "img", "lh-filmstrip__thumbnail ");
                r.src = n.data, r.alt = "截图"

                return t.textContent = e, t
                /**
                 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
                 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
                 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
                 */
            }
        }

        class gr {
            constructor(e, t) {
                "en-XA" === e && (e = "de"), this._numberDateLocale = e, this._numberFormatter = new Intl.NumberFormat(e), this._percentFormatter = new Intl.NumberFormat(e, {style: "percent"}), this._strings = t
            }

            get strings() {
                return this._strings
            }

            formatNumber(e, t = .1) {
                const n = Math.round(e / t) * t;
                return this._numberFormatter.format(n)
            }

            formatPercent(e) {
                return this._percentFormatter.format(e)
            }

            formatBytesToKiB(e, t = .1) {
                return this._byteFormatterForGranularity(t).format(Math.round(e / 1024 / t) * t) + " KiB"
            }

            formatBytesToMiB(e, t = .1) {
                return this._byteFormatterForGranularity(t).format(Math.round(e / 1048576 / t) * t) + " MiB"
            }

            formatBytes(e, t = 1) {
                return this._byteFormatterForGranularity(t).format(Math.round(e / t) * t) + " bytes"
            }

            formatBytesWithBestUnit(e, t = .1) {
                return e >= 1048576 ? this.formatBytesToMiB(e, t) : e >= 1024 ? this.formatBytesToKiB(e, t) : this.formatNumber(e, t) + " B"
            }

            _byteFormatterForGranularity(e) {
                let t = 0;
                return e < 1 && (t = -Math.floor(Math.log10(e))), new Intl.NumberFormat(this._numberDateLocale, {
                    ...this._numberFormatter.resolvedOptions(),
                    maximumFractionDigits: t,
                    minimumFractionDigits: t
                })
            }

            formatMilliseconds(e, t = 10) {
                const n = Math.round(e / t) * t;
                return 0 === n ? this._numberFormatter.format(0) + " ms" : this._numberFormatter.format(n) + " ms"
            }

            formatSeconds(e, t = .1) {
                const n = Math.round(e / 1e3 / t) * t;
                return this._numberFormatter.format(n) + " s"
            }

            formatDateTime(e) {
                const t = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZoneName: "short"
                };
                let n;
                try {
                    n = new Intl.DateTimeFormat(this._numberDateLocale, t)
                } catch (e) {
                    t.timeZone = "UTC", n = new Intl.DateTimeFormat(this._numberDateLocale, t)
                }
                return n.format(new Date(e))
            }

            formatDuration(e) {
                let t = e / 1e3;
                if (0 === Math.round(t)) return "None";
                const n = [], r = {d: 86400, h: 3600, m: 60, s: 1};
                return Object.keys(r).forEach((e => {
                    const i = r[e], o = Math.floor(t / i);
                    o > 0 && (t -= o * i, n.push(`${o} ${e}`))
                })), n.join(" ")
                /**
                 * @license
                 * 版权所有 2018 灯塔作者。版权所有。
                 *
                 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
                 * 除非遵守许可，否则您不得使用此文件。
                 * 您可以在*
                 * http://www.apache.org/licenses/LICENSE-2.0
                 * *
                 获得许可证的副本*
                 * 除非适用法律要求或书面同意，否则
                 根据许可证分发的软件 * 在“原样”基础，
                 * 不提供任何明示或暗示的保证或条件。
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
            }
        }

        class mr extends Yn {
            _renderMetric(e) {
                const t = this.dom.createComponent("metric"), n = this.dom.find(".lh-metric", t);
                n.id = e.result.id;
                const r = On.calculateRating(e.result.score, e.result.scoreDisplayMode);
                n.classList.add("lh-metric--" + r), this.dom.find(".lh-metric__title", t).textContent = e.result.title;
                const i = this.dom.find(".lh-metric__value", t);
                i.textContent = e.result.displayValue || "";
                const o = this.dom.find(".lh-metric__description", t);
                return o.appendChild(this.dom.convertMarkdownLinkSnippets(e.result.description)), "error" === e.result.scoreDisplayMode && (o.textContent = "", i.textContent = "Error!", this.dom.createChildOf(o, "span").textContent = e.result.errorMessage || "Report error: no metric information"), n
            }

            _renderOpportunity(e, t) {
                const n = this.dom.createComponent("opportunity"), r = this.populateAuditValues(e, n);
                if (r.id = e.result.id, !e.result.details || "error" === e.result.scoreDisplayMode) return r;
                const i = e.result.details;
                if ("opportunity" !== i.type) return r;
                const o = this.dom.find("span.lh-audit__display-text, div.lh-audit__display-text", r),
                    a = i.overallSavingsMs / t * 100 + "%";
                if (this.dom.find("div.lh-sparkline__bar", r).style.width = a, o.textContent = On.i18n.formatSeconds(i.overallSavingsMs, .01), e.result.displayValue) {
                    const t = e.result.displayValue;
                    this.dom.find("div.lh-load-opportunity__sparkline", r).title = t, o.title = t
                }
                return r
            }

            _getWastedMs(e) {
                if (e.result.details && "opportunity" === e.result.details.type) {
                    const t = e.result.details;
                    if ("number" != typeof t.overallSavingsMs) throw new Error("non-opportunity details passed to _getWastedMs");
                    return t.overallSavingsMs
                }
                return Number.MIN_VALUE
            }

            _getScoringCalculatorHref(e) {
                const t = e.filter((e => "metrics" === e.group)), n = e.find((e => "first-cpu-idle" === e.id)),
                    r = e.find((e => "first-meaningful-paint" === e.id));
                n && t.push(n), r && t.push(r);
                const i = [...t.map((e => {
                    let t;
                    var n;
                    return "number" == typeof e.result.numericValue ? (t = "cumulative-layout-shift" === e.id ? (n = e.result.numericValue, Math.round(100 * n) / 100) : Math.round(e.result.numericValue), t = t.toString()) : t = "null", [e.acronym || e.id, t]
                }))];
                On.reportJson && (i.push(["device", On.reportJson.configSettings.formFactor]), i.push(["version", On.reportJson.lighthouseVersion]));
                const o = new URLSearchParams(i), a = new URL("https://googlechrome.github.io/lighthouse/scorecalc/");
                return a.hash = o.toString(), a.href
            }

            _classifyPerformanceAudit(e) {
                return e.group ? null : e.result.details && "opportunity" === e.result.details.type ? "load-opportunity" : "diagnostic"
            }

            render(e, t, n) {
                const r = On.i18n.strings, i = this.dom.createElement("div", "lh-category");
                i.id = e.id, i.appendChild(this.renderCategoryHeader(e, t, n));
                const o = e.auditRefs.filter((e => "metrics" === e.group));
                if (o.length) {
                    const [n, a] = this.renderAuditGroup(t.metrics),
                        s = this.dom.createElement("input", "lh-metrics-toggle__input"),
                        l = "lh-metrics-toggle" + On.getUniqueSuffix();
                    s.setAttribute("aria-label", "Toggle the display of metric descriptions"), s.type = "checkbox", s.id = l, n.prepend(s);
                    const c = this.dom.find(".lh-audit-group__header", n),
                        d = this.dom.createChildOf(c, "label", "lh-metrics-toggle__label");
                    d.htmlFor = l;
                    const h = this.dom.createChildOf(d, "span", "lh-metrics-toggle__labeltext--show"),
                        p = this.dom.createChildOf(d, "span", "lh-metrics-toggle__labeltext--hide");
                    h.textContent = On.i18n.strings.expandView, p.textContent = On.i18n.strings.collapseView;
                    const u = this.dom.createElement("div", "lh-metrics-container");
                    n.insertBefore(u, a), o.forEach((e => {
                        u.appendChild(this._renderMetric(e))
                    }));
                    const g = this.dom.find(".lh-category-header__description", i),
                        m = this.dom.createChildOf(g, "div", "lh-metrics__disclaimer"),
                        f = this.dom.convertMarkdownLinkSnippets(r.varianceDisclaimer);
                    m.appendChild(f);
                    const v = this.dom.createChildOf(m, "a", "lh-calclink");
                    v.target = "_blank", v.textContent = r.calculatorLink, this.dom.safelySetHref(v, this._getScoringCalculatorHref(e.auditRefs)), n.classList.add("lh-audit-group--metrics"), i.appendChild(n)
                }
                const a = this.dom.createChildOf(i, "div", "lh-filmstrip-container"),
                    s = e.auditRefs.find((e => "screenshot-thumbnails" === e.id)), l = s && s.result;
                if (l && l.details) {
                    a.id = l.id;
                    const e = this.detailsRenderer.render(l.details);
                    e && a.appendChild(e)
                }
                const c = e.auditRefs.filter((e => "load-opportunity" === this._classifyPerformanceAudit(e))).filter((e => !On.showAsPassed(e.result))).sort( ((e, t) => this._getWastedMs(t) - this._getWastedMs(e))),
                    d = o.filter((e => !!e.relevantAudits));
                if (d.length && this.renderMetricAuditFilter(d, i), c.length) {
                    const e = 2e3, n = c.map((e => this._getWastedMs(e))), o = Math.max( ...n),
                        a = Math.max(1e3 * Math.ceil(o / 1e3), e), [s, l] = this.renderAuditGroup(t["load-opportunities"]),
                        d = this。 dom.createComponent("opportunityHeader");
                    this.dom.find(".lh-load-opportunity__col--one", d).textContent = r.opportunityResourceColumnLabel, this.dom.find(".lh-load-opportunity__col--two", d).textContent = r.opportunitySavingsColumnLabel;
                    const h = this.dom.find(".lh-load-opportunity__header", d);
                    s.insertBefore(h, l), c.forEach((e => s.insertBefore(this._renderOpportunity(e, a), l))), s.classList.add("lh-audit-group--load-opportunities"), i.appendChild(s)
                }
                const h = e.auditRefs.filter((e => "diagnostic" === this._classifyPerformanceAudit(e))).filter((e => !On.showAsPassed(e.result))).sort(((e, t) => ("informative" === e.result.scoreDisplayMode ? 100 : Number(e.result.score)) - ("informative" === t.result.scoreDisplayMode ? 100 : Number(t.result.score))));
                if (h.length) {
                    const [e, n] = this.renderAuditGroup(t.diagnostics);
                    h.forEach((t => e.insertBefore(this.renderAudit(t), n))), e.classList.add("lh-audit-group--diagnostics"), i.appendChild(e)
                }
                const p = e.auditRefs.filter((e => this._classifyPerformanceAudit(e) && On.showAsPassed(e.result)));
                if (!p.length) return i;
                const u = {auditRefs: p, groupDefinitions: t}, g = this.renderClump("passed", u);
                i.appendChild(g);
                const m = [];
                if (["performance-budget", "timing-budget"].forEach((t => {
                    const n = e.auditRefs.find((e => e.id === t));
                    if (n && n.result.details) {
                        const e = this.detailsRenderer.render(n.result.details);
                        e && (e.id = t, e.classList.add("lh-details", "lh-details--budget", "lh-audit"), m.push(e))
                    }
                })), m.length > 0) {
                    const [e, n] = this.renderAuditGroup(t.budgets);
                    m.forEach((t => e.insertBefore(t, n))), e.classList.add("lh-audit-group--budgets"), i.appendChild(e)
                }
                return i
            }

            renderMetricAuditFilter(e, t) {
                const n = this.dom.createElement("div", "lh-metricfilter");
                this.dom.createChildOf(n, "span", "lh-metricfilter__text").textContent = On.i18n.strings.showRelevantAudits;
                const r = [{acronym: "All"}, ...e], i = On.getUniqueSuffix();
                for (const e of r) {
                    const r = `metric-${e.acronym}-${i}`, o = this.dom.createChildOf(n, "input", "lh-metricfilter__radio");
                    o.type = "radio", o.name = "metricsfilter-" + i, o.id = r;
                    const a = this.dom.createChildOf(n, "label", "lh-metricfilter__label");
                    a.htmlFor = r, a.title = e.result && e.result.title, a.textContent = e.acronym || e.id, "All" === e.acronym && (o.checked = !0, a.classList.add("lh-metricfilter__label--active")), t.append(n), o.addEventListener("input", (n => {
                        for (const e of t.querySelectorAll("label.lh-metricfilter__label")) e.classList.toggle("lh-metricfilter__label--active", e.htmlFor === r);
                        t.classList.toggle("lh-category--filtered", "All" !== e.acronym);
                        for (const n of t.querySelectorAll("div.lh-audit")) "All" !== e.acronym ? (n.hidden = !0, e.relevantAudits && e.relevantAudits.includes(n.id) && (n.hidden = !1)) : n.hidden = !1;
                        const i = t.querySelectorAll("div.lh-audit-group, details.lh-audit-group");
                        for (const e of i) {
                            e.hidden = !1;
                            const t = Array.from(e.querySelectorAll("div.lh-audit")),
                                n = !!t.length && t.every((e => e.hidden));
                            e.hidden = n
                        }
                    }))
                }
            }
        }

        /**
         * @license
         * 版权所有 2018 灯塔作者。版权所有。
         *
         * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；
         * 除非遵守许可，否则您不得使用此文件。
         * 您可以在*
         * http://www.apache.org/licenses/LICENSE-2.0
         * *
         获得许可证的副本*
         * 除非适用法律要求或书面同意，否则
         根据许可证分发的软件 * 在“原样”基础，
         * 不提供任何明示或暗示的保证或条件。
         * 请参阅许可证以了解许可证下的特定语言管理权限和
         * 限制。
         */
        class fr extends Yn {
            render(e, t = {}) {
                const n = this.dom.createElement("div", "lh-category");
                n.id = e.id, n.appendChild(this.renderCategoryHeader(e, t));
                const r = e.auditRefs, i = r.filter((e => "manual" !== e.result.scoreDisplayMode)),
                    o = this._renderAudits(i, t);
                n.appendChild(o);
                const a = r.filter((e => "manual" === e.result.scoreDisplayMode)),
                    s = this.renderClump("manual", {auditRefs: a, description: e.manualDescription});
                return n.appendChild(s), n
            }

            renderCategoryScore(e, t) {
                if (null === e.score) return super.renderScoreGauge(e, t);
                const n = this.dom.createComponent("gaugePwa"), r = this.dom.find("a.lh-gauge--pwa__wrapper", n),
                    i = n.querySelector("svg");
                if (!i) throw new Error("在 PWA 评分表模板中找不到 SVG 元素");
                fr._makeSvgReferencesUnique(i);
                const o = this._getGroupIds(e.auditRefs), a = this._getPassingGroupIds(e.auditRefs);
                if (a.size === o.size) r.classList.add("lh-badged--all"); else for (const e of a) r.classList.add("lh-badged--" + e);
                return this.dom.find(".lh-gauge__label", n).textContent = e.title, r.title = this._getGaugeTooltip(e.auditRefs, t), n
            }

            _getGroupIds(e) {
                const t = e.地图（（e => e。
        return new Set(t)
            }

            _getPassingGroupIds(e) {
                const t = this._getGroupIds(e);
                for (const n of e) !On.showAsPassed(n.result) && n.group && t.delete(n.group);
                return t
            }

            _getGaugeTooltip(e, t) {
                const n = this._getGroupIds(e), r = [];
                for (const i of n) {
                    const n = e.filter((e => e.group === i)), o = n.length,
                        a = n.filter((e => On.showAsPassed(e.result))).length, s = t[i].title;
                    r.push(`${s}: ${a}/${o}`)
                }
                return r.join(", ")
            }

            _renderAudits(e, t) {
                const n = this.renderUnexpandableClump(e, t), r = this._getPassingGroupIds(e);
                for (const e of r) this.dom.find(".lh-audit-group--" + e, n).classList.add("lh-badged");
                return n
            }

            static _makeSvgReferencesUnique(e) {
                const t = e.querySelector("defs");
                if (!t) return;
                const n = On.getUniqueSuffix(), r = t.querySelectorAll("[id]");
                for (const t of r) {
                    const r = t.id, i = `${r}-${n}`;
                    t.id = i;
                    const o = e.querySelectorAll(`use[href="#${r}"]`);
                    for (const e of o) e.setAttribute("href", "#" + i);
                    const a = e.querySelectorAll(`[fill="url(#${r})"]`);
                    for (const e of a) e.setAttribute("fill", `url(#${i})`)
                }
            }
        }

        /**
         * @license
         * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS-IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * Dummy text for ensuring report robustness: <\/script> pre$`post %%LIGHTHOUSE_JSON%%
         * (this is handled by terser)
         */
        class vr {
            constructor(e) {
                this._dom = e, this._opts = {}
            }

            renderReport(e, t, n) {
                if (!this._dom.rootEl && t) {
                    console.warn("Please adopt the new report API in renderer/api.js.");
                    const e = t.closest(".lh-root");
                    e ? this._dom.rootEl = e : (t.classList.add("lh-root", "lh-vars"), this._dom.rootEl = t)
                } else this._dom.rootEl && t && (this._dom.rootEl = t);
                n && (this._opts = n), this._dom.setLighthouseChannel(e.configSettings.channel || "unknown");
                const r = On.prepareReportResult(e);
                return this._dom.rootEl.textContent = "", this._dom.rootEl.appendChild(this._renderReport(r)), this._dom.rootEl
            }

            _renderReportTopbar(e) {
                const t = this._dom.createComponent("topbar"), n = this._dom.find("a.lh-topbar__url", t);
                return n.textContent = e.finalUrl, n.title = e.finalUrl, this._dom.safelySetHref(n, e.finalUrl), t
            }

            _renderReportHeader() {
                const e = this._dom.createComponent("heading"), t = this._dom.createComponent("scoresWrapper");
                return this._dom.find(".lh-scores-wrapper-placeholder", e).replaceWith(t), e
            }

            _renderReportFooter(e) {
                const t = this._dom.createComponent("footer");
                return this._renderMetaBlock(e, t), this._dom.find(".lh-footer__version_issue", t).textContent = On.i18n.strings.footerIssue, this._dom.find(".lh-footer__version", t).textContent = e.lighthouseVersion, t
            }

            _renderMetaBlock(e, t) {
                const n = On.getEmulationDescriptions(e.configSettings || {}), r = e.userAgent.match(/(\w*Chrome\/[\d.]+)/),
                    i = Array.isArray(r) ? r[1].replace("/", " ").replace("Chrome", "Chromium") : "Chromium",
                    o = e.configSettings.channel, a = e.environment.benchmarkIndex.toFixed(0),
                    s = e.environment.credits?.["axe-core"],
                    l = [["date", "Captured at " + On.i18n.formatDateTime(e.fetchTime)], ["devices", `${n.deviceEmulation} with Lighthouse ${e.lighthouseVersion}`, `${On.i18n.strings.runtimeSettingsBenchmark}: ${a}\n${On.i18n.strings.runtimeSettingsCPUThrottling}: ${n.cpuThrottling}` + (s ? `\n${On.i18n.strings.runtimeSettingsAxeVersion}: ${s}` : "")], ["samples-one", On.i18n.strings.runtimeSingleLoad, On.i18n.strings.runtimeSingleLoadTooltip], ["stopwatch", On.i18n.strings.runtimeAnalysisWindow], ["networkspeed", "" + n.summary, `${On.i18n.strings.runtimeSettingsNetworkThrottling}: ${n.networkThrottling}`], ["chrome", "Using " + i + (o ? " with " + o : ""), `${On.i18n.strings.runtimeSettingsUANetwork}: "${e.environment.networkUserAgent}"`]],
                    c = this._dom.find(".lh-meta__items", t);
                for (const [e, t, n] of l) {
                    const r = this._dom.createChildOf(c, "li", "lh-meta__item");
                    r.textContent = t, n && (r.classList.add("lh-tooltip-boundary"), this._dom.createChildOf(r, "div", "lh-tooltip").textContent = n), r.classList.add("lh-report-icon", "lh-report-icon--" + e)
                }
            }

            _renderReportWarnings(e) {
                if (!e.runWarnings || 0 === e.runWarnings.length) return this._dom.createElement("div");
                const t = this._dom.createComponent("warningsToplevel");
                this._dom.find(".lh-warnings__msg", t).textContent = On.i18n.strings.toplevelWarningsMessage;
                常量 n = this._dom.find("ul", t);
                for (const t of e.runWarnings) n.appendChild(this._dom.createElement("li")).appendChild(this._dom.convertMarkdownLinkSnippets(t));
                返回 t
            }

            _renderScoreGauges(e, t, n) {
                const r = [], i = [], o = [];
                for (const a of Object.values(e.categories)) {
                    const s = n[a.id] || t, l = s.renderCategoryScore(a, e.categoryGroups || {}, {gatherMode: e.gatherMode}),
                        c = this._dom.find("a.lh-gauge__wrapper, a.lh-fraction__wrapper", l );
                    c && (this._dom.safelySetHref(c, "#" + a.id), c.addEventListener("click", (e => {
                        if (!c.matches('[href^="
                            const t = c.getAttribute("href"), n = this._dom.rootEl;
                        if (!t || !n) return;
                        const r = this._dom.find(t, n);
                        e.preventDefault(), r.scrollIntoView()
                    }))), On.isPluginCategory(a.id) ? o.push(l) : s.renderCategoryScore === t.renderCategoryScore ? r.push(l) : i.push(l)
                }
                return [...r, ...i, ...o]
            }

            _renderReport(e) {
                const t = new gr(e.configSettings.locale, {...On.UIStrings, ...e.i18n.rendererFormattedStrings});
                On.i18n = t, On.reportJson = e;
                const n = e.audits["full-page-screenshot"] && e.audits["full-page-screenshot"].details && "full-page-screenshot" === e.audits["full-page-screenshot"].details.type ? e.audits["full-page-screenshot"].details : void 0,
                    r = new ur(this._dom, {fullPageScreenshot: n}), i = new Yn(this._dom, r),
                    o = {performance: new mr(this._dom, r), pwa: new fr(this._dom, r)}, a = this._dom.createElement("div");
                a.appendChild(this._renderReportHeader());
                const s = this._dom.createElement("div", "lh-container"), l = this._dom.createElement("div", "lh-report");
                let c;
                l.appendChild(this._renderReportWarnings(e)), 1 === Object.keys(e.categories).length ? a.classList.add("lh-header--solo-category") : c = this._dom.createElement("div", "lh-scores-header");
                const d = this._dom.createElement("div");
                if (d.classList.add("lh-scorescale-wrap"), d.append(this._dom.createComponent("scorescale")), c) {
                    const t = this._dom.find(".lh-scores-container", a);
                    c.append(...this._renderScoreGauges(e, i, o)), t.appendChild(c), t.appendChild(d);
                    const n = this._dom.createElement("div", "lh-sticky-header");
                    n.append(...this._renderScoreGauges(e, i, o)), s.appendChild(n)
                }
                const h = l.appendChild(this._dom.createElement("div", "lh-categories")), p = {gatherMode: e.gatherMode};
                for (const t of Object.values(e.categories)) {
                    const n = o[t.id] || i;
                    n.dom.createChildOf(h, "div", "lh-category-wrapper").appendChild(n.render(t, e.categoryGroups, p))
                }
                i.injectFinalScreenshot(h, e.audits, d);
                const u = this._dom.createFragment();
                return u.append(this._dom.createComponent("styles")), this._opts.omitTopbar || u.appendChild(this._renderReportTopbar(e)), u.appendChild(s), s.appendChild(a), s.appendChild(l), l.appendChild(this._renderReportFooter(e)), n && Dn.installFullPageScreenshot(this._dom.rootEl, n.screenshot), u
                /**
                 * @license 版权所有 2017 灯塔作者。版权所有。
                 * 根据 Apache 许可证 2.0 版（“许可证”）获得许可；除非遵守许可，否则您不得使用此文件。您可以在 http://www.apache.org/licenses/LICENSE-2.0 获得许可的副本
                 * 除非适用法律要求或书面同意，否则根据许可分发的软件按“原样”分发, 没有任何明示或暗示的保证或条件。有关许可下的特定语言管理权限和限制，请参阅许可。
                 */
            }
        }

        函数 _r(e, t) {
            const n = t.querySelector(e);
            if (null === n) throw new Error(`query ${e} not found`);
            return n
        }

        class br {
            constructor() {
                this._onPaste = this._onPaste.bind(this), this._onSaveJson = this._onSaveJson.bind(this), this._onFileLoad = this._onFileLoad.bind(this), this._onUrlInputChange = this._onUrlInputChange.bind(this), this._dragAndDropper = new i(this._onFileLoad), this._github = new Cn, this._psi = new Tn, this._reportIsFromGist = !1, this._reportIsFromPSI = !1, this._reportIsFromJSON = !1, this._addEventListeners(), this._loadFromDeepLink(), this._listenForMessages()
            }

            static get APP_URL() {
                return `${location.origin}${location.pathname}`
            }

            _addEventListeners() {
                document.addEventListener("paste", this._onPaste), _r(".js-gist-url", document).addEventListener("change", this._onUrlInputChange);
                const e = _r("input#hidden-file-input", document);
                e.addEventListener("change", (e => {
                    if (!e.target) return;
                    const t = e.target;
                    t.files && this._dragAndDropper.readFile(t.files[0]).then(( e => {
                        this._onFileLoad(e)
                    })).catch((e => logger.error(e))), t.value = ""
                })), _r(".viewer-placeholder-inner", document).addEventListener("click", (t => {
                    const n = t.target;
                    n && "
                }

                _loadFromDeepLink() {
                    const e = new URLSearchParams(location.search), t = e.get("gist"), n = e.get("psiurl"), r = e.get("jsonurl"),
                        i = "1" === e.get("gzip");
                    if (location.hash) {
                        const e = JSON.parse(jn.fromBase64(location.hash.substr(1), {gzip: i}));
                        if (e.lhr) return this._replaceReportHtml(e.lhr), Promise.resolve();
                        console.warn("URL hash is populated, but not decoded successfully", e)
                    }
                    if (!t && !n && !r) return Promise.resolve();
                    this._toggleLoadingBlur(!0);
                    let o = Promise.resolve();
                    return n ? o = this._fetchFromPSI({
                        url: n,
                        category: e.has("category") ? e.getAll("category") : void 0,
                        strategy: e.get("strategy") || void 0,
                        locale: e.get("locale") || void 0,
                        utm_source: e.get("utm_source") || void 0
                    }) : t ? o = this._github.getGistFileContentAsJson(t).then((e => {
                        this._reportIsFromGist = !0, this._replaceReportHtml(e)
                    })).catch((e => logger.error(e.message))) : r && (o = this._github.getFirebaseAuth().getAccessTokenIfLoggedIn().then((e => e ? Promise.reject(new Error("Can only use jsonurl when not logged in")) : null)).then((() => fetch(r))).then((e => e.json())).then((e => {
                        this._reportIsFromJSON = !0, this._replaceReportHtml(e)
                    })).catch((e => logger.error(e.message)))), o.finally((() => this._toggleLoadingBlur(!1)))
                }

                _validateReportJson(e) {
                    if (!e.lighthouseVersion) throw new Error("JSON file was not generated by Lighthouse");
                    const t = new RegExp(/^(\d+)?\.(\d+)?\.(\d+)$/);
                    e.lighthouseVersion.replace(t, "$1.$2") < window.LH_CURRENT_VERSION.replace(t, "$1.$2") && logger.warn(`Results may not display properly.\nReport was created with an earlier version of Lighthouse (${e.lighthouseVersion}). The latest version is ${window.LH_CURRENT_VERSION}.`)
                }

                _replaceReportHtml(e) {
                    if ("lhr" in e && (e = e.lhr), "lighthouseResult" in e && (e = e.lighthouseResult), window.__LIGHTHOUSE_JSON__ = e, console.log("window.__LIGHTHOUSE_JSON__", e), this._validateReportJson(e), e.lighthouseVersion.startsWith("2")) return void this._loadInLegacyViewerVersion(e);
                    const t = new Xn(document), n = new vr(t), r = _r("main", document);
                    try {
                        let i;
                        n.renderReport(e, r), this._reportIsFromGist || (i = this._onSaveJson), this._reportIsFromGist || this._reportIsFromPSI || this._reportIsFromJSON || history.pushState({}, "", br.APP_URL), new Jn(t, {
                            saveGist: i,
                            refresh: e => {
                                this._replaceReportHtml(e)
                            }
                        }).initFeatures(e)
                    } catch (e) {
                        throw logger.error("Error rendering report: " + e.message), r.textContent = "", e
                    } finally {
                        this._reportIsFromGist = this._reportIsFromPSI = this._reportIsFromJSON = !1
                    }
                    const i = document.querySelector(".viewer-placeholder");
                    i && i.remove(), window.ga && window.ga("send", "event", "report", "view")
                }

                _onFileLoad(e) {
                    let t;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        return void logger.error("Could not parse JSON file.")
                    }
                    try {
                        this._replaceReportHtml(t)
                    } catch (e) {
                        logger.error(e.message)
                    }
                }

                _loadInLegacyViewerVersion(e) {
                    logger.log("Version mismatch between viewer and JSON. Opening compatible viewer...", !1);
                    const t = new URL("../viewer2x/", location.href);
                    r.set("2xreport", e).then((e => {
                        window.location.href = t.href
                    }))
                }

                async _onSaveJson(e) {
                    window.ga && window.ga("send", "event", "report", "share");
                    try {
                        const t = await this._github.createGist(e);
                        return window.ga && window.ga("send", "event", "report", "created"), history.pushState({}, "", `${br.APP_URL}?gist=${t}`), t
                    } catch (e) {
                        logger.log(e.message)
                    }
                }

                _onPaste(e) {
                    if (e.clipboardData) {
                        e.preventDefault();
                        try {
                            const t = new URL(e.clipboardData.getData("text"));
                            this._loadFromGistURL(t.href), window.ga && window.ga("send", "event", "report", "paste-link")
                        } catch (e) {
                        }
                        try {
                            const t = JSON.parse(e.clipboardData.getData("text"));
                            this._replaceReportHtml(t), window.ga && window.ga("send", "event", "report", "paste")
                        } catch (e) {
                        }
                    }
                }

                _onUrlInputChange(e) {
                    if (e.stopPropagation(), !e.target) return;
                    const t = e.target;
                    try {
                        this._loadFromGistURL(t.value)
                    } catch (e) {
                        logger.error("Invalid URL")
                    }
                }

                _loadFromGistURL(e) {
                    try {
                        const t = new URL(e);
                        if ("https://gist.github.com" !== t.origin) return void logger.error("URL was not a gist");
                        const n = t.pathname.match(/[a-f0-9]{5,}/);
                        n && (history.pushState({}, "", `${br.APP_URL}?gist=${n[0]}`), this._loadFromDeepLink())
                    } catch (e) {
                        logger.error("Invalid URL")
                    }
                }

                _listenForMessages() {
                    window.addEventListener("message", (e => {
                        e.source === self.opener && (e.data.lhr || e.data.lhresults) && (this._replaceReportHtml(e.data.lhr || e.data.lhresults), self.opener && !self.opener.closed && self.opener.postMessage({rendered: !0}, "*"), window.ga && window.ga("send", "event", "report", "open in viewer"))
                    })), self.opener && !self.opener.closed && self.opener.postMessage({opened: !0}, "*")
                }

                _fetchFromPSI(e) {
                    return logger.log("Waiting for Lighthouse results ..."), this._psi.fetchPSI(e).then((e => {
                        logger.hide(), e.lighthouseResult ? (this. _reportIsFromPSI = !0, this._replaceReportHtml(e.lighthouseResult)) : e.error ? (console.error(e.error), logger.error(e.error.message)) : logger.error("PSI 没有返回灯塔结果")
                    }))
                }

                _toggleLoadingBlur(e) {
                    const t = document.querySelector(".viewer-placeholder-inner");
                    t && t.classList.toggle("lh-loading", e)
                }
            }

            /**
             * @license 版权所有 2016 The Lighthouse Authors。版权所有。
             * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
             * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
             */window.addEventListener("DOMContentLoaded", (function () {
            const t = document.querySelector("div#lh-log");
            if (!t) throw new Error("logger element not found");
            window.logger = new e(t), document.addEventListener("lh-log", (e => {
                const t = e;
                switch (t.detail.cmd) {
                    case"log":
                        window.logger.log(t.detail.msg);
                        break;
                    case"warn":
                        window.logger.warn(t.detail.msg);
                        break;
                    case"error":
                        window.logger.error(t.detail.msg);
                        break;
                    case"hide":
                        window.logger.hide()
                }
            })), document.addEventListener("lh-analytics", (e => {
                const t = e;
                window.ga && window.ga(t.detail.cmd, t.detail.fields)
            })), window.viewer = new br
        }));
