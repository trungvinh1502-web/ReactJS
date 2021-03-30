import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonAction } from '../store/actions';
import { Form, Input, Button } from 'antd';

const Pokemon = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState();

    const store = useSelector(state => state.pokemonReducer)
    const { list } = store

    //
    useEffect(() => {
        dispatch(pokemonAction.listPokemon())
    }, [])

    //
    useEffect(() => {
        if (list) {
            setData(list)
        }
    }, [list])

    const onSubmit = (e) => {
        const { id, name } = e
        const arr = []
        arr.push(e)
        setData(data.concat(arr))
        dispatch(pokemonAction.listPokemon({ id: id, name: name }))
    }

    return (
        <div>
            <div>
                <h3>Nhap</h3>
                <Form
                    name="basic"
                    onFinish={onSubmit}>
                    <Form.Item
                        label="ID"
                        name="id">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>

            <h2>List Pokemon</h2>
            {data && data.length && data.map((value, index) => {
                return (
                    <div key={index}>
                        <h5>Id  :{value.id}</h5>
                        <span>Name:  {value.name}</span>
                    </div>
                )
            })}
        </div>
    )
}
export default Pokemon