(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animatedLogo_atlas_", frames: [[0,502,500,500],[502,502,500,500],[0,1004,500,500],[502,1004,500,500],[0,0,500,500],[502,0,500,500]]}
];


// symbols:



(lib.bottom = function() {
	this.initialize(ss["animatedLogo_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom2 = function() {
	this.initialize(ss["animatedLogo_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.chakra = function() {
	this.initialize(ss["animatedLogo_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.glow = function() {
	this.initialize(ss["animatedLogo_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.inner = function() {
	this.initialize(ss["animatedLogo_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.innerInner = function() {
	this.initialize(ss["animatedLogo_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol_8_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bottom();
	this.instance.parent = this;
	this.instance.setTransform(500,500,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_8_Layer_1, null, null);


(lib.Symbol_7_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.chakra();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_7_Layer_1, null, null);


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_6_Layer_1, null, null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.innerInner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bottom2();
	this.instance.parent = this;
	this.instance.setTransform(272.3,0,1,1,32.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_8_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(250,250,1,1,0,0,0,250,250);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,500,500), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(250,250,1,1,0,0,0,250,250);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,500,500), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(250,250,1,1,0,0,0,250,250);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,500,500), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(250,250,1,1,0,0,0,250,250);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,500,500), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(250,250,1,1,0,0,0,250,250);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,500,500), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(345.8,345.8,1,1,0,0,0,345.8,345.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,691.7,691.7), null);


(lib.Scene_1_Layer_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_10
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(244,250,1,1,0,0,0,245.9,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:250,rotation:2.1395,x:248.05,y:250.15},0).wait(1).to({rotation:4.2764,y:250.35},0).wait(1).to({rotation:6.4133,x:248.1,y:250.45},0).wait(1).to({rotation:8.5502,x:248.05,y:250.6},0).wait(1).to({rotation:10.6871,x:248,y:250.75},0).wait(1).to({rotation:12.824,x:247.95,y:250.95},0).wait(1).to({rotation:14.9608,x:247.9,y:251.05},0).wait(1).to({rotation:17.0977,y:251.25},0).wait(1).to({rotation:19.2346,x:247.85,y:251.35},0).wait(1).to({rotation:21.3715,x:247.8,y:251.5},0).wait(1).to({rotation:23.5084,x:247.75,y:251.65},0).wait(1).to({rotation:25.6453,x:247.65,y:251.8},0).wait(1).to({rotation:27.7822,x:247.6,y:252},0).wait(1).to({rotation:29.9191,x:247.55,y:252.1},0).wait(1).to({rotation:32.056,x:247.45,y:252.25},0).wait(1).to({rotation:34.1929,x:247.35,y:252.35},0).wait(1).to({rotation:36.3297,x:247.3,y:252.45},0).wait(1).to({rotation:38.4666,x:247.2,y:252.55},0).wait(1).to({rotation:40.6035,x:247.1,y:252.7},0).wait(1).to({rotation:42.7404,x:247,y:252.8},0).wait(1).to({rotation:44.8773,x:246.85,y:252.9},0).wait(1).to({rotation:47.0142,x:246.75,y:253.05},0).wait(1).to({rotation:49.1511,x:246.65,y:253.1},0).wait(1).to({rotation:51.288,x:246.55,y:253.2},0).wait(1).to({rotation:53.4249,x:246.4,y:253.3},0).wait(1).to({rotation:55.5617,x:246.3,y:253.45},0).wait(1).to({rotation:57.6986,x:246.2,y:253.5},0).wait(1).to({rotation:59.8355,x:246,y:253.55},0).wait(1).to({rotation:61.9724,x:245.85,y:253.65},0).wait(1).to({rotation:64.1093,x:245.75,y:253.7},0).wait(1).to({rotation:66.2462,x:245.65,y:253.75},0).wait(1).to({rotation:68.3831,x:245.5,y:253.8},0).wait(1).to({rotation:70.52,x:245.3,y:253.9},0).wait(1).to({rotation:72.6569,x:245.15,y:253.95},0).wait(1).to({rotation:74.7937,x:245},0).wait(1).to({rotation:76.9306,x:244.95,y:254},0).wait(1).to({rotation:79.0675,x:244.75},0).wait(1).to({rotation:81.2044,x:244.65,y:254.1},0).wait(1).to({rotation:83.3413,x:244.5},0).wait(1).to({rotation:85.4782,x:244.3},0).wait(1).to({rotation:87.6151,x:244.15,y:254.15},0).wait(1).to({rotation:89.752,x:244,y:254.1},0).wait(1).to({rotation:91.8889,x:243.85,y:254.05},0).wait(1).to({rotation:94.0257,x:243.65,y:254.1},0).wait(1).to({rotation:96.1626,x:243.55,y:254.05},0).wait(1).to({rotation:98.2995,x:243.35},0).wait(1).to({rotation:100.4364,x:243.25,y:254},0).wait(1).to({rotation:102.5733,x:243.1},0).wait(1).to({rotation:104.7102,x:242.9,y:253.9},0).wait(1).to({rotation:106.8471,x:242.8},0).wait(1).to({rotation:108.984,x:242.6,y:253.85},0).wait(1).to({rotation:111.1209,x:242.5,y:253.8},0).wait(1).to({rotation:113.2577,x:242.35,y:253.75},0).wait(1).to({rotation:115.3946,x:242.2,y:253.7},0).wait(1).to({rotation:117.5315,x:242.1,y:253.65},0).wait(1).to({rotation:119.6684,x:241.95,y:253.5},0).wait(1).to({rotation:121.8053,x:241.85,y:253.45},0).wait(1).to({rotation:123.9422,x:241.7,y:253.35},0).wait(1).to({rotation:126.0791,x:241.6,y:253.3},0).wait(1).to({rotation:128.216,x:241.45,y:253.2},0).wait(1).to({rotation:130.3529,x:241.35,y:253.1},0).wait(1).to({rotation:132.4898,x:241.2,y:253},0).wait(1).to({rotation:134.6266,x:241.15,y:252.9},0).wait(1).to({rotation:136.7635,x:240.95,y:252.75},0).wait(1).to({rotation:138.9004,x:240.85,y:252.65},0).wait(1).to({rotation:141.0373,x:240.8,y:252.55},0).wait(1).to({rotation:143.1742,x:240.7,y:252.45},0).wait(1).to({rotation:145.3111,x:240.6,y:252.35},0).wait(1).to({rotation:147.448,x:240.55,y:252.2},0).wait(1).to({rotation:149.5849,x:240.45,y:252.05},0).wait(1).to({rotation:151.7218,x:240.35,y:251.95},0).wait(1).to({rotation:153.8586,x:240.25,y:251.75},0).wait(1).to({rotation:155.9955,x:240.2,y:251.6},0).wait(1).to({rotation:158.1324,y:251.5},0).wait(1).to({rotation:160.2693,x:240.15,y:251.4},0).wait(1).to({rotation:162.4062,x:240.1,y:251.2},0).wait(1).to({rotation:164.5431,x:240,y:251.1},0).wait(1).to({rotation:166.68,y:250.95},0).wait(1).to({rotation:168.8169,x:239.95,y:250.8},0).wait(1).to({rotation:170.9538,x:239.9,y:250.6},0).wait(1).to({rotation:173.0906,y:250.45},0).wait(1).to({rotation:175.2275,x:239.85,y:250.3},0).wait(1).to({rotation:177.3644,y:250.15},0).wait(1).to({rotation:179.5013,x:239.9,y:250},0).wait(1).to({rotation:181.6382,y:249.85},0).wait(1).to({rotation:183.7751,y:249.7},0).wait(1).to({rotation:185.912,y:249.55},0).wait(1).to({rotation:188.0489,y:249.4},0).wait(1).to({rotation:190.1858,x:239.95,y:249.25},0).wait(1).to({rotation:192.3226,y:249.1},0).wait(1).to({rotation:194.4595,y:248.95},0).wait(1).to({rotation:196.5964,x:240,y:248.8},0).wait(1).to({rotation:198.7333,x:240.1,y:248.65},0).wait(1).to({rotation:200.8702,x:240.15,y:248.5},0).wait(1).to({rotation:203.0071,x:240.2,y:248.4},0).wait(1).to({rotation:205.144,x:240.25,y:248.25},0).wait(1).to({rotation:207.2809,x:240.35,y:248.1},0).wait(1).to({rotation:209.4178,x:240.45,y:247.95},0).wait(1).to({rotation:211.5546,x:240.5,y:247.8},0).wait(1).to({rotation:213.6915,x:240.6,y:247.7},0).wait(1).to({rotation:215.8284,x:240.65,y:247.55},0).wait(1).to({rotation:217.9653,x:240.75,y:247.45},0).wait(1).to({rotation:220.1022,x:240.85,y:247.35},0).wait(1).to({rotation:222.2391,x:240.9,y:247.2},0).wait(1).to({rotation:224.376,x:241.05,y:247.1},0).wait(1).to({rotation:226.5129,x:241.15,y:247},0).wait(1).to({rotation:228.6498,x:241.25,y:246.95},0).wait(1).to({rotation:230.7867,x:241.4,y:246.8},0).wait(1).to({rotation:232.9235,x:241.5,y:246.75},0).wait(1).to({rotation:235.0604,x:241.6,y:246.6},0).wait(1).to({rotation:237.1973,x:241.75,y:246.5},0).wait(1).to({rotation:239.3342,x:241.9,y:246.45},0).wait(1).to({rotation:241.4711,x:242,y:246.35},0).wait(1).to({rotation:243.608,x:242.15,y:246.25},0).wait(1).to({rotation:245.7449,x:242.3,y:246.2},0).wait(1).to({rotation:247.8818,x:242.4,y:246.15},0).wait(1).to({rotation:250.0187,x:242.55,y:246.1},0).wait(1).to({rotation:252.1555,x:242.7},0).wait(1).to({rotation:254.2924,x:242.85,y:246},0).wait(1).to({rotation:256.4293,x:243},0).wait(1).to({rotation:258.5662,x:243.2,y:245.95},0).wait(1).to({rotation:260.7031,x:243.3},0).wait(1).to({rotation:262.84,x:243.45,y:245.9},0).wait(1).to({rotation:264.9769,x:243.6,y:245.85},0).wait(1).to({rotation:267.1138,x:243.75},0).wait(1).to({rotation:269.2507,x:244},0).wait(1).to({rotation:271.3875,x:244.1,y:245.9},0).wait(1).to({rotation:273.5244,x:244.3,y:245.85},0).wait(1).to({rotation:275.6613,x:244.45},0).wait(1).to({rotation:277.7982,x:244.55,y:245.9},0).wait(1).to({rotation:279.9351,x:244.75,y:245.95},0).wait(1).to({rotation:282.072,x:244.9,y:246},0).wait(1).to({rotation:284.2089,x:245},0).wait(1).to({rotation:286.3458,x:245.2,y:246.05},0).wait(1).to({rotation:288.4827,x:245.3,y:246.1},0).wait(1).to({rotation:290.6195,x:245.5,y:246.15},0).wait(1).to({rotation:292.7564,x:245.6,y:246.2},0).wait(1).to({rotation:294.8933,x:245.75,y:246.3},0).wait(1).to({rotation:297.0302,x:245.9},0).wait(1).to({rotation:299.1671,x:246.05,y:246.4},0).wait(1).to({rotation:301.304,x:246.15,y:246.5},0).wait(1).to({rotation:303.4409,x:246.25,y:246.55},0).wait(1).to({rotation:305.5778,x:246.45,y:246.6},0).wait(1).to({rotation:307.7147,x:246.55,y:246.75},0).wait(1).to({rotation:309.8515,x:246.7,y:246.8},0).wait(1).to({rotation:311.9884,x:246.75,y:246.95},0).wait(1).to({rotation:314.1253,x:246.85,y:247.05},0).wait(1).to({rotation:316.2622,x:247,y:247.15},0).wait(1).to({rotation:318.3991,x:247.1,y:247.25},0).wait(1).to({rotation:320.536,x:247.2,y:247.35},0).wait(1).to({rotation:322.6729,x:247.3,y:247.5},0).wait(1).to({rotation:324.8098,x:247.35,y:247.6},0).wait(1).to({rotation:326.9467,x:247.45,y:247.75},0).wait(1).to({rotation:329.0836,x:247.55,y:247.9},0).wait(1).to({rotation:331.2204,x:247.6,y:248},0).wait(1).to({rotation:333.3573,x:247.7,y:248.15},0).wait(1).to({rotation:335.4942,x:247.8,y:248.3},0).wait(1).to({rotation:337.6311,x:247.85,y:248.4},0).wait(1).to({rotation:339.768,y:248.55},0).wait(1).to({rotation:341.9049,x:247.95,y:248.7},0).wait(1).to({rotation:344.0418,y:248.8},0).wait(1).to({rotation:346.1787,y:249},0).wait(1).to({rotation:348.3156,x:248.05,y:249.1},0).wait(1).to({rotation:350.4524,y:249.3},0).wait(1).to({rotation:352.5893,x:248.1,y:249.45},0).wait(1).to({rotation:354.7262,x:248.15,y:249.6},0).wait(1).to({rotation:356.8631,x:248.1,y:249.7},0).wait(1).to({rotation:359,y:249.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(250,250,1,1,0,0,0,250,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(251,253,1,1,0,0,0,250,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.1369,x:250.95},0).wait(1).to({rotation:4.2738,y:253.05},0).wait(1).to({rotation:6.4107,x:251,y:253},0).wait(1).to({rotation:8.5476,x:250.95},0).wait(1).to({rotation:10.6845},0).wait(1).to({rotation:12.8214,y:253.05},0).wait(1).to({rotation:14.9583,x:251},0).wait(1).to({rotation:17.0952,x:250.95},0).wait(1).to({rotation:19.2321,x:251},0).wait(1).to({rotation:21.369,x:250.95,y:253},0).wait(1).to({rotation:23.506,x:251},0).wait(1).to({rotation:25.6429,y:253.05},0).wait(1).to({rotation:27.7798,y:253},0).wait(1).to({rotation:29.9167,x:250.95,y:253.05},0).wait(1).to({rotation:32.0536},0).wait(1).to({rotation:34.1905},0).wait(1).to({rotation:36.3274,y:253},0).wait(1).to({rotation:38.4643,x:251},0).wait(1).to({rotation:40.6012,x:250.95},0).wait(1).to({rotation:42.7381},0).wait(1).to({rotation:44.875},0).wait(1).to({rotation:47.0119,x:251},0).wait(1).to({rotation:49.1488,x:250.95},0).wait(1).to({rotation:51.2857,x:251},0).wait(1).to({rotation:53.4226,y:253.05},0).wait(1).to({rotation:55.5595,x:250.95},0).wait(1).to({rotation:57.6964,x:251,y:253},0).wait(1).to({rotation:59.8333,y:253.05},0).wait(1).to({rotation:61.9702,y:253},0).wait(1).to({rotation:64.1071,x:250.95},0).wait(1).to({rotation:66.244,x:251},0).wait(1).to({rotation:68.381},0).wait(1).to({rotation:70.5179,y:253.05},0).wait(1).to({rotation:72.6548,x:250.95},0).wait(1).to({rotation:74.7917,x:251},0).wait(1).to({rotation:76.9286,y:253},0).wait(1).to({rotation:79.0655,x:250.95},0).wait(1).to({rotation:81.2024,x:251,y:253.05},0).wait(1).to({rotation:83.3393,y:253},0).wait(1).to({rotation:85.4762},0).wait(1).to({rotation:87.6131,x:250.95,y:253.05},0).wait(1).to({rotation:89.75,x:251,y:253},0).wait(1).to({rotation:91.8869,x:250.95,y:252.95},0).wait(1).to({rotation:94.0238,y:253},0).wait(1).to({rotation:96.1607,y:252.95},0).wait(1).to({rotation:98.2976},0).wait(1).to({rotation:100.4345},0).wait(1).to({rotation:102.5714,x:251,y:253},0).wait(1).to({rotation:104.7083},0).wait(1).to({rotation:106.8452,y:252.95},0).wait(1).to({rotation:108.9821,y:253},0).wait(1).to({rotation:111.119,x:250.95,y:252.95},0).wait(1).to({rotation:113.256,y:253},0).wait(1).to({rotation:115.3929,x:251},0).wait(1).to({rotation:117.5298,x:250.95},0).wait(1).to({rotation:119.6667},0).wait(1).to({rotation:121.8036,x:251,y:252.95},0).wait(1).to({rotation:123.9405,x:250.95},0).wait(1).to({rotation:126.0774,x:251,y:253},0).wait(1).to({rotation:128.2143,y:252.95},0).wait(1).to({rotation:130.3512},0).wait(1).to({rotation:132.4881,y:253},0).wait(1).to({rotation:134.625,x:250.95},0).wait(1).to({rotation:136.7619,y:252.95},0).wait(1).to({rotation:138.8988},0).wait(1).to({rotation:141.0357},0).wait(1).to({rotation:143.1726,x:251,y:253},0).wait(1).to({rotation:145.3095,x:250.95},0).wait(1).to({rotation:147.4464,x:251},0).wait(1).to({rotation:149.5833,y:252.95},0).wait(1).to({rotation:151.7202,y:253},0).wait(1).to({rotation:153.8571},0).wait(1).to({rotation:155.994},0).wait(1).to({rotation:158.131,y:252.95},0).wait(1).to({rotation:160.2679,y:253},0).wait(1).to({rotation:162.4048,y:252.95},0).wait(1).to({rotation:164.5417,x:250.95,y:253},0).wait(1).to({rotation:166.6786,x:251},0).wait(1).to({rotation:168.8155,x:250.95},0).wait(1).to({rotation:170.9524,x:251,y:252.95},0).wait(1).to({rotation:173.0893,x:250.95,y:253},0).wait(1).to({rotation:175.2262,y:252.95},0).wait(1).to({rotation:177.3631},0).wait(1).to({rotation:179.5,y:253},0).wait(1).to({rotation:181.6369,x:251,y:252.95},0).wait(1).to({rotation:183.7738,y:253},0).wait(1).to({rotation:185.9107},0).wait(1).to({rotation:188.0476,x:250.95,y:252.95},0).wait(1).to({rotation:190.1845,x:251,y:253},0).wait(1).to({rotation:192.3214,x:250.95,y:252.95},0).wait(1).to({rotation:194.4583,y:253},0).wait(1).to({rotation:196.5952,y:252.95},0).wait(1).to({rotation:198.7321,x:251},0).wait(1).to({rotation:200.869,x:250.95,y:253},0).wait(1).to({rotation:203.006,x:251},0).wait(1).to({rotation:205.1429,x:250.95},0).wait(1).to({rotation:207.2798,x:251,y:252.95},0).wait(1).to({rotation:209.4167,y:253},0).wait(1).to({rotation:211.5536,x:250.95},0).wait(1).to({rotation:213.6905,x:251,y:252.95},0).wait(1).to({rotation:215.8274},0).wait(1).to({rotation:217.9643},0).wait(1).to({rotation:220.1012,x:250.95},0).wait(1).to({rotation:222.2381},0).wait(1).to({rotation:224.375,x:251},0).wait(1).to({rotation:226.5119},0).wait(1).to({rotation:228.6488,x:250.95,y:253},0).wait(1).to({rotation:230.7857,x:251},0).wait(1).to({rotation:232.9226},0).wait(1).to({rotation:235.0595,x:250.95,y:252.95},0).wait(1).to({rotation:237.1964,x:251},0).wait(1).to({rotation:239.3333},0).wait(1).to({rotation:241.4702},0).wait(1).to({rotation:243.6071,x:250.95},0).wait(1).to({rotation:245.744,x:251},0).wait(1).to({rotation:247.881,x:250.95},0).wait(1).to({rotation:250.0179},0).wait(1).to({rotation:252.1548,y:253},0).wait(1).to({rotation:254.2917,y:252.95},0).wait(1).to({rotation:256.4286,y:253},0).wait(1).to({rotation:258.5655,x:251,y:252.95},0).wait(1).to({rotation:260.7024,x:250.95,y:253},0).wait(1).to({rotation:262.8393,x:251},0).wait(1).to({rotation:264.9762,y:252.95},0).wait(1).to({rotation:267.1131},0).wait(1).to({rotation:269.25,y:253},0).wait(1).to({rotation:271.3869},0).wait(1).to({rotation:273.5238,x:251.05,y:252.95},0).wait(1).to({rotation:275.6607},0).wait(1).to({rotation:277.7976,x:251},0).wait(1).to({rotation:279.9345,x:251.05,y:253},0).wait(1).to({rotation:282.0714,x:251},0).wait(1).to({rotation:284.2083,y:252.95},0).wait(1).to({rotation:286.3452},0).wait(1).to({rotation:288.4821,y:253},0).wait(1).to({rotation:290.619,x:251.05,y:252.95},0).wait(1).to({rotation:292.756},0).wait(1).to({rotation:294.8929,x:251,y:253},0).wait(1).to({rotation:297.0298,y:252.95},0).wait(1).to({rotation:299.1667,x:251.05,y:253},0).wait(1).to({rotation:301.3036},0).wait(1).to({rotation:303.4405,x:251,y:252.95},0).wait(1).to({rotation:305.5774,x:251.05},0).wait(1).to({rotation:307.7143,y:253},0).wait(1).to({rotation:309.8512,y:252.95},0).wait(1).to({rotation:311.9881,x:251,y:253},0).wait(1).to({rotation:314.125,y:252.95},0).wait(1).to({rotation:316.2619,x:251.05,y:253},0).wait(1).to({rotation:318.3988,y:252.95},0).wait(1).to({rotation:320.5357,x:251},0).wait(1).to({rotation:322.6726,x:251.05},0).wait(1).to({rotation:324.8095,x:251,y:253},0).wait(1).to({rotation:326.9464,x:251.05},0).wait(1).to({rotation:329.0833},0).wait(1).to({rotation:331.2202,x:251,y:252.95},0).wait(1).to({rotation:333.3571,y:253},0).wait(1).to({rotation:335.494,x:251.05},0).wait(1).to({rotation:337.631},0).wait(1).to({rotation:339.7679,x:251,y:252.95},0).wait(1).to({rotation:341.9048,x:251.05,y:253},0).wait(1).to({rotation:344.0417,x:251,y:252.95},0).wait(1).to({rotation:346.1786,y:253},0).wait(1).to({rotation:348.3155,y:252.95},0).wait(1).to({rotation:350.4524,y:253},0).wait(1).to({rotation:352.5893,y:252.95},0).wait(1).to({rotation:354.7262,x:251.05},0).wait(1).to({rotation:356.8631,x:251},0).wait(1).to({rotation:359,y:253},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(250,252,1,1,0,0,0,250,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(250,252,1,1,0,0,0,250,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.1369,x:249.95},0).wait(1).to({rotation:4.2738,y:252.05},0).wait(1).to({rotation:6.4107,x:250,y:252},0).wait(1).to({rotation:8.5476,x:249.95},0).wait(1).to({rotation:10.6845},0).wait(1).to({rotation:12.8214,y:252.05},0).wait(1).to({rotation:14.9583,x:250},0).wait(1).to({rotation:17.0952,x:249.95},0).wait(1).to({rotation:19.2321,x:250},0).wait(1).to({rotation:21.369,x:249.95,y:252},0).wait(1).to({rotation:23.506,x:250},0).wait(1).to({rotation:25.6429,y:252.05},0).wait(1).to({rotation:27.7798,y:252},0).wait(1).to({rotation:29.9167,x:249.95,y:252.05},0).wait(1).to({rotation:32.0536},0).wait(1).to({rotation:34.1905},0).wait(1).to({rotation:36.3274,y:252},0).wait(1).to({rotation:38.4643,x:250},0).wait(1).to({rotation:40.6012,x:249.95},0).wait(1).to({rotation:42.7381},0).wait(1).to({rotation:44.875},0).wait(1).to({rotation:47.0119,x:250},0).wait(1).to({rotation:49.1488,x:249.95},0).wait(1).to({rotation:51.2857,x:250},0).wait(1).to({rotation:53.4226,y:252.05},0).wait(1).to({rotation:55.5595,x:249.95},0).wait(1).to({rotation:57.6964,x:250,y:252},0).wait(1).to({rotation:59.8333,y:252.05},0).wait(1).to({rotation:61.9702,y:252},0).wait(1).to({rotation:64.1071,x:249.95},0).wait(1).to({rotation:66.244,x:250},0).wait(1).to({rotation:68.381},0).wait(1).to({rotation:70.5179,y:252.05},0).wait(1).to({rotation:72.6548,x:249.95},0).wait(1).to({rotation:74.7917,x:250},0).wait(1).to({rotation:76.9286,y:252},0).wait(1).to({rotation:79.0655,x:249.95},0).wait(1).to({rotation:81.2024,x:250,y:252.05},0).wait(1).to({rotation:83.3393,y:252},0).wait(1).to({rotation:85.4762},0).wait(1).to({rotation:87.6131,x:249.95,y:252.05},0).wait(1).to({rotation:89.75,x:250,y:252},0).wait(1).to({rotation:91.8869,x:249.95,y:251.95},0).wait(1).to({rotation:94.0238,y:252},0).wait(1).to({rotation:96.1607,y:251.95},0).wait(1).to({rotation:98.2976},0).wait(1).to({rotation:100.4345},0).wait(1).to({rotation:102.5714,x:250,y:252},0).wait(1).to({rotation:104.7083},0).wait(1).to({rotation:106.8452,y:251.95},0).wait(1).to({rotation:108.9821,y:252},0).wait(1).to({rotation:111.119,x:249.95,y:251.95},0).wait(1).to({rotation:113.256,y:252},0).wait(1).to({rotation:115.3929,x:250},0).wait(1).to({rotation:117.5298,x:249.95},0).wait(1).to({rotation:119.6667},0).wait(1).to({rotation:121.8036,x:250,y:251.95},0).wait(1).to({rotation:123.9405,x:249.95},0).wait(1).to({rotation:126.0774,x:250,y:252},0).wait(1).to({rotation:128.2143,y:251.95},0).wait(1).to({rotation:130.3512},0).wait(1).to({rotation:132.4881,y:252},0).wait(1).to({rotation:134.625,x:249.95},0).wait(1).to({rotation:136.7619,y:251.95},0).wait(1).to({rotation:138.8988},0).wait(1).to({rotation:141.0357},0).wait(1).to({rotation:143.1726,x:250,y:252},0).wait(1).to({rotation:145.3095,x:249.95},0).wait(1).to({rotation:147.4464,x:250},0).wait(1).to({rotation:149.5833,y:251.95},0).wait(1).to({rotation:151.7202,y:252},0).wait(1).to({rotation:153.8571},0).wait(1).to({rotation:155.994},0).wait(1).to({rotation:158.131,y:251.95},0).wait(1).to({rotation:160.2679,y:252},0).wait(1).to({rotation:162.4048,y:251.95},0).wait(1).to({rotation:164.5417,x:249.95,y:252},0).wait(1).to({rotation:166.6786,x:250},0).wait(1).to({rotation:168.8155,x:249.95},0).wait(1).to({rotation:170.9524,x:250,y:251.95},0).wait(1).to({rotation:173.0893,x:249.95,y:252},0).wait(1).to({rotation:175.2262,y:251.95},0).wait(1).to({rotation:177.3631},0).wait(1).to({rotation:179.5,y:252},0).wait(1).to({rotation:181.6369,x:250,y:251.95},0).wait(1).to({rotation:183.7738,y:252},0).wait(1).to({rotation:185.9107},0).wait(1).to({rotation:188.0476,x:249.95,y:251.95},0).wait(1).to({rotation:190.1845,x:250,y:252},0).wait(1).to({rotation:192.3214,x:249.95,y:251.95},0).wait(1).to({rotation:194.4583,y:252},0).wait(1).to({rotation:196.5952,y:251.95},0).wait(1).to({rotation:198.7321,x:250},0).wait(1).to({rotation:200.869,x:249.95,y:252},0).wait(1).to({rotation:203.006,x:250},0).wait(1).to({rotation:205.1429,x:249.95},0).wait(1).to({rotation:207.2798,x:250,y:251.95},0).wait(1).to({rotation:209.4167,y:252},0).wait(1).to({rotation:211.5536,x:249.95},0).wait(1).to({rotation:213.6905,x:250,y:251.95},0).wait(1).to({rotation:215.8274},0).wait(1).to({rotation:217.9643},0).wait(1).to({rotation:220.1012,x:249.95},0).wait(1).to({rotation:222.2381},0).wait(1).to({rotation:224.375,x:250},0).wait(1).to({rotation:226.5119},0).wait(1).to({rotation:228.6488,x:249.95,y:252},0).wait(1).to({rotation:230.7857,x:250},0).wait(1).to({rotation:232.9226},0).wait(1).to({rotation:235.0595,x:249.95,y:251.95},0).wait(1).to({rotation:237.1964,x:250},0).wait(1).to({rotation:239.3333},0).wait(1).to({rotation:241.4702},0).wait(1).to({rotation:243.6071,x:249.95},0).wait(1).to({rotation:245.744,x:250},0).wait(1).to({rotation:247.881,x:249.95},0).wait(1).to({rotation:250.0179},0).wait(1).to({rotation:252.1548,y:252},0).wait(1).to({rotation:254.2917,y:251.95},0).wait(1).to({rotation:256.4286,y:252},0).wait(1).to({rotation:258.5655,x:250,y:251.95},0).wait(1).to({rotation:260.7024,x:249.95,y:252},0).wait(1).to({rotation:262.8393,x:250},0).wait(1).to({rotation:264.9762,y:251.95},0).wait(1).to({rotation:267.1131},0).wait(1).to({rotation:269.25,y:252},0).wait(1).to({rotation:271.3869},0).wait(1).to({rotation:273.5238,x:250.05,y:251.95},0).wait(1).to({rotation:275.6607},0).wait(1).to({rotation:277.7976,x:250},0).wait(1).to({rotation:279.9345,x:250.05,y:252},0).wait(1).to({rotation:282.0714,x:250},0).wait(1).to({rotation:284.2083,y:251.95},0).wait(1).to({rotation:286.3452},0).wait(1).to({rotation:288.4821,y:252},0).wait(1).to({rotation:290.619,x:250.05,y:251.95},0).wait(1).to({rotation:292.756},0).wait(1).to({rotation:294.8929,x:250,y:252},0).wait(1).to({rotation:297.0298,y:251.95},0).wait(1).to({rotation:299.1667,x:250.05,y:252},0).wait(1).to({rotation:301.3036},0).wait(1).to({rotation:303.4405,x:250,y:251.95},0).wait(1).to({rotation:305.5774,x:250.05},0).wait(1).to({rotation:307.7143,y:252},0).wait(1).to({rotation:309.8512,y:251.95},0).wait(1).to({rotation:311.9881,x:250,y:252},0).wait(1).to({rotation:314.125,y:251.95},0).wait(1).to({rotation:316.2619,x:250.05,y:252},0).wait(1).to({rotation:318.3988,y:251.95},0).wait(1).to({rotation:320.5357,x:250},0).wait(1).to({rotation:322.6726,x:250.05},0).wait(1).to({rotation:324.8095,x:250,y:252},0).wait(1).to({rotation:326.9464,x:250.05},0).wait(1).to({rotation:329.0833},0).wait(1).to({rotation:331.2202,x:250,y:251.95},0).wait(1).to({rotation:333.3571,y:252},0).wait(1).to({rotation:335.494,x:250.05},0).wait(1).to({rotation:337.631},0).wait(1).to({rotation:339.7679,x:250,y:251.95},0).wait(1).to({rotation:341.9048,x:250.05,y:252},0).wait(1).to({rotation:344.0417,x:250,y:251.95},0).wait(1).to({rotation:346.1786,y:252},0).wait(1).to({rotation:348.3155,y:251.95},0).wait(1).to({rotation:350.4524,y:252},0).wait(1).to({rotation:352.5893,y:251.95},0).wait(1).to({rotation:354.7262,x:250.05},0).wait(1).to({rotation:356.8631,x:250},0).wait(1).to({rotation:359,y:252},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(253,255,1,1,0,0,0,345.8,345.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-2.1369},0).wait(1).to({rotation:-4.2738,y:255.05},0).wait(1).to({rotation:-6.4107,x:253.05},0).wait(1).to({rotation:-8.5476,x:253,y:255},0).wait(1).to({rotation:-10.6845,y:255.05},0).wait(1).to({rotation:-12.8214,y:255},0).wait(1).to({rotation:-14.9583,x:253.05},0).wait(1).to({rotation:-17.0952,x:253,y:254.95},0).wait(1).to({rotation:-19.2321,y:255},0).wait(1).to({rotation:-21.369,y:254.95},0).wait(1).to({rotation:-23.506,y:255},0).wait(1).to({rotation:-25.6429,x:253.05},0).wait(1).to({rotation:-27.7798,x:253},0).wait(1).to({rotation:-29.9167,y:254.95},0).wait(1).to({rotation:-32.0536,y:255},0).wait(1).to({rotation:-34.1905},0).wait(1).to({rotation:-36.3274,x:253.05},0).wait(1).to({rotation:-38.4643,x:253,y:254.95},0).wait(1).to({rotation:-40.6012,x:253.05},0).wait(1).to({rotation:-42.7381,x:252.95},0).wait(1).to({rotation:-44.875,x:253.05},0).wait(1).to({rotation:-47.0119,y:255},0).wait(1).to({rotation:-49.1488,x:253},0).wait(1).to({rotation:-51.2857,y:254.95},0).wait(1).to({rotation:-53.4226},0).wait(1).to({rotation:-55.5595},0).wait(1).to({rotation:-57.6964,x:253.05},0).wait(1).to({rotation:-59.8333,x:253},0).wait(1).to({rotation:-61.9702,x:253.05},0).wait(1).to({rotation:-64.1071},0).wait(1).to({rotation:-66.244,x:253},0).wait(1).to({rotation:-68.381,y:255},0).wait(1).to({rotation:-70.5179,x:253.05},0).wait(1).to({rotation:-72.6548,x:253},0).wait(1).to({rotation:-74.7917,y:254.95},0).wait(1).to({rotation:-76.9286,x:253.05},0).wait(1).to({rotation:-79.0655,x:253,y:255},0).wait(1).to({rotation:-81.2024,x:253.05,y:254.95},0).wait(1).to({rotation:-83.3393,x:253,y:255},0).wait(1).to({rotation:-85.4762,y:254.95},0).wait(1).to({rotation:-87.6131},0).wait(1).to({rotation:-89.75},0).wait(1).to({rotation:-91.8869},0).wait(1).to({rotation:-94.0238,x:253.05,y:255},0).wait(1).to({rotation:-96.1607},0).wait(1).to({rotation:-98.2976,y:254.95},0).wait(1).to({rotation:-100.4345,x:253},0).wait(1).to({rotation:-102.5714,x:253.05,y:255},0).wait(1).to({rotation:-104.7083,x:252.95},0).wait(1).to({rotation:-106.8452},0).wait(1).to({rotation:-108.9821,y:254.95},0).wait(1).to({rotation:-111.119,y:255},0).wait(1).to({rotation:-113.256,y:254.95},0).wait(1).to({rotation:-115.3929},0).wait(1).to({rotation:-117.5298},0).wait(1).to({rotation:-119.6667,y:255},0).wait(1).to({rotation:-121.8036,x:253,y:254.95},0).wait(1).to({rotation:-123.9405,y:255},0).wait(1).to({rotation:-126.0774,y:254.95},0).wait(1).to({rotation:-128.2143,y:255},0).wait(1).to({rotation:-130.3512,y:254.95},0).wait(1).to({rotation:-132.4881,y:255},0).wait(1).to({rotation:-134.625,x:252.95},0).wait(1).to({rotation:-136.7619,x:253},0).wait(1).to({rotation:-138.8988,y:255.05},0).wait(1).to({rotation:-141.0357,y:255},0).wait(1).to({rotation:-143.1726,x:252.95},0).wait(1).to({rotation:-145.3095,y:254.95},0).wait(1).to({rotation:-147.4464,x:253,y:255},0).wait(1).to({rotation:-149.5833,x:252.95},0).wait(1).to({rotation:-151.7202,x:253},0).wait(1).to({rotation:-153.8571},0).wait(1).to({rotation:-155.994,y:254.95},0).wait(1).to({rotation:-158.131,y:255},0).wait(1).to({rotation:-160.2679,x:252.95,y:254.95},0).wait(1).to({rotation:-162.4048,x:253,y:255},0).wait(1).to({rotation:-164.5417,x:252.95},0).wait(1).to({rotation:-166.6786},0).wait(1).to({rotation:-168.8155},0).wait(1).to({rotation:-170.9524},0).wait(1).to({rotation:-173.0893,y:254.95},0).wait(1).to({rotation:-175.2262,x:253},0).wait(1).to({rotation:-177.3631,x:252.95},0).wait(1).to({rotation:-179.5,y:255},0).wait(1).to({rotation:-181.6369},0).wait(1).to({rotation:-183.7738,x:253,y:254.95},0).wait(1).to({rotation:-185.9107,y:255},0).wait(1).to({rotation:-188.0476,y:254.95},0).wait(1).to({rotation:-190.1845,x:252.95,y:255},0).wait(1).to({rotation:-192.3214,y:254.95},0).wait(1).to({rotation:-194.4583,y:255},0).wait(1).to({rotation:-196.5952,x:253,y:254.95},0).wait(1).to({rotation:-198.7321,x:252.95},0).wait(1).to({rotation:-200.869,y:255},0).wait(1).to({rotation:-203.006,y:254.95},0).wait(1).to({rotation:-205.1429,x:253},0).wait(1).to({rotation:-207.2798,x:252.95},0).wait(1).to({rotation:-209.4167,x:253,y:255},0).wait(1).to({rotation:-211.5536},0).wait(1).to({rotation:-213.6905},0).wait(1).to({rotation:-215.8274},0).wait(1).to({rotation:-217.9643,y:254.95},0).wait(1).to({rotation:-220.1012,x:252.95,y:255},0).wait(1).to({rotation:-222.2381,x:253},0).wait(1).to({rotation:-224.375},0).wait(1).to({rotation:-226.5119,x:252.95,y:254.95},0).wait(1).to({rotation:-228.6488,y:255},0).wait(1).to({rotation:-230.7857,x:253},0).wait(1).to({rotation:-232.9226,x:252.95,y:254.95},0).wait(1).to({rotation:-235.0595,x:253},0).wait(1).to({rotation:-237.1964,x:252.95},0).wait(1).to({rotation:-239.3333,x:253,y:255},0).wait(1).to({rotation:-241.4702},0).wait(1).to({rotation:-243.6071},0).wait(1).to({rotation:-245.744,y:254.95},0).wait(1).to({rotation:-247.881,y:255},0).wait(1).to({rotation:-250.0179},0).wait(1).to({rotation:-252.1548},0).wait(1).to({rotation:-254.2917},0).wait(1).to({rotation:-256.4286,x:252.95},0).wait(1).to({rotation:-258.5655,y:255.05},0).wait(1).to({rotation:-260.7024,x:253},0).wait(1).to({rotation:-262.8393},0).wait(1).to({rotation:-264.9762,y:255},0).wait(1).to({rotation:-267.1131,y:255.05},0).wait(1).to({rotation:-269.25},0).wait(1).to({rotation:-271.3869,x:252.95,y:255},0).wait(1).to({rotation:-273.5238},0).wait(1).to({rotation:-275.6607,x:253},0).wait(1).to({rotation:-277.7976,x:252.95},0).wait(1).to({rotation:-279.9345,x:253},0).wait(1).to({rotation:-282.0714,x:252.95},0).wait(1).to({rotation:-284.2083},0).wait(1).to({rotation:-286.3452,x:253},0).wait(1).to({rotation:-288.4821,x:252.95},0).wait(1).to({rotation:-290.619},0).wait(1).to({rotation:-292.756,y:255.05},0).wait(1).to({rotation:-294.8929,x:253,y:255},0).wait(1).to({rotation:-297.0298,x:252.95,y:255.05},0).wait(1).to({rotation:-299.1667,x:253},0).wait(1).to({rotation:-301.3036,x:252.95,y:255},0).wait(1).to({rotation:-303.4405},0).wait(1).to({rotation:-305.5774,x:253,y:255.05},0).wait(1).to({rotation:-307.7143},0).wait(1).to({rotation:-309.8512,y:255},0).wait(1).to({rotation:-311.9881},0).wait(1).to({rotation:-314.125},0).wait(1).to({rotation:-316.2619},0).wait(1).to({rotation:-318.3988,y:255.05},0).wait(1).to({rotation:-320.5357,x:252.95,y:255},0).wait(1).to({rotation:-322.6726},0).wait(1).to({rotation:-324.8095,y:255.05},0).wait(1).to({rotation:-326.9464,x:253},0).wait(1).to({rotation:-329.0833,y:255},0).wait(1).to({rotation:-331.2202,x:252.95,y:255.05},0).wait(1).to({rotation:-333.3571,x:253},0).wait(1).to({rotation:-335.494,x:252.95},0).wait(1).to({rotation:-337.631,x:253},0).wait(1).to({rotation:-339.7679,x:252.95,y:255},0).wait(1).to({rotation:-341.9048,x:253},0).wait(1).to({rotation:-344.0417},0).wait(1).to({rotation:-346.1786,x:253.05,y:255.05},0).wait(1).to({rotation:-348.3155,x:253},0).wait(1).to({rotation:-350.4524,y:255},0).wait(1).to({rotation:-352.5893},0).wait(1).to({rotation:-354.7262,y:255.05},0).wait(1).to({rotation:-356.8631,x:253.05,y:255},0).wait(1).to({rotation:-359,x:253,y:255.05},0).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.animatedLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_168 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(168).call(this.frame_168).wait(1));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.setTransform(250,250,1,1,0,0,0,250,250);
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 0
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(169));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.setTransform(251,253,1,1,0,0,0,251,253);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 1
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(169));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.setTransform(250,252,1,1,0,0,0,250,252);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 2
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(169));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(253,255,1,1,0,0,0,253,255);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 3
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(169));

	// Layer_10_obj_
	this.Layer_10 = new lib.Scene_1_Layer_10();
	this.Layer_10.name = "Layer_10";
	this.Layer_10.parent = this;
	this.Layer_10.setTransform(248.1,250,1,1,0,0,0,248.1,250);
	this.Layer_10.depth = 0;
	this.Layer_10.isAttachedToCamera = 0
	this.Layer_10.isAttachedToMask = 0
	this.Layer_10.layerDepth = 0
	this.Layer_10.layerIndex = 4
	this.Layer_10.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_10).wait(1).to({regX:244,x:244},0).wait(168));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.setTransform(250,252,1,1,0,0,0,250,252);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 5
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138.1,144.1,468.29999999999995,464.29999999999995);
// library properties:
lib.properties = {
	id: '181852E2B6C48D418AFB375DD43ECD97',
	width: 500,
	height: 500,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animatedLogo_atlas_.png", id:"animatedLogo_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['181852E2B6C48D418AFB375DD43ECD97'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;