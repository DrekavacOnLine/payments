newman run ../tests/MODULE-deepLink-final.postman_collection.json -e ../env/SGKB-R200-TEST.postman_environment.json -d ../data/MODULE-deepLink.final.SGKB-R200-TEST.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/SGKBR200/deepLink-full.html --reporter-htmlextra-title "DeepLink module, All tests" --reporter-htmlextra-titleSize 4