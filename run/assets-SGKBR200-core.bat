newman run ../tests/MODULE-assets.postman_collectionV2b.json -e ../env/SGKB-R200-TEST.postman_environment.json -d ../data/MODULE-asset.Core.SGKB-R200-TEST.json --reporters cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-export ../report/SGKBR200/assets-core.html --reporter-htmlextra-title "Assets module, Core tests" --reporter-htmlextra-titleSize 4