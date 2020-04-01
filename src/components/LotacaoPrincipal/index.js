import React from 'react';
import { Grid, Typography, Input } from '@bayon/commons';

const LotacaoPrincipal = ({ foro }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>
          Lotação Principal
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Input fullWidth disabled name="idForo" label="ID foro" size="small" value={foro?.idForo ?? ''} />
      </Grid>
      <Grid item xs={3}>
        <Input fullWidth disabled name="descricaoForo" label="Descrição" size="small" value={foro?.descricao ?? ''} />
      </Grid>
      <Grid item xs={4}>
        <Input fullWidth disabled name="nomeMunicipio" label="Nome do município" size="small" value={foro?.municipio?.nome ?? ''} />
      </Grid>
    </Grid>
  );
}

export default LotacaoPrincipal;