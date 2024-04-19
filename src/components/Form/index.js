import TextField from '../TextField'
import './form.css'
import DropdownList from '../DropdownList'
import Button from '../Button '
import { useState } from 'react'

const Form = (props) => {

    const [name, setname] = useState('')
    const [office, setoffice] = useState('')
    const [image, setimage] = useState('')
    const [team, setTeam] = useState('')


    const ToSave = (event) => {
        event.preventDefault()
        props.toUserRegistered({
            name,
            office,
            image,
            team
        })
        setname('')
        setimage('')
        setoffice('')
        setTeam('')
    }
    return (
        <section className="form">
            <form onSubmit={ToSave}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    val={name}
                    toChange={val => setname(val)}
                />
                <TextField
                    mandatory={true}
                    label="Ocupação"
                    placeholder="Digite sua Ocupação"
                    val={office}
                    toChange={val => setoffice(val)}
                />
                <TextField
                    label="Imagem de Perfil"
                    placeholder="Digite o HTTPS:// da imagem"
                    val={image}
                    toChange={val => setimage(val)}
                />


                <DropdownList
                    mandatory={true}
                    label='Atualmente estou:'
                    itens={props.teams}
                    val={team}
                    toChange={val => setTeam(val)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}
export default Form