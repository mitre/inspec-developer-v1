(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{424:function(s,t,a){s.exports=a.p+"assets/img/Download_STIG_Viewer.8c805ff9.png"},425:function(s,t,a){s.exports=a.p+"assets/img/Download_STIG.ae683862.png"},447:function(s,t,a){"use strict";a.r(t);var e=a(65),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_10-from-stig-to-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-from-stig-to-profile"}},[s._v("#")]),s._v(" 10. From STIG to Profile")]),s._v(" "),e("h3",{attrs:{id:"_10-1-download-stig-requirements-here"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-download-stig-requirements-here"}},[s._v("#")]),s._v(" 10.1 Download STIG Requirements Here")]),s._v(" "),e("p",[s._v("Download the latest STIG Viewer located here "),e("a",{attrs:{href:"https://public.cyber.mil/stigs/srg-stig-tools/",target:"_blank",rel:"noopener noreferrer"}},[s._v("STIG Viewer"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("img",{attrs:{src:a(424),alt:"Alt text"}})]),s._v(" "),e("p",[s._v("Download the "),e("code",[s._v("Red Hat Enterprise Linux 8 STIG - Ver 1, Rel 5")]),s._v(" located here "),e("a",{attrs:{href:"https://public.cyber.mil/stigs/downloads/?_dl_facet_stigs=operating-systems%2Cunix-linux",target:"_blank",rel:"noopener noreferrer"}},[s._v("RHEL8 STIG Download"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("img",{attrs:{src:a(425),alt:"Alt text"}})]),s._v(" "),e("h3",{attrs:{id:"_10-2-convert-the-stig-xccdf-benchmark-to-an-inspec-starter-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-convert-the-stig-xccdf-benchmark-to-an-inspec-starter-profile"}},[s._v("#")]),s._v(" 10.2 Convert the STIG XCCDF Benchmark to an InSpec Starter Profile")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Timesaver Ahead!")]),s._v(" "),e("p",[s._v("We already converted the XCCDF STIG Benchmark into a starter profile using the "),e("code",[s._v("saf generate xccdf2inspec_stub")]),s._v(" command using the correct flags, mapping file and other options.")])]),s._v(" "),e("p",[s._v("The SAF CLI has the "),e("code",[s._v("generate xccdf2inspec_stub")]),s._v(" sub-command which can help you quickly convert an XCCDF Benchmark document into the start of an InSpec Profile.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("XCCDF to InSpec Stub\ngenerate xccdf2inspec_stub              Generate an InSpec profile stub from a DISA STIG XCCDF XML "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n  USAGE\n    $ saf generate xccdf2inspec_stub -i, --input"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XML -o, --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FOLDER\n\n  OPTIONS\n    -S, --useStigID              Use STIG IDs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Group/Rule/Version"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" instead of Group IDs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ex. "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'V-XXXXX'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" InSpec Control IDs\n    -i, --input"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("input            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("required"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Path to the DISA STIG XCCDF "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    -l, --lineLength"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("lineLength  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Characters between lines within InSpec controls\n    -e, --encodingHeader         Add the "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# encoding: UTF-8"')]),s._v(" comment at the "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" of each control\n    -m, --metadata"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("metadata      Path to a JSON "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" with additional metadata "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the inspec.yml "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    -o, --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("output          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("required"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("default: profile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    -r, --useVulnerabilityId     Use Vulnerability IDs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ex. "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SV-XXXXX'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" instead of Group IDs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ex. "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'V-XXXXX'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" InSpec control IDs\n    -s, --singleFile             Output the resulting controls as a single "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("To learn how you can use the "),e("code",[s._v("saf generate xccdf2stub")]),s._v(", go to the saf-cli homepage which has all the options and capabilities as well as all the other utilities provided by the saf-cli, at "),e("a",{attrs:{href:"https://saf-cli.mitre.org/#generate",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://saf-cli.mitre.org/#generate"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("h3",{attrs:{id:"_10-3-example-stub-control-sv-230502"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-example-stub-control-sv-230502"}},[s._v("#")]),s._v(" 10.3 Example 'Stub' Control SV-230502")]),s._v(" "),e("p",[s._v("Let's take a look at what one of the "),e("code",[s._v("stubs")]),s._v(" created by the "),e("code",[s._v("saf-cli generate xccdf2stub")]),s._v(" command:")]),s._v(" "),e("div",{staticClass:"language-ruby line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[s._v("control "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SV-230502'")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  title "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'The RHEL 8 file system automounter must be disabled unless required.'")])]),s._v('\n  desc  "Automatically mounting file systems permits easy introduction of\nunknown devices'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" thereby facilitating malicious activity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('"\n  desc  '),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rationale'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")])]),s._v("\n  desc  "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'check'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(' "\n    Verify the operating system disables the ability to automount devices'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n    Check to see "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" automounter service is active with the following command"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("Note")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" If the autofs service is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" installed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" this requirement is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v("\napplicable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n    $ sudo systemctl status autofs\n\n    autofs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Automounts filesystems on demand\n    "),e("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("Loaded")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" loaded "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("systemd"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("system"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("autofs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" disabled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("Active")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" inactive "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dead"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v('\n\n    If the \\"autofs\\" status is set to \\"active\\" '),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" documented with\nthe Information System Security Officer "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ISSO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" as an operational requirement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nthis is a finding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('\n  "\n  desc '),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fix'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(' "\n    Configure the operating system to disable the ability to automount devices'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n    Turn off the automount service with the following commands"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\n\n    $ sudo systemctl stop autofs\n    $ sudo systemctl disable autofs\n\n    If \\"autofs\\" is required '),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Network "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("File")]),s._v(" System "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NFS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" it must be\ndocumented with the "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ISSO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('\n  "\n  impact '),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n  tag severity"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'medium'")])]),s._v("\n  tag gtitle"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SRG-OS-000114-GPOS-00059'")])]),s._v("\n  tag gid"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'V-230502'")])]),s._v("\n  tag rid"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SV-230502r627750_rule'")])]),s._v("\n  tag stig_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RHEL-08-040070'")])]),s._v("\n  tag fix_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'F-33146r568253_fix'")])]),s._v("\n  tag cci"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CCI-000778'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  tag nist"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'IA-3'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...add your describe blocks here ... #")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br")])]),e("h3",{attrs:{id:"_10-4-the-completed-sv-230502-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-the-completed-sv-230502-control"}},[s._v("#")]),s._v(" 10.4 The completed SV-230502 Control")]),s._v(" "),e("p",[s._v("Let's take a look at how we would write the InSpec control for SV-230502:")]),s._v(" "),e("div",{staticClass:"language-ruby line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[s._v("control "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SV-230502'")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  title "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'The RHEL 8 file system automounter must be disabled unless required.'")])]),s._v('\n  desc  "Automatically mounting file systems permits easy introduction of\nunknown devices'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" thereby facilitating malicious activity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('"\n  desc  '),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rationale'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")])]),s._v("\n  desc  "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'check'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(' "\n    Verify the operating system disables the ability to automount devices'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n    Check to see "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" automounter service is active with the following command"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("Note")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" If the autofs service is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" installed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" this requirement is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v("\napplicable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n    $ sudo systemctl status autofs\n\n    autofs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Automounts filesystems on demand\n    "),e("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("Loaded")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" loaded "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("systemd"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("system"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("autofs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" disabled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("Active")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" inactive "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dead"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v('\n\n    If the \\"autofs\\" status is set to \\"active\\" '),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" documented with\nthe Information System Security Officer "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ISSO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" as an operational requirement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nthis is a finding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('\n  "\n  desc '),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fix'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(' "\n    Configure the operating system to disable the ability to automount devices'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n    Turn off the automount service with the following commands"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\n\n    $ sudo systemctl stop autofs\n    $ sudo systemctl disable autofs\n\n    If \\"autofs\\" is required '),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Network "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("File")]),s._v(" System "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NFS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" it must be\ndocumented with the "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ISSO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('\n  "\n  impact '),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n  tag severity"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'medium'")])]),s._v("\n  tag gtitle"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SRG-OS-000114-GPOS-00059'")])]),s._v("\n  tag gid"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'V-230502'")])]),s._v("\n  tag rid"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SV-230502r627750_rule'")])]),s._v("\n  tag stig_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RHEL-08-040070'")])]),s._v("\n  tag fix_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'F-33146r568253_fix'")])]),s._v("\n  tag cci"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CCI-000778'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  tag nist"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'IA-3'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" virtualization"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docker'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    impact "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n    describe "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Control not applicable within a container"')])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      skip "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Control not applicable within a container"')])]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autofs'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("installed"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n      describe systemd_service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autofs.service'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" should_not be_running "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" should_not be_enabled "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" should_not be_installed "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      impact "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n      describe "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'The autofs service is not installed'")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        skip "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'The autofs service is not installed, this control is Not Applicable.'")])]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br")])]),e("h3",{attrs:{id:"_10-5-getting-started-on-the-rhel8-baseline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-getting-started-on-the-rhel8-baseline"}},[s._v("#")]),s._v(" 10.5 Getting Started on the RHEL8 baseline")]),s._v(" "),e("h4",{attrs:{id:"controls-we-will-demonstrate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#controls-we-will-demonstrate"}},[s._v("#")]),s._v(" Controls we will demonstrate")]),s._v(" "),e("ul",[e("li",[s._v("SV-230324 <---login_defs resource")]),s._v(" "),e("li",[s._v("SV-230250 <---directory resource")]),s._v(" "),e("li",[s._v("SV-230243 <---directory looping & file resource")]),s._v(" "),e("li",[s._v("SV-230505 <---non applicable use case & package resource")])]),s._v(" "),e("h4",{attrs:{id:"suggested-controls-to-start-on-level-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suggested-controls-to-start-on-level-1"}},[s._v("#")]),s._v(" Suggested Controls to start on (Level 1)")]),s._v(" "),e("ul",[e("li",[s._v("SV-230383 <---login_defs resource")]),s._v(" "),e("li",[s._v("SV-230249 <---directory resource")]),s._v(" "),e("li",[s._v("SV-230242 <---directory looping & file resource")]),s._v(" "),e("li",[s._v("SV-230241 <---non applicable use case & package resource")])]),s._v(" "),e("h4",{attrs:{id:"suggested-controls-to-start-on-level-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suggested-controls-to-start-on-level-2"}},[s._v("#")]),s._v(" Suggested Controls to start on (Level 2)")]),s._v(" "),e("ul",[e("li",[s._v("SV-230281 <---parse config file")]),s._v(" "),e("li",[s._v("SV-230365 <---login_defs resource")]),s._v(" "),e("li",[s._v("SV-230264 <---file content")])]),s._v(" "),e("h4",{attrs:{id:"suggested-inspec-resources-to-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suggested-inspec-resources-to-use"}},[s._v("#")]),s._v(" Suggested InSpec Resources to use")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.inspec.io/docs/reference/resources/command/",target:"_blank",rel:"noopener noreferrer"}},[s._v("command"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.inspec.io/docs/reference/resources/file/",target:"_blank",rel:"noopener noreferrer"}},[s._v("file"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.inspec.io/docs/reference/resources/directory/",target:"_blank",rel:"noopener noreferrer"}},[s._v("directory"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.inspec.io/docs/reference/resources/parse_config_file/",target:"_blank",rel:"noopener noreferrer"}},[s._v("parse_config_file"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.inspec.io/docs/reference/resources/package/",target:"_blank",rel:"noopener noreferrer"}},[s._v("package"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://docs.chef.io/inspec/resources/login_defs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("login_defs"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"_10-6-completed-rhel8-profile-for-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-6-completed-rhel8-profile-for-reference"}},[s._v("#")]),s._v(" 10.6 Completed RHEL8 Profile for Reference")]),s._v(" "),e("p",[s._v("Below is the url to the completed RHEL8 Inspec Profile for reference, and a few things to take note of.")]),s._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/CMSgov/redhat-enterprise-linux-8-stig-baseline",target:"_blank",rel:"noopener noreferrer"}},[s._v("redhat-enterprise-linux-8-stig-baseline"),e("OutboundLink")],1)])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Key Elements in this Profile")]),s._v(" "),e("ul",[e("li",[s._v("The use of "),e("code",[s._v("impact 0")]),s._v(" for NA & Container Aware Controls")]),s._v(" "),e("li",[s._v("How we make the controls "),e("code",[s._v("container aware")]),s._v(", and")]),s._v(" "),e("li",[s._v("The "),e("code",[s._v("fail fast")]),s._v(" approach to testing execution.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);