gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1_1final = [];

gdjs.GameCode.forEachCount0_3 = 0;

gdjs.GameCode.forEachCount1_3 = 0;

gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDJumpthruObjects1= [];
gdjs.GameCode.GDJumpthruObjects2= [];
gdjs.GameCode.GDJumpthruObjects3= [];
gdjs.GameCode.GDTiledGrassPlatformObjects1= [];
gdjs.GameCode.GDTiledGrassPlatformObjects2= [];
gdjs.GameCode.GDTiledGrassPlatformObjects3= [];
gdjs.GameCode.GDTiledCastlePlatformObjects1= [];
gdjs.GameCode.GDTiledCastlePlatformObjects2= [];
gdjs.GameCode.GDTiledCastlePlatformObjects3= [];
gdjs.GameCode.GDMovingPlatformObjects1= [];
gdjs.GameCode.GDMovingPlatformObjects2= [];
gdjs.GameCode.GDMovingPlatformObjects3= [];
gdjs.GameCode.GDGoLeftObjects1= [];
gdjs.GameCode.GDGoLeftObjects2= [];
gdjs.GameCode.GDGoLeftObjects3= [];
gdjs.GameCode.GDGoRightObjects1= [];
gdjs.GameCode.GDGoRightObjects2= [];
gdjs.GameCode.GDGoRightObjects3= [];
gdjs.GameCode.GDLadderObjects1= [];
gdjs.GameCode.GDLadderObjects2= [];
gdjs.GameCode.GDLadderObjects3= [];
gdjs.GameCode.GDPlayerHitBoxObjects1= [];
gdjs.GameCode.GDPlayerHitBoxObjects2= [];
gdjs.GameCode.GDPlayerHitBoxObjects3= [];
gdjs.GameCode.GDSlimeWalkObjects1= [];
gdjs.GameCode.GDSlimeWalkObjects2= [];
gdjs.GameCode.GDSlimeWalkObjects3= [];
gdjs.GameCode.GDFlyObjects1= [];
gdjs.GameCode.GDFlyObjects2= [];
gdjs.GameCode.GDFlyObjects3= [];
gdjs.GameCode.GDCloudObjects1= [];
gdjs.GameCode.GDCloudObjects2= [];
gdjs.GameCode.GDCloudObjects3= [];
gdjs.GameCode.GDBackgroundObjectsObjects1= [];
gdjs.GameCode.GDBackgroundObjectsObjects2= [];
gdjs.GameCode.GDBackgroundObjectsObjects3= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDCoinObjects3= [];
gdjs.GameCode.GDCoinIconObjects1= [];
gdjs.GameCode.GDCoinIconObjects2= [];
gdjs.GameCode.GDCoinIconObjects3= [];
gdjs.GameCode.GDLeftButtonObjects1= [];
gdjs.GameCode.GDLeftButtonObjects2= [];
gdjs.GameCode.GDLeftButtonObjects3= [];
gdjs.GameCode.GDRightButtonObjects1= [];
gdjs.GameCode.GDRightButtonObjects2= [];
gdjs.GameCode.GDRightButtonObjects3= [];
gdjs.GameCode.GDJumpButtonObjects1= [];
gdjs.GameCode.GDJumpButtonObjects2= [];
gdjs.GameCode.GDJumpButtonObjects3= [];
gdjs.GameCode.GDArrowButtonsBgObjects1= [];
gdjs.GameCode.GDArrowButtonsBgObjects2= [];
gdjs.GameCode.GDArrowButtonsBgObjects3= [];
gdjs.GameCode.GDHoleLightObjects1= [];
gdjs.GameCode.GDHoleLightObjects2= [];
gdjs.GameCode.GDHoleLightObjects3= [];
gdjs.GameCode.GDHoleObjects1= [];
gdjs.GameCode.GDHoleObjects2= [];
gdjs.GameCode.GDHoleObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0x65da8c = function(runtimeScene) {

{

gdjs.GameCode.GDPlayerHitBoxObjects2.createFrom(gdjs.GameCode.GDPlayerHitBoxObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitBoxObjects2[k] = gdjs.GameCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerHitBoxObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitBoxObjects1[k] = gdjs.GameCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x65da8c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.GameCode.GDGoLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.GameCode.GDMovingPlatformObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.GameCode.GDGoRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.GameCode.GDMovingPlatformObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.GameCode.GDGoLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46GameCode_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.GameCode.GDSlimeWalkObjects1, "Fly": gdjs.GameCode.GDFlyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.GameCode.GDGoRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46GameCode_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.GameCode.GDSlimeWalkObjects1, "Fly": gdjs.GameCode.GDFlyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.GameCode.GDPlayerHitBoxObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46GameCode_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.GameCode.GDSlimeWalkObjects1, "Fly": gdjs.GameCode.GDFlyObjects1});gdjs.GameCode.eventsList0x69d144 = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x69d144
gdjs.GameCode.eventsList0x72df6c = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDFlyObjects2 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects2 */

gdjs.GameCode.forEachTotalCount3 = 0;
gdjs.GameCode.forEachObjects3.length = 0;
gdjs.GameCode.forEachCount0_3 = gdjs.GameCode.GDSlimeWalkObjects2.length;
gdjs.GameCode.forEachTotalCount3 += gdjs.GameCode.forEachCount0_3;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDSlimeWalkObjects2);
gdjs.GameCode.forEachCount1_3 = gdjs.GameCode.GDFlyObjects2.length;
gdjs.GameCode.forEachTotalCount3 += gdjs.GameCode.forEachCount1_3;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDFlyObjects2);
for(gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDFlyObjects3.length = 0;

gdjs.GameCode.GDSlimeWalkObjects3.length = 0;


if (gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachCount0_3) {
    gdjs.GameCode.GDSlimeWalkObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
}
else if (gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachCount0_3+gdjs.GameCode.forEachCount1_3) {
    gdjs.GameCode.GDFlyObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


}; //End of gdjs.GameCode.eventsList0x72df6c
gdjs.GameCode.eventsList0x75e57c = function(runtimeScene) {

{

gdjs.GameCode.GDPlayerHitBoxObjects2.createFrom(gdjs.GameCode.GDPlayerHitBoxObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitBoxObjects2[k] = gdjs.GameCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDFlyObjects2.createFrom(gdjs.GameCode.GDFlyObjects1);

/* Reuse gdjs.GameCode.GDPlayerHitBoxObjects2 */
gdjs.GameCode.GDSlimeWalkObjects2.createFrom(gdjs.GameCode.GDSlimeWalkObjects1);

{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.GameCode.eventsList0x72df6c(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.GameCode.GDFlyObjects1 */
/* Reuse gdjs.GameCode.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.GameCode.GDFlyObjects1.length === 0 ) ? (( gdjs.GameCode.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.GameCode.GDFlyObjects1[0].getPointY("")) - (gdjs.GameCode.GDPlayerHitBoxObjects1[i].getHeight()) + (( gdjs.GameCode.GDFlyObjects1.length === 0 ) ? (( gdjs.GameCode.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSlimeWalkObjects1[0].getHeight()) :gdjs.GameCode.GDFlyObjects1[0].getHeight()) / 2 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitBoxObjects1[k] = gdjs.GameCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.GameCode.eventsList0x75e57c
gdjs.GameCode.eventsList0x69d3bc = function(runtimeScene) {

{

gdjs.GameCode.GDFlyObjects2.createFrom(gdjs.GameCode.GDFlyObjects1);

gdjs.GameCode.GDSlimeWalkObjects2.createFrom(gdjs.GameCode.GDSlimeWalkObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.GameCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSlimeWalkObjects2[k] = gdjs.GameCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyObjects2[i].getVariableNumber(gdjs.GameCode.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyObjects2[k] = gdjs.GameCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyObjects2 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.GameCode.GDFlyObjects2.createFrom(gdjs.GameCode.GDFlyObjects1);

gdjs.GameCode.GDSlimeWalkObjects2.createFrom(gdjs.GameCode.GDSlimeWalkObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.GameCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSlimeWalkObjects2[k] = gdjs.GameCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyObjects2[i].getVariableNumber(gdjs.GameCode.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyObjects2[k] = gdjs.GameCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyObjects2 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.GameCode.GDFlyObjects1 */
gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
/* Reuse gdjs.GameCode.GDSlimeWalkObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerHitBoxObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46GameCode_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x75e57c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x69d3bc
gdjs.GameCode.eventsList0x6e317c = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDFlyObjects1 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSlimeWalkObjects1[k] = gdjs.GameCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyObjects1[k] = gdjs.GameCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyObjects1 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x6e317c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.GameCode.GDPlayerHitBoxObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoleLightObjects2Objects = Hashtable.newFrom({"HoleLight": gdjs.GameCode.GDHoleLightObjects2});gdjs.GameCode.eventsList0x687ac4 = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x687ac4
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoleLightObjects2Objects = Hashtable.newFrom({"HoleLight": gdjs.GameCode.GDHoleLightObjects2});gdjs.GameCode.eventsList0x6f48fc = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x6f48fc
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.GameCode.GDLeftButtonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.GameCode.GDRightButtonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.GameCode.GDJumpButtonObjects1});gdjs.GameCode.eventsList0xb23e0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerHitBoxObjects1[i].hide();
}
}}

}


{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setPosition((( gdjs.GameCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.GameCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs.GameCode.GDPlayerObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.GDPlayerObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects1_1final.indexOf(gdjs.GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects1_1final.push(gdjs.GameCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.GameCode.condition1IsTrue_1.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects1_1final.indexOf(gdjs.GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects1_1final.push(gdjs.GameCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.GameCode.GDPlayerObjects1.createFrom(gdjs.GameCode.GDPlayerObjects1_1final);
}
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitBoxObjects1[k] = gdjs.GameCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitBoxObjects1[k] = gdjs.GameCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerHitBoxObjects1[k] = gdjs.GameCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x65da8c(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.GameCode.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
{for(var i = 0, len = gdjs.GameCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.GameCode.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.GameCode.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.GameCode.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.GameCode.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
{for(var i = 0, len = gdjs.GameCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.GameCode.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.GameCode.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.GameCode.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46GameCode_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyObjects1 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects1[i].returnVariable(gdjs.GameCode.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects1[i].returnVariable(gdjs.GameCode.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.GameCode.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.GameCode.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46GameCode_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyObjects1 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects1[i].returnVariable(gdjs.GameCode.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects1[i].returnVariable(gdjs.GameCode.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.GameCode.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.GameCode.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSlimeWalkObjects1[k] = gdjs.GameCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyObjects1[k] = gdjs.GameCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x69d3bc(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.GameCode.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.GameCode.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSlimeWalkObjects1[k] = gdjs.GameCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlyObjects1[k] = gdjs.GameCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDSlimeWalkObjects1[k] = gdjs.GameCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDFlyObjects1[k] = gdjs.GameCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDSlimeWalkObjects1[k] = gdjs.GameCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDFlyObjects1[k] = gdjs.GameCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlyObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlyObjects1 */
/* Reuse gdjs.GameCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSlimeWalkObjects1[i].setOpacity(gdjs.GameCode.GDSlimeWalkObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlyObjects1[i].setOpacity(gdjs.GameCode.GDFlyObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.GameCode.eventsList0x6e317c(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.GameCode.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerHitBoxObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCoinObjects1[k] = gdjs.GameCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{

gdjs.GameCode.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCoinObjects1[k] = gdjs.GameCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].setOpacity(gdjs.GameCode.GDCoinObjects1[i].getOpacity() - (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].addForce(0, -(30), 0);
}
}}

}


{

gdjs.GameCode.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCoinObjects1[k] = gdjs.GameCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.GameCode.GDHoleLightObjects1.createFrom(runtimeScene.getObjects("HoleLight"));

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDHoleLightObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDHoleLightObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDHoleLightObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDHoleLightObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoleLightObjects2Objects, 250, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDHoleLightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHoleLightObjects2[i].hide();
}
}}
}

}


{

gdjs.GameCode.GDHoleLightObjects1.createFrom(runtimeScene.getObjects("HoleLight"));

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDHoleLightObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDHoleLightObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDHoleLightObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDHoleLightObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoleLightObjects2Objects, 250, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDHoleLightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHoleLightObjects2[i].hide(false);
}
}}
}

}


{



}


{



}


{


{
gdjs.GameCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.GameCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.GameCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.GameCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.GameCode.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.GameCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.GameCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.GameCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.GameCode.eventsList0xb23e0


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDJumpthruObjects1.length = 0;
gdjs.GameCode.GDJumpthruObjects2.length = 0;
gdjs.GameCode.GDJumpthruObjects3.length = 0;
gdjs.GameCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.GameCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.GameCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.GameCode.GDTiledCastlePlatformObjects1.length = 0;
gdjs.GameCode.GDTiledCastlePlatformObjects2.length = 0;
gdjs.GameCode.GDTiledCastlePlatformObjects3.length = 0;
gdjs.GameCode.GDMovingPlatformObjects1.length = 0;
gdjs.GameCode.GDMovingPlatformObjects2.length = 0;
gdjs.GameCode.GDMovingPlatformObjects3.length = 0;
gdjs.GameCode.GDGoLeftObjects1.length = 0;
gdjs.GameCode.GDGoLeftObjects2.length = 0;
gdjs.GameCode.GDGoLeftObjects3.length = 0;
gdjs.GameCode.GDGoRightObjects1.length = 0;
gdjs.GameCode.GDGoRightObjects2.length = 0;
gdjs.GameCode.GDGoRightObjects3.length = 0;
gdjs.GameCode.GDLadderObjects1.length = 0;
gdjs.GameCode.GDLadderObjects2.length = 0;
gdjs.GameCode.GDLadderObjects3.length = 0;
gdjs.GameCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.GameCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.GameCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.GameCode.GDSlimeWalkObjects1.length = 0;
gdjs.GameCode.GDSlimeWalkObjects2.length = 0;
gdjs.GameCode.GDSlimeWalkObjects3.length = 0;
gdjs.GameCode.GDFlyObjects1.length = 0;
gdjs.GameCode.GDFlyObjects2.length = 0;
gdjs.GameCode.GDFlyObjects3.length = 0;
gdjs.GameCode.GDCloudObjects1.length = 0;
gdjs.GameCode.GDCloudObjects2.length = 0;
gdjs.GameCode.GDCloudObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjectsObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjectsObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjectsObjects3.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDCoinIconObjects1.length = 0;
gdjs.GameCode.GDCoinIconObjects2.length = 0;
gdjs.GameCode.GDCoinIconObjects3.length = 0;
gdjs.GameCode.GDLeftButtonObjects1.length = 0;
gdjs.GameCode.GDLeftButtonObjects2.length = 0;
gdjs.GameCode.GDLeftButtonObjects3.length = 0;
gdjs.GameCode.GDRightButtonObjects1.length = 0;
gdjs.GameCode.GDRightButtonObjects2.length = 0;
gdjs.GameCode.GDRightButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.GameCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.GameCode.GDArrowButtonsBgObjects3.length = 0;
gdjs.GameCode.GDHoleLightObjects1.length = 0;
gdjs.GameCode.GDHoleLightObjects2.length = 0;
gdjs.GameCode.GDHoleLightObjects3.length = 0;
gdjs.GameCode.GDHoleObjects1.length = 0;
gdjs.GameCode.GDHoleObjects2.length = 0;
gdjs.GameCode.GDHoleObjects3.length = 0;

gdjs.GameCode.eventsList0xb23e0(runtimeScene);
return;

}
gdjs['GameCode'] = gdjs.GameCode;
