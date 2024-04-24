import { useState } from 'react'
import axios from 'axios'
import NavBar from '../common/navBar'
export default function SupCreateMarkingSchemes() {
  const [selectSub, setSelectSub] = useState('dd')
  const [selectPosition, setPosition] = useState('dd')
  const [selectEvaluType, setEvaluType] = useState('dd')
  const [formFields, setFormFields] = useState([])
  console.log(selectPosition, selectSub, selectEvaluType)

  const addFields = () => {
    let object = {
      citerion: '',
      vgood: '',
      avg: '',
      poor: '',
      totMark: '',
      mark: '',
      specalization: selectSub,
      position: selectPosition,
      evaluation: selectEvaluType,
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields]
    data.splice(index, 0)
    setFormFields(data)
  }
  const handleFormChange = (event, index) => {
    let data = [...formFields]
    data[index][event.target.name] = event.target.value
    setFormFields(data)
  }
  async function Submit(e) {
    e.preventDefault()
    console.log(formFields)

    axios

      .post('http://localhost:5000/markingScheme/add/', formFields)

      .then((res) => console.log(res.data))
  }

  return (
    <div>
      <NavBar />
      <div className='container mt-5'>
        <h1>Create Marking Scehme</h1>
        <select
          value={selectSub}
          onChange={(e) => setSelectSub(e.target.value)}
        >
          <option selected='selected'>Information Technology</option>
          <option selected='selected'>Software Engineering</option>
          <option selected='selected'>Data Science</option>
          <option selected='selected'>Cyber Security</option>
          <option selected='selected'>Intractive Media</option>
          <option selected='selected'>Network Engineering</option>
        </select>
        <br />
        <br />
        <form onSubmit={Submit}>
          <select
            value={selectPosition}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option selected='selected'>Panel Member</option>
            <option selected='selected'>Supervisor</option>
          </select>
          <br />
          <br />

          <select
            value={selectEvaluType}
            onChange={(e) => setEvaluType(e.target.value)}
          >
            <option selected='selected'>Evaluation 1</option>
            <option selected='selected'>Evaluation 2</option>
            <option selected='selected'>Final Evaluation</option>
            <option selected='selected'>Document 1</option>
            <option selected='selected'>Document 2</option>
            <option selected='selected'>Final Document</option>
          </select>
          <br />
          <br />
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <textarea
                  name='citerion'
                  placeholder='Citerion'
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.citerion}
                />
                <textarea
                  name='vgood'
                  placeholder='Very good'
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.vgood}
                />
                <textarea
                  name='avg'
                  placeholder='Average'
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.avg}
                />
                <textarea
                  name='poor'
                  placeholder='Poor'
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.poor}
                />
                <textarea
                  name='totMark'
                  placeholder='Total mark'
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.totMark}
                />

                {/* <button onClick={() => removeFields(index)}>Remove</button> */}
              </div>
            )
          })}
        </form>
        <button onClick={addFields}>Add More..</button>
        <br />
        <br />
        <br />
        <button className='center col-2' onClick={Submit}>
          Submit
        </button>
      </div>
    </div>
  )
}
