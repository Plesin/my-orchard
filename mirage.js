import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      orchard: Model,
      tree: Model,
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
      server.create('tree', {
        id: '1',
        orchardId: 1,
        name: 'Sweet Topaz',
        type: 'apple',
        subtype: 'Topaz',
        datePlanted: '12/03/2011',
      })
      server.create('tree', {
        id: '2',
        orchardId: 1,
        name: 'Sweet Topaz Small',
        type: 'apple',
        subtype: 'Topaz',
        datePlanted: '12/06/2009',
      })
      server.create('tree', {
        id: '3',
        orchardId: 1,
        name: 'Young Chestnut',
        type: 'chestnut',
        subtype: '',
        datePlanted: '03/08/2011',
      })
      server.create('tree', {
        id: '4',
        orchardId: 1,
        name: 'Old Appricot',
        type: 'appricot',
        subtype: 'Velkopavlovicka',
        datePlanted: '10/10/1984',
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/orchards', (schema) => {
        return schema.orchards.all()
      })

      this.get('/trees', (schema) => {
        return schema.trees.all()
      })

      // https://github.com/miragejs/miragejs/issues/651
      // resets the namespace to the root
      this.namespace = '' // or this.namespace = "/"
      this.passthrough() // now this will pass through everything not handled to the current domain (e.g. localhost:3000)
    },
  })

  return server
}
