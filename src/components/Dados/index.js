import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Grid, Input, Typography, Button, useToast } from '@bayon/commons';
import { UPDATE_USUARIO } from '../../services/graphql/mutations';
import SelectGenero from './SelectGenero';
import SelectCargo from './SelectCargo';

const Dados = ({ usuario }) => {
  const { enqueueToast } = useToast();
  const [usuarioForm, setUsuarioForm] = useState(usuario);
  const handleInputOnChange = novoCampoUsuario => setUsuarioForm({ ...usuarioForm, ...novoCampoUsuario });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>
          Dados do usuario 
        </Typography>
      </Grid>
      <Mutation
        mutation={UPDATE_USUARIO}
        onCompleted={({ update_usuario }) => {
          setUsuarioForm(update_usuario);
          enqueueToast('Usuário atualizado com sucesso!', { type: 'success' });
        }}
        onError={() => {
          setUsuarioForm(usuario);
          enqueueToast('Não foi possível atualizar o usuário!', { type: 'error' });
        }}
      >
        {(updateUsuario, { loading }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              updateUsuario({ variables: usuarioForm });
            }}
          >
            <Grid container >
              <Grid item xs={1}>
                <Input 
                  fullWidth 
                  disabled 
                  required
                  name="id" 
                  label="ID" 
                  size="small" 
                  value={usuarioForm?.id || ''}
                />
              </Grid>
              <Grid item xs={3}>
                <Input 
                  fullWidth
                  required
                  disabled={loading}
                  name="nome" 
                  label="NOME" 
                  size="small" 
                  value={usuarioForm?.nome || ''}
                  onChange={(e) => {
                    e.persist();
                    handleInputOnChange({nome: e.target.value})
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <SelectGenero loading={loading} value={usuarioForm?.genero || ''} onChange={genero => handleInputOnChange(genero)} />
              </Grid>
              <Grid item xs={4}>
                <Input 
                  fullWidth 
                  required
                  disabled={loading}
                  name="documento" 
                  label="DOCUMENTO" 
                  size="small" 
                  value={usuarioForm?.documento || ''}
                  onChange={(e) => {
                    e.persist();
                    handleInputOnChange({documento: e.target.value})
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Input 
                  fullWidth 
                  disabled={loading}
                  name="telefone" 
                  label="TELEFONE" 
                  size="small" 
                  value={usuarioForm?.contato?.telefone || ''}
                  onChange={(e) =>{
                    e.persist();
                    setUsuarioForm((currentUsuario) => ({
                      ...currentUsuario,
                      contato: {
                        ...currentUsuario.contato,
                        telefone: e.target.value
                      }
                    }))
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Input 
                  fullWidth
                  disabled={loading} 
                  name="email" 
                  label="EMAIL" 
                  size="small" 
                  value={usuarioForm?.contato.email || ''}
                  onChange={(e) =>{
                    e.persist();
                    setUsuarioForm((currentUsuario) => ({
                      ...currentUsuario,
                      contato: {
                        ...currentUsuario.contato,
                        email: e.target.value
                      }
                    }))
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <SelectCargo onChange={cargo => handleInputOnChange(cargo)}  value={usuarioForm?.cargo} comPaiIsLoading={loading}/>
              </Grid>
            </Grid>
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
            >
              Atualizar dados do usuário
            </Button>
          </form>
        )}  
      </Mutation>
    </Grid>
  ); 
}

export default Dados;