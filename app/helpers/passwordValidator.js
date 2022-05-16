export function passwordValidator(password) {
  if (!password) return "El campo no puede estar vacío."
  if (password.length < 5) return 'La contraseña debe tener al menos 5 caracteres.'
  return ''
}
