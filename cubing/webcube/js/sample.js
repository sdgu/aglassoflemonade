// Store frame for motion functions
var previousFrame = null;
var paused = false;
var pauseOnGesture = false;

// Setup Leap loop with frame callback function
var controllerOptions = {
    enableGestures: true
};

// to use HMD mode:
// controllerOptions.optimizeHMD = true;

var numGest = 0;

Leap.loop(controllerOptions, function(frame)
{
    if (paused)
    {
        return; // Skip this update
    }

    // Display Frame object data
    var frameOutput = document.getElementById("frameData");

    var frameString = "Frame ID: " + frame.id + "<br />" + "Timestamp: " + frame.timestamp + " &micro;s<br />" + "Hands: " + frame.hands.length + "<br />" + "Fingers: " + frame.fingers.length + "<br />" + "Tools: " + frame.tools.length + "<br />" + "Gestures: " + frame.gestures.length + "<br />";

    // Frame motion factors
    if (previousFrame && previousFrame.valid)
    {
        var translation = frame.translation(previousFrame);
        frameString += "Translation: " + vectorToString(translation) + " mm <br />";

        var rotationAxis = frame.rotationAxis(previousFrame);
        var rotationAngle = frame.rotationAngle(previousFrame);
        frameString += "Rotation axis: " + vectorToString(rotationAxis, 2) + "<br />";
        frameString += "Rotation angle: " + rotationAngle.toFixed(2) + " radians<br />";

        var scaleFactor = frame.scaleFactor(previousFrame);
        frameString += "Scale factor: " + scaleFactor.toFixed(2) + "<br />";
    }
    //frameOutput.innerHTML = "<div style='width:300px; float:left; padding:5px'>" + frameString + "</div>";

    // Display Hand object data
    var handOutput = document.getElementById("handData");
    var handString = "";
    if (frame.hands.length > 0)
    {
        for (var i = 0; i < frame.hands.length; i++)
        {
            var hand = frame.hands[i];

            if (hand.palmPosition[1] > 100)
            {
                //cwR();
            }

            handString += "<div style='width:300px; float:left; padding:5px'>";
            handString += hand.palmPosition[1];
            handString += "Hand ID: " + hand.id + "<br />";
            handString += "Type: " + hand.type + " hand" + "<br />";
            handString += "Direction: " + vectorToString(hand.direction, 2) + "<br />";
            handString += "Palm position: " + vectorToString(hand.palmPosition) + " mm<br />";
            handString += "Grab strength: " + hand.grabStrength + "<br />";
            handString += "Pinch strength: " + hand.pinchStrength + "<br />";
            handString += "Confidence: " + hand.confidence + "<br />";
            handString += "Arm direction: " + vectorToString(hand.arm.direction()) + "<br />";
            handString += "Arm center: " + vectorToString(hand.arm.center()) + "<br />";
            handString += "Arm up vector: " + vectorToString(hand.arm.basis[1]) + "<br />";

            // Hand motion factors
            if (previousFrame && previousFrame.valid)
            {
                var translation = hand.translation(previousFrame);
                handString += "Translation: " + vectorToString(translation) + " mm<br />";

                var rotationAxis = hand.rotationAxis(previousFrame, 2);
                var rotationAngle = hand.rotationAngle(previousFrame);
                handString += "Rotation axis: " + vectorToString(rotationAxis) + "<br />";
                handString += "Rotation angle: " + rotationAngle.toFixed(2) + " radians<br />";

                var scaleFactor = hand.scaleFactor(previousFrame);
                handString += "Scale factor: " + scaleFactor.toFixed(2) + "<br />";
            }

            // IDs of pointables associated with this hand
            if (hand.pointables.length > 0)
            {
                var fingerIds = [];
                for (var j = 0; j < hand.pointables.length; j++)
                {
                    var pointable = hand.pointables[j];
                    fingerIds.push(pointable.id);
                }
                if (fingerIds.length > 0)
                {
                    handString += "Fingers IDs: " + fingerIds.join(", ") + "<br />";
                }
            }

            handString += "</div>";
        }
    }
    else
    {
        handString += "No hands";
    }
    //handOutput.innerHTML = handString;

    // Display Pointable (finger and tool) object data
    var pointableOutput = document.getElementById("pointableData");
    var pointableString = "";
    if (frame.pointables.length > 0)
    {
        var fingerTypeMap = ["Thumb", "Index finger", "Middle finger", "Ring finger", "Pinky finger"];
        var boneTypeMap = ["Metacarpal", "Proximal phalanx", "Intermediate phalanx", "Distal phalanx"];
        for (var i = 0; i < frame.pointables.length; i++)
        {
            var pointable = frame.pointables[i];

            pointableString += "<div style='width:250px; float:left; padding:5px'>";

            if (pointable.tool)
            {
                pointableString += "Pointable ID: " + pointable.id + "<br />";
                pointableString += "Classified as a tool <br />";
                pointableString += "Length: " + pointable.length.toFixed(1) + " mm<br />";
                pointableString += "Width: " + pointable.width.toFixed(1) + " mm<br />";
                pointableString += "Direction: " + vectorToString(pointable.direction, 2) + "<br />";
                pointableString += "Tip position: " + vectorToString(pointable.tipPosition) + " mm<br />"
                pointableString += "</div>";
            }
            else
            {
                pointableString += "Pointable ID: " + pointable.id + "<br />";
                pointableString += "Type: " + fingerTypeMap[pointable.type] + "<br />";
                pointableString += "Belongs to hand with ID: " + pointable.handId + "<br />";
                pointableString += "Classified as a finger<br />";
                pointableString += "Length: " + pointable.length.toFixed(1) + " mm<br />";
                pointableString += "Width: " + pointable.width.toFixed(1) + " mm<br />";
                pointableString += "Direction: " + vectorToString(pointable.direction, 2) + "<br />";
                pointableString += "Extended?: " + pointable.extended + "<br />";
                pointable.bones.forEach(function(bone)
                {
                    pointableString += boneTypeMap[bone.type] + " bone <br />";
                    pointableString += "Center: " + vectorToString(bone.center()) + "<br />";
                    pointableString += "Direction: " + vectorToString(bone.direction()) + "<br />";
                    pointableString += "Up vector: " + vectorToString(bone.basis[1]) + "<br />";
                });
                pointableString += "Tip position: " + vectorToString(pointable.tipPosition) + " mm<br />";
                pointableString += "</div>";
            }
        }
    }
    else
    {
        pointableString += "<div>No pointables</div>";
    }
    //pointableOutput.innerHTML = pointableString;

    // Display Gesture object data
    var gestureOutput = document.getElementById("gestureData");
    var gestureString = "";
    if (frame.gestures.length > 0)
    {
        if (pauseOnGesture)
        {
            togglePause();
        }
        for (var i = 0; i < frame.gestures.length; i++)
        {
            var gesture = frame.gestures[i];
            gestureString += "Gesture ID: " + gesture.id + ", " + "type: " + gesture.type + ", " + "state: " + gesture.state + ", " + "hand IDs: " + gesture.handIds.join(", ") + ", " + "pointable IDs: " + gesture.pointableIds.join(", ") + ", " + "duration: " + gesture.duration + " &micro;s, ";

            switch (gesture.type)
            {
                case "circle":
                    gestureString += "center: " + vectorToString(gesture.center) + " mm, " + "normal: " + vectorToString(gesture.normal, 2) + ", " + "radius: " + gesture.radius.toFixed(1) + " mm, " + "progress: " + gesture.progress.toFixed(2) + " rotations";


                    break;
                case "swipe":
                    gestureString += "start position: " + vectorToString(gesture.startPosition) + " mm, " + "current position: " + vectorToString(gesture.position) + " mm, " + "direction: " + vectorToString(gesture.direction, 1) + ", " + "speed: " + gesture.speed.toFixed(1) + " mm/s";
                     //document.getElementById('output').innerHTML = gesture.position[0] - gesture.startPosition[0] + " " + gesture.direction[0];
                    // //document.getElementById('test').innerHTML = yRotCount;


                    // if (gesture.direction[0] > 0)// && gesture.position[0] - gesture.startPosition[0] > 200)
                    // {
                    //     yRotCount++;
                    //     yRot();
                    //     break;
                    // }
                    // else if (gesture.direction[0] < 0)
                    // {
                    //     yRotCount += 3;
                    //     yRot();
                    //     break;
                    // }
                    // if (gesture.direction[1] < 0 && gesture.position[0] > 0)
                    // {
                    //   cwR();
                    // }
                    // else if (gesture.direction[1] > 0 && gesture.position[0] > 0)
                    // {
                    //   ccwR();
                    // }


                // document.getElementById('test').innerHTML = gesture.direction[2];
                // if (gesture.direction[2] > 0 && gesture.position[0] > 0)
                // {
                //   cwR();
                // }
                // else if (gesture.direction[2] > 0 && gesture.position[0] < 0)
                // {
                //   ccwL();
                // }


                    break;
                case "screenTap":

                document.getElementById('output').innerHTML = "Screen Tap xdir: " + gesture.direction[0] + " ydir: " + gesture.direction[1] + " zdir: " + gesture.direction[2] + " ypos: " + gesture.position[1] + " zpos: " + gesture.position[2];//gesture.direction[0] + " " + gesture.direction[1];//fingers.length; //+ " " + (gesture.position[0] - gesture.startPosition[0]);
                
                if (gesture.direction[1] > 0.7 && gesture.position[0] > 0 && gesture.direction[2] > 0.4 && gesture.position[1] < 250 && gesture.position[1] > 150)
                {
                    cwR();
                }
                else if (gesture.direction[1] < 0.4 && gesture.position[0] > 0 && gesture.direction[2] > 0.4 && gesture.position[1] < 250 && gesture.position[1] > 150)
                {
                    ccwR();
                }
                else if (gesture.direction[1] > 0.6 && gesture.position[0] < 0 && gesture.direction[2] > 0.4 && gesture.position[1] < 250 && gesture.position[1] > 150)
                {
                    ccwL();
                }
                else if (gesture.direction[1] < 0.4 && gesture.position[0] < 0 && gesture.direction[2] > 0.4 && gesture.position[1] < 250 && gesture.position[1] > 150)
                {
                    cwL();
                }


                break;

                case "keyTap":


                    //var fingers = gesture.pointableIDs;
                    gestureString += "position: " + vectorToString(gesture.position) + " mm";

                    document.getElementById('test').innerHTML = "Key Tap xdir: " + gesture.direction[0] + " ydir: " + gesture.direction[1] + " zdir: " + gesture.direction[2] + " ypos: " + gesture.position[1] + " zpos: " + gesture.position[2];//gesture.direction[0] + " " + gesture.direction[1];//fingers.length; //+ " " + (gesture.position[0] - gesture.startPosition[0]);

                    if (gesture.position[0] < 0 && gesture.direction[0] > 0 && gesture.position[1] > 250 && gesture.direction[1] > -0.1) //&& gesture.position[0] - gesture.startPosition[0] < 20)
                    {
                        
                        ccwU();
                    }

                    if (gesture.position[0] < 0 && gesture.direction[0] > 0 && gesture.position[1] < 150 && gesture.direction[1] > -0.1) //&& gesture.position[0] - gesture.startPosition[0] < 20)
                    {
                        
                        cwD();
                    }
                    else if (gesture.position[0] > 0 && gesture.direction[0] < 0 && gesture.position[1] > 250 && gesture.direction[1] > -0.1)
                    {
                        cwU();
                    }
                    else if (gesture.position[0] > 0 && gesture.direction[0] < 0 && gesture.position[1] < 150 && gesture.direction[1] > -0.1)
                    {
                        ccwD();
                    }
                    else if (gesture.position[0] > 0 && gesture.direction[1] < -0.75 && gesture.position[2] > 75 && gesture.direction[2] < 0.3 && gesture.direction[2] > -0.25)
                    {
                      cwF();
                    }

                    else if (gesture.position[0] > 0 && gesture.direction[1] < -0.75 && gesture.position[2] < 25 && gesture.direction[2] < 0.3 && gesture.direction[2] > -0.25)
                    {
                      ccwB();
                    }
                    else if (gesture.position[0] < 0 && gesture.direction[1] < -0.75 && gesture.position[2] > 75 && gesture.direction[2] < 0.3 && gesture.direction[2] > -0.25)
                    {
                      ccwF();
                    }

                    else if (gesture.position[0] < 0 && gesture.direction[1] < -0.75 && gesture.position[2] < 25 && gesture.direction[2] < 0.3 && gesture.direction[2] > -0.25)
                    {
                      cwB();
                    }
                    //document.getElementById('test').innerHTML = numGest;
                    break;
                default:
                    gestureString += "unkown gesture type";
            }
            gestureString += "<br />";
        }
    }
    else
    {
        gestureString += "No gestures";
    }
    //gestureOutput.innerHTML = gestureString;

    // Store frame for motion functions
    previousFrame = frame;
})

function vectorToString(vector, digits)
{
    if (typeof digits === "undefined")
    {
        digits = 1;
    }
    return "(" + vector[0].toFixed(digits) + ", " + vector[1].toFixed(digits) + ", " + vector[2].toFixed(digits) + ")";
}

function togglePause()
{
    paused = !paused;

    if (paused)
    {
        document.getElementById("pause").innerText = "Resume";
    }
    else
    {
        document.getElementById("pause").innerText = "Pause";
    }
}

function pauseForGestures()
{
    if (document.getElementById("pauseOnGesture").checked)
    {
        pauseOnGesture = true;
    }
    else
    {
        pauseOnGesture = false;
    }
}