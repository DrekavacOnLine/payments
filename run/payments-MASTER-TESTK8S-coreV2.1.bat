newman run ../tests/MODULE-payments.postman_collectionV2.1.json -e ../env/MDB-MASTER-TESTK8S.postman_environmentV2.1.json -d ../data/MODULE-payments.Core.MDB-MASTER-TESTK8S.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/MASTER-TESTK8S/payments-core.html --reporter-htmlextra-title "Payments module, Core tests" --reporter-htmlextra-titleSize 4