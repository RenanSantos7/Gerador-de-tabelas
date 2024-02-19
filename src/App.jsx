import './App.css'
import EditarTabela from './components/EditarTabela/EditarTabela'
import FormInicio from './components/FormInicio/FormInicio'
import SecCodigo from './components/SecCodigo/SecCodigo'

export default function App() {

  return (
    <>
      <h1>Gerador de Tabelas</h1>
      <FormInicio />

      <EditarTabela />
      
      <SecCodigo />
    </>
  )
}
