function runFlight() {

    // ALTITUDE

    let altitude = Math.floor(Math.random() * 91) + 10;

    let altitudeStatus;

    if (altitude < 50) {

        altitudeStatus = "CLIMB";

    } 

    else if (altitude > 80) {

        altitudeStatus = "DESCEND";

    } 

    else {

        altitudeStatus = "MAINTAIN ALTITUDE";

    }

    // HEADING

    let heading = Math.floor(Math.random() * 181);

    let headingStatus;

    if (heading < 90) {

        headingStatus = "RUDDER RIGHT";

    } 

    else if (heading > 90) {

        headingStatus = "RUDDER LEFT";

    } 

    else {

        headingStatus = "MAINTAIN HEADING";

    }

    // AIRSPEED

    let airspeed = Math.floor(Math.random() * 81) + 50;

    let speedStatus;

    if (airspeed < 80) {

        speedStatus = "SPEED UP";

    } 

    else if (airspeed > 120) {

        speedStatus = "SLOW DOWN";

    } 

    else {

        speedStatus = "MAINTAIN SPEED";

    }

    // FUEL

    let fuel = Math.floor(Math.random() * 101);

    // GEAR

    let gear = Math.floor(Math.random() * 2) + 1;

    let gearStatus;

    if (gear == 2) {

        gearStatus = "GEAR UP";

    }

    else {

        gearStatus = "GEAR DOWN";

    }

    // UPDATE MAIN DISPLAY

    document.getElementById("altitude").innerHTML =

        altitude + " ft";

    document.getElementById("altitudeStatus").innerHTML =

        altitudeStatus;

    document.getElementById("heading").innerHTML =

        heading + "°";

    document.getElementById("headingStatus").innerHTML =

        headingStatus;

    document.getElementById("airspeed").innerHTML =

        airspeed + " kts";

    document.getElementById("speedStatus").innerHTML =

        speedStatus;

    document.getElementById("fuel").innerHTML =

        fuel + "%";

    document.getElementById("gear").innerHTML =

        gearStatus;

    // WARNING LIGHTS

    let fuelLight = document.getElementById("fuelLight");

    let gearLight = document.getElementById("gearLight");

    // Reset warnings

    fuelLight.className = "warning fuelOff";

    gearLight.className = "warning gearOff";

    // Fuel warning

    if (fuel < 20) {

        fuelLight.className = "warning fuelOn";

    }

    // Gear warning

    if (altitude < 20 && gear == 2) {

        gearLight.className = "warning gearOn";

    }

}