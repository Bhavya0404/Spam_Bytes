import { Client, ApiController } from '@bandwidth/voice';

const BW_USERNAME = "api-username";
const BW_PASSWORD = "api-password";
const BW_ACCOUNT_ID = "12345";
const BW_VOICE_APPLICATION_ID = "1234-qwer";
const BW_NUMBER = "+15554443333";
const USER_NUMBER = "+15553334444";
const VOICE_CALLBACK_URL = process.env["BASE_CALLBACK_URL"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);
const accountId = BW_ACCOUNT_ID;
const callId = 'c-abc12345-6defabc1-2345-6def-abc1-23456defabc1';

const makeCall = async function() {
  try {
    const response = await controller.createCall(accountId, {
        applicationId: BW_VOICE_APPLICATION_ID,
        to: USER_NUMBER,
        from: BW_NUMBER,
        answerUrl: VOICE_CALLBACK_URL,
        answerMethod: 'POST',
        callTimeout: 30
    });
    console.log(response.body);
  } catch(error) {
      console.error(error);
  }
}

const getCall = async function() {
    try {
        const response = await controller.getCall(accountId, callId);
        console.log(response)
    } catch(error) {
        console.error(error);
    }
  }

  const modifyCall = async function() {
    try {
        const response = await controller.modifyCall(accountId, callId, {
          state: "active",
          redirectUrl: "http://www.myapp.com/new"
        });
        console.log(response)
    } catch(error) {
        console.error(error);
    }
  }


makeCall();
getCall();
modifyCall();
  

