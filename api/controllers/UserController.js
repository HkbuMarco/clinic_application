/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require('bcryptjs');


module.exports = {
    //login function
    login: async function(req, res) {
        if (req.method == "GET") return res.view('user/login');

        var user = await User.findOne({ email: req.body.email });


        if (!user) return res.status(401).send("Account does not exist！");


        const match = await sails.bcrypt.compare(req.body.password, user.password);

        if (!match) return res.status(401).send("wrong password!");

        const crypto = require('crypto');

        var token =
            // Calling randomBytes method with callback 
            (crypto.randomBytes(20)).toString('hex');;
        console.log(token)




        req.session.regenerate(function(err) {

            if (err) return res.serverError(err);

            req.session.Bearertoken = token;

            req.session.userID = user.id;

            req.session.email = req.body.email;

            req.session.clinic_name = user.clinic_name;


            sails.log("[Session] ", req.session);
            return res.json(req.session);

        });


    },
    //index function
    index: async function(req, res) {

        if (req.method == "GET")
            if (req.session.userID) {
                return res.view('user/index');
            } else {
                return res.forbidden();
            }
    },
    //create record function
    create_record: async function(req, res) {

        if (req.method == "GET") {
            if (req.session.Bearertoken) {
                return res.view('user/create_record');
            } else {
                return res.view('user/login');
            }
        } else {
            if (req.session.Bearertoken) {
                var model = await Consultation.create(req.body).fetch();
            } else {
                return res.view('user/login');
            }

            if (req.wantsJSON) {
                return res.json({ message: "create record successfully!", url: '/user/index' }); // for ajax request
            } else {
                return res.redirect('/user/index'); // for normal request
            }

        }
    },

    //date search function
    date_search: async function(req, res) {

        if (req.method == "GET") {
            if (req.session.Bearertoken) {

                var datetime_from = (req.query.from).split(" ");
                var datetime_to = (req.query.to).split(" ");
                //date from
                var date_from = datetime_from[0];
                var date_from_str = date_from.split("-");

                //time from
                var time_from = datetime_from[1];
                var time_from_str = time_from.split(":");

                //new datetime from
                var newDateTimeFrom = new Date(parseInt(date_from_str[0]), parseInt(date_from_str[1]) - 1, parseInt(date_from_str[2]), parseInt(time_from_str[0]), parseInt(time_from_str[1]), parseInt(time_from_str[2]))


                //date to
                var date_to = datetime_to[0];
                var date_to_str = date_to.split("-");

                //time to
                var time_to = datetime_to[1];
                var time_to_str = time_to.split(":");

                //new datetime to
                var newDateTimeTo = new Date(parseInt(date_to_str[0]), parseInt(date_to_str[1]) - 1, parseInt(date_to_str[2]),
                    parseInt(time_to_str[0]), parseInt(time_to_str[1]), parseInt(time_to_str[2]))



                var modelToShow = await Consultation.find({
                    where: {
                        date: { '>=': newDateTimeFrom, '<=': newDateTimeTo },

                    }
                });
                if (!(modelToShow.length)) {
                    sails.log("{Consultation record with date search:}", "total record:0")
                    return res.notFound();
                }
                sails.log("{Consultation record with date search:}", "total record:" + (modelToShow.length || 0), modelToShow)
                return res.json(modelToShow);

            } else {
                return res.view('user/login');
            }
        }
    },

    //pagination function
    list: async function(req, res) {

        if (req.method == "GET") {
            if (req.session.Bearertoken) {
                if (isNaN(req.query.limit) && isNaN(req.query.offset)) {
                    var limitNum = 25;

                } else if (isNaN(req.query.limit) && !(isNaN(req.query.offset))) {

                } else {
                    var limitNum = parseInt(req.query.limit);
                }
                if (isNaN(req.query.offset)) {
                    var offsetNum = 0;
                } else {
                    var offsetNum = parseInt(req.query.offset);
                }





                var modelToShow = await Consultation.find({

                    limit: limitNum,
                    skip: offsetNum,
                    sort: 'recordCode ASC'

                });
                if (!(modelToShow.length)) {
                    sails.log("{Consultation record with list:}", "total record:0")
                    return res.notFound();

                }
                sails.log("{Consultation record with list:}", "total record:" + (modelToShow.length || 0), modelToShow)
                return res.json(modelToShow);

            } else {
                return res.view('user/login');
            }
        }
    },
};