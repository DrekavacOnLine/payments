newman run ../tests/MODULE-deviceManager_authenticationPush.postman_collection.json -e ../env/MDB-MASTER-TESTK8S.postman_environment.json -d ../data/MODULE-deviceManager.Core.MDB-MASTER-TESTK8S.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/MASTER-TESTK8S/deviceManagerAuthPush-core.html --reporter-htmlextra-title "Device manager & Auth push module, Quick tests" --reporter-htmlextra-titleSize 4