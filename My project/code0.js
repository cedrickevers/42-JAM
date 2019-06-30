gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDButtonQuitObjects1= [];
gdjs.MenuCode.GDButtonQuitObjects2= [];
gdjs.MenuCode.GDButtonRunObjects1= [];
gdjs.MenuCode.GDButtonRunObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonRunObjects1Objects = Hashtable.newFrom({"ButtonRun": gdjs.MenuCode.GDButtonRunObjects1});gdjs.MenuCode.eventsList0x6863e4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonRunObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonRunObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonRunObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6863e4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonQuitObjects1Objects = Hashtable.newFrom({"ButtonQuit": gdjs.MenuCode.GDButtonQuitObjects1});gdjs.MenuCode.eventsList0x67e304 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDButtonRunObjects1.createFrom(runtimeScene.getObjects("ButtonRun"));
{for(var i = 0, len = gdjs.MenuCode.GDButtonRunObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonRunObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0x67e304
gdjs.MenuCode.eventsList0xb23e0 = function(runtimeScene) {

{



}


{

gdjs.MenuCode.GDButtonRunObjects1.createFrom(runtimeScene.getObjects("ButtonRun"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonRunObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x6863e4(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDButtonQuitObjects1.createFrom(runtimeScene.getObjects("ButtonQuit"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x67e304(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xb23e0


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDButtonQuitObjects1.length = 0;
gdjs.MenuCode.GDButtonQuitObjects2.length = 0;
gdjs.MenuCode.GDButtonRunObjects1.length = 0;
gdjs.MenuCode.GDButtonRunObjects2.length = 0;

gdjs.MenuCode.eventsList0xb23e0(runtimeScene);
return;

}
gdjs['MenuCode'] = gdjs.MenuCode;
