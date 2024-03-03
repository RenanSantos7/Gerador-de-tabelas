import { useState } from 'react'
import './App.css'
import FormInicio from './components/FormInicio/FormInicio'
import EditarTabela from './components/EditarTabela/EditarTabela'
import SecCodigo from './components/SecCodigo/SecCodigo'

export default function App() {

  const [colunas, setColunas] = useState(2)
  const [linhas, setLinhas] = useState(3)
  const [vertical, setVertical] = useState(true)
  
  const [editar, setEditar] = useState(false)
  const [codigo, setCodigo] = useState(false)

  return (
    <main>
      <h1>Gerador de Tabelas</h1>
      <FormInicio
        colunas={colunas}
        setColunas={setColunas}
        linhas={linhas}
        setLinhas={setLinhas}
        mostraSecEditar={setEditar}
      />

      <EditarTabela
        linhas={linhas}
        colunas={colunas}
        vertical={vertical}
        setVertical={setVertical}
        exibir={editar}
      />
      
      <SecCodigo />
    </main>
  )
}
