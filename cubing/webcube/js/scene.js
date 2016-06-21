if (!Detector.webgl) Detector.addGetWebGLMessage();

var container, stats;

var camera, controls, scene, renderer, mesh;
var group, groupRight, groupFront, groupRF;
var allPieces = [];

var cubeSpacing = 0.1;

var xRotCount = 0, yRotCount = 0, zRotCount = 0;

init();
render();

function animate()
{

    requestAnimationFrame(animate);
    controls.update();

}

function test()
{
    alert("what");
}

//LEAP THINGS HERE
// function concatData(id, data) 
// {
//       return id + ": " + data + "<br>";
// }


// var options = { enableGestures: true };
// var frameString = "", handString = "", fingerString = "";
// var output = document.getElementById('output');
    
//     // Main Leap Loop
// Leap.loop(options, function(frame) 
// {

//       frameString = concatData("frame_id", frame.id);
//       frameString += concatData("num_hands", frame.hands.length);
//       frameString += concatData("num_fingers", frame.fingers.length);

//       ouput.innerHTML = frameString;
// });

function init()
{

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    camera.position.z = 10;
    camera.position.y = 5;
    camera.position.x = 5;


    //base is z 10 y 5 x 5
    //y rotation z = -5, y = 5, x = 10
    //y2 rotation z = -10, y = 5, x = -5
    //y3 rotation z = 5, y = 5, x = -10

    controls = new THREE.OrbitControls(camera);
    //        controls.damping = 0.2;
    controls.addEventListener('change', render);

    scene = new THREE.Scene();

    // lights

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);

    light = new THREE.DirectionalLight(0x002288);
    light.position.set(-1, -1, -1);
    scene.add(light);

    light = new THREE.AmbientLight(0x222222);
    scene.add(light);


    // texture - texture must not be in same folder or there is an error.
    // var texture = THREE.ImageUtils.loadTexture( 'images/texture.jpg', {}, function(){ 
    // // // use to test when image gets loaded if it does
    // render();
    // }, 
    //  function(){ 
    //      alert('error') 
    //  });


    var texture2 = THREE.ImageUtils.loadTexture('images/red.png',
        {}, function()
        {
            // use to test when image gets loaded if it does
            render();
        },
        function()
        {
            alert('error')
        });

    material2 = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'red'
    });

    //material = new THREE.MeshBasicMaterial({map: texture});

//materials
{
    material = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'black'
    });



    material3 = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'orange'
    });

    material4 = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'yellow'
    });

    materialD = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'gray'
    });


    materialF = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'green'
    });

    materialB = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: '#0091ff'
    });

    materialRF = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'black'
    });

    materialRU = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'purple'
    });

    materialRB = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'pink'
    });

    materialRD = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'teal'
    });



    materialFU = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'cyan'
    });

    materialLF = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'brown'
    });
    materialFD = new THREE.MeshBasicMaterial(
    {
        wireframe: false,
        color: 'magenta'
    });
}

//variables and stuff
{
    group = new THREE.Object3D();

    groupRight = new THREE.Object3D();

    groupUp = new THREE.Object3D();

    groupLeft = new THREE.Object3D();

    groupDown = new THREE.Object3D();

    groupFront = new THREE.Object3D();


    groupBack = new THREE.Object3D();

    groupRF = new THREE.Object3D();

    groupF = new THREE.Object3D();



     var geometryTest = new THREE.CubeGeometry(2, 2, 2);

    // var material10 = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // var material20 = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/red.png')
    // });
    // var material30 = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/clouds.jpg')
    // });
    // var material40 = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/stone-wall.jpg')
    // });
    // var material50 = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/water.jpg')
    // });
    // var material60 = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/wood-floor.jpg')
    // });

    // var materials = [material10, material20, material30, material40, material50, material60];

    var meshFaceMaterial;// = new THREE.MeshFaceMaterial(materials);

    // //1: right face
    // var RF1mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/orange.png')
    // });
    // //2: left face
    // var RF2mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //3: top face
    // var RF3mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //4: bottom
    // var RF4mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //5: front face
    // var RF5mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/green.png')
    // });
    // //6: back face
    // var RF6mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });

    // var RFmat = [RF1mat, RF2mat, RF3mat, RF4mat, RF5mat, RF6mat];

    var RFEdgeMaterial;// = new THREE.MeshFaceMaterial(RFmat);


    // //1: right face
    // var RU1mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/orange.png')
    // });
    // //2: left face
    // var RU2mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //3: top face
    // var RU3mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/yellow.png')
    // });
    // //4: bottom
    // var RU4mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //5: front face
    // var RU5mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //6: back face
    // var RU6mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });

    // var RUmat = [RU1mat, RU2mat, RU3mat, RU4mat, RU5mat, RU6mat];

    var RUEdgeMaterial;// = new THREE.MeshFaceMaterial(RUmat);

    // //1: right face
    // var RB1mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/orange.png')
    // });
    // //2: left face
    // var RB2mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //3: top face
    // var RB3mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //4: bottom
    // var RB4mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //5: front face
    // var RB5mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //6: back face
    // var RB6mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/blue.png')
    // });

    // var RBmat = [RB1mat, RB2mat, RB3mat, RB4mat, RB5mat, RB6mat];

    var RBEdgeMaterial;// = new THREE.MeshFaceMaterial(RBmat);




    // //1: right face
    // var RD1mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/orange.png')
    // });
    // //2: left face
    // var RD2mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //3: top face
    // var RD3mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //4: bottom
    // var RD4mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/white.png')
    // });
    // //5: front face
    // var RD5mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //6: back face
    // var RD6mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });

    // var RDmat = [RD1mat, RD2mat, RD3mat, RD4mat, RD5mat, RD6mat];

    var RDEdgeMaterial;// = new THREE.MeshFaceMaterial(RDmat);



    // //1: right face
    // var FU1mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //2: left face
    // var FU2mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //3: top face
    // var FU3mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/yellow.png')
    // });
    // //4: bottom
    // var FU4mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //5: front face
    // var FU5mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/green.png')
    // });
    // //6: back face
    // var FU6mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });

    // var FUmat = [FU1mat, FU2mat, FU3mat, FU4mat, FU5mat, FU6mat];

    var FUEdgeMaterial;// = new THREE.MeshFaceMaterial(FUmat);



    // //1: right face
    // var LF1mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //2: left face
    // var LF2mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/red.png')
    // });
    // //3: top face
    // var LF3mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //4: bottom
    // var LF4mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //5: front face
    // var LF5mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/green.png')
    // });
    // //6: back face
    // var LF6mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });

    // var LFmat = [LF1mat, LF2mat, LF3mat, LF4mat, LF5mat, LF6mat];

    var LFEdgeMaterial;// = new THREE.MeshFaceMaterial(LFmat);



    // //1: right face
    // var FD1mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //2: left face
    // var FD2mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //3: top face
    // var FD3mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });
    // //4: bottom
    // var FD4mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/white.png')
    // });
    // //5: front face
    // var FD5mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/green.png')
    // });
    // //6: back face
    // var FD6mat = new THREE.MeshBasicMaterial(
    // {
    //     map: THREE.ImageUtils.loadTexture('images/black.png')
    // });

    // var FDmat = [FD1mat, FD2mat, FD3mat, FD4mat, FD5mat, FD6mat];

    var FDEdgeMaterial;// = new THREE.MeshFaceMaterial(FDmat);

}

//making pieces
{
    function makeMaterial(right, left, top, bottom, front, back)
    {

        
        var first = new THREE.MeshBasicMaterial
        ({
            map: THREE.ImageUtils.loadTexture('images/' + right + '.png')
        });

        var second = new THREE.MeshBasicMaterial
        ({
            map: THREE.ImageUtils.loadTexture('images/' + left + '.png')
        });

        var third = new THREE.MeshBasicMaterial
        ({
            map: THREE.ImageUtils.loadTexture('images/' + top + '.png')
        });

        var forth = new THREE.MeshBasicMaterial
        ({
            map: THREE.ImageUtils.loadTexture('images/' + bottom + '.png')
        });

        var fifth = new THREE.MeshBasicMaterial
        ({
            map: THREE.ImageUtils.loadTexture('images/' + front + '.png')
        });

        var sixth = new THREE.MeshBasicMaterial
        ({
            map: THREE.ImageUtils.loadTexture('images/' + back + '.png')
        });

        var materials = [first, second, third, forth, fifth, sixth];

        var piece = new THREE.MeshFaceMaterial(materials);

        return piece;

    }


    function makePiece(geometry, material, x, y, z, isEdge)
    {
        var cubePiece = new THREE.Mesh(geometry, material);
        cubePiece.position.x = x;
        cubePiece.position.y = y;
        cubePiece.position.z = z;
        cubePiece.isEdge = isEdge;

        return cubePiece;

    }
}
//pieces
{

    FDEdgeMaterial = makeMaterial('black','black','black','white','green','black');
    LFEdgeMaterial = makeMaterial('black','red','black','black','green','black');
    FUEdgeMaterial = makeMaterial('black','black','yellow','black','green','black');
    RDEdgeMaterial = makeMaterial('orange','black','black','white','black','black');
    RBEdgeMaterial = makeMaterial('orange','black','black','black','black','blue');
    RUEdgeMaterial = makeMaterial('orange','black','yellow','black','black','black');
    RFEdgeMaterial = makeMaterial('orange','black','black','black','green','black');

    var RUFCornerMaterial = makeMaterial('orange','black','yellow','black','green','black');
    var RFDCornerMaterial = makeMaterial('orange','black','black','white','green','black');
    var FULCornerMaterial = makeMaterial('black','red','yellow','black','green','black');

    cubeFLD = makePiece(geometryTest, makeMaterial('black','red','black','white','green','black'),
     -(2+cubeSpacing), -(2+cubeSpacing), (2+cubeSpacing), false);
    groupRight.add(cubeFLD);
    allPieces.push(cubeFLD);

    cubeLU = makePiece(geometryTest, makeMaterial('black','red','yellow','black','black','black'),
     -(2+cubeSpacing), (2+cubeSpacing), 0, true);
    groupRight.add(cubeLU);
    allPieces.push(cubeLU);

    cubeLD = makePiece(geometryTest, makeMaterial('black','red','black','white','black','black'),
     -(2+cubeSpacing), -(2+cubeSpacing), 0, true);
    groupRight.add(cubeLD);
    allPieces.push(cubeLD);

    cubeLB = makePiece(geometryTest, makeMaterial('black','red','black','black','black','blue'),
     -(2+cubeSpacing), 0, -(2+cubeSpacing), true);
    groupRight.add(cubeLB);
    allPieces.push(cubeLB);

    cubeBD = makePiece(geometryTest, makeMaterial('black','black','black','white','black','blue'),
     0, -(2+cubeSpacing), -(2+cubeSpacing), true);
    groupRight.add(cubeBD)
    allPieces.push(cubeBD);

    cubeBU = makePiece(geometryTest, makeMaterial('black','black','yellow','black','black','blue'),
     0, (2+cubeSpacing), -(2+cubeSpacing), true);
    groupRight.add(cubeBU);
    allPieces.push(cubeBU);

    cubeURB = makePiece(geometryTest, makeMaterial('orange','black','yellow','black','black','blue'),
     (2+cubeSpacing), (2+cubeSpacing), -(2+cubeSpacing), false);
    groupRight.add(cubeURB);
    allPieces.push(cubeURB);

    cubeRDB = makePiece(geometryTest, makeMaterial('orange','black','black','white','black','blue'),
     (2+cubeSpacing), -(2+cubeSpacing), -(2+cubeSpacing), false);
    groupRight.add(cubeRDB);
    allPieces.push(cubeRDB);

    cubeLUB = makePiece(geometryTest, makeMaterial('black','red','yellow','black','black','blue'),
     -(2+cubeSpacing), (2+cubeSpacing), -(2+cubeSpacing), false);
    groupRight.add(cubeLUB);
    allPieces.push(cubeLUB);

    cubeLBD = makePiece(geometryTest, makeMaterial('black','red','black','white','black','blue'),
     -(2+cubeSpacing), -(2+cubeSpacing), -(2+cubeSpacing), false);
    groupRight.add(cubeLBD);
    allPieces.push(cubeLBD);

    cubeFUL = new THREE.Mesh(geometryTest, FULCornerMaterial);
    cubeFUL.position.x = -(2+cubeSpacing);
    cubeFUL.position.y = (2+cubeSpacing);
    cubeFUL.position.z = (2+cubeSpacing);
    cubeFUL.isEdge = false;
    groupRight.add(cubeFUL);
    allPieces.push(cubeFUL);

    cubeRFD = new THREE.Mesh(geometryTest, RFDCornerMaterial);
    cubeRFD.position.x = (2+cubeSpacing);
    cubeRFD.position.y = -(2+cubeSpacing);
    cubeRFD.position.z = (2+cubeSpacing);
    cubeRFD.isEdge = false;
    groupRight.add(cubeRFD);
    allPieces.push(cubeRFD);


    cubeRUF = new THREE.Mesh(geometryTest, RUFCornerMaterial);
    cubeRUF.position.x = (2+cubeSpacing);
    cubeRUF.position.y = (2+cubeSpacing);
    cubeRUF.position.z = (2+cubeSpacing);
    cubeRUF.isEdge = false;
    groupRight.add(cubeRUF);
    allPieces.push(cubeRUF);


    cubeRU = new THREE.Mesh(geometryTest, RUEdgeMaterial);
    cubeRU.position.y = (2+cubeSpacing);
    cubeRU.position.x = (2+cubeSpacing);
    cubeRU.isEdge = true;
    groupRight.add(cubeRU);
    allPieces.push(cubeRU);

    cubeRB = new THREE.Mesh(geometryTest, RBEdgeMaterial);
    cubeRB.position.z = -(2+cubeSpacing);
    cubeRB.position.x = (2+cubeSpacing);
    cubeRB.isEdge = true;
    groupRight.add(cubeRB);
    allPieces.push(cubeRB);

    cubeRD = new THREE.Mesh(geometryTest, RDEdgeMaterial);
    cubeRD.position.y = -(2+cubeSpacing);
    cubeRD.position.x = (2+cubeSpacing);
    cubeRD.isEdge = true;
    groupRight.add(cubeRD);
    allPieces.push(cubeRD);


    cubeRF = new THREE.Mesh(geometryTest, RFEdgeMaterial);
    cubeRF.position.x = (2+cubeSpacing);
    cubeRF.position.z = (2+cubeSpacing);
    cubeRF.isEdge = true;
    groupRight.add(cubeRF);
    allPieces.push(cubeRF);

    cubeFU = new THREE.Mesh(geometryTest, FUEdgeMaterial);
    cubeFU.position.y = (2+cubeSpacing);
    cubeFU.position.z = (2+cubeSpacing);
    cubeFU.isEdge = true;
    groupRight.add(cubeFU);
    allPieces.push(cubeFU);

    cubeLF = new THREE.Mesh(geometryTest, LFEdgeMaterial);
    cubeLF.position.x = -(2+cubeSpacing);
    cubeLF.position.z = (2+cubeSpacing);
    cubeLF.isEdge = true;
    groupRight.add(cubeLF);
    allPieces.push(cubeLF);

    cubeFD = new THREE.Mesh(geometryTest, FDEdgeMaterial);
    cubeFD.position.y = -(2+cubeSpacing);
    cubeFD.position.z = (2+cubeSpacing);
    cubeFD.isEdge = true;
    groupRight.add(cubeFD);
    allPieces.push(cubeFD);
}





    scene.add(groupRight);
    // scene.add(groupRF);
    // scene.add(groupF);


    //load mesh 
    var loader = new THREE.JSONLoader();
    loader.load('models/cubeCore.js', modelLoadedCallback);




    loader.load('models/cubeLeftCenter.js', modelLoadedCallback2);

    loader.load('models/cubeRightCenter.js', modelLoadedCallback3);
    loader.load('models/cubeUpCenter.js', modelLoadedCallback4);

    loader.load('models/cubeDownCenter.js', modelLoadedCallbackD);

    loader.load('models/cubeFrontCenter.js', modelLoadedCallbackF);

    loader.load('models/cubeBackCenter.js', modelLoadedCallbackB);


    //loader.load('models/cubeRF.js', modelLoadedCallbackRF);


    //  loader.load('models/cubeRU.js', modelLoadedCallbackRU);


    //  loader.load('models/cubeRB.js', modelLoadedCallbackRB);

    //  loader.load('models/cubeRD.js', modelLoadedCallbackRD);

    // loader.load('models/cubeFU.js', modelLoadedCallbackFU);


    // loader.load('models/cubeLF.js', modelLoadedCallbackLF);

    // loader.load('models/cubeFD.js', modelLoadedCallbackFD);
    // // renderer

    renderer = new THREE.WebGLRenderer(
    {
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    container = document.getElementById('container');
    container.appendChild(renderer.domElement);

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = 100;
    container.appendChild(stats.domElement);

    //

    window.addEventListener('resize', onWindowResize, false);

    animate();

}

//use separate modeLoadedCallback for each cubie





function onWindowResize()
{

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}


var RRot = 0; //-Math.PI / 2;

var FRot = 0;
var RFRot = 0;
var URot = 0;


function fakeFCornerRot(piece)
{
    //top right
    if (piece.position.x > 1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origU = mats[2];
        origR = mats[0];
        origF = mats[4];

        mats[3] = origR;
        mats[0] = origU;

        mats[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(-2*(2+cubeSpacing));

    }

    //bottom right
    else if (piece.position.x > 1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origR = mats[0];
        origF = mats[4];
        origD = mats[3];

        mats[1] = origD;
        mats[3] = origR;

        mats[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(-2*(2+cubeSpacing));
    }
    //bottom left
    else if (piece.position.x < -1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origF = mats[4];
        origD = mats[3];

        mats[1] = origD;
        mats[2] = origL;

        mats[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(2*(2+cubeSpacing));
    }
    //top left
    else if (piece.position.x < -1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origF = mats[4];
        origU = mats[2];

        mats[0] = origU;
        mats[2] = origL;

        mats[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(2*(2+cubeSpacing));
    }

}

function fakeRCornerRot(piece)
{
    //top left
    if (piece.position.z > 1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origU = mats[2];
        origR = mats[0];
        origF = mats[4];

        mats[2] = origF;
        mats[5] = origU;

        mats[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(-2*(2+cubeSpacing));

    }

    //top right
    else if (piece.position.z < -1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origR = mats[0];
        origB = mats[5];
        origU = mats[2];

        mats[5] = origU;
        mats[3] = origB;

        mats[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(-2*(2+cubeSpacing));
    }
    //bottom right
    else if (piece.position.z < -1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origR = mats[0];
        origB = mats[5];
        origD = mats[3];

        mats[3] = origB;
        mats[4] = origD;

        mats[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(2*(2+cubeSpacing));
    }
    //bottom left
    else if (piece.position.z > 1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origR = mats[0];
        origF = mats[4];
        origD = mats[3];

        mats[2] = origF;
        mats[4] = origD;

        mats[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(2*(2+cubeSpacing));
    }

}

function fakeFRotation(piece0)
{
                if (piece0.position.x > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origR = piece0.material.materials[0];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[3] = origR;
                    piece0.material.materials[4] = origF;

                    piece0.material.materials[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                     piece0.translateY(-(2+cubeSpacing));
                     piece0.translateX(-(2+cubeSpacing));

                    //piece0.rotation.set(0,0,FRot);
                    
                }
                else if (piece0.position.y < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origD = piece0.material.materials[3];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[1] = origD;
                    piece0.material.materials[4] = origF;

                    piece0.material.materials[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateY((2+cubeSpacing));
                    piece0.translateX(-(2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }
                else if (piece0.position.x < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    origL = piece0.material.materials[1];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[2] = origL;
                    piece0.material.materials[4] = origF;

                    piece0.material.materials[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateY((2+cubeSpacing));
                    piece0.translateX((2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);



                }
                else if (piece0.position.y > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    //4 front
                    //2 up
                    //1 left
                    //3 down
                    //0 right
                    //5 back

                    origU = piece0.material.materials[2];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[0] = origU;
                    piece0.material.materials[4] = origF;

                    piece0.material.materials[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateY(-(2+cubeSpacing));
                    piece0.translateX((2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }
}

//z < -1
function fakeBRotation(piece0)
{

                //RB
                if (piece0.position.x > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origR = piece0.material.materials[0];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[2] = origR;

                    piece0.material.materials[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                     piece0.translateY((2+cubeSpacing));
                     piece0.translateX(-(2+cubeSpacing));

                    //piece0.rotation.set(0,0,FRot);
                    
                }
                //BD
                else if (piece0.position.y < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origD = piece0.material.materials[3];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[0] = origD;

                    piece0.material.materials[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateY((2+cubeSpacing));
                    piece0.translateX((2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }
                //LB
                else if (piece0.position.x < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    origL = piece0.material.materials[1];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[3] = origL;

                    piece0.material.materials[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateY(-(2+cubeSpacing));
                    piece0.translateX((2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);



                }
                //UB
                else if (piece0.position.y > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    //4 front
                    //2 up
                    //1 left
                    //3 down
                    //0 right
                    //5 back

                    origU = piece0.material.materials[2];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[1] = origU;

                    piece0.material.materials[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateY(-(2+cubeSpacing));
                    piece0.translateX(-(2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }
}
//z < -1
function fakeBCornerRot(piece)
{
    //top left
    if (piece.position.x > 1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origU = mats[2];
        origR = mats[0];
        origB = mats[5];

        mats[2] = origR;
        mats[1] = origU;

        mats[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(-2*(2+cubeSpacing));

    }

    //bottom left
    else if (piece.position.x > 1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origR = mats[0];
        origB = mats[5];
        origD = mats[3];

        mats[0] = origD;
        mats[2] = origR;

        mats[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(2*(2+cubeSpacing));
    }
    //bottom right
    else if (piece.position.x < -1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origB = mats[5];
        origD = mats[3];

        mats[0] = origD;
        mats[3] = origL;

        mats[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(2*(2+cubeSpacing));
    }
    //top right
    else if (piece.position.x < -1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origB = mats[5];
        origU = mats[2];

        mats[1] = origU;
        mats[3] = origL;

        mats[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(-2*(2+cubeSpacing));
    }

}


//y bigger than 1 already
function fakeURotation(piece0)
{
                //RU piece
                if (piece0.position.x > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origR = piece0.material.materials[0];
                    origU = piece0.material.materials[2];

                    piece0.material.materials[2] = origU;
                    piece0.material.materials[4] = origR;

                    piece0.material.materials[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                     piece0.translateZ((2+cubeSpacing));
                     piece0.translateX(-(2+cubeSpacing));

                    //piece0.rotation.set(0,0,FRot);
                    
                }

                //UB
                else if (piece0.position.z < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origU = piece0.material.materials[2];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[0] = origB;
                    piece0.material.materials[2] = origU;

                    piece0.material.materials[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateZ((2+cubeSpacing));
                    piece0.translateX((2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }

                //LU
                else if (piece0.position.x < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    origL = piece0.material.materials[1];
                    origU = piece0.material.materials[2];

                    piece0.material.materials[2] = origU;
                    piece0.material.materials[5] = origL;

                    piece0.material.materials[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateX((2+cubeSpacing));
                    piece0.translateZ(-(2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);



                }
                //FU
                else if (piece0.position.z > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    //4 front
                    //2 up
                    //1 left
                    //3 down
                    //0 right
                    //5 back

                    origU = piece0.material.materials[2];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[0] = origU;
                    piece0.material.materials[1] = origF;

                    piece0.material.materials[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateZ(-(2+cubeSpacing));
                    piece0.translateX(-(2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }
}


function fakeUCornerRot(piece)
{
    //bottom right
    if (piece.position.z > 1 && piece.position.x > 1)
    {
        var mats = piece.material.materials;

        origU = mats[2];
        origR = mats[0];
        origF = mats[4];

        mats[1] = origF;
        mats[4] = origR;

        mats[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(-2*(2+cubeSpacing));

    }

    //top right
    else if (piece.position.z < -1 && piece.position.x > 1)
    {
        var mats = piece.material.materials;

        origR = mats[0];
        origB = mats[5];
        origU = mats[2];

        mats[4] = origR;
        mats[0] = origB;

        mats[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(2*(2+cubeSpacing));
    }
    //top left
    else if (piece.position.z < -1 && piece.position.x < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origB = mats[5];
        origU = mats[2];

        mats[0] = origB;
        mats[5] = origL;

        mats[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(2*(2+cubeSpacing));
    }
    //bottom left
    else if (piece.position.z > 1 && piece.position.x < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origF = mats[4];
        origU = mats[2];

        mats[1] = origF;
        mats[5] = origL;

        mats[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(-2*(2+cubeSpacing));
    }

}


//y less than -1
function fakeDRotation(piece0)
{

                //RD should work
                if (piece0.position.x > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origR = piece0.material.materials[0];
                    origD = piece0.material.materials[3];

                    piece0.material.materials[3] = origD;
                    piece0.material.materials[5] = origR;

                    piece0.material.materials[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                     piece0.translateZ(-(2+cubeSpacing));
                     piece0.translateX(-(2+cubeSpacing));

                    //piece0.rotation.set(0,0,FRot);
                    
                }

                //BD should work
                else if (piece0.position.z < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origD = piece0.material.materials[3];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[1] = origB;
                    piece0.material.materials[3] = origD;

                    piece0.material.materials[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateZ((2+cubeSpacing));
                    piece0.translateX(-(2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }

                //LD should work
                else if (piece0.position.x < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    origL = piece0.material.materials[1];
                    origD = piece0.material.materials[3];

                    piece0.material.materials[3] = origD;
                    piece0.material.materials[4] = origL;

                    piece0.material.materials[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    piece0.translateX((2+cubeSpacing));
                    piece0.translateZ((2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);



                }
                //FD should work
                else if (piece0.position.z > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    //4 front
                    //2 up
                    //1 left
                    //3 down
                    //0 right
                    //5 back

                    origD = piece0.material.materials[3];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[0] = origF;
                    piece0.material.materials[3] = origD;

                    piece0.material.materials[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateZ(-(2+cubeSpacing));
                    piece0.translateX((2+cubeSpacing));
                    //piece0.rotation.set(0,0,FRot);
                    
                }

}

function fakeDCornerRot(piece)
{
    //top right
    if (piece.position.z > 1 && piece.position.x > 1)
    {
        var mats = piece.material.materials;

        origD = mats[3];
        origR = mats[0];
        origF = mats[4];

        mats[0] = origF;
        mats[5] = origR;

        mats[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(-2*(2+cubeSpacing));

    }

    //bottom right
    else if (piece.position.z < -1 && piece.position.x > 1)
    {
        var mats = piece.material.materials;

        origR = mats[0];
        origB = mats[5];
        origD = mats[3];

        mats[5] = origR;
        mats[1] = origB;

        mats[0] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(-2*(2+cubeSpacing));
    }
    //bottom left
    else if (piece.position.z < -1 && piece.position.x < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origB = mats[5];
        origD = mats[3];

        mats[1] = origB;
        mats[4] = origL;

        mats[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(2*(2+cubeSpacing));
    }
    //top left
    else if (piece.position.z > 1 && piece.position.x < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origF = mats[4];
        origD = mats[3];

        mats[0] = origF;
        mats[4] = origL;

        mats[1] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateX(2*(2+cubeSpacing));
    }

}

function fakeRRotation(piece0)
{
                if (piece0.position.z > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    origR = piece0.material.materials[0];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[2] = origF;
                    piece0.material.materials[0] = origR;

                    piece0.material.materials[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateY((2+cubeSpacing));
                    piece0.translateZ(-(2+cubeSpacing));
                    
                }
                else if (piece0.position.y < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origR = piece0.material.materials[0];
                    origD = piece0.material.materials[3];

                    piece0.material.materials[4] = origD;
                    piece0.material.materials[0] = origR;

                    piece0.material.materials[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateY((2+cubeSpacing));
                    piece0.translateZ((2+cubeSpacing));
                    
                }
                else if (piece0.position.z < -1)
                {


                    origR = piece0.material.materials[0];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[3] = origB;
                    piece0.material.materials[0] = origR;

                    piece0.material.materials[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    ////piece0.rotation.set(0,0,FRot);
                    piece0.translateY(-(2+cubeSpacing));
                    piece0.translateZ((2+cubeSpacing));
                    
                }
                else if (piece0.position.y > 1)
                {

                    origR = piece0.material.materials[0];
                    origU = piece0.material.materials[2];

                    piece0.material.materials[5] = origU;
                    piece0.material.materials[0] = origR;

                    piece0.material.materials[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    ////piece0.rotation.set(0,0,FRot);
                    piece0.translateZ(-(2+cubeSpacing));
                    piece0.translateY(-(2+cubeSpacing));
                    
                }
}


//x < -1
function fakeLRotation(piece0)
{

                //LF
                if (piece0.position.z > 1)
                {
                    ////piece0.rotation.set(0,0,FRot);
                    origL = piece0.material.materials[1];
                    origF = piece0.material.materials[4];

                    piece0.material.materials[3] = origF;
  

                    piece0.material.materials[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateY(-(2+cubeSpacing));
                    piece0.translateZ(-(2+cubeSpacing));
                    
                }

                //DL
                else if (piece0.position.y < -1)
                {
                    ////piece0.rotation.set(0,0,FRot);

                    origL = piece0.material.materials[1];
                    origD = piece0.material.materials[3];

                    piece0.material.materials[5] = origD;

                    piece0.material.materials[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });


                    piece0.translateY((2+cubeSpacing));
                    piece0.translateZ(-(2+cubeSpacing));
                    
                }
                //LB
                else if (piece0.position.z < -1)
                {


                    origL = piece0.material.materials[1];
                    origB = piece0.material.materials[5];

                    piece0.material.materials[2] = origB;

                    piece0.material.materials[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    ////piece0.rotation.set(0,0,FRot);
                    piece0.translateY((2+cubeSpacing));
                    piece0.translateZ((2+cubeSpacing));
                    
                }
                //LU
                else if (piece0.position.y > 1)
                {

                    origL = piece0.material.materials[1];
                    origU = piece0.material.materials[2];

                    piece0.material.materials[4] = origU;

                    piece0.material.materials[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

                    ////piece0.rotation.set(0,0,FRot);
                    piece0.translateZ((2+cubeSpacing));
                    piece0.translateY(-(2+cubeSpacing));
                    
                }
}


function fakeLCornerRot(piece)
{
    //top right
    if (piece.position.z > 1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origU = mats[2];
        origL = mats[1];
        origF = mats[4];

        mats[3] = origF;
        mats[4] = origU;

        mats[2] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(-2*(2+cubeSpacing));

    }

    //top left
    else if (piece.position.z < -1 && piece.position.y > 1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origB = mats[5];
        origU = mats[2];

        mats[4] = origU;
        mats[2] = origB;

        mats[5] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(2*(2+cubeSpacing));
    }
    //bottom left
    else if (piece.position.z < -1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origB = mats[5];
        origD = mats[3];

        mats[2] = origB;
        mats[5] = origD;

        mats[3] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateY(2*(2+cubeSpacing));
    }
    //bottom right
    else if (piece.position.z > 1 && piece.position.y < -1)
    {
        var mats = piece.material.materials;

        origL = mats[1];
        origF = mats[4];
        origD = mats[3];

        mats[3] = origF;
        mats[5] = origD;

        mats[4] = new THREE.MeshBasicMaterial
                    ({
                        map: THREE.ImageUtils.loadTexture('images/black.png')
                    });

        piece.translateZ(-2*(2+cubeSpacing));
    }

}




function absoluteCWF()
{
            var frontEdges = [];
            var frontCorners = [];

            for (i = 0; i < allPieces.length; i++)
            {
                var piece = allPieces[i];

                if (!piece.isEdge && piece.position.z > 1)
                {
                    frontCorners.push(piece);
                    //piece.translateY(2.5);
                }
                if (piece.isEdge && piece.position.z > 1)
                {
                    frontEdges.push(piece);
                }

                
            }
                //document.getElementById("test").innerHTML = frontCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;

                var corner1 = frontCorners[0];
                fakeFCornerRot(corner1);
                var corner2 = frontCorners[1];
                fakeFCornerRot(corner2);
                var corner3 = frontCorners[2];
                fakeFCornerRot(corner3);
                var corner4 = frontCorners[3];
                fakeFCornerRot(corner4);

                FRot = -Math.PI / 2;

                var piece0 = frontEdges[0];
                //document.getElementById("test").innerHTML = piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;
                fakeFRotation(piece0);

            
                var piece01 = frontEdges[1];
                //document.getElementById("test").innerHTML = piece.position.x;
                fakeFRotation(piece01);





                var piece02 = frontEdges[2];
                fakeFRotation(piece02);
                //document.getElementById("test").innerHTML = piece.position.x;


                var piece03 = frontEdges[3];
                fakeFRotation(piece03);
 
}
//note: X rot is on R
//Z rot is on F


//y rot done
//working on x
function cwF()
{

    if (yRotCount % 4 == 1)
    {
        absoluteCWR();
    }
    else if (yRotCount % 4 == 2)
    {
        absoluteCWB();
    }
    else if (yRotCount % 4 == 3)
    {
        absoluteCWL();
    }
    else if (xRotCount % 4 == 1)
    {
        absoluteCWD();
    }

    else if (yRotCount % 4 == 0 && xRotCount % 4 == 0)
    {

            var frontEdges = [];
            var frontCorners = [];

            for (i = 0; i < allPieces.length; i++)
            {
                var piece = allPieces[i];

                if (!piece.isEdge && piece.position.z > 1)
                {
                    frontCorners.push(piece);
                    //piece.translateY(2.5);
                }
                if (piece.isEdge && piece.position.z > 1)
                {
                    frontEdges.push(piece);
                }

                
            }
                //document.getElementById("test").innerHTML = frontCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;

                var corner1 = frontCorners[0];
                fakeFCornerRot(corner1);
                var corner2 = frontCorners[1];
                fakeFCornerRot(corner2);
                var corner3 = frontCorners[2];
                fakeFCornerRot(corner3);
                var corner4 = frontCorners[3];
                fakeFCornerRot(corner4);

                FRot = -Math.PI / 2;

                var piece0 = frontEdges[0];
                //document.getElementById("test").innerHTML = piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;
                fakeFRotation(piece0);

            
                var piece01 = frontEdges[1];
                //document.getElementById("test").innerHTML = piece.position.x;
                fakeFRotation(piece01);





                var piece02 = frontEdges[2];
                fakeFRotation(piece02);
                //document.getElementById("test").innerHTML = piece.position.x;


                var piece03 = frontEdges[3];
                fakeFRotation(piece03);
 }
}



function absoluteCWB()
{
            var backEdges = [];
            var backCorners = [];

            for (i = 0; i < allPieces.length; i++)
            {
                var piece = allPieces[i];

                if (!piece.isEdge && piece.position.z < -1)
                {
                    backCorners.push(piece);
                    //piece.translateY(2.5);
                }
                if (piece.isEdge && piece.position.z < -1)
                {
                    backEdges.push(piece);
                }
                
                
            }
                //document.getElementById("test").innerHTML = frontCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;

                var corner1 = backCorners[0];
                fakeBCornerRot(corner1);
                var corner2 = backCorners[1];
                fakeBCornerRot(corner2);
                var corner3 = backCorners[2];
                fakeBCornerRot(corner3);
                var corner4 = backCorners[3];
                fakeBCornerRot(corner4);

   

                var piece0 = backEdges[0];
                //document.getElementById("test").innerHTML = piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;
                fakeBRotation(piece0);

            
                var piece01 = backEdges[1];
                fakeBRotation(piece01);
                
                var piece02 = backEdges[2];
                fakeBRotation(piece02);


                var piece03 = backEdges[3];
                fakeBRotation(piece03);
}

//y done
function cwB()
{



    if (yRotCount % 4 == 1)
    {
        absoluteCWL();
    }
    else if (yRotCount % 4 == 2)
    {
        absoluteCWF();
    }
    else if (yRotCount % 4 == 3)
    {
        absoluteCWR();
    }

    else if (yRotCount % 4 == 0)
    {
            var backEdges = [];
            var backCorners = [];

            for (i = 0; i < allPieces.length; i++)
            {
                var piece = allPieces[i];

                if (!piece.isEdge && piece.position.z < -1)
                {
                    backCorners.push(piece);
                    //piece.translateY(2.5);
                }
                if (piece.isEdge && piece.position.z < -1)
                {
                    backEdges.push(piece);
                }
                
                
            }
                //document.getElementById("test").innerHTML = frontCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;

                var corner1 = backCorners[0];
                fakeBCornerRot(corner1);
                var corner2 = backCorners[1];
                fakeBCornerRot(corner2);
                var corner3 = backCorners[2];
                fakeBCornerRot(corner3);
                var corner4 = backCorners[3];
                fakeBCornerRot(corner4);

   

                var piece0 = backEdges[0];
                //document.getElementById("test").innerHTML = piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;
                fakeBRotation(piece0);

            
                var piece01 = backEdges[1];
                fakeBRotation(piece01);
                
                var piece02 = backEdges[2];
                fakeBRotation(piece02);


                var piece03 = backEdges[3];
                fakeBRotation(piece03);
    }
                // }
}

function absoluteCWR()
{

            var rightEdges = [];
            var rightCorners = [];

            for (i = 0; i < allPieces.length; i++)
            {
                var piece = allPieces[i];
                if (piece.isEdge && piece.position.x > 1)
                {
                    rightEdges.push(piece);
                }
                else if (!piece.isEdge && piece.position.x > 1)
                {
                    rightCorners.push(piece);
                    //piece.translateX(1);
                }
                
            }
                //document.getElementById("test").innerHTML = rightCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;


                var corner0 = rightCorners[0];
                var corner01 = rightCorners[1];
                var corner02 = rightCorners[2];
                var corner03 = rightCorners[3];

                fakeRCornerRot(corner0);
                fakeRCornerRot(corner01);
                fakeRCornerRot(corner02);
                fakeRCornerRot(corner03);


                var piece0 = rightEdges[0];
                fakeRRotation(piece0);

                //document.getElementById("test").innerHTML = piece.position.x;



                var piece01 = rightEdges[1];
                fakeRRotation(piece01);
 
                var piece02 = rightEdges[2];
                fakeRRotation(piece02);

                var piece03 = rightEdges[3];
                fakeRRotation(piece03);
        
}

//y rotation ez
function cwR()
{

    if (yRotCount % 4 == 1)
    {
        absoluteCWB();
    }
    else if (yRotCount % 4 == 2)
    {
        absoluteCWL();
    }
    else if (yRotCount % 4 == 3)
    {
        absoluteCWF();
    }
    else if (yRotCount % 4 == 0)
    {

            var rightEdges = [];
            var rightCorners = [];

            for (i = 0; i < allPieces.length; i++)
            {
                var piece = allPieces[i];
                if (piece.isEdge && piece.position.x > 1)
                {
                    rightEdges.push(piece);
                }
                else if (!piece.isEdge && piece.position.x > 1)
                {
                    rightCorners.push(piece);
                    //piece.translateX(1);
                }
                
            }
                //document.getElementById("test").innerHTML = rightCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;


                var corner0 = rightCorners[0];
                var corner01 = rightCorners[1];
                var corner02 = rightCorners[2];
                var corner03 = rightCorners[3];

                fakeRCornerRot(corner0);
                fakeRCornerRot(corner01);
                fakeRCornerRot(corner02);
                fakeRCornerRot(corner03);


                var piece0 = rightEdges[0];
                fakeRRotation(piece0);

                //document.getElementById("test").innerHTML = piece.position.x;



                var piece01 = rightEdges[1];
                fakeRRotation(piece01);
 
                var piece02 = rightEdges[2];
                fakeRRotation(piece02);

                var piece03 = rightEdges[3];
                fakeRRotation(piece03);


        }
}



function absoluteCWL()
{
    var leftEdges = [];
    var leftCorners = [];

    for (i = 0; i < allPieces.length; i++)
    {
        var piece = allPieces[i];
        if (piece.isEdge && piece.position.x < -1)
        {
            leftEdges.push(piece);
        }
        else if (!piece.isEdge && piece.position.x < -1)
        {
            leftCorners.push(piece);
        }
    }



    var edge0 = leftEdges[0];
    var edge01 = leftEdges[1];
    var edge02 = leftEdges[2];
    var edge03 = leftEdges[3];
    fakeLRotation(edge0);
    fakeLRotation(edge01);
    fakeLRotation(edge02);
    fakeLRotation(edge03);

    var corner0 = leftCorners[0];
    var corner01 = leftCorners[1];
    var corner02 = leftCorners[2];
    var corner03 = leftCorners[3];
    fakeLCornerRot(corner0);
    fakeLCornerRot(corner01);
    fakeLCornerRot(corner02);
    fakeLCornerRot(corner03);

}


//y rot EZ
function cwL()
{
    if (yRotCount % 4 == 1)
    {
        absoluteCWF();
    }
    else if (yRotCount % 4 == 2)
    {
        absoluteCWR();
    }
    else if (yRotCount % 4 == 3)
    {
        absoluteCWB();
    }
    else if (yRotCount % 4 == 0)
    {

    var leftEdges = [];
    var leftCorners = [];

    for (i = 0; i < allPieces.length; i++)
    {
        var piece = allPieces[i];
        if (piece.isEdge && piece.position.x < -1)
        {
            leftEdges.push(piece);
        }
        else if (!piece.isEdge && piece.position.x < -1)
        {
            leftCorners.push(piece);
        }
    }



    var edge0 = leftEdges[0];
    var edge01 = leftEdges[1];
    var edge02 = leftEdges[2];
    var edge03 = leftEdges[3];
    fakeLRotation(edge0);
    fakeLRotation(edge01);
    fakeLRotation(edge02);
    fakeLRotation(edge03);

    var corner0 = leftCorners[0];
    var corner01 = leftCorners[1];
    var corner02 = leftCorners[2];
    var corner03 = leftCorners[3];
    fakeLCornerRot(corner0);
    fakeLCornerRot(corner01);
    fakeLCornerRot(corner02);
    fakeLCornerRot(corner03);
    }
}


function absoluteCWU()
{
    var upEdges = [];
    var upCorners = [];

    for (i = 0; i < allPieces.length; i++)
    {
        var piece = allPieces[i];
        if (piece.isEdge && piece.position.y > 1)
        {
            upEdges.push(piece);
        }
        else if (!piece.isEdge && piece.position.y > 1)
        {
            upCorners.push(piece);
        }
    }



    var edge0 = upEdges[0];
    var edge01 = upEdges[1];
    var edge02 = upEdges[2];
    var edge03 = upEdges[3];
    fakeURotation(edge0);
    fakeURotation(edge01);
    fakeURotation(edge02);
    fakeURotation(edge03);

    var corner0 = upCorners[0];
    var corner01 = upCorners[1];
    var corner02 = upCorners[2];
    var corner03 = upCorners[3];
    fakeUCornerRot(corner0);
    fakeUCornerRot(corner01);
    fakeUCornerRot(corner02);
    fakeUCornerRot(corner03);
}


//y rot doesn't affect this eZ
function cwU()
{



    var upEdges = [];
    var upCorners = [];

    for (i = 0; i < allPieces.length; i++)
    {
        var piece = allPieces[i];
        if (piece.isEdge && piece.position.y > 1)
        {
            upEdges.push(piece);
        }
        else if (!piece.isEdge && piece.position.y > 1)
        {
            upCorners.push(piece);
        }
    }



    var edge0 = upEdges[0];
    var edge01 = upEdges[1];
    var edge02 = upEdges[2];
    var edge03 = upEdges[3];
    fakeURotation(edge0);
    fakeURotation(edge01);
    fakeURotation(edge02);
    fakeURotation(edge03);

    var corner0 = upCorners[0];
    var corner01 = upCorners[1];
    var corner02 = upCorners[2];
    var corner03 = upCorners[3];
    fakeUCornerRot(corner0);
    fakeUCornerRot(corner01);
    fakeUCornerRot(corner02);
    fakeUCornerRot(corner03);
}

function absoluteCWD()
{
    var downEdges = [];
    var downCorners = [];

    for (i = 0; i < allPieces.length; i++)
    {
        var piece = allPieces[i];
        if (piece.isEdge && piece.position.y < -1)
        {
            downEdges.push(piece);
        }
        else if (!piece.isEdge && piece.position.y < -1)
        {
            downCorners.push(piece);
        }
    }

    //document.getElementById("test").innerHTML = downCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;


    var edge0 = downEdges[0];
    var edge01 = downEdges[1];
    var edge02 = downEdges[2];
    var edge03 = downEdges[3];

    fakeDRotation(edge0);
    fakeDRotation(edge01);
    fakeDRotation(edge02);
    fakeDRotation(edge03);

    var corner0 = downCorners[0];
    var corner01 = downCorners[1];
    var corner02 = downCorners[2];
    var corner03 = downCorners[3];

    fakeDCornerRot(corner0);
    fakeDCornerRot(corner01);
    fakeDCornerRot(corner02);
    fakeDCornerRot(corner03);
}

function cwD()
{
    var downEdges = [];
    var downCorners = [];

    for (i = 0; i < allPieces.length; i++)
    {
        var piece = allPieces[i];
        if (piece.isEdge && piece.position.y < -1)
        {
            downEdges.push(piece);
        }
        else if (!piece.isEdge && piece.position.y < -1)
        {
            downCorners.push(piece);
        }
    }

    //document.getElementById("test").innerHTML = downCorners.length;//piece0.position.x + " " + piece0.position.y;//piece0.material.materials.length;


    var edge0 = downEdges[0];
    var edge01 = downEdges[1];
    var edge02 = downEdges[2];
    var edge03 = downEdges[3];

    fakeDRotation(edge0);
    fakeDRotation(edge01);
    fakeDRotation(edge02);
    fakeDRotation(edge03);

    var corner0 = downCorners[0];
    var corner01 = downCorners[1];
    var corner02 = downCorners[2];
    var corner03 = downCorners[3];

    fakeDCornerRot(corner0);
    fakeDCornerRot(corner01);
    fakeDCornerRot(corner02);
    fakeDCornerRot(corner03);
}







function ccwU()
{
    cwU(); cwU(); cwU();
}

function ccwB()
{
    cwB(); cwB(); cwB();
}

function ccwL()
{
    cwL();
    cwL();
    cwL();
}

function ccwD()
{
    cwD(); cwD(); cwD();
}

function ccwF()
{
    cwF(); cwF(); cwF();
}



function ccwR()
{
    cwR(); cwR(); cwR();
}

var yRotAng = -Math.PI / 2;
function yRot()
{
    // camera.position.x = 10;
    // camera.position.y = 5;
    // camera.position.z = -5;

    if (yRotCount % 4 == 1)
    {

        groupRight.rotation.set(0,yRotAng,0);
    }
    else if (yRotCount % 4 == 2)
    {
        groupRight.rotation.set(0,yRotAng * 2, 0);
    }    
    else if (yRotCount % 4 == 3)
    {
        groupRight.rotation.set(0,yRotAng * 3,0);
    }
    else if (yRotCount % 4 == 0)
    {
        groupRight.rotation.set(0,0,0);
    }
    

    //original
    // camera.position.z = 10;
    // camera.position.y = 5;
    // camera.position.x = 5;

        //y rotation z = -5, y = 5, x = 10
}

function yPRot()
{
    yRot(); yRot(); yRot();
}

var xRotAng = -Math.PI / 2;
function xRot()
{
    groupRight.rotation.set(xRotAng,0,0);
    xRotAng += -Math.PI / 2;
}

var ePressed = 0;

document.addEventListener("keydown", function(e)
{
    var key = e.keyCode;
    console.log(key);



    switch (key)
    {


        //y
        case 89:
        yRotCount++;
        yRot();
        //document.getElementById("test").innerHTML = yRotCount;


        break;

        //
        case 80:

        yRotCount += 3;
        yRot();
        break;

        //x
        // case 88:


        //     xRot();
        //     xRotCount++;
        // break;

        //m
        case 77:

            ccwB();
            break;
        //b
        case 66:

        cwB();

        // if (yRotCount % 4 == 1)
        // {
        //     cwL();
        // }

        // else 
        // {
        //     cwB();
        // }
        break;

        //s
        case 83:
        ccwL();
        break;

        //l
        case 76:
        cwL();
        break;

        //h
        case 72:
        ccwD();
        break;

        //d
        case 68:
        cwD();
        break;
        //u
        case 85:
        cwU();
        break;

        //i
        case 73:
        ccwU();
        break;

        //e
        case 69:

        if (ePressed % 4 == 0)
        {
            ccwR();
            ePressed++;
        }
        else if (ePressed % 4 == 1)
        {
            cwF();
            ePressed++;
        }
        else if (ePressed % 4 == 2)
        {
            cwR();
            ePressed++;
        }
        else if (ePressed % 4 == 3)
        {
            ccwF();
            ePressed++;
        }



            break;

        //f
        case 70:

            cwF();
            break;
        //g
        case 71:
            ccwF();
        break;


        //r: clockwise R
        case 82:


            cwR();


            break;


        //c: counterclockwise R
        case 67:


            ccwR();


            break;


// old R
 // RRot += -Math.PI / 2;
 //            document.getElementById("test").innerHTML = cubeRF.position.y;



 //            //groupRight.rotation.set(RRot,0,0);
 //            cubeRF.translateZ(-(2+cubeSpacing));
 //            cubeRF.translateY((2+cubeSpacing));

 //            cubeRU.translateZ(-(2+cubeSpacing));
 //            cubeRU.translateY(-(2+cubeSpacing));

 //            cubeRB.translateZ((2+cubeSpacing));
 //            cubeRB.translateY(-(2+cubeSpacing));

 //            cubeRD.translateZ((2+cubeSpacing));
 //            cubeRD.translateY((2+cubeSpacing));

 //            cubeRF.rotation.set(RRot, 0, 0);
 //            cubeRU.rotation.set(RRot, 0, 0);
 //            cubeRB.rotation.set(RRot, 0, 0);
 //            cubeRD.rotation.set(RRot, 0, 0);



 //            var RF = groupRight.children[3];
 //            var RU = groupRight.children[0];
 //            var RB = groupRight.children[1];
 //            var RD = groupRight.children[2];

 //            groupRight.children[0] = RF;
 //            groupRight.children[1] = RU;
 //            groupRight.children[2] = RB;
 //            groupRight.children[3] = RD;



            //not needed
        // case 70:


        //     document.getElementById("test").innerHTML = cubeRF.position.y;


        //     var RF = groupRight.children[3];
        //     var RU = groupRight.children[0];
        //     var RB = groupRight.children[1];
        //     var RD = groupRight.children[2];

        //     //will be replacing this with an FU edge
        //     groupRight.children[3] = groupF.children[1];


        //     //last element in groupF is the edge shared with R
        //     groupF.add(RF);
        //     FRot += -Math.PI / 2;
        //     //FRot % 2*Math.PI;


        //     cubeRF.translateX(-(2+cubeSpacing));
        //     cubeRF.translateY(-(2+cubeSpacing));

        //     cubeFU.translateX((2+cubeSpacing));
        //     cubeFU.translateY(-(2+cubeSpacing));

        //     cubeLF.translateX((2+cubeSpacing));
        //     cubeLF.translateY((2+cubeSpacing));

        //     cubeFD.translateX(-(2+cubeSpacing));
        //     cubeFD.translateY((2+cubeSpacing));


        //     cubeRF.rotation.set(0, 0, FRot);
        //     cubeFU.rotation.set(0, 0, FRot);
        //     cubeLF.rotation.set(0, 0, FRot);
        //     cubeFD.rotation.set(0, 0, FRot);

        //     var RF = groupF.children[0];
        //     var FU = groupF.children[1];
        //     var LF = groupF.children[2];
        //     var FD = groupF.children[3];

        //     groupF.children[0] = LF;
        //     groupF.children[1] = FD;
        //     groupF.children[2] = RF;
        //     groupF.children[3] = FU;




        //     //groupF.rotation.set(0,0,FRot);



        //     break;

            // groupRF.translateZ(-(2+cubeSpacing));
            // groupRF.translateY((2+cubeSpacing)); 



            // //;
            // groupRight.rotation.set(RRot,0,0);

            // //RF is first edge put into right face (after the center)
            // //var RF = groupRight.children[1];



            // var RF = groupRF.children[0];

            // groupRF.remove(RF);

            // groupRight.add(RF);


            // meshTest.translateZ(-10);

            // //groupRF.add(RD);


            // //RU is second
            // var RU = groupRight.children[1];
            // //RB
            // var RB = groupRight.children[2];
            // //RD
            // var RD = groupRight.children[3];

            // var RF2 = groupRight.children[4];



            // groupRight.children[1] = RF2;
            // groupRight.children[2] = RU;
            // groupRight.children[3] = RB;
            // groupRight.children[4] = RD;



            // document.getElementById("test").innerHTML = groupRight.children[4];



            // groupRF.add(groupRight.children[4]);

            // groupRF.rotation.set(RRot,0,0);


            // groupRight.remove(groupRight.children[4]);




            // case 70:

            // //var RF = groupRight.children[1];



            // 
            // groupFront.rotation.set(0,0,FRot);

            // var RF = groupRF.children[0];

            // groupRF.remove(RF);
            // groupFront.add(RF);



            // //groupRF.add(FU);


            // var FD = groupFront.children[1];

            // var LF = groupFront.children[2];

            // var FU = groupFront.children[3];

            // var RF2 = groupFront.children[4];

            // groupFront.children[1] = RF2;

            // groupFront.children[2] = FD;
            // groupFront.children[3] = LF;
            // groupFront.children[4] = FU; 



            // document.getElementById("test").innerHTML = groupFront.children.length;



            // groupRF.add(groupFront.children[4]);


            // groupRF.rotation.set(0,0,FRot);

            // groupFront.remove(groupFront.children[4]);


            // break;

            //face at the end
            //groupRight.add(RF);
            //groupRight.remove(groupRight.children[1]);

            // groupRight.children[1] = FU;

            // groupFront.children[1] = RF;
            // groupFront.children[2] = FD;
            // groupFront.children[3] = LF;
            // groupFront.children[4] = FU;

            // groupFront.children[1] = FU;

            // groupFront.children[2] = RF;
            // groupFront.children[3] = FD;
            // groupFront.children[4] = LF;


            //groupRight.children[1] = 0;


            // kinda works

            //groupFront.add(RF);
            //groupFront.children[4] = FU;




            // groupFront.remove(RF);

            //RRot - Math.PI / 2;


            // if (RFRot == 1)
            // {

            //     groupRight.rotation.set(2 * RRot, 0, 0);

            //     break;
            //     //RFRot++;
            //    //

            // }


            // else if (RFRot == 0)
            // {


            //     groupRight.rotation.set(RRot,0,0);
            //     RFRot++;
            //     
            //     break;

            //     //RFRot++;

            // }

            // else
            // {
            //     break;
            // }

            //front face cw, F



    }
});

function animate()
{

    //setTimeout(function() {


    //groupRight.rotation.x += 0.05;




    // document.addEventListener("keydown", function(e)
    // {
    //     var key = e.keyCode;
    //     console.log(key);



    //     switch( key )
    //     {
    //         case 82:


    //         // var RF = groupFront.children[1];
    //         // groupFront.remove(RF);
    //         // groupRight.add(RF);
    //         // scene.add(groupRight);
    //         RRot += -Math.PI / 2;

    //         document.getElementById("test").innerHTML = RRot;
    //         groupRight.rotation.set(RRot,0,0);
    //         //RRot - Math.PI / 2;


    //         // if (RFRot == 1)
    //         // {

    //         //     groupRight.rotation.set(2 * RRot, 0, 0);

    //         //     break;
    //         //     //RFRot++;
    //         //    //document.getElementById("test").innerHTML = RFRot;

    //         // }


    //         // else if (RFRot == 0)
    //         // {


    //         //     groupRight.rotation.set(RRot,0,0);
    //         //     RFRot++;
    //         //     
    //         //     break;

    //         //     //RFRot++;

    //         // }

    //         // else
    //         // {
    //         //     break;
    //         // }
    //         break;

    //         case 70:

    //         var RF = groupRight.children[1];
    //         groupRight.remove(RF);
    //         groupFront.add(RF);
    //         scene.add(groupFront);
    //         //scene.add(groupRight);

    //         groupFront.rotation.set(0,0,-Math.PI / 2);
    //         break;


    //     }
    // });


    requestAnimationFrame(animate);



    render();

    // }, 1000 / 30);



}

function render()
{




    renderer.render(scene, camera);
    stats.update();

    //group.rotation.y += 0.05;
    //groupRight.rotation.y += 0.05;




}

//not used anymore

function modelLoadedCallback(geometry)
{

    mesh = new THREE.Mesh(geometry, material);

    groupRight.add(mesh);
    scene.add(groupRight);

}

function modelLoadedCallback2(geometry)
{

    mesh = new THREE.Mesh(geometry, material2);

    groupRight.add(mesh);
    scene.add(groupRight);

}


//right face
function modelLoadedCallback3(geometry)
{

    mesh = new THREE.Mesh(geometry, material3);

    groupRight.add(mesh);

    //groupRight.add(mesh);

    //scene.add( group );

    scene.add(groupRight);

}



function modelLoadedCallback4(geometry)
{

    mesh = new THREE.Mesh(geometry, material4);

    groupRight.add(mesh);
    scene.add(groupRight);

}

function modelLoadedCallbackD(geometry)
{

    mesh = new THREE.Mesh(geometry, materialD);

    groupRight.add(mesh);
    scene.add(groupRight);

}

function modelLoadedCallbackF(geometry)
{

    mesh = new THREE.Mesh(geometry, materialF);


    groupRight.add(mesh);
    scene.add(groupRight);

}

function modelLoadedCallbackB(geometry)
{

    mesh = new THREE.Mesh(geometry, materialB);

    groupRight.add(mesh);
    scene.add(groupRight);

}

//not useful

function modelLoadedCallbackRF(geometry)
{

    mesh = new THREE.Mesh(geometry, materialRF);


    //groupRight.add(mesh);
    //groupFront.add(mesh);
    group.add(mesh);
    groupRF.add(mesh);


    scene.add(groupRF);

}

function modelLoadedCallbackRU(geometry)
{

    mesh = new THREE.Mesh(geometry, materialRU);

    group.add(mesh);
    groupRight.add(mesh);
    //groupFront.add(mesh);


    scene.add(groupRight);

}

function modelLoadedCallbackRB(geometry)
{

    mesh = new THREE.Mesh(geometry, materialRB);

    group.add(mesh);
    groupRight.add(mesh);
    //groupFront.add(mesh);


    scene.add(groupRight);

}

function modelLoadedCallbackRD(geometry)
{

    mesh = new THREE.Mesh(geometry, materialRD);

    group.add(mesh);
    groupRight.add(mesh);
    //groupFront.add(mesh);


    scene.add(groupRight);

}


function modelLoadedCallbackFD(geometry)
{

    mesh = new THREE.Mesh(geometry, materialFD);

    group.add(mesh);
    groupFront.add(mesh);
    //groupFront.add(mesh);


    scene.add(groupFront);

}



function modelLoadedCallbackLF(geometry)
{

    mesh = new THREE.Mesh(geometry, materialLF);

    group.add(mesh);
    groupFront.add(mesh);
    //groupFront.add(mesh);


    scene.add(groupFront);

}


function modelLoadedCallbackFU(geometry)
{

    mesh = new THREE.Mesh(geometry, materialFU);

    group.add(mesh);
    groupFront.add(mesh);
    //groupFront.add(mesh);


    scene.add(groupFront);

}
