let world;

function setup() {
  noCanvas();
  world = new World('VRScene');
  world.setBackground(173, 216, 230);
  
  // Load Castle
  let Castle = new OBJ({
    asset: 'castle-obj',
    mtl: 'castle-mtl',
    x: 0,
    y: 0,
    z: -10,
    rotationX: 0,
    rotationY: 180,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
  });
  world.add(Castle);
  
  // Box primitive
  var b = new Box({
    x: 0, y: 1, z: 0,
    width: 1, height: 1, depth: 1,
    red: random(255), green: random(255), blue: random(255)
  });
  world.add(b);
  
  // Text
  var text = new Text({
    text: 'Welcome to Evil Castle!!!',
    red: 128, green: 128, blue: 128,
    side: 'double',
    x: 0, y: 2, z: 0,
    scaleX: 5, scaleY: 5, scaleZ: 5
  });
  world.add(text);
  
  // Add invisible boundary (example)
  let boundary = new Box({
    x: 10, y: 1.5, z: -5, // Position
    width: 10, height: 5, depth: 1, // Size
    opacity: 0, // Make it invisible
  });
  world.add(boundary);
}

function draw() {
  // Get the camera object
  let cam = world.getUserPosition();

  // Define constraints (example limits for x, y, and z axes)
  let minX = -5, maxX = 5;
  let minY = 0, maxY = 5;
  let minZ = -10, maxZ = 0;

  // Constrain camera position
  if (cam.x < minX) cam.x = minX;
  if (cam.x > maxX) cam.x = maxX;
  if (cam.y < minY) cam.y = minY;
  if (cam.y > maxY) cam.y = maxY;
  if (cam.z < minZ) cam.z = minZ;
  if (cam.z > maxZ) cam.z = maxZ;

  // Set the new position back to the camera
  world.setUserPosition(cam.x, cam.y, cam.z);
}
