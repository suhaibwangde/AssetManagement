var express = require('express');

function verifyQuestion(data) {
    let errors = '';
    const isQuestion = new RegExp("(\\?)$");
    const hasMath = new RegExp("(\\d+)");
    const isNotValidAnswer = new RegExp("([aA-zZ]+)");
    if(data.question.length == 0) {
        errors = errors + ", " + "Question cannot be empty.";
    } else if(!isQuestion.test(data.question)) {
        errors = errors +  ", " + "Question should be ending with '?'";
    } else if(!hasMath.test(data.question)) {
        errors = errors +  ", " + "Question should contain numeric mathematical expression?";
    }
    if(data.answer.length == 0 ) {
        errors = errors +  ", " + "Answer cannot be empty";
    } else if(isNotValidAnswer.test(data.answer)) {
        errors = errors +  ", " +"Answer should be a numeric only";
    }
    return errors;
}

var routes = function (data) {
    var assetRouter = express.Router();

    assetRouter.route('/POST')
        .post(function(req, res) {
            var body = [];
            req.on('data', function (chunk) {
               body.push(chunk);
            }).on('end', function() {
                 console.log(Buffer.concat(body).toString());
                var requestBody = JSON.parse(Buffer.concat(body).toString());
    
                if(requestBody) {
                //     data.find({question: requestBody.question}, function(err, question){
                //        if (question.length > 0) {
                //            res.status(400).send('Question already existing!!');
                //        } else {
                //            var err = verifyQuestion(requestBody);
                //            if(err) {
                //                res.status(400).send(err);
                //            } else {
                //                var questionModel = new data(requestBody);
                //                questionModel.save();
                //                res.status(201).send(questionModel);
                //            }
                //        }
                //     });
                } else
                {
                   res.status(400).send('Bad Request: Did not find response in body');
                }
            });

        });
    
    assetRouter.route('/GET')
        .get(function(req, res){
            data.find(req.query, function(err, questions){
                if(err){
                                    console.log('hey')
                    res.status(500).send(err);
                } else {
                    res.json(questions);
                }
            });
        });

return assetRouter;
};

module.exports = routes;