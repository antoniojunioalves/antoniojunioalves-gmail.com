import React, { useState } from 'react';
import { Select } from '@bayon/commons';

const options = [
  { value: 'MASCULINO', label: 'Masculino' },
  { value: 'FEMININO', label: 'Feminino' }
];

export const SelectGenero = ({ valueSelect, onChange, loading }) => {
  const [inputValue, setInpuValue] = useState('');

  return (
    <Select
      name="genero"
      size="small"
      label="Gênero"
      placeholder="Escolha o gênero"
      required={true}
      disabled={loading}
      options={options}
      value={options.find(({ value }) => value === valueSelect) ?? null}
      onChange={e => onChange({ genero: e.value })}
      inputValue={inputValue}
      onInputChange={response => setInpuValue(response)}
    />
  );
};

export default SelectGenero;
