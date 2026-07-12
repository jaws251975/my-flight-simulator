function runFlight() {

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

    let fuel = Math.floor(Math.random() * 101);

    let fuelStatus;

    if (fuel < 20) {

        fuelStatus = "⚠ FUEL LOW";

    } 

    else {

        fuelStatus = "FUEL NORMAL";

    }

    let gear = Math.floor(Math.random() * 2) + 1;

    let gearStatus;

    if (gear > 1) {

        gearStatus = "GEAR UP";

    } 

    else {

        gearStatus = "GEAR DOWN";

    }

    let warning = "";

    if (altitude < 20 && gear == 2) {

        warning = "⚠ GEAR WARNING";

    }

    console.log("ALTITUDE:", altitude, "ft");

    console.log(altitudeStatus);

    console.log("HEADING:", heading, "degrees");

    console.log(headingStatus);

    console.log("AIRSPEED:", airspeed, "kts");

    console.log(speedStatus);

    console.log("FUEL:", fuel + "%");

    console.log(fuelStatus);

    console.log(gearStatus);

    if (warning) {

        console.log(warning);

    }

}