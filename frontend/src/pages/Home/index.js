import React, { useState, useEffect } from 'react';

import { Button, Grid, TextField } from '@material-ui/core';

import axios from 'axios';

function initialState(){
    return { nome: '' }
}

const Home = () => {

    const [ values, setValues ] = useState(initialState);
    const [ valor, setValor ] = useState('');

    function PegaDados({ nome }) {
        
        // console.log(nome);

        axios.get('http://localhost:5000/api/cadastro')
            .then( (response) => {
                let dados = response.data.message;
                console.log(dados);
            })
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
                    // required
                    fullWidth
                    id='nome'
                    label={valor}
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