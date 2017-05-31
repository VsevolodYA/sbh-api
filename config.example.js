module.exports = {
    secret: '', //jwt secret
    host : 'http://', //host
    db : process.env.db || '',   // mongodb localhost mongodb://localhost:27017/slap
    mailer : {
        accessKeyId: "", //AWS
        secretAccessKey: "", //AWS
        rateLimit: 5,  // do not send more than 5 messages in a second
        region : '' //region AWS
    },
    emailAddressAdmin : '', //AWS adress
    emailAddressSupport : '', //AWS adress
    stripe_key : 'sk_test_T3Cta1rkPcNP4U41MBgjp4cj'  // stripe key
};