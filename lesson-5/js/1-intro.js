async function startProgram() {
	// STEP 1: Copy all of the code here and paste it into the Sphero Edu Web App text editor

	// STEP 2: Place the robot on the floor and aim it - click on the "AIM" button at the top right of the Sphero Edu Web App

	// STEP 3: Change the color of the robot
	await setMainLed({r:255, g:150, b:100});
    // STEP 4: Move the robot (Roll 0 degrees, speed 50, for 2 seconds)
	//heading 0 - 360, velocity 0 - 255, time
	await roll(30, 100, 2);
	setSpeed(50);
	
	// STEP 5: Display emoji on the matrix
	await setDisplayImage("slightly-smiling");
}
