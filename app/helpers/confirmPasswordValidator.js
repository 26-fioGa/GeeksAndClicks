export function confirmPasswordValidator(password,confirmPassword) {
  if (!confirmPassword) return "El campo no puede estar vacío."
  if (password != confirmPassword) return "No coincide con la contraseña."
  return ''
}
