import validator from 'validator';
import paystack from ('paystack-api')(process.env.PAYSTACK_SECRET_KEY);
 
export const initializeTransaction = async (req, res) => {
  try {  
    const {email , amount} = req.body;
    const emailValidation = validator.isEmpty(email);
    const emailValidator = validator.isEmail(emailValidation);
    const emailString = emailValidator.toLowerCase();
    
    const amountValidation = validator.isEmpty(amount);
    const amountValidator = validator.toFloat(amountValidation)
 
    const paystackTransaction = await paystack.transaction.initialize({emailString, amountValidator});
    res.status(200).send(paystackTransaction);
  } catch (error) {
    return res.status(500).send(error.message); 
  }
}

export const verifyTransaction = async (reference, res) => {
  try {
    const verify  = paystack.transaction.verify(reference);
    return res.status(200).json(verify.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}