# A Fastify Web Server Deployed to Azure

Create the resource group:

`az group create -n rg-fastify-dev-001 -l westeurope --debug`

Create app service:

`az group deployment create --name $(uuidgen) -g rg-fastify-dev-001 --template-file ./webapp.template.json --parameters "AppServicePlanName=plan-fastify-001" "WebAppName=app-fastify-001" --debug`
