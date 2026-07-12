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

    let fuelStatus;

    if (fuel < 20) {

        fuelStatus = "⚠ FUEL LOW";

    } 

    else {

        fuelStatus = "FUEL NORMAL";

    }

    // LANDING GEAR

    let gear = Math.floor(Math.random() * 2) + 1;

    let gearStatus;

    if (gear > 1) {

        gearStatus = "GEAR UP";

    } 

    else {

        gearStatus = "GEAR DOWN";

    }

    // WARNINGS

    let warning = "STATUS: NORMAL";

    if (altitude < 20 && gear == 2) {

        warning = "⚠ GEAR WARNING";

    }

    // SEND DATA TO SCREEN

    document.getElementById("altitude").innerHTML =

        "ALTITUDE: " + altitude + " ft<br>" + altitudeStatus;

    document.getElementById("heading").innerHTML =

        "HEADING: " + heading + " degrees<br>" + headingStatus;

    document.getElementById("airspeed").innerHTML =

        "AIRSPEED: " + airspeed + " kts<br>" + speedStatus;

    document.getElementById("fuel").innerHTML =

        "FUEL: " + fuel + "%<br>" + fuelStatus;

    document.getElementById("gear").innerHTML =

        gearStatus;

    document.getElementById("warning").innerHTML =

        warning;

}