gdjs.meanCode = {};
gdjs.meanCode.localVariables = [];
gdjs.meanCode.GDNewSpriteObjects1= [];
gdjs.meanCode.GDNewSpriteObjects2= [];
gdjs.meanCode.GDcontiuneObjects1= [];
gdjs.meanCode.GDcontiuneObjects2= [];


gdjs.meanCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18210204);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
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


{

gdjs.copyArray(runtimeScene.getObjects("contiune"), gdjs.meanCode.GDcontiuneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.meanCode.GDcontiuneObjects1.length;i<l;++i) {
    if ( gdjs.meanCode.GDcontiuneObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.meanCode.GDcontiuneObjects1[k] = gdjs.meanCode.GDcontiuneObjects1[i];
        ++k;
    }
}
gdjs.meanCode.GDcontiuneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gamemean", false);
}}

}


};

gdjs.meanCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.meanCode.GDNewSpriteObjects1.length = 0;
gdjs.meanCode.GDNewSpriteObjects2.length = 0;
gdjs.meanCode.GDcontiuneObjects1.length = 0;
gdjs.meanCode.GDcontiuneObjects2.length = 0;

gdjs.meanCode.eventsList0(runtimeScene);
gdjs.meanCode.GDNewSpriteObjects1.length = 0;
gdjs.meanCode.GDNewSpriteObjects2.length = 0;
gdjs.meanCode.GDcontiuneObjects1.length = 0;
gdjs.meanCode.GDcontiuneObjects2.length = 0;


return;

}

gdjs['meanCode'] = gdjs.meanCode;
