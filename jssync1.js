function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function login() {
  await wait(2000); 
  console.log("login end");
}

async function getData() {
  await wait(8000); 
  console.log("getData end");
}

async function calculateData() {
  await wait(3000); 
  console.log("calculateData end");
}

async function sendSms() {
  await wait(1000);
  console.log("sendSms end");
}

async function logout() {
  await wait(1000); 
  console.log("logout end");
}


async function main() {
  await login();
  await getData();
  await calculateData();
  await sendSms();
  await logout();
  console.log("All tasks completed");
}

main();