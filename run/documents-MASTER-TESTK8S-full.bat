newman run ../tests/MODULE-Documents.postman_collection.json -e ../env/MDB-MASTER-TESTK8S.postman_environment.json -d ../data/MODULE-documents.Full.MDB-MASTER-TESTK8S.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/MASTER-TESTK8S/documents-full.html --reporter-htmlextra-title "Documents module, All tests" --reporter-htmlextra-titleSize 4