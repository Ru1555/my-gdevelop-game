gdjs.GamemeanCode = {};
gdjs.GamemeanCode.localVariables = [];
gdjs.GamemeanCode.GDNewSpriteObjects1= [];
gdjs.GamemeanCode.GDNewSpriteObjects2= [];
gdjs.GamemeanCode.GDconObjects1= [];
gdjs.GamemeanCode.GDconObjects2= [];


gdjs.GamemeanCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("con"), gdjs.GamemeanCode.GDconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamemeanCode.GDconObjects1.length;i<l;++i) {
    if ( gdjs.GamemeanCode.GDconObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GamemeanCode.GDconObjects1[k] = gdjs.GamemeanCode.GDconObjects1[i];
        ++k;
    }
}
gdjs.GamemeanCode.GDconObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18195116);
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


};

gdjs.GamemeanCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GamemeanCode.GDNewSpriteObjects1.length = 0;
gdjs.GamemeanCode.GDNewSpriteObjects2.length = 0;
gdjs.GamemeanCode.GDconObjects1.length = 0;
gdjs.GamemeanCode.GDconObjects2.length = 0;

gdjs.GamemeanCode.eventsList0(runtimeScene);
gdjs.GamemeanCode.GDNewSpriteObjects1.length = 0;
gdjs.GamemeanCode.GDNewSpriteObjects2.length = 0;
gdjs.GamemeanCode.GDconObjects1.length = 0;
gdjs.GamemeanCode.GDconObjects2.length = 0;


return;

}

gdjs['GamemeanCode'] = gdjs.GamemeanCode;
