/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

    // By convention, this is a good place to set up fake data during development.
    //
    // For example:
    // ```
    // // Set up fake development data (or if we already have some, avast)
    // if (await User.count() > 0) {
    //   return;
    // }
    //
    // await User.createEach([
    //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
    //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
    //   // etc.
    // ]);
    // ```

    sails.bcrypt = require('bcryptjs');
    const saltRounds = 10;
    const hash = await sails.bcrypt.hash('123', saltRounds);

    if (await User.count() == 0) {

        await User.createEach([{
            email: "abcclinic@gmail.com",
            password: hash,
            clinic_id: "12345",
            clinic_name: "famouseClinic",
            phone_number: "91000000",
            address: "happy role, Kowloon City, Kowloon, Hong Kong"
                // etc.
        }]);

    }
    if (await Consultation.count() == 0) {

        await Consultation.createEach([
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-11T10:39:23", "follow_up": true, recordCode: 1 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-12T10:39:23", "follow_up": true, recordCode: 2 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-13T10:39:23", "follow_up": true, recordCode: 3 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-14T10:39:23", "follow_up": true, recordCode: 4 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 5 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 6 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 7 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 8 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-16T10:39:23", "follow_up": true, recordCode: 9 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-16T10:39:23", "follow_up": true, recordCode: 10 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-17T10:39:23", "follow_up": true, recordCode: 11 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-18T10:39:23", "follow_up": true, recordCode: 12 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-19T10:39:23", "follow_up": true, recordCode: 13 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-11T10:39:23", "follow_up": true, recordCode: 14 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-12T10:39:23", "follow_up": true, recordCode: 15 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-13T10:39:23", "follow_up": true, recordCode: 16 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-14T10:39:23", "follow_up": true, recordCode: 17 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 18 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 19 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 20 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 21 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-16T10:39:23", "follow_up": true, recordCode: 22 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-16T10:39:23", "follow_up": true, recordCode: 23 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-17T10:39:23", "follow_up": true, recordCode: 24 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-18T10:39:23", "follow_up": true, recordCode: 25 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-19T10:39:23", "follow_up": true, recordCode: 26 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-11T10:39:23", "follow_up": true, recordCode: 27 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-12T10:39:23", "follow_up": true, recordCode: 28 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-13T10:39:23", "follow_up": true, recordCode: 29 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-14T10:39:23", "follow_up": true, recordCode: 30 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 31 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 32 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 33 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-15T10:39:23", "follow_up": true, recordCode: 34 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-16T10:39:23", "follow_up": true, recordCode: 35 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-16T10:39:23", "follow_up": true, recordCode: 36 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-17T10:39:23", "follow_up": true, recordCode: 37 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-18T10:39:23", "follow_up": true, recordCode: 38 },
            { clinic: "famouseClinic", doctor_name: "Marco", patient_name: "Jack", diagnosis: "headache", medication: "neurontin", "consultation_fee": 140, "date": "2021-06-19T10:39:23", "follow_up": true, recordCode: 39 },
        ]);

    }
};