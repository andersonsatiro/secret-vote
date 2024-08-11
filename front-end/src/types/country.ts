export interface Country {
  'id': {
    'ISO-ALPHA-2': string,
    'ISO-ALPHA-3': string
    'M49': number
  },

  'nome': string,
  'regiao-intermediaria': string | null,

  'sub-regiao': {
    'id': {
      'M49': number
    },

    'nome': string,

    'regiao': {
      'id': {
        'M49': number
      },
      'nome': string
    }
  }
}