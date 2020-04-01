import gql from 'graphql-tag';

const GET_DADOS_LOTACAO_PRINCIPAL = gql`
  {
    usuario {
      id
      nome
      documento
      genero
      contato {
        email
        telefone
      }
      cargo {
        id
        descricao
      }
      lotacao_principal {
        foro {
          id
          descricao
          municipio {
            nome
          }
        }
      }
    }
  }
`;

const GET_ALL_CARGOS = gql`
  {
    cargos {
      items {
        id
        descricao
      }
    }
  }
`
export { GET_DADOS_LOTACAO_PRINCIPAL, GET_ALL_CARGOS };