// Prueba de unidad de la clase MissionComander

const MissionComander = require('./../app/missionComander');

describe("Unit Test for Mission Comander Class", () => {
    test('Created a mission commander object', () => {
        const myMissionCommander = new MissionComander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa"); 
    });
})
