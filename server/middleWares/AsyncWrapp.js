
const AsyncWrapp = (curr) => {

    return async(req , res , next) => {
        try {
          await curr (req,res,next)
        } catch (err) {
            next(err)
        }
    }

}

module.exports = {
    AsyncWrapp
};
