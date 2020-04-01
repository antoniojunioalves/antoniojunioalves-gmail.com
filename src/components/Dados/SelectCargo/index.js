import React from 'react';
import { Select } from '@bayon/commons';
import { Query } from 'react-apollo';
import { GET_ALL_CARGOS } from '../../../services/graphql/queries';
 
export const SelectCargo = ({ value, onChange, comPaiIsLoading }) => {
  return (
    <Query
      query={GET_ALL_CARGOS}
      onError={error => console.log(error)}
    >
      {({ data, loading }) => (
        <Select
          label="Cargo"
          required={true}
          isLoading={loading}
          disabled={comPaiIsLoading}
          value={value}
          placeholder="Informe o cargo"
          getOptionLabel={option => option.descricao}
          getOptionValue={option => option}
          options={data?.cargos?.items ?? []}
          onChange={cargo => {
            console.log(cargo, "onchange")
            onChange({ cargo });
          }}
        />
      )}
    </Query>
  );
};
 
export default SelectCargo;