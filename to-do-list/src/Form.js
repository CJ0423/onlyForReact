import React, { useState } from 'react'
import Reset from './reset-button'//這樣的話可以使用這個資料的結果
import { validateName } from './Validation'

function Form () {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateName(name)) {
      alert('請輸入有效的名稱')
      return
    }
  }
  const handleNameChange = (event) => {
    setName(event.target.value)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          名稱：
          <input type="text" name={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          郵箱：
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">提交</button>
        <Reset />
      </form>
    </>)
}//最需要記得的就是return 要把資料回傳的部分

export default Form//允許ＦＯＲＭ組建被導出，簡單來說就是其他地方也能使用
