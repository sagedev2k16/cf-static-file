# cf-static-file
Static file deployment test for Cloud Foundry

### To deploy
cf push <app_name>
or
cf push <app_name> -b staticfile_buildpack
or
cf push <app_name> -b staticfile_buildpack -m 50M -k 50M

### CF PUSH Flags
-b: Specify the buildpack you want to use
-m: Specify the instance memory you want to allocate
-k: Specify the instance disk quota you want to allocate