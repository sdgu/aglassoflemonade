if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;

var camera, controls, scene, renderer, mesh;
var group;

init();
render();

function animate() {

        requestAnimationFrame(animate);
        controls.update();

}

function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
        camera.position.z = 10;

        controls = new THREE.OrbitControls( camera );
//        controls.damping = 0.2;
        controls.addEventListener( 'change', render );

        scene = new THREE.Scene();

        // lights

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        light = new THREE.DirectionalLight( 0x002288 );
        light.position.set( -1, -1, -1 );
        scene.add( light );

        light = new THREE.AmbientLight( 0x222222 );
        scene.add( light );


        // texture - texture must not be in same folder or there is an error.
        // var texture = THREE.ImageUtils.loadTexture( 'images/texture.jpg', {}, function(){ 
        // // // use to test when image gets loaded if it does
        // render();
        // }, 
        //  function(){ 
        //      alert('error') 
        //  });



            var material1 = new THREE.MeshBasicMaterial(
            {
                map: THREE.ImageUtils.loadTexture('images/white.png')
            });
            var material2 = new THREE.MeshBasicMaterial(
            {
                map: THREE.ImageUtils.loadTexture('images/red.png')
            });
            var material3 = new THREE.MeshBasicMaterial(
            {
                map: THREE.ImageUtils.loadTexture('images/clouds.jpg')
            });
            var material4 = new THREE.MeshBasicMaterial(
            {
                map: THREE.ImageUtils.loadTexture('images/stone-wall.jpg')
            });
            var material5 = new THREE.MeshBasicMaterial(
            {
                map: THREE.ImageUtils.loadTexture('images/water.jpg')
            });
            var material6 = new THREE.MeshBasicMaterial(
            {
                map: THREE.ImageUtils.loadTexture('images/wood-floor.jpg')
            });

            var materials = [material1, material2, material3, material4, material5, material6];

            var meshFaceMaterial = new THREE.MeshFaceMaterial(materials);



        // var texture2 = THREE.ImageUtils.loadTexture( 'images/red.png', {}, function(){ 
        // // use to test when image gets loaded if it does
        // render();
        // }, 
        // function(){ 
        //     alert('error') 
        // });



        // //material = new THREE.MeshBasicMaterial({map: texture});


        // material = new THREE.MeshBasicMaterial
        // ({
        //     wireframe: false,
        //     color: 'blue'
        // });

        //material2 = new THREE.MeshBasicMaterial({map: texture2});



        group = new THREE.Object3D();

        //group2 = new THREE.Object3D();
         
        //load mesh 
        var loader = new THREE.JSONLoader();
        loader.load('models/cube.js', modelLoadedCallback);


        //loader.position.set(100,100,100);


        //var loader2 = new THREE.JSONLoader();
        loader.load('models/cube_1.js', modelLoadedCallback);



        // renderer

        renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container = document.getElementById( 'container' );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

        animate();

}

function modelLoadedCallback(geometry) {

        mesh = new THREE.Mesh( geometry, meshFaceMaterial );
   
        group.add(mesh);
        scene.add( group );

}

function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

}

function render() {
//        requestAnimationFrame(render);
//        mesh.rotation.y += 0.05;
        renderer.render(scene, camera);
        stats.update();

}