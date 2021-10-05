//https://docs.google.com/spreadsheets/d/1ed1q9sCQPuIdnTfH5-8dcb2yTQjQPHY4wfN_ByaMJwc/edit#gid=0

var ss = SpreadsheetApp.openById('1ed1q9sCQPuIdnTfH5-8dcb2yTQjQPHY4wfN_ByaMJwc');
var sheet = ss.getSheetByName('Sheet1');

function doPost(e) {
  var val = e.parameter.value;
  
  if (e.parameter.value !== undefined){
    var range = sheet.getRange('A2');
    range.setValue(val);
  }
}

function doGet(e){
  //----------------------------------------------------------------------------------
  //there are two code blocks in doGet function. code block 1 and 2.
  //read_google_sheet() function in esp32 sketch, is relate to the first code block
  //write_google_sheet() function in esp32 sketch, is relate to the second code block
  //----------------------------------------------------------------------------------
  //code block 1
  //send data to ESP32
  var read = e.parameter.read;

  if (read !== undefined){
    return ContentService.createTextOutput(sheet.getRange('A1').getValue());
  }
  //----------------------------------------------------------------------------------
  //code block 2
  //get command from ESP32
  relay_number = e.parameters.relay_number;
  relay_state = e.parameters.relay_state;

  if (relay_number !== undefined && relay_state !== undefined){
    update_relay_state(relay_number, relay_state);
    return ContentService.createTextOutput("Status Updated in Google Sheet");
  }
  //----------------------------------------------------------------------------------
}

function update_relay_state(relay_number, relay_state){
  //------------------------------------------------
  if(relay_number == 1){
    var range = sheet.getRange("B2");
    if(relay_state == 1){
      range.setValue("ON");
    } else{
      range.setValue("OFF");
    }
  }
  //------------------------------------------------
  else if(relay_number == 2){
    var range = sheet.getRange("C2");
    if(relay_state == 1){
      range.setValue("ON");
    } else{
      range.setValue("OFF");
    }
  }
  //------------------------------------------------
  if(relay_number == 3){
    var range = sheet.getRange("D2");
    if(relay_state == 1){
      range.setValue("ON");
    } else{
      range.setValue("OFF");
    }
  }
  //------------------------------------------------
  if(relay_number == 4){
    var range = sheet.getRange("E2");
    if(relay_state == 1){
      range.setValue("ON");
    } else{
      range.setValue("OFF");
    }
  }
  //------------------------------------------------
}