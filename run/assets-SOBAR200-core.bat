newman run ../tests/MODULE-assets.postman_collection.json -e ../env/SOBA-R200-TEST.postman_environment.json -d ../data/MODULE-asset.Core.SOBA-R200-TEST.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/SOBAR200/assets-core.html --reporter-htmlextra-title "Assets module, Core tests" --reporter-htmlextra-titleSize 4