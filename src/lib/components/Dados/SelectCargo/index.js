import React, { useState } from 'react';
import { Select } from '@bayon/commons';
import { Query } from 'react-apollo';
import { GET_ALL_CARGOS } from '../../../services/graphql/queries';

import debounce from '../../../Utils/debounce';

export const SelectCargo = ({ value, onChange, disabled }) => {
  const [filter, setFilter] = useState('');

  const handleInputChange = debounce(input => {
    setFilter(input);
  }, 350);

  return (
    <Query
      query={GET_ALL_CARGOS}
      variables={{ nome: filter }}
      onError={error => console.log(error)}
    >
      {({ data, loading }) => {
        let cargoOptions = data?.cargos?.items ?? [];

        cargoOptions = [
          value,
          ...cargoOptions.filter(({ id }) => id !== value.id)
        ];

        return (
          <Select
            label="Cargo"
            size="small"
            placeholder="Informe o cargo"
            required={true}
            isLoading={loading}
            disabled={disabled}
            value={value}
            onInputChange={handleInputChange}
            getOptionLabel={({ descricao }) => descricao}
            getOptionValue={({ id }) => id}
            options={cargoOptions}
            onChange={cargo => {
              console.log(cargo, 'onchange');
              onChange({ cargo });
            }}
          />
        );
      }}
    </Query>
  );
};

export default SelectCargo;
