import React, { useState } from 'react';
import { Select } from '@bayon/commons';
 
export const SelectGenero = ({ value, onChange, loading }) => {
  const [inputValue, setInpuValue] = useState('');

  const options = [
    { value: 'MASCULINO', label: 'Masculino' },
    { value: 'FEMININO', label: 'Feminino' }
  ];

  return (
    <Select
      size="medium"
      required={true}
      disabled={loading}
      options={options}
      label="Gênero"
      value={options.find(genero => genero.value === value)}
      onChange={e => onChange({ genero: e.value })}
      inputValue={inputValue}
      onInputChange={response => setInpuValue(response)}      
    />
  );
};
 
export default SelectGenero;