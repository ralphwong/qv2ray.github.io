(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{361:function(e,t,o){"use strict";o.r(t);var s=o(25),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),o("h2",{attrs:{id:"v2ray-core-failed-to-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-core-failed-to-start"}},[e._v("#")]),e._v(" V2Ray core failed to start")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Some message can only be seen when the "),o("strong",[e._v("Log Level")]),e._v(" in "),o("strong",[e._v("Kernel Settings")]),e._v(" is set to "),o("strong",[e._v("info")]),e._v(" or "),o("strong",[e._v("debug")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"_1-prompt-only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-prompt-only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[e._v("#")]),e._v(" 1. Prompt "),o("code",[e._v("Only one usage of each socket address (protocol/network address/port) is normally permitted.")])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Root Cause")]),e._v(": Port conflict occurred.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Cause 1")]),e._v(": Previous V2Ray process did not exit normally and occupied the relevant port.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Solution (on Windows)")]),e._v(": Kill "),o("code",[e._v("v2ray.exe")]),e._v(" or "),o("code",[e._v("wv2ray.exe")]),e._v(" process via Task Manager or "),o("code",[e._v("taskkill /f /im <process name>")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Approach 1")]),e._v(": Open Task Manager and go to "),o("code",[e._v("Detail")]),e._v(" Tab, find "),o("code",[e._v("v2ray.exe")]),e._v(" or "),o("code",[e._v("wv2ray.exe")]),e._v(" process, right click on the process name, then "),o("code",[e._v("End Process")]),e._v(", "),o("code",[e._v("End Process")]),e._v(". "),o("s",[e._v("Explain in detail XD")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Approach 2")]),e._v(": Run "),o("code",[e._v("cmd")]),e._v(" or "),o("code",[e._v("powershell")]),e._v(" and execute the following commands:")])])])])]),e._v(" "),o("div",{staticClass:"language-powershell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-powershell"}},[o("code",[e._v("taskkill "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("f "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("im v2ray"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exe\ntaskkill "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("f "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("im wv2ray"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exe\n")])])]),o("ul",[o("li",[o("p",[o("strong",[e._v("Solution (on Linux)")]),e._v(": "),o("s",[e._v("You can even use Linux...Dont you know how to kill a process?")]),e._v(" Get the process ID via "),o("code",[e._v("ps aux | grep v2ray")]),e._v(", then kill the process via "),o("code",[e._v("kill -9 <process ID>")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Cause 2")]),e._v(": The relevant ports set in Qv2ray have been occupied by other software.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Solution")]),e._v(": Change the port settings of Qv2ray or other software.")])])]),e._v(" "),o("h3",{attrs:{id:"_2-prompt-an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-prompt-an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[e._v("#")]),e._v(" 2. Prompt "),o("code",[e._v("An attempt was made to access a socket in a way forbidden by its access permissions.")])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Cause")]),e._v(": If you are using Windows, a patch might set ports between "),o("code",[e._v("1000-2000")]),e._v(" as privileged / reserved ports.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Solution")]),e._v(": Use a port above than "),o("code",[e._v("2000")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"_3-v2ray-core-failed-to-start-after-enabling-tproxy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-v2ray-core-failed-to-start-after-enabling-tproxy"}},[e._v("#")]),e._v(" 3. V2Ray Core Failed to start after enabling tProxy")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Detail")]),e._v(": "),o("code",[e._v("Segmentation Fault")]),e._v(" occurd after enabling tProxy")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Cause")]),e._v(": It's caused by a limit in the "),o("code",[e._v("SUID")]),e._v(" feature on some Linux OSes. Detailed error analysis please see: "),o("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/59",target:"_blank",rel:"noopener noreferrer"}},[e._v("#59"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Solution")]),e._v(": "),o("code",[e._v("sudo sysctl fs.suid_dumpable=1")]),o("br"),e._v("\nThe solution will be lost on reboot, please refer to "),o("a",{attrs:{href:"http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this blog"),o("OutboundLink")],1),e._v(" if you want to keep it.")])])]),e._v(" "),o("h3",{attrs:{id:"_4-core-error-255"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-core-error-255"}},[e._v("#")]),e._v(" 4. Core error "),o("code",[e._v("255")])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Cause")]),e._v(": V2Ray core doesn't have permission to "),o("strong",[e._v("execute")]),e._v(", which happens on POSIX system (Linux、macOS).")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Solution")]),e._v("：Run "),o("code",[e._v("chmod +x v2ray && chmod +x v2ctl")]),e._v(' in V2Ray core directory, or give them execute permission via file manager,You can double click the programs on macOS, the system will ask you whether to run UNIX program, choose "run" will give them permission.')])])]),e._v(" "),o("h2",{attrs:{id:"fatal-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fatal-error"}},[e._v("#")]),e._v(" Fatal Error")]),e._v(" "),o("h3",{attrs:{id:"_1-cannot-execute-appimage-permission-denied"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-cannot-execute-appimage-permission-denied"}},[e._v("#")]),e._v(" 1. Cannot execute AppImage: Permission denied")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Cause")]),e._v(": You should grant permission before executing it.")]),e._v(" "),o("li",[o("strong",[e._v("Solution")]),e._v(": "),o("code",[e._v("chmod +x Qv2ray.AppImage")])])]),e._v(" "),o("h2",{attrs:{id:"connection-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connection-problems"}},[e._v("#")]),e._v(" Connection problems")]),e._v(" "),o("h3",{attrs:{id:"_1-config-is-confirmed-but-cannot-connect-to-the-remote"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-config-is-confirmed-but-cannot-connect-to-the-remote"}},[e._v("#")]),e._v(" 1. Config is confirmed but cannot connect to the remote")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Possible cause")]),e._v(": System time is out of sync. V2Ray requires client and server's system time difference less than 90 seconds, or it will refuse to connect.")]),e._v(" "),o("li",[o("strong",[e._v("Solution (Windows)")]),e._v(":\n"),o("ul",[o("li",[o("strong",[e._v("Approach 1")]),e._v(': Open Settings, select “Time & Language”, enable “Automatically set date and time”. If the option is already enabled, please click the "Sync now" button.')]),e._v(" "),o("li",[o("strong",[e._v("Approach 2")]),e._v('：Open control panel, switch to “Categories” view，choose “Time and Zone”，then click “Date and Time”, select "Internet time" in the open dialog, then click "change settings" button and check “Sync with Internet time server”.')])])]),e._v(" "),o("li",[o("strong",[e._v("Solution (Linux)")]),e._v(":\n"),o("ul",[o("li",[o("strong",[e._v("Approach 1")]),e._v(": Use "),o("code",[e._v("systemd-timesyncd")]),e._v(", run "),o("code",[e._v("sudo systemctl enable systemd-timesyncd --now")]),e._v("。")]),e._v(" "),o("li",[o("strong",[e._v("Approach 2")]),e._v(": Use "),o("a",{attrs:{href:"https://www.chrony.tuxfamily.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrony"),o("OutboundLink")],1),e._v(" to sync time.")])])]),e._v(" "),o("li",[o("strong",[e._v("Solution (macOS)")]),e._v(": Open system preference, click “Date & Time”, and enable “Automatically set date and time”.")])]),e._v(" "),o("h3",{attrs:{id:"_2-i-want-to-proxy-traffic-to-china-mainland"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-i-want-to-proxy-traffic-to-china-mainland"}},[e._v("#")]),e._v(" 2. I want to proxy traffic to China Mainland")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/getting-started/step5.html#tweaking-routing-schemes"}},[o("strong",[e._v("Solution")])])],1)]),e._v(" "),o("h2",{attrs:{id:"performance-issue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#performance-issue"}},[e._v("#")]),e._v(" Performance Issue")]),e._v(" "),o("h3",{attrs:{id:"_1-the-response-speed-of-opening-web-pages-switching-connections-while-using-qv2ray-seems-to-be-much-slower-than-using-other-proxy-softwares"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-the-response-speed-of-opening-web-pages-switching-connections-while-using-qv2ray-seems-to-be-much-slower-than-using-other-proxy-softwares"}},[e._v("#")]),e._v(" 1. The response speed of opening web pages / switching connections while using Qv2ray seems to be much slower than using other proxy softwares")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Cause")]),e._v(": Qv2ray enables "),o("code",[e._v("V2Ray Integration")]),e._v(" by default, which forces all traffics from plugin-introduced protocols (such as SSR, Trojan) to be routed through "),o("RouterLink",{attrs:{to:"/en/plugins/v2ray-integration.html"}},[e._v("V2Ray Route")]),e._v(" in order to implement advanced routing function, but might cause significant latency "),o("s",[e._v("on low end devices")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Solution")]),e._v(": Go to "),o("code",[e._v("Core Settings")]),e._v(" and turn off "),o("code",[e._v("V2Ray Integration")]),e._v(" could improve latency for plugin-introduced protocols while lose support of "),o("code",[e._v("Advanced Routing")]),e._v(", "),o("code",[e._v("Bypass China Mainland")]),e._v(", "),o("code",[e._v("Bypass Local Address")]),e._v(" and "),o("code",[e._v("Custom DNS")]),e._v(" functions as a side effect, which means routing / bypass function of the relevant protocols will be completely invalid, that is, global proxy only. Note that this option does not affect protocols supported by V2Ray kernel (such as VMess). That is, if you only use protocols supported by the V2Ray kernel, switching on and off this function will cause no effect at all.")])]),e._v(" "),o("li",[o("p",[e._v("Besides, whitelist V2Ray core in antivirus software "),o("s",[e._v("especially in Microsoft Defender")]),e._v(" may also improve the response speed. "),o("s",[e._v("Unverified metaphysics")])])])]),e._v(" "),o("h2",{attrs:{id:"behavior-appearance-issue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#behavior-appearance-issue"}},[e._v("#")]),e._v(" Behavior & Appearance Issue")]),e._v(" "),o("h3",{attrs:{id:"_1-qv2ray-tray-icon-occasionally-disappears-in-gnome"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-qv2ray-tray-icon-occasionally-disappears-in-gnome"}},[e._v("#")]),e._v(" 1. Qv2ray tray icon occasionally disappears in GNOME")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Cause")]),e._v(": This is confirmed as an upstream bug.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Solution")]),e._v(": You may use the following makeshift command:")])])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("nohup")]),e._v(" gnome-shell --replace "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),o("ul",[o("li",[o("s",[e._v("By the way, KDE is awesome.")])])]),e._v(" "),o("h3",{attrs:{id:"_2-ubuntu-gives-a-super-ugly-ui"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-ubuntu-gives-a-super-ugly-ui"}},[e._v("#")]),e._v(" 2. Ubuntu gives a super ugly UI")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Solution")]),e._v(": Append "),o("code",[e._v("--style fusion")]),e._v(" to the command line arg may solve this problem.")])]),e._v(" "),o("h2",{attrs:{id:"miscellaneous"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[e._v("#")]),e._v(" Miscellaneous")]),e._v(" "),o("h3",{attrs:{id:"_1-why-doesn-t-qv2ray-pack-plugins-and-v2ray-core-or-provide-download-function"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-why-doesn-t-qv2ray-pack-plugins-and-v2ray-core-or-provide-download-function"}},[e._v("#")]),e._v(" 1. Why doesn't Qv2ray pack plugins and V2Ray core, or provide download function?")]),e._v(" "),o("p",[e._v("We hope our users can get to know how the program works, and willing to solve potential problems and needs by themselves. If Qv2ray doesn't suit you, you are free to choose other software.")]),e._v(" "),o("h3",{attrs:{id:"_2-will-qv2ray-support-mobile-platform-android、ios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-will-qv2ray-support-mobile-platform-android、ios"}},[e._v("#")]),e._v(" 2. Will Qv2ray support mobile platform (Android、iOS)?")]),e._v(" "),o("p",[e._v("There is no plan at the moment. Depending on developers will, there "),o("strong",[e._v("may")]),e._v(" be mobile platform support when the program migrate to QML.")])])}),[],!1,null,null,null);t.default=a.exports}}]);