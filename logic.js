// const encryptorContainer = document.querySelector("encryptor-container")
const encryptorTextArea = document.querySelector("#encryptor-textarea")
const encryptedMessage = document.querySelector("#encrypted-message")
const encryptedButton = document.querySelector("#encrypted-button")

const decryptorTextArea = document.querySelector("#decryptor-textarea")
const decryptedMessage = document.querySelector("#decrypted-message")
const decryptedButton = document.querySelector("#decrypt-button")

function encrypt(string) {
    const arr = string.split("")
    const target = []

    arr.forEach(char => {
        const code = char.charCodeAt(0)
        target.push(String.fromCharCode(code + 5))
    })

    return target.join("")
}

function decrypt(string) {
    const arr = string.split("")
    const target = []

    arr.forEach(char => {
        const code = char.charCodeAt(0)
        target.push(String.fromCharCode(code - 5))
    })

    return target.join("")
}

encryptedButton.addEventListener("click", () => {
  const text = encryptorTextArea.value
  encryptedMessage.innerHTML = encrypt(text)
  encryptorTextArea.value = ""
})

decryptedButton.addEventListener("click", () => {
  const text = decryptorTextArea.value
  decryptedMessage.innerHTML = decrypt(text)
  decryptorTextArea.value = ""
})
