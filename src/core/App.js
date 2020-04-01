import React from 'react';

import { Loader, EmptyState } from '@bayon/commons';

import { Query } from 'react-apollo';
import { GET_DADOS_LOTACAO_PRINCIPAL } from '../services/graphql/queries';

import Dados from '../components/Dados';
import LotacaoPrincipal from '../components/LotacaoPrincipal';

const StyledLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: 15}}>
    <Loader
      size="large"
      color="blue"
      label="Loading..."
    />
  </div>
);

const App = () => {
  return (
    <>
     <Query query={GET_DADOS_LOTACAO_PRINCIPAL}>
        {({ loading, data, error }) => {
          if (loading) return (<StyledLoader />);

          if (error) {
            const [, , message] = error.message.split(':');

            return (<EmptyState title="Não exitem registros" icon="Fail" subtitle={message}/>)
          };
          if (data) {
            const {usuario = {}} = data || {};
            const { lotacao_principal : { foro } = {} } = usuario;

            return (
              <>
                <Dados usuario={usuario} />
                <LotacaoPrincipal foro={foro} />
              </>
            );
          }
        }}
      </Query>
    </>    
  );
}

export default App;
