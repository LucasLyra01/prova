import React, { useState, useEffect } from 'react';

import { Button, Grid, TextField } from '@material-ui/core';

function initialState(){
    return { nome: '' }
}

const Home = () => {

    const [ values, setValues ] = useState(initialState);

    function PegaDados({ nome }) {
        
        console.log(nome);

    }

    function onChange(event){
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    function onSubmit(event){
        event.preventDefault();

        PegaDados(values);
    }

    return(
        <Grid container>
            <form onSubmit={onSubmit}>
                <TextField
                    required
                    fullWidth
                    id='nome'
                    label='Nome'
                    name='nome'
                    onChange={onChange}
                    value={values.name}
                    >

                </TextField>

                <Button type="submit">Entrar</Button>
            </form>
        </Grid>
    );
};

export default Home;