newman run ../tests/MODULE-brokerage.postman_collection.json -e ../env/BJB-R200-TEST.postman_environment.json -d ../data/MODULE-brokerage.Core.BJB-R200-TEST.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/BJBR200/brokerage-core.html --reporter-htmlextra-title "Brokerage module, Core tests" --reporter-htmlextra-titleSize 4