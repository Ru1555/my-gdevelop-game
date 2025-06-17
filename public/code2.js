gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDNewTextObjects1= [];
gdjs.GameOverCode.GDNewTextObjects2= [];
gdjs.GameOverCode.GDreplayObjects1= [];
gdjs.GameOverCode.GDreplayObjects2= [];
gdjs.GameOverCode.GDexitObjects1= [];
gdjs.GameOverCode.GDexitObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.GameOverCode.GDreplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDreplayObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDreplayObjects1[k] = gdjs.GameOverCode.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDreplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.GameOverCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDexitObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDexitObjects1[k] = gdjs.GameOverCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDreplayObjects1.length = 0;
gdjs.GameOverCode.GDreplayObjects2.length = 0;
gdjs.GameOverCode.GDexitObjects1.length = 0;
gdjs.GameOverCode.GDexitObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDreplayObjects1.length = 0;
gdjs.GameOverCode.GDreplayObjects2.length = 0;
gdjs.GameOverCode.GDexitObjects1.length = 0;
gdjs.GameOverCode.GDexitObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
