// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
    var isoDateString = new Date().toISOString();
    reply.send({ hello: isoDateString })
})

const port = process.env.PORT || 1337;

// Run the server!
fastify.listen(port, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})

console.log("Server running at http://localhost:%d", port);
