const LOW = 1;
const MEDIUM = 2;
const HIGH = 3;

function log(msg, importance){
  if(importance === LOW || importance === MEDIUM || importance === HIGH)
    console.log(msg);
}


module.exports = {
  LOW,
  MEDIUM,
  HIGH,
  log
};
