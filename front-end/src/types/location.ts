export interface Location {
  'id': {
    'ISO-ALPHA-2': string,
    'ISO-ALPHA-3': string
    'M49': number
  },

  'nome': string,
  'regiao-intermediaria': string | null,

  'sigla': string,

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