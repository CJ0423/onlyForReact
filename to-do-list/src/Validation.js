import React from "react"

function validateName (name) {
  return name.trim() !== "" //驗證名稱不得為空，因此把空格取消掉
}

export { validateName }