newman run ../tests/MODULE-assets.postman_collection.json -e ../env/MDB-MASTER-TESTK8S.postman_environment.json -d ../data/MODULE-asset.Core.MDB-MASTER-TESTK8S.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/MASTER-TESTK8S/assets-core.html --reporter-htmlextra-title "Assets module, Core tests" --reporter-htmlextra-titleSize 4