const admin= require("firebase-admin");
const credentials = {
    "type": "service_account",
    "project_id": "backendassignment-a887c",
    "private_key_id": "790fc5eac2e0eb1d09cdbf0bb9f26ed47d66c659",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWlpFp91rPuO39\nYbNT779qQbYeOTkvuPFenQtk17UYhR/CWBCRkWp1qCvqo75fw/12PxXdXJPnoYXi\ng0iGRr51Spz6Hvr+LxJSTOoEgFltYEWOAFTTxYWPBBaNY7rEEJw+kuTyqFfALz0/\nZFezF7Jmn7XxO2asy9skOmY1XPMPpja/kZtlW/OOKtHzru/dK/RAQY/MPcZlGki2\nN0zG8t6kZOwE+OfMs4iCn65TCkIsh+H71CENlJjU09JQMuj53dB1uhoKj/6fcNHt\nVvciy1jKxLudVQEG2ZszkIetU60ogmAfx9MklK7MzcT6dwQGvjH65RiTMmHeAaa2\nNY73lKTzAgMBAAECggEAG934Krbk3qvz5XS4zpzdvU/6SsjV9y9r0lnPqdFkzbc1\nYs4qnKox6pn5K2KyAuAXZtyWG3tTI9YIkTFztihdbIBQ4XSA1jNJDFIRDp5CaXSt\nTl3BplzKKu1Le8y964oCrbzy1DEYxYxSRmINYjnLa7iwQ+XEat/waK8tfcmWhmtW\nW2IWM876Bbz6kJ2e2ZpiPTrP0OILsoeu59cT8U7yg2fintcan4HRw0314N9Yi8O5\nJzyGnjz/VLd9SfPtJPzhWmpfVgJNgewf+vTqym/H+6TlidqH4IQgXS01lwwBE/60\nYbBFJDhWcylt3WPa99gfsN4+6mgqDGd2ssG7PiMvUQKBgQDya3UXabFq0wbX7ySC\n08NQ1hlzYvHsxqsJKAADfu05CcZ/7KO2rNxdviq77ox5w36e8wzJ0lESgdZn1wse\ngxzc7HrXUq+TFJo3ObfV8UQblF9BzOUocDzvREHQmMnBozlGDNezObhtTeUPltaB\ncE767cGXB8aPPz5zeDSmCWVmcQKBgQDim/pB9k6AYzf6885YlgwsnO8dRIncdYfB\nO1PxfkdGePkhcQKGZ+mJktv+OUfaZPel2ycq86qhJgL+1hBfBzbAbrhsK87ja/Kn\n+/XdrgoXb2PpRo0fDsdblr8sdkidMvwtf5cFE7LckdPZBgdSCJuTcfdpR/NtNzqp\nfgyuUd6bowKBgGPJifRuRGLFpP6D6RKVWsPOrcFKjG07xjHJrl/CAqJE/Nmxrh5G\n/5ry6aJcaqTArUF+qNf24/prSbeK1H/l1p62FUbHOZCgnW54Ks09OBzmMWPjlLzV\nnq+a+ECGdB5qMuw74xpaeyk7NDv7iibT9R7jeZnS0JAsp2depsVl/sBxAoGAPoFh\nlSI4Ywd7IHhxeVPiBcg/2GXYVPwCNxWDQQBg7ppdtZCzbplo/G6KyePI4v+oo5IA\nisNtVEfk2Z/4Ig4eVxPzQLsQtQBIjXddSQlBdVdfSrAQKvnrmWLKVpxFyT6P+ojQ\nAjF9y4NZ2OnlyQXgy9nKsbqL9ZsfTjMbklW4vlsCgYEAl29MSPwP9bRDLW1cgiZU\nsyk/cr+1J5HPN/i4cyKkePwGs6v7XS/sveF8v6oDJd/gpiSy2uibs8nNXSmKXeK0\nFWUhP2YyRCebBcEiMA4o5Fr6SiYQvWtRaX+rOqa1WlFFo+kdg1c+1x1H8kD9cbz/\nD8KmX3alLKxg/KOxlB2CxgI=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-sjm3d@backendassignment-a887c.iam.gserviceaccount.com",
    "client_id": "113401430447871119376",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sjm3d%40backendassignment-a887c.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
admin.initializeApp({
    credential: admin.credential.cert(credentials)

});

const db =admin.firestore();
module.exports = db;