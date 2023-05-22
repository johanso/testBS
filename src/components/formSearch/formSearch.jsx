import React, { useState } from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import * as Styled from './formSearch.styled'
import { Input } from '../input'
import { Switch } from '../switch'
import Iconcar from '../../svg/Iconcar.svg'
import CalendarFrom from '../../svg/IconCalendar-from.svg'
import CalendarTo from '../../svg/IconCalendar-to.svg'
import Search from '../../svg/Search.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSearch = () => {
  const [inputLocation, setInputlocation] = useState("")
  const [dateUno, setDateUno] = useState("")
  const [dateDos, setDateDos] = useState("")

  const today = new Date();
  const tomorrow = new Date(Date.now() + ( 3600 * 1000 * 24));
  const format = "DD MMM"
  const formatYear = "DD MMM YYYY"

  const handleSubmit = (e) => {
    e.preventDefault()
    if( inputLocation === "" || dateUno.trim() === "" || dateDos.trim() === "" ) {
      toast.error('Todos los campos son requeridos');
      return
    } 
    toast.success('Realizando consulta');
    setInputlocation("")
  }

  const handleLocation = (value) => {
    setInputlocation(value)
  }

  return (
    <Styled.FormSearch onSubmit={ handleSubmit }>

      <Styled.ContainerInput>
        <Styled.InputGrid>
          <img className="image" src={Iconcar} alt="icon car" width="26" />
          <Input 
            id="pickup"
            placeholder="Ciudad, aeropuerto o dirección" 
            type="text"
            label="Localidad de Retiro" 
            handleLocation={handleLocation}
            value={inputLocation}
            />
        </Styled.InputGrid>
      </Styled.ContainerInput>

      <Styled.InputControl>
        <Switch placeholder="lo quiero devolver en otra localidad" />
      </Styled.InputControl>

      <Styled.ContainerInput className="flex">
        <Styled.InputGrid className="half">
          <img className="image" src={CalendarFrom} alt="icon car" width="24" />
          <label className="label">Recogida</label>
          <DatePicker
            showToday={false}
            format={format}
            onChange={(date) => setDateUno(moment.utc(date.$d.getTime()).format(formatYear))}
            suffixIcon={false}
            bordered={false}
            placeholder={ moment.utc(today).format(format) }
          />
        </Styled.InputGrid>

        <Styled.InputGrid className="half">
          <img className="image" src={CalendarTo} alt="icon car" width="24" />
          <label className="label">Devolucion</label>
          <DatePicker
            showToday={false}
            format={format}
            onChange={(date) => setDateDos(moment.utc(date.$d.getTime()).format(formatYear))}
            suffixIcon={false}
            bordered={false}
            placeholder={ moment.utc(tomorrow).format(format) }
          />
        </Styled.InputGrid>
      </Styled.ContainerInput>

      <Styled.ButtonSearch>
        <img src={Search} alt="icon search" width="26" />
      </Styled.ButtonSearch>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </Styled.FormSearch>
  )
}

export default FormSearch