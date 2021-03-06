var hljs = require('../../node_modules/highlight.js/lib/highlight');

// Enable "popular" languages to keep highlight.js as small as possible

//hljs.registerLanguage('1c', require('../../node_modules/highlight.js/lib/languages/1c'));
//hljs.registerLanguage('abnf', require('../../node_modules/highlight.js/lib/languages/abnf'));
//hljs.registerLanguage('accesslog', require('../../node_modules/highlight.js/lib/languages/accesslog'));
//hljs.registerLanguage('actionscript', require('../../node_modules/highlight.js/lib/languages/actionscript'));
//hljs.registerLanguage('ada', require('../../node_modules/highlight.js/lib/languages/ada'));
//hljs.registerLanguage('angelscript', require('../../node_modules/highlight.js/lib/languages/angelscript'));
//hljs.registerLanguage('apache', require('../../node_modules/highlight.js/lib/languages/apache'));
//hljs.registerLanguage('applescript', require('../../node_modules/highlight.js/lib/languages/applescript'));
//hljs.registerLanguage('arcade', require('../../node_modules/highlight.js/lib/languages/arcade'));
hljs.registerLanguage('cpp', require('../../node_modules/highlight.js/lib/languages/cpp'));
//hljs.registerLanguage('arduino', require('../../node_modules/highlight.js/lib/languages/arduino'));
//hljs.registerLanguage('armasm', require('../../node_modules/highlight.js/lib/languages/armasm'));
hljs.registerLanguage('xml', require('../../node_modules/highlight.js/lib/languages/xml'));
hljs.registerLanguage('asciidoc', require('../../node_modules/highlight.js/lib/languages/asciidoc'));
//hljs.registerLanguage('aspectj', require('../../node_modules/highlight.js/lib/languages/aspectj'));
//hljs.registerLanguage('autohotkey', require('../../node_modules/highlight.js/lib/languages/autohotkey'));
//hljs.registerLanguage('autoit', require('../../node_modules/highlight.js/lib/languages/autoit'));
//hljs.registerLanguage('avrasm', require('../../node_modules/highlight.js/lib/languages/avrasm'));
//hljs.registerLanguage('awk', require('../../node_modules/highlight.js/lib/languages/awk'));
//hljs.registerLanguage('axapta', require('../../node_modules/highlight.js/lib/languages/axapta'));
hljs.registerLanguage('bash', require('../../node_modules/highlight.js/lib/languages/bash'));
//hljs.registerLanguage('basic', require('../../node_modules/highlight.js/lib/languages/basic'));
//hljs.registerLanguage('bnf', require('../../node_modules/highlight.js/lib/languages/bnf'));
//hljs.registerLanguage('brainfuck', require('../../node_modules/highlight.js/lib/languages/brainfuck'));
//hljs.registerLanguage('cal', require('../../node_modules/highlight.js/lib/languages/cal'));
//hljs.registerLanguage('capnproto', require('../../node_modules/highlight.js/lib/languages/capnproto'));
//hljs.registerLanguage('ceylon', require('../../node_modules/highlight.js/lib/languages/ceylon'));
//hljs.registerLanguage('clean', require('../../node_modules/highlight.js/lib/languages/clean'));
hljs.registerLanguage('clojure', require('../../node_modules/highlight.js/lib/languages/clojure'));
hljs.registerLanguage('clojure-repl', require('../../node_modules/highlight.js/lib/languages/clojure-repl'));
//hljs.registerLanguage('cmake', require('../../node_modules/highlight.js/lib/languages/cmake'));
hljs.registerLanguage('coffeescript', require('../../node_modules/highlight.js/lib/languages/coffeescript'));
//hljs.registerLanguage('coq', require('../../node_modules/highlight.js/lib/languages/coq'));
//hljs.registerLanguage('cos', require('../../node_modules/highlight.js/lib/languages/cos'));
//hljs.registerLanguage('crmsh', require('../../node_modules/highlight.js/lib/languages/crmsh'));
//hljs.registerLanguage('crystal', require('../../node_modules/highlight.js/lib/languages/crystal'));
hljs.registerLanguage('cs', require('../../node_modules/highlight.js/lib/languages/cs'));
//hljs.registerLanguage('csp', require('../../node_modules/highlight.js/lib/languages/csp'));
hljs.registerLanguage('css', require('../../node_modules/highlight.js/lib/languages/css'));
//hljs.registerLanguage('d', require('../../node_modules/highlight.js/lib/languages/d'));
hljs.registerLanguage('markdown', require('../../node_modules/highlight.js/lib/languages/markdown'));
//hljs.registerLanguage('dart', require('../../node_modules/highlight.js/lib/languages/dart'));
//hljs.registerLanguage('delphi', require('../../node_modules/highlight.js/lib/languages/delphi'));
hljs.registerLanguage('diff', require('../../node_modules/highlight.js/lib/languages/diff'));
//hljs.registerLanguage('django', require('../../node_modules/highlight.js/lib/languages/django'));
//hljs.registerLanguage('dns', require('../../node_modules/highlight.js/lib/languages/dns'));
hljs.registerLanguage('dockerfile', require('../../node_modules/highlight.js/lib/languages/dockerfile'));
//hljs.registerLanguage('dos', require('../../node_modules/highlight.js/lib/languages/dos'));
//hljs.registerLanguage('dsconfig', require('../../node_modules/highlight.js/lib/languages/dsconfig'));
//hljs.registerLanguage('dts', require('../../node_modules/highlight.js/lib/languages/dts'));
//hljs.registerLanguage('dust', require('../../node_modules/highlight.js/lib/languages/dust'));
//hljs.registerLanguage('ebnf', require('../../node_modules/highlight.js/lib/languages/ebnf'));
//hljs.registerLanguage('elixir', require('../../node_modules/highlight.js/lib/languages/elixir'));
hljs.registerLanguage('elm', require('../../node_modules/highlight.js/lib/languages/elm'));
hljs.registerLanguage('ruby', require('../../node_modules/highlight.js/lib/languages/ruby'));
//hljs.registerLanguage('erb', require('../../node_modules/highlight.js/lib/languages/erb'));
//hljs.registerLanguage('erlang-repl', require('../../node_modules/highlight.js/lib/languages/erlang-repl'));
//hljs.registerLanguage('erlang', require('../../node_modules/highlight.js/lib/languages/erlang'));
//hljs.registerLanguage('excel', require('../../node_modules/highlight.js/lib/languages/excel'));
//hljs.registerLanguage('fix', require('../../node_modules/highlight.js/lib/languages/fix'));
//hljs.registerLanguage('flix', require('../../node_modules/highlight.js/lib/languages/flix'));
//hljs.registerLanguage('fortran', require('../../node_modules/highlight.js/lib/languages/fortran'));
//hljs.registerLanguage('fsharp', require('../../node_modules/highlight.js/lib/languages/fsharp'));
//hljs.registerLanguage('gams', require('../../node_modules/highlight.js/lib/languages/gams'));
//hljs.registerLanguage('gauss', require('../../node_modules/highlight.js/lib/languages/gauss'));
//hljs.registerLanguage('gcode', require('../../node_modules/highlight.js/lib/languages/gcode'));
//hljs.registerLanguage('gherkin', require('../../node_modules/highlight.js/lib/languages/gherkin'));
//hljs.registerLanguage('glsl', require('../../node_modules/highlight.js/lib/languages/glsl'));
//hljs.registerLanguage('gml', require('../../node_modules/highlight.js/lib/languages/gml'));
hljs.registerLanguage('go', require('../../node_modules/highlight.js/lib/languages/go'));
hljs.registerLanguage('golo', require('../../node_modules/highlight.js/lib/languages/golo'));
hljs.registerLanguage('gradle', require('../../node_modules/highlight.js/lib/languages/gradle'));
hljs.registerLanguage('groovy', require('../../node_modules/highlight.js/lib/languages/groovy'));
hljs.registerLanguage('haml', require('../../node_modules/highlight.js/lib/languages/haml'));
hljs.registerLanguage('handlebars', require('../../node_modules/highlight.js/lib/languages/handlebars'));
hljs.registerLanguage('haskell', require('../../node_modules/highlight.js/lib/languages/haskell'));
//hljs.registerLanguage('haxe', require('../../node_modules/highlight.js/lib/languages/haxe'));
//hljs.registerLanguage('hsp', require('../../node_modules/highlight.js/lib/languages/hsp'));
//hljs.registerLanguage('htmlbars', require('../../node_modules/highlight.js/lib/languages/htmlbars'));
hljs.registerLanguage('http', require('../../node_modules/highlight.js/lib/languages/http'));
//hljs.registerLanguage('hy', require('../../node_modules/highlight.js/lib/languages/hy'));
//hljs.registerLanguage('inform7', require('../../node_modules/highlight.js/lib/languages/inform7'));
hljs.registerLanguage('ini', require('../../node_modules/highlight.js/lib/languages/ini'));
//hljs.registerLanguage('irpf90', require('../../node_modules/highlight.js/lib/languages/irpf90'));
//hljs.registerLanguage('isbl', require('../../node_modules/highlight.js/lib/languages/isbl'));
hljs.registerLanguage('java', require('../../node_modules/highlight.js/lib/languages/java'));
hljs.registerLanguage('javascript', require('../../node_modules/highlight.js/lib/languages/javascript'));
//hljs.registerLanguage('jboss-cli', require('../../node_modules/highlight.js/lib/languages/jboss-cli'));
hljs.registerLanguage('json', require('../../node_modules/highlight.js/lib/languages/json'));
//hljs.registerLanguage('julia', require('../../node_modules/highlight.js/lib/languages/julia'));
//hljs.registerLanguage('julia-repl', require('../../node_modules/highlight.js/lib/languages/julia-repl'));
hljs.registerLanguage('kotlin', require('../../node_modules/highlight.js/lib/languages/kotlin'));
//hljs.registerLanguage('lasso', require('../../node_modules/highlight.js/lib/languages/lasso'));
//hljs.registerLanguage('ldif', require('../../node_modules/highlight.js/lib/languages/ldif'));
//hljs.registerLanguage('leaf', require('../../node_modules/highlight.js/lib/languages/leaf'));
hljs.registerLanguage('less', require('../../node_modules/highlight.js/lib/languages/less'));
//hljs.registerLanguage('lisp', require('../../node_modules/highlight.js/lib/languages/lisp'));
//hljs.registerLanguage('livecodeserver', require('../../node_modules/highlight.js/lib/languages/livecodeserver'));
//hljs.registerLanguage('livescript', require('../../node_modules/highlight.js/lib/languages/livescript'));
//hljs.registerLanguage('llvm', require('../../node_modules/highlight.js/lib/languages/llvm'));
//hljs.registerLanguage('lsl', require('../../node_modules/highlight.js/lib/languages/lsl'));
//hljs.registerLanguage('lua', require('../../node_modules/highlight.js/lib/languages/lua'));
//hljs.registerLanguage('makefile', require('../../node_modules/highlight.js/lib/languages/makefile'));
//hljs.registerLanguage('mathematica', require('../../node_modules/highlight.js/lib/languages/mathematica'));
//hljs.registerLanguage('matlab', require('../../node_modules/highlight.js/lib/languages/matlab'));
//hljs.registerLanguage('maxima', require('../../node_modules/highlight.js/lib/languages/maxima'));
//hljs.registerLanguage('mel', require('../../node_modules/highlight.js/lib/languages/mel'));
//hljs.registerLanguage('mercury', require('../../node_modules/highlight.js/lib/languages/mercury'));
//hljs.registerLanguage('mipsasm', require('../../node_modules/highlight.js/lib/languages/mipsasm'));
//hljs.registerLanguage('mizar', require('../../node_modules/highlight.js/lib/languages/mizar'));
hljs.registerLanguage('perl', require('../../node_modules/highlight.js/lib/languages/perl'));
//hljs.registerLanguage('mojolicious', require('../../node_modules/highlight.js/lib/languages/mojolicious'));
//hljs.registerLanguage('monkey', require('../../node_modules/highlight.js/lib/languages/monkey'));
//hljs.registerLanguage('moonscript', require('../../node_modules/highlight.js/lib/languages/moonscript'));
//hljs.registerLanguage('n1ql', require('../../node_modules/highlight.js/lib/languages/n1ql'));
//hljs.registerLanguage('nginx', require('../../node_modules/highlight.js/lib/languages/nginx'));
//hljs.registerLanguage('nimrod', require('../../node_modules/highlight.js/lib/languages/nimrod'));
//hljs.registerLanguage('nix', require('../../node_modules/highlight.js/lib/languages/nix'));
//hljs.registerLanguage('nsis', require('../../node_modules/highlight.js/lib/languages/nsis'));
//hljs.registerLanguage('objectivec', require('../../node_modules/highlight.js/lib/languages/objectivec'));
//hljs.registerLanguage('ocaml', require('../../node_modules/highlight.js/lib/languages/ocaml'));
//hljs.registerLanguage('openscad', require('../../node_modules/highlight.js/lib/languages/openscad'));
//hljs.registerLanguage('oxygene', require('../../node_modules/highlight.js/lib/languages/oxygene'));
//hljs.registerLanguage('parser3', require('../../node_modules/highlight.js/lib/languages/parser3'));
//hljs.registerLanguage('pf', require('../../node_modules/highlight.js/lib/languages/pf'));
//hljs.registerLanguage('pgsql', require('../../node_modules/highlight.js/lib/languages/pgsql'));
hljs.registerLanguage('php', require('../../node_modules/highlight.js/lib/languages/php'));
hljs.registerLanguage('plaintext', require('../../node_modules/highlight.js/lib/languages/plaintext'));
//hljs.registerLanguage('pony', require('../../node_modules/highlight.js/lib/languages/pony'));
//hljs.registerLanguage('powershell', require('../../node_modules/highlight.js/lib/languages/powershell'));
//hljs.registerLanguage('processing', require('../../node_modules/highlight.js/lib/languages/processing'));
//hljs.registerLanguage('profile', require('../../node_modules/highlight.js/lib/languages/profile'));
//hljs.registerLanguage('prolog', require('../../node_modules/highlight.js/lib/languages/prolog'));
hljs.registerLanguage('properties', require('../../node_modules/highlight.js/lib/languages/properties'));
//hljs.registerLanguage('protobuf', require('../../node_modules/highlight.js/lib/languages/protobuf'));
//hljs.registerLanguage('puppet', require('../../node_modules/highlight.js/lib/languages/puppet'));
//hljs.registerLanguage('purebasic', require('../../node_modules/highlight.js/lib/languages/purebasic'));
hljs.registerLanguage('python', require('../../node_modules/highlight.js/lib/languages/python'));
//hljs.registerLanguage('q', require('../../node_modules/highlight.js/lib/languages/q'));
//hljs.registerLanguage('qml', require('../../node_modules/highlight.js/lib/languages/qml'));
//hljs.registerLanguage('r', require('../../node_modules/highlight.js/lib/languages/r'));
//hljs.registerLanguage('reasonml', require('../../node_modules/highlight.js/lib/languages/reasonml'));
//hljs.registerLanguage('rib', require('../../node_modules/highlight.js/lib/languages/rib'));
//hljs.registerLanguage('roboconf', require('../../node_modules/highlight.js/lib/languages/roboconf'));
//hljs.registerLanguage('routeros', require('../../node_modules/highlight.js/lib/languages/routeros'));
//hljs.registerLanguage('rsl', require('../../node_modules/highlight.js/lib/languages/rsl'));
//hljs.registerLanguage('ruleslanguage', require('../../node_modules/highlight.js/lib/languages/ruleslanguage'));
hljs.registerLanguage('rust', require('../../node_modules/highlight.js/lib/languages/rust'));
//hljs.registerLanguage('sas', require('../../node_modules/highlight.js/lib/languages/sas'));
hljs.registerLanguage('scala', require('../../node_modules/highlight.js/lib/languages/scala'));
//hljs.registerLanguage('scheme', require('../../node_modules/highlight.js/lib/languages/scheme'));
//hljs.registerLanguage('scilab', require('../../node_modules/highlight.js/lib/languages/scilab'));
hljs.registerLanguage('scss', require('../../node_modules/highlight.js/lib/languages/scss'));
hljs.registerLanguage('shell', require('../../node_modules/highlight.js/lib/languages/shell'));
//hljs.registerLanguage('smali', require('../../node_modules/highlight.js/lib/languages/smali'));
//hljs.registerLanguage('smalltalk', require('../../node_modules/highlight.js/lib/languages/smalltalk'));
//hljs.registerLanguage('sml', require('../../node_modules/highlight.js/lib/languages/sml'));
//hljs.registerLanguage('sqf', require('../../node_modules/highlight.js/lib/languages/sqf'));
hljs.registerLanguage('sql', require('../../node_modules/highlight.js/lib/languages/sql'));
//hljs.registerLanguage('stan', require('../../node_modules/highlight.js/lib/languages/stan'));
//hljs.registerLanguage('stata', require('../../node_modules/highlight.js/lib/languages/stata'));
//hljs.registerLanguage('step21', require('../../node_modules/highlight.js/lib/languages/step21'));
//hljs.registerLanguage('stylus', require('../../node_modules/highlight.js/lib/languages/stylus'));
//hljs.registerLanguage('subunit', require('../../node_modules/highlight.js/lib/languages/subunit'));
hljs.registerLanguage('swift', require('../../node_modules/highlight.js/lib/languages/swift'));
//hljs.registerLanguage('taggerscript', require('../../node_modules/highlight.js/lib/languages/taggerscript'));
hljs.registerLanguage('yaml', require('../../node_modules/highlight.js/lib/languages/yaml'));
//hljs.registerLanguage('tap', require('../../node_modules/highlight.js/lib/languages/tap'));
//hljs.registerLanguage('tcl', require('../../node_modules/highlight.js/lib/languages/tcl'));
//hljs.registerLanguage('tex', require('../../node_modules/highlight.js/lib/languages/tex'));
//hljs.registerLanguage('thrift', require('../../node_modules/highlight.js/lib/languages/thrift'));
//hljs.registerLanguage('tp', require('../../node_modules/highlight.js/lib/languages/tp'));
//hljs.registerLanguage('twig', require('../../node_modules/highlight.js/lib/languages/twig'));
hljs.registerLanguage('typescript', require('../../node_modules/highlight.js/lib/languages/typescript'));
//hljs.registerLanguage('vala', require('../../node_modules/highlight.js/lib/languages/vala'));
//hljs.registerLanguage('vbnet', require('../../node_modules/highlight.js/lib/languages/vbnet'));
//hljs.registerLanguage('vbscript', require('../../node_modules/highlight.js/lib/languages/vbscript'));
//hljs.registerLanguage('vbscript-html', require('../../node_modules/highlight.js/lib/languages/vbscript-html'));
//hljs.registerLanguage('verilog', require('../../node_modules/highlight.js/lib/languages/verilog'));
//hljs.registerLanguage('vhdl', require('../../node_modules/highlight.js/lib/languages/vhdl'));
hljs.registerLanguage('vim', require('../../node_modules/highlight.js/lib/languages/vim'));
//hljs.registerLanguage('x86asm', require('../../node_modules/highlight.js/lib/languages/x86asm'));
//hljs.registerLanguage('xl', require('../../node_modules/highlight.js/lib/languages/xl'));
//hljs.registerLanguage('xquery', require('../../node_modules/highlight.js/lib/languages/xquery'));
//hljs.registerLanguage('zephir', require('../../node_modules/highlight.js/lib/languages/zephir'));

module.exports = hljs;
