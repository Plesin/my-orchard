import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      orchard: Model,
    },

    seeds(server) {
      server.create('orchard', {
        id: 1,
        name: 'South Orchard',
        desc: 'The beautiful mix of apricots, apples and pears',
        count: 21,
      })
      server.create('orchard', {
        id: 2,
        name: 'North Orchard',
        desc: 'Lovely plums and peaches',
        count: 7,
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/orchards', (schema) => {
        return schema.orchards.all()
      })

      // https://github.com/miragejs/miragejs/issues/651
      // resets the namespace to the root
      this.namespace = '' // or this.namespace = "/"
      this.passthrough() // now this will pass through everything not handled to the current domain (e.g. localhost:3000)
    },
  })

  return server
}
