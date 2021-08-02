const EnvVars = {
  develop: {
    baseUrl: 'http://192.168.8.119:8001/v1',
    wsBroadcaster: 'pusher',
    wsHost: '192.168.8.119',
    wsPort: '6001',
    wsKey: 'mtgh_app_key_24563752081436748',
    wsForceTLS: false,
    wsEncrypted: false,
    wsDisableStats: true,
    wsAuthEndpoint: 'http://192.168.8.119:8001/broadcasting/auth'
  },
  staging: {
    baseUrl: ''
  },
  prod: {
    baseUrl: 'example.com',
  },
}

export default EnvVars
