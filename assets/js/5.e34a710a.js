(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{266:function(e,t,r){"use strict";r.r(t);var n=r(38),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"citation-and-contact"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#citation-and-contact","aria-hidden":"true"}},[e._v("#")]),e._v(" Citation and contact")]),e._v(" "),r("p",[r("strong",[e._v("Please cite:")]),e._v(" J. Zeng, L. Cao, J.Z.H. Zhang, C.H. Chin, T. Zhu: ReacNetGen: an Automatic Reaction Network Generator for Reactive Molecular Dynamic Simulations, 2018, doi: "),r("a",{attrs:{href:"https://dx.doi.org/10.26434/chemrxiv.7421534",target:"_blank",rel:"noopener noreferrer"}},[e._v("10.26434/chemrxiv.7421534"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Author")]),e._v(":\n"),r("a",{attrs:{href:"https://cv.njzjz.win",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jinzhe Zeng"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"http://computchem.cn/people/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liqun Cao"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://research.shanghai.nyu.edu/centers-and-institutes/chemistry/people/john-zenghui-zhang",target:"_blank",rel:"noopener noreferrer"}},[e._v("John ZH Zhang"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"http://computchem.cn/people/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chih-Hao Chin"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"http://computchem.cn/people/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tong Zhu"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Email")]),e._v(": tzhu@lps.ecnu.edu.cn, jzzeng@stu.ecnu.edu.cn")]),e._v(" "),r("h1",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("ol",[r("li",[e._v("Download the source code on "),r("a",{attrs:{href:"http://computchem.cn/reacnetgenerator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("our group website"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://conda.io/projects/continuumio-conda/en/latest/user-guide/install/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Anaconda or Miniconda"),r("OutboundLink")],1),e._v(" to obtain conda.")]),e._v(" "),r("li",[e._v("Decompress reacnetgenerator.zip and build in the main directory:")])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("conda config --add channels conda-forge\nconda build conda/recipe\nconda "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" reacnetgenerator --use-local\n")])])]),r("h1",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("h2",{attrs:{id:"command-line"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#command-line","aria-hidden":"true"}},[e._v("#")]),e._v(" Command line")]),e._v(" "),r("p",[e._v("ReacNetGenerator can process any kind of trajectory files containing atomic coordinates, e.g. a LAMMPS dump file prepared by running “dump 1 all custom 100 dump.reaxc id type x y z” in LAMMPS:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("reacnetgenerator --dump -i dump.reaxc -a C H O\n")])])]),r("p",[e._v("where C, H, and O are atomic names in the input file. "),r("a",{attrs:{href:"/report.html?jdata=https%3A%2F%2Fgist.githubusercontent.com%2Fnjzjz%2Fe9a4b42ceb7d2c3c7ada189f38708bf3%2Fraw%2F83d01b9ab1780b0ad2d1e7f934e61fa113cb0f9f%2Fmethane.json",target:"_blank"}},[e._v("Analysis report")]),e._v(" will be generated automatically.")]),e._v(" "),r("p",[e._v("Also, ReacNetGenerator can process files containing bond information, e.g. LAMMPS bond file:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("reacnetgenerator -i bonds.reaxc -a C H O\n")])])]),r("p",[e._v("You can running the following script for help:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("reacnetgenerator -h\n")])])]),r("h2",{attrs:{id:"gui-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gui-version","aria-hidden":"true"}},[e._v("#")]),e._v(" GUI version")]),e._v(" "),r("p",[e._v("You can open a GUI version for ReacNetGenerator by typing:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("reacnetgeneratorgui\n")])])]),r("h1",{attrs:{id:"dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),r("ul",[r("li",[e._v("Python >= 3.6")]),e._v(" "),r("li",[e._v("Python packages:\n"),r("a",{attrs:{href:"https://github.com/numpy/numpy",target:"_blank",rel:"noopener noreferrer"}},[e._v("numpy"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/scipy/scipy",target:"_blank",rel:"noopener noreferrer"}},[e._v("scipy"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/pandas-dev/pandas",target:"_blank",rel:"noopener noreferrer"}},[e._v("pandas"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/networkx/networkx",target:"_blank",rel:"noopener noreferrer"}},[e._v("networkx"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/scikit-learn/scikit-learn",target:"_blank",rel:"noopener noreferrer"}},[e._v("scikit-learn"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/matplotlib/matplotlib",target:"_blank",rel:"noopener noreferrer"}},[e._v("matplotlib"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/hmmlearn/hmmlearn",target:"_blank",rel:"noopener noreferrer"}},[e._v("hmmlearn"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://gitlab.com/ase/ase",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASE"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/scour-project/scour",target:"_blank",rel:"noopener noreferrer"}},[e._v("scour"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/tqdm/tqdm",target:"_blank",rel:"noopener noreferrer"}},[e._v("tqdm"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/xolox/python-coloredlogs",target:"_blank",rel:"noopener noreferrer"}},[e._v("coloredlogs"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/python-lz4/python-lz4",target:"_blank",rel:"noopener noreferrer"}},[e._v("lz4"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/mayeut/pybase64",target:"_blank",rel:"noopener noreferrer"}},[e._v("pybase64"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Extra libraries:\n"),r("a",{attrs:{href:"https://github.com/yarnpkg/yarn",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/openbabel/openbabel",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenBabel"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/rdkit/rdkit",target:"_blank",rel:"noopener noreferrer"}},[e._v("RDKit"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("npm packages:\n"),r("a",{attrs:{href:"https://github.com/jquery/jquery",target:"_blank",rel:"noopener noreferrer"}},[e._v("jQuery"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/gdsmith/jquery.easing",target:"_blank",rel:"noopener noreferrer"}},[e._v("jQuery Easing Plugin"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/dimsemenov/Magnific-Popup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Magnific Popup"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/twbs/bootstrap",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/BlackrockDigital/startbootstrap-creative",target:"_blank",rel:"noopener noreferrer"}},[e._v("Start Bootstrap - Creative"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/d3/d3",target:"_blank",rel:"noopener noreferrer"}},[e._v("D3"),r("OutboundLink")],1),e._v(",\n"),r("a",{attrs:{href:"https://github.com/fkling/JSNetworkX",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSNetworkX"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"awards"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#awards","aria-hidden":"true"}},[e._v("#")]),e._v(" Awards")]),e._v(" "),r("ul",[r("li",[e._v("The First Prize in 2019 (the 11th Session) Shanghai Computer Application Competition for College Students")]),e._v(" "),r("li",[e._v("The First Prize in 2019 (the 12th Session) Chinese Computer Design Competition for College Students")])])])},[],!1,null,null,null);t.default=a.exports}}]);