newman run ../tests/MODULE-brokerage.postman_collection.json -e ../env/SOBA-R200-TEST.postman_environment.json -d ../data/MODULE-brokerage.Core.SOBA-R200-TEST.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/SOBAR200/brokerage-core.html --reporter-htmlextra-title "Brokerage module, Core tests" --reporter-htmlextra-titleSize 4