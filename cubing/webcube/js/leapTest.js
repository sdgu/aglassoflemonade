    function concatData(id, data) {
      return id + ": " + data + "<br>";
    }
    
    function getFingerName(fingerType) {
      switch(fingerType) {
        case 0:
          return 'Thumb';
        break;
    
        case 1:
          return 'Index';
        break;
    
        case 2:
          return 'Middle';
        break;
    
        case 3:
          return 'Ring';
        break;
    
        case 4:
          return 'Pinky';
        break;
      }
    }
    
    function concatJointPosition(id, position) {
      return id + ": " + position[0] + ", " + position[1] + ", " + position[2] + "<br>";
    }
    
    
    var output = document.getElementById('output');
    var test = document.getElementById('test');
    //test.innerHTML = 'what';
    var frameString = "", handString = "", fingerString = "";
    var hand, finger;
    var gestureString = "";
    
    // Leap.loop uses browser's requestAnimationFrame
    var options = { enableGestures: true };
    
    // Main Leap Loop
    Leap.loop(options, function(frame) {



      if (frame.gestures.length > 0)
      {
            if (pauseOnGesture) 
            {
              togglePause();
            }
          test.innerHTML = frame.gestures.length;
      }


// if (frame.gestures.length > 0) {
//   for (var i = 0; i < frame.gestures.length; i++) 
//   {
//     var gesture = frame.gestures[i];
//     gestureString += "Gesture ID: " + gesture.id + ", "
//                   + "type: " + gesture.type + ", "
//                   + "state: " + gesture.state + ", "
//                   + "hand IDs: " + gesture.handIds.join(", ") + ", "
//                   + "pointable IDs: " + gesture.pointableIds.join(", ") + ", "
//                   + "duration: " + gesture.duration + " &micro;s, ";

//     switch (gesture.type) {
//       case "circle":
//         gestureString += "center: " + vectorToString(gesture.center) + " mm, "
//                       + "normal: " + vectorToString(gesture.normal, 2) + ", "
//                       + "radius: " + gesture.radius.toFixed(1) + " mm, "
//                       + "progress: " + gesture.progress.toFixed(2) + " rotations";
//         break;
//       case "swipe":
//         gestureString += "start position: " + vectorToString(gesture.startPosition) + " mm, "
//                       + "current position: " + vectorToString(gesture.position) + " mm, "
//                       + "direction: " + vectorToString(gesture.direction, 2) + ", "
//                       + "speed: " + gesture.speed.toFixed(1) + " mm/s";
//         break;
//       case "screenTap":
//       case "keyTap":
//         gestureString += "position: " + vectorToString(gesture.position) + " mm, "
//                       + "direction: " + vectorToString(gesture.direction, 2);
//         break;
//       default:
//         gestureString += "unknown gesture type";
//     }
//     gestureString += "<br />";
//   }
// }


      frameString = concatData("frame_id", frame.id);
      frameString += concatData("num_hands", frame.hands.length);
      frameString += concatData("num_fingers", frame.fingers.length);
      frameString += "<br>";

    
      // Showcase some new V2 features
      for (var i = 0, len = frame.hands.length; i < len; i++) 
      {
        hand = frame.hands[i];
        handString = concatData("hand_type", hand.type);
        handString += concatData("confidence", hand.confidence);
        handString += concatData("pinch_strength", hand.pinchStrength);
        handString += concatData("grab_strength", hand.grabStrength);
        handString += concatData("palm", hand.palmPosition);

        
    
        handString += '<br>';
    
        // Helpers for thumb, pinky, etc.
        fingerString = concatJointPosition("finger_thumb_dip", hand.thumb.dipPosition);
        for (var j = 0, len2 = hand.fingers.length; j < len2; j++) {
          finger = hand.fingers[j];
          fingerString += concatData("finger_type", finger.type) + " (" + getFingerName(finger.type) + ") <br>";
          fingerString += concatJointPosition("finger_dip", finger.dipPosition);
          fingerString += concatJointPosition("finger_pip", finger.pipPosition);
          fingerString += concatJointPosition("finger_mcp", finger.mcpPosition);
          fingerString += "<br>";
        }
    
        frameString += handString;
        frameString += fingerString;
        //frameString += gestureString;
      }
    
        //output.innerHTML = frameString;
    
    });