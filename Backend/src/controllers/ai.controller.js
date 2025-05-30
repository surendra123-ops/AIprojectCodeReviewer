 const aiService = require('../services/ai.service');


module.exports.getReview = async (req, res) => {
    const code = req.body.code;
    if(!code) {
        return  res.send("Please provide a  code prompt");
    }
   const response = await aiService(code);
   res.send(response);
}