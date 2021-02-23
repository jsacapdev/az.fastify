# A Fastify Web Server Deployed to Azure

Create the resource group:

`az group create -n rg-nss-dev-001 -l westeurope --debug`

Create app service:

`az group deployment create --name $(uuidgen) -g rg-nss-dev-001 --template-file ./webapp.win.template.json --parameters "AppServicePlanName=plan-fastify-001" "WebAppName=app-fastify-001" --debug`
