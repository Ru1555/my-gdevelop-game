gdjs.Game_32StartCode = {};
gdjs.Game_32StartCode.localVariables = [];
gdjs.Game_32StartCode.GDNewSpriteObjects1= [];
gdjs.Game_32StartCode.GDNewSpriteObjects2= [];
gdjs.Game_32StartCode.GDGameNameObjects1= [];
gdjs.Game_32StartCode.GDGameNameObjects2= [];
gdjs.Game_32StartCode.GDstartObjects1= [];
gdjs.Game_32StartCode.GDstartObjects2= [];
gdjs.Game_32StartCode.GDexitObjects1= [];
gdjs.Game_32StartCode.GDexitObjects2= [];


gdjs.Game_32StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.Game_32StartCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32StartCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.Game_32StartCode.GDstartObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32StartCode.GDstartObjects1[k] = gdjs.Game_32StartCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.Game_32StartCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mean", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Game_32StartCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32StartCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.Game_32StartCode.GDexitObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32StartCode.GDexitObjects1[k] = gdjs.Game_32StartCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.Game_32StartCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mean", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


};

gdjs.Game_32StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32StartCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32StartCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32StartCode.GDGameNameObjects1.length = 0;
gdjs.Game_32StartCode.GDGameNameObjects2.length = 0;
gdjs.Game_32StartCode.GDstartObjects1.length = 0;
gdjs.Game_32StartCode.GDstartObjects2.length = 0;
gdjs.Game_32StartCode.GDexitObjects1.length = 0;
gdjs.Game_32StartCode.GDexitObjects2.length = 0;

gdjs.Game_32StartCode.eventsList0(runtimeScene);
gdjs.Game_32StartCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32StartCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32StartCode.GDGameNameObjects1.length = 0;
gdjs.Game_32StartCode.GDGameNameObjects2.length = 0;
gdjs.Game_32StartCode.GDstartObjects1.length = 0;
gdjs.Game_32StartCode.GDstartObjects2.length = 0;
gdjs.Game_32StartCode.GDexitObjects1.length = 0;
gdjs.Game_32StartCode.GDexitObjects2.length = 0;


return;

}

gdjs['Game_32StartCode'] = gdjs.Game_32StartCode;
